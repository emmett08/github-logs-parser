// Generated from GITHUBLOGSParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FileContext } from "./GITHUBLOGSParser";
import { EntryContext } from "./GITHUBLOGSParser";
import { User_listContext } from "./GITHUBLOGSParser";
import { UserContext } from "./GITHUBLOGSParser";
import { ExtContext } from "./GITHUBLOGSParser";
import { EmailContext } from "./GITHUBLOGSParser";


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
	 * Visit a parse tree produced by `GITHUBLOGSParser.user_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUser_list?: (ctx: User_listContext) => Result;

	/**
	 * Visit a parse tree produced by `GITHUBLOGSParser.user`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUser?: (ctx: UserContext) => Result;

	/**
	 * Visit a parse tree produced by `GITHUBLOGSParser.ext`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExt?: (ctx: ExtContext) => Result;

	/**
	 * Visit a parse tree produced by `GITHUBLOGSParser.email`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmail?: (ctx: EmailContext) => Result;
}

