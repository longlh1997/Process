class searchByNameConditon {
    constructor(name) {
        this.name = name;
    }
    buildwareCondition(query) {
        let result = query.where('name', 'like', '%' + this.name + '%');
        return result;
    }
}

module.exports = searchByNameConditon;