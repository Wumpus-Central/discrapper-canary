n.d(t, { J: () => g }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(692547),
    o = n(481060),
    c = n(166335),
    d = n(469121),
    u = n(743498),
    h = n(56848),
    p = n(378441),
    m = n(388032),
    f = n(682713);
let g = (e) => {
    let { voiceFilter: t, hasNitro: n } = e,
        { activeVoice: a, mostRecentlyRequestedVoiceId: g } = (0, p.o)(),
        _ = (0, h.z)(t.id),
        C = t.id === a,
        x = !t.available && !t.temporarilyAvailable,
        v = t.temporarilyAvailable && !n && !C,
        E = !C && t.id === g,
        I = null == _ ? void 0 : _.previewSoundURLs,
        [b, Z] = l.useState(0),
        { isPlaying: N, playSound: T, stopSound: S, preloadSound: j } = (0, d.Z)(null != I ? I[b] : null, { soundId: t.id }),
        y = f[t.styleKey],
        A = l.useCallback(() => {
            n || !x ? (0, u.v6)(a === t.id ? null : t.id) : (0, c.i)();
        }, [a, t.id, x, n]),
        P = l.useCallback(() => {
            T(), (0.25 > Math.random() || b > 0) && null != I && Z((e) => (e + 1) % I.length);
        }, [T, b, I]);
    return (0, i.jsxs)('div', {
        className: r()(f.filter, y, {
            [f.selected]: C,
            [f.locked]: x && !C
        }),
        children: [
            (0, i.jsxs)(o.P3F, {
                className: f.selector,
                onClick: A,
                onMouseEnter: j,
                children: [
                    (0, i.jsxs)('div', {
                        className: f.iconTreatmentsWrapper,
                        children: [
                            (0, i.jsxs)('div', {
                                className: r()(f.profile, { [f.underDevelopment]: t.underDevelopment }),
                                children: [
                                    (0, i.jsx)('img', {
                                        className: r()(f.thumbnail),
                                        alt: '',
                                        src: null == _ ? void 0 : _.iconURL,
                                        draggable: !1
                                    }),
                                    (0, i.jsx)('div', { className: r()(f.insetBorder) })
                                ]
                            }),
                            C &&
                                (0, i.jsx)('div', {
                                    className: f.iconCircle,
                                    children: (0, i.jsx)(o.owK, {
                                        size: 'md',
                                        color: 'currentColor',
                                        colorClass: f.checkmark,
                                        secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css
                                    })
                                }),
                            x &&
                                !C &&
                                (0, i.jsx)('div', {
                                    className: r()([f.iconCircle, f.lockedCircle]),
                                    children: (0, i.jsx)(o.mBM, {
                                        size: 'custom',
                                        height: 16,
                                        width: 16,
                                        color: 'currentColor',
                                        colorClass: f.lockedIcon
                                    })
                                }),
                            v &&
                                (0, i.jsx)('div', {
                                    className: r()([f.iconCircle, f.clockCircle]),
                                    children: (0, i.jsx)(o.T39, {
                                        size: 'custom',
                                        height: 16,
                                        width: 16,
                                        color: 'currentColor',
                                        colorClass: f.clockIcon
                                    })
                                }),
                            E &&
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
                        children: null == _ ? void 0 : _.name
                    })
                ]
            }),
            null != I &&
                (0, i.jsx)(o.ua7, {
                    text: m.intl.string(N ? m.t.ItuPbm : m.t['0gtbEx']),
                    children: (e) => {
                        var t;
                        return (0, i.jsx)(o.P3F, {
                            ...e,
                            className: r()([f.hoverButtonCircle, f.previewButton], { [f.visible]: N }),
                            onClick: N ? S : P,
                            'aria-label': m.intl.formatToPlainString(m.t.gDzvjY, { voiceFilterName: null !== (t = null == _ ? void 0 : _.name) && void 0 !== t ? t : '' }),
                            children: N
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
