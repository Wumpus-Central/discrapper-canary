"use strict";
n.d(t, {
    $Y: () => S,
    A2: () => m,
    G4: () => D,
    H_: () => G,
    L1: () => N,
    Lx: () => O,
    OG: () => x,
    VU: () => L,
    _N: () => R,
    a: () => U,
    rs: () => g,
    sZ: () => y,
    tb: () => P,
    ui: () => b,
    vV: () => w,
}),
    n(938796),
    n(321073);
var i = n(665260),
    r = n(17928),
    a = n(52133),
    s = n(148719),
    l = n(734057),
    o = n(30370),
    d = n(808728),
    c = n(71393),
    u = n(576705),
    _ = n(403362),
    E = n(488926),
    A = n(240248),
    h = n(112389),
    I = n(539916),
    f = n(652215),
    p = n(340837);
let T = new Date(16824888e5);
function m(e) {
    return (0, r.bG)([c.A, u.A], () => {
        let t = c.A.getGuild(e),
            n = !!t?.features.has(f.GuildFeatures.COMMUNITY),
            i = u.A.can(f.xBc.MANAGE_GUILD, t),
            r = u.A.can(f.xBc.MANAGE_ROLES, t);
        return n && i && r;
    });
}
function g(e) {
    let t = c.A.getGuild(e),
        n = !!t?.features.has(f.GuildFeatures.COMMUNITY),
        i = u.A.can(f.xBc.MANAGE_GUILD, t),
        r = u.A.can(f.xBc.MANAGE_ROLES, t);
    return n && i && r;
}
function S(e, t) {
    if (
        null == e ||
        !e.features.has(f.GuildFeatures.GUILD_ONBOARDING) ||
        null == t ||
        null == t.joinedAt ||
        new Date(t.joinedAt) < T
    )
        return !1;
    let n = t.flags ?? 0;
    return i.Lt(n, p.D.STARTED_ONBOARDING) && !i.Lt(n, p.D.COMPLETED_ONBOARDING);
}
function N(e, t) {
    return (
        !(
            null != e &&
            e.features.has(f.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            e.features.has(f.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
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
    let r = n.filter((e) => !e.isCategory() && !e.isThread() && !(0, s.A)(e));
    return [
        r.filter((e) => i.has(e.id) || (null != e.parent_id && i.has(e.parent_id))),
        r.filter((e) => !i.has(e.id) && !(null != e.parent_id && i.has(e.parent_id))),
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
function O(e, t, n) {
    return C(
        t,
        n,
        (0, r.bG)([d.Ay], () => d.Ay.getChannels(e))[d.I6].map((e) => {
            let { channel: t } = e;
            return t;
        }),
    );
}
function L(e) {
    return y(l.A.getChannel(e));
}
function y(e) {
    return (
        null != e &&
        !!(0, h.S)(e.guild_id, e.id) &&
        (e.isForumChannel() ? E.MJ(f.xBc.SEND_MESSAGES_IN_THREADS, e) : E.MJ(f.xBc.SEND_MESSAGES, e))
    );
}
function D(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        r = v(e, t, (e) => e.id, i);
    return (
        n.forEach((t) => {
            if (!t.required) return;
            let n = v(e, t.options[0]?.channelIds ?? [], (e) => e.id),
                a = t.options.reduce((t, n) => {
                    if (null == n.channelIds) return [];
                    let a = v(
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
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e) => e,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        r = d.Ay.getChannels(e)[d.I6],
        a = [];
    for (let { channel: e } of r)
        if (
            (0, h.S)(e.guild_id, e.id) &&
            ((t.includes(e.id) && !e.isCategory()) || (!e.isThread() && null != e.parent_id && t.includes(e.parent_id)))
        ) {
            let t = n(e);
            i(t) && a.push(t);
        }
    return a;
}
function b(e, t) {
    var n;
    let i = v(e, t),
        r = d.Ay.getChannels(e)[d.I6],
        a = {};
    for (let e of r) a[e.channel.id] = e;
    return [
        ((n = i.map((e) => {
            let { id: t } = e;
            return t;
        })),
        n.filter((e) => y(a[e]?.channel))),
        i,
    ];
}
function M(e, t) {
    return e[0].length === t[0].length && e[1].length === t[1].length && (0, a.A)(e[0], t[0]) && (0, a.A)(e[1], t[1]);
}
function P(e, t) {
    return (0, r.bG)(
        [d.Ay],
        () => {
            let n = d.Ay.getChannels(e),
                i = [],
                r = [],
                a = {};
            for (let e of n[d.I6])
                (0, h.S)(e.channel.guild_id, e.channel.id) &&
                    ((t.has(e.channel.id) && !e.channel.isCategory()) ||
                        (!e.channel.isThread() && null != e.channel.parent_id && t.has(e.channel.parent_id))) &&
                    ((a[e.channel.id] = e), i.push(e.channel), y(e.channel) && r.push(e.channel.id));
            return [r, i];
        },
        [e, t],
        M,
    );
}
function U(e) {
    return new Set(
        e
            .map((e) => e.roleIds)
            .flat()
            .filter(_.Vq),
    );
}
function w(e) {
    return new Set(
        e
            .map((e) => e.channelIds)
            .flat()
            .filter(_.Vq),
    );
}
function G(e) {
    let t = e.filter((e) => e.connection_type === I.wZ.PROVIDER_CONNECTED_ACCOUNT && !!e.provider_id),
        n = [],
        i = [];
    return (
        t.forEach((e) => {
            let t = e.provider_id;
            if ((0, A.uJ)(t)) return;
            let r = o.A.getAccount(null, t);
            null == r || r.revoked ? i.push(t) : n.push(t);
        }),
        { connected: n, notConnected: i }
    );
}
function x(e) {
    let t = e.filter((e) => e.connection_type === I.wZ.APPLICATION && !!e.application_id),
        i = [],
        r = [],
        a = n(733110).default,
        { FetchState: s } = n(733110);
    return (
        t.forEach((e) => {
            let t = e.application_id;
            if ((0, A.uJ)(t)) return;
            let n = a.getNewestTokenForApplication(t);
            a.getFetchStateForApplication(t) === s.FETCHED && null != n ? i.push(t) : r.push(t);
        }),
        { connected: i, notConnected: r }
    );
}
