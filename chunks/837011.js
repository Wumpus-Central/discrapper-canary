var l,
    i = n(158390),
    s = n(855986),
    r = n(73153),
    a = n(9994),
    o = n(652215),
    u = (((l = {}).NOT_FETCHED = "NOT_FETCHED"), (l.FETCHING = "FETCHING"), (l.FETCHED = "FETCHED"), l);
let c = new Map(),
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
        n = c.get(t);
    null == n ? c.set(t, { ...h, isUpdating: !0 }) : c.set(t, { ...n, isUpdating: !0 });
}
function g(e) {
    let { guildId: t, error: n } = e,
        l = c.get(t);
    null == l ? c.set(t, { ...h, error: n }) : c.set(t, { ...l, error: n, isUpdating: !1 });
}
function f(e) {
    let { invite: t } = e,
        { profile: n } = t;
    if (null == n) return;
    let l = c.get(n.id),
        i = (0, a.wr)(n);
    null == l
        ? c.set(n.id, { ...h, profile: i, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
        : c.set(n.id, { ...l, profile: i, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
}
class p extends s.Ay.Store {
    static displayName = "GuildProfileStore";
    getProfile(e) {
        return null == e ? null : (c.get(e)?.profile ?? null);
    }
    getFetchStatus(e) {
        return null == e ? "NOT_FETCHED" : (c.get(e)?.fetchStatus ?? "NOT_FETCHED");
    }
    getLastSyncTimestamp(e) {
        return null == e ? null : (c.get(e)?.lastSyncTimestamp ?? null);
    }
    getNextFetchAllowedAt(e) {
        return null == e ? null : (c.get(e)?.nextFetchAllowedAt ?? null);
    }
    getIsUpdating(e) {
        return null != e && (c.get(e)?.isUpdating ?? !1);
    }
    getErrorCode(e) {
        return null == e ? null : (c.get(e)?.error?.code ?? null);
    }
}
let E = new p(r.h, {
    GUILD_PROFILE_FETCH: function (e) {
        let { guildId: t } = e,
            n = c.get(t);
        null == n ? c.set(t, { ...h, fetchStatus: "FETCHING" }) : c.set(t, { ...n, fetchStatus: "FETCHING" });
    },
    GUILD_PROFILE_FETCH_SUCCESS: function (e) {
        let { guildId: t, profile: n } = e;
        (d.get(t)?.succeed(), d.delete(t));
        let l = c.get(t);
        null == l
            ? c.set(t, { ...h, profile: n, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
            : c.set(t, {
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
            a = c.get(n);
        null == a
            ? c.set(n, { ...h, error: l, fetchStatus: "FETCHED", nextFetchAllowedAt: r })
            : c.set(n, { ...a, error: l, fetchStatus: "FETCHED", nextFetchAllowedAt: r });
    },
    GUILD_PROFILE_UPDATE: m,
    GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
        let { guildId: t, profile: n } = e,
            l = c.get(t);
        null == l ? c.set(t, { ...h, profile: n }) : c.set(t, { ...l, profile: n, isUpdating: !1 });
    },
    GUILD_PROFILE_UPDATE_FAILURE: g,
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let { form: t, guildId: n } = e,
            l = t?.profile;
        if (null == l) return;
        let i = c.get(n);
        null == i
            ? c.set(n, { ...h, profile: l, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
            : c.set(n, { ...i, profile: l, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
    },
    INVITE_RESOLVE_SUCCESS: f,
    INSTANT_INVITE_CREATE_SUCCESS: f,
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        t.type === o.rbe.GUILD_ANNOUNCEMENT && null != t.guild_id && (c.delete(t.guild_id), d.delete(t.guild_id));
    },
    GUILD_SETTINGS_SET_WIDGET: function (e) {
        let { guildId: t, enabled: n } = e;
        null != t && n && (c.delete(t), d.delete(t));
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e,
            n = c.get(t.id);
        if (null == n || null == n.profile) return !1;
        let l = {
            ...n.profile,
            name: t.name,
            icon: t.icon ?? null,
            description: t.description ?? "",
            customBanner: t.discovery_splash ?? null,
        };
        c.set(t.id, { ...n, profile: l });
    },
    GUILD_PROFILE_UPDATE_VISIBILITY: m,
    GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
        let { guildId: t, visibility: n } = e,
            l = c.get(t),
            i = l?.profile;
        null != l && null != i && c.set(t, { ...l, isUpdating: !1, profile: { ...i, visibility: n } });
    },
    GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: g,
});
n.d(t, {}, { A: E, X: u });
