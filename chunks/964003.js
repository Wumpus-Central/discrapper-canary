n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(735438),
    o = n(732955),
    c = n(397927),
    d = n(241524),
    u = n(607470),
    _ = n(954571),
    m = n(676279),
    A = n(57978),
    g = n(652215),
    E = n(693591),
    h = n(847652);
let p = (e) => {
        let { descriptionCta: t, onClick: n, debouncedOnClickAnalytics: s } = e;
        return (0, i.jsx)("div", {
            className: h.bentoBoxButton,
            children: (0, i.jsx)(o.$nd, {
                variant: "secondary",
                onClick: () => {
                    s(), n();
                },
                text: t,
            }),
        });
    },
    C = (e) => {
        let {
                name: t,
                title: n,
                description: r,
                descriptionCta: C,
                previewImage: x,
                videoUrl: T,
                shouldLoadVideo: I,
                index: S,
                customVideoStyle: f,
                isReducedMotion: N,
                onClick: b,
                badgeText: R,
                badgeVariant: v = "gradient",
                size: O,
                backgroundVideoUrl: j,
                previewImageStyle: P = A.Tb.CONTAINED,
            } = e,
            y = (0, m.TM)(),
            L = s.useRef(null),
            D = s.useRef(0),
            M = (0, d.A)("(min-width: 1140px)"),
            G = P === A.Tb.OVERLAY && (O !== A.A0.LARGE || !M),
            U = O === A.A0.LARGE && M && P === A.Tb.OVERLAY,
            k = null != j && M && O === A.A0.LARGE,
            B = s.useMemo(
                () =>
                    (0, l.debounce)(() => {
                        _.default.track(g.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                    }, 800),
                [t],
            ),
            w = () => {
                null == L.current || N || ((L.current.currentTime = D.current), L.current.play());
            },
            H = () => {
                null == L.current || N || ((D.current = L.current.currentTime), L.current.pause());
            },
            V = O === A.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold",
            F = () =>
                (0, i.jsxs)("div", {
                    className: a()(h.textBox, h[`${O}`], U && h.overlayTextBox),
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                null == R
                                    ? null
                                    : "gradient" === v
                                      ? (0, i.jsx)("div", {
                                            className: h.badgeContainer,
                                            children: (0, i.jsx)("div", {
                                                className: h.badge,
                                                children: (0, i.jsx)(c.Heading, {
                                                    variant: "eyebrow",
                                                    color: "always-white",
                                                    children: R,
                                                }),
                                            }),
                                        })
                                      : (0, i.jsx)("div", {
                                            className: h.badgeContainer,
                                            children: (0, i.jsx)(o.Exy, { type: { text: R }, variant: v }),
                                        }),
                                (0, i.jsx)(c.Heading, {
                                    variant: V,
                                    color: "text-strong",
                                    className: h.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            className: h.description,
                            children: r,
                        }),
                        null != C &&
                            null != b &&
                            (0, i.jsx)(p, { descriptionCta: C, onClick: b, debouncedOnClickAnalytics: B }),
                    ],
                }),
            Y = () =>
                (0, i.jsx)("div", {
                    className: a()(h.boxArtContainer, h[`${O}`]),
                    children: (0, i.jsx)(
                        u.A,
                        {
                            playsInline: !0,
                            preload: I ? "auto" : "none",
                            muted: !0,
                            poster: x,
                            loop: !0,
                            className: a()(U ? h.overlayImage : h.boxVideo, { [f]: null != f }),
                            ref: L,
                            children: (0, i.jsx)("source", { src: T, type: y ? E.a.MP4 : E.a.WEBM }),
                        },
                        T,
                    ),
                }),
            W = S % 2 != 0;
        return (0, i.jsxs)(c.hLv, {
            id: t,
            className: a()(
                h.backgroundColor,
                h.boxContainer,
                h[`${O}`],
                h.gradientBackground,
                G && h.overlayImageMode,
                U && h.overlayMode,
            ),
            onMouseEnter: w,
            onFocus: w,
            onBlur: H,
            onMouseLeave: H,
            color: "purple",
            children: [
                k &&
                    (0, i.jsx)("div", {
                        className: h.backgroundVideoContainer,
                        children: (0, i.jsx)(u.A, {
                            muted: !0,
                            autoPlay: !N,
                            playsInline: !0,
                            loop: !0,
                            preload: I ? "auto" : "none",
                            className: h.backgroundVideo,
                            src: j,
                        }),
                    }),
                (0, i.jsx)(
                    () =>
                        W
                            ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(F, {}), (0, i.jsx)(Y, {})] })
                            : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(Y, {}), (0, i.jsx)(F, {})] }),
                    {},
                ),
            ],
        });
    };
