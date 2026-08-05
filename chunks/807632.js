"use strict";
n.d(t, { Dg: () => h, IO: () => f, Ij: () => g, WP: () => S, YG: () => I, _k: () => T, n5: () => p, yk: () => m }),
    n(321073);
var i = n(582128),
    r = n(17928),
    a = n(80682),
    s = n(55730),
    l = n(627363),
    o = n(473503),
    d = n(691060),
    c = n(826767),
    u = n(734057),
    _ = n(71393),
    E = n(652215);
let A = { "1509696536903417891": "1373923512766697512" },
    h = "No Mic";
function I(e) {
    return (0, r.bG)(
        [u.A],
        () =>
            null != e &&
            !!e.isForumPost() &&
            null != e.parent_id &&
            (u.A.getChannel(e.parent_id)?.isGameInvitesChannel() ?? !1),
    );
}
function f(e) {
    let t = (0, d.kt)(e);
    return !!I(e) && !t.some((e) => e.name === h);
}
function p(e, t) {
    return (0, o.OA)(e, { enabled: t, allowArchived: !0 });
}
function T(e) {
    let t,
        n =
            ((t = (0, r.bG)([_.A], () => (null == e ? null : (_.A.getGuild(e)?.gameApplicationIds?.[0] ?? null)), [e])),
            (null != e ? A[e] : null) ?? t),
        a = (0, l.YY)(n);
    return (0, i.useMemo)(() => {
        let { data: e, ...t } = a;
        return { application: e, ...t };
    }, [a]);
}
function m(e, t) {
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
function g(e) {
    return e.type === E.$pd.PLAYING && (0, s.A)(e, E.jUm.JOIN);
}
function S(e, t, n) {
    let r = e.isGameInvitesChannel();
    return (0, i.useMemo)(() => {
        if (!r) return { activeThreadIds: t, archivedThreadIds: n };
        let e = Date.now(),
            i = [],
            a = [];
        for (let n of t) {
            let t = u.A.getChannel(n);
            null != t && (0, c.A)(t) <= e ? a.push(n) : i.push(n);
        }
        return { activeThreadIds: i, archivedThreadIds: [...a, ...n] };
    }, [r, t, n]);
}
