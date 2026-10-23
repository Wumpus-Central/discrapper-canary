n.d(t, { A: () => u, m: () => a });
var i = n(17928),
    l = n(73153),
    r = n(952818);
let s = {};
function a(e) {
    return `${(0, r.Es)(e)}:${e.pid}`;
}
class o extends i.Ay.Store {
    static displayName = "ConjureOverlaySessionOverrideStore";
    getOverride(e, t) {
        return null == t ? null : (s[e]?.[a(t)]?.override ?? null);
    }
}
let u = new o(l.h, {
    CONJURE_OVERLAY_SESSION_OVERRIDE_SET: function (e) {
        let { applicationId: t, sessionKey: n, pid: i, override: l } = e,
            r = s[t] ?? {};
        if (null == l) {
            if (null == r[n]) return !1;
            let { [n]: e, ...i } = r;
            return void (s = { ...s, [t]: i });
        }
        if (r[n]?.override === l) return !1;
        s = { ...s, [t]: { ...r, [n]: { pid: i, override: l } } };
    },
    RUNNING_GAMES_CHANGE: function (e) {
        let { removed: t } = e;
        if (0 === t.length) return !1;
        let n = new Set(t.map((e) => e.pid)),
            i = !1,
            l = {};
        for (let [e, t] of Object.entries(s)) {
            let r = Object.fromEntries(
                Object.entries(t).filter((e) => {
                    let [, t] = e;
                    return !n.has(t.pid);
                }),
            );
            (Object.keys(r).length !== Object.keys(t).length && (i = !0), (l[e] = r));
        }
        if (!i) return !1;
        s = l;
    },
    LOGOUT: function () {
        s = {};
    },
});
