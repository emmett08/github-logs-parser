import { CharStreams, CommonTokenStream } from "antlr4ts";
import { GITHUBLOGSLexer } from './githublogs/GITHUBLOGSLexer';
import { GITHUBLOGSParser } from './githublogs/GITHUBLOGSParser';

export function parse(input: string) {
    const chars = CharStreams.fromString(input);
    const lexer = new GITHUBLOGSLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new GITHUBLOGSParser(tokens);
    
    return parser.file();
}
