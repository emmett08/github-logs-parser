// Generated from GITHUBLOGSParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./GITHUBLOGSParser";
import { EntryContext } from "./GITHUBLOGSParser";
import { User_listContext } from "./GITHUBLOGSParser";
import { UserContext } from "./GITHUBLOGSParser";
import { ExtContext } from "./GITHUBLOGSParser";
import { EmailContext } from "./GITHUBLOGSParser";


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
	 * Enter a parse tree produced by `GITHUBLOGSParser.user_list`.
	 * @param ctx the parse tree
	 */
	enterUser_list?: (ctx: User_listContext) => void;
	/**
	 * Exit a parse tree produced by `GITHUBLOGSParser.user_list`.
	 * @param ctx the parse tree
	 */
	exitUser_list?: (ctx: User_listContext) => void;

	/**
	 * Enter a parse tree produced by `GITHUBLOGSParser.user`.
	 * @param ctx the parse tree
	 */
	enterUser?: (ctx: UserContext) => void;
	/**
	 * Exit a parse tree produced by `GITHUBLOGSParser.user`.
	 * @param ctx the parse tree
	 */
	exitUser?: (ctx: UserContext) => void;

	/**
	 * Enter a parse tree produced by `GITHUBLOGSParser.ext`.
	 * @param ctx the parse tree
	 */
	enterExt?: (ctx: ExtContext) => void;
	/**
	 * Exit a parse tree produced by `GITHUBLOGSParser.ext`.
	 * @param ctx the parse tree
	 */
	exitExt?: (ctx: ExtContext) => void;

	/**
	 * Enter a parse tree produced by `GITHUBLOGSParser.email`.
	 * @param ctx the parse tree
	 */
	enterEmail?: (ctx: EmailContext) => void;
	/**
	 * Exit a parse tree produced by `GITHUBLOGSParser.email`.
	 * @param ctx the parse tree
	 */
	exitEmail?: (ctx: EmailContext) => void;
}

