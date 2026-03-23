n.d(t, { A: () => d });
var i = n(73153),
    a = n(92077),
    l = n(961350),
    r = n(144914);
function s() {
    if (!(0, r.S)()) return;
    let e = l.default.getToken(),
        t = l.default.getId();
    if (null == e) throw Error("missing user token");
    a.Ts(e, t);
}
function o() {
    a.zr();
}
let d = {
    init() {
        i.h.subscribe("CONNECTION_OPEN", s), i.h.subscribe("LOGOUT", o);
    },
};
