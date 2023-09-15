parser grammar GITHUBLOGSParser;

options { tokenVocab = GITHUBLOGSLexer; }

file            : (entry NEWLINE?)+ EOF;

entry           : noreplyEntry
                | domainEntry
                | pairedEmailEntry
                | blankLine
                ;

noreplyEntry    : fullname LESS NUMBER PLUS githubHandle AT NOREPLY_DOMAIN GREATER
                ;

domainEntry     : githubHandle LESS emailAddress GREATER
                ;
pairedEmailEntry: nameList LESS emailAddress GREATER ;

nameList        : fullname (COMMA fullname)* AND fullname ; 

emailAddress    : EMAIL_LOCAL_PART AT DOMAIN
                ;

fullname        : FULLNAME
                ;

githubHandle    : HANDLE
                ;

blankLine       : NEWLINE ;
