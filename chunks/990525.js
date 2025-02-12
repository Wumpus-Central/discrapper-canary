n.d(t, { J: () => f });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(692547),
    o = n(481060),
    c = n(469121),
    d = n(743498),
    u = n(56848),
    h = n(378441),
    p = n(388032),
    m = n(887363);
let f = (e) => {
    let { voiceFilter: t, hasNitro: n } = e,
        { activeVoice: a, mostRecentlyRequestedVoiceId: f } = (0, h.o)(),
        g = (0, u.z)(t.id),
        _ = t.id === a,
        C = !t.available && !t.temporarilyAvailable,
        x = t.temporarilyAvailable && !n && !_,
        v = !_ && t.id === f,
        E = null == g ? void 0 : g.previewSoundURL,
        { isPlaying: I, playSound: b, stopSound: Z, preloadSound: N } = (0, c.Z)(E),
        T = m[t.styleKey],
        S = l.useCallback(() => {
            (n || !C) && (0, d.v6)(a === t.id ? null : t.id);
        }, [a, t.id, C, n]),
        j = l.useCallback(() => {
            b();
        }, [b]);
    return (0, i.jsxs)('div', {
        className: r()(m.filter, T, {
            [m.selected]: _,
            [m.locked]: C && !_,
            [m.unlocked]: !C
        }),
        children: [
            (0, i.jsxs)(o.P3F, {
                className: m.selector,
                onClick: S,
                onMouseEnter: N,
                children: [
                    (0, i.jsxs)('div', {
                        className: m.iconTreatmentsWrapper,
                        children: [
                            (0, i.jsxs)('div', {
                                className: r()(m.profile, {
                                    [m.unlocked]: !C,
                                    [m.underDevelopment]: t.underDevelopment
                                }),
                                children: [
                                    (0, i.jsx)('img', {
                                        className: r()(m.thumbnail),
                                        alt: '',
                                        src: null == g ? void 0 : g.iconURL,
                                        draggable: !1
                                    }),
                                    (0, i.jsx)('div', { className: r()(m.insetBorder) })
                                ]
                            }),
                            _ &&
                                (0, i.jsx)('div', {
                                    className: m.iconCircle,
                                    children: (0, i.jsx)(o.owK, {
                                        size: 'md',
                                        color: 'currentColor',
                                        colorClass: m.checkmark,
                                        secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css
                                    })
                                }),
                            C &&
                                !_ &&
                                (0, i.jsx)('div', {
                                    className: r()([m.iconCircle, m.lockedCircle]),
                                    children: (0, i.jsx)(o.mBM, {
                                        size: 'custom',
                                        height: 16,
                                        width: 16,
                                        color: 'currentColor',
                                        colorClass: m.lockedIcon
                                    })
                                }),
                            x &&
                                (0, i.jsx)('div', {
                                    className: r()([m.iconCircle, m.clockCircle]),
                                    children: (0, i.jsx)(o.T39, {
                                        size: 'custom',
                                        height: 16,
                                        width: 16,
                                        color: 'currentColor',
                                        colorClass: m.clockIcon
                                    })
                                }),
                            v &&
                                (0, i.jsx)('div', {
                                    className: m.spinnerWrapper,
                                    children: (0, i.jsx)(o.$jN, {
                                        type: o.$jN.Type.CHASING_DOTS,
                                        animated: !0,
                                        className: m.spinner
                                    })
                                })
                        ]
                    }),
                    (0, i.jsx)(o.Text, {
                        className: m.filterName,
                        variant: 'text-xs/medium',
                        color: t.underDevelopment ? 'header-muted' : 'header-primary',
                        children: null == g ? void 0 : g.name
                    })
                ]
            }),
            null != E &&
                (0, i.jsx)(o.ua7, {
                    text: p.intl.string(I ? p.t.ItuPbm : p.t['0gtbEx']),
                    children: (e) => {
                        var t;
                        return (0, i.jsx)(o.P3F, {
                            ...e,
                            className: r()([m.hoverButtonCircle, m.previewButton], { [m.visible]: I }),
                            onClick: I ? Z : j,
                            'aria-label': p.intl.formatToPlainString(p.t.gDzvjY, { voiceFilterName: null !== (t = null == g ? void 0 : g.name) && void 0 !== t ? t : '' }),
                            children: I
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
