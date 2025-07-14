(n.d(t, { Z: () => S }), n(388685), n(642613));
var l,
    i,
    r,
    s = n(392711),
    a = n.n(s),
    o = n(442837),
    c = n(570140),
    d = n(45966),
    u = n(999382),
    m = n(981631);
let h = !1,
    I = null,
    g = new Set();
function N() {
    ((h = !1), (I = null), null != (I = u.Z.getGuildId()) && u.Z.getSection() === m.pNK.ONBOARDING && (g = new Set(d.Z.getDefaultChannelIds(I))));
}
class f extends (l = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, d.Z);
    }
    hasChanges() {
        if (null == I) return !1;
        let e = d.Z.getDefaultChannelIds(I).sort(),
            t = Array.from(g).sort();
        return !a().isEqual(e, t);
    }
    get guildId() {
        return I;
    }
    get submitting() {
        return h;
    }
    get editedDefaultChannelIds() {
        return g;
    }
}
((r = 'GuildSettingsDefaultChannelsStore'),
    (i = 'displayName') in f
        ? Object.defineProperty(f, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[i] = r));
let S = new f(c.Z, {
    GUILD_SETTINGS_INIT: N,
    GUILD_SETTINGS_SET_SECTION: N,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: N,
    GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: N,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: N,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function () {
        h = !1;
    },
    GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function (e) {
        let { channelId: t } = e;
        (g = new Set(g)).has(t) ? g.delete(t) : g.add(t);
    },
    GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function () {
        h = !0;
    }
});
