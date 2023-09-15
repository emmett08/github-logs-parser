// Generated from GITHUBLOGSParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./GITHUBLOGSParser";
import { EntryContext } from "./GITHUBLOGSParser";
import { NoreplyEntryContext } from "./GITHUBLOGSParser";
import { DomainEntryContext } from "./GITHUBLOGSParser";
import { PairedEmailEntryContext } from "./GITHUBLOGSParser";
import { NameListContext } from "./GITHUBLOGSParser";
import { EmailAddressContext } from "./GITHUBLOGSParser";
import { FullnameContext } from "./GITHUBLOGSParser";
import { GithubHandleContext } from "./GITHUBLOGSParser";
import { BlankLineContext } from "./GITHUBLOGSParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `GITHUBLOGSParser`.
 */
export interface GITHUBLOGSParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `GITHUBLOGSParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `GITHUBLOGSParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `GITHUBLOGSParser.entry`.
	 * @param ctx the parse tree
	 */
	enterEntry?: (ctx: EntryContext) => void;
	/**
	 * Exit a parse tree produced by `GITHUBLOGSParser.entry`.
	 * @param ctx the parse tree
	 */
	exitEntry?: (ctx: EntryContext) => void;

	/**
	 * Enter a parse tree produced by `GITHUBLOGSParser.noreplyEntry`.
	 * @param ctx the parse tree
	 */
	enterNoreplyEntry?: (ctx: NoreplyEntryContext) => void;
	/**
	 * Exit a parse tree produced by `GITHUBLOGSParser.noreplyEntry`.
	 * @param ctx the parse tree
	 */
	exitNoreplyEntry?: (ctx: NoreplyEntryContext) => void;

	/**
	 * Enter a parse tree produced by `GITHUBLOGSParser.domainEntry`.
	 * @param ctx the parse tree
	 */
	enterDomainEntry?: (ctx: DomainEntryContext) => void;
	/**
	 * Exit a parse tree produced by `GITHUBLOGSParser.domainEntry`.
	 * @param ctx the parse tree
	 */
	exitDomainEntry?: (ctx: DomainEntryContext) => void;

	/**
	 * Enter a parse tree produced by `GITHUBLOGSParser.pairedEmailEntry`.
	 * @param ctx the parse tree
	 */
	enterPairedEmailEntry?: (ctx: PairedEmailEntryContext) => void;
	/**
	 * Exit a parse tree produced by `GITHUBLOGSParser.pairedEmailEntry`.
	 * @param ctx the parse tree
	 */
	exitPairedEmailEntry?: (ctx: PairedEmailEntryContext) => void;

	/**
	 * Enter a parse tree produced by `GITHUBLOGSParser.nameList`.
	 * @param ctx the parse tree
	 */
	enterNameList?: (ctx: NameListContext) => void;
	/**
	 * Exit a parse tree produced by `GITHUBLOGSParser.nameList`.
	 * @param ctx the parse tree
	 */
	exitNameList?: (ctx: NameListContext) => void;

	/**
	 * Enter a parse tree produced by `GITHUBLOGSParser.emailAddress`.
	 * @param ctx the parse tree
	 */
	enterEmailAddress?: (ctx: EmailAddressContext) => void;
	/**
	 * Exit a parse tree produced by `GITHUBLOGSParser.emailAddress`.
	 * @param ctx the parse tree
	 */
	exitEmailAddress?: (ctx: EmailAddressContext) => void;

	/**
	 * Enter a parse tree produced by `GITHUBLOGSParser.fullname`.
	 * @param ctx the parse tree
	 */
	enterFullname?: (ctx: FullnameContext) => void;
	/**
	 * Exit a parse tree produced by `GITHUBLOGSParser.fullname`.
	 * @param ctx the parse tree
	 */
	exitFullname?: (ctx: FullnameContext) => void;

	/**
	 * Enter a parse tree produced by `GITHUBLOGSParser.githubHandle`.
	 * @param ctx the parse tree
	 */
	enterGithubHandle?: (ctx: GithubHandleContext) => void;
	/**
	 * Exit a parse tree produced by `GITHUBLOGSParser.githubHandle`.
	 * @param ctx the parse tree
	 */
	exitGithubHandle?: (ctx: GithubHandleContext) => void;

	/**
	 * Enter a parse tree produced by `GITHUBLOGSParser.blankLine`.
	 * @param ctx the parse tree
	 */
	enterBlankLine?: (ctx: BlankLineContext) => void;
	/**
	 * Exit a parse tree produced by `GITHUBLOGSParser.blankLine`.
	 * @param ctx the parse tree
	 */
	exitBlankLine?: (ctx: BlankLineContext) => void;
}

