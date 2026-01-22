let r;
n.d(t, { Ay: () => I });
var i = n(73153),
    l = n(31728),
    a = n(272355),
    s = n(87001),
    o = n(734057),
    c = n(186111),
    u = n(334463),
    d = n(383501),
    p = n(309010),
    f = n(967198),
    h = n(977997),
    A = n(998740),
    g = n(652215);
function m(e) {
    return "haven:".concat(e);
}
function b() {
    let e = r;
    if (null == e) return !1;
    let t = m(e);
    if (!u.A.isOpen(t)) return !1;
    let n = u.A.pipHavenWindow;
    if (null == n || n.id !== t) return (r = null), !1;
    i.h.wait(() => l.VN(t)), (r = null);
}
function _() {
    return c.A.hasLayers();
}
function E() {
    let e,
        t,
        n = d.A.getChannelId(),
        a = null != n ? o.A.getChannel(n) : null;
    if (
        ((e = d.A.getChannelId()),
        (t = p.A.getChannelId()),
        null == e || !A.A.isUserConnected(e) || e === t || s.A.getWindowOpen(g.MLl.CHANNEL_CALL_POPOUT) || 0)
    )
        return b();
    if (null != a && A.A.isUserConnected(a.id)) {
        if (r !== a.id) {
            let e = m(a.id);
            if (u.A.isOpen(e)) return !1;
            if (null != r) {
                let e = r;
                i.h.wait(() => l.VN(e));
            }
            return (
                i.h.wait(() => {
                    l.ho(e, g.o1q.HAVEN, { channel: a }), _() && l.jD(e);
                }),
                (r = a.id),
                !0
            );
        }
        return !1;
    }
    return b();
}
function O() {
    if (_()) {
        let e = r;
        if (null == e) return;
        let t = m(e);
        u.A.isOpen(t) && i.h.wait(() => l.jD(t));
        return;
    }
    let e = r;
    if (null == e) return;
    let t = m(e);
    u.A.isOpen(t) && i.h.wait(() => l.WU(t));
}
class y extends a.A {
    _initialize() {
        p.A.addChangeListener(E),
            f.A.addChangeListener(E),
            d.A.addChangeListener(E),
            h.A.addChangeListener(E),
            c.A.addChangeListener(O),
            A.A.addChangeListener(E),
            s.A.addChangeListener(E);
    }
    _terminate() {
        p.A.removeChangeListener(E),
            f.A.removeChangeListener(E),
            d.A.removeChangeListener(E),
            h.A.removeChangeListener(E),
            c.A.removeChangeListener(O),
            A.A.removeChangeListener(E),
            s.A.removeChangeListener(E);
    }
}
let I = new y();
