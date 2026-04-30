"use strict";
n.d(t, { A: () => p, X: () => l });
var i,
    r = n(17928),
    s = n(228366),
    a = n(9994),
    o = n(652215),
    l = (((i = {}).NOT_FETCHED = "NOT_FETCHED"), (i.FETCHING = "FETCHING"), (i.FETCHED = "FETCHED"), i);
let u = new Map(),
    c = { profile: null, lastSyncTimestamp: null, fetchStatus: "NOT_FETCHED", isUpdating: !1, error: null };
function d(e) {
    let { guildId: t } = e,
        n = u.get(t);
    null == n ? u.set(t, { ...c, isUpdating: !0 }) : u.set(t, { ...n, isUpdating: !0 });
}
function _(e) {
    let { guildId: t, error: n } = e,
        i = u.get(t);
    null == i ? u.set(t, { ...c, error: n }) : u.set(t, { ...i, error: n, isUpdating: !1 });
}
function f(e) {
    let { invite: t } = e,
        { profile: n } = t;
    if (null == n) return;
    let i = u.get(n.id),
        r = (0, a.wr)(n);
    null == i
        ? u.set(n.id, { ...c, profile: r, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
        : u.set(n.id, { ...i, profile: r, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
}
class h extends r.Ay.Store {
    static displayName = "GuildProfileStore";
    getProfile(e) {
        return null == e ? null : (u.get(e)?.profile ?? null);
    }
    getFetchStatus(e) {
        return null == e ? "NOT_FETCHED" : (u.get(e)?.fetchStatus ?? "NOT_FETCHED");
    }
    getLastSyncTimestamp(e) {
        return null == e ? null : (u.get(e)?.lastSyncTimestamp ?? null);
    }
    getIsUpdating(e) {
        return null != e && (u.get(e)?.isUpdating ?? !1);
    }
    getErrorCode(e) {
        return null == e ? null : (u.get(e)?.error?.code ?? null);
    }
}
let p = new h(s.h, {
    GUILD_PROFILE_FETCH: function (e) {
        let { guildId: t } = e,
            n = u.get(t);
        null == n ? u.set(t, { ...c, fetchStatus: "FETCHING" }) : u.set(t, { ...n, fetchStatus: "FETCHING" });
    },
    GUILD_PROFILE_FETCH_SUCCESS: function (e) {
        let { guildId: t, profile: n } = e,
            i = u.get(t);
        null == i
            ? u.set(t, { ...c, profile: n, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
            : u.set(t, { ...i, profile: n, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
    },
    GUILD_PROFILE_FETCH_FAILURE: function (e) {
        let { guildId: t, error: n } = e,
            i = u.get(t);
        null == i
            ? u.set(t, { ...c, error: n, fetchStatus: "FETCHED" })
            : u.set(t, { ...i, error: n, fetchStatus: "FETCHED" });
    },
    GUILD_PROFILE_UPDATE: d,
    GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
        let { guildId: t, profile: n } = e,
            i = u.get(t);
        null == i ? u.set(t, { ...c, profile: n }) : u.set(t, { ...i, profile: n, isUpdating: !1 });
    },
    GUILD_PROFILE_UPDATE_FAILURE: _,
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let { form: t, guildId: n } = e,
            i = t?.profile;
        if (null == i) return;
        let r = u.get(n);
        null == r
            ? u.set(n, { ...c, profile: i, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
            : u.set(n, { ...r, profile: i, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
    },
    INVITE_RESOLVE_SUCCESS: f,
    INSTANT_INVITE_CREATE_SUCCESS: f,
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        t.type === o.rbe.GUILD_ANNOUNCEMENT && null != t.guild_id && u.delete(t.guild_id);
    },
    GUILD_SETTINGS_SET_WIDGET: function (e) {
        let { guildId: t, enabled: n } = e;
        null != t && n && u.delete(t);
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e,
            n = u.get(t.id);
        if (null == n || null == n.profile) return !1;
        let i = {
            ...n.profile,
            name: t.name,
            icon: t.icon ?? null,
            description: t.description ?? "",
            customBanner: t.discovery_splash ?? null,
        };
        u.set(t.id, { ...n, profile: i });
    },
    GUILD_PROFILE_UPDATE_VISIBILITY: d,
    GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
        let { guildId: t, visibility: n } = e,
            i = u.get(t),
            r = i?.profile;
        null != i && null != r && u.set(t, { ...i, isUpdating: !1, profile: { ...r, visibility: n } });
    },
    GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: _,
});
