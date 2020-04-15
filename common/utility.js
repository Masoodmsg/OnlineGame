var utility = {

    array: {
        pluck(array, field) {

            var pluck = [], a, e, c;

            for (a = 0, e = array.length; a < e; a++) {
                c = array[a];
                pluck.push(c[field])
            }
            return pluck
        }
    }
}

module.exports = utility