class ranks {
    constructor() {
        this.ranks = {
            10000: 'Iron',
            20000: 'Bronze',
            50000: 'Silver',
            95000: 'Gold'
        };
    }
    registerrank(value, rank) {
        this.ranks[value] = rank;
    }
    rank(money) {
        var rankvalue = Object.keys(this.ranks);
        const length = rankvalue.length -1;
        var temp = 0;
        for(var i = 0; i <= length; i++) {
            if(money > rankvalue[i]) {
                if(rankvalue[i] > temp) {
                    temp = rankvalue[i];
                }
            }
            
            if(i == length) {
                return this.ranks[temp];
            }
        }
    }  

}

module.exports = ranks;