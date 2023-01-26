#!/usr/bin/python3
""" This module defines a square class with a private size attribute """

class Square:
    ''' Class Square object intialized with size '''


    def __init__(self, size=0):
        ''' init method of class Square '''
        if type(size) != int:
            raise TypeError("size must be an integer")
        if size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size
