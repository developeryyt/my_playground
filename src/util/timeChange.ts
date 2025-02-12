export const getTodayDates = (): {
    mth: string;
    day: number;
    year: number;
} => {

    const today = new Date();
    const year = today.getFullYear();
    const day = today.getDate();
    let mth = ''

    switch(today.getMonth()) {
        case 0:
            mth = 'January';
            break;
        case 1:
            mth = 'February';
            break;
        case 2:
            mth = 'March';
            break;
        case 3:
            mth = 'April';
            break;
        case 4:
            mth = 'May';
            break;
        case 5:
            mth = 'June';
            break;
        case 6:
            mth = 'July';
            break;
        case 7:
            mth = 'August';
            break;
        case 8:
            mth = 'September';
            break;
        case 9:
            mth = 'October';
            break;
        case 10:
            mth = 'November';
            break;
        case 11:
            mth = 'December';
            break;
    }


    return {
        mth,
        day,
        year
    }
}