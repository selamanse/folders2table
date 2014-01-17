folders2table
=============

this is a script for nodejs.
currently developed and only tested on mac osx maverics.

the main functionality is to read out data from folder names which have a specialized pattern
and create a html structure (a table) containing each folder as a row, and each information of the data pattern as columns.
finally it creates a file (output.html) which contains the html string.

Folder structure example:

.
..
"string - date - string"
"32standard - 2010.04.22 - Berlin"
"special22 - 2011.03.11 - London"
"christmas99 - 2012.12.24 - Brussel"
and s.o.


- requires nodejs
- call execute within folder to be scanned with following command "node main.js"
- creates a file in the execution area called "output.html"
