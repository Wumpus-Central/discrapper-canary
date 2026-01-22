n.d(t, { A: () => y });
var r,
    i = n(311907),
    a = n(73153),
    s = n(961350),
    o = n(414736),
    l = n(3137),
    c = n(559908);
function u(e, t, n) {
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = 2000,
    h = { unlockedAchievements: {} },
    m = d({}, h);
function g(e) {
    return (
        null == m.unlockedAchievements[e] &&
        ((m.unlockedAchievements = p(d({}, m.unlockedAchievements), {
            [e]: {
                achievementId: e,
                dateUnlocked: Date.now(),
            },
        })),
        setTimeout(() => {
            (0, o.U)(e, !0);
        }, _),
        !0)
    );
}
function E(e) {
    let { achievementId: t } = e;
    if (!l.A.isEnabled()) return !1;
    g(t);
}
class b extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(s.default, l.A, c.Ay);
        let t = null != e ? e : d({}, h);
        for (let e in t) m[e] = t[e];
    }
    getState() {
        return m;
    }
    getAllUnlockedAchievements() {
        return m.unlockedAchievements;
    }
    getUnlocked(e) {
        var t;
        return null != (t = m.unlockedAchievements[e]) ? t : null;
    }
}
u(b, "displayName", "PoggermodeAchievementStore"), u(b, "persistKey", "PoggermodeAchievementStore");
let y = new b(a.h, { POGGERMODE_ACHIEVEMENT_UNLOCK: E });
