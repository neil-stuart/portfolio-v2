from pickle import dump
from csv import reader

wordlist = []

with open("./wordle/words.txt", 'r') as file:
    words = reader(file, delimiter=" ")
    for i in words:
        word = i[0]
        if len(word) == 5:
            wordlist.append(word)

with open('./wordle/words_dump.pkl', 'wb') as out:
    dump(wordlist, out)