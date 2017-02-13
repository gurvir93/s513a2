//
// this is just a stub for a function you need to implement
//

function numOfChar(string) {
    // Regular expression, get all characters
    let regExp = /./g;
    let retThis = string.match(regExp);

    if (retThis)
    {
        return retThis.length;
    }
    else
    {
        return 0;
    }
}

function numOfWords(string) {
    // Regular expression, get all words
    let regExp = /\w+/g;
    let retThis = string.match(regExp);

    if (retThis)
    {
        return retThis.length;
    }
    else
    {
        return 0;
    }
}

function numOfLines(string) {
    // Regular expression, get all lines
    let regExp = /\n/g;
    let retThis = string.match(regExp);

    // Add one for first line
    if(retThis)
    {
        return retThis.length + 1;
    }
    else
    {
        return 1;
    }
}

function nonEmptyLines(string) {
    // Regular expression, check if line non-empty
    let regExp = /\n*.+/g;
    let retThis = string.match(regExp);

    if(retThis)
    {
        return retThis.length;
    }
    else
    {
        return 0;
    }
}

function avgWordLength (string) {
    // Regular expression, get all words and second is to get all characters
    let regExp = /\w+/g;
    let regExp2 = /./g;
    let wordArray = string.match(regExp);

    if (wordArray)
    {
        let totalWordLen = 0;
        for (let i = 0; i < wordArray.length; i++)
        {
            totalWordLen += wordArray[i].match(regExp2).length;
        }

        return totalWordLen / wordArray.length;
    }

    else
    {
        return 0.0;
    }
}

function maxLineLength (string) {
    let maxLine = 0;

    // Regular expressions, separate items by lines
    let regExp = /\n*.+/g;
    let regExp2 = /./g;
    let lineArray = string.match(regExp);

    if (lineArray)
    {
        let iLen = 0;
        for (let i = 0; i < lineArray.length; i++)
        {
            // Remove all /n from array item
            lineArray[i] = lineArray[i].match(regExp2);

            iLen = lineArray[i].length;

            // Check if this line is longer then other previous lines;
            if (iLen > maxLine)
            {
                maxLine = iLen;
            }
        }
    }

    return maxLine;
}

function findPalindromes (string) {
    let palindromes = [];
    let backwardsWord = "";

    // Regular expression to get words into array
    let regExp = /\w+/g;
    let wordArray = string.match(regExp);

    // Ensure array is not epty
    if (wordArray)
    {
        for (let i = 0; i < wordArray.length; i++)
        {
            // Check to ensure word is more than 2 characters
            if (wordArray[i].length > 2)
            {
                // Split string into array, reverse the array, and put back into string
                backwardsWord = wordArray[i].split("").reverse().join("");

                // Check if words are the same
                if (wordArray[i] === backwardsWord) {
                    palindromes.push(wordArray[i]);
                }
            }
        }
        return palindromes;
    }
}

function longestWords (string) {
    let longWordArray = [];
    let currArray = [];

    // Regular expression to get words into array
    let regExp = /\w+/g;
    let wordArray = string.match(regExp);

    // Check if array is empty
    if (wordArray)
    {
        // Make all characters in array lowercase
        for (let i = 0; i < wordArray.length; i++) {
            wordArray[i] = wordArray[i].toLowerCase();
        }

        // Sort array by string lengths
        wordArray.sort(
            function(a, b) {
                if(a.length > b.length) {return -1;}
                if(a.length < b.length) {return 1;}
                return 0;
            }
        );

        // Loop to separate lengths of arrays and alphabetically sort
        for (let i = 0; i < wordArray.length; i++) {
           if (currArray.length === 0)
               currArray.push(wordArray[i]);

           // See if next array item has same string length, add to temp array if it does
           else if (wordArray[i].length === currArray[0].length)
               currArray.push(wordArray[i]);

           if (i === wordArray.length-1 || wordArray[i + 1].length != currArray[0].length) {
               // Sort array alphabetically
               currArray.sort(
                   function (a, b) {
                       if (a > b) {return 1;}
                       if (a < b) {return -1;}
                       return 0;
                   }
               );

               // Push elements into array for output, ensure not out of bounds with 2 counters
               for (let j = longWordArray.length, k = 0; j < 10 && k < currArray.length; j++, k++) {
                   // Do not add if previous element was the same string
                   if (longWordArray[longWordArray.length-1] != currArray[k])
                   {
                       longWordArray.push(currArray[k]);
                   }
               }

               currArray = [];

               // If we have 10 items, break from for loop
               if (longWordArray.length >= 10) {
                   break;
               }
           }
       }
    }
    return longWordArray;
}

function mostFrequentWords(string) {
    let frequentWordArray = [];
    let tempArray = [];
    let currArray = [];
    let count = 0;

    // Regular expression to get words into array
    let regExp = /\w+/g;
    let wordArray = string.match(regExp);

    // Check if array is empty
    if (wordArray)
    {
        // Make all characters in array lowercase
        for (let i = 0; i < wordArray.length; i++) {
            wordArray[i] = wordArray[i].toLowerCase();
        }

        // Sort array alphabetically
        wordArray.sort(
            function (a, b) {
                if (a > b) {return 1;}
                if (a < b) {return -1;}
                return 0;
            }
        );

        // Count frequency of words, store into new array as object so it cam be sorted
        for (let i = 0; i < wordArray.length-1; i++)
        {
            if(count === 0) {
                count++;
            }

            if(wordArray[i] === wordArray[i+1])
            {
                count++;
            }
            else
            {
                tempArray.push({word: wordArray[i], freq: count});
                count = 0;
            }
        }

        // Sort strings by frequency
        tempArray.sort(
            function(a,b) {
                if (a.freq > b.freq) {return -1;}
                if (a.freq < b.freq) {return 1;}
                return 0;
            }
        );

        for(let i = 0; i < tempArray.length; i++)
        {
            if (currArray.length === 0)
            {
                currArray.push(tempArray[i]);
            }
            else if (tempArray[i].freq === currArray[0].freq)
            {
                currArray.push(tempArray[i]);
            }

            if (i === tempArray.length-1 || tempArray[i+1].freq != currArray[0].freq)
            {
                // Sort array alphabetically
                currArray.sort(
                    function (a, b) {
                        if (a.word > b.word) {return 1;}
                        if (a.word < b.word) {return -1;}
                        return 0;
                    }
                );

                // Push elements into array for output, ensure not out of bounds with 2 counters
                for (let j = frequentWordArray.length, k = 0; j < 10 && k < currArray.length; j++, k++) {
                    frequentWordArray.push(currArray[k].word + '(' + currArray[k].freq + ')');
                }

                currArray = [];

                // If we have 10 items, break from for loop
                if (frequentWordArray.length >= 10) {
                    break;
                }
            }
        }
    }

    return frequentWordArray;
}

function getStats(txt) {
    return {
        nChars: numOfChar(txt),
        nWords: numOfWords(txt),
        nLines: numOfLines(txt),
        nNonEmptyLines: nonEmptyLines(txt),
        averageWordLength: avgWordLength(txt),
        maxLineLength: maxLineLength(txt),
        palindromes: findPalindromes(txt),
        longestWords: longestWords(txt),
        mostFrequentWords: mostFrequentWords(txt)
    };
}

