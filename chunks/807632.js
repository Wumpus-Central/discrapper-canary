"use strict";
n.d(t, { Dg: () => I, IO: () => p, Ij: () => S, WP: () => N, YG: () => f, _k: () => m, n5: () => T, yk: () => g }),
    n(321073);
var i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(17928),
    l = n(80682),
    o = n(55730),
    d = n(627363),
    c = n(473503),
    u = n(691060),
    _ = n(569926),
    E = n(826767),
    A = n(734057),
    h = n(652215);
let I = "No Mic";
function f(e) {
    return (0, s.bG)(
        [A.A],
        () =>
            null != e &&
            !!e.isForumPost() &&
            null != e.parent_id &&
            (A.A.getChannel(e.parent_id)?.isGameInvitesChannel() ?? !1),
    );
}
function p(e) {
    let t = (0, u.kt)(e);
    return !!f(e) && !t.some((e) => e.name === I);
}
function T(e, t) {
    return (0, c.OA)(e, { enabled: t, allowArchived: !0 });
}
function m(e) {
    let t = (function (e) {
            let t = (0, s.bG)([A.A], () => A.A.getChannel(e));
            a()(null == t || t.isGameInvitesChannel(), "requires a game invites channel");
            let { data: n } = (0, _.I)(t?.gameId);
            return n?.getOfficialApplicationId();
        })(e),
        n = (0, d.YY)(t);
    return (0, i.useMemo)(() => {
        let { data: e, ...t } = n;
        return { application: e, ...t };
    }, [n]);
}
function g(e, t) {
    let n = e.isGameInvitesChannel(),
        r = (0, s.yK)([A.A], () => {
            if (!n) return [];
            let e = new Set(),
                i = [];
            for (let n of t) {
                let t = A.A.getChannel(n)?.ownerId;
                null == t || e.has(t) || (e.add(t), i.push(t));
            }
            return i;
        }, [n, t]),
        a = (0, i.useMemo)(() => (n ? { [e.guild_id]: r } : {}), [r, e.guild_id, n]);
    (0, l.Eq)(a, "GameInvitesChannelPostAuthors");
}
function S(e) {
    return e.type === h.$pd.PLAYING && (0, o.A)(e, h.jUm.JOIN);
}
function N(e, t, n) {
    let r = e.isGameInvitesChannel();
    return (0, i.useMemo)(() => {
        if (!r) return { activeThreadIds: t, archivedThreadIds: n };
        let e = Date.now(),
            i = [],
            a = [];
        for (let n of t) {
            let t = A.A.getChannel(n);
            null != t && (0, E.A)(t) <= e ? a.push(n) : i.push(n);
        }
        return { activeThreadIds: i, archivedThreadIds: [...a, ...n] };
    }, [r, t, n]);
}
