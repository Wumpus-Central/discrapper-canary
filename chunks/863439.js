n.d(t, { A: () => l, z: () => s });
var i = n(417597),
    a = n(253932),
    o = n(576705),
    r = n(652215);
function l(e, t) {
    switch (e) {
        case r.P6Q.ALWAYS:
            return !0;
        case r.P6Q.IF_MODERATOR:
            return t;
        case r.P6Q.ON_CLICK:
        default:
            return !1;
    }
}
function s(e) {
    let t = (0, i.bG)([o.A], () => o.A.can(r.xBc.MANAGE_MESSAGES, e));
    return !l(a.gs.useSetting(), t);
}
