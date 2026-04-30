n.d(t, {
    $Y: () => m,
    A2: () => f,
    G4: () => b,
    H_: () => w,
    L1: () => O,
    Lx: () => g,
    OG: () => x,
    VU: () => L,
    _N: () => R,
    a: () => y,
    rs: () => p,
    sZ: () => D,
    tb: () => v,
    ui: () => P,
    vV: () => G,
}),
    n(938796),
    n(321073);
var i = n(665260),
    a = n(17928),
    r = n(52133),
    s = n(148719),
    l = n(734057),
    o = n(30370),
    d = n(808728),
    c = n(71393),
    _ = n(576705),
    E = n(403362),
    u = n(488926),
    A = n(240248),
    I = n(112389),
    T = n(539916),
    h = n(652215),
    S = n(340837);
let N = new Date(16824888e5);
function f(e) {
    return (0, a.bG)([c.A, _.A], () => {
        let t = c.A.getGuild(e),
            n = !!t?.features.has(h.GuildFeatures.COMMUNITY),
            i = _.A.can(h.xBc.MANAGE_GUILD, t),
            a = _.A.can(h.xBc.MANAGE_ROLES, t);
        return n && i && a;
    });
}
function p(e) {
    let t = c.A.getGuild(e),
        n = !!t?.features.has(h.GuildFeatures.COMMUNITY),
        i = _.A.can(h.xBc.MANAGE_GUILD, t),
        a = _.A.can(h.xBc.MANAGE_ROLES, t);
    return n && i && a;
}
function m(e, t) {
    if (
        null == e ||
        !e.features.has(h.GuildFeatures.GUILD_ONBOARDING) ||
        null == t ||
        null == t.joinedAt ||
        new Date(t.joinedAt) < N
    )
        return !1;
    let n = t.flags ?? 0;
    return i.Lt(n, S.D.STARTED_ONBOARDING) && !i.Lt(n, S.D.COMPLETED_ONBOARDING);
}
function O(e, t) {
    return (
        !(
            null != e &&
            e.features.has(h.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            e.features.has(h.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
        ) && null != t
    );
}
function C(e, t, n) {
    let i = new Set();
    e.forEach((e) => {
        e.options.forEach((e) => {
            e?.channelIds?.forEach((e) => {
                i.add(e);
            });
        });
    }),
        t.forEach((e) => i.add(e));
    let a = n.filter((e) => !e.isCategory() && !e.isThread() && !(0, s.A)(e));
    return [
        a.filter((e) => i.has(e.id) || (null != e.parent_id && i.has(e.parent_id))),
        a.filter((e) => !i.has(e.id) && !(null != e.parent_id && i.has(e.parent_id))),
    ];
}
function R(e, t, n) {
    return C(
        t,
        n,
        d.Ay.getChannels(e)[d.I6].map((e) => {
            let { channel: t } = e;
            return t;
        }),
    );
}
function g(e, t, n) {
    return C(
        t,
        n,
        (0, a.bG)([d.Ay], () => d.Ay.getChannels(e))[d.I6].map((e) => {
            let { channel: t } = e;
            return t;
        }),
    );
}
function L(e) {
    return D(l.A.getChannel(e));
}
function D(e) {
    return (
        null != e &&
        !!(0, I.S)(e.guild_id, e.id) &&
        (e.isForumChannel() ? u.MJ(h.xBc.SEND_MESSAGES_IN_THREADS, e) : u.MJ(h.xBc.SEND_MESSAGES, e))
    );
}
function b(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        a = M(e, t, (e) => e.id, i);
    return (
        n.forEach((t) => {
            if (!t.required) return;
            let n = M(e, t.options[0]?.channelIds ?? [], (e) => e.id),
                r = t.options.reduce((t, n) => {
                    if (null == n.channelIds) return [];
                    let r = M(
                        e,
                        n.channelIds,
                        (e) => e.id,
                        (e) => i(e) && !a.includes(e),
                    );
                    return r.length < t.length ? r : t;
                }, n);
            a.push(...r);
        }),
        a
    );
}
function M(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e) => e,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        a = d.Ay.getChannels(e)[d.I6],
        r = [];
    for (let { channel: e } of a)
        if (
            (0, I.S)(e.guild_id, e.id) &&
            ((t.includes(e.id) && !e.isCategory()) || (!e.isThread() && null != e.parent_id && t.includes(e.parent_id)))
        ) {
            let t = n(e);
            i(t) && r.push(t);
        }
    return r;
}
function P(e, t) {
    var n;
    let i = M(e, t),
        a = d.Ay.getChannels(e)[d.I6],
        r = {};
    for (let e of a) r[e.channel.id] = e;
    return [
        ((n = i.map((e) => {
            let { id: t } = e;
            return t;
        })),
        n.filter((e) => D(r[e]?.channel))),
        i,
    ];
}
function U(e, t) {
    return e[0].length === t[0].length && e[1].length === t[1].length && (0, r.A)(e[0], t[0]) && (0, r.A)(e[1], t[1]);
}
function v(e, t) {
    return (0, a.bG)(
        [d.Ay],
        () => {
            let n = d.Ay.getChannels(e),
                i = [],
                a = [],
                r = {};
            for (let e of n[d.I6])
                (0, I.S)(e.channel.guild_id, e.channel.id) &&
                    ((t.has(e.channel.id) && !e.channel.isCategory()) ||
                        (!e.channel.isThread() && null != e.channel.parent_id && t.has(e.channel.parent_id))) &&
                    ((r[e.channel.id] = e), i.push(e.channel), D(e.channel) && a.push(e.channel.id));
            return [a, i];
        },
        [e, t],
        U,
    );
}
function y(e) {
    return new Set(
        e
            .map((e) => e.roleIds)
            .flat()
            .filter(E.Vq),
    );
}
function G(e) {
    return new Set(
        e
            .map((e) => e.channelIds)
            .flat()
            .filter(E.Vq),
    );
}
function w(e) {
    let t = e.filter((e) => e.connection_type === T.wZ.PROVIDER_CONNECTED_ACCOUNT && e.provider_id),
        n = [],
        i = [];
    return (
        t.forEach((e) => {
            let t = e.provider_id;
            if ((0, A.uJ)(t)) return;
            let a = o.A.getAccount(null, t);
            null == a || a.revoked ? i.push(t) : n.push(t);
        }),
        { connected: n, notConnected: i }
    );
}
function x(e) {
    let t = e.filter((e) => e.connection_type === T.wZ.APPLICATION && e.application_id),
        i = [],
        a = [],
        r = n(546183).default,
        { FetchState: s } = n(546183);
    return (
        t.forEach((e) => {
            let t = e.application_id;
            if ((0, A.uJ)(t)) return;
            let n = r.getNewestTokenForApplication(t);
            r.getFetchStateForApplication(t) === s.FETCHED && null != n ? i.push(t) : a.push(t);
        }),
        { connected: i, notConnected: a }
    );
}
