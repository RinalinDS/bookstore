import React, {useEffect, useState} from 'react';

const generateString = (num: number) => num < 10 ? '0' + num : num

export const Clock = () => {
    const [date, setDate] = useState(new Date())


    useEffect(() => {
        let id = setInterval(() => {
            setDate(new Date())
            return () => {
                clearInterval(id)
            }
        }, 1000)
    }, [])


    return (
        <div>
            <span>
                   {generateString(date.getHours())}:{generateString(date.getMinutes())}:{generateString(date.getSeconds())}
               </span>
        </div>
    );
};
