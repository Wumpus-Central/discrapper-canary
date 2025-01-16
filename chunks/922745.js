r.d(n, {
    Z: function () {
        return b;
    },
    r: function () {
        return T;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(442837),
    l = r(692547),
    u = r(215569),
    c = r(481060),
    d = r(600164),
    f = r(528144),
    _ = r(312956),
    h = r(501967),
    p = r(19780),
    m = r(540028),
    g = r(507675),
    E = r(273716),
    v = r(388032),
    I = r(880397);
function T(e) {
    let { title: n, onJumpToChannel: r, onHide: a, idle: s, preventIdleComponent: u } = e,
        d = (0, o.e7)([p.Z], () => p.Z.getChannelId()),
        h =
            null != d
                ? (0, i.jsx)(m.Z, {
                      voiceChannelId: d,
                      idle: s
                  })
                : null,
        { enabled: g } = _.Z.useExperiment({ location: 'PictureInPicturePlayer' });
    return (0, i.jsxs)(u, {
        className: I.headerIdleContainer,
        children: [
            (0, i.jsxs)(c.Clickable, {
                className: I.headerTitle,
                onClick: r,
                children: [
                    (0, i.jsx)(c.ArrowSmallLeftIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        'aria-label': v.intl.string(v.t.mSfLs7),
                        className: I.backButton,
                        width: 20,
                        height: 20
                    }),
                    (0, i.jsx)(f.Z, {
                        className: I.headerText,
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
function b(e) {
    let { children: n, idle: r, onJumpToChannel: a, onHide: o, backgroundKey: l, onActive: c, onForceIdle: f, renderBottomLeftControls: _, renderBottomRightControls: p, screenMessage: m, hideControls: E = !1, className: v, innerClassName: b, ...y } = e;
    return (0, i.jsxs)('div', {
        onMouseMove: c,
        onMouseDown: c,
        onMouseLeave: f,
        className: s()(I.pictureInPictureVideo, { [I.idle]: r }, v),
        onDoubleClick: a,
        children: [
            (0, i.jsx)(u.W, {
                children: (0, i.jsx)(
                    h.B,
                    {
                        className: b,
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
                    className: s()(I.videoControls, 'theme-dark'),
                    children: [
                        (0, i.jsx)('div', {
                            className: I.topControls,
                            children: (0, i.jsx)(T, {
                                idle: r,
                                onJumpToChannel: a,
                                onHide: o,
                                ...y
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: I.bottomControls,
                            children: [
                                (0, i.jsx)(d.Z, {
                                    grow: 0,
                                    shrink: 1,
                                    basis: '50%',
                                    align: d.Z.Align.CENTER,
                                    className: I.bottomLeftControls,
                                    children: null == _ ? void 0 : _()
                                }),
                                (0, i.jsx)(d.Z, {
                                    grow: 0,
                                    shrink: 1,
                                    justify: d.Z.Justify.END,
                                    basis: '50%',
                                    align: d.Z.Align.CENTER,
                                    children: null == p ? void 0 : p()
                                })
                            ]
                        })
                    ]
                })
        ]
    });
}
