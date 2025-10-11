n.d(t, { J: () => C }), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(692547),
    c = n(28664),
    u = n(481060),
    d = n(457165),
    p = n(469121),
    m = n(626135),
    f = n(998502),
    b = n(743498),
    g = n(778033),
    v = n(967021),
    y = n(709706),
    j = n(56848),
    O = n(378441),
    h = n(981631),
    x = n(509571),
    P = n(388032),
    _ = n(478875);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let C = (e) => {
    let { voiceFilter: t, hasNitro: n, analyticsContext: o } = e,
        { activeVoice: C, mostRecentlyRequestedVoiceId: E } = (0, O.o)(),
        I = (0, j.z)(t.id),
        T = t.id === C,
        S = !t.available && !t.temporarilyAvailable,
        N = t.temporarilyAvailable && !n && !T,
        D = !T && t.id === E,
        [Z, k] = i.useState(!1);
    i.useEffect(() => {
        let e = D ? setTimeout(() => k(D), 200) : void 0;
        return () => {
            clearTimeout(e), k(!1);
        };
    }, [D]);
    let M = (0, v.J_)({
            location: "voice_filter_item",
            autoTrackExposure: !0,
            disable: !f.ZP.canCheckVoiceFilterFilesExist(),
        }),
        A = (0, a.e7)([y.Z], () => y.Z.isVoiceFilterDownloaded(t.id), [t]),
        R = null == I ? void 0 : I.previewSoundURLs,
        [V, F] = i.useState(0),
        {
            isPlaying: L,
            playSound: U,
            stopSound: Y,
            preloadSound: H,
        } = (0, p.Z)(null != R ? R[V] : null, { soundId: t.id }),
        z = _[t.styleKey],
        B = i.useCallback(() => {
            n || !S
                ? ((0, b.v6)(C === t.id ? null : t.id, o),
                  N &&
                      m.default.track(
                          h.rMx.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED,
                          w({ voice_filter_id: t.id }, (0, g.w)(o)),
                      ))
                : (0, d.i)();
        }, [n, S, C, t.id, o, N]),
        q = i.useCallback(() => {
            m.default.track(h.rMx.VOICE_FILTER_PREVIEW_PLAYED, w({ voice_filter_id: t.id }, (0, g.w)(o))),
                U({
                    volume: 0.5,
                    outputChannel: x.w.VOICE,
                }),
                (0.25 > Math.random() || V > 0) && null != R && F((e) => (e + 1) % R.length);
        }, [o, U, V, R, t.id]),
        W = null != I ? P.intl.string(I.name) : "";
    return (0, r.jsxs)("div", {
        className: l()(_.filter, z, {
            [_.selected]: T,
            [_.locked]: S && !T,
        }),
        children: [
            (0, r.jsx)(c.u, {
                asContainer: !0,
                shouldShow: M && !A,
                "aria-label": P.intl.string(P.t.SQ7qMD),
                __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                    className: _.downloadRequiredContent,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            children: P.intl.string(P.t.SQ7qMD),
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            children: P.intl.string(P.t.TbnPVl),
                        }),
                    ],
                }),
                children: (0, r.jsxs)(u.P3F, {
                    className: _.selector,
                    onClick: () => {
                        B();
                    },
                    onMouseEnter: () => {
                        H();
                    },
                    children: [
                        (0, r.jsxs)("div", {
                            className: _.iconTreatmentsWrapper,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: l()(_.profile, { [_.underDevelopment]: t.underDevelopment }),
                                    children: [
                                        (0, r.jsx)("img", {
                                            className: _.thumbnail,
                                            alt: "",
                                            src: null == I ? void 0 : I.iconURL,
                                            draggable: !1,
                                        }),
                                        (0, r.jsx)("div", { className: _.insetBorder }),
                                    ],
                                }),
                                T &&
                                    (0, r.jsx)("div", {
                                        className: _.iconCircle,
                                        children: (0, r.jsx)(u.owK, {
                                            size: "md",
                                            color: "currentColor",
                                            colorClass: _.checkmark,
                                            secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css,
                                        }),
                                    }),
                                S &&
                                    !T &&
                                    (0, r.jsx)("div", {
                                        className: l()([_.iconCircle, _.lockedCircle]),
                                        children: (0, r.jsx)(u.mBM, {
                                            size: "custom",
                                            height: 16,
                                            width: 16,
                                            color: "currentColor",
                                            colorClass: _.lockedIcon,
                                        }),
                                    }),
                                N &&
                                    (0, r.jsx)("div", {
                                        className: l()([_.iconCircle, _.iconBorder]),
                                        children: (0, r.jsx)("div", {
                                            className: l()([_.clockCircle]),
                                            children: (0, r.jsx)(u.T39, {
                                                size: "custom",
                                                height: 16,
                                                width: 16,
                                                color: "currentColor",
                                                colorClass: _.clockIcon,
                                            }),
                                        }),
                                    }),
                                Z &&
                                    (0, r.jsx)("div", {
                                        className: _.spinnerWrapper,
                                        children: (0, r.jsx)(u.$jN, {
                                            type: u.$jN.Type.CHASING_DOTS,
                                            animated: !0,
                                            className: _.spinner,
                                        }),
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: _.filterName,
                            children: [
                                (0, r.jsxs)(u.Text, {
                                    variant: "text-xs/medium",
                                    color: t.underDevelopment ? "header-muted" : "header-primary",
                                    children: [t.underDevelopment ? "\uD83D\uDEA7 " : "", W],
                                }),
                                M && !A ? (0, r.jsx)(u._8t, { size: "xxs" }) : null,
                            ],
                        }),
                    ],
                }),
            }),
            null != R &&
                (0, r.jsx)(c.u, {
                    asContainer: !0,
                    text: P.intl.string(L ? P.t.ItuPbm : P.t["0gtbEx"]),
                    children: (0, r.jsx)(u.P3F, {
                        className: l()([_.hoverButtonCircle, _.previewButton], { [_.visible]: L }),
                        onClick: L ? Y : q,
                        "aria-label": P.intl.formatToPlainString(P.t.gDzvjY, { voiceFilterName: W }),
                        children: L
                            ? (0, r.jsx)(u.wNq, {
                                  size: "custom",
                                  height: 16,
                                  width: 16,
                                  color: "white",
                              })
                            : (0, r.jsx)(u.o1U, {
                                  size: "custom",
                                  height: 16,
                                  width: 16,
                                  color: "white",
                              }),
                    }),
                }),
        ],
    });
};
