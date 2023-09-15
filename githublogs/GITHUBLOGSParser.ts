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
	public static readonly EMAIL_LOCAL_PART = 1;
	public static readonly FULLNAME = 2;
	public static readonly DOMAIN = 3;
	public static readonly HANDLE = 4;
	public static readonly NUMBER = 5;
	public static readonly COMMA = 6;
	public static readonly AND = 7;
	public static readonly AT = 8;
	public static readonly PLUS = 9;
	public static readonly LESS = 10;
	public static readonly GREATER = 11;
	public static readonly DOT = 12;
	public static readonly NOREPLY_DOMAIN = 13;
	public static readonly NEWLINE = 14;
	public static readonly WS = 15;
	public static readonly RULE_file = 0;
	public static readonly RULE_entry = 1;
	public static readonly RULE_noreplyEntry = 2;
	public static readonly RULE_domainEntry = 3;
	public static readonly RULE_pairedEmailEntry = 4;
	public static readonly RULE_nameList = 5;
	public static readonly RULE_emailAddress = 6;
	public static readonly RULE_fullname = 7;
	public static readonly RULE_githubHandle = 8;
	public static readonly RULE_blankLine = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "entry", "noreplyEntry", "domainEntry", "pairedEmailEntry", "nameList", 
		"emailAddress", "fullname", "githubHandle", "blankLine",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "','", 
		"'and'", "'@'", "'+'", "'<'", "'>'", "'.'", "'users.noreply.github.com'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "EMAIL_LOCAL_PART", "FULLNAME", "DOMAIN", "HANDLE", "NUMBER", 
		"COMMA", "AND", "AT", "PLUS", "LESS", "GREATER", "DOT", "NOREPLY_DOMAIN", 
		"NEWLINE", "WS",
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
			this.state = 24;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 20;
				this.entry();
				this.state = 22;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 21;
					this.match(GITHUBLOGSParser.NEWLINE);
					}
					break;
				}
				}
				}
				this.state = 26;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GITHUBLOGSParser.FULLNAME) | (1 << GITHUBLOGSParser.HANDLE) | (1 << GITHUBLOGSParser.NEWLINE))) !== 0));
			this.state = 28;
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
			this.state = 34;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 30;
				this.noreplyEntry();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 31;
				this.domainEntry();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 32;
				this.pairedEmailEntry();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 33;
				this.blankLine();
				}
				break;
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
	public noreplyEntry(): NoreplyEntryContext {
		let _localctx: NoreplyEntryContext = new NoreplyEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, GITHUBLOGSParser.RULE_noreplyEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this.fullname();
			this.state = 37;
			this.match(GITHUBLOGSParser.LESS);
			this.state = 38;
			this.match(GITHUBLOGSParser.NUMBER);
			this.state = 39;
			this.match(GITHUBLOGSParser.PLUS);
			this.state = 40;
			this.githubHandle();
			this.state = 41;
			this.match(GITHUBLOGSParser.AT);
			this.state = 42;
			this.match(GITHUBLOGSParser.NOREPLY_DOMAIN);
			this.state = 43;
			this.match(GITHUBLOGSParser.GREATER);
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
	public domainEntry(): DomainEntryContext {
		let _localctx: DomainEntryContext = new DomainEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, GITHUBLOGSParser.RULE_domainEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.githubHandle();
			this.state = 46;
			this.match(GITHUBLOGSParser.LESS);
			this.state = 47;
			this.emailAddress();
			this.state = 48;
			this.match(GITHUBLOGSParser.GREATER);
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
	public pairedEmailEntry(): PairedEmailEntryContext {
		let _localctx: PairedEmailEntryContext = new PairedEmailEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, GITHUBLOGSParser.RULE_pairedEmailEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.nameList();
			this.state = 51;
			this.match(GITHUBLOGSParser.LESS);
			this.state = 52;
			this.emailAddress();
			this.state = 53;
			this.match(GITHUBLOGSParser.GREATER);
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
	public nameList(): NameListContext {
		let _localctx: NameListContext = new NameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, GITHUBLOGSParser.RULE_nameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this.fullname();
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GITHUBLOGSParser.COMMA) {
				{
				{
				this.state = 56;
				this.match(GITHUBLOGSParser.COMMA);
				this.state = 57;
				this.fullname();
				}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 63;
			this.match(GITHUBLOGSParser.AND);
			this.state = 64;
			this.fullname();
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
	public emailAddress(): EmailAddressContext {
		let _localctx: EmailAddressContext = new EmailAddressContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, GITHUBLOGSParser.RULE_emailAddress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(GITHUBLOGSParser.EMAIL_LOCAL_PART);
			this.state = 67;
			this.match(GITHUBLOGSParser.AT);
			this.state = 68;
			this.match(GITHUBLOGSParser.DOMAIN);
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
	public fullname(): FullnameContext {
		let _localctx: FullnameContext = new FullnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, GITHUBLOGSParser.RULE_fullname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.match(GITHUBLOGSParser.FULLNAME);
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
	public githubHandle(): GithubHandleContext {
		let _localctx: GithubHandleContext = new GithubHandleContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, GITHUBLOGSParser.RULE_githubHandle);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(GITHUBLOGSParser.HANDLE);
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
	public blankLine(): BlankLineContext {
		let _localctx: BlankLineContext = new BlankLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, GITHUBLOGSParser.RULE_blankLine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(GITHUBLOGSParser.NEWLINE);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x11O\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x05\x02" +
		"\x19\n\x02\x06\x02\x1B\n\x02\r\x02\x0E\x02\x1C\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03%\n\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x07\x07=\n\x07\f\x07\x0E\x07@\v\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x02\x02\x02\f" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x02\x02\x02J\x02\x1A\x03\x02\x02\x02\x04$\x03\x02\x02\x02\x06&\x03" +
		"\x02\x02\x02\b/\x03\x02\x02\x02\n4\x03\x02\x02\x02\f9\x03\x02\x02\x02" +
		"\x0ED\x03\x02\x02\x02\x10H\x03\x02\x02\x02\x12J\x03\x02\x02\x02\x14L\x03" +
		"\x02\x02\x02\x16\x18\x05\x04\x03\x02\x17\x19\x07\x10\x02\x02\x18\x17\x03" +
		"\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x1B\x03\x02\x02\x02\x1A\x16\x03" +
		"\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1A\x03\x02\x02\x02\x1C\x1D\x03" +
		"\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x1F\x07\x02\x02\x03\x1F\x03\x03" +
		"\x02\x02\x02 %\x05\x06\x04\x02!%\x05\b\x05\x02\"%\x05\n\x06\x02#%\x05" +
		"\x14\v\x02$ \x03\x02\x02\x02$!\x03\x02\x02\x02$\"\x03\x02\x02\x02$#\x03" +
		"\x02\x02\x02%\x05\x03\x02\x02\x02&\'\x05\x10\t\x02\'(\x07\f\x02\x02()" +
		"\x07\x07\x02\x02)*\x07\v\x02\x02*+\x05\x12\n\x02+,\x07\n\x02\x02,-\x07" +
		"\x0F\x02\x02-.\x07\r\x02\x02.\x07\x03\x02\x02\x02/0\x05\x12\n\x0201\x07" +
		"\f\x02\x0212\x05\x0E\b\x0223\x07\r\x02\x023\t\x03\x02\x02\x0245\x05\f" +
		"\x07\x0256\x07\f\x02\x0267\x05\x0E\b\x0278\x07\r\x02\x028\v\x03\x02\x02" +
		"\x029>\x05\x10\t\x02:;\x07\b\x02\x02;=\x05\x10\t\x02<:\x03\x02\x02\x02" +
		"=@\x03\x02\x02\x02><\x03\x02\x02\x02>?\x03\x02\x02\x02?A\x03\x02\x02\x02" +
		"@>\x03\x02\x02\x02AB\x07\t\x02\x02BC\x05\x10\t\x02C\r\x03\x02\x02\x02" +
		"DE\x07\x03\x02\x02EF\x07\n\x02\x02FG\x07\x05\x02\x02G\x0F\x03\x02\x02" +
		"\x02HI\x07\x04\x02\x02I\x11\x03\x02\x02\x02JK\x07\x06\x02\x02K\x13\x03" +
		"\x02\x02\x02LM\x07\x10\x02\x02M\x15\x03\x02\x02\x02\x06\x18\x1C$>";
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
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GITHUBLOGSParser.NEWLINE);
		} else {
			return this.getToken(GITHUBLOGSParser.NEWLINE, i);
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
	public noreplyEntry(): NoreplyEntryContext | undefined {
		return this.tryGetRuleContext(0, NoreplyEntryContext);
	}
	public domainEntry(): DomainEntryContext | undefined {
		return this.tryGetRuleContext(0, DomainEntryContext);
	}
	public pairedEmailEntry(): PairedEmailEntryContext | undefined {
		return this.tryGetRuleContext(0, PairedEmailEntryContext);
	}
	public blankLine(): BlankLineContext | undefined {
		return this.tryGetRuleContext(0, BlankLineContext);
	}
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


export class NoreplyEntryContext extends ParserRuleContext {
	public fullname(): FullnameContext {
		return this.getRuleContext(0, FullnameContext);
	}
	public LESS(): TerminalNode { return this.getToken(GITHUBLOGSParser.LESS, 0); }
	public NUMBER(): TerminalNode { return this.getToken(GITHUBLOGSParser.NUMBER, 0); }
	public PLUS(): TerminalNode { return this.getToken(GITHUBLOGSParser.PLUS, 0); }
	public githubHandle(): GithubHandleContext {
		return this.getRuleContext(0, GithubHandleContext);
	}
	public AT(): TerminalNode { return this.getToken(GITHUBLOGSParser.AT, 0); }
	public NOREPLY_DOMAIN(): TerminalNode { return this.getToken(GITHUBLOGSParser.NOREPLY_DOMAIN, 0); }
	public GREATER(): TerminalNode { return this.getToken(GITHUBLOGSParser.GREATER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GITHUBLOGSParser.RULE_noreplyEntry; }
	// @Override
	public enterRule(listener: GITHUBLOGSParserListener): void {
		if (listener.enterNoreplyEntry) {
			listener.enterNoreplyEntry(this);
		}
	}
	// @Override
	public exitRule(listener: GITHUBLOGSParserListener): void {
		if (listener.exitNoreplyEntry) {
			listener.exitNoreplyEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GITHUBLOGSParserVisitor<Result>): Result {
		if (visitor.visitNoreplyEntry) {
			return visitor.visitNoreplyEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DomainEntryContext extends ParserRuleContext {
	public githubHandle(): GithubHandleContext {
		return this.getRuleContext(0, GithubHandleContext);
	}
	public LESS(): TerminalNode { return this.getToken(GITHUBLOGSParser.LESS, 0); }
	public emailAddress(): EmailAddressContext {
		return this.getRuleContext(0, EmailAddressContext);
	}
	public GREATER(): TerminalNode { return this.getToken(GITHUBLOGSParser.GREATER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GITHUBLOGSParser.RULE_domainEntry; }
	// @Override
	public enterRule(listener: GITHUBLOGSParserListener): void {
		if (listener.enterDomainEntry) {
			listener.enterDomainEntry(this);
		}
	}
	// @Override
	public exitRule(listener: GITHUBLOGSParserListener): void {
		if (listener.exitDomainEntry) {
			listener.exitDomainEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GITHUBLOGSParserVisitor<Result>): Result {
		if (visitor.visitDomainEntry) {
			return visitor.visitDomainEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PairedEmailEntryContext extends ParserRuleContext {
	public nameList(): NameListContext {
		return this.getRuleContext(0, NameListContext);
	}
	public LESS(): TerminalNode { return this.getToken(GITHUBLOGSParser.LESS, 0); }
	public emailAddress(): EmailAddressContext {
		return this.getRuleContext(0, EmailAddressContext);
	}
	public GREATER(): TerminalNode { return this.getToken(GITHUBLOGSParser.GREATER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GITHUBLOGSParser.RULE_pairedEmailEntry; }
	// @Override
	public enterRule(listener: GITHUBLOGSParserListener): void {
		if (listener.enterPairedEmailEntry) {
			listener.enterPairedEmailEntry(this);
		}
	}
	// @Override
	public exitRule(listener: GITHUBLOGSParserListener): void {
		if (listener.exitPairedEmailEntry) {
			listener.exitPairedEmailEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GITHUBLOGSParserVisitor<Result>): Result {
		if (visitor.visitPairedEmailEntry) {
			return visitor.visitPairedEmailEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameListContext extends ParserRuleContext {
	public fullname(): FullnameContext[];
	public fullname(i: number): FullnameContext;
	public fullname(i?: number): FullnameContext | FullnameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FullnameContext);
		} else {
			return this.getRuleContext(i, FullnameContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(GITHUBLOGSParser.AND, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GITHUBLOGSParser.COMMA);
		} else {
			return this.getToken(GITHUBLOGSParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GITHUBLOGSParser.RULE_nameList; }
	// @Override
	public enterRule(listener: GITHUBLOGSParserListener): void {
		if (listener.enterNameList) {
			listener.enterNameList(this);
		}
	}
	// @Override
	public exitRule(listener: GITHUBLOGSParserListener): void {
		if (listener.exitNameList) {
			listener.exitNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GITHUBLOGSParserVisitor<Result>): Result {
		if (visitor.visitNameList) {
			return visitor.visitNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmailAddressContext extends ParserRuleContext {
	public EMAIL_LOCAL_PART(): TerminalNode { return this.getToken(GITHUBLOGSParser.EMAIL_LOCAL_PART, 0); }
	public AT(): TerminalNode { return this.getToken(GITHUBLOGSParser.AT, 0); }
	public DOMAIN(): TerminalNode { return this.getToken(GITHUBLOGSParser.DOMAIN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GITHUBLOGSParser.RULE_emailAddress; }
	// @Override
	public enterRule(listener: GITHUBLOGSParserListener): void {
		if (listener.enterEmailAddress) {
			listener.enterEmailAddress(this);
		}
	}
	// @Override
	public exitRule(listener: GITHUBLOGSParserListener): void {
		if (listener.exitEmailAddress) {
			listener.exitEmailAddress(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GITHUBLOGSParserVisitor<Result>): Result {
		if (visitor.visitEmailAddress) {
			return visitor.visitEmailAddress(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FullnameContext extends ParserRuleContext {
	public FULLNAME(): TerminalNode { return this.getToken(GITHUBLOGSParser.FULLNAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GITHUBLOGSParser.RULE_fullname; }
	// @Override
	public enterRule(listener: GITHUBLOGSParserListener): void {
		if (listener.enterFullname) {
			listener.enterFullname(this);
		}
	}
	// @Override
	public exitRule(listener: GITHUBLOGSParserListener): void {
		if (listener.exitFullname) {
			listener.exitFullname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GITHUBLOGSParserVisitor<Result>): Result {
		if (visitor.visitFullname) {
			return visitor.visitFullname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GithubHandleContext extends ParserRuleContext {
	public HANDLE(): TerminalNode { return this.getToken(GITHUBLOGSParser.HANDLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GITHUBLOGSParser.RULE_githubHandle; }
	// @Override
	public enterRule(listener: GITHUBLOGSParserListener): void {
		if (listener.enterGithubHandle) {
			listener.enterGithubHandle(this);
		}
	}
	// @Override
	public exitRule(listener: GITHUBLOGSParserListener): void {
		if (listener.exitGithubHandle) {
			listener.exitGithubHandle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GITHUBLOGSParserVisitor<Result>): Result {
		if (visitor.visitGithubHandle) {
			return visitor.visitGithubHandle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlankLineContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode { return this.getToken(GITHUBLOGSParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GITHUBLOGSParser.RULE_blankLine; }
	// @Override
	public enterRule(listener: GITHUBLOGSParserListener): void {
		if (listener.enterBlankLine) {
			listener.enterBlankLine(this);
		}
	}
	// @Override
	public exitRule(listener: GITHUBLOGSParserListener): void {
		if (listener.exitBlankLine) {
			listener.exitBlankLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GITHUBLOGSParserVisitor<Result>): Result {
		if (visitor.visitBlankLine) {
			return visitor.visitBlankLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


