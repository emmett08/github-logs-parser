// Generated from GITHUBLOGSParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { GITHUBLOGSParserListener } from "./GITHUBLOGSParserListener";
import { GITHUBLOGSParserVisitor } from "./GITHUBLOGSParserVisitor";


export class GITHUBLOGSParser extends Parser {
	public static readonly AUTHOR_NAME = 1;
	public static readonly EMAIL_START = 2;
	public static readonly NEWLINE = 3;
	public static readonly EMAIL_END = 4;
	public static readonly EMAIL = 5;
	public static readonly WS = 6;
	public static readonly RULE_file = 0;
	public static readonly RULE_entry = 1;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "entry",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'<'", undefined, "'>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "AUTHOR_NAME", "EMAIL_START", "NEWLINE", "EMAIL_END", "EMAIL", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GITHUBLOGSParser._LITERAL_NAMES, GITHUBLOGSParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GITHUBLOGSParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "GITHUBLOGSParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return GITHUBLOGSParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return GITHUBLOGSParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(GITHUBLOGSParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, GITHUBLOGSParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 5;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 4;
				this.entry();
				}
				}
				this.state = 7;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === GITHUBLOGSParser.AUTHOR_NAME);
			this.state = 9;
			this.match(GITHUBLOGSParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public entry(): EntryContext {
		let _localctx: EntryContext = new EntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, GITHUBLOGSParser.RULE_entry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 11;
			this.match(GITHUBLOGSParser.AUTHOR_NAME);
			this.state = 12;
			this.match(GITHUBLOGSParser.EMAIL_START);
			this.state = 13;
			this.match(GITHUBLOGSParser.EMAIL);
			this.state = 14;
			this.match(GITHUBLOGSParser.EMAIL_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\b\x13\x04\x02" +
		"\t\x02\x04\x03\t\x03\x03\x02\x06\x02\b\n\x02\r\x02\x0E\x02\t\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x02\x02\x02\x04\x02" +
		"\x02\x04\x02\x02\x02\x02\x11\x02\x07\x03\x02\x02\x02\x04\r\x03\x02\x02" +
		"\x02\x06\b\x05\x04\x03\x02\x07\x06\x03\x02\x02\x02\b\t\x03\x02\x02\x02" +
		"\t\x07\x03\x02\x02\x02\t\n\x03\x02\x02\x02\n\v\x03\x02\x02\x02\v\f\x07" +
		"\x02\x02\x03\f\x03\x03\x02\x02\x02\r\x0E\x07\x03\x02\x02\x0E\x0F\x07\x04" +
		"\x02\x02\x0F\x10\x07\x07\x02\x02\x10\x11\x07\x06\x02\x02\x11\x05\x03\x02" +
		"\x02\x02\x03\t";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GITHUBLOGSParser.__ATN) {
			GITHUBLOGSParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GITHUBLOGSParser._serializedATN));
		}

		return GITHUBLOGSParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(GITHUBLOGSParser.EOF, 0); }
	public entry(): EntryContext[];
	public entry(i: number): EntryContext;
	public entry(i?: number): EntryContext | EntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EntryContext);
		} else {
			return this.getRuleContext(i, EntryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GITHUBLOGSParser.RULE_file; }
	// @Override
	public enterRule(listener: GITHUBLOGSParserListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: GITHUBLOGSParserListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GITHUBLOGSParserVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntryContext extends ParserRuleContext {
	public AUTHOR_NAME(): TerminalNode { return this.getToken(GITHUBLOGSParser.AUTHOR_NAME, 0); }
	public EMAIL_START(): TerminalNode { return this.getToken(GITHUBLOGSParser.EMAIL_START, 0); }
	public EMAIL(): TerminalNode { return this.getToken(GITHUBLOGSParser.EMAIL, 0); }
	public EMAIL_END(): TerminalNode { return this.getToken(GITHUBLOGSParser.EMAIL_END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GITHUBLOGSParser.RULE_entry; }
	// @Override
	public enterRule(listener: GITHUBLOGSParserListener): void {
		if (listener.enterEntry) {
			listener.enterEntry(this);
		}
	}
	// @Override
	public exitRule(listener: GITHUBLOGSParserListener): void {
		if (listener.exitEntry) {
			listener.exitEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GITHUBLOGSParserVisitor<Result>): Result {
		if (visitor.visitEntry) {
			return visitor.visitEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


