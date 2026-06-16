n.d(e, { A: () => S });
var i = n(735438),
    l = n.n(i),
    s = n(17928),
    r = n(228366),
    a = n(591552),
    d = n(555337),
    o = n(652215);
let c = !1,
    u = null,
    E = new Set();
function I() {
    (c = !1),
        (u = null),
        null != (u = d.A.getGuildId()) &&
            d.A.getSection() === o.BEX.ONBOARDING &&
            (E = new Set(a.A.getDefaultChannelIds(u)));
}
class N extends s.Ay.Store {
    static displayName = "GuildSettingsDefaultChannelsStore";
    initialize() {
        this.waitFor(d.A, a.A);
    }
    hasChanges() {
        if (null == u) return !1;
        let t = a.A.getDefaultChannelIds(u).sort(),
            e = Array.from(E).sort();
        return !l().isEqual(t, e);
    }
    get guildId() {
        return u;
    }
    get submitting() {
        return c;
    }
    get editedDefaultChannelIds() {
        return E;
    }
}
let S = new N(r.h, {
    GUILD_SETTINGS_INIT: I,
    GUILD_SETTINGS_SET_SECTION: I,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: I,
    GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: I,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: I,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function () {
        c = !1;
    },
    GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function (t) {
        let { channelId: e } = t;
        (E = new Set(E)).has(e) ? E.delete(e) : E.add(e);
    },
    GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function () {
        c = !0;
    },
});
