lexer grammar GITHUBLOGSLexer;

EMAIL_LOCAL_PART: [a-zA-Z0-9._-]+ ('+' [a-zA-Z0-9._-]+)* ;
FULLNAME        : [A-Za-z- ]+ ;
DOMAIN          : [a-zA-Z.]+ ; 
HANDLE          : [a-z0-9-]+ ;
NUMBER          : [0-9]+ ;
COMMA           : ',' ;
AND             : 'and' ;
AT              : '@' ;
PLUS            : '+' ;
LESS            : '<' ;
GREATER         : '>' ;
DOT             : '.' ;
NOREPLY_DOMAIN  : 'users.noreply.github.com' ; 
NEWLINE         : '\r'? '\n' ;
WS              : [ \t\r\n]+ -> skip ;
