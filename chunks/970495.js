n.d(t, { A: () => D });
var i = n(627968),
    l = n(503698),
    a = n.n(l),
    s = n(397927),
    r = n(391973),
    o = n(684013),
    d = n(401843),
    u = n(966327),
    c = n(587895),
    h = n(313961),
    A = n(15285),
    m = n(769015),
    g = n(401901),
    p = n(734057),
    f = n(760751),
    _ = n(555528),
    E = n(287809),
    x = n(562153),
    S = n(810412),
    I = n(589051),
    T = n(761661),
    C = n(592598),
    y = n(658198),
    v = n(581730),
    N = n(672396),
    O = n(652215),
    j = n(985018),
    b = n(676667);
function w(e) {
    let { user: t, application: n, runningGame: l } = e;
    return null != n || null != l
        ? (0, i.jsx)("div", {
              className: b.R3,
              children: (0, i.jsx)(s.Qk9, {
                  lowerBadge: (0, i.jsx)("div", {
                      className: b.oM,
                      children:
                          null != n || null != l
                              ? (0, i.jsx)(m.A, { game: n, pid: l?.pid, size: m.M.XXSMALL, className: b.Gt })
                              : null,
                  }),
                  lowerBadgeSize: { width: 16, height: 16 },
                  children: (0, i.jsx)(u.A, { user: t, "aria-hidden": !0, size: s._3J.SIZE_40 }),
              }),
          })
        : (0, i.jsx)(u.A, { user: t, "aria-hidden": !0, size: s._3J.SIZE_40 });
}
function L(e) {
    let { user: t, application: n, runningGame: l, username: r, onWatchClick: o, buttonColor: d } = e;
    return (0, i.jsxs)("div", {
        className: b.kL,
        children: [
            (0, i.jsx)("div", { className: b.H, children: (0, i.jsx)(w, { user: t, application: n, runningGame: l }) }),
            (0, i.jsx)("div", {
                className: a()(b.rf, b.FR),
                children: (0, i.jsx)(s.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-text-default",
                    className: b.G3,
                    children: j.intl.format(j.t.vTPX23, { username: r }),
                }),
            }),
            (0, i.jsx)("div", {
                className: b.Xm,
                children: (0, i.jsx)(s.DUT, {
                    onClick: o,
                    className: a()(b.kx, "green" === d && b.Ib, "gray" === d && b.E0),
                    children: (0, i.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        tag: "span",
                        children: j.intl.string(j.t["xl+bTG"]),
                    }),
                }),
            }),
        ],
    });
}
function R(e) {
    let { user: t, application: n, runningGame: l, username: r, onWatchClick: o, iconColor: d } = e;
    return (0, i.jsxs)("div", {
        className: b.kL,
        children: [
            (0, i.jsx)("div", { className: b.H, children: (0, i.jsx)(w, { user: t, application: n, runningGame: l }) }),
            (0, i.jsx)("div", {
                className: a()(b.rf, b.FR),
                children: (0, i.jsx)(s.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-text-default",
                    className: b.G3,
                    children: j.intl.format(j.t.NmEczg, { username: r }),
                }),
            }),
            (0, i.jsx)("div", { className: b.U4 }),
            (0, i.jsx)("div", {
                className: b.Xm,
                children: (0, i.jsx)(s.DUT, {
                    onClick: o,
                    className: b.zf,
                    children: (0, i.jsx)(y.b, {
                        size: "sm",
                        color: "green" === d ? "white" : s.LU0.colors.INTERACTIVE_TEXT_ACTIVE.css,
                    }),
                }),
            }),
        ],
    });
}
function D(e, t, n) {
    if (C.A.isNotificationDisabled(N.KS.StreamWatchNudge)) return null;
    let l = E.default.getUser(e);
    if (null == l) return null;
    let { designVariant: a } = (0, I.Fg)("OverlayV3StreamWatchNudge"),
        s = n?.application_id,
        u = p.A.getChannel(t),
        m = null != s ? c.A.getApplication(s) : null,
        y = null != s ? f.A.getDetectableGame(s) : null,
        j = null != s ? A.Ay.getRunningGames().find((e) => e.id === s) : null,
        b = j?.name ?? y?.name ?? m?.name,
        w = (0, x.mG)(u?.guild_id, u?.id, l),
        { trackView: D, trackClick: M } = (0, v.Y9)(N.KS.StreamWatchNudge, {
            notif_type: N.KS.StreamWatchNudge,
            notif_user_id: l.id,
            activity_type: n?.type,
            activity_name: b ?? n?.name,
        });
    return {
        body: (() => {
            switch (a) {
                case I.wD.GREEN_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(L, {
                        user: l,
                        application: m,
                        runningGame: j,
                        username: w,
                        buttonColor: "green",
                    });
                case I.wD.GRAY_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(L, { user: l, application: m, runningGame: j, username: w, buttonColor: "gray" });
                case I.wD.SINGLE_ICON_BUTTON:
                    return (0, i.jsx)(R, { user: l, application: m, runningGame: j, username: w, iconColor: "white" });
            }
        })(),
        maxBodyLines: 1,
        onNotificationClick: (n, i) => {
            (() => {
                M("overlay-watch-stream");
                let [n] = _.A.getWidgetsByType(O.uss.GO_LIVE),
                    i = h.A.getStreamParticipants(t).find((t) => t.user.id === e);
                null != n &&
                    null != i &&
                    ((0, T.CZ)(i.stream, g.$.COVER),
                    (0, d.A9)(i.stream, { forceMultiple: !0, noFocus: !0 }),
                    (0, r.v0)(n.id, { forcedPinnedState: !0 }),
                    (0, r.dH)(n.id),
                    (0, S.YX)(O.uss.GO_LIVE, { type: S.Z5.GO_LIVE, value: S.IP.ACCEPT_REQUEST, userId: i.user.id }));
            })(),
                setTimeout(() => {
                    o.A.updateNotificationStatus(i);
                }, 300);
        },
        onNotificationShow: () => {
            D();
        },
        onDismissClick: (e, t) => {
            M("dismiss"), o.A.updateNotificationStatus(t);
        },
    };
}
