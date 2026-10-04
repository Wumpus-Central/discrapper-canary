n.d(t, {
    Lp: () => A,
    N: () => S,
    Ot: () => f,
    Q9: () => C,
    Qv: () => m,
    Ux: () => E,
    Xs: () => R,
    dd: () => T,
    i8: () => p,
    n5: () => h,
    oX: () => g,
    sM: () => N,
    us: () => I,
    w$: () => L,
});
var i = n(17928),
    r = n(615606),
    a = n(587895),
    s = n(808728),
    l = n(71393),
    o = n(576705),
    d = n(967198),
    c = n(164892),
    u = n(793480),
    _ = n(652215);
function E(e, t) {
    return null == e || "user" === e.install_scope ? null : ((t ? e.preview_guild_id : null) ?? e.guild_id ?? null);
}
function A(e, t) {
    return [...("voice" === t ? [] : e[s.I6]), ...("text" === t ? [] : e[s.vM])].map((e) => {
        let { channel: t } = e;
        return t;
    });
}
function h(e) {
    return { isPublic: (e & c.Zh.PUBLIC) != 0, isShared: (e & c.Zh.SHAREABLE) != 0 };
}
function I(e) {
    return e?.type === _.rbe.GUILD_APP ? (e.application_id ?? null) : null;
}
function f(e, t) {
    return (
        null != e &&
        (e.guild_id === t || e.preview_guild_id === t || (null == e.guild_id && null == e.preview_guild_id))
    );
}
function p(e, t) {
    for (let { channel: n } of s.Ay.getChannels(e)[s.I6]) if (I(n) === t) return n.id;
    return null;
}
function T(e, t) {
    return (0, u.L0)({ guildId: e.id, location: t }) && !e.features.has(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
}
function m(e, t) {
    return e.filter((e) => T(e, t)).sort((e, t) => (e.id < t.id ? -1 : +(e.id > t.id)));
}
function g(e) {
    let t = d.A.getGuildId(),
        n = null == t ? null : l.A.getGuild(t);
    return null != n && T(n, e) ? n.id : (m(l.A.getGuildsArray(), e)[0]?.id ?? null);
}
function S(e, t) {
    return T(e, t);
}
function N(e, t) {
    return (
        !e.features.has(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) &&
        o.A.can(_.xBc.MANAGE_CHANNELS, e) &&
        o.A.can(_.xBc.MANAGE_GUILD, e) &&
        (0, u.L0)({ guildId: e.id, location: t })
    );
}
function C(e, t) {
    let n = (0, u.m0)({ guildId: e.id, location: t }),
        i = e.features.has(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    return n && !i;
}
function O(e, t, n) {
    return (
        e?.type === _.rbe.GUILD_APP &&
        n?.vibegrationsProjectId != null &&
        t?.features.has(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) !== !0
    );
}
function R(e, t) {
    let n = I(e),
        i = null != n && a.A.isHydrated(n) ? a.A.getApplication(n) : null;
    return O(e, l.A.getGuild(e?.guild_id), i) && (0, u.L0)({ guildId: e?.guild_id, location: t });
}
function L(e, t) {
    let n = (0, i.bG)([l.A], () => l.A.getGuild(e?.guild_id)),
        a = (0, r.q)(e),
        s = (0, u.m0)({ guildId: e?.guild_id, location: t });
    return O(e, n, a) && s;
}
