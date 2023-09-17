const fs = require('fs');
const path = require('path');

import { parse } from './parser';

describe('File Parsing', () => {
  it('should parse file contents correctly', () => {
    const filePath = path.resolve(__dirname, 'sample1.txt');
    const fileContents = fs.readFileSync(filePath, 'utf-8');

    const context = parse(fileContents);
    
    expect(context).not.toBeNull();
  });
});
