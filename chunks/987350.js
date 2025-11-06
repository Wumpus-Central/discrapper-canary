n.d(t, { Z: () => u });
var l,
    i,
    r = n(442837),
    o = n(570140);
let a = null,
    c = null,
    s = !1;
class d extends (i = r.ZP.Store) {
    getAllowedApplicationIds(e) {
        return a === e ? c : null;
    }
    isFetching(e) {
        return a === e && s;
    }
    hasCachedData(e) {
        return a === e && null !== c;
    }
}
(l = "displayName") in d
    ? Object.defineProperty(d, l, {
          value: "GuildSettingsOnboardingAllowedApplicationsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[l] = "GuildSettingsOnboardingAllowedApplicationsStore");
let u = new d(o.Z, {
    GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_START: function (e) {
        let { guildId: t } = e;
        (a = t), (s = !0), (c = []);
    },
    GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { guildId: t, applicationIds: n } = e;
        a === t && ((c = n), (s = !1));
    },
    GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        a === t && ((c = []), (s = !1));
    },
    GUILD_SETTINGS_CLOSE: function () {
        (a = null), (c = null), (s = !1);
    },
});
