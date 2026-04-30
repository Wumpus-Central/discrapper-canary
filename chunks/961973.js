"use strict";
n.d(t, {
    $Y: () => S,
    A2: () => I,
    G4: () => b,
    H_: () => U,
    L1: () => N,
    Lx: () => v,
    OG: () => k,
    VU: () => O,
    _N: () => C,
    a: () => P,
    rs: () => T,
    sZ: () => R,
    tb: () => M,
    ui: () => L,
    vV: () => x,
}),
    n(938796),
    n(321073);
var i = n(665260),
    r = n(17928),
    s = n(52133),
    a = n(148719),
    o = n(734057),
    l = n(30370),
    u = n(808728),
    c = n(71393),
    d = n(576705),
    _ = n(403362),
    f = n(488926),
    h = n(240248),
    p = n(112389),
    E = n(539916),
    m = n(652215),
    g = n(340837);
let A = new Date(16824888e5);
function I(e) {
    return (0, r.bG)([c.A, d.A], () => {
        let t = c.A.getGuild(e),
            n = !!t?.features.has(m.GuildFeatures.COMMUNITY),
            i = d.A.can(m.xBc.MANAGE_GUILD, t),
            r = d.A.can(m.xBc.MANAGE_ROLES, t);
        return n && i && r;
    });
}
function T(e) {
    let t = c.A.getGuild(e),
        n = !!t?.features.has(m.GuildFeatures.COMMUNITY),
        i = d.A.can(m.xBc.MANAGE_GUILD, t),
        r = d.A.can(m.xBc.MANAGE_ROLES, t);
    return n && i && r;
}
function S(e, t) {
    if (
        null == e ||
        !e.features.has(m.GuildFeatures.GUILD_ONBOARDING) ||
        null == t ||
        null == t.joinedAt ||
        new Date(t.joinedAt) < A
    )
        return !1;
    let n = t.flags ?? 0;
    return i.Lt(n, g.D.STARTED_ONBOARDING) && !i.Lt(n, g.D.COMPLETED_ONBOARDING);
}
function N(e, t) {
    return (
        !(
            null != e &&
            e.features.has(m.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            e.features.has(m.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
        ) && null != t
    );
}
function y(e, t, n) {
    let i = new Set();
    e.forEach((e) => {
        e.options.forEach((e) => {
            e?.channelIds?.forEach((e) => {
                i.add(e);
            });
        });
    }),
        t.forEach((e) => i.add(e));
    let r = n.filter((e) => !e.isCategory() && !e.isThread() && !(0, a.A)(e));
    return [
        r.filter((e) => i.has(e.id) || (null != e.parent_id && i.has(e.parent_id))),
        r.filter((e) => !i.has(e.id) && !(null != e.parent_id && i.has(e.parent_id))),
    ];
}
function C(e, t, n) {
    return y(
        t,
        n,
        u.Ay.getChannels(e)[u.I6].map((e) => {
            let { channel: t } = e;
            return t;
        }),
    );
}
function v(e, t, n) {
    return y(
        t,
        n,
        (0, r.bG)([u.Ay], () => u.Ay.getChannels(e))[u.I6].map((e) => {
            let { channel: t } = e;
            return t;
        }),
    );
}
function O(e) {
    return R(o.A.getChannel(e));
}
function R(e) {
    return (
        null != e &&
        !!(0, p.S)(e.guild_id, e.id) &&
        (e.isForumChannel() ? f.MJ(m.xBc.SEND_MESSAGES_IN_THREADS, e) : f.MJ(m.xBc.SEND_MESSAGES, e))
    );
}
function b(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        r = D(e, t, (e) => e.id, i);
    return (
        n.forEach((t) => {
            if (!t.required) return;
            let n = D(e, t.options[0]?.channelIds ?? [], (e) => e.id),
                s = t.options.reduce((t, n) => {
                    if (null == n.channelIds) return [];
                    let s = D(
                        e,
                        n.channelIds,
                        (e) => e.id,
                        (e) => i(e) && !r.includes(e),
                    );
                    return s.length < t.length ? s : t;
                }, n);
            r.push(...s);
        }),
        r
    );
}
function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e) => e,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        r = u.Ay.getChannels(e)[u.I6],
        s = [];
    for (let { channel: e } of r)
        if (
            (0, p.S)(e.guild_id, e.id) &&
            ((t.includes(e.id) && !e.isCategory()) || (!e.isThread() && null != e.parent_id && t.includes(e.parent_id)))
        ) {
            let t = n(e);
            i(t) && s.push(t);
        }
    return s;
}
function L(e, t) {
    var n;
    let i = D(e, t),
        r = u.Ay.getChannels(e)[u.I6],
        s = {};
    for (let e of r) s[e.channel.id] = e;
    return [
        ((n = i.map((e) => {
            let { id: t } = e;
            return t;
        })),
        n.filter((e) => R(s[e]?.channel))),
        i,
    ];
}
function w(e, t) {
    return e[0].length === t[0].length && e[1].length === t[1].length && (0, s.A)(e[0], t[0]) && (0, s.A)(e[1], t[1]);
}
function M(e, t) {
    return (0, r.bG)(
        [u.Ay],
        () => {
            let n = u.Ay.getChannels(e),
                i = [],
                r = [],
                s = {};
            for (let e of n[u.I6])
                (0, p.S)(e.channel.guild_id, e.channel.id) &&
                    ((t.has(e.channel.id) && !e.channel.isCategory()) ||
                        (!e.channel.isThread() && null != e.channel.parent_id && t.has(e.channel.parent_id))) &&
                    ((s[e.channel.id] = e), i.push(e.channel), R(e.channel) && r.push(e.channel.id));
            return [r, i];
        },
        [e, t],
        w,
    );
}
function P(e) {
    return new Set(
        e
            .map((e) => e.roleIds)
            .flat()
            .filter(_.Vq),
    );
}
function x(e) {
    return new Set(
        e
            .map((e) => e.channelIds)
            .flat()
            .filter(_.Vq),
    );
}
function U(e) {
    let t = e.filter((e) => e.connection_type === E.wZ.PROVIDER_CONNECTED_ACCOUNT && e.provider_id),
        n = [],
        i = [];
    return (
        t.forEach((e) => {
            let t = e.provider_id;
            if ((0, h.uJ)(t)) return;
            let r = l.A.getAccount(null, t);
            null == r || r.revoked ? i.push(t) : n.push(t);
        }),
        { connected: n, notConnected: i }
    );
}
function k(e) {
    let t = e.filter((e) => e.connection_type === E.wZ.APPLICATION && e.application_id),
        i = [],
        r = [],
        s = n(546183).default,
        { FetchState: a } = n(546183);
    return (
        t.forEach((e) => {
            let t = e.application_id;
            if ((0, h.uJ)(t)) return;
            let n = s.getNewestTokenForApplication(t);
            s.getFetchStateForApplication(t) === a.FETCHED && null != n ? i.push(t) : r.push(t);
        }),
        { connected: i, notConnected: r }
    );
}
