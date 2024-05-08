class Dates {

    getDate = (date) => {
        let newDate = ``;

        if (date.getDate() < 10) {
            newDate = `0${date.getDate()}/`;
        } else newDate = `${date.getDate()}/`;

        if (date.getMonth() < 10) {
            newDate += `0${date.getMonth()}/`;
        } else newDate += `${date.getMonth()}/`;

        if (date.getYear()) {
            newDate += `${date.getYear() + 1900}`;
        }

        return newDate;
    }

}

export default new Dates();