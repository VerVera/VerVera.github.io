function sortCase(a, b) {
    if (a.toLowerCase() == b.toLowerCase()) {
        return 0
    } else if (a.toLowerCase() > b.toLowerCase()) return 1;
    return -1
}
var skills = _.uniq(_.flatMap(data, function (item) {
    return item.skills
})).sort(sortCase);

console.log(skills);

var names = _.flatMap(_.sortBy(data, ['friends']), function (item) {
    return item.name
});

console.log(names);

var friends = _.flatMap(_.flatMap(data, function (item) {
    return item.friends;
}), function(item){return item.name});
friends = _.uniq(friends);
console.log(friends);

