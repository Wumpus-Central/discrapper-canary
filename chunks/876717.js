e(667532);
var t = e(477900),
    s = e(582128),
    l = e(628284),
    a = e(885574),
    c = e(778712),
    d = e(308528),
    r = e(954376),
    _ = e(734057),
    o = e(129230),
    u = e(105600),
    g = e(212758),
    h = e(90386),
    m = e(64175),
    N = e(652215),
    A = e(792996),
    f = e(102931);
e.d(
    i,
    {},
    {
        default: function (n) {
            var i, e;
            let E,
                k,
                { channelId: x, blockedUserIds: C, ignoredUserIds: I = [], transitionState: D, onClose: M } = n;
            return (
                s.useEffect(() => {
                    o.default.track(N.HAw.GDM_BLOCKED_USER_WARNING_VIEWED, {
                        channel_id: x,
                        warning_medium: m.W_.MODAL,
                        blocked_user_ids: C,
                        ignored_user_ids: I,
                    });
                }, [x, C, I]),
                (0, t.jsx)(g.A, {
                    headerText: A.intl.string(A.t["mwJJ+f"]),
                    descriptionText:
                        ((i = C.length),
                        (e = I.length),
                        (E = i > 0),
                        (k = e > 0),
                        E && k
                            ? A.intl.string(A.t["0dP7Fk"])
                            : E
                              ? A.intl.formatToPlainString(A.t.OpIG9d, { n: i })
                              : k
                                ? A.intl.formatToPlainString(A.t["D+V4jI"], { n: e })
                                : null),
                    infoRows: (function (n) {
                        let { channelId: i, blockedUserIds: e, ignoredUserIds: s } = n,
                            d = _.A.getChannel(i),
                            o = e.length > 0,
                            u = s.length > 0,
                            g = [
                                {
                                    icon: (0, t.jsx)("div", {
                                        className: f.Kk,
                                        children: (0, t.jsx)(l.CircleCheckIcon, {}),
                                    }),
                                    text: A.intl.string(A.t.RIMw54),
                                    className: f.nM,
                                },
                                {
                                    icon: (0, t.jsx)("div", {
                                        className: f.Kk,
                                        children: (0, t.jsx)(a.CircleInformationIcon, {}),
                                    }),
                                    text: A.intl.string(A.t.bejNWN),
                                    className: f.nM,
                                },
                            ];
                        if (o && u) {
                            let n = [...e, ...s],
                                l = n.slice(0, 2);
                            g.unshift({
                                icon: (0, t.jsx)("div", {
                                    className: f.Kk,
                                    children: (0, t.jsx)(r.A, { recipients: l, size: c._3.SIZE_32 }),
                                }),
                                text: (0, h.T)(l, n.length, d?.guild_id, i),
                                className: f.nM,
                            });
                        } else {
                            let n = o ? [...e].slice(0, 2) : [...s].slice(0, 2),
                                l = o ? e.length : s.length;
                            g.unshift({
                                icon: (0, t.jsx)("div", { className: f.Kk, children: (0, h.I)(n, d?.guild_id) }),
                                text: (0, h.T)(n, l, d?.guild_id, i),
                                className: f.nM,
                            });
                        }
                        return g;
                    })({ channelId: x, blockedUserIds: C, ignoredUserIds: I }),
                    onDismissAndStay: function () {
                        (M(),
                            (0, u.U)(x),
                            o.default.track(N.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                                action: m.Qi.CLICK_TO_STAY,
                                channel_id: x,
                                warning_medium: m.W_.MODAL,
                                blocked_user_ids: C,
                                ignored_user_ids: I,
                            }));
                    },
                    onDismissAndLeave: function () {
                        (M(),
                            (0, u.U)(x),
                            d.A.closePrivateChannel(x, !0, !0),
                            o.default.track(N.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                                action: m.Qi.CLICK_TO_LEAVE,
                                channel_id: x,
                                warning_medium: m.W_.MODAL,
                                blocked_user_ids: C,
                                ignored_user_ids: I,
                            }));
                    },
                    leaveButtonText: A.intl.string(A.t["Hi1/aQ"]),
                    stayButtonText: A.intl.string(A.t.SW3lpH),
                    transitionState: D,
                    onClose: M,
                })
            );
        },
    },
);
