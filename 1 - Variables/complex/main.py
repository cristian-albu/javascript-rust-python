# Python complex data types

# https://www.youtube.com/watch?v=W8KRzm-HUcc&list=RDCMUCCezIgC97PvUuR4_gbFUs5g&start_radio=1 more on lists, tuples, and sets

# ---------------LISTS-----------------

list = ["First", "Second", "Third"]
list[0] # > "First"
list[-1] # > "Third"
#  list[4] > list index out of range
len(list) # > 3

# Slicing in python
list[0:2] # > "First", "Second"
list[:2] # > "First", "Second"
list[1:] # > "Second", "Third"


list.append("Fourth") # > ["First", "Second", "Third", "Fourth"]
list.insert(0,"BeforeFirst") # > ["BeforeFirst", "First", "Second", "Third", "Fourth"]
list2 = ["OtherFirst", "OtherSecond"]
list.insert(0, list2) # > [['OtherFirst', 'OtherSecond'], 'BeforeFirst', 'First', 'Second', 'Third', 'Fourth']
list.remove(list2) # > [ 'BeforeFirst', 'First', 'Second', 'Third', 'Fourth']
popped = list.pop() # > popped= "Fourth"; list=['BeforeFirst', 'First', 'Second', 'Third']
list.extend(list2) # > ['BeforeFirst', 'First', 'Second', 'Third', 'Fourth', 'OtherFirst', 'OtherSecond']

empty_list1 = []

print(list)

# Good to remember: Lists are mutable


# ---------------TUPLES----------------

# Good to remember: Tuples are not mutable
tuple_1 = ("First", "Second", "Third")

empty_tuple = ()
empty_tuple2 = tuple()

# ---------------SETS------------------

# Sets are not ordered and contain only unique values
set_1 = {"First", "Second", "Third"}
set_2 = {"OtherFirst", "OtherSecond", "Third"}

set_1.intersection(set_2) # > "Third"
set_1.difference(set_2) # > "First", "Second"
set_1.union(set_2) # > {"First", "Second", "OtherFirst", "Third", "OtherSecond"}


new_set = set() # > {}
new_set.add("Value") # > {"Value"}
new_items = {5, 6}
new_set.update(new_items) # > {'Value', 5, 6}
new_set.remove("Value") # > {5, 6}

print(new_set)

# There are a lot more operations you can perform on a set but those are for later...

# https://www.youtube.com/watch?v=daefaLgNkw0&list=RDCMUCCezIgC97PvUuR4_gbFUs5g&index=3  more on dictionaries


# ---------------DICTIONARIES------------------

dictionary = {"name": "John", "age": 25, "man": True, 15: "Key is integer"}


dictionary["name"] # > "John"
# dictionary["inexistent"] # Error
dictionary.get("name") # > "John"
dictionary.get("inexistent") # > None
dictionary.get("inexistent", "Not found") # > Not found

dictionary["phone"] = "555-5555" # > adds new key value
dictionary["phone"] = "555-5566" # > if key exists it updates it
dictionary.update({"name": "Jane","age": 26}) # > {'name': 'Jane', 'age': 26, 'man': True, 15: 'Key is integer', 'phone': '555-5566'}

del dictionary["age"] # > {'name': 'Jane', 'man': True, 15: 'Key is integer', 'phone': '555-5566'}
popped_phone = dictionary.pop("phone") # > popped_phone = 555-5566; dictionary = {'name': 'Jane', 'man': True, 15: 'Key is integer'}

len(dictionary) # > 3

empty_dictionary = {}

print(len(dictionary))