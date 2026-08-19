n.d(t, { A: () => O, z: () => u });
var c = n(702841),
    r = n(885386),
    i = n(576705),
    E = n(652215);
function O(e, t) {
    switch (e) {
        case E.P6Q.ALWAYS:
            return !0;
        case E.P6Q.IF_MODERATOR:
            return t;
        case E.P6Q.ON_CLICK:
        default:
            return !1;
    }
}
function u(e) {
    let t = (0, c.bG)([i.A], () => i.A.can(E.xBc.MANAGE_MESSAGES, e));
    return !O(r.gs.useSetting(), t);
}
