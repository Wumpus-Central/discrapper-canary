l.d(e, { A: () => d, X: () => T });
var n,
    u = l(158390),
    E = l(17928),
    i = l(228366),
    s = l(9994),
    a = l(652215),
    T = (((n = {}).NOT_FETCHED = "NOT_FETCHED"), (n.FETCHING = "FETCHING"), (n.FETCHED = "FETCHED"), n);
let c = new Map(),
    r = new Map(),
    _ = {
        profile: null,
        lastSyncTimestamp: null,
        fetchStatus: "NOT_FETCHED",
        isUpdating: !1,
        error: null,
        nextFetchAllowedAt: null,
    };
function o(t) {
    let { guildId: e } = t,
        l = c.get(e);
    null == l ? c.set(e, { ..._, isUpdating: !0 }) : c.set(e, { ...l, isUpdating: !0 });
}
function I(t) {
    let { guildId: e, error: l } = t,
        n = c.get(e);
    null == n ? c.set(e, { ..._, error: l }) : c.set(e, { ...n, error: l, isUpdating: !1 });
}
function S(t) {
    let { invite: e } = t,
        { profile: l } = e;
    if (null == l) return;
    let n = c.get(l.id),
        u = (0, s.wr)(l);
    null == n
        ? c.set(l.id, { ..._, profile: u, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
        : c.set(l.id, { ...n, profile: u, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
}
class D extends E.Ay.Store {
    static displayName = "GuildProfileStore";
    getProfile(t) {
        return null == t ? null : (c.get(t)?.profile ?? null);
    }
    getFetchStatus(t) {
        return null == t ? "NOT_FETCHED" : (c.get(t)?.fetchStatus ?? "NOT_FETCHED");
    }
    getLastSyncTimestamp(t) {
        return null == t ? null : (c.get(t)?.lastSyncTimestamp ?? null);
    }
    getNextFetchAllowedAt(t) {
        return null == t ? null : (c.get(t)?.nextFetchAllowedAt ?? null);
    }
    getIsUpdating(t) {
        return null != t && (c.get(t)?.isUpdating ?? !1);
    }
    getErrorCode(t) {
        return null == t ? null : (c.get(t)?.error?.code ?? null);
    }
}
let d = new D(i.h, {
    GUILD_PROFILE_FETCH: function (t) {
        let { guildId: e } = t,
            l = c.get(e);
        null == l ? c.set(e, { ..._, fetchStatus: "FETCHING" }) : c.set(e, { ...l, fetchStatus: "FETCHING" });
    },
    GUILD_PROFILE_FETCH_SUCCESS: function (t) {
        let { guildId: e, profile: l } = t;
        r.get(e)?.succeed(), r.delete(e);
        let n = c.get(e);
        null == n
            ? c.set(e, { ..._, profile: l, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
            : c.set(e, {
                  ...n,
                  profile: l,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: "FETCHED",
                  error: null,
                  nextFetchAllowedAt: null,
              });
    },
    GUILD_PROFILE_FETCH_FAILURE: function (t) {
        let e,
            { guildId: l, error: n } = t,
            E = (null == (e = r.get(l)) && ((e = new u.A(5e3, 3e5)), r.set(l, e)), e).fail(),
            i = Date.now() + E,
            s = c.get(l);
        null == s
            ? c.set(l, { ..._, error: n, fetchStatus: "FETCHED", nextFetchAllowedAt: i })
            : c.set(l, { ...s, error: n, fetchStatus: "FETCHED", nextFetchAllowedAt: i });
    },
    GUILD_PROFILE_UPDATE: o,
    GUILD_PROFILE_UPDATE_SUCCESS: function (t) {
        let { guildId: e, profile: l } = t,
            n = c.get(e);
        null == n ? c.set(e, { ..._, profile: l }) : c.set(e, { ...n, profile: l, isUpdating: !1 });
    },
    GUILD_PROFILE_UPDATE_FAILURE: I,
    MEMBER_VERIFICATION_FORM_UPDATE: function (t) {
        let { form: e, guildId: l } = t,
            n = e?.profile;
        if (null == n) return;
        let u = c.get(l);
        null == u
            ? c.set(l, { ..._, profile: n, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
            : c.set(l, { ...u, profile: n, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
    },
    INVITE_RESOLVE_SUCCESS: S,
    INSTANT_INVITE_CREATE_SUCCESS: S,
    CHANNEL_CREATE: function (t) {
        let { channel: e } = t;
        e.type === a.rbe.GUILD_ANNOUNCEMENT && null != e.guild_id && (c.delete(e.guild_id), r.delete(e.guild_id));
    },
    GUILD_SETTINGS_SET_WIDGET: function (t) {
        let { guildId: e, enabled: l } = t;
        null != e && l && (c.delete(e), r.delete(e));
    },
    GUILD_UPDATE: function (t) {
        let { guild: e } = t,
            l = c.get(e.id);
        if (null == l || null == l.profile) return !1;
        let n = {
            ...l.profile,
            name: e.name,
            icon: e.icon ?? null,
            description: e.description ?? "",
            customBanner: e.discovery_splash ?? null,
        };
        c.set(e.id, { ...l, profile: n });
    },
    GUILD_PROFILE_UPDATE_VISIBILITY: o,
    GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (t) {
        let { guildId: e, visibility: l } = t,
            n = c.get(e),
            u = n?.profile;
        null != n && null != u && c.set(e, { ...n, isUpdating: !1, profile: { ...u, visibility: l } });
    },
    GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: I,
});
