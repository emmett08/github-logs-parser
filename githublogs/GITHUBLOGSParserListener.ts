// Generated from GITHUBLOGSParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./GITHUBLOGSParser";
import { EntryContext } from "./GITHUBLOGSParser";


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
}

