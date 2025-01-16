r.d(n, {
    V: function () {
        return y;
    },
    e: function () {
        return T;
    }
});
var i,
    a = r(47120);
var s = r(200651);
r(192379);
var o = r(442837),
    l = r(481060),
    u = r(570140),
    c = r(962293),
    d = r(592125),
    f = r(271383),
    _ = r(944486),
    h = r(594174),
    p = r(388032),
    m = r(525680);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = new Set();
class v extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        null != e && (E = new Set(e));
    }
    hasId(e) {
        return E.has(e);
    }
    getState() {
        return [...E];
    }
}
g(v, 'displayName', 'PTOStore'), g(v, 'persistKey', 'PTOStore');
let I = new v(u.Z, {}),
    T = (e) =>
        (0, o.e7)([f.ZP, h.default, I], () => {
            let n = h.default.getCurrentUser();
            if (null == n || !n.isStaff() || !e.isDM()) return !1;
            let r = h.default.getUser(e.getRecipientId());
            if (!(null == r ? void 0 : r.isStaff())) return !1;
            let i = f.ZP.getNicknames(r.id).some((e) => e.endsWith('[PTO]') || e.endsWith('[OOO]'));
            return i ? !I.hasId(r.id) && i : (E.delete(r.id) && I.emitChange(), !1);
        }),
    b = () => {
        let e = _.Z.getChannelId();
        if (null == e) return;
        let n = d.Z.getChannel(e);
        null != n && n.isPrivate() && !E.has(n.getRecipientId()) && (E.add(n.getRecipientId()), I.emitChange());
    },
    y = () =>
        (0, s.jsxs)('div', {
            className: m.bar,
            children: [
                (0, s.jsx)(l.Text, {
                    variant: 'text-sm/medium',
                    children: p.intl.string(p.t['2UvR1N'])
                }),
                (0, s.jsx)(c.B, { onClick: b })
            ]
        });
