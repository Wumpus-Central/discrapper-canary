n.d(t, { A: () => I });
var i = n(735438),
    l = n.n(i),
    s = n(17928),
    r = n(228366),
    a = n(591552),
    d = n(555337),
    o = n(652215);
let c = !1,
    u = null,
    m = new Set();
function N() {
    (c = !1),
        (u = null),
        null != (u = d.A.getGuildId()) &&
            d.A.getSection() === o.BEX.ONBOARDING &&
            (m = new Set(a.A.getDefaultChannelIds(u)));
}
class h extends s.Ay.Store {
    static displayName = "GuildSettingsDefaultChannelsStore";
    initialize() {
        this.waitFor(d.A, a.A);
    }
    hasChanges() {
        if (null == u) return !1;
        let e = a.A.getDefaultChannelIds(u).sort(),
            t = Array.from(m).sort();
        return !l().isEqual(e, t);
    }
    get guildId() {
        return u;
    }
    get submitting() {
        return c;
    }
    get editedDefaultChannelIds() {
        return m;
    }
}
let I = new h(r.h, {
    GUILD_SETTINGS_INIT: N,
    GUILD_SETTINGS_SET_SECTION: N,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: N,
    GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: N,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: N,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function () {
        c = !1;
    },
    GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function (e) {
        let { channelId: t } = e;
        (m = new Set(m)).has(t) ? m.delete(t) : m.add(t);
    },
    GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function () {
        c = !0;
    },
});
