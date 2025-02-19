n.d(t, { J: () => x }), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(692547),
    o = n(481060),
    c = n(166335),
    d = n(469121),
    u = n(626135),
    m = n(743498),
    _ = n(56848),
    h = n(378441),
    p = n(981631),
    g = n(388032),
    f = n(887363);
let x = (e) => {
    let { voiceFilter: t, hasNitro: n } = e,
        { activeVoice: r, mostRecentlyRequestedVoiceId: x } = (0, h.o)(),
        N = (0, _.z)(t.id),
        v = t.id === r,
        C = !t.available && !t.temporarilyAvailable,
        E = t.temporarilyAvailable && !n && !v,
        I = !v && t.id === x,
        [S, T] = a.useState(!1);
    a.useEffect(() => {
        let e = I ? setTimeout(() => T(I), 200) : void 0;
        return () => {
            clearTimeout(e), T(!1);
        };
    }, [I]);
    let b = null == N ? void 0 : N.previewSoundURLs,
        [A, j] = a.useState(0),
        { isPlaying: y, playSound: Z, stopSound: R, preloadSound: L } = (0, d.Z)(null != b ? b[A] : null, { soundId: t.id }),
        P = f[t.styleKey],
        k = a.useCallback(() => {
            n || !C ? (0, m.v6)(r === t.id ? null : t.id) : (0, c.i)();
        }, [r, t.id, C, n]),
        M = a.useCallback(() => {
            u.default.track(p.rMx.VOICE_FILTER_PREVIEW_PLAYED, { voice_filter_id: t.id }), Z({ volume: 0.5 }), (0.25 > Math.random() || A > 0) && null != b && j((e) => (e + 1) % b.length);
        }, [Z, A, b, t.id]);
    return (0, i.jsxs)('div', {
        className: l()(f.filter, P, {
            [f.selected]: v,
            [f.locked]: C && !v
        }),
        children: [
            (0, i.jsxs)(o.P3F, {
                className: f.selector,
                onClick: k,
                onMouseEnter: L,
                children: [
                    (0, i.jsxs)('div', {
                        className: f.iconTreatmentsWrapper,
                        children: [
                            (0, i.jsxs)('div', {
                                className: l()(f.profile, { [f.underDevelopment]: t.underDevelopment }),
                                children: [
                                    (0, i.jsx)('img', {
                                        className: l()(f.thumbnail),
                                        alt: '',
                                        src: null == N ? void 0 : N.iconURL,
                                        draggable: !1
                                    }),
                                    (0, i.jsx)('div', { className: l()(f.insetBorder) })
                                ]
                            }),
                            v &&
                                (0, i.jsx)('div', {
                                    className: f.iconCircle,
                                    children: (0, i.jsx)(o.owK, {
                                        size: 'md',
                                        color: 'currentColor',
                                        colorClass: f.checkmark,
                                        secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css
                                    })
                                }),
                            C &&
                                !v &&
                                (0, i.jsx)('div', {
                                    className: l()([f.iconCircle, f.lockedCircle]),
                                    children: (0, i.jsx)(o.mBM, {
                                        size: 'custom',
                                        height: 16,
                                        width: 16,
                                        color: 'currentColor',
                                        colorClass: f.lockedIcon
                                    })
                                }),
                            E &&
                                (0, i.jsx)('div', {
                                    className: l()([f.iconCircle, f.clockCircle]),
                                    children: (0, i.jsx)(o.T39, {
                                        size: 'custom',
                                        height: 16,
                                        width: 16,
                                        color: 'currentColor',
                                        colorClass: f.clockIcon
                                    })
                                }),
                            S &&
                                (0, i.jsx)('div', {
                                    className: f.spinnerWrapper,
                                    children: (0, i.jsx)(o.$jN, {
                                        type: o.$jN.Type.CHASING_DOTS,
                                        animated: !0,
                                        className: f.spinner
                                    })
                                })
                        ]
                    }),
                    (0, i.jsx)(o.Text, {
                        className: f.filterName,
                        variant: 'text-xs/medium',
                        color: t.underDevelopment ? 'header-muted' : 'header-primary',
                        children: null == N ? void 0 : N.name
                    })
                ]
            }),
            null != b &&
                (0, i.jsx)(o.ua7, {
                    text: g.NW.string(y ? g.t.ItuPbm : g.t['0gtbEx']),
                    children: (e) => {
                        var t;
                        return (0, i.jsx)(o.P3F, {
                            ...e,
                            className: l()([f.hoverButtonCircle, f.previewButton], { [f.visible]: y }),
                            onClick: y ? R : M,
                            'aria-label': g.NW.formatToPlainString(g.t.gDzvjY, { voiceFilterName: null !== (t = null == N ? void 0 : N.name) && void 0 !== t ? t : '' }),
                            children: y
                                ? (0, i.jsx)(o.wNq, {
                                      size: 'custom',
                                      height: 16,
                                      width: 16,
                                      color: 'white'
                                  })
                                : (0, i.jsx)(o.o1U, {
                                      size: 'custom',
                                      height: 16,
                                      width: 16,
                                      color: 'white'
                                  })
                        });
                    }
                })
        ]
    });
};
