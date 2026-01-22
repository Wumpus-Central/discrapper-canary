n.d(t, { A: () => f });
var r = n(559374),
    i = n(619881),
    a = n(175924),
    s = n(444746),
    o = n(439776),
    l = n(543894),
    c = n(205219);
function u(e) {
    return (0, s.sb)(e) && "fixed" !== (0, a.A)(e).position ? e.offsetParent : null;
}
function d(e) {
    var t = /firefox/i.test((0, c.A)());
    if (/Trident/i.test((0, c.A)()) && (0, s.sb)(e) && "fixed" === (0, a.A)(e).position) return null;
    var n = (0, l.A)(e);
    for ((0, s.Ng)(n) && (n = n.host); (0, s.sb)(n) && 0 > ["html", "body"].indexOf((0, i.A)(n)); ) {
        var r = (0, a.A)(n);
        if (
            "none" !== r.transform ||
            "none" !== r.perspective ||
            "paint" === r.contain ||
            -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
            (t && "filter" === r.willChange) ||
            (t && r.filter && "none" !== r.filter)
        )
            return n;
        n = n.parentNode;
    }
    return null;
}
function f(e) {
    for (var t = (0, r.A)(e), n = u(e); n && (0, o.A)(n) && "static" === (0, a.A)(n).position; ) n = u(n);
    return n && ("html" === (0, i.A)(n) || ("body" === (0, i.A)(n) && "static" === (0, a.A)(n).position))
        ? t
        : n || d(e) || t;
}
