n.d(t, { J: () => C }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(692547),
    o = n(481060),
    c = n(166335),
    d = n(469121),
    u = n(626135),
    h = n(743498),
    p = n(56848),
    m = n(378441),
    f = n(981631),
    g = n(388032),
    _ = n(887363);
let C = (e) => {
    let { voiceFilter: t, hasNitro: n } = e,
        { activeVoice: a, mostRecentlyRequestedVoiceId: C } = (0, m.o)(),
        x = (0, p.z)(t.id),
        v = t.id === a,
        E = !t.available && !t.temporarilyAvailable,
        I = t.temporarilyAvailable && !n && !v,
        b = !v && t.id === C,
        Z = null == x ? void 0 : x.previewSoundURLs,
        [N, T] = l.useState(0),
        { isPlaying: S, playSound: j, stopSound: y, preloadSound: A } = (0, d.Z)(null != Z ? Z[N] : null, { soundId: t.id }),
        P = _[t.styleKey],
        R = l.useCallback(() => {
            n || !E ? (0, h.v6)(a === t.id ? null : t.id) : (0, c.i)();
        }, [a, t.id, E, n]),
        M = l.useCallback(() => {
            u.default.track(f.rMx.VOICE_FILTER_PREVIEW_PLAYED, { voice_filter_id: t.id }), j(), (0.25 > Math.random() || N > 0) && null != Z && T((e) => (e + 1) % Z.length);
        }, [j, N, Z, t.id]);
    return (0, i.jsxs)('div', {
        className: r()(_.filter, P, {
            [_.selected]: v,
            [_.locked]: E && !v
        }),
        children: [
            (0, i.jsxs)(o.P3F, {
                className: _.selector,
                onClick: R,
                onMouseEnter: A,
                children: [
                    (0, i.jsxs)('div', {
                        className: _.iconTreatmentsWrapper,
                        children: [
                            (0, i.jsxs)('div', {
                                className: r()(_.profile, { [_.underDevelopment]: t.underDevelopment }),
                                children: [
                                    (0, i.jsx)('img', {
                                        className: r()(_.thumbnail),
                                        alt: '',
                                        src: null == x ? void 0 : x.iconURL,
                                        draggable: !1
                                    }),
                                    (0, i.jsx)('div', { className: r()(_.insetBorder) })
                                ]
                            }),
                            v &&
                                (0, i.jsx)('div', {
                                    className: _.iconCircle,
                                    children: (0, i.jsx)(o.owK, {
                                        size: 'md',
                                        color: 'currentColor',
                                        colorClass: _.checkmark,
                                        secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css
                                    })
                                }),
                            E &&
                                !v &&
                                (0, i.jsx)('div', {
                                    className: r()([_.iconCircle, _.lockedCircle]),
                                    children: (0, i.jsx)(o.mBM, {
                                        size: 'custom',
                                        height: 16,
                                        width: 16,
                                        color: 'currentColor',
                                        colorClass: _.lockedIcon
                                    })
                                }),
                            I &&
                                (0, i.jsx)('div', {
                                    className: r()([_.iconCircle, _.clockCircle]),
                                    children: (0, i.jsx)(o.T39, {
                                        size: 'custom',
                                        height: 16,
                                        width: 16,
                                        color: 'currentColor',
                                        colorClass: _.clockIcon
                                    })
                                }),
                            b &&
                                (0, i.jsx)('div', {
                                    className: _.spinnerWrapper,
                                    children: (0, i.jsx)(o.$jN, {
                                        type: o.$jN.Type.CHASING_DOTS,
                                        animated: !0,
                                        className: _.spinner
                                    })
                                })
                        ]
                    }),
                    (0, i.jsx)(o.Text, {
                        className: _.filterName,
                        variant: 'text-xs/medium',
                        color: t.underDevelopment ? 'header-muted' : 'header-primary',
                        children: null == x ? void 0 : x.name
                    })
                ]
            }),
            null != Z &&
                (0, i.jsx)(o.ua7, {
                    text: g.intl.string(S ? g.t.ItuPbm : g.t['0gtbEx']),
                    children: (e) => {
                        var t;
                        return (0, i.jsx)(o.P3F, {
                            ...e,
                            className: r()([_.hoverButtonCircle, _.previewButton], { [_.visible]: S }),
                            onClick: S ? y : M,
                            'aria-label': g.intl.formatToPlainString(g.t.gDzvjY, { voiceFilterName: null !== (t = null == x ? void 0 : x.name) && void 0 !== t ? t : '' }),
                            children: S
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
