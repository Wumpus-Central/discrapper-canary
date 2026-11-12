var l,
    i = n(158390),
    s = n(855986),
    r = n(73153),
    a = n(9994),
    o = n(652215),
    c = (((l = {}).NOT_FETCHED = "NOT_FETCHED"), (l.FETCHING = "FETCHING"), (l.FETCHED = "FETCHED"), l);
let u = new Map(),
    d = new Map(),
    h = {
        profile: null,
        lastSyncTimestamp: null,
        fetchStatus: "NOT_FETCHED",
        isUpdating: !1,
        error: null,
        nextFetchAllowedAt: null,
    };
function m(e) {
    let { guildId: t } = e,
        n = u.get(t);
    null == n ? u.set(t, { ...h, isUpdating: !0 }) : u.set(t, { ...n, isUpdating: !0 });
}
function g(e) {
    let { guildId: t, error: n } = e,
        l = u.get(t);
    null == l ? u.set(t, { ...h, error: n }) : u.set(t, { ...l, error: n, isUpdating: !1 });
}
function f(e) {
    let { invite: t } = e,
        { profile: n } = t;
    if (null == n) return;
    let l = u.get(n.id),
        i = (0, a.wr)(n);
    null == l
        ? u.set(n.id, { ...h, profile: i, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
        : u.set(n.id, { ...l, profile: i, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
}
class p extends s.Ay.Store {
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
    getNextFetchAllowedAt(e) {
        return null == e ? null : (u.get(e)?.nextFetchAllowedAt ?? null);
    }
    getIsUpdating(e) {
        return null != e && (u.get(e)?.isUpdating ?? !1);
    }
    getErrorCode(e) {
        return null == e ? null : (u.get(e)?.error?.code ?? null);
    }
}
let E = new p(r.h, {
    GUILD_PROFILE_FETCH: function (e) {
        let { guildId: t } = e,
            n = u.get(t);
        null == n ? u.set(t, { ...h, fetchStatus: "FETCHING" }) : u.set(t, { ...n, fetchStatus: "FETCHING" });
    },
    GUILD_PROFILE_FETCH_SUCCESS: function (e) {
        let { guildId: t, profile: n } = e;
        (d.get(t)?.succeed(), d.delete(t));
        let l = u.get(t);
        null == l
            ? u.set(t, { ...h, profile: n, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
            : u.set(t, {
                  ...l,
                  profile: n,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: "FETCHED",
                  error: null,
                  nextFetchAllowedAt: null,
              });
    },
    GUILD_PROFILE_FETCH_FAILURE: function (e) {
        let t,
            { guildId: n, error: l } = e,
            s = (null == (t = d.get(n)) && ((t = new i.A(5e3, 3e5)), d.set(n, t)), t).fail(),
            r = Date.now() + s,
            a = u.get(n);
        null == a
            ? u.set(n, { ...h, error: l, fetchStatus: "FETCHED", nextFetchAllowedAt: r })
            : u.set(n, { ...a, error: l, fetchStatus: "FETCHED", nextFetchAllowedAt: r });
    },
    GUILD_PROFILE_UPDATE: m,
    GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
        let { guildId: t, profile: n } = e,
            l = u.get(t);
        null == l ? u.set(t, { ...h, profile: n }) : u.set(t, { ...l, profile: n, isUpdating: !1 });
    },
    GUILD_PROFILE_UPDATE_FAILURE: g,
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let { form: t, guildId: n } = e,
            l = t?.profile;
        if (null == l) return;
        let i = u.get(n);
        null == i
            ? u.set(n, { ...h, profile: l, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
            : u.set(n, { ...i, profile: l, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
    },
    INVITE_RESOLVE_SUCCESS: f,
    INSTANT_INVITE_CREATE_SUCCESS: f,
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        t.type === o.rbe.GUILD_ANNOUNCEMENT && null != t.guild_id && (u.delete(t.guild_id), d.delete(t.guild_id));
    },
    GUILD_SETTINGS_SET_WIDGET: function (e) {
        let { guildId: t, enabled: n } = e;
        null != t && n && (u.delete(t), d.delete(t));
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e,
            n = u.get(t.id);
        if (null == n || null == n.profile) return !1;
        let l = {
            ...n.profile,
            name: t.name,
            icon: t.icon ?? null,
            description: t.description ?? "",
            customBanner: t.discovery_splash ?? null,
        };
        u.set(t.id, { ...n, profile: l });
    },
    GUILD_PROFILE_UPDATE_VISIBILITY: m,
    GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
        let { guildId: t, visibility: n } = e,
            l = u.get(t),
            i = l?.profile;
        null != l && null != i && u.set(t, { ...l, isUpdating: !1, profile: { ...i, visibility: n } });
    },
    GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: g,
});
n.d(t, {}, { A: E, X: c });
