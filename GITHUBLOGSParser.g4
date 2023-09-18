parser grammar GITHUBLOGSParser;

options { tokenVocab=GITHUBLOGSLexer; }

file    : entry+ EOF ;
entry   : user_list EMAIL_START email EMAIL_END ;
user_list : user (COMMA user)* (AND user)? ;
user    : AUTHOR_NAME ext? ;
ext     : LPAREN EXT RPAREN ;
email   : EMAIL ;
