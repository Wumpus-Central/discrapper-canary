function r(e) {
    return function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = t.match(e.matchPattern);
        if (!r) return null;
        var i = r[0],
            o = t.match(e.parsePattern);
        if (!o) return null;
        var a = e.valueCallback ? e.valueCallback(o[0]) : o[0];
        return {
            value: (a = n.valueCallback ? n.valueCallback(a) : a),
            rest: t.slice(i.length)
        };
    };
}
n.d(t, { Z: () => r });
