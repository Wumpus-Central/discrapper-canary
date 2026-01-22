var r = n(120394),
    i = n(370001),
    a = RangeError;
e.exports = function (e) {
    if (void 0 === e) return 0;
    var t = r(e),
        n = i(t);
    if (t !== n) throw new a("Wrong length or index");
    return n;
};
