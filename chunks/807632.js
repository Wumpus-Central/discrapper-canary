(n.d(t, {
    Dg: () => T,
    IO: () => N,
    Ij: () => L,
    Qq: () => D,
    WP: () => v,
    YG: () => S,
    YS: () => m,
    Zu: () => g,
    _k: () => O,
    n5: () => C,
    t4: () => y,
    yk: () => R,
}),
    n(321073));
var i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(350835),
    l = n(17928),
    o = n(80682),
    d = n(55730),
    c = n(627363),
    u = n(473503),
    _ = n(691060),
    E = n(454908),
    A = n(826767),
    h = n(474078),
    f = n(734057),
    I = n(652215),
    p = n(746080);
n(253913);
let T = "No Mic",
    m = 120;
function g(e) {
    let t = e.trim().split("\n")[0] ?? "";
    return (0, h.A)(t.slice(0, I.Ign), !0);
}
function S(e) {
    return (0, l.bG)(
        [f.A],
        () =>
            null != e &&
            !!e.isForumPost() &&
            null != e.parent_id &&
            (f.A.getChannel(e.parent_id)?.isGameInvitesChannel() ?? !1),
    );
}
function N(e) {
    let t = (0, _.kt)(e);
    return !!S(e) && !t.some((e) => e.name === T);
}
function C(e, t) {
    return (0, u.OA)(e, { enabled: t, allowArchived: !0 });
}
function O(e) {
    let t = (function (e) {
            let t = (0, l.bG)([f.A], () => f.A.getChannel(e));
            a()(null == t || t.isGameInvitesChannel(), "requires a game invites channel");
            let { data: n } = (0, E.I)(t?.gameId);
            return n?.getOfficialApplicationId();
        })(e),
        n = (0, c.YY)(t);
    return (0, i.useMemo)(() => {
        let { data: e, ...t } = n;
        return { application: e, ...t };
    }, [n]);
}
function R(e, t) {
    let n = e.isGameInvitesChannel(),
        r = (0, l.yK)(
            [f.A],
            () => {
                if (!n) return [];
                let e = new Set(),
                    i = [];
                for (let n of t) {
                    let t = f.A.getChannel(n)?.ownerId;
                    null == t || e.has(t) || (e.add(t), i.push(t));
                }
                return i;
            },
            [n, t],
        ),
        a = (0, i.useMemo)(() => (n ? { [e.guild_id]: r } : {}), [r, e.guild_id, n]);
    (0, o.Eq)(a, "GameInvitesChannelPostAuthors");
}
function L(e) {
    return e.type === s.$.PLAYING && (0, d.A)(e, I.jUm.JOIN);
}
function y(e) {
    return e.size >= 5;
}
function D(e, t) {
    let n = (0, i.useMemo)(() => e?.find((e) => e.name === T), [e]),
        r = null == n || !t.has(n.id),
        a = null == n || (y(t) && !t.has(n.id));
    return { noMicTag: n, voiceChatEnabled: r, voiceToggleDisabled: a };
}
function v(e, t, n) {
    let r = e.isGameInvitesChannel();
    return (0, i.useMemo)(() => {
        if (!r) return { activeThreadIds: t, archivedThreadIds: n };
        let e = Date.now(),
            i = [],
            a = [];
        for (let n of t) {
            let t = f.A.getChannel(n);
            null != t && !t.hasFlag(p.lx.PINNED) && (0, A.A)(t) <= e ? a.push(n) : i.push(n);
        }
        return { activeThreadIds: i, archivedThreadIds: [...a, ...n] };
    }, [r, t, n]);
}
