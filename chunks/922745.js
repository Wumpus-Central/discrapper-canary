n.d(t, {
    Z: () => I,
    r: () => v,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(215569),
    l = n(481060),
    c = n(600164),
    u = n(312956),
    d = n(501967),
    f = n(19780),
    _ = n(540028),
    p = n(507675),
    h = n(273716),
    m = n(388032),
    g = n(186880);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function v(e) {
    let { title: t, onJumpToChannel: n, onHide: i, idle: a, preventIdleComponent: s } = e,
        c = (0, o.e7)([f.Z], () => f.Z.getChannelId()),
        d =
            null != c
                ? (0, r.jsx)(_.Z, {
                      voiceChannelId: c,
                      idle: a,
                  })
                : null,
        { enabled: p } = u.Z.useExperiment({ location: "PictureInPicturePlayer" });
    return (0, r.jsxs)(s, {
        className: g.headerIdleContainer,
        children: [
            (0, r.jsxs)(l.P3F, {
                className: g.headerTitle,
                onClick: n,
                children: [
                    (0, r.jsx)(l.whL, {
                        size: "custom",
                        color: "currentColor",
                        "aria-label": m.intl.string(m.t.mSfLs0),
                        className: g.backButton,
                        width: 20,
                        height: 20,
                    }),
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/normal",
                        className: g.headerText,
                        color: "always-white",
                        children: t,
                    }),
                ],
            }),
            p && null != i
                ? (0, r.jsx)(h.Z, {
                      onClick: i,
                      label: m.intl.string(m.t.BEuDEn),
                  })
                : null,
            d,
        ],
    });
}
function I(e) {
    var {
            children: t,
            idle: n,
            onJumpToChannel: i,
            onHide: o,
            backgroundKey: l,
            onActive: u,
            onForceIdle: f,
            renderBottomLeftControls: _,
            renderBottomRightControls: h,
            screenMessage: m,
            hideControls: E = !1,
            className: O,
            innerClassName: I,
            videoControlsClassName: T,
        } = e,
        S = y(e, [
            "children",
            "idle",
            "onJumpToChannel",
            "onHide",
            "backgroundKey",
            "onActive",
            "onForceIdle",
            "renderBottomLeftControls",
            "renderBottomRightControls",
            "screenMessage",
            "hideControls",
            "className",
            "innerClassName",
            "videoControlsClassName",
        ]);
    return (0, r.jsxs)("div", {
        onMouseMove: u,
        onMouseDown: u,
        onMouseLeave: f,
        className: a()(g.pictureInPictureVideo, { [g.idle]: n }, O),
        onDoubleClick: i,
        children: [
            (0, r.jsx)(s.W, {
                children: (0, r.jsx)(
                    d.B,
                    {
                        className: I,
                        children: t,
                    },
                    l,
                ),
            }),
            null != m ? (0, r.jsx)(p.Z, b({ size: "small" }, m)) : null,
            !E &&
                (0, r.jsxs)("div", {
                    className: a()(g.videoControls, T, "theme-dark"),
                    children: [
                        (0, r.jsx)("div", {
                            className: g.topControls,
                            children: (0, r.jsx)(
                                v,
                                b(
                                    {
                                        idle: n,
                                        onJumpToChannel: i,
                                        onHide: o,
                                    },
                                    S,
                                ),
                            ),
                        }),
                        (0, r.jsxs)("div", {
                            className: g.bottomControls,
                            children: [
                                (0, r.jsx)(c.Z, {
                                    grow: 0,
                                    shrink: 1,
                                    basis: "50%",
                                    align: c.Z.Align.CENTER,
                                    className: g.bottomLeftControls,
                                    children: null == _ ? void 0 : _(),
                                }),
                                (0, r.jsx)(c.Z, {
                                    grow: 0,
                                    shrink: 1,
                                    justify: c.Z.Justify.END,
                                    basis: "50%",
                                    align: c.Z.Align.CENTER,
                                    children: null == h ? void 0 : h(),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
