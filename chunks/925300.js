function i(e) {
    return function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = t.match(e.matchPattern);
        if (!i) return null;
        var r = i[0],
            a = t.match(e.parsePattern);
        if (!a) return null;
        var s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
        return {
            value: (s = n.valueCallback ? n.valueCallback(s) : s),
            rest: t.slice(r.length)
        };
    };
}
n.d(t, { Z: () => i });
