n.d(t, { J: () => O }), n(388685);
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
    y = n(509571),
    j = n(388032),
    x = n(905490);
function C(e) {
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
function I(e, t) {
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
let O = (e) => {
    let { voiceFilter: t, hasNitro: n, analyticsContext: a } = e,
        { activeVoice: O, mostRecentlyRequestedVoiceId: E } = (0, v.o)(),
        N = (0, h.z)(t.id),
        S = t.id === O,
        P = !t.available && !t.temporarilyAvailable,
        w = t.temporarilyAvailable && !n && !S,
        T = !S && t.id === E,
        [L, k] = i.useState(!1);
    i.useEffect(() => {
        let e = T ? setTimeout(() => k(T), 200) : void 0;
        return () => {
            clearTimeout(e), k(!1);
        };
    }, [T]);
    let Z = (0, p.J_)({
            location: 'voice_filter_item',
            autoTrackExposure: !0
        }),
        D = (0, l.e7)([g.Z], () => g.Z.isVoiceFilterDownloaded(t.id), [t]),
        A = null == N ? void 0 : N.previewSoundURLs,
        [M, F] = i.useState(0),
        { isPlaying: R, playSound: B, stopSound: z, preloadSound: U } = (0, u.Z)(null != A ? A[M] : null, { soundId: t.id }),
        V = x[t.styleKey],
        W = i.useCallback(() => {
            n || !P ? ((0, m.v6)(O === t.id ? null : t.id, a), w && _.default.track(b.rMx.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, C({ voice_filter_id: t.id }, (0, f.w)(a)))) : (0, d.i)();
        }, [n, P, O, t.id, a, w]),
        H = i.useCallback(() => {
            _.default.track(b.rMx.VOICE_FILTER_PREVIEW_PLAYED, C({ voice_filter_id: t.id }, (0, f.w)(a))),
                B({
                    volume: 0.5,
                    outputChannel: y.w.VOICE
                }),
                (0.25 > Math.random() || M > 0) && null != A && F((e) => (e + 1) % A.length);
        }, [a, B, M, A, t.id]),
        G = null != N ? j.intl.string(N.name) : '';
    return (0, r.jsxs)('div', {
        className: o()(x.filter, V, {
            [x.selected]: S,
            [x.locked]: P && !S
        }),
        children: [
            (0, r.jsx)(c.ua7, {
                shouldShow: Z && !D,
                'aria-label': j.intl.string(j.t.SQ7qMD),
                text: (0, r.jsxs)('div', {
                    className: x.downloadRequiredContent,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            children: j.intl.string(j.t.SQ7qMD)
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            children: j.intl.string(j.t.TbnPVl)
                        })
                    ]
                }),
                children: (e) =>
                    (0, r.jsxs)(
                        c.P3F,
                        I(C({ className: x.selector }, e), {
                            onClick: () => {
                                var t;
                                W(), null == e || null == (t = e.onClick) || t.call(e);
                            },
                            onMouseEnter: () => {
                                var t;
                                U(), null == e || null == (t = e.onMouseEnter) || t.call(e);
                            },
                            children: [
                                (0, r.jsxs)('div', {
                                    className: x.iconTreatmentsWrapper,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: o()(x.profile, { [x.underDevelopment]: t.underDevelopment }),
                                            children: [
                                                (0, r.jsx)('img', {
                                                    className: x.thumbnail,
                                                    alt: '',
                                                    src: null == N ? void 0 : N.iconURL,
                                                    draggable: !1
                                                }),
                                                (0, r.jsx)('div', { className: x.insetBorder })
                                            ]
                                        }),
                                        S &&
                                            (0, r.jsx)('div', {
                                                className: x.iconCircle,
                                                children: (0, r.jsx)(c.owK, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    colorClass: x.checkmark,
                                                    secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css
                                                })
                                            }),
                                        P &&
                                            !S &&
                                            (0, r.jsx)('div', {
                                                className: o()([x.iconCircle, x.lockedCircle]),
                                                children: (0, r.jsx)(c.mBM, {
                                                    size: 'custom',
                                                    height: 16,
                                                    width: 16,
                                                    color: 'currentColor',
                                                    colorClass: x.lockedIcon
                                                })
                                            }),
                                        w &&
                                            (0, r.jsx)('div', {
                                                className: o()([x.iconCircle, x.iconBorder]),
                                                children: (0, r.jsx)('div', {
                                                    className: o()([x.clockCircle]),
                                                    children: (0, r.jsx)(c.T39, {
                                                        size: 'custom',
                                                        height: 16,
                                                        width: 16,
                                                        color: 'currentColor',
                                                        colorClass: x.clockIcon
                                                    })
                                                })
                                            }),
                                        L &&
                                            (0, r.jsx)('div', {
                                                className: x.spinnerWrapper,
                                                children: (0, r.jsx)(c.$jN, {
                                                    type: c.$jN.Type.CHASING_DOTS,
                                                    animated: !0,
                                                    className: x.spinner
                                                })
                                            })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: x.filterName,
                                    children: [
                                        (0, r.jsxs)(c.Text, {
                                            variant: 'text-xs/medium',
                                            color: t.underDevelopment ? 'header-muted' : 'header-primary',
                                            children: [t.underDevelopment ? '\uD83D\uDEA7 ' : '', G]
                                        }),
                                        Z && !D ? (0, r.jsx)(c._8t, { size: 'xxs' }) : null
                                    ]
                                })
                            ]
                        })
                    )
            }),
            null != A &&
                (0, r.jsx)(c.ua7, {
                    text: j.intl.string(R ? j.t.ItuPbm : j.t['0gtbEx']),
                    children: (e) =>
                        (0, r.jsx)(
                            c.P3F,
                            I(C({}, e), {
                                className: o()([x.hoverButtonCircle, x.previewButton], { [x.visible]: R }),
                                onClick: R ? z : H,
                                'aria-label': j.intl.formatToPlainString(j.t.gDzvjY, { voiceFilterName: G }),
                                children: R
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
