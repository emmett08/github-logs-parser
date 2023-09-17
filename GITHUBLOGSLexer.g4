lexer grammar GITHUBLOGSLexer;

AUTHOR_NAME  		: [A-Za-z0-9- \u00C0-\u00FF]+ ;
EMAIL_START  		: '<' -> pushMode(EMAIL_MODE) ;
NEWLINE				: [\n]->skip;

mode EMAIL_MODE;
EMAIL_END    		: '>' -> popMode ;
EMAIL       		: [a-zA-Z0-9._+-]+ '@' [a-zA-Z0-9.-]+ ;
WS          		: [ \t\n\r]+ -> skip ;
