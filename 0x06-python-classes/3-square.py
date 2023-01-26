#!/usr/bin/python3
""" This module defines a square class with a private size attribute.
    Square also has a public instance method area() that gets the area
    of the square """


class Square:
    """ Class Square """
    
    def __init__(self, size=0):
        """ Initializes self """
        if type(size) is not int:
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        else:
            self.__size = size

    """ Return area of Square object """
    def area(self):
        return (self.__size * self.__size)
