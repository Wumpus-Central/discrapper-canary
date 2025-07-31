(n.d(t, { J: () => E }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(692547),
    c = n(481060),
    u = n(457165),
    d = n(469121),
    f = n(626135),
    p = n(998502),
    m = n(743498),
    g = n(778033),
    h = n(967021),
    b = n(709706),
    v = n(56848),
    _ = n(378441),
    y = n(981631),
    O = n(509571),
    S = n(388032),
    I = n(905490);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function x(e, t) {
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
    let { voiceFilter: t, hasNitro: n, analyticsContext: l } = e,
        { activeVoice: E, mostRecentlyRequestedVoiceId: P } = (0, _.o)(),
        C = (0, v.z)(t.id),
        T = t.id === E,
        N = !t.available && !t.temporarilyAvailable,
        A = t.temporarilyAvailable && !n && !T,
        w = !T && t.id === P,
        [D, Z] = i.useState(!1);
    i.useEffect(() => {
        let e = w ? setTimeout(() => Z(w), 200) : void 0;
        return () => {
            (clearTimeout(e), Z(!1));
        };
    }, [w]);
    let L = (0, h.J_)({
            location: 'voice_filter_item',
            autoTrackExposure: !0,
            disable: !p.ZP.canCheckVoiceFilterFilesExist()
        }),
        k = (0, o.e7)([b.Z], () => b.Z.isVoiceFilterDownloaded(t.id), [t]),
        M = null == C ? void 0 : C.previewSoundURLs,
        [U, R] = i.useState(0),
        { isPlaying: V, playSound: F, stopSound: G, preloadSound: B } = (0, d.Z)(null != M ? M[U] : null, { soundId: t.id }),
        W = I[t.styleKey],
        H = i.useCallback(() => {
            n || !N ? ((0, m.v6)(E === t.id ? null : t.id, l), A && f.default.track(y.rMx.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, j({ voice_filter_id: t.id }, (0, g.w)(l)))) : (0, u.i)();
        }, [n, N, E, t.id, l, A]),
        Y = i.useCallback(() => {
            (f.default.track(y.rMx.VOICE_FILTER_PREVIEW_PLAYED, j({ voice_filter_id: t.id }, (0, g.w)(l))),
                F({
                    volume: 0.5,
                    outputChannel: O.w.VOICE
                }),
                (0.25 > Math.random() || U > 0) && null != M && R((e) => (e + 1) % M.length));
        }, [l, F, U, M, t.id]),
        z = null != C ? S.intl.string(C.name) : '';
    return (0, r.jsxs)('div', {
        className: a()(I.filter, W, {
            [I.selected]: T,
            [I.locked]: N && !T
        }),
        children: [
            (0, r.jsx)(c.ua7, {
                shouldShow: L && !k,
                'aria-label': S.intl.string(S.t.SQ7qMD),
                text: (0, r.jsxs)('div', {
                    className: I.downloadRequiredContent,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            children: S.intl.string(S.t.SQ7qMD)
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            children: S.intl.string(S.t.TbnPVl)
                        })
                    ]
                }),
                children: (e) =>
                    (0, r.jsxs)(
                        c.P3F,
                        x(j({ className: I.selector }, e), {
                            onClick: () => {
                                var t;
                                (H(), null == e || null == (t = e.onClick) || t.call(e));
                            },
                            onMouseEnter: () => {
                                var t;
                                (B(), null == e || null == (t = e.onMouseEnter) || t.call(e));
                            },
                            children: [
                                (0, r.jsxs)('div', {
                                    className: I.iconTreatmentsWrapper,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: a()(I.profile, { [I.underDevelopment]: t.underDevelopment }),
                                            children: [
                                                (0, r.jsx)('img', {
                                                    className: I.thumbnail,
                                                    alt: '',
                                                    src: null == C ? void 0 : C.iconURL,
                                                    draggable: !1
                                                }),
                                                (0, r.jsx)('div', { className: I.insetBorder })
                                            ]
                                        }),
                                        T &&
                                            (0, r.jsx)('div', {
                                                className: I.iconCircle,
                                                children: (0, r.jsx)(c.owK, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    colorClass: I.checkmark,
                                                    secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css
                                                })
                                            }),
                                        N &&
                                            !T &&
                                            (0, r.jsx)('div', {
                                                className: a()([I.iconCircle, I.lockedCircle]),
                                                children: (0, r.jsx)(c.mBM, {
                                                    size: 'custom',
                                                    height: 16,
                                                    width: 16,
                                                    color: 'currentColor',
                                                    colorClass: I.lockedIcon
                                                })
                                            }),
                                        A &&
                                            (0, r.jsx)('div', {
                                                className: a()([I.iconCircle, I.iconBorder]),
                                                children: (0, r.jsx)('div', {
                                                    className: a()([I.clockCircle]),
                                                    children: (0, r.jsx)(c.T39, {
                                                        size: 'custom',
                                                        height: 16,
                                                        width: 16,
                                                        color: 'currentColor',
                                                        colorClass: I.clockIcon
                                                    })
                                                })
                                            }),
                                        D &&
                                            (0, r.jsx)('div', {
                                                className: I.spinnerWrapper,
                                                children: (0, r.jsx)(c.$jN, {
                                                    type: c.$jN.Type.CHASING_DOTS,
                                                    animated: !0,
                                                    className: I.spinner
                                                })
                                            })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: I.filterName,
                                    children: [
                                        (0, r.jsxs)(c.Text, {
                                            variant: 'text-xs/medium',
                                            color: t.underDevelopment ? 'header-muted' : 'header-primary',
                                            children: [t.underDevelopment ? '\uD83D\uDEA7 ' : '', z]
                                        }),
                                        L && !k ? (0, r.jsx)(c._8t, { size: 'xxs' }) : null
                                    ]
                                })
                            ]
                        })
                    )
            }),
            null != M &&
                (0, r.jsx)(c.ua7, {
                    text: S.intl.string(V ? S.t.ItuPbm : S.t['0gtbEx']),
                    children: (e) =>
                        (0, r.jsx)(
                            c.P3F,
                            x(j({}, e), {
                                className: a()([I.hoverButtonCircle, I.previewButton], { [I.visible]: V }),
                                onClick: V ? G : Y,
                                'aria-label': S.intl.formatToPlainString(S.t.gDzvjY, { voiceFilterName: z }),
                                children: V
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
