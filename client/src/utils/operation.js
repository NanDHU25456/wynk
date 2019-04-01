import moment from 'moment';
const operation = (res, startDate, endDate) => {
    let lan = 'hindi';
    let y1 = moment(startDate, 'YYYY/MM/DD').year(),
        y2 = moment(endDate, 'YYYY/MM/DD').year(),
        obj1 = {}

    obj1[y1] = {
        '1': {
            mod: 0,
            in: 0
        },
        '2': {
            mod: 0,
            in: 0
        },
        '3': {
            mod: 0,
            in: 0
        },
        '4': {
            mod: 0,
            in: 0
        },
        '5': {
            mod: 0,
            in: 0
        },
        '6': {
            mod: 0,
            in: 0
        },
        '7': {
            mod: 0,
            in: 0
        },
        '8': {
            mod: 0,
            in: 0
        },
        '9': {
            mod: 0,
            in: 0
        },
        '10': {
            mod: 0,
            in: 0
        },
        '11': {
            mod: 0,
            in: 0
        },
        '12': {
            mod: 0,
            in: 0
        },
    }
    obj1[y2] = {
        '1': {
            mod: 0,
            in: 0
        },
        '2': {
            mod: 0,
            in: 0
        },
        '3': {
            mod: 0,
            in: 0
        },
        '4': {
            mod: 0,
            in: 0
        },
        '5': {
            mod: 0,
            in: 0
        },
        '6': {
            mod: 0,
            in: 0
        },
        '7': {
            mod: 0,
            in: 0
        },
        '8': {
            mod: 0,
            in: 0
        },
        '9': {
            mod: 0,
            in: 0
        },
        '10': {
            mod: 0,
            in: 0
        },
        '11': {
            mod: 0,
            in: 0
        },
        '12': {
            mod: 0,
            in: 0
        },
    }
    for (const key in res[lan]) {
        let year = moment(key, 'YYYY/MM/DD').year()
        let month = 1 + moment(key, 'YYYY/MM/DD').month()
        if (res[lan][key].moderated) {
            obj1[year][month].mod += res[lan][key].moderated
        }
        if (res[lan][key].inprogress) {
            obj1[year][month].in += res[lan][key].inprogress
        }

    }
    return obj1;
}

export default operation;