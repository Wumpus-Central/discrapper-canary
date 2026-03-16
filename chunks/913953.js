n.d(t, { A: () => d });
var i = n(73153),
    r = n(92077),
    l = n(961350),
    a = n(144914);
function s() {
    if (!(0, a.S)()) return;
    let e = l.default.getToken(),
        t = l.default.getId();
    if (null == e) throw Error("missing user token");
    r.Ts(e, t);
}
function o() {
    r.zr();
}
let d = {
    init() {
        i.h.subscribe("CONNECTION_OPEN", s), i.h.subscribe("LOGOUT", o);
    },
};
