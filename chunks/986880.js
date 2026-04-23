let i;
n.d(t, { Ay: () => S });
var r = n(73153),
    a = n(31728),
    l = n(272355),
    s = n(87001),
    o = n(734057),
    d = n(186111),
    u = n(334463),
    c = n(383501),
    A = n(309010),
    h = n(967198),
    _ = n(977997),
    E = n(998740),
    p = n(652215);
function m(e) {
    return `haven:${e}`;
}
function g() {
    let e = i;
    if (null == e) return !1;
    let t = m(e);
    if (!u.A.isOpen(t)) return !1;
    let n = u.A.pipHavenWindow;
    if (null == n || n.id !== t) return (i = null), !1;
    r.h.wait(() => a.VN(t)), (i = null);
}
function I() {
    return d.A.hasLayers();
}
function C() {
    let e,
        t,
        n = c.A.getChannelId(),
        l = null != n ? o.A.getChannel(n) : null;
    if (
        ((e = c.A.getChannelId()),
        (t = A.A.getChannelId()),
        null == e || !E.A.isUserConnected(e) || e === t || s.A.getWindowOpen(p.MLl.CHANNEL_CALL_POPOUT) || 0)
    )
        return g();
    if (null != l && E.A.isUserConnected(l.id)) {
        if (i !== l.id) {
            let e = m(l.id);
            if (u.A.isOpen(e)) return !1;
            if (null != i) {
                let e = i;
                r.h.wait(() => a.VN(e));
            }
            return (
                r.h.wait(() => {
                    a.ho(e, p.o1q.HAVEN, { channel: l }), I() && a.jD(e);
                }),
                (i = l.id),
                !0
            );
        }
        return !1;
    }
    return g();
}
function f() {
    if (I()) {
        let e = void 0 ?? i;
        if (null == e) return;
        let t = m(e);
        u.A.isOpen(t) && r.h.wait(() => a.jD(t));
        return;
    }
    let e = void 0 ?? i;
    if (null == e) return;
    let t = m(e);
    u.A.isOpen(t) && r.h.wait(() => a.WU(t));
}
class T extends l.A {
    _initialize() {
        A.A.addChangeListener(C),
            h.A.addChangeListener(C),
            c.A.addChangeListener(C),
            _.A.addChangeListener(C),
            d.A.addChangeListener(f),
            E.A.addChangeListener(C),
            s.A.addChangeListener(C);
    }
    _terminate() {
        A.A.removeChangeListener(C),
            h.A.removeChangeListener(C),
            c.A.removeChangeListener(C),
            _.A.removeChangeListener(C),
            d.A.removeChangeListener(f),
            E.A.removeChangeListener(C),
            s.A.removeChangeListener(C);
    }
}
let S = new T();
