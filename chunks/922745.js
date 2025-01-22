r.d(n, {
    Z: function () {
        return I;
    },
    r: function () {
        return b;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(442837),
    l = r(692547),
    u = r(215569),
    c = r(481060),
    d = r(600164),
    f = r(528144),
    p = r(312956),
    h = r(501967),
    _ = r(19780),
    m = r(540028),
    g = r(507675),
    E = r(273716),
    v = r(388032),
    y = r(880397);
function b(e) {
    let { title: n, onJumpToChannel: r, onHide: a, idle: o, preventIdleComponent: u } = e,
        d = (0, s.e7)([_.Z], () => _.Z.getChannelId()),
        h =
            null != d
                ? (0, i.jsx)(m.Z, {
                      voiceChannelId: d,
                      idle: o
                  })
                : null,
        { enabled: g } = p.Z.useExperiment({ location: 'PictureInPicturePlayer' });
    return (0, i.jsxs)(u, {
        className: y.headerIdleContainer,
        children: [
            (0, i.jsxs)(c.Clickable, {
                className: y.headerTitle,
                onClick: r,
                children: [
                    (0, i.jsx)(c.ArrowSmallLeftIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        'aria-label': v.intl.string(v.t.mSfLs7),
                        className: y.backButton,
                        width: 20,
                        height: 20
                    }),
                    (0, i.jsx)(f.Z, {
                        className: y.headerText,
                        size: f.Z.Sizes.SIZE_16,
                        color: l.Z.unsafe_rawColors.WHITE_500.css,
                        children: n
                    })
                ]
            }),
            g && null != a
                ? (0, i.jsx)(E.Z, {
                      onClick: a,
                      label: v.intl.string(v.t.BEuDEh)
                  })
                : null,
            h
        ]
    });
}
function I(e) {
    let { children: n, idle: r, onJumpToChannel: a, onHide: s, backgroundKey: l, onActive: c, onForceIdle: f, renderBottomLeftControls: p, renderBottomRightControls: _, screenMessage: m, hideControls: E = !1, className: v, innerClassName: I, ...T } = e;
    return (0, i.jsxs)('div', {
        onMouseMove: c,
        onMouseDown: c,
        onMouseLeave: f,
        className: o()(y.pictureInPictureVideo, { [y.idle]: r }, v),
        onDoubleClick: a,
        children: [
            (0, i.jsx)(u.W, {
                children: (0, i.jsx)(
                    h.B,
                    {
                        className: I,
                        children: n
                    },
                    l
                )
            }),
            null != m
                ? (0, i.jsx)(g.Z, {
                      size: 'small',
                      ...m
                  })
                : null,
            !E &&
                (0, i.jsxs)('div', {
                    className: o()(y.videoControls, 'theme-dark'),
                    children: [
                        (0, i.jsx)('div', {
                            className: y.topControls,
                            children: (0, i.jsx)(b, {
                                idle: r,
                                onJumpToChannel: a,
                                onHide: s,
                                ...T
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: y.bottomControls,
                            children: [
                                (0, i.jsx)(d.Z, {
                                    grow: 0,
                                    shrink: 1,
                                    basis: '50%',
                                    align: d.Z.Align.CENTER,
                                    className: y.bottomLeftControls,
                                    children: null == p ? void 0 : p()
                                }),
                                (0, i.jsx)(d.Z, {
                                    grow: 0,
                                    shrink: 1,
                                    justify: d.Z.Justify.END,
                                    basis: '50%',
                                    align: d.Z.Align.CENTER,
                                    children: null == _ ? void 0 : _()
                                })
                            ]
                        })
                    ]
                })
        ]
    });
}
