n.d(t, {
    V: () => I,
    e: () => v
}),
    n(47120);
var i,
    r = n(200651);
n(192379);
var a = n(442837),
    s = n(481060),
    o = n(570140),
    l = n(962293),
    u = n(592125),
    c = n(271383),
    d = n(944486),
    f = n(594174),
    _ = n(388032),
    p = n(117384);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let m = new Set();
class g extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (m = new Set(e));
    }
    hasId(e) {
        return m.has(e);
    }
    getState() {
        return [...m];
    }
}
h(g, 'displayName', 'PTOStore'), h(g, 'persistKey', 'PTOStore');
let E = new g(o.Z, {}),
    v = (e) =>
        (0, a.e7)([c.ZP, f.default, E], () => {
            let t = f.default.getCurrentUser();
            if (null == t || !t.isStaff() || !e.isDM()) return !1;
            let n = f.default.getUser(e.getRecipientId());
            if (!(null == n ? void 0 : n.isStaff())) return !1;
            let i = c.ZP.getNicknames(n.id).some((e) => e.endsWith('[PTO]') || e.endsWith('[OOO]'));
            return i ? !E.hasId(n.id) && i : (m.delete(n.id) && E.emitChange(), !1);
        }),
    y = () => {
        let e = d.Z.getChannelId();
        if (null == e) return;
        let t = u.Z.getChannel(e);
        null != t && t.isPrivate() && !m.has(t.getRecipientId()) && (m.add(t.getRecipientId()), E.emitChange());
    },
    I = () =>
        (0, r.jsxs)('div', {
            className: p.bar,
            children: [
                (0, r.jsx)(s.Text, {
                    variant: 'text-sm/medium',
                    children: _.intl.string(_.t['2UvR1N'])
                }),
                (0, r.jsx)(l.B, { onClick: y })
            ]
        });
