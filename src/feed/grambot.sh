#!/bin/zsh

# This file is GPL v3.

# This script does the task of invoking tg-cli with the right arguments
# You need to edit two things here: the TGDIR and the -p argument value
# Refer README.md for more

# The directory in which tg-cli is stored is $1

RANDFILE=$RANDOM
echo $2 > $RANDFILE

COMMAND=""
for CHAT in "${@:3}"
do
  COMMAND="${COMMAND}send_text ${CHAT} ${RANDFILE}\n"
done

# Remove the "-p kl" if you don't want a separate profile for the bot.
# Otherwise, create a profile named kl, or change kl to your profile name
# The profile need to be saved in config.sample in tg-cli directory
echo "${COMMAND}" | $1/bin/telegram-cli -W -D -k $1/server.pub -c $1/config.sample

rm -f $RANDFILE
