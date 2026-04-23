"use strict";
n.d(t, {
    $Y: () => S,
    A2: () => I,
    G4: () => b,
    H_: () => k,
    L1: () => y,
    Lx: () => C,
    OG: () => U,
    VU: () => O,
    _N: () => v,
    a: () => P,
    rs: () => T,
    sZ: () => R,
    tb: () => M,
    ui: () => L,
    vV: () => x,
}),
    n(938796),
    n(321073);
var r = n(665260),
    i = n(311907),
    s = n(52133),
    a = n(148719),
    o = n(734057),
    l = n(962173),
    u = n(808728),
    c = n(71393),
    d = n(576705),
    _ = n(403362),
    f = n(488926),
    p = n(240248),
    h = n(112389),
    E = n(539916),
    m = n(652215),
    g = n(340837);
let A = new Date(16824888e5);
function I(e) {
    return (0, i.bG)([c.A, d.A], () => {
        let t = c.A.getGuild(e),
            n = !!t?.features.has(m.GuildFeatures.COMMUNITY),
            r = d.A.can(m.xBc.MANAGE_GUILD, t),
            i = d.A.can(m.xBc.MANAGE_ROLES, t);
        return n && r && i;
    });
}
function T(e) {
    let t = c.A.getGuild(e),
        n = !!t?.features.has(m.GuildFeatures.COMMUNITY),
        r = d.A.can(m.xBc.MANAGE_GUILD, t),
        i = d.A.can(m.xBc.MANAGE_ROLES, t);
    return n && r && i;
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
    return r.Lt(n, g.D.STARTED_ONBOARDING) && !r.Lt(n, g.D.COMPLETED_ONBOARDING);
}
function y(e, t) {
    return (
        !(
            null != e &&
            e.features.has(m.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            e.features.has(m.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
        ) && null != t
    );
}
function N(e, t, n) {
    let r = new Set();
    e.forEach((e) => {
        e.options.forEach((e) => {
            e?.channelIds?.forEach((e) => {
                r.add(e);
            });
        });
    }),
        t.forEach((e) => r.add(e));
    let i = n.filter((e) => !e.isCategory() && !e.isThread() && !(0, a.A)(e));
    return [
        i.filter((e) => r.has(e.id) || (null != e.parent_id && r.has(e.parent_id))),
        i.filter((e) => !r.has(e.id) && !(null != e.parent_id && r.has(e.parent_id))),
    ];
}
function v(e, t, n) {
    return N(
        t,
        n,
        u.Ay.getChannels(e)[u.I6].map((e) => {
            let { channel: t } = e;
            return t;
        }),
    );
}
function C(e, t, n) {
    return N(
        t,
        n,
        (0, i.bG)([u.Ay], () => u.Ay.getChannels(e))[u.I6].map((e) => {
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
        !!(0, h.S)(e.guild_id, e.id) &&
        (e.isForumChannel() ? f.MJ(m.xBc.SEND_MESSAGES_IN_THREADS, e) : f.MJ(m.xBc.SEND_MESSAGES, e))
    );
}
function b(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        i = D(e, t, (e) => e.id, r);
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
                        (e) => r(e) && !i.includes(e),
                    );
                    return s.length < t.length ? s : t;
                }, n);
            i.push(...s);
        }),
        i
    );
}
function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e) => e,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        i = u.Ay.getChannels(e)[u.I6],
        s = [];
    for (let { channel: e } of i)
        if (
            (0, h.S)(e.guild_id, e.id) &&
            ((t.includes(e.id) && !e.isCategory()) || (!e.isThread() && null != e.parent_id && t.includes(e.parent_id)))
        ) {
            let t = n(e);
            r(t) && s.push(t);
        }
    return s;
}
function L(e, t) {
    var n;
    let r = D(e, t),
        i = u.Ay.getChannels(e)[u.I6],
        s = {};
    for (let e of i) s[e.channel.id] = e;
    return [
        ((n = r.map((e) => {
            let { id: t } = e;
            return t;
        })),
        n.filter((e) => R(s[e]?.channel))),
        r,
    ];
}
function w(e, t) {
    return e[0].length === t[0].length && e[1].length === t[1].length && (0, s.A)(e[0], t[0]) && (0, s.A)(e[1], t[1]);
}
function M(e, t) {
    return (0, i.bG)(
        [u.Ay],
        () => {
            let n = u.Ay.getChannels(e),
                r = [],
                i = [],
                s = {};
            for (let e of n[u.I6])
                (0, h.S)(e.channel.guild_id, e.channel.id) &&
                    ((t.has(e.channel.id) && !e.channel.isCategory()) ||
                        (!e.channel.isThread() && null != e.channel.parent_id && t.has(e.channel.parent_id))) &&
                    ((s[e.channel.id] = e), r.push(e.channel), R(e.channel) && i.push(e.channel.id));
            return [i, r];
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
function k(e) {
    let t = e.filter((e) => e.connection_type === E.wZ.PROVIDER_CONNECTED_ACCOUNT && e.provider_id),
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
function U(e) {
    let t = e.filter((e) => e.connection_type === E.wZ.APPLICATION && e.application_id),
        r = [],
        i = [],
        s = n(546183).default,
        { FetchState: a } = n(546183);
    return (
        t.forEach((e) => {
            let t = e.application_id;
            if ((0, p.uJ)(t)) return;
            let n = s.getNewestTokenForApplication(t);
            s.getFetchStateForApplication(t) === a.FETCHED && null != n ? r.push(t) : i.push(t);
        }),
        { connected: r, notConnected: i }
    );
}
