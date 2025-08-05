(n.d(t, { J: () => w }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(481060),
    u = n(457165),
    d = n(469121),
    f = n(626135),
    _ = n(998502),
    p = n(743498),
    h = n(778033),
    m = n(967021),
    g = n(709706),
    E = n(56848),
    b = n(378441),
    y = n(981631),
    O = n(509571),
    v = n(388032),
    I = n(905490);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
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
                T(e, t, n[t]);
            }));
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = 200,
    w = (e) => {
        let { voiceFilter: t, hasNitro: n, analyticsContext: a } = e,
            { activeVoice: T, mostRecentlyRequestedVoiceId: A } = (0, b.o)(),
            w = (0, E.z)(t.id),
            R = t.id === T,
            P = !t.available && !t.temporarilyAvailable,
            D = t.temporarilyAvailable && !n && !R,
            L = !R && t.id === A,
            [x, k] = i.useState(!1);
        i.useEffect(() => {
            let e = L ? setTimeout(() => k(L), C) : void 0;
            return () => {
                (clearTimeout(e), k(!1));
            };
        }, [L]);
        let j = (0, m.J_)({
                location: 'voice_filter_item',
                autoTrackExposure: !0,
                disable: !_.ZP.canCheckVoiceFilterFilesExist()
            }),
            M = (0, s.e7)([g.Z], () => g.Z.isVoiceFilterDownloaded(t.id), [t]),
            U = null == w ? void 0 : w.previewSoundURLs,
            [G, B] = i.useState(0),
            { isPlaying: Z, playSound: F, stopSound: V, preloadSound: H } = (0, d.Z)(null != U ? U[G] : null, { soundId: t.id }),
            Y = I[t.styleKey],
            W = i.useCallback(() => {
                n || !P ? ((0, p.v6)(T === t.id ? null : t.id, a), D && f.default.track(y.rMx.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, S({ voice_filter_id: t.id }, (0, h.w)(a)))) : (0, u.i)();
            }, [n, P, T, t.id, a, D]),
            K = i.useCallback(() => {
                (f.default.track(y.rMx.VOICE_FILTER_PREVIEW_PLAYED, S({ voice_filter_id: t.id }, (0, h.w)(a))),
                    F({
                        volume: 0.5,
                        outputChannel: O.w.VOICE
                    }),
                    (0.25 > Math.random() || G > 0) && null != U && B((e) => (e + 1) % U.length));
            }, [a, F, G, U, t.id]),
            z = null != w ? v.intl.string(w.name) : '';
        return (0, r.jsxs)('div', {
            className: o()(I.filter, Y, {
                [I.selected]: R,
                [I.locked]: P && !R
            }),
            children: [
                (0, r.jsx)(c.ua7, {
                    shouldShow: j && !M,
                    'aria-label': v.intl.string(v.t.SQ7qMD),
                    text: (0, r.jsxs)('div', {
                        className: I.downloadRequiredContent,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                children: v.intl.string(v.t.SQ7qMD)
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-xs/normal',
                                children: v.intl.string(v.t.TbnPVl)
                            })
                        ]
                    }),
                    children: (e) =>
                        (0, r.jsxs)(
                            c.P3F,
                            N(S({ className: I.selector }, e), {
                                onClick: () => {
                                    var t;
                                    (W(), null == e || null == (t = e.onClick) || t.call(e));
                                },
                                onMouseEnter: () => {
                                    var t;
                                    (H(), null == e || null == (t = e.onMouseEnter) || t.call(e));
                                },
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: I.iconTreatmentsWrapper,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: o()(I.profile, { [I.underDevelopment]: t.underDevelopment }),
                                                children: [
                                                    (0, r.jsx)('img', {
                                                        className: I.thumbnail,
                                                        alt: '',
                                                        src: null == w ? void 0 : w.iconURL,
                                                        draggable: !1
                                                    }),
                                                    (0, r.jsx)('div', { className: I.insetBorder })
                                                ]
                                            }),
                                            R &&
                                                (0, r.jsx)('div', {
                                                    className: I.iconCircle,
                                                    children: (0, r.jsx)(c.owK, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        colorClass: I.checkmark,
                                                        secondaryColor: l.Z.unsafe_rawColors.WHITE_500.css
                                                    })
                                                }),
                                            P &&
                                                !R &&
                                                (0, r.jsx)('div', {
                                                    className: o()([I.iconCircle, I.lockedCircle]),
                                                    children: (0, r.jsx)(c.mBM, {
                                                        size: 'custom',
                                                        height: 16,
                                                        width: 16,
                                                        color: 'currentColor',
                                                        colorClass: I.lockedIcon
                                                    })
                                                }),
                                            D &&
                                                (0, r.jsx)('div', {
                                                    className: o()([I.iconCircle, I.iconBorder]),
                                                    children: (0, r.jsx)('div', {
                                                        className: o()([I.clockCircle]),
                                                        children: (0, r.jsx)(c.T39, {
                                                            size: 'custom',
                                                            height: 16,
                                                            width: 16,
                                                            color: 'currentColor',
                                                            colorClass: I.clockIcon
                                                        })
                                                    })
                                                }),
                                            x &&
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
                                            j && !M ? (0, r.jsx)(c._8t, { size: 'xxs' }) : null
                                        ]
                                    })
                                ]
                            })
                        )
                }),
                null != U &&
                    (0, r.jsx)(c.ua7, {
                        text: v.intl.string(Z ? v.t.ItuPbm : v.t['0gtbEx']),
                        children: (e) =>
                            (0, r.jsx)(
                                c.P3F,
                                N(S({}, e), {
                                    className: o()([I.hoverButtonCircle, I.previewButton], { [I.visible]: Z }),
                                    onClick: Z ? V : K,
                                    'aria-label': v.intl.formatToPlainString(v.t.gDzvjY, { voiceFilterName: z }),
                                    children: Z
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
