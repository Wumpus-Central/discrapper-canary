"use strict";
n.d(t, { Dg: () => I, IO: () => p, Ij: () => S, YG: () => f, _k: () => m, n5: () => T, yk: () => g }), n(321073);
var i = n(64700),
    r = n(17928),
    a = n(80682),
    s = n(55730),
    l = n(627363),
    o = n(473503),
    d = n(691060),
    c = n(569926),
    u = n(734057),
    _ = n(71393),
    E = n(652215);
let A = { "1509696536903417891": "1432419613165228174" },
    h = {},
    I = "No Mic";
function f(e) {
    return (0, r.bG)(
        [u.A],
        () =>
            null != e &&
            !!e.isForumPost() &&
            null != e.parent_id &&
            (u.A.getChannel(e.parent_id)?.isGameInvitesChannel() ?? !1),
    );
}
function p(e) {
    let t = (0, d.kt)(e);
    return !!f(e) && !t.some((e) => e.name === I);
}
function T(e, t) {
    return (0, o.OA)(e, { enabled: t, allowArchived: !0 });
}
function m(e) {
    let t,
        n,
        a,
        { game: s } =
            ((t = (0, r.bG)([_.A], () => (null == e ? null : (_.A.getGuild(e)?.gameApplicationIds?.[0] ?? null)), [e])),
            (n = null != e ? A[e] : null),
            (a = (0, c.I)(n ?? t)),
            (0, i.useMemo)(() => {
                let { data: e, ...t } = a;
                return { game: e, ...t };
            }, [a])),
        o = null != s && null != h[s.id] ? h[s.id] : s?.getOfficialApplicationId(),
        d = (0, l.YY)(o);
    return (0, i.useMemo)(() => {
        let { data: e, ...t } = d;
        return { application: e, ...t };
    }, [d]);
}
function g(e, t) {
    let n = e.isGameInvitesChannel(),
        s = (0, r.yK)([u.A], () => {
            if (!n) return [];
            let e = new Set(),
                i = [];
            for (let n of t) {
                let t = u.A.getChannel(n)?.ownerId;
                null == t || e.has(t) || (e.add(t), i.push(t));
            }
            return i;
        }, [n, t]),
        l = (0, i.useMemo)(() => (n ? { [e.guild_id]: s } : {}), [s, e.guild_id, n]);
    (0, a.Eq)(l, "GameInvitesChannelPostAuthors");
}
function S(e) {
    return e.type === E.$pd.PLAYING && (0, s.A)(e, E.jUm.JOIN);
}
