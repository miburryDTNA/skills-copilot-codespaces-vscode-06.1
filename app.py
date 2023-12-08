# write 'hello world' to the console
print('hello world')

import random

valid_choices = ['rock', 'paper', 'scissors']
player_score = 0

while True:
    player_choice = input("Enter your choice (rock, paper, or scissors): ").lower()
    if player_choice not in valid_choices:
        print("Invalid choice. Please try again.")
        continue

    computer_choice = random.choice(valid_choices)

    if player_choice == computer_choice:
        print(f"It's a tie! Both you and the computer chose {player_choice}.")
    elif (player_choice == 'rock' and computer_choice == 'scissors') or \
         (player_choice == 'scissors' and computer_choice == 'paper') or \
         (player_choice == 'paper' and computer_choice == 'rock'):
        player_score += 1
        print(f"You win! {player_choice} beats {computer_choice}.")
    else:
        print(f"You lose! {computer_choice} beats {player_choice}.")

    play_again = input("Do you want to play again? (yes/no): ").lower()
    if play_again != 'yes':
        break

print(f"Your score: {player_score}")