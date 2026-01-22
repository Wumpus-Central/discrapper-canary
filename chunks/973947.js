n.d(t, { I: () => N }), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(827734),
    c = n(990078),
    u = n(397927),
    d = n(336060),
    f = n(584014),
    p = n(954571),
    b = n(837921),
    g = n(504292),
    m = n(656088),
    h = n(253541),
    A = n(971778),
    y = n(774030),
    _ = n(494783),
    E = n(652215),
    v = n(257645),
    O = n(985018),
    x = n(854147);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let N = (e) => {
    let { voiceFilter: t, hasNitro: n, analyticsContext: i } = e,
        { activeVoice: N, mostRecentlyRequestedVoiceId: C } = (0, _.f)(),
        j = (0, y.e)(t.id),
        T = t.id === N,
        I = !t.available && !t.temporarilyAvailable,
        w = t.temporarilyAvailable && !n && !T,
        R = !T && t.id === C,
        [P, D] = r.useState(!1);
    r.useEffect(() => {
        let e = R ? setTimeout(() => D(R), 200) : void 0;
        return () => {
            clearTimeout(e), D(!1);
        };
    }, [R]);
    let k = (0, h.B2)({
            location: "voice_filter_item",
            autoTrackExposure: !0,
            disable: !b.Ay.canCheckVoiceFilterFilesExist(),
        }),
        L = (0, s.bG)([A.A], () => A.A.isVoiceFilterDownloaded(t.id), [t]),
        M = null == j ? void 0 : j.previewSoundURLs,
        [U, V] = r.useState(0),
        {
            isPlaying: F,
            playSound: G,
            stopSound: H,
            preloadSound: B,
        } = (0, f.A)(null != M ? M[U] : null, { soundId: t.id }),
        Y = x[t.styleKey],
        W = r.useCallback(() => {
            n || !I
                ? ((0, g.OR)(N === t.id ? null : t.id, i),
                  w &&
                      p.default.track(
                          E.HAw.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED,
                          S({ voice_filter_id: t.id }, (0, m.A)(i)),
                      ))
                : (0, d.n)();
        }, [n, I, N, t.id, i, w]),
        z = r.useCallback(() => {
            p.default.track(E.HAw.VOICE_FILTER_PREVIEW_PLAYED, S({ voice_filter_id: t.id }, (0, m.A)(i))),
                G({
                    volume: 0.5,
                    outputChannel: v.a.VOICE,
                }),
                (0.25 > Math.random() || U > 0) && null != M && V((e) => (e + 1) % M.length);
        }, [i, G, U, M, t.id]),
        K = null != j ? O.intl.string(j.name) : "";
    return (0, l.jsxs)("div", {
        className: a()(x.filter, Y, {
            [x.selected]: T,
            [x.locked]: I && !T,
        }),
        children: [
            (0, l.jsx)(c.m, {
                asContainer: !0,
                shouldShow: k && !L,
                "aria-label": O.intl.string(O.t.SQ7qMG),
                __unsupportedReactNodeAsText: (0, l.jsxs)("div", {
                    className: x.downloadRequiredContent,
                    children: [
                        (0, l.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            children: O.intl.string(O.t.SQ7qMG),
                        }),
                        (0, l.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            children: O.intl.string(O.t.TbnPVp),
                        }),
                    ],
                }),
                children: (0, l.jsxs)(u.DUT, {
                    className: x.selector,
                    onClick: () => {
                        W();
                    },
                    onMouseEnter: () => {
                        B();
                    },
                    children: [
                        (0, l.jsxs)("div", {
                            className: x.iconTreatmentsWrapper,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: a()(x.profile, { [x.underDevelopment]: t.underDevelopment }),
                                    children: [
                                        (0, l.jsx)("img", {
                                            className: x.thumbnail,
                                            alt: "",
                                            src: null == j ? void 0 : j.iconURL,
                                            draggable: !1,
                                        }),
                                        (0, l.jsx)("div", { className: x.insetBorder }),
                                    ],
                                }),
                                T &&
                                    (0, l.jsx)("div", {
                                        className: x.iconCircle,
                                        children: (0, l.jsx)(u.yr3, {
                                            size: "md",
                                            color: "currentColor",
                                            colorClass: x.checkmark,
                                            secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                                        }),
                                    }),
                                I &&
                                    !T &&
                                    (0, l.jsx)("div", {
                                        className: a()([x.iconCircle, x.lockedCircle]),
                                        children: (0, l.jsx)(u.XAi, {
                                            size: "custom",
                                            height: 16,
                                            width: 16,
                                            color: "currentColor",
                                            colorClass: x.lockedIcon,
                                        }),
                                    }),
                                w &&
                                    (0, l.jsx)("div", {
                                        className: a()([x.iconCircle, x.iconBorder]),
                                        children: (0, l.jsx)("div", {
                                            className: a()([x.clockCircle]),
                                            children: (0, l.jsx)(u.O4, {
                                                size: "custom",
                                                height: 16,
                                                width: 16,
                                                color: "currentColor",
                                                colorClass: x.clockIcon,
                                            }),
                                        }),
                                    }),
                                P &&
                                    (0, l.jsx)("div", {
                                        className: x.spinnerWrapper,
                                        children: (0, l.jsx)(u.y$y, {
                                            type: u.y$y.Type.CHASING_DOTS,
                                            animated: !0,
                                            className: x.spinner,
                                        }),
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: x.filterName,
                            children: [
                                (0, l.jsxs)(u.Text, {
                                    variant: "text-xs/medium",
                                    color: t.underDevelopment ? "text-muted" : "text-strong",
                                    children: [t.underDevelopment ? "\uD83D\uDEA7 " : "", K],
                                }),
                                k && !L ? (0, l.jsx)(u.s3U, { size: "xxs" }) : null,
                            ],
                        }),
                    ],
                }),
            }),
            null != M &&
                (0, l.jsx)(c.m, {
                    asContainer: !0,
                    text: O.intl.string(F ? O.t.ItuPbp : O.t["0gtbE8"]),
                    children: (0, l.jsx)(u.DUT, {
                        className: a()([x.hoverButtonCircle, x.previewButton], { [x.visible]: F }),
                        onClick: F ? H : z,
                        "aria-label": O.intl.formatToPlainString(O.t.gDzvjd, { voiceFilterName: K }),
                        children: F
                            ? (0, l.jsx)(u.wFz, {
                                  size: "custom",
                                  height: 16,
                                  width: 16,
                                  color: "white",
                              })
                            : (0, l.jsx)(u.udU, {
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
