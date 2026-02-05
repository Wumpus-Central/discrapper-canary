let i;
n.d(t, { Ay: () => T });
var r = n(73153),
    a = n(31728),
    l = n(272355),
    s = n(87001),
    o = n(734057),
    d = n(186111),
    c = n(334463),
    u = n(383501),
    A = n(309010),
    h = n(967198),
    _ = n(977997),
    m = n(998740),
    p = n(652215);
function g(e) {
    return `haven:${e}`;
}
function E() {
    let e = i;
    if (null == e) return !1;
    let t = g(e);
    if (!c.A.isOpen(t)) return !1;
    let n = c.A.pipHavenWindow;
    if (null == n || n.id !== t) return (i = null), !1;
    r.h.wait(() => a.VN(t)), (i = null);
}
function f() {
    return d.A.hasLayers();
}
function I() {
    let e,
        t,
        n = u.A.getChannelId(),
        l = null != n ? o.A.getChannel(n) : null;
    if (
        ((e = u.A.getChannelId()),
        (t = A.A.getChannelId()),
        null == e || !m.A.isUserConnected(e) || e === t || s.A.getWindowOpen(p.MLl.CHANNEL_CALL_POPOUT) || 0)
    )
        return E();
    if (null != l && m.A.isUserConnected(l.id)) {
        if (i !== l.id) {
            let e = g(l.id);
            if (c.A.isOpen(e)) return !1;
            if (null != i) {
                let e = i;
                r.h.wait(() => a.VN(e));
            }
            return (
                r.h.wait(() => {
                    a.ho(e, p.o1q.HAVEN, { channel: l }), f() && a.jD(e);
                }),
                (i = l.id),
                !0
            );
        }
        return !1;
    }
    return E();
}
function C() {
    if (f()) {
        let e = void 0 ?? i;
        if (null == e) return;
        let t = g(e);
        c.A.isOpen(t) && r.h.wait(() => a.jD(t));
        return;
    }
    let e = void 0 ?? i;
    if (null == e) return;
    let t = g(e);
    c.A.isOpen(t) && r.h.wait(() => a.WU(t));
}
class N extends l.A {
    _initialize() {
        A.A.addChangeListener(I),
            h.A.addChangeListener(I),
            u.A.addChangeListener(I),
            _.A.addChangeListener(I),
            d.A.addChangeListener(C),
            m.A.addChangeListener(I),
            s.A.addChangeListener(I);
    }
    _terminate() {
        A.A.removeChangeListener(I),
            h.A.removeChangeListener(I),
            u.A.removeChangeListener(I),
            _.A.removeChangeListener(I),
            d.A.removeChangeListener(C),
            m.A.removeChangeListener(I),
            s.A.removeChangeListener(I);
    }
}
let T = new N();
