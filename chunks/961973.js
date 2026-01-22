n.d(t, {
    $Y: () => A,
    A2: () => y,
    G4: () => R,
    H_: () => k,
    L1: () => v,
    Lx: () => T,
    OG: () => U,
    VU: () => C,
    _N: () => I,
    a: () => j,
    rs: () => O,
    sZ: () => N,
    tb: () => L,
    ui: () => D,
    vV: () => M,
}),
    n(938796),
    n(896048),
    n(321073),
    n(864466),
    n(443073);
var r = n(665260),
    i = n(311907),
    a = n(52133),
    s = n(148719),
    o = n(734057),
    l = n(962173),
    c = n(808728),
    u = n(71393),
    d = n(576705),
    f = n(403362),
    p = n(488926),
    _ = n(240248),
    h = n(112389),
    m = n(539916),
    g = n(652215),
    E = n(340837);
let b = new Date(1682488800000);
function y(e) {
    return (0, i.bG)([u.A, d.A], () => {
        let t = u.A.getGuild(e),
            n = !!(null == t ? void 0 : t.features.has(g.GuildFeatures.COMMUNITY)),
            r = d.A.can(g.xBc.MANAGE_GUILD, t),
            i = d.A.can(g.xBc.MANAGE_ROLES, t);
        return n && r && i;
    });
}
function O(e) {
    let t = u.A.getGuild(e),
        n = !!(null == t ? void 0 : t.features.has(g.GuildFeatures.COMMUNITY)),
        r = d.A.can(g.xBc.MANAGE_GUILD, t),
        i = d.A.can(g.xBc.MANAGE_ROLES, t);
    return n && r && i;
}
function A(e, t) {
    var n;
    if (
        null == e ||
        !e.features.has(g.GuildFeatures.GUILD_ONBOARDING) ||
        null == t ||
        null == t.joinedAt ||
        new Date(t.joinedAt) < b
    )
        return !1;
    let i = null != (n = t.flags) ? n : 0;
    return r.Lt(i, E.D.STARTED_ONBOARDING) && !r.Lt(i, E.D.COMPLETED_ONBOARDING);
}
function v(e, t) {
    return (
        !(
            null != e &&
            e.features.has(g.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            e.features.has(g.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
        ) && null != t
    );
}
function S(e, t, n) {
    let r = new Set();
    e.forEach((e) => {
        e.options.forEach((e) => {
            var t;
            null == e ||
                null == (t = e.channelIds) ||
                t.forEach((e) => {
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
function I(e, t, n) {
    return S(
        t,
        n,
        c.Ay.getChannels(e)[c.I6].map((e) => {
            let { channel: t } = e;
            return t;
        }),
    );
}
function T(e, t, n) {
    return S(
        t,
        n,
        (0, i.bG)([c.Ay], () => c.Ay.getChannels(e))[c.I6].map((e) => {
            let { channel: t } = e;
            return t;
        }),
    );
}
function C(e) {
    return N(o.A.getChannel(e));
}
function N(e) {
    return (
        null != e &&
        !!(0, h.S)(e.guild_id, e.id) &&
        (e.isForumChannel() ? p.MJ(g.xBc.SEND_MESSAGES_IN_THREADS, e) : p.MJ(g.xBc.SEND_MESSAGES, e))
    );
}
function R(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        i = P(e, t, (e) => e.id, r);
    return (
        n.forEach((t) => {
            var n, a;
            if (!t.required) return;
            let s = P(e, null != (n = null == (a = t.options[0]) ? void 0 : a.channelIds) ? n : [], (e) => e.id),
                o = t.options.reduce((t, n) => {
                    if (null == n.channelIds) return [];
                    let a = P(
                        e,
                        n.channelIds,
                        (e) => e.id,
                        (e) => r(e) && !i.includes(e),
                    );
                    return a.length < t.length ? a : t;
                }, s);
            i.push(...o);
        }),
        i
    );
}
function w(e, t) {
    return e.filter((e) => {
        var n;
        return N(null == (n = t[e]) ? void 0 : n.channel);
    });
}
function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e) => e,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        i = c.Ay.getChannels(e)[c.I6],
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
function D(e, t) {
    let n = P(e, t),
        r = c.Ay.getChannels(e)[c.I6],
        i = {};
    for (let e of r) i[e.channel.id] = e;
    return [
        w(
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
function L(e, t) {
    return (0, i.bG)(
        [c.Ay],
        () => {
            let n = c.Ay.getChannels(e),
                r = [],
                i = [],
                a = {};
            for (let e of n[c.I6])
                (0, h.S)(e.channel.guild_id, e.channel.id) &&
                    ((t.has(e.channel.id) && !e.channel.isCategory()) ||
                        (!e.channel.isThread() && null != e.channel.parent_id && t.has(e.channel.parent_id))) &&
                    ((a[e.channel.id] = e), r.push(e.channel), N(e.channel) && i.push(e.channel.id));
            return [i, r];
        },
        [e, t],
        x,
    );
}
function j(e) {
    return new Set(
        e
            .map((e) => e.roleIds)
            .flat()
            .filter(f.Vq),
    );
}
function M(e) {
    return new Set(
        e
            .map((e) => e.channelIds)
            .flat()
            .filter(f.Vq),
    );
}
function k(e) {
    let t = e.filter((e) => e.connection_type === m.wZ.PROVIDER_CONNECTED_ACCOUNT && e.provider_id),
        n = [],
        r = [];
    return (
        t.forEach((e) => {
            let t = e.provider_id;
            if ((0, _.uJ)(t)) return;
            let i = l.A.getAccount(null, t);
            null == i || i.revoked ? r.push(t) : n.push(t);
        }),
        {
            connected: n,
            notConnected: r,
        }
    );
}
function U(e) {
    let t = e.filter((e) => e.connection_type === m.wZ.APPLICATION && e.application_id),
        r = [],
        i = [],
        a = n(546183).default,
        { FetchState: s } = n(546183);
    return (
        t.forEach((e) => {
            let t = e.application_id;
            if ((0, _.uJ)(t)) return;
            let n = a.getNewestTokenForApplication(t);
            a.getFetchStateForApplication(t) === s.FETCHED && null != n ? r.push(t) : i.push(t);
        }),
        {
            connected: r,
            notConnected: i,
        }
    );
}
