n.d(t, {
    A: () => b,
});
var r,
    i,
    l = n(311907),
    s = n(73153),
    a = n(555337),
    c = n(660496),
    o = n(652215);
let d = c.C.OVERVIEW,
    u = null;

function f(e) {
    let { subsection: t } = e;
    switch (t) {
        case o.nd0.SAFETY_AUTOMOD:
            d = c.C.AUTOMOD;
            break;
        case o.nd0.SAFETY_DM_AND_SPAM_PROTECTION:
            d = c.C.DM_AND_SPAM_PROTECTION;
            break;
        case o.nd0.SAFETY_CAPTCHA_AND_RAID_PROTECTION:
            d = c.C.CAPTCHA_AND_RAID_PROTECTION;
            break;
        case o.nd0.SAFETY_PERMISSIONS:
            d = c.C.PERMISSIONS;
            break;
        case o.nd0.SAFETY_OVERVIEW:
        default:
            d = c.C.OVERVIEW;
    }
}
class g extends (i = l.Ay.Store) {
    initialize() {
        this.waitFor(a.A);
    }
    getCurrentPage() {
        return d;
    }
}
(r = "displayName") in g
    ? Object.defineProperty(g, r, {
          value: "GuildSettingsSafetyStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (g[r] = "GuildSettingsSafetyStore");
let b = new g(s.h, {
    GUILD_SETTINGS_INIT: function () {
        if (a.A.getGuildId() === u) return !1;
        u = a.A.getGuildId();
    },
    GUILD_SETTINGS_SET_SECTION: f,
    GUILD_SETTINGS_SAFETY_SET_SUBSECTION: f,
    GUILD_SETTINGS_SAFETY_PAGE: function (e) {
        let { page: t } = e;
        d = t;
    },
});
