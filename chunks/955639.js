var i = n(855986),
    r = n(73153),
    l = n(644727);
let s = {};
function a(e) {
    return `${(0, l.Es)(e)}:${e.pid}`;
}
class o extends i.Ay.Store {
    static displayName = "ConjureOverlaySessionOverrideStore";
    getOverride(e, t) {
        return null == t ? null : (s[e]?.[a(t)]?.override ?? null);
    }
}
let u = new o(r.h, {
    CONJURE_OVERLAY_SESSION_OVERRIDE_SET: function (e) {
        let { applicationId: t, sessionKey: n, pid: i, override: r } = e,
            l = s[t] ?? {};
        if (null == r) {
            if (null == l[n]) return !1;
            let { [n]: e, ...i } = l;
            return void (s = { ...s, [t]: i });
        }
        if (l[n]?.override === r) return !1;
        s = { ...s, [t]: { ...l, [n]: { pid: i, override: r } } };
    },
    RUNNING_GAMES_CHANGE: function (e) {
        let { removed: t } = e;
        if (0 === t.length) return !1;
        let n = new Set(t.map((e) => e.pid)),
            i = !1,
            r = {};
        for (let [e, t] of Object.entries(s)) {
            let l = Object.fromEntries(
                Object.entries(t).filter((e) => {
                    let [, t] = e;
                    return !n.has(t.pid);
                }),
            );
            (Object.keys(l).length !== Object.keys(t).length && (i = !0), (r[e] = l));
        }
        if (!i) return !1;
        s = r;
    },
    LOGOUT: function () {
        s = {};
    },
});
n.d(t, {}, { A: u, m: a });
