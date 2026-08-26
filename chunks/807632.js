"use strict";
n.d(t, {
    Dg: () => f,
    IO: () => g,
    Ij: () => O,
    Qq: () => L,
    WP: () => y,
    YG: () => m,
    YS: () => p,
    Zu: () => T,
    _k: () => N,
    n5: () => S,
    t4: () => R,
    yk: () => C,
}),
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
    A = n(474078),
    h = n(734057),
    I = n(652215);
n(253913);
let f = "No Mic",
    p = 120;
function T(e) {
    let t = e.trim().split("\n")[0] ?? "";
    return (0, A.A)(t.slice(0, I.Ign), !0);
}
function m(e) {
    return (0, s.bG)(
        [h.A],
        () =>
            null != e &&
            !!e.isForumPost() &&
            null != e.parent_id &&
            (h.A.getChannel(e.parent_id)?.isGameInvitesChannel() ?? !1),
    );
}
function g(e) {
    let t = (0, u.kt)(e);
    return !!m(e) && !t.some((e) => e.name === f);
}
function S(e, t) {
    return (0, c.OA)(e, { enabled: t, allowArchived: !0 });
}
function N(e) {
    let t = (function (e) {
            let t = (0, s.bG)([h.A], () => h.A.getChannel(e));
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
function C(e, t) {
    let n = e.isGameInvitesChannel(),
        r = (0, s.yK)([h.A], () => {
            if (!n) return [];
            let e = new Set(),
                i = [];
            for (let n of t) {
                let t = h.A.getChannel(n)?.ownerId;
                null == t || e.has(t) || (e.add(t), i.push(t));
            }
            return i;
        }, [n, t]),
        a = (0, i.useMemo)(() => (n ? { [e.guild_id]: r } : {}), [r, e.guild_id, n]);
    (0, l.Eq)(a, "GameInvitesChannelPostAuthors");
}
function O(e) {
    return e.type === I.$pd.PLAYING && (0, o.A)(e, I.jUm.JOIN);
}
function R(e) {
    return e.size >= 5;
}
function L(e, t) {
    let n = (0, i.useMemo)(() => e?.find((e) => e.name === f), [e]),
        r = null == n || !t.has(n.id),
        a = null == n || (R(t) && !t.has(n.id));
    return { noMicTag: n, voiceChatEnabled: r, voiceToggleDisabled: a };
}
function y(e, t, n) {
    let r = e.isGameInvitesChannel();
    return (0, i.useMemo)(() => {
        if (!r) return { activeThreadIds: t, archivedThreadIds: n };
        let e = Date.now(),
            i = [],
            a = [];
        for (let n of t) {
            let t = h.A.getChannel(n);
            null != t && (0, E.A)(t) <= e ? a.push(n) : i.push(n);
        }
        return { activeThreadIds: i, archivedThreadIds: [...a, ...n] };
    }, [r, t, n]);
}
