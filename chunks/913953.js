n.d(t, { A: () => d });
var i = n(73153),
    r = n(92077),
    a = n(961350),
    l = n(144914);
function s() {
    if (!(0, l.S)()) return;
    let e = a.default.getToken(),
        t = a.default.getId();
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
