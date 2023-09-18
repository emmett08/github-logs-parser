// Generated from GITHUBLOGSLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class GITHUBLOGSLexer extends Lexer {
	public static readonly AUTHOR_NAME = 1;
	public static readonly COMMA = 2;
	public static readonly AND = 3;
	public static readonly EMAIL_START = 4;
	public static readonly LPAREN = 5;
	public static readonly NEWLINE = 6;
	public static readonly PAREN_END = 7;
	public static readonly EXT = 8;
	public static readonly EMAIL_END = 9;
	public static readonly EMAIL = 10;
	public static readonly WS = 11;
	public static readonly PAREN_MODE = 1;
	public static readonly EMAIL_MODE = 2;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "PAREN_MODE", "EMAIL_MODE",
	];

	public static readonly ruleNames: string[] = [
		"AUTHOR_NAME", "COMMA", "AND", "EMAIL_START", "LPAREN", "NEWLINE", "PAREN_END", 
		"EXT", "EMAIL_END", "EMAIL", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "','", "'and'", "'<'", "'('", undefined, "') '", 
		undefined, "'>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "AUTHOR_NAME", "COMMA", "AND", "EMAIL_START", "LPAREN", "NEWLINE", 
		"PAREN_END", "EXT", "EMAIL_END", "EMAIL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GITHUBLOGSLexer._LITERAL_NAMES, GITHUBLOGSLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GITHUBLOGSLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(GITHUBLOGSLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "GITHUBLOGSLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return GITHUBLOGSLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return GITHUBLOGSLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return GITHUBLOGSLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return GITHUBLOGSLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\rR\b\x01\b\x01" +
		"\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06" +
		"\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f" +
		"\x03\x02\x06\x02\x1D\n\x02\r\x02\x0E\x02\x1E\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\t\x06\t9\n\t\r\t\x0E\t:\x03\n\x03\n\x03\n\x03\n\x03\v\x06\vB\n" +
		"\v\r\v\x0E\vC\x03\v\x03\v\x06\vH\n\v\r\v\x0E\vI\x03\f\x06\fM\n\f\r\f\x0E" +
		"\fN\x03\f\x03\f\x02\x02\x02\r\x05\x02\x03\x07\x02\x04\t\x02\x05\v\x02" +
		"\x06\r\x02\x07\x0F\x02\b\x11\x02\t\x13\x02\n\x15\x02\v\x17\x02\f\x19\x02" +
		"\r\x05\x02\x03\x04\b\b\x02\"\"//2;C\\c|\x82\u0101\x03\x02\f\f\x05\x02" +
		"1;C\\c|\b\x02--/02;C\\aac|\x06\x02/02;C\\c|\x05\x02\v\f\x0F\x0F\"\"\x02" +
		"T\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
		"\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x03" +
		"\x11\x03\x02\x02\x02\x03\x13\x03\x02\x02\x02\x04\x15\x03\x02\x02\x02\x04" +
		"\x17\x03\x02\x02\x02\x04\x19\x03\x02\x02\x02\x05\x1C\x03\x02\x02\x02\x07" +
		" \x03\x02\x02\x02\t\"\x03\x02\x02\x02\v&\x03\x02\x02\x02\r*\x03\x02\x02" +
		"\x02\x0F.\x03\x02\x02\x02\x112\x03\x02\x02\x02\x138\x03\x02\x02\x02\x15" +
		"<\x03\x02\x02\x02\x17A\x03\x02\x02\x02\x19L\x03\x02\x02\x02\x1B\x1D\t" +
		"\x02\x02\x02\x1C\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x1C\x03" +
		"\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F\x06\x03\x02\x02\x02 !\x07.\x02" +
		"\x02!\b\x03\x02\x02\x02\"#\x07c\x02\x02#$\x07p\x02\x02$%\x07f\x02\x02" +
		"%\n\x03\x02\x02\x02&\'\x07>\x02\x02\'(\x03\x02\x02\x02()\b\x05\x02\x02" +
		")\f\x03\x02\x02\x02*+\x07*\x02\x02+,\x03\x02\x02\x02,-\b\x06\x03\x02-" +
		"\x0E\x03\x02\x02\x02./\t\x03\x02\x02/0\x03\x02\x02\x0201\b\x07\x04\x02" +
		"1\x10\x03\x02\x02\x0223\x07+\x02\x0234\x07\"\x02\x0245\x03\x02\x02\x02" +
		"56\b\b\x05\x026\x12\x03\x02\x02\x0279\t\x04\x02\x0287\x03\x02\x02\x02" +
		"9:\x03\x02\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;\x14\x03\x02\x02" +
		"\x02<=\x07@\x02\x02=>\x03\x02\x02\x02>?\b\n\x05\x02?\x16\x03\x02\x02\x02" +
		"@B\t\x05\x02\x02A@\x03\x02\x02\x02BC\x03\x02\x02\x02CA\x03\x02\x02\x02" +
		"CD\x03\x02\x02\x02DE\x03\x02\x02\x02EG\x07B\x02\x02FH\t\x06\x02\x02GF" +
		"\x03\x02\x02\x02HI\x03\x02\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02" +
		"J\x18\x03\x02\x02\x02KM\t\x07\x02\x02LK\x03\x02\x02\x02MN\x03\x02\x02" +
		"\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02OP\x03\x02\x02\x02PQ\b\f\x04\x02" +
		"Q\x1A\x03\x02\x02\x02\n\x02\x03\x04\x1E:CIN\x06\x07\x04\x02\x07\x03\x02" +
		"\b\x02\x02\x06\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GITHUBLOGSLexer.__ATN) {
			GITHUBLOGSLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GITHUBLOGSLexer._serializedATN));
		}

		return GITHUBLOGSLexer.__ATN;
	}

}

