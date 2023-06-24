import { useEffect, useState } from "react";


function ScrambleText(props) {
    const text = props.text?? props.children;
    const delay = props.delay?? 0;
    const scrambledTimes = props.scrambledTimes?? 10;
    const primaryColor = props.primaryColor?? 'black';
    const secondaryColor = props.secondaryColor?? 'red';
    const appearAll = props.appearAll?? true;
    const onHover = props.onHover?? true;

    const [shownWord, setShownWord] = useState('');
    const [onScrambled, setOnScrambled] = useState(false);


    useEffect(() => {
        scramble();
    }, [])

    async function scramble() {
        if (!onScrambled) {
            setOnScrambled(true);
        } else {
            return;
        }
        let word = text;
        let letters = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        let curCorrectLetter = -1;
        
        await sleep(delay);
        
        for (let i = 0; i < scrambledTimes + word.length; i++) {
            let curWord = [];

            if (i >= scrambledTimes) {
                curCorrectLetter++;
            }

            for (let l = 0; l < word.length; l++) {
                let random = letters[Math.floor(Math.random() * letters.length)];
                let color = secondaryColor;
                let opacity = 1;
                if (!appearAll) {
                    opacity = 0;
                }

                if (word[l] == " " || word[l] == "-") {
                    random = word[l];
                }
                if (curCorrectLetter >= l) {
                    random = word[l];
                    color = primaryColor;
                    opacity = 1;
                }
                
                curWord.push(<span style={{color:color, opacity: opacity}} key={l}>{random}</span>)
            }
            setShownWord(curWord);
            
            await sleep(30);
        }

        setShownWord(word);
        setOnScrambled(false);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <div style={props.style} onMouseOver={onHover ? scramble: null}>
            {shownWord}
        </div>
    )
}

export default ScrambleText;