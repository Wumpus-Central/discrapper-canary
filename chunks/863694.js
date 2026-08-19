n.d(e, { A: () => S });
var i = n(435558),
    l = n.n(i),
    s = n(17928),
    r = n(228366),
    a = n(591552),
    d = n(555337),
    o = n(652215);
let c = !1,
    I = null,
    u = new Set();
function E() {
    (c = !1),
        (I = null),
        null != (I = d.A.getGuildId()) &&
            d.A.getSection() === o.BEX.ONBOARDING &&
            (u = new Set(a.A.getDefaultChannelIds(I)));
}
class N extends s.Ay.Store {
    static displayName = "GuildSettingsDefaultChannelsStore";
    initialize() {
        this.waitFor(d.A, a.A);
    }
    hasChanges() {
        if (null == I) return !1;
        let t = a.A.getDefaultChannelIds(I).sort(),
            e = Array.from(u).sort();
        return !l().isEqual(t, e);
    }
    get guildId() {
        return I;
    }
    get submitting() {
        return c;
    }
    get editedDefaultChannelIds() {
        return u;
    }
}
let S = new N(r.h, {
    GUILD_SETTINGS_INIT: E,
    GUILD_SETTINGS_SET_SECTION: E,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: E,
    GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: E,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: E,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function () {
        c = !1;
    },
    GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function (t) {
        let { channelId: e } = t;
        (u = new Set(u)).has(e) ? u.delete(e) : u.add(e);
    },
    GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function () {
        c = !0;
    },
});
