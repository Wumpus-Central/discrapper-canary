n.d(t, {
    A: () => g,
});
var r,
    i = n(311907),
    l = n(73153),
    s = n(961350),
    a = n(414736),
    o = n(3137),
    c = n(559908);

function d(e, t, n) {
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

function u(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
let _ = {
        unlockedAchievements: {},
    },
    p = u({}, _);
class m extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(s.default, o.A, c.Ay);
        let t = null != e ? e : u({}, _);
        for (let e in t) p[e] = t[e];
    }
    getState() {
        return p;
    }
    getAllUnlockedAchievements() {
        return p.unlockedAchievements;
    }
    getUnlocked(e) {
        var t;
        return null != (t = p.unlockedAchievements[e]) ? t : null;
    }
}
d(m, "displayName", "PoggermodeAchievementStore"), d(m, "persistKey", "PoggermodeAchievementStore");
let g = new m(l.h, {
    POGGERMODE_ACHIEVEMENT_UNLOCK: function (e) {
        var t, n, r;
        let { achievementId: i } = e;
        if (!o.A.isEnabled()) return !1;
        (t = i),
            null != p.unlockedAchievements[t] ||
                ((n = u({}, p.unlockedAchievements)),
                (r = r =
                    {
                        [t]: {
                            achievementId: t,
                            dateUnlocked: Date.now(),
                        },
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                (p.unlockedAchievements = n),
                setTimeout(() => {
                    (0, a.U)(t, !0);
                }, 2e3));
    },
});
