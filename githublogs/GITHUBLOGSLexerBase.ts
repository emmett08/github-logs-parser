import { Lexer } from 'antlr4ts';

export abstract class GITHUBLOGSLexerBase extends Lexer {
  constructor(input: any) {
    super(input);
  }

  OnOpenParenthesis(): void {
    console.log("Open parenthesis encountered.");
  }

  OnCloseParenthesis(): void {
    console.log("Close parenthesis encountered.");
  }

  OnLessThan(): void {
    console.log("Less than sign encountered.");
  }

  OnGreaterThan(): void {
    console.log("Greater than sign encountered.");
  }
}
