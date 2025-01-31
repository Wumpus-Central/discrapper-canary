n.d(t, {
    Z: () => I,
    r: () => y
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(692547),
    l = n(215569),
    u = n(481060),
    c = n(600164),
    d = n(528144),
    f = n(312956),
    _ = n(501967),
    p = n(19780),
    h = n(540028),
    m = n(507675),
    g = n(273716),
    E = n(388032),
    v = n(880397);
function y(e) {
    let { title: t, onJumpToChannel: n, onHide: r, idle: a, preventIdleComponent: l } = e,
        c = (0, s.e7)([p.Z], () => p.Z.getChannelId()),
        _ =
            null != c
                ? (0, i.jsx)(h.Z, {
                      voiceChannelId: c,
                      idle: a
                  })
                : null,
        { enabled: m } = f.Z.useExperiment({ location: 'PictureInPicturePlayer' });
    return (0, i.jsxs)(l, {
        className: v.headerIdleContainer,
        children: [
            (0, i.jsxs)(u.P3F, {
                className: v.headerTitle,
                onClick: n,
                children: [
                    (0, i.jsx)(u.whL, {
                        size: 'custom',
                        color: 'currentColor',
                        'aria-label': E.intl.string(E.t.mSfLs7),
                        className: v.backButton,
                        width: 20,
                        height: 20
                    }),
                    (0, i.jsx)(d.Z, {
                        className: v.headerText,
                        size: d.Z.Sizes.SIZE_16,
                        color: o.Z.unsafe_rawColors.WHITE_500.css,
                        children: t
                    })
                ]
            }),
            m && null != r
                ? (0, i.jsx)(g.Z, {
                      onClick: r,
                      label: E.intl.string(E.t.BEuDEh)
                  })
                : null,
            _
        ]
    });
}
function I(e) {
    let { children: t, idle: n, onJumpToChannel: r, onHide: s, backgroundKey: o, onActive: u, onForceIdle: d, renderBottomLeftControls: f, renderBottomRightControls: p, screenMessage: h, hideControls: g = !1, className: E, innerClassName: I, ...b } = e;
    return (0, i.jsxs)('div', {
        onMouseMove: u,
        onMouseDown: u,
        onMouseLeave: d,
        className: a()(v.pictureInPictureVideo, { [v.idle]: n }, E),
        onDoubleClick: r,
        children: [
            (0, i.jsx)(l.W, {
                children: (0, i.jsx)(
                    _.B,
                    {
                        className: I,
                        children: t
                    },
                    o
                )
            }),
            null != h
                ? (0, i.jsx)(m.Z, {
                      size: 'small',
                      ...h
                  })
                : null,
            !g &&
                (0, i.jsxs)('div', {
                    className: a()(v.videoControls, 'theme-dark'),
                    children: [
                        (0, i.jsx)('div', {
                            className: v.topControls,
                            children: (0, i.jsx)(y, {
                                idle: n,
                                onJumpToChannel: r,
                                onHide: s,
                                ...b
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: v.bottomControls,
                            children: [
                                (0, i.jsx)(c.Z, {
                                    grow: 0,
                                    shrink: 1,
                                    basis: '50%',
                                    align: c.Z.Align.CENTER,
                                    className: v.bottomLeftControls,
                                    children: null == f ? void 0 : f()
                                }),
                                (0, i.jsx)(c.Z, {
                                    grow: 0,
                                    shrink: 1,
                                    justify: c.Z.Justify.END,
                                    basis: '50%',
                                    align: c.Z.Align.CENTER,
                                    children: null == p ? void 0 : p()
                                })
                            ]
                        })
                    ]
                })
        ]
    });
}
