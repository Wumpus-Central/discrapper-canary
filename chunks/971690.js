a.d(e, { A: () => b });
var l = a(477900),
    i = a(582128),
    t = a(17928),
    c = a(554146),
    d = a(815021),
    n = a(534514),
    r = a(834730),
    m = a(62010),
    o = a(821609),
    x = a(224640),
    u = a(501419),
    h = a(174459),
    j = a(832163),
    v = a(44724),
    N = a(652215),
    p = a(49999),
    A = a(489438);
function b(s) {
    let {
            version: e,
            logo: a,
            backgroundImage: b,
            titles: k,
            subtitle: D,
            features: g,
            buttonText: C,
            applicationId: E,
            onClose: M,
            ..._
        } = s,
        y = (0, t.bG)([j.A], () => j.A.getGuildIdFromApplicationId(E ?? void 0));
    i.useEffect(() => {
        (h.default.track(N.HAw.OPEN_MODAL, { type: "Social Layer Storefront Announcement Modal", application_id: E }),
            (0, u.$l)(c.M.GAME_SHOP_ANNOUNCEMENT_MODAL, e, { dismissAction: p.i.AUTO_DISMISS }));
    }, [E, e]);
    let L = i.useCallback(() => {
            null != y && (0, v.X)({ guildId: y });
        }, [y]),
        f = i.useCallback(() => {
            null != y && ((0, v.default)({ guildId: y }), M());
        }, [y, M]);
    return (0, l.jsx)(x.d, {
        ..._,
        onClose: M,
        size: "lg",
        children: (0, l.jsxs)("div", {
            className: A.Qs,
            children: [
                (0, l.jsx)("img", { src: b, alt: "", "aria-hidden": !0, className: A.iL }),
                (0, l.jsx)("div", {
                    className: A.b,
                    children: (0, l.jsx)(d.J, { onClick: M, variant: "overlay-secondary" }),
                }),
                (0, l.jsxs)("div", {
                    className: A.ZK,
                    children: [
                        (0, l.jsx)("img", { src: a, alt: "", className: A.wm }),
                        k.map((s, e) =>
                            (0, l.jsx)(
                                n.D,
                                { variant: "display-md", color: "text-strong", className: A.DD, children: s },
                                e,
                            ),
                        ),
                        (0, l.jsx)(r.E, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            className: A.VA,
                            children: D,
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: A.qT,
                    children: g.map((s, e) =>
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
                                                    children: (0, l.jsx)(m.E, {
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
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: s.title,
                                            }),
                                            (0, l.jsx)(r.E, {
                                                variant: "text-sm/medium",
                                                color: "text-muted",
                                                children: s.subtitle,
                                            }),
                                        ],
                                    }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
                (0, l.jsx)("div", {
                    className: A.UD,
                    children: (0, l.jsx)(o.$, { variant: "primary", text: C, onClick: f, onMouseDown: L }),
                }),
            ],
        }),
    });
}
