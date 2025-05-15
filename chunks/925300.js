function r(e) {
    return function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = t.match(e.matchPattern);
        if (!r) return null;
        var i = r[0],
            a = t.match(e.parsePattern);
        if (!a) return null;
        var o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
        return {
            value: (o = n.valueCallback ? n.valueCallback(o) : o),
            rest: t.slice(i.length)
        };
    };
}
n.d(t, { Z: () => r });
