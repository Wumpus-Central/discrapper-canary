"use strict";
n.d(t, {
    $Y: () => y,
    A2: () => I,
    G4: () => O,
    H_: () => U,
    L1: () => S,
    Lx: () => b,
    OG: () => G,
    VU: () => N,
    _N: () => C,
    a: () => M,
    rs: () => T,
    sZ: () => R,
    tb: () => P,
    ui: () => w,
    vV: () => k,
}),
    n(938796),
    n(321073);
var r = n(665260),
    i = n(311907),
    a = n(52133),
    s = n(148719),
    o = n(734057),
    l = n(962173),
    u = n(808728),
    c = n(71393),
    d = n(576705),
    _ = n(403362),
    f = n(488926),
    p = n(240248),
    h = n(112389),
    m = n(539916),
    g = n(652215),
    E = n(340837);
let A = new Date(16824888e5);
function I(e) {
    return (0, i.bG)([c.A, d.A], () => {
        let t = c.A.getGuild(e),
            n = !!t?.features.has(g.GuildFeatures.COMMUNITY),
            r = d.A.can(g.xBc.MANAGE_GUILD, t),
            i = d.A.can(g.xBc.MANAGE_ROLES, t);
        return n && r && i;
    });
}
function T(e) {
    let t = c.A.getGuild(e),
        n = !!t?.features.has(g.GuildFeatures.COMMUNITY),
        r = d.A.can(g.xBc.MANAGE_GUILD, t),
        i = d.A.can(g.xBc.MANAGE_ROLES, t);
    return n && r && i;
}
function y(e, t) {
    if (
        null == e ||
        !e.features.has(g.GuildFeatures.GUILD_ONBOARDING) ||
        null == t ||
        null == t.joinedAt ||
        new Date(t.joinedAt) < A
    )
        return !1;
    let n = t.flags ?? 0;
    return r.Lt(n, E.D.STARTED_ONBOARDING) && !r.Lt(n, E.D.COMPLETED_ONBOARDING);
}
function S(e, t) {
    return (
        !(
            null != e &&
            e.features.has(g.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            e.features.has(g.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
        ) && null != t
    );
}
function v(e, t, n) {
    let r = new Set();
    e.forEach((e) => {
        e.options.forEach((e) => {
            e?.channelIds?.forEach((e) => {
                r.add(e);
            });
        });
    }),
        t.forEach((e) => r.add(e));
    let i = n.filter((e) => !e.isCategory() && !e.isThread() && !(0, s.A)(e));
    return [
        i.filter((e) => r.has(e.id) || (null != e.parent_id && r.has(e.parent_id))),
        i.filter((e) => !r.has(e.id) && !(null != e.parent_id && r.has(e.parent_id))),
    ];
}
function C(e, t, n) {
    return v(
        t,
        n,
        u.Ay.getChannels(e)[u.I6].map((e) => {
            let { channel: t } = e;
            return t;
        }),
    );
}
function b(e, t, n) {
    return v(
        t,
        n,
        (0, i.bG)([u.Ay], () => u.Ay.getChannels(e))[u.I6].map((e) => {
            let { channel: t } = e;
            return t;
        }),
    );
}
function N(e) {
    return R(o.A.getChannel(e));
}
function R(e) {
    return (
        null != e &&
        !!(0, h.S)(e.guild_id, e.id) &&
        (e.isForumChannel() ? f.MJ(g.xBc.SEND_MESSAGES_IN_THREADS, e) : f.MJ(g.xBc.SEND_MESSAGES, e))
    );
}
function O(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        i = L(e, t, (e) => e.id, r);
    return (
        n.forEach((t) => {
            if (!t.required) return;
            let n = L(e, t.options[0]?.channelIds ?? [], (e) => e.id),
                a = t.options.reduce((t, n) => {
                    if (null == n.channelIds) return [];
                    let a = L(
                        e,
                        n.channelIds,
                        (e) => e.id,
                        (e) => r(e) && !i.includes(e),
                    );
                    return a.length < t.length ? a : t;
                }, n);
            i.push(...a);
        }),
        i
    );
}
function D(e, t) {
    return e.filter((e) => R(t[e]?.channel));
}
function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e) => e,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        i = u.Ay.getChannels(e)[u.I6],
        a = [];
    for (let { channel: e } of i)
        if (
            (0, h.S)(e.guild_id, e.id) &&
            ((t.includes(e.id) && !e.isCategory()) || (!e.isThread() && null != e.parent_id && t.includes(e.parent_id)))
        ) {
            let t = n(e);
            r(t) && a.push(t);
        }
    return a;
}
function w(e, t) {
    let n = L(e, t),
        r = u.Ay.getChannels(e)[u.I6],
        i = {};
    for (let e of r) i[e.channel.id] = e;
    return [
        D(
            n.map((e) => {
                let { id: t } = e;
                return t;
            }),
            i,
        ),
        n,
    ];
}
function x(e, t) {
    return e[0].length === t[0].length && e[1].length === t[1].length && (0, a.A)(e[0], t[0]) && (0, a.A)(e[1], t[1]);
}
function P(e, t) {
    return (0, i.bG)(
        [u.Ay],
        () => {
            let n = u.Ay.getChannels(e),
                r = [],
                i = [],
                a = {};
            for (let e of n[u.I6])
                (0, h.S)(e.channel.guild_id, e.channel.id) &&
                    ((t.has(e.channel.id) && !e.channel.isCategory()) ||
                        (!e.channel.isThread() && null != e.channel.parent_id && t.has(e.channel.parent_id))) &&
                    ((a[e.channel.id] = e), r.push(e.channel), R(e.channel) && i.push(e.channel.id));
            return [i, r];
        },
        [e, t],
        x,
    );
}
function M(e) {
    return new Set(
        e
            .map((e) => e.roleIds)
            .flat()
            .filter(_.Vq),
    );
}
function k(e) {
    return new Set(
        e
            .map((e) => e.channelIds)
            .flat()
            .filter(_.Vq),
    );
}
function U(e) {
    let t = e.filter((e) => e.connection_type === m.wZ.PROVIDER_CONNECTED_ACCOUNT && e.provider_id),
        n = [],
        r = [];
    return (
        t.forEach((e) => {
            let t = e.provider_id;
            if ((0, p.uJ)(t)) return;
            let i = l.A.getAccount(null, t);
            null == i || i.revoked ? r.push(t) : n.push(t);
        }),
        { connected: n, notConnected: r }
    );
}
function G(e) {
    let t = e.filter((e) => e.connection_type === m.wZ.APPLICATION && e.application_id),
        r = [],
        i = [],
        a = n(546183).default,
        { FetchState: s } = n(546183);
    return (
        t.forEach((e) => {
            let t = e.application_id;
            if ((0, p.uJ)(t)) return;
            let n = a.getNewestTokenForApplication(t);
            a.getFetchStateForApplication(t) === s.FETCHED && null != n ? r.push(t) : i.push(t);
        }),
        { connected: r, notConnected: i }
    );
}
