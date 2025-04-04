n.d(t, {
    V: () => v,
    e: () => b
}),
    n(47120);
var r,
    i = n(200651);
n(192379);
var o = n(442837),
    a = n(481060),
    s = n(570140),
    l = n(962293),
    c = n(592125),
    u = n(271383),
    d = n(944486),
    f = n(594174),
    _ = n(388032),
    p = n(951535);
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
class g extends (r = o.ZP.PersistedStore) {
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
let E = new g(s.Z, {}),
    b = (e) =>
        (0, o.e7)([u.ZP, f.default, E], () => {
            let t = f.default.getCurrentUser();
            if (null == t || !t.isStaff() || !e.isDM()) return !1;
            let n = f.default.getUser(e.getRecipientId());
            if (!(null == n ? void 0 : n.isStaff())) return !1;
            let r = u.ZP.getNicknames(n.id).some((e) => e.endsWith('[PTO]') || e.endsWith('[OOO]'));
            return r ? !E.hasId(n.id) && r : (m.delete(n.id) && E.emitChange(), !1);
        }),
    y = () => {
        let e = d.Z.getChannelId();
        if (null == e) return;
        let t = c.Z.getChannel(e);
        null != t && t.isPrivate() && (m.has(t.getRecipientId()) || (m.add(t.getRecipientId()), E.emitChange()));
    },
    v = () =>
        (0, i.jsxs)('div', {
            className: p.bar,
            children: [
                (0, i.jsx)(a.Text, {
                    variant: 'text-sm/medium',
                    children: _.NW.string(_.t['2UvR1N'])
                }),
                (0, i.jsx)(l.B, { onClick: y })
            ]
        });
