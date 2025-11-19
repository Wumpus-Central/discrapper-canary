n.d(t, {
    V: () => I,
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
    _ = n(944486),
    p = n(594174),
    h = n(388032),
    m = n(204427);
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
        this.waitFor(d.Z, f.ZP, _.Z, p.default), null != e && (E = new Set(e));
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
        (0, s.e7)([f.ZP, p.default, y], () => {
            let t = p.default.getCurrentUser();
            if (null == t || !t.isStaff() || !e.isDM()) return !1;
            let n = p.default.getUser(e.getRecipientId());
            if (!(null == n ? void 0 : n.isStaff())) return !1;
            let r = f.ZP.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
            return r ? !y.hasId(n.id) && r : (E.delete(n.id) && y.emitChange(), !1);
        }),
    v = () => {
        let e = _.Z.getChannelId();
        if (null == e) return;
        let t = d.Z.getChannel(e);
        null != t && t.isPrivate() && (E.has(t.getRecipientId()) || (E.add(t.getRecipientId()), y.emitChange()));
    },
    I = () =>
        (0, i.jsxs)("div", {
            className: m.replyBar,
            children: [
                (0, i.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    className: o()(m.text, m.replyLabel),
                    children: h.intl.string(h.t["2UvR1E"]),
                }),
                (0, i.jsx)("div", {
                    className: m.actions,
                    children: (0, i.jsx)(u.B, { onClick: v }),
                }),
            ],
        });
