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
	public static readonly COMMA = 2;
	public static readonly AND = 3;
	public static readonly EMAIL_START = 4;
	public static readonly LPAREN = 5;
	public static readonly NEWLINE = 6;
	public static readonly RPAREN = 7;
	public static readonly EXT = 8;
	public static readonly EMAIL_END = 9;
	public static readonly EMAIL = 10;
	public static readonly WS = 11;
	public static readonly RULE_file = 0;
	public static readonly RULE_entry = 1;
	public static readonly RULE_user_list = 2;
	public static readonly RULE_user = 3;
	public static readonly RULE_ext = 4;
	public static readonly RULE_email = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "entry", "user_list", "user", "ext", "email",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "','", "'and'", "'<'", "'('", undefined, "') '", 
		undefined, "'>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "AUTHOR_NAME", "COMMA", "AND", "EMAIL_START", "LPAREN", "NEWLINE", 
		"RPAREN", "EXT", "EMAIL_END", "EMAIL", "WS",
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
			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 12;
				this.entry();
				}
				}
				this.state = 15;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === GITHUBLOGSParser.AUTHOR_NAME);
			this.state = 17;
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
			this.state = 19;
			this.user_list();
			this.state = 20;
			this.match(GITHUBLOGSParser.EMAIL_START);
			this.state = 21;
			this.email();
			this.state = 22;
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
	// @RuleVersion(0)
	public user_list(): User_listContext {
		let _localctx: User_listContext = new User_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, GITHUBLOGSParser.RULE_user_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this.user();
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GITHUBLOGSParser.COMMA) {
				{
				{
				this.state = 25;
				this.match(GITHUBLOGSParser.COMMA);
				this.state = 26;
				this.user();
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GITHUBLOGSParser.AND) {
				{
				this.state = 32;
				this.match(GITHUBLOGSParser.AND);
				this.state = 33;
				this.user();
				}
			}

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
	public user(): UserContext {
		let _localctx: UserContext = new UserContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, GITHUBLOGSParser.RULE_user);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this.match(GITHUBLOGSParser.AUTHOR_NAME);
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GITHUBLOGSParser.LPAREN) {
				{
				this.state = 37;
				this.ext();
				}
			}

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
	public ext(): ExtContext {
		let _localctx: ExtContext = new ExtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, GITHUBLOGSParser.RULE_ext);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.match(GITHUBLOGSParser.LPAREN);
			this.state = 41;
			this.match(GITHUBLOGSParser.EXT);
			this.state = 42;
			this.match(GITHUBLOGSParser.RPAREN);
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
	public email(): EmailContext {
		let _localctx: EmailContext = new EmailContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, GITHUBLOGSParser.RULE_email);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.match(GITHUBLOGSParser.EMAIL);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r1\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x03\x02\x06\x02\x10\n\x02\r\x02\x0E\x02\x11\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04\x1E\n" +
		"\x04\f\x04\x0E\x04!\v\x04\x03\x04\x03\x04\x05\x04%\n\x04\x03\x05\x03\x05" +
		"\x05\x05)\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x02\x02\x02\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x02\x02." +
		"\x02\x0F\x03\x02\x02\x02\x04\x15\x03\x02\x02\x02\x06\x1A\x03\x02\x02\x02" +
		"\b&\x03\x02\x02\x02\n*\x03\x02\x02\x02\f.\x03\x02\x02\x02\x0E\x10\x05" +
		"\x04\x03\x02\x0F\x0E\x03\x02\x02\x02\x10\x11\x03\x02\x02\x02\x11\x0F\x03" +
		"\x02\x02\x02\x11\x12\x03\x02\x02\x02\x12\x13\x03\x02\x02\x02\x13\x14\x07" +
		"\x02\x02\x03\x14\x03\x03\x02\x02\x02\x15\x16\x05\x06\x04\x02\x16\x17\x07" +
		"\x06\x02\x02\x17\x18\x05\f\x07\x02\x18\x19\x07\v\x02\x02\x19\x05\x03\x02" +
		"\x02\x02\x1A\x1F\x05\b\x05\x02\x1B\x1C\x07\x04\x02\x02\x1C\x1E\x05\b\x05" +
		"\x02\x1D\x1B\x03\x02\x02\x02\x1E!\x03\x02\x02\x02\x1F\x1D\x03\x02\x02" +
		"\x02\x1F \x03\x02\x02\x02 $\x03\x02\x02\x02!\x1F\x03\x02\x02\x02\"#\x07" +
		"\x05\x02\x02#%\x05\b\x05\x02$\"\x03\x02\x02\x02$%\x03\x02\x02\x02%\x07" +
		"\x03\x02\x02\x02&(\x07\x03\x02\x02\')\x05\n\x06\x02(\'\x03\x02\x02\x02" +
		"()\x03\x02\x02\x02)\t\x03\x02\x02\x02*+\x07\x07\x02\x02+,\x07\n\x02\x02" +
		",-\x07\t\x02\x02-\v\x03\x02\x02\x02./\x07\f\x02\x02/\r\x03\x02\x02\x02" +
		"\x06\x11\x1F$(";
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
	public user_list(): User_listContext {
		return this.getRuleContext(0, User_listContext);
	}
	public EMAIL_START(): TerminalNode { return this.getToken(GITHUBLOGSParser.EMAIL_START, 0); }
	public email(): EmailContext {
		return this.getRuleContext(0, EmailContext);
	}
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


export class User_listContext extends ParserRuleContext {
	public user(): UserContext[];
	public user(i: number): UserContext;
	public user(i?: number): UserContext | UserContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UserContext);
		} else {
			return this.getRuleContext(i, UserContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GITHUBLOGSParser.COMMA);
		} else {
			return this.getToken(GITHUBLOGSParser.COMMA, i);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(GITHUBLOGSParser.AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GITHUBLOGSParser.RULE_user_list; }
	// @Override
	public enterRule(listener: GITHUBLOGSParserListener): void {
		if (listener.enterUser_list) {
			listener.enterUser_list(this);
		}
	}
	// @Override
	public exitRule(listener: GITHUBLOGSParserListener): void {
		if (listener.exitUser_list) {
			listener.exitUser_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GITHUBLOGSParserVisitor<Result>): Result {
		if (visitor.visitUser_list) {
			return visitor.visitUser_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UserContext extends ParserRuleContext {
	public AUTHOR_NAME(): TerminalNode { return this.getToken(GITHUBLOGSParser.AUTHOR_NAME, 0); }
	public ext(): ExtContext | undefined {
		return this.tryGetRuleContext(0, ExtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GITHUBLOGSParser.RULE_user; }
	// @Override
	public enterRule(listener: GITHUBLOGSParserListener): void {
		if (listener.enterUser) {
			listener.enterUser(this);
		}
	}
	// @Override
	public exitRule(listener: GITHUBLOGSParserListener): void {
		if (listener.exitUser) {
			listener.exitUser(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GITHUBLOGSParserVisitor<Result>): Result {
		if (visitor.visitUser) {
			return visitor.visitUser(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(GITHUBLOGSParser.LPAREN, 0); }
	public EXT(): TerminalNode { return this.getToken(GITHUBLOGSParser.EXT, 0); }
	public RPAREN(): TerminalNode { return this.getToken(GITHUBLOGSParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GITHUBLOGSParser.RULE_ext; }
	// @Override
	public enterRule(listener: GITHUBLOGSParserListener): void {
		if (listener.enterExt) {
			listener.enterExt(this);
		}
	}
	// @Override
	public exitRule(listener: GITHUBLOGSParserListener): void {
		if (listener.exitExt) {
			listener.exitExt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GITHUBLOGSParserVisitor<Result>): Result {
		if (visitor.visitExt) {
			return visitor.visitExt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmailContext extends ParserRuleContext {
	public EMAIL(): TerminalNode { return this.getToken(GITHUBLOGSParser.EMAIL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GITHUBLOGSParser.RULE_email; }
	// @Override
	public enterRule(listener: GITHUBLOGSParserListener): void {
		if (listener.enterEmail) {
			listener.enterEmail(this);
		}
	}
	// @Override
	public exitRule(listener: GITHUBLOGSParserListener): void {
		if (listener.exitEmail) {
			listener.exitEmail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GITHUBLOGSParserVisitor<Result>): Result {
		if (visitor.visitEmail) {
			return visitor.visitEmail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


