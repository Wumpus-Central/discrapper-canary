n.d(t, { Z: () => S }), n(388685), n(642613);
var l,
    i,
    r = n(392711),
    s = n.n(r),
    a = n(442837),
    o = n(570140),
    c = n(45966),
    d = n(999382),
    u = n(981631);
let m = !1,
    h = null,
    I = new Set();
function g() {
    (m = !1),
        (h = null),
        null != (h = d.Z.getGuildId()) &&
            d.Z.getSection() === u.pNK.ONBOARDING &&
            (I = new Set(c.Z.getDefaultChannelIds(h)));
}
class N extends (l = a.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, c.Z);
    }
    hasChanges() {
        if (null == h) return !1;
        let e = c.Z.getDefaultChannelIds(h).sort(),
            t = Array.from(I).sort();
        return !s().isEqual(e, t);
    }
    get guildId() {
        return h;
    }
    get submitting() {
        return m;
    }
    get editedDefaultChannelIds() {
        return I;
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
let S = new N(o.Z, {
    GUILD_SETTINGS_INIT: g,
    GUILD_SETTINGS_SET_SECTION: g,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: g,
    GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: g,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: g,
    GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function () {
        m = !1;
    },
    GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function (e) {
        let { channelId: t } = e;
        (I = new Set(I)).has(t) ? I.delete(t) : I.add(t);
    },
    GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function () {
        m = !0;
    },
});
