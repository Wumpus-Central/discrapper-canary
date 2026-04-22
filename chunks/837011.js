i.d(t, { A: () => m, X: () => o });
var n,
    l = i(311907),
    r = i(73153),
    a = i(9994),
    s = i(652215),
    o = (((n = {}).NOT_FETCHED = "NOT_FETCHED"), (n.FETCHING = "FETCHING"), (n.FETCHED = "FETCHED"), n);
let d = new Map(),
    c = { profile: null, lastSyncTimestamp: null, fetchStatus: "NOT_FETCHED", isUpdating: !1, error: null };
function _(e) {
    let { guildId: t } = e,
        i = d.get(t);
    null == i ? d.set(t, { ...c, isUpdating: !0 }) : d.set(t, { ...i, isUpdating: !0 });
}
function u(e) {
    let { guildId: t, error: i } = e,
        n = d.get(t);
    null == n ? d.set(t, { ...c, error: i }) : d.set(t, { ...n, error: i, isUpdating: !1 });
}
function p(e) {
    let { invite: t } = e,
        { profile: i } = t;
    if (null == i) return;
    let n = d.get(i.id),
        l = (0, a.wr)(i);
    null == n
        ? d.set(i.id, { ...c, profile: l, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
        : d.set(i.id, { ...n, profile: l, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
}
class h extends l.Ay.Store {
    static displayName = "GuildProfileStore";
    getProfile(e) {
        return null == e ? null : (d.get(e)?.profile ?? null);
    }
    getFetchStatus(e) {
        return null == e ? "NOT_FETCHED" : (d.get(e)?.fetchStatus ?? "NOT_FETCHED");
    }
    getLastSyncTimestamp(e) {
        return null == e ? null : (d.get(e)?.lastSyncTimestamp ?? null);
    }
    getIsUpdating(e) {
        return null != e && (d.get(e)?.isUpdating ?? !1);
    }
    getErrorCode(e) {
        return null == e ? null : (d.get(e)?.error?.code ?? null);
    }
}
let m = new h(r.h, {
    GUILD_PROFILE_FETCH: function (e) {
        let { guildId: t } = e,
            i = d.get(t);
        null == i ? d.set(t, { ...c, fetchStatus: "FETCHING" }) : d.set(t, { ...i, fetchStatus: "FETCHING" });
    },
    GUILD_PROFILE_FETCH_SUCCESS: function (e) {
        let { guildId: t, profile: i } = e,
            n = d.get(t);
        null == n
            ? d.set(t, { ...c, profile: i, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
            : d.set(t, { ...n, profile: i, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
    },
    GUILD_PROFILE_FETCH_FAILURE: function (e) {
        let { guildId: t, error: i } = e,
            n = d.get(t);
        null == n
            ? d.set(t, { ...c, error: i, fetchStatus: "FETCHED" })
            : d.set(t, { ...n, error: i, fetchStatus: "FETCHED" });
    },
    GUILD_PROFILE_UPDATE: _,
    GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
        let { guildId: t, profile: i } = e,
            n = d.get(t);
        null == n ? d.set(t, { ...c, profile: i }) : d.set(t, { ...n, profile: i, isUpdating: !1 });
    },
    GUILD_PROFILE_UPDATE_FAILURE: u,
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let { form: t, guildId: i } = e,
            n = t?.profile;
        if (null == n) return;
        let l = d.get(i);
        null == l
            ? d.set(i, { ...c, profile: n, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
            : d.set(i, { ...l, profile: n, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
    },
    INVITE_RESOLVE_SUCCESS: p,
    INSTANT_INVITE_CREATE_SUCCESS: p,
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        t.type === s.rbe.GUILD_ANNOUNCEMENT && null != t.guild_id && d.delete(t.guild_id);
    },
    GUILD_SETTINGS_SET_WIDGET: function (e) {
        let { guildId: t, enabled: i } = e;
        null != t && i && d.delete(t);
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e,
            i = d.get(t.id);
        if (null == i || null == i.profile) return !1;
        let n = {
            ...i.profile,
            name: t.name,
            icon: t.icon ?? null,
            description: t.description ?? "",
            customBanner: t.discovery_splash ?? null,
        };
        d.set(t.id, { ...i, profile: n });
    },
    GUILD_PROFILE_UPDATE_VISIBILITY: _,
    GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
        let { guildId: t, visibility: i } = e,
            n = d.get(t),
            l = n?.profile;
        null != n && null != l && d.set(t, { ...n, isUpdating: !1, profile: { ...l, visibility: i } });
    },
    GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: u,
});
