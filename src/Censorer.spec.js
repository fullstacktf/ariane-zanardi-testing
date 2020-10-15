const { Censorer } = require("./Censorer")

import { CensoredTextWriter } from "./io-utils/CensoredTextWriter";
import { TextFileReader } from "./io-utils/TextFileReader";
import { BannedWordsListFileReader } from "./io-utils/BannedWordsListFileReader";


describe("Censorer", () => {
    it("censors single words", () => {
       
        const textFileReader = new TextFileReader();
        const bannedWordsListFileReader = new BannedWordsListFileReader();
        const censoredTextWriter = new CensoredTextWriter();

        const censorer = new Censorer(textFileReader, bannedWordsListFileReader, censoredTextWriter);
    });
});