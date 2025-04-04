var r = a(621523),
    n = a(127849).RegExp;
t.exports = r(function () {
    var t = n('.', 's');
    return !(t.dotAll && t.test('\n') && 's' === t.flags);
});
