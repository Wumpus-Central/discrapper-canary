n.d(t, {
    A: () => b,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n(732955),
    c = n(397927),
    u = n(241524),
    d = n(607470),
    f = n(954571),
    p = n(676279),
    _ = n(57978),
    h = n(652215),
    m = n(693591),
    g = n(847652);
let E = 1140,
    y = (e) => {
        let { descriptionCta: t, onClick: n, debouncedOnClickAnalytics: i } = e,
            a = () => {
                i(), n();
            };
        return (0, r.jsx)("div", {
            className: g.bentoBoxButton,
            children: (0, r.jsx)(l.$nd, {
                variant: "secondary",
                onClick: a,
                text: t,
            }),
        });
    },
    b = (e) => {
        let {
                name: t,
                title: n,
                description: a,
                descriptionCta: b,
                previewImage: O,
                videoUrl: v,
                shouldLoadVideo: A,
                index: I,
                customVideoStyle: S,
                isReducedMotion: T,
                onClick: C,
                badgeText: N,
                badgeVariant: w = "gradient",
                size: R,
                backgroundVideoUrl: P,
                previewImageStyle: D = _.Tb.CONTAINED,
            } = e,
            x = (0, p.TM)(),
            L = i.useRef(null),
            j = i.useRef(0),
            M = (0, u.A)("(min-width: ".concat(E, "px)")),
            k = D === _.Tb.OVERLAY && (R !== _.A0.LARGE || !M),
            U = R === _.A0.LARGE && M && D === _.Tb.OVERLAY,
            G = null != P && M && R === _.A0.LARGE,
            V = i.useMemo(
                () =>
                    (0, o.debounce)(() => {
                        f.default.track(h.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, {
                            box_type: (0, o.snakeCase)(t),
                        });
                    }, 800),
                [t],
            ),
            F = () => {
                null == L.current || T || ((L.current.currentTime = j.current), L.current.play());
            },
            B = () => {
                null == L.current || T || ((j.current = L.current.currentTime), L.current.pause());
            },
            H = R === _.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold",
            Y = () =>
                null == N
                    ? null
                    : "gradient" === w
                      ? (0, r.jsx)("div", {
                            className: g.badgeContainer,
                            children: (0, r.jsx)("div", {
                                className: g.badge,
                                children: (0, r.jsx)(c.Heading, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: N,
                                }),
                            }),
                        })
                      : (0, r.jsx)("div", {
                            className: g.badgeContainer,
                            children: (0, r.jsx)(l.Exy, {
                                type: {
                                    text: N,
                                },
                                variant: w,
                            }),
                        }),
            W = () =>
                (0, r.jsxs)("div", {
                    className: s()(g.textBox, g["".concat(R)], U && g.overlayTextBox),
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                Y(),
                                (0, r.jsx)(c.Heading, {
                                    variant: H,
                                    color: "text-strong",
                                    className: g.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            className: g.description,
                            children: a,
                        }),
                        null != b &&
                            null != C &&
                            (0, r.jsx)(y, {
                                descriptionCta: b,
                                onClick: C,
                                debouncedOnClickAnalytics: V,
                            }),
                    ],
                }),
            K = () =>
                (0, r.jsx)("div", {
                    className: s()(g.boxArtContainer, g["".concat(R)]),
                    children: (0, r.jsx)(
                        d.A,
                        {
                            playsInline: !0,
                            preload: A ? "auto" : "none",
                            muted: !0,
                            poster: O,
                            loop: !0,
                            className: s()(U ? g.overlayImage : g.boxVideo, {
                                [S]: null != S,
                            }),
                            ref: L,
                            children: (0, r.jsx)("source", {
                                src: v,
                                type: x ? m.a.MP4 : m.a.WEBM,
                            }),
                        },
                        v,
                    ),
                }),
            z = I % 2 != 0,
            q = () =>
                z
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(W, {}), (0, r.jsx)(K, {})],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(K, {}), (0, r.jsx)(W, {})],
                      });
        return (0, r.jsxs)(c.hLv, {
            id: t,
            className: s()(
                g.backgroundColor,
                g.boxContainer,
                g["".concat(R)],
                g.gradientBackground,
                k && g.overlayImageMode,
                U && g.overlayMode,
            ),
            onMouseEnter: F,
            onFocus: F,
            onBlur: B,
            onMouseLeave: B,
            color: "purple",
            children: [
                G &&
                    (0, r.jsx)("div", {
                        className: g.backgroundVideoContainer,
                        children: (0, r.jsx)(d.A, {
                            muted: !0,
                            autoPlay: !T,
                            playsInline: !0,
                            loop: !0,
                            preload: A ? "auto" : "none",
                            className: g.backgroundVideo,
                            src: P,
                        }),
                    }),
                (0, r.jsx)(q, {}),
            ],
        });
    };
