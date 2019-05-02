class totalMoney {
    buildwareCondition(query, id) {
        let totalMoney = query.where('id', id);
        return totalMoney;
    }
}

module.exports = totalMoney;