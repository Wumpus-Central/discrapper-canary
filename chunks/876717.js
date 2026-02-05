s.d(e, { default: () => L }), s(667532);
var i = s(627968),
    a = s(64700),
    _ = s(397927),
    n = s(308528),
    A = s(954376),
    l = s(734057),
    r = s(954571),
    I = s(105600),
    d = s(212758),
    E = s(90386),
    h = s(64175),
    o = s(652215),
    u = s(985018),
    c = s(441805);
function L(t) {
    var e, s;
    let L,
        N,
        { channelId: C, blockedUserIds: g, ignoredUserIds: G = [], transitionState: m, onClose: P } = t;
    return (
        a.useEffect(() => {
            r.default.track(o.HAw.GDM_BLOCKED_USER_WARNING_VIEWED, {
                channel_id: C,
                warning_medium: h.W_.MODAL,
                blocked_user_ids: g,
                ignored_user_ids: G,
            });
        }, [C, g, G]),
        (0, i.jsx)(d.A, {
            headerText: u.intl.string(u.t["mwJJ+f"]),
            descriptionText:
                ((e = g.length),
                (s = G.length),
                (L = e > 0),
                (N = s > 0),
                L && N
                    ? u.intl.string(u.t["0dP7Fk"])
                    : L
                      ? u.intl.formatToPlainString(u.t.OpIG9d, { n: e })
                      : N
                        ? u.intl.formatToPlainString(u.t["D+V4jI"], { n: s })
                        : null),
            infoRows: ((t) => {
                let { channelId: e, blockedUserIds: s, ignoredUserIds: a } = t,
                    n = l.A.getChannel(e),
                    r = s.length > 0,
                    I = a.length > 0,
                    d = [
                        {
                            icon: (0, i.jsx)("div", { className: c.Kk, children: (0, i.jsx)(_.yr3, {}) }),
                            text: u.intl.string(u.t.RIMw54),
                            className: c.nM,
                        },
                        {
                            icon: (0, i.jsx)("div", { className: c.Kk, children: (0, i.jsx)(_.mir, {}) }),
                            text: u.intl.string(u.t.bejNWN),
                            className: c.nM,
                        },
                    ];
                if (r && I) {
                    let t = [...s, ...a],
                        l = t.slice(0, 2);
                    d.unshift({
                        icon: (0, i.jsx)("div", {
                            className: c.Kk,
                            children: (0, i.jsx)(A.A, { recipients: l, size: _._3J.SIZE_32 }),
                        }),
                        text: (0, E.T)(l, t.length, n?.guild_id, e),
                        className: c.nM,
                    });
                } else {
                    let t = r ? [...s].slice(0, 2) : [...a].slice(0, 2),
                        _ = r ? s.length : a.length;
                    d.unshift({
                        icon: (0, i.jsx)("div", { className: c.Kk, children: (0, E.I)(t, n?.guild_id) }),
                        text: (0, E.T)(t, _, n?.guild_id, e),
                        className: c.nM,
                    });
                }
                return d;
            })({ channelId: C, blockedUserIds: g, ignoredUserIds: G }),
            onDismissAndStay: () => {
                P(),
                    (0, I.U)(C),
                    r.default.track(o.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: h.Qi.CLICK_TO_STAY,
                        channel_id: C,
                        warning_medium: h.W_.MODAL,
                        blocked_user_ids: g,
                        ignored_user_ids: G,
                    });
            },
            onDismissAndLeave: () => {
                P(),
                    (0, I.U)(C),
                    n.A.closePrivateChannel(C, !0, !0),
                    r.default.track(o.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: h.Qi.CLICK_TO_LEAVE,
                        channel_id: C,
                        warning_medium: h.W_.MODAL,
                        blocked_user_ids: g,
                        ignored_user_ids: G,
                    });
            },
            leaveButtonText: u.intl.string(u.t["Hi1/aQ"]),
            stayButtonText: u.intl.string(u.t.SW3lpH),
            transitionState: m,
            onClose: P,
        })
    );
}
