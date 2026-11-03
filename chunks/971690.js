e.d(a, { A: () => b });
var l = e(477900),
    i = e(582128),
    t = e(17928),
    c = e(554146),
    d = e(815021),
    n = e(534514),
    r = e(834730),
    o = e(62010),
    m = e(821609),
    x = e(224640),
    u = e(501419),
    h = e(174459),
    j = e(832163),
    v = e(44724),
    N = e(652215),
    p = e(49999),
    A = e(489438);
function b(s) {
    let {
            version: a,
            logo: e,
            backgroundImage: b,
            titles: k,
            subtitle: y,
            features: D,
            buttonText: g,
            applicationId: C,
            onClose: E,
            ...M
        } = s,
        _ = (0, t.bG)([j.A], () => j.A.getGuildIdFromApplicationId(C ?? void 0));
    i.useEffect(() => {
        (h.default.track(N.HAw.OPEN_MODAL, { type: "Social Layer Storefront Announcement Modal", application_id: C }),
            (0, u.$l)(c.M.GAME_SHOP_ANNOUNCEMENT_MODAL, a, { dismissAction: p.i.AUTO_DISMISS }));
    }, [C, a]);
    let L = i.useCallback(() => {
            null != _ && (0, v.X)({ guildId: _ });
        }, [_]),
        f = i.useCallback(() => {
            null != _ && ((0, v.default)({ guildId: _ }), E());
        }, [_, E]);
    return (0, l.jsx)(x.d, {
        ...M,
        onClose: E,
        size: "lg",
        children: (0, l.jsxs)("div", {
            className: A.Qs,
            children: [
                (0, l.jsx)("img", { src: b, alt: "", "aria-hidden": !0, className: A.iL }),
                (0, l.jsx)("div", {
                    className: A.b,
                    children: (0, l.jsx)(d.J, { onClick: E, variant: "overlay-secondary" }),
                }),
                (0, l.jsxs)("div", {
                    className: A.ZK,
                    children: [
                        (0, l.jsx)("img", { src: e, alt: "", className: A.wm }),
                        k.map((s, a) =>
                            (0, l.jsx)(
                                n.D,
                                { variant: "display-md", color: "text-strong", className: A.DD, children: s },
                                a,
                            ),
                        ),
                        (0, l.jsx)(r.E, {
                            variant: "body-sm/medium",
                            color: "text-muted",
                            className: A.VA,
                            children: y,
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: A.qT,
                    children: D.map((s, a) =>
                        (0, l.jsxs)(
                            "div",
                            {
                                className: A.N4,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: A.Lw,
                                        children: [
                                            (0, l.jsx)("img", { src: s.assetUrl, alt: "" }),
                                            null != s.assetLabelText &&
                                                (0, l.jsx)("div", {
                                                    className: A.pl,
                                                    children: (0, l.jsx)(o.E, {
                                                        type: { text: s.assetLabelText },
                                                        variant: "success",
                                                    }),
                                                }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: A.kh,
                                        children: [
                                            (0, l.jsx)(n.D, {
                                                variant: "heading-sm/semibold",
                                                color: "text-strong",
                                                children: s.title,
                                            }),
                                            (0, l.jsx)(r.E, {
                                                variant: "body-sm/medium",
                                                color: "text-muted",
                                                children: s.subtitle,
                                            }),
                                        ],
                                    }),
                                ],
                            },
                            a,
                        ),
                    ),
                }),
                (0, l.jsx)("div", {
                    className: A.UD,
                    children: (0, l.jsx)(m.$, { variant: "primary", text: g, onClick: f, onMouseDown: L }),
                }),
            ],
        }),
    });
}
