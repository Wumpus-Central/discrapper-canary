n.d(t, {
    Z: () => T,
    r: () => S
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(692547),
    l = n(215569),
    c = n(481060),
    u = n(600164),
    d = n(528144),
    f = n(312956),
    _ = n(501967),
    p = n(19780),
    h = n(540028),
    m = n(507675),
    g = n(273716),
    E = n(388032),
    b = n(992955);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function S(e) {
    let { title: t, onJumpToChannel: n, onHide: i, idle: o, preventIdleComponent: l } = e,
        u = (0, a.e7)([p.Z], () => p.Z.getChannelId()),
        _ =
            null != u
                ? (0, r.jsx)(h.Z, {
                      voiceChannelId: u,
                      idle: o
                  })
                : null,
        { enabled: m } = f.Z.useExperiment({ location: 'PictureInPicturePlayer' });
    return (0, r.jsxs)(l, {
        className: b.headerIdleContainer,
        children: [
            (0, r.jsxs)(c.P3F, {
                className: b.headerTitle,
                onClick: n,
                children: [
                    (0, r.jsx)(c.whL, {
                        size: 'custom',
                        color: 'currentColor',
                        'aria-label': E.NW.string(E.t.mSfLs7),
                        className: b.backButton,
                        width: 20,
                        height: 20
                    }),
                    (0, r.jsx)(d.Z, {
                        className: b.headerText,
                        size: d.Z.Sizes.SIZE_16,
                        color: s.Z.unsafe_rawColors.WHITE_500.css,
                        children: t
                    })
                ]
            }),
            m && null != i
                ? (0, r.jsx)(g.Z, {
                      onClick: i,
                      label: E.NW.string(E.t.BEuDEh)
                  })
                : null,
            _
        ]
    });
}
function T(e) {
    var { children: t, idle: n, onJumpToChannel: i, onHide: a, backgroundKey: s, onActive: c, onForceIdle: d, renderBottomLeftControls: f, renderBottomRightControls: p, screenMessage: h, hideControls: g = !1, className: E, innerClassName: y, videoControlsClassName: I } = e,
        T = O(e, ['children', 'idle', 'onJumpToChannel', 'onHide', 'backgroundKey', 'onActive', 'onForceIdle', 'renderBottomLeftControls', 'renderBottomRightControls', 'screenMessage', 'hideControls', 'className', 'innerClassName', 'videoControlsClassName']);
    return (0, r.jsxs)('div', {
        onMouseMove: c,
        onMouseDown: c,
        onMouseLeave: d,
        className: o()(b.pictureInPictureVideo, { [b.idle]: n }, E),
        onDoubleClick: i,
        children: [
            (0, r.jsx)(l.W, {
                children: (0, r.jsx)(
                    _.B,
                    {
                        className: y,
                        children: t
                    },
                    s
                )
            }),
            null != h ? (0, r.jsx)(m.Z, v({ size: 'small' }, h)) : null,
            !g &&
                (0, r.jsxs)('div', {
                    className: o()(b.videoControls, I, 'theme-dark'),
                    children: [
                        (0, r.jsx)('div', {
                            className: b.topControls,
                            children: (0, r.jsx)(
                                S,
                                v(
                                    {
                                        idle: n,
                                        onJumpToChannel: i,
                                        onHide: a
                                    },
                                    T
                                )
                            )
                        }),
                        (0, r.jsxs)('div', {
                            className: b.bottomControls,
                            children: [
                                (0, r.jsx)(u.Z, {
                                    grow: 0,
                                    shrink: 1,
                                    basis: '50%',
                                    align: u.Z.Align.CENTER,
                                    className: b.bottomLeftControls,
                                    children: null == f ? void 0 : f()
                                }),
                                (0, r.jsx)(u.Z, {
                                    grow: 0,
                                    shrink: 1,
                                    justify: u.Z.Justify.END,
                                    basis: '50%',
                                    align: u.Z.Align.CENTER,
                                    children: null == p ? void 0 : p()
                                })
                            ]
                        })
                    ]
                })
        ]
    });
}
