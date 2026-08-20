t.d(i, { default: () => E }), t(667532);
var e = t(477900),
    s = t(582128),
    l = t(628284),
    a = t(885574),
    d = t(778712),
    c = t(308528),
    r = t(954376),
    _ = t(734057),
    o = t(174459),
    u = t(105600),
    g = t(212758),
    h = t(90386),
    m = t(64175),
    N = t(652215),
    A = t(375708),
    f = t(102931);
function E(n) {
    var i, t;
    let E,
        x,
        { channelId: k, blockedUserIds: C, ignoredUserIds: D = [], transitionState: I, onClose: M } = n;
    return (
        s.useEffect(() => {
            o.default.track(N.HAw.GDM_BLOCKED_USER_WARNING_VIEWED, {
                channel_id: k,
                warning_medium: m.W_.MODAL,
                blocked_user_ids: C,
                ignored_user_ids: D,
            });
        }, [k, C, D]),
        (0, e.jsx)(g.A, {
            headerText: A.intl.string(A.t["mwJJ+f"]),
            descriptionText:
                ((i = C.length),
                (t = D.length),
                (E = i > 0),
                (x = t > 0),
                E && x
                    ? A.intl.string(A.t["0dP7Fk"])
                    : E
                      ? A.intl.formatToPlainString(A.t.OpIG9d, { n: i })
                      : x
                        ? A.intl.formatToPlainString(A.t["D+V4jI"], { n: t })
                        : null),
            infoRows: (function (n) {
                let { channelId: i, blockedUserIds: t, ignoredUserIds: s } = n,
                    c = _.A.getChannel(i),
                    o = t.length > 0,
                    u = s.length > 0,
                    g = [
                        {
                            icon: (0, e.jsx)("div", { className: f.Kk, children: (0, e.jsx)(l.y, {}) }),
                            text: A.intl.string(A.t.RIMw54),
                            className: f.nM,
                        },
                        {
                            icon: (0, e.jsx)("div", {
                                className: f.Kk,
                                children: (0, e.jsx)(a.CircleInformationIcon, {}),
                            }),
                            text: A.intl.string(A.t.bejNWN),
                            className: f.nM,
                        },
                    ];
                if (o && u) {
                    let n = [...t, ...s],
                        l = n.slice(0, 2);
                    g.unshift({
                        icon: (0, e.jsx)("div", {
                            className: f.Kk,
                            children: (0, e.jsx)(r.A, { recipients: l, size: d._3.SIZE_32 }),
                        }),
                        text: (0, h.T)(l, n.length, c?.guild_id, i),
                        className: f.nM,
                    });
                } else {
                    let n = o ? [...t].slice(0, 2) : [...s].slice(0, 2),
                        l = o ? t.length : s.length;
                    g.unshift({
                        icon: (0, e.jsx)("div", { className: f.Kk, children: (0, h.I)(n, c?.guild_id) }),
                        text: (0, h.T)(n, l, c?.guild_id, i),
                        className: f.nM,
                    });
                }
                return g;
            })({ channelId: k, blockedUserIds: C, ignoredUserIds: D }),
            onDismissAndStay: function () {
                M(),
                    (0, u.U)(k),
                    o.default.track(N.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: m.Qi.CLICK_TO_STAY,
                        channel_id: k,
                        warning_medium: m.W_.MODAL,
                        blocked_user_ids: C,
                        ignored_user_ids: D,
                    });
            },
            onDismissAndLeave: function () {
                M(),
                    (0, u.U)(k),
                    c.A.closePrivateChannel(k, !0, !0),
                    o.default.track(N.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: m.Qi.CLICK_TO_LEAVE,
                        channel_id: k,
                        warning_medium: m.W_.MODAL,
                        blocked_user_ids: C,
                        ignored_user_ids: D,
                    });
            },
            leaveButtonText: A.intl.string(A.t["Hi1/aQ"]),
            stayButtonText: A.intl.string(A.t.SW3lpH),
            transitionState: I,
            onClose: M,
        })
    );
}
