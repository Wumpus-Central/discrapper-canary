n.d(t, { I: () => N });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(827734),
    c = n(990078),
    d = n(397927),
    u = n(336060),
    h = n(584014),
    m = n(954571),
    A = n(837921),
    p = n(504292),
    g = n(656088),
    f = n(253541),
    _ = n(971778),
    E = n(774030),
    C = n(494783),
    x = n(652215),
    S = n(257645),
    T = n(985018),
    I = n(854147);
let N = (e) => {
    let { voiceFilter: t, hasNitro: n, analyticsContext: a } = e,
        { activeVoice: N, mostRecentlyRequestedVoiceId: v } = (0, C.f)(),
        y = (0, E.e)(t.id),
        b = t.id === N,
        R = !t.available && !t.temporarilyAvailable,
        j = t.temporarilyAvailable && !n && !b,
        M = !b && t.id === v,
        [D, O] = l.useState(!1);
    l.useEffect(() => {
        let e = M ? setTimeout(() => O(M), 200) : void 0;
        return () => {
            clearTimeout(e), O(!1);
        };
    }, [M]);
    let L = (0, f.B2)({
            location: "voice_filter_item",
            autoTrackExposure: !0,
            disable: !A.Ay.canCheckVoiceFilterFilesExist(),
        }),
        P = (0, r.bG)([_.A], () => _.A.isVoiceFilterDownloaded(t.id), [t]),
        w = y?.previewSoundURLs,
        [k, U] = l.useState(0),
        {
            isPlaying: G,
            playSound: F,
            stopSound: H,
            preloadSound: B,
        } = (0, h.A)(null != w ? w[k] : null, { soundId: t.id }),
        V = I[t.styleKey],
        W = l.useCallback(() => {
            n || !R
                ? ((0, p.OR)(N === t.id ? null : t.id, a),
                  j &&
                      m.default.track(x.HAw.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, {
                          voice_filter_id: t.id,
                          ...(0, g.A)(a),
                      }))
                : (0, u.n)();
        }, [n, R, N, t.id, a, j]),
        K = l.useCallback(() => {
            m.default.track(x.HAw.VOICE_FILTER_PREVIEW_PLAYED, { voice_filter_id: t.id, ...(0, g.A)(a) }),
                F({ volume: 0.5, outputChannel: S.a.VOICE }),
                (0.25 > Math.random() || k > 0) && null != w && U((e) => (e + 1) % w.length);
        }, [a, F, k, w, t.id]),
        z = null != y ? T.intl.string(y.name) : "";
    return (0, i.jsxs)("div", {
        className: s()(I.filter, V, { [I.selected]: b, [I.locked]: R && !b }),
        children: [
            (0, i.jsx)(c.m, {
                asContainer: !0,
                shouldShow: L && !P,
                "aria-label": T.intl.string(T.t.SQ7qMG),
                __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                    className: I.downloadRequiredContent,
                    children: [
                        (0, i.jsx)(d.Text, { variant: "text-sm/medium", children: T.intl.string(T.t.SQ7qMG) }),
                        (0, i.jsx)(d.Text, { variant: "text-xs/normal", children: T.intl.string(T.t.TbnPVp) }),
                    ],
                }),
                children: (0, i.jsxs)(d.DUT, {
                    className: I.selector,
                    onClick: () => {
                        W();
                    },
                    onMouseEnter: () => {
                        B();
                    },
                    children: [
                        (0, i.jsxs)("div", {
                            className: I.iconTreatmentsWrapper,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: s()(I.profile, { [I.underDevelopment]: t.underDevelopment }),
                                    children: [
                                        (0, i.jsx)("img", {
                                            className: I.thumbnail,
                                            alt: "",
                                            src: y?.iconURL,
                                            draggable: !1,
                                        }),
                                        (0, i.jsx)("div", { className: I.insetBorder }),
                                    ],
                                }),
                                b &&
                                    (0, i.jsx)("div", {
                                        className: I.iconCircle,
                                        children: (0, i.jsx)(d.yr3, {
                                            size: "md",
                                            color: "currentColor",
                                            colorClass: I.checkmark,
                                            secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                                        }),
                                    }),
                                R &&
                                    !b &&
                                    (0, i.jsx)("div", {
                                        className: s()([I.iconCircle, I.lockedCircle]),
                                        children: (0, i.jsx)(d.XAi, {
                                            size: "custom",
                                            height: 16,
                                            width: 16,
                                            color: "currentColor",
                                            colorClass: I.lockedIcon,
                                        }),
                                    }),
                                j &&
                                    (0, i.jsx)("div", {
                                        className: s()([I.iconCircle, I.iconBorder]),
                                        children: (0, i.jsx)("div", {
                                            className: s()([I.clockCircle]),
                                            children: (0, i.jsx)(d.O4, {
                                                size: "custom",
                                                height: 16,
                                                width: 16,
                                                color: "currentColor",
                                                colorClass: I.clockIcon,
                                            }),
                                        }),
                                    }),
                                D &&
                                    (0, i.jsx)("div", {
                                        className: I.spinnerWrapper,
                                        children: (0, i.jsx)(d.y$y, {
                                            type: d.y$y.Type.CHASING_DOTS,
                                            animated: !0,
                                            className: I.spinner,
                                        }),
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: I.filterName,
                            children: [
                                (0, i.jsxs)(d.Text, {
                                    variant: "text-xs/medium",
                                    color: t.underDevelopment ? "text-muted" : "text-strong",
                                    children: [t.underDevelopment ? "\uD83D\uDEA7 " : "", z],
                                }),
                                L && !P ? (0, i.jsx)(d.s3U, { size: "xxs" }) : null,
                            ],
                        }),
                    ],
                }),
            }),
            null != w &&
                (0, i.jsx)(c.m, {
                    asContainer: !0,
                    text: T.intl.string(G ? T.t.ItuPbp : T.t["0gtbE8"]),
                    children: (0, i.jsx)(d.DUT, {
                        className: s()([I.hoverButtonCircle, I.previewButton], { [I.visible]: G }),
                        onClick: G ? H : K,
                        "aria-label": T.intl.formatToPlainString(T.t.gDzvjd, { voiceFilterName: z }),
                        children: G
                            ? (0, i.jsx)(d.wFz, { size: "custom", height: 16, width: 16, color: "white" })
                            : (0, i.jsx)(d.udU, { size: "custom", height: 16, width: 16, color: "white" }),
                    }),
                }),
        ],
    });
};
