var moment = require('moment')
var lan='hindi', date = '2018-02-03', y1 = '2018', y2 = '2019'
let com = {
    '2':{
    mod: 0,
    in: 0
}
}

let obj1 = {};

obj1[y1] = {
    '2':{
    mod: 0,
    in: 0
}
};
obj1[y2] = com;

let test = {
    'hindi': {
        '2018-02-03':{
            moderated: 1
        },
        '2018-02-04':{
            moderated: 10
        },
        '2019-02-03':{
            moderated: 2,
            inprogress: 1
        }
    }
}

for (const key in test[lan]) {
    let year = moment(key, 'YYYY/MM/DD').year()
    let month = 1 + moment(key, 'YYYY/MM/DD').month()
    if(test[lan][key].moderated){
        obj1[year][month].mod += test[lan][key].moderated
    }
    if(test[lan][key].inprogress){
        obj1[year][month].in += test[lan][key].inprogress
    }
    
}

console.log(obj1);


