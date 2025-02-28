n.d(t, { J: () => y }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(692547),
    s = n(481060),
    c = n(166335),
    d = n(469121),
    u = n(626135),
    p = n(743498),
    m = n(778033),
    f = n(56848),
    h = n(378441),
    g = n(981631),
    _ = n(388032),
    b = n(770792);
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
        { activeVoice: y, mostRecentlyRequestedVoiceId: x } = (0, h.o)(),
        O = (0, f.z)(t.id),
        E = t.id === y,
        j = !t.available && !t.temporarilyAvailable,
        N = t.temporarilyAvailable && !n && !E,
        C = !E && t.id === x,
        [I, S] = i.useState(!1);
    i.useEffect(() => {
        let e = C ? setTimeout(() => S(C), 200) : void 0;
        return () => {
            clearTimeout(e), S(!1);
        };
    }, [C]);
    let T = null == O ? void 0 : O.previewSoundURLs,
        [P, A] = i.useState(0),
        { isPlaying: w, playSound: Z, stopSound: k, preloadSound: R } = (0, d.Z)(null != T ? T[P] : null, { soundId: t.id }),
        L = b[t.styleKey],
        D = i.useCallback(() => {
            n || !j ? ((0, p.v6)(y === t.id ? null : t.id, a), N && u.default.track(g.rMx.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, v({ voice_filter_id: t.id }, (0, m.w)(a)))) : (0, c.i)();
        }, [n, j, y, t.id, a, N]),
        M = i.useCallback(() => {
            u.default.track(g.rMx.VOICE_FILTER_PREVIEW_PLAYED, v({ voice_filter_id: t.id }, (0, m.w)(a))), Z({ volume: 0.5 }), (0.25 > Math.random() || P > 0) && null != T && A((e) => (e + 1) % T.length);
        }, [a, Z, P, T, t.id]),
        W = null != O ? _.NW.string(O.name) : '';
    return (0, r.jsxs)('div', {
        className: o()(b.filter, L, {
            [b.selected]: E,
            [b.locked]: j && !E
        }),
        children: [
            (0, r.jsxs)(s.P3F, {
                className: b.selector,
                onClick: D,
                onMouseEnter: R,
                children: [
                    (0, r.jsxs)('div', {
                        className: b.iconTreatmentsWrapper,
                        children: [
                            (0, r.jsxs)('div', {
                                className: o()(b.profile, { [b.underDevelopment]: t.underDevelopment }),
                                children: [
                                    (0, r.jsx)('img', {
                                        className: o()(b.thumbnail),
                                        alt: '',
                                        src: null == O ? void 0 : O.iconURL,
                                        draggable: !1
                                    }),
                                    (0, r.jsx)('div', { className: o()(b.insetBorder) })
                                ]
                            }),
                            E &&
                                (0, r.jsx)('div', {
                                    className: b.iconCircle,
                                    children: (0, r.jsx)(s.owK, {
                                        size: 'md',
                                        color: 'currentColor',
                                        colorClass: b.checkmark,
                                        secondaryColor: l.Z.unsafe_rawColors.WHITE_500.css
                                    })
                                }),
                            j &&
                                !E &&
                                (0, r.jsx)('div', {
                                    className: o()([b.iconCircle, b.lockedCircle]),
                                    children: (0, r.jsx)(s.mBM, {
                                        size: 'custom',
                                        height: 16,
                                        width: 16,
                                        color: 'currentColor',
                                        colorClass: b.lockedIcon
                                    })
                                }),
                            N &&
                                (0, r.jsx)('div', {
                                    className: o()([b.iconCircle, b.iconBorder]),
                                    children: (0, r.jsx)('div', {
                                        className: o()([b.clockCircle]),
                                        children: (0, r.jsx)(s.T39, {
                                            size: 'custom',
                                            height: 16,
                                            width: 16,
                                            color: 'currentColor',
                                            colorClass: b.clockIcon
                                        })
                                    })
                                }),
                            I &&
                                (0, r.jsx)('div', {
                                    className: b.spinnerWrapper,
                                    children: (0, r.jsx)(s.$jN, {
                                        type: s.$jN.Type.CHASING_DOTS,
                                        animated: !0,
                                        className: b.spinner
                                    })
                                })
                        ]
                    }),
                    (0, r.jsxs)(s.Text, {
                        className: b.filterName,
                        variant: 'text-xs/medium',
                        color: t.underDevelopment ? 'header-muted' : 'header-primary',
                        children: [t.underDevelopment ? '\uD83D\uDEA7 ' : '', W]
                    })
                ]
            }),
            null != T &&
                (0, r.jsx)(s.ua7, {
                    text: _.NW.string(w ? _.t.ItuPbm : _.t['0gtbEx']),
                    children: (e) => {
                        var t, n;
                        return (0, r.jsx)(
                            s.P3F,
                            ((t = v({}, e)),
                            (n = n =
                                {
                                    className: o()([b.hoverButtonCircle, b.previewButton], { [b.visible]: w }),
                                    onClick: w ? k : M,
                                    'aria-label': _.NW.formatToPlainString(_.t.gDzvjY, { voiceFilterName: W }),
                                    children: w
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
