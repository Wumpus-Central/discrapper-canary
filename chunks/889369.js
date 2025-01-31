t.d(n, { Z: () => E }), t(47120);
var l,
    i,
    s,
    r = t(392711),
    a = t.n(r),
    o = t(442837),
    d = t(570140),
    c = t(45966),
    u = t(999382),
    m = t(981631);
let I = !1,
    h = null,
    N = new Set();
function g() {
    (I = !1), (h = null), null != (h = u.Z.getGuildId()) && u.Z.getSection() === m.pNK.ONBOARDING && (N = new Set(c.Z.getDefaultChannelIds(h)));
}
class x extends (l = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, c.Z);
    }
    hasChanges() {
        if (null == h) return !1;
        let e = c.Z.getDefaultChannelIds(h).sort(),
            n = Array.from(N).sort();
        return !a().isEqual(e, n);
    }
    get guildId() {
        return h;
    }
    get submitting() {
        return I;
    }
    get editedDefaultChannelIds() {
        return N;
    }
}
(s = 'GuildSettingsDefaultChannelsStore'),
    (i = 'displayName') in x
        ? Object.defineProperty(x, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (x[i] = s);
let E = new x(d.Z, {
    GUILD_SETTINGS_INIT: g,
    GUILD_SETTINGS_SET_SECTION: g,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: g,
    GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: g,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: g,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function () {
        I = !1;
    },
    GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function (e) {
        let { channelId: n } = e;
        (N = new Set(N)).has(n) ? N.delete(n) : N.add(n);
    },
    GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function () {
        I = !0;
    }
});
