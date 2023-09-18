# github-logs-parser

Antlr4 generated parser for parsing GitHub logs produced using `git log --pretty="<%aN <%aE>" | sort | uniq`.

## Description

The `github-logs-parser` library provides a simple way to parse GitHub log entries. It can handle various formats including individual GitHub log entries, paired email entries, and more.

## Features

- Handles white spaces before and after log entries.
- Can parse paired email entries with multiple names.
- Detects invalid GitHub and paired email entries.
- Manages tabs and other whitespace formats.

## Installation

```bash
npm install github-logs-parser
```

## Usage

To use the parser:

```javascript
import { parse } from 'github-logs-parser';

const parsed = parse("Your GitHub log entry here");
console.log(parsed);
```

## Tests

The package is thoroughly tested to ensure its reliability:

- Handling of white space before and after an entry.
- Parsing of a paired email entry with two names.
- Return null for invalid GitHub or paired email entries.
- Management of tabs and other whitespace characters.

## Requirements

This library is written in TypeScript and requires:

- Node.js v12 or newer.
- TypeScript v5 or newer (if you're using TypeScript).

## Contributing

If you find any issues or would like to contribute, please create a pull request or open an issue on [our GitHub repository](https://github.com/emmett08/github-logs-parser).

## License

MIT
