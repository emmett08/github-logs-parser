lexer grammar GITHUBLOGSLexer;

AUTHOR_NAME  : [A-Za-z0-9- \u0080-\u00FF\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF]+ ;
COMMA          : ',' ;
AND            : 'and' ;
EMAIL_START    : '<' -> pushMode(EMAIL_MODE) ;
LPAREN         : '(' -> pushMode(PAREN_MODE) ;
NEWLINE        : [\n] -> skip ;

mode PAREN_MODE;
PAREN_END      : ') ' -> popMode ;
EXT            : [a-zA-Z0-9/]+ ;

mode EMAIL_MODE;
EMAIL_END      : '>' -> popMode ;
EMAIL          : [a-zA-Z0-9._+-]+ '@' [a-zA-Z0-9.-]+ ;
WS             : [ \t\n\r]+ -> skip ;
