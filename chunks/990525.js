(n.d(t, { J: () => P }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(692547),
    c = n(481060),
    u = n(457165),
    d = n(469121),
    p = n(626135),
    f = n(998502),
    m = n(743498),
    g = n(778033),
    _ = n(967021),
    v = n(709706),
    b = n(56848),
    h = n(378441),
    y = n(981631),
    O = n(509571),
    j = n(388032),
    x = n(905490);
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
let P = (e) => {
    let { voiceFilter: t, hasNitro: n, analyticsContext: l } = e,
        { activeVoice: P, mostRecentlyRequestedVoiceId: C } = (0, h.o)(),
        E = (0, b.z)(t.id),
        w = t.id === P,
        N = !t.available && !t.temporarilyAvailable,
        T = t.temporarilyAvailable && !n && !w,
        Z = !w && t.id === C,
        [A, D] = i.useState(!1);
    i.useEffect(() => {
        let e = Z ? setTimeout(() => D(Z), 200) : void 0;
        return () => {
            (clearTimeout(e), D(!1));
        };
    }, [Z]);
    let k = (0, _.J_)({
            location: 'voice_filter_item',
            autoTrackExposure: !0,
            disable: !f.ZP.canCheckVoiceFilterFilesExist()
        }),
        L = (0, o.e7)([v.Z], () => v.Z.isVoiceFilterDownloaded(t.id), [t]),
        M = null == E ? void 0 : E.previewSoundURLs,
        [R, F] = i.useState(0),
        { isPlaying: U, playSound: V, stopSound: B, preloadSound: Y } = (0, d.Z)(null != M ? M[R] : null, { soundId: t.id }),
        W = x[t.styleKey],
        z = i.useCallback(() => {
            n || !N ? ((0, m.v6)(P === t.id ? null : t.id, l), T && p.default.track(y.rMx.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, S({ voice_filter_id: t.id }, (0, g.w)(l)))) : (0, u.i)();
        }, [n, N, P, t.id, l, T]),
        G = i.useCallback(() => {
            (p.default.track(y.rMx.VOICE_FILTER_PREVIEW_PLAYED, S({ voice_filter_id: t.id }, (0, g.w)(l))),
                V({
                    volume: 0.5,
                    outputChannel: O.w.VOICE
                }),
                (0.25 > Math.random() || R > 0) && null != M && F((e) => (e + 1) % M.length));
        }, [l, V, R, M, t.id]),
        H = null != E ? j.intl.string(E.name) : '';
    return (0, r.jsxs)('div', {
        className: a()(x.filter, W, {
            [x.selected]: w,
            [x.locked]: N && !w
        }),
        children: [
            (0, r.jsx)(c.ua7, {
                shouldShow: k && !L,
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
                        I(S({ className: x.selector }, e), {
                            onClick: () => {
                                var t;
                                (z(), null == e || null == (t = e.onClick) || t.call(e));
                            },
                            onMouseEnter: () => {
                                var t;
                                (Y(), null == e || null == (t = e.onMouseEnter) || t.call(e));
                            },
                            children: [
                                (0, r.jsxs)('div', {
                                    className: x.iconTreatmentsWrapper,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: a()(x.profile, { [x.underDevelopment]: t.underDevelopment }),
                                            children: [
                                                (0, r.jsx)('img', {
                                                    className: x.thumbnail,
                                                    alt: '',
                                                    src: null == E ? void 0 : E.iconURL,
                                                    draggable: !1
                                                }),
                                                (0, r.jsx)('div', { className: x.insetBorder })
                                            ]
                                        }),
                                        w &&
                                            (0, r.jsx)('div', {
                                                className: x.iconCircle,
                                                children: (0, r.jsx)(c.owK, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    colorClass: x.checkmark,
                                                    secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css
                                                })
                                            }),
                                        N &&
                                            !w &&
                                            (0, r.jsx)('div', {
                                                className: a()([x.iconCircle, x.lockedCircle]),
                                                children: (0, r.jsx)(c.mBM, {
                                                    size: 'custom',
                                                    height: 16,
                                                    width: 16,
                                                    color: 'currentColor',
                                                    colorClass: x.lockedIcon
                                                })
                                            }),
                                        T &&
                                            (0, r.jsx)('div', {
                                                className: a()([x.iconCircle, x.iconBorder]),
                                                children: (0, r.jsx)('div', {
                                                    className: a()([x.clockCircle]),
                                                    children: (0, r.jsx)(c.T39, {
                                                        size: 'custom',
                                                        height: 16,
                                                        width: 16,
                                                        color: 'currentColor',
                                                        colorClass: x.clockIcon
                                                    })
                                                })
                                            }),
                                        A &&
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
                                            children: [t.underDevelopment ? '\uD83D\uDEA7 ' : '', H]
                                        }),
                                        k && !L ? (0, r.jsx)(c._8t, { size: 'xxs' }) : null
                                    ]
                                })
                            ]
                        })
                    )
            }),
            null != M &&
                (0, r.jsx)(c.ua7, {
                    text: j.intl.string(U ? j.t.ItuPbm : j.t['0gtbEx']),
                    children: (e) =>
                        (0, r.jsx)(
                            c.P3F,
                            I(S({}, e), {
                                className: a()([x.hoverButtonCircle, x.previewButton], { [x.visible]: U }),
                                onClick: U ? B : G,
                                'aria-label': j.intl.formatToPlainString(j.t.gDzvjY, { voiceFilterName: H }),
                                children: U
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
