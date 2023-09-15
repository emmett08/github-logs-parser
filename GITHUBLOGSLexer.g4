lexer grammar GITHUBLOGSLexer;

EMAIL_LOCAL_PART: NAME_PART+ ('+' NAME_PART+)* ;
FULLNAME        : NAME_PART+ (WS NAME_PART+)*;
DOMAIN          : NAME_PART+ ('.' NAME_PART+)* ;
HANDLE          : NAME_PART+ ('-' NAME_PART+)* ;
NUMBER          : [0-9]+ ;
NAME_PART       : CHAR+ ;
COMMA           : ',' ;
AND             : 'and' ;
AT              : '@' ;
PLUS            : '+' ;
LESS            : '<' ;
GREATER         : '>' ;
DOT             : '.' ;
LPAREN          : '(' ;
RPAREN          : ')' ;
NOREPLY_DOMAIN  : 'users.noreply.github.com' ; 
NEWLINE         : '\r'? '\n' ;
WS              : [ \t\r\n]+ -> skip;

fragment CHAR               : ('a'..'z' | 'A'..'Z' | '0'..'9' 
                            | '\u0080'..'\uFFFF'
                            | ';' | '^' | '$' | '#' | '|'
                            | '!' | '"' | ':' | '`' | '\'' | '*' 
                            | '[' | ']' | '-' | '_' | '/' | '\\'
                            | '.' | ' ' | '&' | '=' | '~' | '?')
                            ;
