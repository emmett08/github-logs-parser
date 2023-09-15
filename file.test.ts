const fs = require('fs');
const path = require('path');

import { parse } from './parser';

describe('File Parsing', () => {
  it('should parse file contents correctly', () => {
    const filePath = path.join(__dirname, 'sample.txt');
    const fileContents = fs.readFileSync(filePath, 'utf-8');

    const context = parse(fileContents);
    
    expect(context).not.toBeNull();
  });
});
