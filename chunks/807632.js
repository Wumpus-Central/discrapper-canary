n(321073);
var i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(350835),
    l = n(855986),
    o = n(80682),
    d = n(55730),
    c = n(627363),
    u = n(473503),
    _ = n(691060),
    E = n(454908),
    A = n(826767),
    f = n(474078),
    h = n(734057),
    I = n(652215),
    p = n(746080);
n(253913);
let m = "No Mic";
function T(e) {
    return (0, l.bG)(
        [h.A],
        () =>
            null != e &&
            !!e.isForumPost() &&
            null != e.parent_id &&
            (h.A.getChannel(e.parent_id)?.isGameInvitesChannel() ?? !1),
    );
}
function g(e) {
    return e.size >= 5;
}
n.d(
    t,
    {},
    {
        IO: function (e) {
            let t = (0, _.kt)(e);
            return !!T(e) && !t.some((e) => e.name === m);
        },
        Ij: function (e) {
            return e.type === s.$.PLAYING && (0, d.A)(e, I.jUm.JOIN);
        },
        Qq: function (e, t) {
            let n = (0, i.useMemo)(() => e?.find((e) => e.name === m), [e]),
                r = null == n || !t.has(n.id),
                a = null == n || (g(t) && !t.has(n.id));
            return { noMicTag: n, voiceChatEnabled: r, voiceToggleDisabled: a };
        },
        WP: function (e, t, n) {
            let r = e.isGameInvitesChannel();
            return (0, i.useMemo)(() => {
                if (!r) return { activeThreadIds: t, archivedThreadIds: n };
                let e = Date.now(),
                    i = [],
                    a = [];
                for (let n of t) {
                    let t = h.A.getChannel(n);
                    null != t && !t.hasFlag(p.lx.PINNED) && (0, A.A)(t) <= e ? a.push(n) : i.push(n);
                }
                return { activeThreadIds: i, archivedThreadIds: [...a, ...n] };
            }, [r, t, n]);
        },
        YG: T,
        Zu: function (e) {
            let t = e.trim().split("\n")[0] ?? "";
            return (0, f.A)(t.slice(0, 100), !0);
        },
        _k: function (e) {
            let t = (function (e) {
                    let t = (0, l.bG)([h.A], () => h.A.getChannel(e));
                    a()(null == t || t.isGameInvitesChannel(), "requires a game invites channel");
                    let { data: n } = (0, E.I)(t?.gameId);
                    return n?.getOfficialApplicationId();
                })(e),
                n = (0, c.YY)(t);
            return (0, i.useMemo)(() => {
                let { data: e, ...t } = n;
                return { application: e, ...t };
            }, [n]);
        },
        n5: function (e, t) {
            return (0, u.OA)(e, { enabled: t, allowArchived: !0 });
        },
        t4: g,
        yk: function (e, t) {
            let n = e.isGameInvitesChannel(),
                r = (0, l.yK)(
                    [h.A],
                    () => {
                        if (!n) return [];
                        let e = new Set(),
                            i = [];
                        for (let n of t) {
                            let t = h.A.getChannel(n)?.ownerId;
                            null == t || e.has(t) || (e.add(t), i.push(t));
                        }
                        return i;
                    },
                    [n, t],
                ),
                a = (0, i.useMemo)(() => (n ? { [e.guild_id]: r } : {}), [r, e.guild_id, n]);
            (0, o.Eq)(a, "GameInvitesChannelPostAuthors");
        },
    },
);
