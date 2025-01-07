var i,
    r = n(442837),
    a = n(570140),
    s = n(314897),
    l = n(57562),
    o = n(351780),
    c = n(843693);
function d(e, t, n) {
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
let u = { unlockedAchievements: {} },
    g = { ...u };
class m extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(s.default, c.ZP);
        let t = null != e ? e : { ...u };
        for (let e in t) g[e] = t[e];
    }
    getState() {
        return g;
    }
    getAllUnlockedAchievements() {
        return g.unlockedAchievements;
    }
    getUnlocked(e) {
        var t;
        return null !== (t = g.unlockedAchievements[e]) && void 0 !== t ? t : null;
    }
}
d(m, 'displayName', 'PoggermodeAchievementStore'),
    d(m, 'persistKey', 'PoggermodeAchievementStore'),
    (t.Z = new m(a.Z, {
        POGGERMODE_ACHIEVEMENT_UNLOCK: function (e) {
            var t;
            let { achievementId: n } = e;
            if (!o.Z.isEnabled()) return !1;
            (t = n),
                null != g.unlockedAchievements[t] ||
                    ((g.unlockedAchievements = {
                        ...g.unlockedAchievements,
                        [t]: {
                            achievementId: t,
                            dateUnlocked: Date.now()
                        }
                    }),
                    setTimeout(() => {
                        (0, l.D)(t, !0);
                    }, 2000));
        }
    }));
