n.d(t, {
    default: () => f,
}),
    n(896048),
    n(667532);
var i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(308528),
    r = n(954376),
    d = n(734057),
    o = n(954571),
    c = n(105600),
    u = n(212758),
    _ = n(90386),
    m = n(64175),
    h = n(652215),
    g = n(985018),
    x = n(441805);

function f(e) {
    var t, n;
    let f,
        k,
        { channelId: N, blockedUserIds: A, ignoredUserIds: v = [], transitionState: j, onClose: E } = e;
    return (
        s.useEffect(() => {
            o.default.track(h.HAw.GDM_BLOCKED_USER_WARNING_VIEWED, {
                channel_id: N,
                warning_medium: m.W_.MODAL,
                blocked_user_ids: A,
                ignored_user_ids: v,
            });
        }, [N, A, v]),
        (0, i.jsx)(u.A, {
            headerText: g.intl.string(g.t["mwJJ+f"]),
            descriptionText:
                ((t = A.length),
                (n = v.length),
                (f = t > 0),
                (k = n > 0),
                f && k
                    ? g.intl.string(g.t["0dP7Fk"])
                    : f
                      ? g.intl.formatToPlainString(g.t.OpIG9d, {
                            n: t,
                        })
                      : k
                        ? g.intl.formatToPlainString(g.t["D+V4jI"], {
                              n: n,
                          })
                        : null),
            infoRows: ((e) => {
                let { channelId: t, blockedUserIds: n, ignoredUserIds: s } = e,
                    l = d.A.getChannel(t),
                    o = n.length > 0,
                    c = s.length > 0,
                    u = [
                        {
                            icon: (0, i.jsx)("div", {
                                className: x.Kk,
                                children: (0, i.jsx)(a.yr3, {}),
                            }),
                            text: g.intl.string(g.t.RIMw54),
                            className: x.nM,
                        },
                        {
                            icon: (0, i.jsx)("div", {
                                className: x.Kk,
                                children: (0, i.jsx)(a.mir, {}),
                            }),
                            text: g.intl.string(g.t.bejNWN),
                            className: x.nM,
                        },
                    ];
                if (o && c) {
                    let e = [...n, ...s],
                        d = e.slice(0, 2);
                    u.unshift({
                        icon: (0, i.jsx)("div", {
                            className: x.Kk,
                            children: (0, i.jsx)(r.A, {
                                recipients: d,
                                size: a._3J.SIZE_32,
                            }),
                        }),
                        text: (0, _.T)(d, e.length, null == l ? void 0 : l.guild_id, t),
                        className: x.nM,
                    });
                } else {
                    let e = o ? [...n].slice(0, 2) : [...s].slice(0, 2),
                        a = o ? n.length : s.length;
                    u.unshift({
                        icon: (0, i.jsx)("div", {
                            className: x.Kk,
                            children: (0, _.I)(e, null == l ? void 0 : l.guild_id),
                        }),
                        text: (0, _.T)(e, a, null == l ? void 0 : l.guild_id, t),
                        className: x.nM,
                    });
                }
                return u;
            })({
                channelId: N,
                blockedUserIds: A,
                ignoredUserIds: v,
            }),
            onDismissAndStay: () => {
                E(),
                    (0, c.U)(N),
                    o.default.track(h.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: m.Qi.CLICK_TO_STAY,
                        channel_id: N,
                        warning_medium: m.W_.MODAL,
                        blocked_user_ids: A,
                        ignored_user_ids: v,
                    });
            },
            onDismissAndLeave: () => {
                E(),
                    (0, c.U)(N),
                    l.A.closePrivateChannel(N, !0, !0),
                    o.default.track(h.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: m.Qi.CLICK_TO_LEAVE,
                        channel_id: N,
                        warning_medium: m.W_.MODAL,
                        blocked_user_ids: A,
                        ignored_user_ids: v,
                    });
            },
            leaveButtonText: g.intl.string(g.t["Hi1/aQ"]),
            stayButtonText: g.intl.string(g.t.SW3lpH),
            transitionState: j,
            onClose: E,
        })
    );
}
