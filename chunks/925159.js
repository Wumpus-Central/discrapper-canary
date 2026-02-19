"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(397927),
    s = n(684013),
    a = n(966327),
    o = n(587895),
    l = n(15285),
    u = n(769015),
    c = n(734057),
    d = n(309010),
    _ = n(287809),
    f = n(562153),
    p = n(41984),
    h = n(589051),
    m = n(592598),
    E = n(395011),
    g = n(222506),
    A = n(145567),
    I = n(581730),
    T = n(672396),
    S = n(652215),
    y = n(985018),
    v = n(976723);
function N(e, t, n) {
    if (m.A.isNotificationDisabled(T.KS.NowPlayingNotification)) return null;
    let N = _.default.getUser(e);
    if (null == N) return null;
    let C = d.A.getCurrentlySelectedChannelId(),
        b = c.A.getChannel(C),
        R = o.A.getApplication(t),
        O = l.Ay.getRunningGames().find((e) => e.id === t),
        D = O?.name ?? R?.name ?? n.name,
        L = (0, f.mG)(b?.guild_id, b?.id, N);
    if (null == D || 0 === D.trim().length) return null;
    let w = (0, r.jsxs)("div", {
            className: v.Ql,
            children: [
                (0, r.jsx)("div", {
                    className: v.bf,
                    children: (0, r.jsx)(a.A, { user: N, "aria-hidden": !0, size: i._3J.SIZE_24 }),
                }),
                (0, r.jsx)("div", {
                    className: v.rf,
                    children: (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "interactive-text-default",
                        className: v.G3,
                        children: y.intl.format(y.t["q7/rgv"], {
                            username: L ?? N.username,
                            gameName: D,
                            gameIcon: () =>
                                null != R || null != O
                                    ? (0, r.jsx)(u.A, { game: R, pid: O?.pid, size: u.M.XSMALL, className: v.Gt })
                                    : null,
                        }),
                    }),
                }),
            ],
        }),
        { trackView: x, trackClick: M } = (0, I.Y9)(T.KS.NowPlayingNotification, {
            notif_type: T.KS.NowPlayingNotification,
            notif_user_id: N.id,
            activity_type: n.type,
            activity_name: D,
        }),
        { hasChat: P } = (0, h.NI)("nowPlayingNotification");
    return {
        body: w,
        className: v.dn,
        wrapperClassName: v.P6,
        animationWrapperClassName: v.VG,
        clickZoneClassName: v.EO,
        maxBodyLines: 1,
        disableClickableRegions: !P,
        onNotificationShow: () => {
            x();
        },
        onNotificationClick: (e, t) => {
            P &&
                (async () => {
                    try {
                        await (0, A.D$)({
                            target: { kind: A.bB.DM_USER, userId: N.id, messageId: null },
                            source: p.B9.NOTIFICATION_CLICK,
                            widgetType: S.uss.NOTIFICATIONS,
                        });
                        let e = E.A.getTargetPID();
                        g.A.isInputLocked(e) ? (M("unlock"), s.A.setInputLocked(!1, e)) : M("jump"),
                            s.A.updateNotificationStatus(t, S.yFH.DISMISSED);
                    } catch {}
                })();
        },
        onDismissClick: () => {
            M("dismiss");
        },
    };
}
