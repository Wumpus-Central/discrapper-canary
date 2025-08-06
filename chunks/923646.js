var r = n(621523),
    i = n(127849).RegExp;
e.exports = r(function () {
    var e = i(".", "s");
    return !(e.dotAll && e.test("\n") && "s" === e.flags);
});
