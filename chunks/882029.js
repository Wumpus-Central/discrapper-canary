n.d(t, { Z: () => h });
var i,
    s = n(442837),
    r = n(570140),
    l = n(314897),
    a = n(57562),
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
    m = { ...u };
class g extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(l.default, c.ZP);
        let t = null != e ? e : { ...u };
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
        return null !== (t = m.unlockedAchievements[e]) && void 0 !== t ? t : null;
    }
}
d(g, 'displayName', 'PoggermodeAchievementStore'), d(g, 'persistKey', 'PoggermodeAchievementStore');
let h = new g(r.Z, {
    POGGERMODE_ACHIEVEMENT_UNLOCK: function (e) {
        let { achievementId: t } = e;
        if (!o.Z.isEnabled()) return !1;
        null != m.unlockedAchievements[t] ||
            ((m.unlockedAchievements = {
                ...m.unlockedAchievements,
                [t]: {
                    achievementId: t,
                    dateUnlocked: Date.now()
                }
            }),
            setTimeout(() => {
                (0, a.D)(t, !0);
            }, 2000));
    }
});
