import { parse } from "./parser";
import * as fs from 'fs';
import * as path from 'path';

describe('File Parsing', () => {
  it('should parse file contents correctly', () => {
    const filePath = path.resolve(__dirname, 'sample1.txt');
    const fileContents = fs.readFileSync(filePath, 'utf-8');

    const context = parse(fileContents);
    
    expect(context).not.toBeNull();
  });
});
