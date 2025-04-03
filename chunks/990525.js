n.d(t, { J: () => y }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(692547),
    s = n(481060),
    c = n(457165),
    d = n(469121),
    u = n(626135),
    _ = n(743498),
    m = n(778033),
    f = n(56848),
    p = n(378441),
    g = n(981631),
    h = n(388032),
    v = n(905490);
function b(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let y = (e) => {
    let { voiceFilter: t, hasNitro: n, analyticsContext: a } = e,
        { activeVoice: y, mostRecentlyRequestedVoiceId: x } = (0, p.o)(),
        j = (0, f.z)(t.id),
        C = t.id === y,
        I = !t.available && !t.temporarilyAvailable,
        N = t.temporarilyAvailable && !n && !C,
        O = !C && t.id === x,
        [E, P] = i.useState(!1);
    i.useEffect(() => {
        let e = O ? setTimeout(() => P(O), 200) : void 0;
        return () => {
            clearTimeout(e), P(!1);
        };
    }, [O]);
    let S = null == j ? void 0 : j.previewSoundURLs,
        [w, T] = i.useState(0),
        { isPlaying: L, playSound: k, stopSound: Z, preloadSound: D } = (0, d.Z)(null != S ? S[w] : null, { soundId: t.id }),
        A = v[t.styleKey],
        W = i.useCallback(() => {
            n || !I ? ((0, _.v6)(y === t.id ? null : t.id, a), N && u.default.track(g.rMx.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, b({ voice_filter_id: t.id }, (0, m.w)(a)))) : (0, c.i)();
        }, [n, I, y, t.id, a, N]),
        M = i.useCallback(() => {
            u.default.track(g.rMx.VOICE_FILTER_PREVIEW_PLAYED, b({ voice_filter_id: t.id }, (0, m.w)(a))), k({ volume: 0.5 }), (0.25 > Math.random() || w > 0) && null != S && T((e) => (e + 1) % S.length);
        }, [a, k, w, S, t.id]),
        F = null != j ? h.NW.string(j.name) : '';
    return (0, r.jsxs)('div', {
        className: o()(v.filter, A, {
            [v.selected]: C,
            [v.locked]: I && !C
        }),
        children: [
            (0, r.jsxs)(s.P3F, {
                className: v.selector,
                onClick: W,
                onMouseEnter: D,
                children: [
                    (0, r.jsxs)('div', {
                        className: v.iconTreatmentsWrapper,
                        children: [
                            (0, r.jsxs)('div', {
                                className: o()(v.profile, { [v.underDevelopment]: t.underDevelopment }),
                                children: [
                                    (0, r.jsx)('img', {
                                        className: v.thumbnail,
                                        alt: '',
                                        src: null == j ? void 0 : j.iconURL,
                                        draggable: !1
                                    }),
                                    (0, r.jsx)('div', { className: v.insetBorder })
                                ]
                            }),
                            C &&
                                (0, r.jsx)('div', {
                                    className: v.iconCircle,
                                    children: (0, r.jsx)(s.owK, {
                                        size: 'md',
                                        color: 'currentColor',
                                        colorClass: v.checkmark,
                                        secondaryColor: l.Z.unsafe_rawColors.WHITE_500.css
                                    })
                                }),
                            I &&
                                !C &&
                                (0, r.jsx)('div', {
                                    className: o()([v.iconCircle, v.lockedCircle]),
                                    children: (0, r.jsx)(s.mBM, {
                                        size: 'custom',
                                        height: 16,
                                        width: 16,
                                        color: 'currentColor',
                                        colorClass: v.lockedIcon
                                    })
                                }),
                            N &&
                                (0, r.jsx)('div', {
                                    className: o()([v.iconCircle, v.iconBorder]),
                                    children: (0, r.jsx)('div', {
                                        className: o()([v.clockCircle]),
                                        children: (0, r.jsx)(s.T39, {
                                            size: 'custom',
                                            height: 16,
                                            width: 16,
                                            color: 'currentColor',
                                            colorClass: v.clockIcon
                                        })
                                    })
                                }),
                            E &&
                                (0, r.jsx)('div', {
                                    className: v.spinnerWrapper,
                                    children: (0, r.jsx)(s.$jN, {
                                        type: s.$jN.Type.CHASING_DOTS,
                                        animated: !0,
                                        className: v.spinner
                                    })
                                })
                        ]
                    }),
                    (0, r.jsxs)(s.Text, {
                        className: v.filterName,
                        variant: 'text-xs/medium',
                        color: t.underDevelopment ? 'header-muted' : 'header-primary',
                        children: [t.underDevelopment ? '\uD83D\uDEA7 ' : '', F]
                    })
                ]
            }),
            null != S &&
                (0, r.jsx)(s.ua7, {
                    text: h.NW.string(L ? h.t.ItuPbm : h.t['0gtbEx']),
                    children: (e) => {
                        var t, n;
                        return (0, r.jsx)(
                            s.P3F,
                            ((t = b({}, e)),
                            (n = n =
                                {
                                    className: o()([v.hoverButtonCircle, v.previewButton], { [v.visible]: L }),
                                    onClick: L ? Z : M,
                                    'aria-label': h.NW.formatToPlainString(h.t.gDzvjY, { voiceFilterName: F }),
                                    children: L
                                        ? (0, r.jsx)(s.wNq, {
                                              size: 'custom',
                                              height: 16,
                                              width: 16,
                                              color: 'white'
                                          })
                                        : (0, r.jsx)(s.o1U, {
                                              size: 'custom',
                                              height: 16,
                                              width: 16,
                                              color: 'white'
                                          })
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t)
                        );
                    }
                })
        ]
    });
};
