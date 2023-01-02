/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

     var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };

    //iterate through books
    if (searchTerm != null && searchTerm != ""){
        for (var STOInd = 0; STOInd < scannedTextObj.length; STOInd++){
            var content = scannedTextObj[STOInd].Content;

            //iterate through content and add matching entries to results
            for (var i = 0; i < content.length; i++){
                if (content[i].Text.includes(searchTerm)){
                    result.Results.push(
                        formatResult(scannedTextObj[STOInd].ISBN,content[i])
                    )
                }
            }
        }
    }
    
    return result; 
}

/**
 * Returns object containing all relevant information for result.
 * @param {string} ISBN - A string containing the ISBN of the book.
 * @param {object} contentLine - The entry in Content containing the appropriate Page, Line, and Text. 
 * @returns {object} - An set of key-value pairs containing the appropriate ISBN, page, and text.
 * */ 
function formatResult(ISBN, contentLine){
    return {
        "ISBN": ISBN,
        "Page": contentLine.Page,
        "Line": contentLine.Line
    };
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

const pangramIn = [
    {
        "Title": "PangramA",
        "ISBN": "2436086543278",
        "Content": [
            {
                "Page": 1,
                "Line": 1,
                "Text": "The quick brown fox"
            },
            {
                "Page": 1,
                "Line": 2,
                "Text": "jumps over"
            },
            {
                "Page": 1,
                "Line": 3,
                "Text": "the lazy dog"
            } 
        ] 
    },
    {
        "Title": "PangramB",
        "ISBN": "1648640862894",
        "Content": [
            {
                "Page": 1,
                "Line": 1,
                "Text": "A mad boxer"
            },
            {
                "Page": 1,
                "Line": 2,
                "Text": "shot a quick, gloved jab"
            },
            {
                "Page": 1,
                "Line": 3,
                "Text": "to the jaw"
            },
            {
                "Page": 1,
                "Line": 4,
                "Text": "of his dizzy opponent!"
            }  
        ] 
    }

]

const emptyIn = []
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const twentyLeaguesOutAnd = {
    "SearchTerm": "and",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
}

const twentyLeaguesOutEmpty = {
    "SearchTerm": "supercalifragilisticexpialidocious",
    "Results": []
}

const twentyLeaguesOutCase = {
    "SearchTerm": "The",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

const twentyLeaguesOutSpace = {
    "SearchTerm": "  ",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

const twentyLeaguesOutPunct = {
    "SearchTerm": "rk-",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

const pangramOut = {
    "SearchTerm": "i",
    "Results": [
        {
            "ISBN": "2436086543278",
            "Page": 1,
            "Line": 1
        },
        {
            "ISBN": "1648640862894",
            "Page": 1,
            "Line": 2
        },
        {
            "ISBN": "1648640862894",
            "Page": 1,
            "Line": 4
        }
    ]
}

const emptyOut = {
    "SearchTerm": "",
    "Results": []
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** Test for output where searchTerm appears in multiple lines. */
const test3result = findSearchTermInBooks("and", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOutAnd) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesOutAnd);
    console.log("Received:", test3result);
}

/** Test for if a search term isn't found. */
const test4result = findSearchTermInBooks("supercalifragilisticexpialidocious", twentyLeaguesIn);
if ((JSON.stringify(twentyLeaguesOutEmpty) === JSON.stringify(test4result)) && (test4result.Results.length == 0)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", twentyLeaguesOutEmpty);
    console.log("Received:", test4result);
}

/** Test for case sensitivity. */
const test5result = findSearchTermInBooks("The", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOutCase) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", twentyLeaguesOutCase);
    console.log("Received:", test5result);
}

/** Test if multiple spaces are taken into account. */
const test6result = findSearchTermInBooks("  ", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOutSpace) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", twentyLeaguesOutSpace);
    console.log("Received:", test6result);
}

/** Test for part of word that also has punctuation. */
const test7result = findSearchTermInBooks("rk-", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOutPunct) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", twentyLeaguesOutPunct);
    console.log("Received:", test7result);
}

/** Test input object with multiple books. */
const test8result = findSearchTermInBooks("i", pangramIn);
if (JSON.stringify(pangramOut) === JSON.stringify(test8result)) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", pangramOut);
    console.log("Received:", test8result);
}

/** Test empty search term. */
const test9result = findSearchTermInBooks("", pangramIn);
if (JSON.stringify(emptyOut) === JSON.stringify(test9result)) {
    console.log("PASS: Test 9");
} else {
    console.log("FAIL: Test 9");
    console.log("Expected:", emptyOut);
    console.log("Received:", test9result);
}

/** Test empty input and search term. */
const test10result = findSearchTermInBooks("", emptyIn);
if (JSON.stringify(emptyOut) === JSON.stringify(test10result)) {
    console.log("PASS: Test 10");
} else {
    console.log("FAIL: Test 10");
    console.log("Expected:", emptyOut);
    console.log("Received:", test10result);
}