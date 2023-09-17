parser grammar GITHUBLOGSParser;

options { tokenVocab=GITHUBLOGSLexer; }

file        : entry+ EOF ;
entry       : user EMAIL_START email EMAIL_END ;
user: AUTHOR_NAME;
email: EMAIL;
