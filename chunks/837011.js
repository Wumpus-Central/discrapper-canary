n.d(t, { A: () => p, X: () => u });
var i,
    l = n(17928),
    r = n(228366),
    a = n(9994),
    s = n(652215),
    u = (((i = {}).NOT_FETCHED = "NOT_FETCHED"), (i.FETCHING = "FETCHING"), (i.FETCHED = "FETCHED"), i);
let o = new Map(),
    c = { profile: null, lastSyncTimestamp: null, fetchStatus: "NOT_FETCHED", isUpdating: !1, error: null };
function d(e) {
    let { guildId: t } = e,
        n = o.get(t);
    null == n ? o.set(t, { ...c, isUpdating: !0 }) : o.set(t, { ...n, isUpdating: !0 });
}
function E(e) {
    let { guildId: t, error: n } = e,
        i = o.get(t);
    null == i ? o.set(t, { ...c, error: n }) : o.set(t, { ...i, error: n, isUpdating: !1 });
}
function _(e) {
    let { invite: t } = e,
        { profile: n } = t;
    if (null == n) return;
    let i = o.get(n.id),
        l = (0, a.wr)(n);
    null == i
        ? o.set(n.id, { ...c, profile: l, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
        : o.set(n.id, { ...i, profile: l, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
}
class A extends l.Ay.Store {
    static displayName = "GuildProfileStore";
    getProfile(e) {
        return null == e ? null : (o.get(e)?.profile ?? null);
    }
    getFetchStatus(e) {
        return null == e ? "NOT_FETCHED" : (o.get(e)?.fetchStatus ?? "NOT_FETCHED");
    }
    getLastSyncTimestamp(e) {
        return null == e ? null : (o.get(e)?.lastSyncTimestamp ?? null);
    }
    getIsUpdating(e) {
        return null != e && (o.get(e)?.isUpdating ?? !1);
    }
    getErrorCode(e) {
        return null == e ? null : (o.get(e)?.error?.code ?? null);
    }
}
let p = new A(r.h, {
    GUILD_PROFILE_FETCH: function (e) {
        let { guildId: t } = e,
            n = o.get(t);
        null == n ? o.set(t, { ...c, fetchStatus: "FETCHING" }) : o.set(t, { ...n, fetchStatus: "FETCHING" });
    },
    GUILD_PROFILE_FETCH_SUCCESS: function (e) {
        let { guildId: t, profile: n } = e,
            i = o.get(t);
        null == i
            ? o.set(t, { ...c, profile: n, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
            : o.set(t, { ...i, profile: n, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
    },
    GUILD_PROFILE_FETCH_FAILURE: function (e) {
        let { guildId: t, error: n } = e,
            i = o.get(t);
        null == i
            ? o.set(t, { ...c, error: n, fetchStatus: "FETCHED" })
            : o.set(t, { ...i, error: n, fetchStatus: "FETCHED" });
    },
    GUILD_PROFILE_UPDATE: d,
    GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
        let { guildId: t, profile: n } = e,
            i = o.get(t);
        null == i ? o.set(t, { ...c, profile: n }) : o.set(t, { ...i, profile: n, isUpdating: !1 });
    },
    GUILD_PROFILE_UPDATE_FAILURE: E,
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let { form: t, guildId: n } = e,
            i = t?.profile;
        if (null == i) return;
        let l = o.get(n);
        null == l
            ? o.set(n, { ...c, profile: i, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
            : o.set(n, { ...l, profile: i, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
    },
    INVITE_RESOLVE_SUCCESS: _,
    INSTANT_INVITE_CREATE_SUCCESS: _,
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        t.type === s.rbe.GUILD_ANNOUNCEMENT && null != t.guild_id && o.delete(t.guild_id);
    },
    GUILD_SETTINGS_SET_WIDGET: function (e) {
        let { guildId: t, enabled: n } = e;
        null != t && n && o.delete(t);
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e,
            n = o.get(t.id);
        if (null == n || null == n.profile) return !1;
        let i = {
            ...n.profile,
            name: t.name,
            icon: t.icon ?? null,
            description: t.description ?? "",
            customBanner: t.discovery_splash ?? null,
        };
        o.set(t.id, { ...n, profile: i });
    },
    GUILD_PROFILE_UPDATE_VISIBILITY: d,
    GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
        let { guildId: t, visibility: n } = e,
            i = o.get(t),
            l = i?.profile;
        null != i && null != l && o.set(t, { ...i, isUpdating: !1, profile: { ...l, visibility: n } });
    },
    GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: E,
});
