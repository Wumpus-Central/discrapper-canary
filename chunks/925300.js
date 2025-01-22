function i(e) {
    return function (n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = n.match(e.matchPattern);
        if (!i) return null;
        var a = i[0],
            o = n.match(e.parsePattern);
        if (!o) return null;
        var s = e.valueCallback ? e.valueCallback(o[0]) : o[0];
        return {
            value: (s = r.valueCallback ? r.valueCallback(s) : s),
            rest: n.slice(a.length)
        };
    };
}
r.d(n, {
    Z: function () {
        return i;
    }
});
