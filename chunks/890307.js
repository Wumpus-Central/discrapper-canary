n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(124347),
    c = n(785717),
    u = n(502762),
    d = n(388032),
    f = n(949048);
function p(e) {
    let { previewData: t, className: n, onClick: a } = e,
        { trackUserProfileAction: p } = (0, c.KZ)(),
        _ = i.useRef(!1);
    return (
        i.useEffect(() => {
            _.current ||
                (p({
                    action: "VIEW_APPLICATION_WIDGET_PREVIEW",
                    applicationId: t.application.id,
                }),
                (_.current = !0));
        }, [p, t.application.id]),
        (0, r.jsx)(s.kL8, {
            onClick: () => {
                p({
                    action: "PRESS_APPLICATION_WIDGET_PREVIEW",
                    applicationId: t.application.id,
                }),
                    null == a || a();
            },
            "aria-label": t.application.name,
            children: (0, r.jsxs)(u.Z.Overlay, {
                className: o()(f.container, n),
                children: [
                    (0, r.jsxs)(s.Kqy, {
                        gap: 8,
                        padding: 8,
                        className: f.content,
                        children: [
                            (0, r.jsxs)(s.Kqy, {
                                direction: "horizontal",
                                gap: 4,
                                children: [
                                    (0, r.jsx)(l.ZP, {
                                        width: 16,
                                        height: 16,
                                        src: t.application.icon,
                                        className: f.applicationIcon,
                                    }),
                                    (0, r.jsx)(s.xvT, {
                                        variant: "text-xs/medium",
                                        children: t.application.name,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: f.textContent,
                                children: [
                                    (0, r.jsxs)(s.X6q, {
                                        variant: "heading-sm/semibold",
                                        lineClamp: 2,
                                        children: [
                                            t.season,
                                            ": ",
                                            t.currentRankName,
                                            " ",
                                            null != t.currentRankImage &&
                                                (0, r.jsx)("div", {
                                                    className: f.rankImage,
                                                    children: (0, r.jsx)(l.ZP, {
                                                        src: t.currentRankImage.proxyUrl,
                                                        width: t.currentRankImage.width,
                                                        height: t.currentRankImage.height,
                                                        responsive: !0,
                                                    }),
                                                }),
                                        ],
                                    }),
                                    (0, r.jsx)(s.Avr, {
                                        textVariant: "text-xs/normal",
                                        text: d.intl.string(d.t.qI8ZP6),
                                        variant: "secondary",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: f.featuredCharacterImageContainer,
                        children: (0, r.jsx)(l.ZP, {
                            src: t.featuredCharacterImage.proxyUrl,
                            width: t.featuredCharacterImage.width,
                            height: t.featuredCharacterImage.height,
                            responsive: !0,
                            className: f.featuredCharacterImage,
                        }),
                    }),
                ],
            }),
        })
    );
}
