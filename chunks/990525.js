n.d(t, { J: () => b }), n(47120);
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
    m = n(56848),
    f = n(378441),
    h = n(981631),
    g = n(388032),
    _ = n(896735);
let b = (e) => {
    let { voiceFilter: t, hasNitro: n } = e,
        { activeVoice: a, mostRecentlyRequestedVoiceId: b } = (0, f.o)(),
        v = (0, m.z)(t.id),
        y = t.id === a,
        x = !t.available && !t.temporarilyAvailable,
        O = t.temporarilyAvailable && !n && !y,
        E = !y && t.id === b,
        [j, N] = i.useState(!1);
    i.useEffect(() => {
        let e = E ? setTimeout(() => N(E), 200) : void 0;
        return () => {
            clearTimeout(e), N(!1);
        };
    }, [E]);
    let C = null == v ? void 0 : v.previewSoundURLs,
        [I, S] = i.useState(0),
        { isPlaying: P, playSound: T, stopSound: A, preloadSound: w } = (0, d.Z)(null != C ? C[I] : null, { soundId: t.id }),
        Z = _[t.styleKey],
        k = i.useCallback(() => {
            n || !x ? ((0, p.v6)(a === t.id ? null : t.id), O && u.default.track(h.rMx.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, { voice_filter_id: t.id })) : (0, c.i)();
        }, [a, t.id, x, n, O]),
        R = i.useCallback(() => {
            u.default.track(h.rMx.VOICE_FILTER_PREVIEW_PLAYED, { voice_filter_id: t.id }), T({ volume: 0.5 }), (0.25 > Math.random() || I > 0) && null != C && S((e) => (e + 1) % C.length);
        }, [T, I, C, t.id]),
        L = null != v ? g.NW.string(v.name) : '';
    return (0, r.jsxs)('div', {
        className: o()(_.filter, Z, {
            [_.selected]: y,
            [_.locked]: x && !y
        }),
        children: [
            (0, r.jsxs)(s.P3F, {
                className: _.selector,
                onClick: k,
                onMouseEnter: w,
                children: [
                    (0, r.jsxs)('div', {
                        className: _.iconTreatmentsWrapper,
                        children: [
                            (0, r.jsxs)('div', {
                                className: o()(_.profile, { [_.underDevelopment]: t.underDevelopment }),
                                children: [
                                    (0, r.jsx)('img', {
                                        className: o()(_.thumbnail),
                                        alt: '',
                                        src: null == v ? void 0 : v.iconURL,
                                        draggable: !1
                                    }),
                                    (0, r.jsx)('div', { className: o()(_.insetBorder) })
                                ]
                            }),
                            y &&
                                (0, r.jsx)('div', {
                                    className: _.iconCircle,
                                    children: (0, r.jsx)(s.owK, {
                                        size: 'md',
                                        color: 'currentColor',
                                        colorClass: _.checkmark,
                                        secondaryColor: l.Z.unsafe_rawColors.WHITE_500.css
                                    })
                                }),
                            x &&
                                !y &&
                                (0, r.jsx)('div', {
                                    className: o()([_.iconCircle, _.lockedCircle]),
                                    children: (0, r.jsx)(s.mBM, {
                                        size: 'custom',
                                        height: 16,
                                        width: 16,
                                        color: 'currentColor',
                                        colorClass: _.lockedIcon
                                    })
                                }),
                            O &&
                                (0, r.jsx)('div', {
                                    className: o()([_.iconCircle, _.iconBorder]),
                                    children: (0, r.jsx)('div', {
                                        className: o()([_.clockCircle]),
                                        children: (0, r.jsx)(s.T39, {
                                            size: 'custom',
                                            height: 16,
                                            width: 16,
                                            color: 'currentColor',
                                            colorClass: _.clockIcon
                                        })
                                    })
                                }),
                            j &&
                                (0, r.jsx)('div', {
                                    className: _.spinnerWrapper,
                                    children: (0, r.jsx)(s.$jN, {
                                        type: s.$jN.Type.CHASING_DOTS,
                                        animated: !0,
                                        className: _.spinner
                                    })
                                })
                        ]
                    }),
                    (0, r.jsxs)(s.Text, {
                        className: _.filterName,
                        variant: 'text-xs/medium',
                        color: t.underDevelopment ? 'header-muted' : 'header-primary',
                        children: [t.underDevelopment ? '\uD83D\uDEA7 ' : '', L]
                    })
                ]
            }),
            null != C &&
                (0, r.jsx)(s.ua7, {
                    text: g.NW.string(P ? g.t.ItuPbm : g.t['0gtbEx']),
                    children: (e) => {
                        var t, n;
                        return (0, r.jsx)(
                            s.P3F,
                            ((t = (function (e) {
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
                            })({}, e)),
                            (n = n =
                                {
                                    className: o()([_.hoverButtonCircle, _.previewButton], { [_.visible]: P }),
                                    onClick: P ? A : R,
                                    'aria-label': g.NW.formatToPlainString(g.t.gDzvjY, { voiceFilterName: L }),
                                    children: P
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
