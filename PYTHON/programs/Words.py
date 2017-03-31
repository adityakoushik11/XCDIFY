import random


def get_random_word():
    words = ["pizza", "cheese", "apple"]
    word = words[random.randint(0, len(words)-1)]
    return word


def show_word(word):
    for character in word:
        print(character, " ", end="")
    print("")


def get_guess():
    print("enter the letter")
    return input()


def process_letter(letter, secret_word, blank_word):
    result = False
    for i in range(0, len(secret_word)):
        if secret_word[i] == letter:
            result = True
            blank_word[i] = letter
    return result


def print_strike(no_of_strikes):
    for i in range(0, no_of_strikes):
        print("X ", end="")
        print("")


def play_word_game():
    word = get_random_word()
    blank_word = list("_" * len(word))
    strike = 0
    max_strikes = 3
    playing = True

    while playing:
        show_word(blank_word)

        letter = get_guess()
        found = process_letter(letter, word, blank_word)

        if not found:
            strike += 1
            print_strike(strike)
        if strike >= max_strikes:
            playing = False
        if not "_" in blank_word:
            playing = False

    if strike >= max_strikes:
        print("loser")
    else:
        print("winner")


print("get started")
play_word_game()
print("game over")
