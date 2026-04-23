n.d(t, { A: () => m });
var i = n(17928),
    l = n(228366),
    s = n(555337),
    a = n(660496),
    r = n(652215);
let o = a.C.OVERVIEW,
    d = null;
function c(e) {
    let { subsection: t } = e;
    switch (t) {
        case r.nd0.SAFETY_AUTOMOD:
            o = a.C.AUTOMOD;
            break;
        case r.nd0.SAFETY_DM_AND_SPAM_PROTECTION:
            o = a.C.DM_AND_SPAM_PROTECTION;
            break;
        case r.nd0.SAFETY_CAPTCHA_AND_RAID_PROTECTION:
            o = a.C.CAPTCHA_AND_RAID_PROTECTION;
            break;
        case r.nd0.SAFETY_PERMISSIONS:
            o = a.C.PERMISSIONS;
            break;
        case r.nd0.SAFETY_OVERVIEW:
        default:
            o = a.C.OVERVIEW;
    }
}
class u extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "GuildSettingsSafetyStore";
    getCurrentPage() {
        return o;
    }
}
let m = new u(l.h, {
    GUILD_SETTINGS_INIT: function () {
        if (s.A.getGuildId() === d) return !1;
        d = s.A.getGuildId();
    },
    GUILD_SETTINGS_SET_SECTION: c,
    GUILD_SETTINGS_SAFETY_SET_SUBSECTION: c,
    GUILD_SETTINGS_SAFETY_PAGE: function (e) {
        let { page: t } = e;
        o = t;
    },
});
