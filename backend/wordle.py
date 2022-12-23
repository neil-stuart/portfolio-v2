from pickle import load
from copy import copy
import sys
from ast import literal_eval
import json
import random

GRAYS = []
GREENS = []  
YELLOWS = []
GUESSES = [[],[],[],[],[],[]]


# Read in the dictionary of 2000 wordle words
with open('./words_dump.pkl', 'rb') as file:
    WORDS = load(file)
    WORDS = [i.upper() for i in WORDS]

# Process an argument from the server which comes in the form 'LLLLL,PPPPP' L= letter, P =Position
def process_arg(data):
    guesses = []


    d1, d2 = data[0],data[1]
    d1 = [d1[i:i+5] for i in range(0, 25, 5)]
    
    keep_letters = []
    for i in d1:
        if '' not in i:
            keep_letters.append(i)
    
    letters_guesses = keep_letters;
    colors_guesses = [d2[i:i+5] for i in range(0, 5*(len(letters_guesses)), 5)]

    for letters, colors in zip(letters_guesses,colors_guesses):

        guess = []
        for letter, colour, position in zip([i for i in letters], [i for i in colors], range(0,5)):
            guess.append([letter, colour, position])
        guesses.append(guess)

    return guesses




def sort():
    for guess in GUESSES:
        # let_color_pos = [letter (eg. 'a'), color (eg. '1' [Gray]), position (eg. '3' [3rd place in string])]
        # 1 - GRAY , 2 - YELLOW, 3 = GREEN.
        for let_color_pos in guess:
                # Gray ... GRAYS = list of characters
                if let_color_pos[1] == 1 and let_color_pos[0] not in GRAYS:
                    if let_color_pos[0] not in [i[0] for i in GREENS]:
                        GRAYS.append(let_color_pos[0])

                # Yellow ... YELLOWS = list of characters and positions.
                elif let_color_pos[1] == 2:
                    let_pos = [let_color_pos[0], let_color_pos[2]]
                    if let_pos not in YELLOWS:
                        YELLOWS.append(let_pos)

                # Green ... GREENS = list of characters and positions.
                elif let_color_pos[1] == 3:
                    let_pos = [let_color_pos[0], let_color_pos[2]]
                    if let_pos not in GREENS:
                        GREENS.append(let_pos)

def solve():
    solutions = copy(WORDS)

    for word in WORDS:
        # Remove words with yellow in that position, and words without the yellow letter.
        for letter,position in YELLOWS:
            if ((letter not in word) or word[position] == letter) and (word in solutions):

                solutions.remove(word)

        # Remove words containing the grey letter.
        for letter in GRAYS:
            if (letter in word) and (word in solutions):
                if letter not in [i[0] for i in YELLOWS]:

                    solutions.remove(word)

        # Remove words not containing the green letter in the greens position.
        for letter,position in GREENS:
            if(word[position] != letter) and (word in solutions):

                solutions.remove(word)

    return solutions

if __name__ == "__main__":
    
    data = literal_eval(sys.argv[1])
    GUESSES = process_arg(data)

    if(GUESSES):
        # Sort sorts the yellows greens and greys into their own lists.
        # This is a precursor to the solve function.
        sort()

        ans = solve()
        random.shuffle(ans)
        with open('output.txt', 'w') as f:
            f.write(json.dumps(ans))