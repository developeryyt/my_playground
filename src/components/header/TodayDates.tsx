import {getTodayDates} from "@/util/timeChange";

const TodayDates = () => {

    const today = getTodayDates();


    console.log(today)

    return (
        <div>
            <span>{today.day} {today.mth}, {today.year}</span>
        </div>
    );
};

export default TodayDates;