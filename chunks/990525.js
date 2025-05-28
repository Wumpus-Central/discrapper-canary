n.d(t, { J: () => I }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    l = n(442837),
    s = n(692547),
    c = n(481060),
    d = n(457165),
    u = n(469121),
    _ = n(626135),
    m = n(743498),
    f = n(778033),
    p = n(967021),
    g = n(709706),
    h = n(56848),
    v = n(378441),
    b = n(981631),
    y = n(388032),
    j = n(905490);
function x(e) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (e) => {
    let { voiceFilter: t, hasNitro: n, analyticsContext: a } = e,
        { activeVoice: I, mostRecentlyRequestedVoiceId: O } = (0, v.o)(),
        E = (0, h.z)(t.id),
        N = t.id === I,
        S = !t.available && !t.temporarilyAvailable,
        P = t.temporarilyAvailable && !n && !N,
        w = !N && t.id === O,
        [T, L] = i.useState(!1);
    i.useEffect(() => {
        let e = w ? setTimeout(() => L(w), 200) : void 0;
        return () => {
            clearTimeout(e), L(!1);
        };
    }, [w]);
    let k = (0, p.J_)({
            location: 'voice_filter_item',
            autoTrackExposure: !0
        }),
        Z = (0, l.e7)([g.Z], () => g.Z.isVoiceFilterDownloaded(t.id), [t]),
        D = null == E ? void 0 : E.previewSoundURLs,
        [A, M] = i.useState(0),
        { isPlaying: F, playSound: R, stopSound: B, preloadSound: z } = (0, u.Z)(null != D ? D[A] : null, { soundId: t.id }),
        U = j[t.styleKey],
        V = i.useCallback(() => {
            n || !S ? ((0, m.v6)(I === t.id ? null : t.id, a), P && _.default.track(b.rMx.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, x({ voice_filter_id: t.id }, (0, f.w)(a)))) : (0, d.i)();
        }, [n, S, I, t.id, a, P]),
        W = i.useCallback(() => {
            _.default.track(b.rMx.VOICE_FILTER_PREVIEW_PLAYED, x({ voice_filter_id: t.id }, (0, f.w)(a))), R({ volume: 0.5 }), (0.25 > Math.random() || A > 0) && null != D && M((e) => (e + 1) % D.length);
        }, [a, R, A, D, t.id]),
        H = null != E ? y.intl.string(E.name) : '';
    return (0, r.jsxs)('div', {
        className: o()(j.filter, U, {
            [j.selected]: N,
            [j.locked]: S && !N
        }),
        children: [
            (0, r.jsx)(c.ua7, {
                shouldShow: k && !Z,
                'aria-label': y.intl.string(y.t.SQ7qMD),
                text: (0, r.jsxs)('div', {
                    className: j.downloadRequiredContent,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            children: y.intl.string(y.t.SQ7qMD)
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            children: y.intl.string(y.t.TbnPVl)
                        })
                    ]
                }),
                children: (e) =>
                    (0, r.jsxs)(
                        c.P3F,
                        C(x({ className: j.selector }, e), {
                            onClick: () => {
                                var t;
                                V(), null == e || null == (t = e.onClick) || t.call(e);
                            },
                            onMouseEnter: () => {
                                var t;
                                z(), null == e || null == (t = e.onMouseEnter) || t.call(e);
                            },
                            children: [
                                (0, r.jsxs)('div', {
                                    className: j.iconTreatmentsWrapper,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: o()(j.profile, { [j.underDevelopment]: t.underDevelopment }),
                                            children: [
                                                (0, r.jsx)('img', {
                                                    className: j.thumbnail,
                                                    alt: '',
                                                    src: null == E ? void 0 : E.iconURL,
                                                    draggable: !1
                                                }),
                                                (0, r.jsx)('div', { className: j.insetBorder })
                                            ]
                                        }),
                                        N &&
                                            (0, r.jsx)('div', {
                                                className: j.iconCircle,
                                                children: (0, r.jsx)(c.owK, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    colorClass: j.checkmark,
                                                    secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css
                                                })
                                            }),
                                        S &&
                                            !N &&
                                            (0, r.jsx)('div', {
                                                className: o()([j.iconCircle, j.lockedCircle]),
                                                children: (0, r.jsx)(c.mBM, {
                                                    size: 'custom',
                                                    height: 16,
                                                    width: 16,
                                                    color: 'currentColor',
                                                    colorClass: j.lockedIcon
                                                })
                                            }),
                                        P &&
                                            (0, r.jsx)('div', {
                                                className: o()([j.iconCircle, j.iconBorder]),
                                                children: (0, r.jsx)('div', {
                                                    className: o()([j.clockCircle]),
                                                    children: (0, r.jsx)(c.T39, {
                                                        size: 'custom',
                                                        height: 16,
                                                        width: 16,
                                                        color: 'currentColor',
                                                        colorClass: j.clockIcon
                                                    })
                                                })
                                            }),
                                        T &&
                                            (0, r.jsx)('div', {
                                                className: j.spinnerWrapper,
                                                children: (0, r.jsx)(c.$jN, {
                                                    type: c.$jN.Type.CHASING_DOTS,
                                                    animated: !0,
                                                    className: j.spinner
                                                })
                                            })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: j.filterName,
                                    children: [
                                        (0, r.jsxs)(c.Text, {
                                            variant: 'text-xs/medium',
                                            color: t.underDevelopment ? 'header-muted' : 'header-primary',
                                            children: [t.underDevelopment ? '\uD83D\uDEA7 ' : '', H]
                                        }),
                                        k && !Z ? (0, r.jsx)(c._8t, { size: 'xxs' }) : null
                                    ]
                                })
                            ]
                        })
                    )
            }),
            null != D &&
                (0, r.jsx)(c.ua7, {
                    text: y.intl.string(F ? y.t.ItuPbm : y.t['0gtbEx']),
                    children: (e) =>
                        (0, r.jsx)(
                            c.P3F,
                            C(x({}, e), {
                                className: o()([j.hoverButtonCircle, j.previewButton], { [j.visible]: F }),
                                onClick: F ? B : W,
                                'aria-label': y.intl.formatToPlainString(y.t.gDzvjY, { voiceFilterName: H }),
                                children: F
                                    ? (0, r.jsx)(c.wNq, {
                                          size: 'custom',
                                          height: 16,
                                          width: 16,
                                          color: 'white'
                                      })
                                    : (0, r.jsx)(c.o1U, {
                                          size: 'custom',
                                          height: 16,
                                          width: 16,
                                          color: 'white'
                                      })
                            })
                        )
                })
        ]
    });
};
