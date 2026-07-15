"use strict";
n.d(t, { Dg: () => A, IO: () => I, Ij: () => m, YG: () => h, _k: () => p, n5: () => f, yk: () => T }), n(321073);
var i = n(64700),
    r = n(17928),
    a = n(80682),
    s = n(55730),
    l = n(627363),
    o = n(473503),
    d = n(691060),
    c = n(734057),
    u = n(71393),
    _ = n(652215);
let E = { "1509696536903417891": "1373923512766697512" },
    A = "No Mic";
function h(e) {
    return (0, r.bG)(
        [c.A],
        () =>
            null != e &&
            !!e.isForumPost() &&
            null != e.parent_id &&
            (c.A.getChannel(e.parent_id)?.isGameInvitesChannel() ?? !1),
    );
}
function I(e) {
    let t = (0, d.kt)(e);
    return !!h(e) && !t.some((e) => e.name === A);
}
function f(e, t) {
    return (0, o.OA)(e, { enabled: t, allowArchived: !0 });
}
function p(e) {
    let t,
        n =
            ((t = (0, r.bG)([u.A], () => (null == e ? null : (u.A.getGuild(e)?.gameApplicationIds?.[0] ?? null)), [e])),
            (null != e ? E[e] : null) ?? t),
        a = (0, l.YY)(n);
    return (0, i.useMemo)(() => {
        let { data: e, ...t } = a;
        return { application: e, ...t };
    }, [a]);
}
function T(e, t) {
    let n = e.isGameInvitesChannel(),
        s = (0, r.yK)([c.A], () => {
            if (!n) return [];
            let e = new Set(),
                i = [];
            for (let n of t) {
                let t = c.A.getChannel(n)?.ownerId;
                null == t || e.has(t) || (e.add(t), i.push(t));
            }
            return i;
        }, [n, t]),
        l = (0, i.useMemo)(() => (n ? { [e.guild_id]: s } : {}), [s, e.guild_id, n]);
    (0, a.Eq)(l, "GameInvitesChannelPostAuthors");
}
function m(e) {
    return e.type === _.$pd.PLAYING && (0, s.A)(e, _.jUm.JOIN);
}
