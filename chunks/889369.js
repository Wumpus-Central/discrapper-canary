n.d(t, { Z: () => I }), n(388685), n(642613);
var l,
    i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    c = n(45966),
    d = n(999382),
    u = n(981631);
let m = !1,
    g = null,
    f = new Set();
function h() {
    (m = !1),
        (g = null),
        null != (g = d.Z.getGuildId()) &&
            d.Z.getSection() === u.pNK.ONBOARDING &&
            (f = new Set(c.Z.getDefaultChannelIds(g)));
}
class N extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, c.Z);
    }
    hasChanges() {
        if (null == g) return !1;
        let e = c.Z.getDefaultChannelIds(g).sort(),
            t = Array.from(f).sort();
        return !a().isEqual(e, t);
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
(i = "displayName") in N
    ? Object.defineProperty(N, i, {
          value: "GuildSettingsDefaultChannelsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (N[i] = "GuildSettingsDefaultChannelsStore");
let I = new N(o.Z, {
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
