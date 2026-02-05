"use strict";
n.d(t, { A: () => S, X: () => o });
var r = n(311907),
    i = n(73153),
    a = n(9994),
    s = n(652215),
    o = (function (e) {
        return (e.NOT_FETCHED = "NOT_FETCHED"), (e.FETCHING = "FETCHING"), (e.FETCHED = "FETCHED"), e;
    })({});
let l = new Map(),
    u = { profile: null, lastSyncTimestamp: null, fetchStatus: "NOT_FETCHED", isUpdating: !1, error: null };
function c(e) {
    let { guildId: t } = e,
        n = l.get(t);
    null == n ? l.set(t, { ...u, fetchStatus: "FETCHING" }) : l.set(t, { ...n, fetchStatus: "FETCHING" });
}
function d(e) {
    let { guildId: t, profile: n } = e,
        r = l.get(t);
    null == r
        ? l.set(t, { ...u, profile: n, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
        : l.set(t, { ...r, profile: n, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
}
function _(e) {
    let { guildId: t, error: n } = e,
        r = l.get(t);
    null == r
        ? l.set(t, { ...u, error: n, fetchStatus: "FETCHED" })
        : l.set(t, { ...r, error: n, fetchStatus: "FETCHED" });
}
function f(e) {
    let { guildId: t } = e,
        n = l.get(t);
    null == n ? l.set(t, { ...u, isUpdating: !0 }) : l.set(t, { ...n, isUpdating: !0 });
}
function p(e) {
    let { guildId: t, profile: n } = e,
        r = l.get(t);
    null == r ? l.set(t, { ...u, profile: n }) : l.set(t, { ...r, profile: n, isUpdating: !1 });
}
function h(e) {
    let { guildId: t, error: n } = e,
        r = l.get(t);
    null == r ? l.set(t, { ...u, error: n }) : l.set(t, { ...r, error: n, isUpdating: !1 });
}
function m(e) {
    let { guildId: t, visibility: n } = e,
        r = l.get(t),
        i = r?.profile;
    null != r && null != i && l.set(t, { ...r, isUpdating: !1, profile: { ...i, visibility: n } });
}
function g(e) {
    let { form: t, guildId: n } = e,
        r = t?.profile;
    if (null == r) return;
    let i = l.get(n);
    null == i
        ? l.set(n, { ...u, profile: r, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
        : l.set(n, { ...i, profile: r, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
}
function E(e) {
    let { invite: t } = e,
        { profile: n } = t;
    if (null == n) return;
    let r = l.get(n.id),
        i = (0, a.wr)(n);
    null == r
        ? l.set(n.id, { ...u, profile: i, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
        : l.set(n.id, { ...r, profile: i, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
}
function A(e) {
    let { channel: t } = e;
    t.type === s.rbe.GUILD_ANNOUNCEMENT && null != t.guild_id && l.delete(t.guild_id);
}
function I(e) {
    let { guildId: t, enabled: n } = e;
    null != t && n && l.delete(t);
}
function T(e) {
    let { guild: t } = e,
        n = l.get(t.id);
    if (null == n || null == n.profile) return !1;
    let r = {
        ...n.profile,
        name: t.name,
        icon: t.icon ?? null,
        description: t.description ?? "",
        customBanner: t.discovery_splash ?? null,
    };
    l.set(t.id, { ...n, profile: r });
}
class y extends r.Ay.Store {
    static displayName = "GuildProfileStore";
    getProfile(e) {
        return null == e ? null : (l.get(e)?.profile ?? null);
    }
    getFetchStatus(e) {
        return null == e ? "NOT_FETCHED" : (l.get(e)?.fetchStatus ?? "NOT_FETCHED");
    }
    getLastSyncTimestamp(e) {
        return null == e ? null : (l.get(e)?.lastSyncTimestamp ?? null);
    }
    getIsUpdating(e) {
        return null != e && (l.get(e)?.isUpdating ?? !1);
    }
    getErrorCode(e) {
        return null == e ? null : (l.get(e)?.error?.code ?? null);
    }
}
let S = new y(i.h, {
    GUILD_PROFILE_FETCH: c,
    GUILD_PROFILE_FETCH_SUCCESS: d,
    GUILD_PROFILE_FETCH_FAILURE: _,
    GUILD_PROFILE_UPDATE: f,
    GUILD_PROFILE_UPDATE_SUCCESS: p,
    GUILD_PROFILE_UPDATE_FAILURE: h,
    MEMBER_VERIFICATION_FORM_UPDATE: g,
    INVITE_RESOLVE_SUCCESS: E,
    INSTANT_INVITE_CREATE_SUCCESS: E,
    CHANNEL_CREATE: A,
    GUILD_SETTINGS_SET_WIDGET: I,
    GUILD_UPDATE: T,
    GUILD_PROFILE_UPDATE_VISIBILITY: f,
    GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: m,
    GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: h,
});
