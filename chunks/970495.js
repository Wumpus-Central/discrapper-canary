"use strict";
n.d(t, { A: () => x });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(391973),
    l = n(684013),
    u = n(401843),
    c = n(966327),
    d = n(587895),
    _ = n(313961),
    f = n(15285),
    p = n(769015),
    h = n(401901),
    m = n(734057),
    E = n(760751),
    g = n(555528),
    A = n(287809),
    I = n(562153),
    T = n(810412),
    S = n(589051),
    y = n(761661),
    v = n(592598),
    N = n(658198),
    C = n(581730),
    R = n(672396),
    O = n(652215),
    b = n(985018),
    D = n(13217);
function L(e) {
    let { user: t, application: n, runningGame: i } = e;
    return null != n || null != i
        ? (0, r.jsx)("div", {
              className: D.R3,
              children: (0, r.jsx)(a.Qk9, {
                  lowerBadge: (0, r.jsx)("div", {
                      className: D.oM,
                      children:
                          null != n || null != i
                              ? (0, r.jsx)(p.A, { game: n, pid: i?.pid, size: p.M.XXSMALL, className: D.Gt })
                              : null,
                  }),
                  lowerBadgeSize: { width: 16, height: 16 },
                  children: (0, r.jsx)(c.A, { user: t, "aria-hidden": !0, size: a._3J.SIZE_40 }),
              }),
          })
        : (0, r.jsx)(c.A, { user: t, "aria-hidden": !0, size: a._3J.SIZE_40 });
}
function w(e) {
    let { user: t, application: n, runningGame: i, username: o, onWatchClick: l, buttonColor: u } = e;
    return (0, r.jsxs)("div", {
        className: D.kL,
        children: [
            (0, r.jsx)("div", { className: D.H, children: (0, r.jsx)(L, { user: t, application: n, runningGame: i }) }),
            (0, r.jsx)("div", {
                className: s()(D.rf, D.FR),
                children: (0, r.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-text-default",
                    className: D.G3,
                    children: b.intl.format(b.t.vTPX23, { username: o }),
                }),
            }),
            (0, r.jsx)("div", {
                className: D.Xm,
                children: (0, r.jsx)(a.DUT, {
                    onClick: l,
                    className: s()(D.kx, "green" === u && D.Ib, "gray" === u && D.E0),
                    children: (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        tag: "span",
                        children: b.intl.string(b.t["xl+bTG"]),
                    }),
                }),
            }),
        ],
    });
}
function M(e) {
    let { user: t, application: n, runningGame: i, username: o, onWatchClick: l, iconColor: u } = e;
    return (0, r.jsxs)("div", {
        className: D.kL,
        children: [
            (0, r.jsx)("div", { className: D.H, children: (0, r.jsx)(L, { user: t, application: n, runningGame: i }) }),
            (0, r.jsx)("div", {
                className: s()(D.rf, D.FR),
                children: (0, r.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-text-default",
                    className: D.G3,
                    children: b.intl.format(b.t.NmEczg, { username: o }),
                }),
            }),
            (0, r.jsx)("div", { className: D.U4 }),
            (0, r.jsx)("div", {
                className: D.Xm,
                children: (0, r.jsx)(a.DUT, {
                    onClick: l,
                    className: D.zf,
                    children: (0, r.jsx)(N.b, {
                        size: "sm",
                        color: "green" === u ? "white" : a.LU0.colors.INTERACTIVE_TEXT_ACTIVE.css,
                    }),
                }),
            }),
        ],
    });
}
function x(e, t, n) {
    if (v.A.isNotificationDisabled(R.KS.StreamWatchNudge)) return null;
    let i = A.default.getUser(e);
    if (null == i) return null;
    let { designVariant: s } = (0, S.Fg)("OverlayV3StreamWatchNudge"),
        a = n?.application_id,
        c = m.A.getChannel(t),
        p = null != a ? d.A.getApplication(a) : null,
        N = null != a ? E.A.getDetectableGame(a) : null,
        b = null != a ? f.Ay.getRunningGames().find((e) => e.id === a) : null,
        D = b?.name ?? N?.name ?? p?.name,
        L = (0, I.mG)(c?.guild_id, c?.id, i),
        x = () => _.A.getStreamParticipants(t).find((t) => t.user.id === e),
        P = () => {
            G("overlay-watch-stream");
            let [e] = g.A.getWidgetsByType(O.uss.GO_LIVE),
                t = x();
            null != e &&
                null != t &&
                ((0, y.CZ)(t.stream, h.$.COVER),
                (0, u.A9)(t.stream, { forceMultiple: !0, noFocus: !0 }),
                (0, o.v0)(e.id, { forcedPinnedState: !0 }),
                (0, o.dH)(e.id),
                (0, T.YX)(O.uss.GO_LIVE, { type: T.Z5.GO_LIVE, value: T.IP.ACCEPT_REQUEST, userId: t.user.id }));
        },
        k = () => {
            switch (s) {
                case S.wD.GREEN_BUTTON_WITH_TEXT:
                    return (0, r.jsx)(w, {
                        user: i,
                        application: p,
                        runningGame: b,
                        username: L,
                        buttonColor: "green",
                    });
                case S.wD.GRAY_BUTTON_WITH_TEXT:
                    return (0, r.jsx)(w, { user: i, application: p, runningGame: b, username: L, buttonColor: "gray" });
                case S.wD.SINGLE_ICON_BUTTON:
                    return (0, r.jsx)(M, { user: i, application: p, runningGame: b, username: L, iconColor: "white" });
            }
        },
        { trackView: U, trackClick: G } = (0, C.Y9)(R.KS.StreamWatchNudge, {
            notif_type: R.KS.StreamWatchNudge,
            notif_user_id: i.id,
            activity_type: n?.type,
            activity_name: D ?? n?.name,
        });
    return {
        body: k(),
        maxBodyLines: 1,
        onNotificationClick: (e, t) => {
            P(),
                setTimeout(() => {
                    l.A.updateNotificationStatus(t);
                }, 300);
        },
        onNotificationShow: () => {
            U();
        },
        onDismissClick: (e, t) => {
            G("dismiss"), l.A.updateNotificationStatus(t);
        },
    };
}
