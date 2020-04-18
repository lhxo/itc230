//array of fruits and vegetables and their color and ranking
let FV = [
    { name:'Brocoli', type:'Vegetable', color:'Green', tier:'A'},
    { name:'Peach', type:'Fruit', color:'Red Orange', tier:'B'},
    { name:'Mango', type:'Fruit', color:'Yellow Orange', tier:'A'},
    { name:'Green Papaya', type:'Fruit', color:'Green', tier:'B'},
    { name:'Papaya', type:'Fruit', color:'Orange', tier:'Trash'},
    { name:'Kale', type:'Vegetable', color:'Green', tier:'Trash'},
    { name:'Spinach', type:'Vegetable', color:'Green', tier:'A'},
    { name:'Carrots', type:'Vegetable', color:'Orange', tier:'C'},
    { name:'Durian', type:'Fruit', color:'Yellow', tier:'Trash'},
    { name:'Asparagus', type:'Vegetable', color:'Green', tier:'A'},
    { name:'Beets', type:'Vegetable', color:'Purple', tier:'B'},
    { name:'Tangerines', type:'Fruit', color:'Orange', tier:'A'},
    { name:'Cherries', type:'Fruit', color:'Maroon', tier:'B'},
    { name:'Avocado', type:'Fruit', color:'Green', tier:'A'},
    { name:'Pineapple', type:'Fruit', color:'Yellow', tier:'A'},
    { name:'Passionfruit', type:'Fruit', color:'Yellow', tier:'B'},
    { name:'Corn', type:'Vegetable', color:'Yellow', tier:'A'},
    { name:'Mushroom', type:'Vegetable', color:'Varies', tier:'A'},
    { name:'Potato', type:'Vegetable', color:'Brown', tier:'A'},
    { name:'Cucumber', type:'Vegetable', color:'Green', tier:'C'},
    { name:'Celery', type:'Vegetable', color:'Green', tier:'C'},
    { name:'Green Beans', type:'Vegetable', color:'Green', tier:'A'},
    { name:'Peppers', type:'Vegetable', color:'Varies', tier:'B'},
    { name:'Orange', type:'Fruit', color:'Orange', tier:'B'},
    { name:'Grapefruit', type:'Fruit', color:'Maroon', tier:'A'},
];

//exports the array name as itself
// exports.FV = FV;

//exports all data from the FV array
exports.getAll = () => {
    return FV;
}