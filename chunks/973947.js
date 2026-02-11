n.d(t, { I: () => x });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(827734),
    o = n(990078),
    c = n(397927),
    d = n(336060),
    u = n(584014),
    h = n(954571),
    m = n(504292),
    A = n(656088),
    p = n(774030),
    g = n(494783),
    f = n(652215),
    _ = n(257645),
    E = n(985018),
    C = n(854147);
let x = (e) => {
    let { voiceFilter: t, hasNitro: n, analyticsContext: s } = e,
        { activeVoice: x, mostRecentlyRequestedVoiceId: S } = (0, g.f)(),
        T = (0, p.e)(t.id),
        N = t.id === x,
        I = !t.available && !t.temporarilyAvailable,
        y = t.temporarilyAvailable && !n && !N,
        v = !N && t.id === S,
        [b, j] = l.useState(!1);
    l.useEffect(() => {
        let e = v ? setTimeout(() => j(v), 200) : void 0;
        return () => {
            clearTimeout(e), j(!1);
        };
    }, [v]);
    let R = T?.previewSoundURLs,
        [M, D] = l.useState(0),
        {
            isPlaying: O,
            playSound: L,
            stopSound: P,
            preloadSound: w,
        } = (0, u.A)(null != R ? R[M] : null, { soundId: t.id }),
        k = C[t.styleKey],
        U = l.useCallback(() => {
            n || !I
                ? ((0, m.O)(x === t.id ? null : t.id, s),
                  y &&
                      h.default.track(f.HAw.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, {
                          voice_filter_id: t.id,
                          ...(0, A.A)(s),
                      }))
                : (0, d.n)();
        }, [n, I, x, t.id, s, y]),
        G = l.useCallback(() => {
            h.default.track(f.HAw.VOICE_FILTER_PREVIEW_PLAYED, { voice_filter_id: t.id, ...(0, A.A)(s) }),
                L({ volume: 0.5, outputChannel: _.a.VOICE }),
                (0.25 > Math.random() || M > 0) && null != R && D((e) => (e + 1) % R.length);
        }, [s, L, M, R, t.id]),
        F = null != T ? E.intl.string(T.name) : "";
    return (0, i.jsxs)("div", {
        className: a()(C.filter, k, { [C.selected]: N, [C.locked]: I && !N }),
        children: [
            (0, i.jsxs)(c.DUT, {
                className: C.selector,
                onClick: () => {
                    U();
                },
                onMouseEnter: () => {
                    w();
                },
                children: [
                    (0, i.jsxs)("div", {
                        className: C.iconTreatmentsWrapper,
                        children: [
                            (0, i.jsxs)("div", {
                                className: a()(C.profile, { [C.underDevelopment]: t.underDevelopment }),
                                children: [
                                    (0, i.jsx)("img", {
                                        className: C.thumbnail,
                                        alt: "",
                                        src: T?.iconURL,
                                        draggable: !1,
                                    }),
                                    (0, i.jsx)("div", { className: C.insetBorder }),
                                ],
                            }),
                            N &&
                                (0, i.jsx)("div", {
                                    className: C.iconCircle,
                                    children: (0, i.jsx)(c.yr3, {
                                        size: "md",
                                        color: "currentColor",
                                        colorClass: C.checkmark,
                                        secondaryColor: r.A.unsafe_rawColors.WHITE.css,
                                    }),
                                }),
                            I &&
                                !N &&
                                (0, i.jsx)("div", {
                                    className: a()([C.iconCircle, C.lockedCircle]),
                                    children: (0, i.jsx)(c.XAi, {
                                        size: "custom",
                                        height: 16,
                                        width: 16,
                                        color: "currentColor",
                                        colorClass: C.lockedIcon,
                                    }),
                                }),
                            y &&
                                (0, i.jsx)("div", {
                                    className: a()([C.iconCircle, C.iconBorder]),
                                    children: (0, i.jsx)("div", {
                                        className: a()([C.clockCircle]),
                                        children: (0, i.jsx)(c.O4, {
                                            size: "custom",
                                            height: 16,
                                            width: 16,
                                            color: "currentColor",
                                            colorClass: C.clockIcon,
                                        }),
                                    }),
                                }),
                            b &&
                                (0, i.jsx)("div", {
                                    className: C.spinnerWrapper,
                                    children: (0, i.jsx)(c.y$y, {
                                        type: c.y$y.Type.CHASING_DOTS,
                                        animated: !0,
                                        className: C.spinner,
                                    }),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: C.filterName,
                        children: (0, i.jsxs)(c.Text, {
                            variant: "text-xs/medium",
                            color: t.underDevelopment ? "text-muted" : "text-strong",
                            children: [t.underDevelopment ? "\uD83D\uDEA7 " : "", F],
                        }),
                    }),
                ],
            }),
            null != R &&
                (0, i.jsx)(o.m, {
                    asContainer: !0,
                    text: E.intl.string(O ? E.t.ItuPbp : E.t["0gtbE8"]),
                    children: (0, i.jsx)(c.DUT, {
                        className: a()([C.hoverButtonCircle, C.previewButton], { [C.visible]: O }),
                        onClick: O ? P : G,
                        "aria-label": E.intl.formatToPlainString(E.t.gDzvjd, { voiceFilterName: F }),
                        children: O
                            ? (0, i.jsx)(c.wFz, { size: "custom", height: 16, width: 16, color: "white" })
                            : (0, i.jsx)(c.udU, { size: "custom", height: 16, width: 16, color: "white" }),
                    }),
                }),
        ],
    });
};
