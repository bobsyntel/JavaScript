print "test"

print """
		Allows to print multiple times
  """

name = "bob igbarumah"

print "Hello world, my name is %s " % name

# Python Data Types
# Strings
# Number
# Boolean
# lists = array
# dictionary = js object, key value pair

my_dictionary = {
	"name" : "bob",
	"occupation" : "software Engineer"
}
print(my_dictionary["name"])
print type(True)

# Conditionals
print 16 == "16"

if(16 == 16):
	print "16s are equal"

import random

keep_playing = True;
correct_number = random.randint(1,10)
while keep_playing:
	# 
	guess = int(raw_input("Guess a Number between 1 and 10"))
	if(guess == correct_number):
		print "Hooray "
		keep_playing = False;
	else:
		print "Try again"
		pass

	