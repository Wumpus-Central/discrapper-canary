n.d(t, { Z: () => y });
var r,
    i = n(442837),
    a = n(570140),
    o = n(314897),
    s = n(57562),
    l = n(351780),
    c = n(843693);
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
    m = { unlockedAchievements: {} },
    h = d({}, m);
function g(e) {
    return (
        null == h.unlockedAchievements[e] &&
        ((h.unlockedAchievements = p(d({}, h.unlockedAchievements), {
            [e]: {
                achievementId: e,
                dateUnlocked: Date.now(),
            },
        })),
        setTimeout(() => {
            (0, s.D)(e, !0);
        }, _),
        !0)
    );
}
function E(e) {
    let { achievementId: t } = e;
    if (!l.Z.isEnabled()) return !1;
    g(t);
}
class b extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(o.default, l.Z, c.ZP);
        let t = null != e ? e : d({}, m);
        for (let e in t) h[e] = t[e];
    }
    getState() {
        return h;
    }
    getAllUnlockedAchievements() {
        return h.unlockedAchievements;
    }
    getUnlocked(e) {
        var t;
        return null != (t = h.unlockedAchievements[e]) ? t : null;
    }
}
u(b, "displayName", "PoggermodeAchievementStore"), u(b, "persistKey", "PoggermodeAchievementStore");
let y = new b(a.Z, { POGGERMODE_ACHIEVEMENT_UNLOCK: E });
