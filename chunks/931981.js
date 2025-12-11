n.d(t, {
    V: () => S,
    e: () => O,
}),
    n(388685);
var r,
    i = n(54381);
n(473749);
var a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    u = n(962293),
    d = n(592125),
    f = n(271383),
    p = n(944486),
    _ = n(594174),
    m = n(388032),
    h = n(58804);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let E = new Set();
class b extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(d.Z, f.ZP, p.Z, _.default), null != e && (E = new Set(e));
    }
    hasId(e) {
        return E.has(e);
    }
    getState() {
        return [...E];
    }
}
g(b, "displayName", "PTOStore"), g(b, "persistKey", "PTOStore");
let y = new b(c.Z, {}),
    O = (e) =>
        (0, s.e7)([f.ZP, _.default, y], () => {
            let t = _.default.getCurrentUser();
            if (null == t || !t.isStaff() || !e.isDM()) return !1;
            let n = _.default.getUser(e.getRecipientId());
            if (!(null == n ? void 0 : n.isStaff())) return !1;
            let r = f.ZP.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
            return r ? !y.hasId(n.id) && r : (E.delete(n.id) && y.emitChange(), !1);
        }),
    v = () => {
        let e = p.Z.getChannelId();
        if (null == e) return;
        let t = d.Z.getChannel(e);
        null != t && t.isPrivate() && (E.has(t.getRecipientId()) || (E.add(t.getRecipientId()), y.emitChange()));
    },
    S = () =>
        (0, i.jsxs)("div", {
            className: h.replyBar,
            children: [
                (0, i.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    className: o()(h.text, h.replyLabel),
                    children: m.intl.string(m.t["2UvR1E"]),
                }),
                (0, i.jsx)("div", {
                    className: h.actions,
                    children: (0, i.jsx)(u.B, { onClick: v }),
                }),
            ],
        });
