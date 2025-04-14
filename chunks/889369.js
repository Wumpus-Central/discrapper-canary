n.d(t, { Z: () => p }), n(388685), n(642613);
var l,
    r,
    i,
    s = n(392711),
    a = n.n(s),
    o = n(442837),
    c = n(570140),
    d = n(45966),
    u = n(999382),
    m = n(981631);
let N = !1,
    I = null,
    h = new Set();
function g() {
    (N = !1), (I = null), null != (I = u.Z.getGuildId()) && u.Z.getSection() === m.pNK.ONBOARDING && (h = new Set(d.Z.getDefaultChannelIds(I)));
}
class f extends (l = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, d.Z);
    }
    hasChanges() {
        if (null == I) return !1;
        let e = d.Z.getDefaultChannelIds(I).sort(),
            t = Array.from(h).sort();
        return !a().isEqual(e, t);
    }
    get guildId() {
        return I;
    }
    get submitting() {
        return N;
    }
    get editedDefaultChannelIds() {
        return h;
    }
}
(i = 'GuildSettingsDefaultChannelsStore'),
    (r = 'displayName') in f
        ? Object.defineProperty(f, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[r] = i);
let p = new f(c.Z, {
    GUILD_SETTINGS_INIT: g,
    GUILD_SETTINGS_SET_SECTION: g,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: g,
    GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: g,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: g,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function () {
        N = !1;
    },
    GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function (e) {
        let { channelId: t } = e;
        (h = new Set(h)).has(t) ? h.delete(t) : h.add(t);
    },
    GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function () {
        N = !0;
    }
});
