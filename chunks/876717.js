n.d(_, { default: () => x }), n(667532);
var t = n(627968),
    i = n(64700),
    s = n(628284),
    a = n(885574),
    c = n(778712),
    l = n(308528),
    r = n(954376),
    d = n(734057),
    o = n(954571),
    u = n(105600),
    g = n(212758),
    m = n(90386),
    h = n(64175),
    p = n(652215),
    M = n(985018),
    f = n(131678);
function x(e) {
    var _, n;
    let x,
        A,
        { channelId: N, blockedUserIds: C, ignoredUserIds: k = [], transitionState: E, onClose: w } = e;
    return (
        i.useEffect(() => {
            o.default.track(p.HAw.GDM_BLOCKED_USER_WARNING_VIEWED, {
                channel_id: N,
                warning_medium: h.W_.MODAL,
                blocked_user_ids: C,
                ignored_user_ids: k,
            });
        }, [N, C, k]),
        (0, t.jsx)(g.A, {
            headerText: M.intl.string(M.t["mwJJ+f"]),
            descriptionText:
                ((_ = C.length),
                (n = k.length),
                (x = _ > 0),
                (A = n > 0),
                x && A
                    ? M.intl.string(M.t["0dP7Fk"])
                    : x
                      ? M.intl.formatToPlainString(M.t.OpIG9d, { n: _ })
                      : A
                        ? M.intl.formatToPlainString(M.t["D+V4jI"], { n: n })
                        : null),
            infoRows: ((e) => {
                let { channelId: _, blockedUserIds: n, ignoredUserIds: i } = e,
                    l = d.A.getChannel(_),
                    o = n.length > 0,
                    u = i.length > 0,
                    g = [
                        {
                            icon: (0, t.jsx)("div", { className: f.Kk, children: (0, t.jsx)(s.y, {}) }),
                            text: M.intl.string(M.t.RIMw54),
                            className: f.nM,
                        },
                        {
                            icon: (0, t.jsx)("div", { className: f.Kk, children: (0, t.jsx)(a.m, {}) }),
                            text: M.intl.string(M.t.bejNWN),
                            className: f.nM,
                        },
                    ];
                if (o && u) {
                    let e = [...n, ...i],
                        s = e.slice(0, 2);
                    g.unshift({
                        icon: (0, t.jsx)("div", {
                            className: f.Kk,
                            children: (0, t.jsx)(r.A, { recipients: s, size: c._3.SIZE_32 }),
                        }),
                        text: (0, m.T)(s, e.length, l?.guild_id, _),
                        className: f.nM,
                    });
                } else {
                    let e = o ? [...n].slice(0, 2) : [...i].slice(0, 2),
                        s = o ? n.length : i.length;
                    g.unshift({
                        icon: (0, t.jsx)("div", { className: f.Kk, children: (0, m.I)(e, l?.guild_id) }),
                        text: (0, m.T)(e, s, l?.guild_id, _),
                        className: f.nM,
                    });
                }
                return g;
            })({ channelId: N, blockedUserIds: C, ignoredUserIds: k }),
            onDismissAndStay: () => {
                w(),
                    (0, u.U)(N),
                    o.default.track(p.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: h.Qi.CLICK_TO_STAY,
                        channel_id: N,
                        warning_medium: h.W_.MODAL,
                        blocked_user_ids: C,
                        ignored_user_ids: k,
                    });
            },
            onDismissAndLeave: () => {
                w(),
                    (0, u.U)(N),
                    l.A.closePrivateChannel(N, !0, !0),
                    o.default.track(p.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: h.Qi.CLICK_TO_LEAVE,
                        channel_id: N,
                        warning_medium: h.W_.MODAL,
                        blocked_user_ids: C,
                        ignored_user_ids: k,
                    });
            },
            leaveButtonText: M.intl.string(M.t["Hi1/aQ"]),
            stayButtonText: M.intl.string(M.t.SW3lpH),
            transitionState: E,
            onClose: w,
        })
    );
}
