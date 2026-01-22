n.d(t, {
    A: () => I,
}),
    n(896048),
    n(638769);
var l,
    r,
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(73153),
    c = n(591552),
    d = n(555337),
    u = n(652215);
let m = !1,
    g = null,
    f = new Set();

function h() {
    (m = !1),
        (g = null),
        null != (g = d.A.getGuildId()) &&
            d.A.getSection() === u.BEX.ONBOARDING &&
            (f = new Set(c.A.getDefaultChannelIds(g)));
}
class N extends (l = a.Ay.Store) {
    initialize() {
        this.waitFor(d.A, c.A);
    }
    hasChanges() {
        if (null == g) return !1;
        let e = c.A.getDefaultChannelIds(g).sort(),
            t = Array.from(f).sort();
        return !s().isEqual(e, t);
    }
    get guildId() {
        return g;
    }
    get submitting() {
        return m;
    }
    get editedDefaultChannelIds() {
        return f;
    }
}
(r = "displayName") in N
    ? Object.defineProperty(N, r, {
          value: "GuildSettingsDefaultChannelsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (N[r] = "GuildSettingsDefaultChannelsStore");
let I = new N(o.h, {
    GUILD_SETTINGS_INIT: h,
    GUILD_SETTINGS_SET_SECTION: h,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: h,
    GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: h,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: h,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function () {
        m = !1;
    },
    GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function (e) {
        let { channelId: t } = e;
        (f = new Set(f)).has(t) ? f.delete(t) : f.add(t);
    },
    GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function () {
        m = !0;
    },
});
