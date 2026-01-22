n.d(t, {
    A: () => c,
}),
    n(65821);
var r = n(73153),
    i = n(92077),
    l = n(961350),
    a = n(144914);

function s() {
    if (!(0, a.S)()) return;
    let e = l.default.getToken(),
        t = l.default.getId();
    if (null == e) throw Error("missing user token");
    i.Ts(e, t);
}

function o() {
    i.zr();
}
let c = {
    init() {
        r.h.subscribe("CONNECTION_OPEN", s), r.h.subscribe("LOGOUT", o);
    },
};
