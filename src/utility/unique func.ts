import {BookType} from "../store/bookReducer";

export function unique(favoriteBooks: Array<BookType>): Array<BookType> {
    let result: Array<BookType> = [];
    for (let str of favoriteBooks) {
        if (!result.includes(str)) {
            result = [...result, str]
        }
    }
    return result;
}