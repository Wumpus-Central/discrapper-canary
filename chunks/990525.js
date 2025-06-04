n.d(t, { J: () => E }), n(388685);
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
    m = n(998502),
    f = n(743498),
    p = n(778033),
    g = n(967021),
    h = n(709706),
    v = n(56848),
    b = n(378441),
    y = n(981631),
    j = n(509571),
    x = n(388032),
    C = n(905490);
function I(e) {
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
function O(e, t) {
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
let E = (e) => {
    let { voiceFilter: t, hasNitro: n, analyticsContext: a } = e,
        { activeVoice: E, mostRecentlyRequestedVoiceId: N } = (0, b.o)(),
        P = (0, v.z)(t.id),
        S = t.id === E,
        w = !t.available && !t.temporarilyAvailable,
        T = t.temporarilyAvailable && !n && !S,
        L = !S && t.id === N,
        [k, Z] = i.useState(!1);
    i.useEffect(() => {
        let e = L ? setTimeout(() => Z(L), 200) : void 0;
        return () => {
            clearTimeout(e), Z(!1);
        };
    }, [L]);
    let D = (0, g.J_)({
            location: 'voice_filter_item',
            autoTrackExposure: !0,
            disable: !m.ZP.canCheckVoiceFilterFilesExist()
        }),
        A = (0, l.e7)([h.Z], () => h.Z.isVoiceFilterDownloaded(t.id), [t]),
        F = null == P ? void 0 : P.previewSoundURLs,
        [M, R] = i.useState(0),
        { isPlaying: B, playSound: z, stopSound: U, preloadSound: V } = (0, u.Z)(null != F ? F[M] : null, { soundId: t.id }),
        W = C[t.styleKey],
        H = i.useCallback(() => {
            n || !w ? ((0, f.v6)(E === t.id ? null : t.id, a), T && _.default.track(y.rMx.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, I({ voice_filter_id: t.id }, (0, p.w)(a)))) : (0, d.i)();
        }, [n, w, E, t.id, a, T]),
        G = i.useCallback(() => {
            _.default.track(y.rMx.VOICE_FILTER_PREVIEW_PLAYED, I({ voice_filter_id: t.id }, (0, p.w)(a))),
                z({
                    volume: 0.5,
                    outputChannel: j.w.VOICE
                }),
                (0.25 > Math.random() || M > 0) && null != F && R((e) => (e + 1) % F.length);
        }, [a, z, M, F, t.id]),
        Y = null != P ? x.intl.string(P.name) : '';
    return (0, r.jsxs)('div', {
        className: o()(C.filter, W, {
            [C.selected]: S,
            [C.locked]: w && !S
        }),
        children: [
            (0, r.jsx)(c.ua7, {
                shouldShow: D && !A,
                'aria-label': x.intl.string(x.t.SQ7qMD),
                text: (0, r.jsxs)('div', {
                    className: C.downloadRequiredContent,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            children: x.intl.string(x.t.SQ7qMD)
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            children: x.intl.string(x.t.TbnPVl)
                        })
                    ]
                }),
                children: (e) =>
                    (0, r.jsxs)(
                        c.P3F,
                        O(I({ className: C.selector }, e), {
                            onClick: () => {
                                var t;
                                H(), null == e || null == (t = e.onClick) || t.call(e);
                            },
                            onMouseEnter: () => {
                                var t;
                                V(), null == e || null == (t = e.onMouseEnter) || t.call(e);
                            },
                            children: [
                                (0, r.jsxs)('div', {
                                    className: C.iconTreatmentsWrapper,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: o()(C.profile, { [C.underDevelopment]: t.underDevelopment }),
                                            children: [
                                                (0, r.jsx)('img', {
                                                    className: C.thumbnail,
                                                    alt: '',
                                                    src: null == P ? void 0 : P.iconURL,
                                                    draggable: !1
                                                }),
                                                (0, r.jsx)('div', { className: C.insetBorder })
                                            ]
                                        }),
                                        S &&
                                            (0, r.jsx)('div', {
                                                className: C.iconCircle,
                                                children: (0, r.jsx)(c.owK, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    colorClass: C.checkmark,
                                                    secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css
                                                })
                                            }),
                                        w &&
                                            !S &&
                                            (0, r.jsx)('div', {
                                                className: o()([C.iconCircle, C.lockedCircle]),
                                                children: (0, r.jsx)(c.mBM, {
                                                    size: 'custom',
                                                    height: 16,
                                                    width: 16,
                                                    color: 'currentColor',
                                                    colorClass: C.lockedIcon
                                                })
                                            }),
                                        T &&
                                            (0, r.jsx)('div', {
                                                className: o()([C.iconCircle, C.iconBorder]),
                                                children: (0, r.jsx)('div', {
                                                    className: o()([C.clockCircle]),
                                                    children: (0, r.jsx)(c.T39, {
                                                        size: 'custom',
                                                        height: 16,
                                                        width: 16,
                                                        color: 'currentColor',
                                                        colorClass: C.clockIcon
                                                    })
                                                })
                                            }),
                                        k &&
                                            (0, r.jsx)('div', {
                                                className: C.spinnerWrapper,
                                                children: (0, r.jsx)(c.$jN, {
                                                    type: c.$jN.Type.CHASING_DOTS,
                                                    animated: !0,
                                                    className: C.spinner
                                                })
                                            })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: C.filterName,
                                    children: [
                                        (0, r.jsxs)(c.Text, {
                                            variant: 'text-xs/medium',
                                            color: t.underDevelopment ? 'header-muted' : 'header-primary',
                                            children: [t.underDevelopment ? '\uD83D\uDEA7 ' : '', Y]
                                        }),
                                        D && !A ? (0, r.jsx)(c._8t, { size: 'xxs' }) : null
                                    ]
                                })
                            ]
                        })
                    )
            }),
            null != F &&
                (0, r.jsx)(c.ua7, {
                    text: x.intl.string(B ? x.t.ItuPbm : x.t['0gtbEx']),
                    children: (e) =>
                        (0, r.jsx)(
                            c.P3F,
                            O(I({}, e), {
                                className: o()([C.hoverButtonCircle, C.previewButton], { [C.visible]: B }),
                                onClick: B ? U : G,
                                'aria-label': x.intl.formatToPlainString(x.t.gDzvjY, { voiceFilterName: Y }),
                                children: B
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
