n.d(t, {
    A: () => b,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(735438),
    o = n(732955),
    c = n(397927),
    d = n(241524),
    u = n(607470),
    _ = n(954571),
    p = n(676279),
    m = n(57978),
    g = n(652215),
    A = n(693591),
    f = n(847652);
let h = (e) => {
        let { descriptionCta: t, onClick: n, debouncedOnClickAnalytics: i } = e;
        return (0, r.jsx)("div", {
            className: f.bentoBoxButton,
            children: (0, r.jsx)(o.$nd, {
                variant: "secondary",
                onClick: () => {
                    i(), n();
                },
                text: t,
            }),
        });
    },
    b = (e) => {
        let {
                name: t,
                title: n,
                description: l,
                descriptionCta: b,
                previewImage: E,
                videoUrl: x,
                shouldLoadVideo: O,
                index: C,
                customVideoStyle: I,
                isReducedMotion: T,
                onClick: S,
                badgeText: j,
                badgeVariant: v = "gradient",
                size: N,
                backgroundVideoUrl: y,
                previewImageStyle: P = m.Tb.CONTAINED,
            } = e,
            R = (0, p.TM)(),
            D = i.useRef(null),
            w = i.useRef(0),
            L = (0, d.A)("(min-width: ".concat(1140, "px)")),
            M = P === m.Tb.OVERLAY && (N !== m.A0.LARGE || !L),
            U = N === m.A0.LARGE && L && P === m.Tb.OVERLAY,
            G = null != y && L && N === m.A0.LARGE,
            k = i.useMemo(
                () =>
                    (0, a.debounce)(() => {
                        _.default.track(g.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, {
                            box_type: (0, a.snakeCase)(t),
                        });
                    }, 800),
                [t],
            ),
            V = () => {
                null == D.current || T || ((D.current.currentTime = w.current), D.current.play());
            },
            H = () => {
                null == D.current || T || ((w.current = D.current.currentTime), D.current.pause());
            },
            B = N === m.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold",
            F = () =>
                (0, r.jsxs)("div", {
                    className: s()(f.textBox, f["".concat(N)], U && f.overlayTextBox),
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                null == j
                                    ? null
                                    : "gradient" === v
                                      ? (0, r.jsx)("div", {
                                            className: f.badgeContainer,
                                            children: (0, r.jsx)("div", {
                                                className: f.badge,
                                                children: (0, r.jsx)(c.Heading, {
                                                    variant: "eyebrow",
                                                    color: "always-white",
                                                    children: j,
                                                }),
                                            }),
                                        })
                                      : (0, r.jsx)("div", {
                                            className: f.badgeContainer,
                                            children: (0, r.jsx)(o.Exy, {
                                                type: {
                                                    text: j,
                                                },
                                                variant: v,
                                            }),
                                        }),
                                (0, r.jsx)(c.Heading, {
                                    variant: B,
                                    color: "text-strong",
                                    className: f.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            className: f.description,
                            children: l,
                        }),
                        null != b &&
                            null != S &&
                            (0, r.jsx)(h, {
                                descriptionCta: b,
                                onClick: S,
                                debouncedOnClickAnalytics: k,
                            }),
                    ],
                }),
            Y = () =>
                (0, r.jsx)("div", {
                    className: s()(f.boxArtContainer, f["".concat(N)]),
                    children: (0, r.jsx)(
                        u.A,
                        {
                            playsInline: !0,
                            preload: O ? "auto" : "none",
                            muted: !0,
                            poster: E,
                            loop: !0,
                            className: s()(U ? f.overlayImage : f.boxVideo, {
                                [I]: null != I,
                            }),
                            ref: D,
                            children: (0, r.jsx)("source", {
                                src: x,
                                type: R ? A.a.MP4 : A.a.WEBM,
                            }),
                        },
                        x,
                    ),
                }),
            W = C % 2 != 0;
        return (0, r.jsxs)(c.hLv, {
            id: t,
            className: s()(
                f.backgroundColor,
                f.boxContainer,
                f["".concat(N)],
                f.gradientBackground,
                M && f.overlayImageMode,
                U && f.overlayMode,
            ),
            onMouseEnter: V,
            onFocus: V,
            onBlur: H,
            onMouseLeave: H,
            color: "purple",
            children: [
                G &&
                    (0, r.jsx)("div", {
                        className: f.backgroundVideoContainer,
                        children: (0, r.jsx)(u.A, {
                            muted: !0,
                            autoPlay: !T,
                            playsInline: !0,
                            loop: !0,
                            preload: O ? "auto" : "none",
                            className: f.backgroundVideo,
                            src: y,
                        }),
                    }),
                (0, r.jsx)(
                    () =>
                        W
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(F, {}), (0, r.jsx)(Y, {})],
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(Y, {}), (0, r.jsx)(F, {})],
                              }),
                    {},
                ),
            ],
        });
    };
