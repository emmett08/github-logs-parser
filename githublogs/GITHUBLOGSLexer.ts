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
	public static readonly EMAIL_START = 2;
	public static readonly NEWLINE = 3;
	public static readonly EMAIL_END = 4;
	public static readonly EMAIL = 5;
	public static readonly WS = 6;
	public static readonly EMAIL_MODE = 1;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "EMAIL_MODE",
	];

	public static readonly ruleNames: string[] = [
		"AUTHOR_NAME", "EMAIL_START", "NEWLINE", "EMAIL_END", "EMAIL", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'<'", undefined, "'>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "AUTHOR_NAME", "EMAIL_START", "NEWLINE", "EMAIL_END", "EMAIL", 
		"WS",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\b9\b\x01\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x03\x02\x06\x02\x12\n\x02\r\x02\x0E\x02\x13\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x06\x06#\n\x06\r\x06\x0E\x06$\x03\x06\x03\x06\x06" +
		"\x06)\n\x06\r\x06\x0E\x06*\x03\x06\x03\x06\x06\x06/\n\x06\r\x06\x0E\x06" +
		"0\x03\x07\x06\x074\n\x07\r\x07\x0E\x075\x03\x07\x03\x07\x02\x02\x02\b" +
		"\x04\x02\x03\x06\x02\x04\b\x02\x05\n\x02\x06\f\x02\x07\x0E\x02\b\x04\x02" +
		"\x03\b\x07\x03\x02\"2;C\\c|\xC2\u0101\x03\x02\f\f\b\x02--/02;C\\aac|\x06" +
		"\x02/02;C\\c|\x04\x02C\\c|\x05\x02\v\f\x0F\x0F\"\"\x02<\x02\x04\x03\x02" +
		"\x02\x02\x02\x06\x03\x02\x02\x02\x02\b\x03\x02\x02\x02\x03\n\x03\x02\x02" +
		"\x02\x03\f\x03\x02\x02\x02\x03\x0E\x03\x02\x02\x02\x04\x11\x03\x02\x02" +
		"\x02\x06\x15\x03\x02\x02\x02\b\x19\x03\x02\x02\x02\n\x1D\x03\x02\x02\x02" +
		"\f\"\x03\x02\x02\x02\x0E3\x03\x02\x02\x02\x10\x12\t\x02\x02\x02\x11\x10" +
		"\x03\x02\x02\x02\x12\x13\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02\x13\x14" +
		"\x03\x02\x02\x02\x14\x05\x03\x02\x02\x02\x15\x16\x07>\x02\x02\x16\x17" +
		"\x03\x02\x02\x02\x17\x18\b\x03\x02\x02\x18\x07\x03\x02\x02\x02\x19\x1A" +
		"\t\x03\x02\x02\x1A\x1B\x03\x02\x02\x02\x1B\x1C\b\x04\x03\x02\x1C\t\x03" +
		"\x02\x02\x02\x1D\x1E\x07@\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F \b\x05\x04" +
		"\x02 \v\x03\x02\x02\x02!#\t\x04\x02\x02\"!\x03\x02\x02\x02#$\x03\x02\x02" +
		"\x02$\"\x03\x02\x02\x02$%\x03\x02\x02\x02%&\x03\x02\x02\x02&(\x07B\x02" +
		"\x02\')\t\x05\x02\x02(\'\x03\x02\x02\x02)*\x03\x02\x02\x02*(\x03\x02\x02" +
		"\x02*+\x03\x02\x02\x02+,\x03\x02\x02\x02,.\x070\x02\x02-/\t\x06\x02\x02" +
		".-\x03\x02\x02\x02/0\x03\x02\x02\x020.\x03\x02\x02\x0201\x03\x02\x02\x02" +
		"1\r\x03\x02\x02\x0224\t\x07\x02\x0232\x03\x02\x02\x0245\x03\x02\x02\x02" +
		"53\x03\x02\x02\x0256\x03\x02\x02\x0267\x03\x02\x02\x0278\b\x07\x03\x02" +
		"8\x0F\x03\x02\x02\x02\t\x02\x03\x13$*05\x05\x07\x03\x02\b\x02\x02\x06" +
		"\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GITHUBLOGSLexer.__ATN) {
			GITHUBLOGSLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GITHUBLOGSLexer._serializedATN));
		}

		return GITHUBLOGSLexer.__ATN;
	}

}

