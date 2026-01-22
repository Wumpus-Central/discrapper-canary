n.d(t, {
    A: () => y,
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
    b = (e) => {
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
    y = (e) => {
        let {
                name: t,
                title: n,
                description: a,
                descriptionCta: y,
                previewImage: O,
                videoUrl: A,
                shouldLoadVideo: v,
                index: S,
                customVideoStyle: I,
                isReducedMotion: T,
                onClick: C,
                badgeText: N,
                badgeVariant: R = "gradient",
                size: w,
                backgroundVideoUrl: P,
                previewImageStyle: D = _.Tb.CONTAINED,
            } = e,
            x = (0, p.TM)(),
            L = i.useRef(null),
            j = i.useRef(0),
            M = (0, u.A)("(min-width: ".concat(E, "px)")),
            k = D === _.Tb.OVERLAY && (w !== _.A0.LARGE || !M),
            U = w === _.A0.LARGE && M && D === _.Tb.OVERLAY,
            G = null != P && M && w === _.A0.LARGE,
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
            H = w === _.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold",
            Y = () =>
                null == N
                    ? null
                    : "gradient" === R
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
                                variant: R,
                            }),
                        }),
            W = () =>
                (0, r.jsxs)("div", {
                    className: s()(g.textBox, g["".concat(w)], U && g.overlayTextBox),
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
                        null != y &&
                            null != C &&
                            (0, r.jsx)(b, {
                                descriptionCta: y,
                                onClick: C,
                                debouncedOnClickAnalytics: V,
                            }),
                    ],
                }),
            K = () =>
                (0, r.jsx)("div", {
                    className: s()(g.boxArtContainer, g["".concat(w)]),
                    children: (0, r.jsx)(
                        d.A,
                        {
                            playsInline: !0,
                            preload: v ? "auto" : "none",
                            muted: !0,
                            poster: O,
                            loop: !0,
                            className: s()(U ? g.overlayImage : g.boxVideo, {
                                [I]: null != I,
                            }),
                            ref: L,
                            children: (0, r.jsx)("source", {
                                src: A,
                                type: x ? m.a.MP4 : m.a.WEBM,
                            }),
                        },
                        A,
                    ),
                }),
            z = S % 2 != 0,
            q = () =>
                z
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(W, {}), (0, r.jsx)(K, {})],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(K, {}), (0, r.jsx)(W, {})],
                      });
        return (0, r.jsxs)(c.hLv, {
            className: s()(
                g.backgroundColor,
                g.boxContainer,
                g["".concat(w)],
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
                            preload: v ? "auto" : "none",
                            className: g.backgroundVideo,
                            src: P,
                        }),
                    }),
                (0, r.jsx)(q, {}),
            ],
        });
    };
