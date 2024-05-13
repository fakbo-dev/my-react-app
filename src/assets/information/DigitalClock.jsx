import { useState, useEffect } from "react"

function DigitalClock() {

    const [time, setTime] = useState(new Date());


    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    function formatTime() {
        let hour = time.getHours();
        const minute = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hour >= 12 ? "PM" : "AM";

        hour = hour % 12 || 12;

        return `${padZero(hour)}:${padZero(minute)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }
    return (
        <div className="clock-container">
            <div className="clock-display">
                <span>{formatTime()}</span>
            </div>

        </div>
    )
}

export default DigitalClock