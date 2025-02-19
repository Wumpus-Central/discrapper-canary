n.d(t, {
    Z: () => T,
    r: () => I
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
    p = n(501967),
    _ = n(19780),
    h = n(540028),
    m = n(507675),
    g = n(273716),
    E = n(388032),
    v = n(717268);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function I(e) {
    let { title: t, onJumpToChannel: n, onHide: i, idle: o, preventIdleComponent: l } = e,
        u = (0, a.e7)([_.Z], () => _.Z.getChannelId()),
        p =
            null != u
                ? (0, r.jsx)(h.Z, {
                      voiceChannelId: u,
                      idle: o
                  })
                : null,
        { enabled: m } = f.Z.useExperiment({ location: 'PictureInPicturePlayer' });
    return (0, r.jsxs)(l, {
        className: v.headerIdleContainer,
        children: [
            (0, r.jsxs)(c.P3F, {
                className: v.headerTitle,
                onClick: n,
                children: [
                    (0, r.jsx)(c.whL, {
                        size: 'custom',
                        color: 'currentColor',
                        'aria-label': E.NW.string(E.t.mSfLs7),
                        className: v.backButton,
                        width: 20,
                        height: 20
                    }),
                    (0, r.jsx)(d.Z, {
                        className: v.headerText,
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
            p
        ]
    });
}
function T(e) {
    var { children: t, idle: n, onJumpToChannel: i, onHide: a, backgroundKey: s, onActive: c, onForceIdle: d, renderBottomLeftControls: f, renderBottomRightControls: _, screenMessage: h, hideControls: g = !1, className: E, innerClassName: b } = e,
        S = O(e, ['children', 'idle', 'onJumpToChannel', 'onHide', 'backgroundKey', 'onActive', 'onForceIdle', 'renderBottomLeftControls', 'renderBottomRightControls', 'screenMessage', 'hideControls', 'className', 'innerClassName']);
    return (0, r.jsxs)('div', {
        onMouseMove: c,
        onMouseDown: c,
        onMouseLeave: d,
        className: o()(v.pictureInPictureVideo, { [v.idle]: n }, E),
        onDoubleClick: i,
        children: [
            (0, r.jsx)(l.W, {
                children: (0, r.jsx)(
                    p.B,
                    {
                        className: b,
                        children: t
                    },
                    s
                )
            }),
            null != h ? (0, r.jsx)(m.Z, y({ size: 'small' }, h)) : null,
            !g &&
                (0, r.jsxs)('div', {
                    className: o()(v.videoControls, 'theme-dark'),
                    children: [
                        (0, r.jsx)('div', {
                            className: v.topControls,
                            children: (0, r.jsx)(
                                I,
                                y(
                                    {
                                        idle: n,
                                        onJumpToChannel: i,
                                        onHide: a
                                    },
                                    S
                                )
                            )
                        }),
                        (0, r.jsxs)('div', {
                            className: v.bottomControls,
                            children: [
                                (0, r.jsx)(u.Z, {
                                    grow: 0,
                                    shrink: 1,
                                    basis: '50%',
                                    align: u.Z.Align.CENTER,
                                    className: v.bottomLeftControls,
                                    children: null == f ? void 0 : f()
                                }),
                                (0, r.jsx)(u.Z, {
                                    grow: 0,
                                    shrink: 1,
                                    justify: u.Z.Justify.END,
                                    basis: '50%',
                                    align: u.Z.Align.CENTER,
                                    children: null == _ ? void 0 : _()
                                })
                            ]
                        })
                    ]
                })
        ]
    });
}
