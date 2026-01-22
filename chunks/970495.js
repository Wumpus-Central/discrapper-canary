n.d(t, {
    A: () => R,
}),
    n(896048);
var i = n(627968),
    r = n(503698),
    l = n.n(r),
    a = n(397927),
    o = n(391973),
    s = n(684013),
    c = n(401843),
    u = n(966327),
    d = n(587895),
    p = n(313961),
    h = n(15285),
    f = n(769015),
    m = n(401901),
    g = n(734057),
    y = n(760751),
    A = n(555528),
    O = n(287809),
    E = n(562153),
    v = n(810412),
    b = n(589051),
    S = n(761661),
    x = n(592598),
    j = n(658198),
    I = n(581730),
    N = n(672396),
    w = n(652215),
    T = n(985018),
    C = n(676667);

function _(e) {
    let { user: t, application: n, runningGame: r } = e;
    return null != n || null != r
        ? (0, i.jsx)("div", {
              className: C.R3,
              children: (0, i.jsx)(a.Qk9, {
                  lowerBadge: (0, i.jsx)("div", {
                      className: C.oM,
                      children:
                          null != n || null != r
                              ? (0, i.jsx)(f.A, {
                                    game: n,
                                    pid: null == r ? void 0 : r.pid,
                                    size: f.M.XXSMALL,
                                    className: C.Gt,
                                })
                              : null,
                  }),
                  lowerBadgeSize: {
                      width: 16,
                      height: 16,
                  },
                  children: (0, i.jsx)(u.A, {
                      user: t,
                      "aria-hidden": !0,
                      size: a._3J.SIZE_40,
                  }),
              }),
          })
        : (0, i.jsx)(u.A, {
              user: t,
              "aria-hidden": !0,
              size: a._3J.SIZE_40,
          });
}

function P(e) {
    let { user: t, application: n, runningGame: r, username: o, onWatchClick: s, buttonColor: c } = e;
    return (0, i.jsxs)("div", {
        className: C.kL,
        children: [
            (0, i.jsx)("div", {
                className: C.H,
                children: (0, i.jsx)(_, {
                    user: t,
                    application: n,
                    runningGame: r,
                }),
            }),
            (0, i.jsx)("div", {
                className: l()(C.rf, C.FR),
                children: (0, i.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-text-default",
                    className: C.G3,
                    children: T.intl.format(T.t.vTPX23, {
                        username: o,
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: C.Xm,
                children: (0, i.jsx)(a.DUT, {
                    onClick: s,
                    className: l()(C.kx, "green" === c && C.Ib, "gray" === c && C.E0),
                    children: (0, i.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        tag: "span",
                        children: T.intl.string(T.t["xl+bTG"]),
                    }),
                }),
            }),
        ],
    });
}

function D(e) {
    let { user: t, application: n, runningGame: r, username: o, onWatchClick: s, iconColor: c } = e;
    return (0, i.jsxs)("div", {
        className: C.kL,
        children: [
            (0, i.jsx)("div", {
                className: C.H,
                children: (0, i.jsx)(_, {
                    user: t,
                    application: n,
                    runningGame: r,
                }),
            }),
            (0, i.jsx)("div", {
                className: l()(C.rf, C.FR),
                children: (0, i.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-text-default",
                    className: C.G3,
                    children: T.intl.format(T.t.NmEczg, {
                        username: o,
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: C.U4,
            }),
            (0, i.jsx)("div", {
                className: C.Xm,
                children: (0, i.jsx)(a.DUT, {
                    onClick: s,
                    className: C.zf,
                    children: (0, i.jsx)(j.b, {
                        size: "sm",
                        color: "green" === c ? "white" : a.LU0.colors.INTERACTIVE_TEXT_ACTIVE.css,
                    }),
                }),
            }),
        ],
    });
}

function R(e, t, n) {
    var r, l;
    if (x.A.isNotificationDisabled(N.KS.StreamWatchNudge)) return null;
    let a = O.default.getUser(e);
    if (null == a) return null;
    let { designVariant: u } = (0, b.Fg)("OverlayV3StreamWatchNudge"),
        f = null == n ? void 0 : n.application_id,
        j = g.A.getChannel(t),
        T = null != f ? d.A.getApplication(f) : null,
        C = null != f ? y.A.getDetectableGame(f) : null,
        _ = null != f ? h.Ay.getRunningGames().find((e) => e.id === f) : null,
        R =
            null != (r = null != (l = null == _ ? void 0 : _.name) ? l : null == C ? void 0 : C.name)
                ? r
                : null == T
                  ? void 0
                  : T.name,
        L = (0, E.mG)(null == j ? void 0 : j.guild_id, null == j ? void 0 : j.id, a),
        { trackView: k, trackClick: M } = (0, I.Y9)(N.KS.StreamWatchNudge, {
            notif_type: N.KS.StreamWatchNudge,
            notif_user_id: a.id,
            activity_type: null == n ? void 0 : n.type,
            activity_name: null != R ? R : null == n ? void 0 : n.name,
        });
    return {
        body: (() => {
            switch (u) {
                case b.wD.GREEN_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(P, {
                        user: a,
                        application: T,
                        runningGame: _,
                        username: L,
                        buttonColor: "green",
                    });
                case b.wD.GRAY_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(P, {
                        user: a,
                        application: T,
                        runningGame: _,
                        username: L,
                        buttonColor: "gray",
                    });
                case b.wD.SINGLE_ICON_BUTTON:
                    return (0, i.jsx)(D, {
                        user: a,
                        application: T,
                        runningGame: _,
                        username: L,
                        iconColor: "white",
                    });
            }
        })(),
        maxBodyLines: 1,
        onNotificationClick: (n, i) => {
            (() => {
                M("overlay-watch-stream");
                let [n] = A.A.getWidgetsByType(w.uss.GO_LIVE),
                    i = p.A.getStreamParticipants(t).find((t) => t.user.id === e);
                null != n &&
                    null != i &&
                    ((0, S.CZ)(i.stream, m.$.COVER),
                    (0, c.A9)(i.stream, {
                        forceMultiple: !0,
                        noFocus: !0,
                    }),
                    (0, o.v0)(n.id, {
                        forcedPinnedState: !0,
                    }),
                    (0, o.dH)(n.id),
                    (0, v.YX)(w.uss.GO_LIVE, {
                        type: v.Z5.GO_LIVE,
                        value: v.IP.ACCEPT_REQUEST,
                        userId: i.user.id,
                    }));
            })(),
                setTimeout(() => {
                    s.A.updateNotificationStatus(i);
                }, 300);
        },
        onNotificationShow: () => {
            k();
        },
        onDismissClick: (e, t) => {
            M("dismiss"), s.A.updateNotificationStatus(t);
        },
    };
}
