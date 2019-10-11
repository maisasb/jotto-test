import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
    const secretWord = 'party';
    const unsuccessfulGuess = 'train';

    describe('NO guessed words', () => {
        let store;
        const initialState = { secretWord };
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test('updates state correctly for UNsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfulGuess,
                    letterMatchCount: 3
                }]
            }
            const newState = store.getState();
            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord));
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [{
                    guessedWord: secretWord,
                    letterMatchCount: 5
                }]
            }
            const newState = store.getState();
            expect(newState).toEqual(expectedState);
        
        });
    });

    describe('SOME guessed words', () => {
        const guessedWords = [ { guessedWord: 'agile', letterMatchCount: 1 } ];
        const initialState = { guessedWords, secretWord };
        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        })
        test('updates state correctly for UNsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: false,
                guessedWords: [...guessedWords, 
                    { guessedWord: unsuccessfulGuess, letterMatchCount: 3}]
            }
            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [...guessedWords, 
                    { guessedWord: secretWord, letterMatchCount: 5}]
            }
            expect(newState).toEqual(expectedState);
        });
    });

});