// ||================ ES6 ====================||
// method defination shorthand
const product = {
    buy: function () {
        console.log('this is method before es6');
    },
    get() {
        console.log('this is method after es6 and this is called method defn shorthand');
    }
}
product.buy()
// ||-------------------------------------||
// property shorthand
const accessToken = 'tttoo3530440437'
const refreshToken = '497439j4hr84l4'


const user1 = {
    // accessToken: accessToken,
    // refereshToken: refreshToken,
    // here by the new enhancement you can write above as below
    accessToken,
    refreshToken
}
// ||--------------------------------------||

// destructuring in Javascript

let user2 = {
    name: 'Jordon',
    age: 18
}

// const { name, age } = user2;
// OR You can assign variable name 
const { name: PersonName, age } = user2
// console.log(age);
// console.log(PersonName);

// Destructuring in Arrays
let ArrUser1 = ['Nikhil', 2025, 'GCP']
const [a, b, c] = ArrUser1;

// console.log(a);
// console.log(b);
// console.log(c);
// ||------------------------------------||

// Default Parameters
let register = (id, password, image = 'Demo.png') => {
    console.log(id, password, image);
}
register('T002023', 'dfaoe343T')
// ||--------------------------------------||

// Spread

let user3 = ['C', 'CPP', 'Java', '.net', 'Python'];
// const AllLanguages = [...user3];
// if add to more you can 
// const AllLanguages=[Typescript,...user3]

// console.log(AllLanguages);

// Spread in Objects
const setting = {
    volume: 40,
    brightness: 60
}
const NewSettings = setting;
// settings is pointing the setting both are same
// this copy done by reference not by values they showing same address
// check both are same or not
console.log(NewSettings === setting); // show true if same

// change the volume value
NewSettings.volume = 100;
// console.log(`NewSettings value`, NewSettings.volume);
// console.log(`setting value`, setting.volume);

// copy but not pointing same address
const privacy = {
    verification: 'Good',
    authorization: 'success'
}
const NewPrivacy = { ...privacy };
NewPrivacy.authorization = 'Hacked';

// console.log(`privacy values of authorization is`, privacy.authorization);
// console.log(`NewPrivacy values of authorization`, NewPrivacy.authorization);

// spread is used for shallow copy 

// add more properties and override the value too  in your object using spread
let AddMore = {
    a1: 2,
    a2: 3
}
const AddedMore = { ...AddMore, a3: 'propertyAdded', a1: 'PropertyOverride' }
// console.log(AddedMore);

const surajASk={...NewPrivacy,...AddedMore}
console.log(surajASk);

// ||-------------------------------||

// destructing 
console.log('------- Revise the topics -------');
const netflix = ['Asur 2', 'halo', 'fazi', 'cobra kai'];
const F1 = [a1, b1, c1] = netflix;

// console.log(a1);
// console.log(b1);
// console.log(c1);

// const JioCinema = ['Subh', 'Nikhil', 'Naina', 'DJ', 'Lokark']

// const Access = [Devil, CBI, CyberExpert, Suspended, Unknown];
// console.log(Devil);
// console.log(CBI);
// console.log(CyberExpert);


