var n = r(621523),
    i = r(127849).RegExp;
t.exports = n(function () {
    var t = i('.', 's');
    return !(t.dotAll && t.test('\n') && 's' === t.flags);
});
