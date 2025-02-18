import {getTodayDates} from "@/util/timeChange";

const TodayDates = () => {

    const today = getTodayDates();


    return (
        <div>
            <span className='text-sm text-grey700'>{today.day} {today.mth}, {today.year}</span>
        </div>
    );
};

export default TodayDates;