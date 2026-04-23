n.d(t, {
    $Y: () => C,
    A2: () => R,
    G4: () => b,
    H_: () => B,
    L1: () => p,
    Lx: () => D,
    OG: () => w,
    VU: () => h,
    _N: () => L,
    a: () => G,
    rs: () => f,
    sZ: () => g,
    tb: () => y,
    ui: () => P,
    vV: () => v,
}),
    n(938796),
    n(321073);
var i = n(665260),
    r = n(17928),
    a = n(52133),
    s = n(148719),
    _ = n(734057),
    l = n(30370),
    o = n(808728),
    E = n(71393),
    d = n(576705),
    c = n(403362),
    u = n(488926),
    I = n(240248),
    A = n(112389),
    T = n(539916),
    S = n(652215),
    N = n(340837);
let O = new Date(16824888e5);
function R(e) {
    return (0, r.bG)([E.A, d.A], () => {
        let t = E.A.getGuild(e),
            n = !!t?.features.has(S.GuildFeatures.COMMUNITY),
            i = d.A.can(S.xBc.MANAGE_GUILD, t),
            r = d.A.can(S.xBc.MANAGE_ROLES, t);
        return n && i && r;
    });
}
function f(e) {
    let t = E.A.getGuild(e),
        n = !!t?.features.has(S.GuildFeatures.COMMUNITY),
        i = d.A.can(S.xBc.MANAGE_GUILD, t),
        r = d.A.can(S.xBc.MANAGE_ROLES, t);
    return n && i && r;
}
function C(e, t) {
    if (
        null == e ||
        !e.features.has(S.GuildFeatures.GUILD_ONBOARDING) ||
        null == t ||
        null == t.joinedAt ||
        new Date(t.joinedAt) < O
    )
        return !1;
    let n = t.flags ?? 0;
    return i.Lt(n, N.D.STARTED_ONBOARDING) && !i.Lt(n, N.D.COMPLETED_ONBOARDING);
}
function p(e, t) {
    return (
        !(
            null != e &&
            e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
        ) && null != t
    );
}
function m(e, t, n) {
    let i = new Set();
    e.forEach((e) => {
        e.options.forEach((e) => {
            e?.channelIds?.forEach((e) => {
                i.add(e);
            });
        });
    }),
        t.forEach((e) => i.add(e));
    let r = n.filter((e) => !e.isCategory() && !e.isThread() && !(0, s.A)(e));
    return [
        r.filter((e) => i.has(e.id) || (null != e.parent_id && i.has(e.parent_id))),
        r.filter((e) => !i.has(e.id) && !(null != e.parent_id && i.has(e.parent_id))),
    ];
}
function L(e, t, n) {
    return m(
        t,
        n,
        o.Ay.getChannels(e)[o.I6].map((e) => {
            let { channel: t } = e;
            return t;
        }),
    );
}
function D(e, t, n) {
    return m(
        t,
        n,
        (0, r.bG)([o.Ay], () => o.Ay.getChannels(e))[o.I6].map((e) => {
            let { channel: t } = e;
            return t;
        }),
    );
}
function h(e) {
    return g(_.A.getChannel(e));
}
function g(e) {
    return (
        null != e &&
        !!(0, A.S)(e.guild_id, e.id) &&
        (e.isForumChannel() ? u.MJ(S.xBc.SEND_MESSAGES_IN_THREADS, e) : u.MJ(S.xBc.SEND_MESSAGES, e))
    );
}
function b(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        r = U(e, t, (e) => e.id, i);
    return (
        n.forEach((t) => {
            if (!t.required) return;
            let n = U(e, t.options[0]?.channelIds ?? [], (e) => e.id),
                a = t.options.reduce((t, n) => {
                    if (null == n.channelIds) return [];
                    let a = U(
                        e,
                        n.channelIds,
                        (e) => e.id,
                        (e) => i(e) && !r.includes(e),
                    );
                    return a.length < t.length ? a : t;
                }, n);
            r.push(...a);
        }),
        r
    );
}
function U(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e) => e,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        r = o.Ay.getChannels(e)[o.I6],
        a = [];
    for (let { channel: e } of r)
        if (
            (0, A.S)(e.guild_id, e.id) &&
            ((t.includes(e.id) && !e.isCategory()) || (!e.isThread() && null != e.parent_id && t.includes(e.parent_id)))
        ) {
            let t = n(e);
            i(t) && a.push(t);
        }
    return a;
}
function P(e, t) {
    var n;
    let i = U(e, t),
        r = o.Ay.getChannels(e)[o.I6],
        a = {};
    for (let e of r) a[e.channel.id] = e;
    return [
        ((n = i.map((e) => {
            let { id: t } = e;
            return t;
        })),
        n.filter((e) => g(a[e]?.channel))),
        i,
    ];
}
function M(e, t) {
    return e[0].length === t[0].length && e[1].length === t[1].length && (0, a.A)(e[0], t[0]) && (0, a.A)(e[1], t[1]);
}
function y(e, t) {
    return (0, r.bG)(
        [o.Ay],
        () => {
            let n = o.Ay.getChannels(e),
                i = [],
                r = [],
                a = {};
            for (let e of n[o.I6])
                (0, A.S)(e.channel.guild_id, e.channel.id) &&
                    ((t.has(e.channel.id) && !e.channel.isCategory()) ||
                        (!e.channel.isThread() && null != e.channel.parent_id && t.has(e.channel.parent_id))) &&
                    ((a[e.channel.id] = e), i.push(e.channel), g(e.channel) && r.push(e.channel.id));
            return [r, i];
        },
        [e, t],
        M,
    );
}
function G(e) {
    return new Set(
        e
            .map((e) => e.roleIds)
            .flat()
            .filter(c.Vq),
    );
}
function v(e) {
    return new Set(
        e
            .map((e) => e.channelIds)
            .flat()
            .filter(c.Vq),
    );
}
function B(e) {
    let t = e.filter((e) => e.connection_type === T.wZ.PROVIDER_CONNECTED_ACCOUNT && e.provider_id),
        n = [],
        i = [];
    return (
        t.forEach((e) => {
            let t = e.provider_id;
            if ((0, I.uJ)(t)) return;
            let r = l.A.getAccount(null, t);
            null == r || r.revoked ? i.push(t) : n.push(t);
        }),
        { connected: n, notConnected: i }
    );
}
function w(e) {
    let t = e.filter((e) => e.connection_type === T.wZ.APPLICATION && e.application_id),
        i = [],
        r = [],
        a = n(546183).default,
        { FetchState: s } = n(546183);
    return (
        t.forEach((e) => {
            let t = e.application_id;
            if ((0, I.uJ)(t)) return;
            let n = a.getNewestTokenForApplication(t);
            a.getFetchStateForApplication(t) === s.FETCHED && null != n ? i.push(t) : r.push(t);
        }),
        { connected: i, notConnected: r }
    );
}
