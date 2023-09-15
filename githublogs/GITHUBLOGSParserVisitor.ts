// Generated from GITHUBLOGSParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GITHUBLOGSParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface GITHUBLOGSParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `GITHUBLOGSParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `GITHUBLOGSParser.entry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntry?: (ctx: EntryContext) => Result;

	/**
	 * Visit a parse tree produced by `GITHUBLOGSParser.noreplyEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoreplyEntry?: (ctx: NoreplyEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `GITHUBLOGSParser.domainEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDomainEntry?: (ctx: DomainEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `GITHUBLOGSParser.pairedEmailEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPairedEmailEntry?: (ctx: PairedEmailEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `GITHUBLOGSParser.nameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameList?: (ctx: NameListContext) => Result;

	/**
	 * Visit a parse tree produced by `GITHUBLOGSParser.emailAddress`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmailAddress?: (ctx: EmailAddressContext) => Result;

	/**
	 * Visit a parse tree produced by `GITHUBLOGSParser.fullname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFullname?: (ctx: FullnameContext) => Result;

	/**
	 * Visit a parse tree produced by `GITHUBLOGSParser.githubHandle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGithubHandle?: (ctx: GithubHandleContext) => Result;

	/**
	 * Visit a parse tree produced by `GITHUBLOGSParser.blankLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlankLine?: (ctx: BlankLineContext) => Result;
}

