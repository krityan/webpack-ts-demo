import './style.css';
var Milo = require('./milo.png');

var names = [
    'Kritya',
    'Gigsey',
    'LilDisaster',
    'Magurokun',
    'Cemenzo',
    'Driiud',
    'Hydralicious',
    'Neemon',
    'Merydia',
    'Aleste',
    'Pandabearr',
    'Ichioka',
    'Decoil',
    'Ivren',
    'Shazgul',
    'Managust',
    'Rivia'
]

class Raider {

    role:string;
    charClass:string;

    constructor(public name:string, role:string, charClass:string){
        this.setRole(role);
        this.setClass(charClass);
    }

    setRole(role) {
        switch(role.toLowerCase()) {
            case 'dps': this.role = 'DPS'; break;
            case 'healer': this.role = 'Healer'; break;
            case 'tank': this.role = 'Tank'; break;
            default: this.role = 'Not Assigned';
        }
    }

    setClass(charClass) {
        switch(charClass.toLowerCase()) {
            case 'death knight': this.charClass = 'Death Knight'; break;
            case 'demon hunter': this.charClass = 'Demon Hunter'; break;
            case 'druid': this.charClass = 'Druid'; break;
            case 'hunter': this.charClass = 'Hunter'; break;
            case 'mage': this.charClass = 'Mage'; break;
            case 'monk': this.charClass = 'Monk'; break;
            case 'paladin': this.charClass = 'Paladin'; break;
            case 'priest': this.charClass = 'Priest'; break;
            case 'rogue': this.charClass = 'Rogue'; break;
            case 'shaman': this.charClass = 'Shaman'; break;
            case 'warlock': this.charClass = 'Warlock'; break;
            case 'warrior': this.charClass = 'Warrior'; break;
            default: this.charClass = 'Not Chosen';
        }
    }
}

var raiders: Raider[] = [
    new Raider('Kritya', 'DPS', 'Shaman'),
    new Raider('Gigsey', 'DPS', 'Hunter'),
    new Raider('LilDisaster', 'DPS', 'Rogue'),
    new Raider('Magurokun', 'DPS', 'Death Knight'),
    new Raider('Cemenzo', 'DPS', 'Mage'),
    new Raider('Driiud', 'Healer', 'Druid'),
    new Raider('Hydralicious', 'DPS', 'Shaman'),
    new Raider('Neemon', 'Tank', 'Demon Hunter'),
    new Raider('Merydia', 'DPS', 'Paladin'),
    new Raider('Aleste', 'DPS', 'Mage'),
    new Raider('Panadabearr', 'Healer', 'Shaman'),
    new Raider('Ichioka', 'DPS', 'Monk'),
    new Raider('Decoil', 'DPS', 'Warlock'),
    new Raider('Ivren', 'DPS', 'Hunter'),
    new Raider('Shazgul', 'Tank', 'Death Knight'),
    new Raider('Managust', 'DPS', 'Mage'),
    new Raider('Rivia', 'Healer', 'Priest')
]

var ractive = new Ractive({
    el:'#target',
    template:'#template',
    data: {
        greeting: 'Hello',
        name: 'Elucidate',
        names: names,
        raiders: raiders
    },
    computed: {
        noDPS: function() {
            let num = 0;
            raiders.forEach((raider) => {
                if(raider.role === 'DPS')
                num++;
            })
            return num;
        },
        noTanks: function() {
            let num = 0;
            raiders.forEach((raider) => {
                if(raider.role === 'Tank')
                num++;
            })
            return num;
        },
        noHealers: function() {
            let num = 0;
            raiders.forEach((raider) => {
                if(raider.role === 'Healer')
                num++;
            })
            return num;
        }
    }
});

ractive.on('addNewMember', function(context) {
    let name = (<HTMLInputElement>document.getElementById('newNameInput')).value;
    let role = (<HTMLInputElement>document.getElementById('newRoleInput')).value;
    let charClass = (<HTMLInputElement>document.getElementById('newClassInput')).value;

    let raider = new Raider(name, role, charClass);

    raiders.push(raider);
    ractive.update();
    ractive.update('noDPS');
    ractive.update('noTanks');
    ractive.update('noHealers');
});

ractive.on('removeMember', function(context){
    let i = context.node.value;
    raiders.splice(i, 1);

    ractive.update();
    ractive.update('noDPS');
    ractive.update('noTanks');
    ractive.update('noHealers');
});

document.getElementById('newNameInput').onkeypress = function(e) {
    if (e) {
        if(e.keyCode === 13) {
            ractive.fire('addNewMember');
        }
    }
};

document.getElementById('newRoleInput').onkeypress = function(e) {
    if (e) {
        if(e.keyCode === 13) {
            ractive.fire('addNewMember');
        }
    }
};

document.getElementById('newClassInput').onkeypress = function(e) {
    if (e) {
        if(e.keyCode === 13) {
            ractive.fire('addNewMember');
        }
    }
};

function component() {
    var element = document.createElement('div');
    var milo = new Image();
    milo.classList.add('miloPic');
    milo.src = Milo;
    element.appendChild(milo);
    return element;
}

document.body.appendChild(component());