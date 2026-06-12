t.d(e, { default: () => x }), t(667532);
var n = t(627968),
    s = t(64700),
    l = t(628284),
    a = t(885574),
    d = t(778712),
    _ = t(308528),
    r = t(954376),
    c = t(734057),
    o = t(174459),
    u = t(105600),
    g = t(212758),
    h = t(90386),
    m = t(64175),
    N = t(652215),
    A = t(375708),
    E = t(131678);
function x(i) {
    var e, t;
    let x,
        k,
        { channelId: f, blockedUserIds: D, ignoredUserIds: M = [], transitionState: T, onClose: C } = i;
    return (
        s.useEffect(() => {
            o.default.track(N.HAw.GDM_BLOCKED_USER_WARNING_VIEWED, {
                channel_id: f,
                warning_medium: m.W_.MODAL,
                blocked_user_ids: D,
                ignored_user_ids: M,
            });
        }, [f, D, M]),
        (0, n.jsx)(g.A, {
            headerText: A.intl.string(A.t["mwJJ+f"]),
            descriptionText:
                ((e = D.length),
                (t = M.length),
                (x = e > 0),
                (k = t > 0),
                x && k
                    ? A.intl.string(A.t["0dP7Fk"])
                    : x
                      ? A.intl.formatToPlainString(A.t.OpIG9d, { n: e })
                      : k
                        ? A.intl.formatToPlainString(A.t["D+V4jI"], { n: t })
                        : null),
            infoRows: ((i) => {
                let { channelId: e, blockedUserIds: t, ignoredUserIds: s } = i,
                    _ = c.A.getChannel(e),
                    o = t.length > 0,
                    u = s.length > 0,
                    g = [
                        {
                            icon: (0, n.jsx)("div", { className: E.Kk, children: (0, n.jsx)(l.y, {}) }),
                            text: A.intl.string(A.t.RIMw54),
                            className: E.nM,
                        },
                        {
                            icon: (0, n.jsx)("div", { className: E.Kk, children: (0, n.jsx)(a.m, {}) }),
                            text: A.intl.string(A.t.bejNWN),
                            className: E.nM,
                        },
                    ];
                if (o && u) {
                    let i = [...t, ...s],
                        l = i.slice(0, 2);
                    g.unshift({
                        icon: (0, n.jsx)("div", {
                            className: E.Kk,
                            children: (0, n.jsx)(r.A, { recipients: l, size: d._3.SIZE_32 }),
                        }),
                        text: (0, h.T)(l, i.length, _?.guild_id, e),
                        className: E.nM,
                    });
                } else {
                    let i = o ? [...t].slice(0, 2) : [...s].slice(0, 2),
                        l = o ? t.length : s.length;
                    g.unshift({
                        icon: (0, n.jsx)("div", { className: E.Kk, children: (0, h.I)(i, _?.guild_id) }),
                        text: (0, h.T)(i, l, _?.guild_id, e),
                        className: E.nM,
                    });
                }
                return g;
            })({ channelId: f, blockedUserIds: D, ignoredUserIds: M }),
            onDismissAndStay: () => {
                C(),
                    (0, u.U)(f),
                    o.default.track(N.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: m.Qi.CLICK_TO_STAY,
                        channel_id: f,
                        warning_medium: m.W_.MODAL,
                        blocked_user_ids: D,
                        ignored_user_ids: M,
                    });
            },
            onDismissAndLeave: () => {
                C(),
                    (0, u.U)(f),
                    _.A.closePrivateChannel(f, !0, !0),
                    o.default.track(N.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: m.Qi.CLICK_TO_LEAVE,
                        channel_id: f,
                        warning_medium: m.W_.MODAL,
                        blocked_user_ids: D,
                        ignored_user_ids: M,
                    });
            },
            leaveButtonText: A.intl.string(A.t["Hi1/aQ"]),
            stayButtonText: A.intl.string(A.t.SW3lpH),
            transitionState: T,
            onClose: C,
        })
    );
}
