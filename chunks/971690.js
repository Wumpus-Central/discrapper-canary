e.d(a, { A: () => k });
var l = e(477900),
    i = e(582128),
    t = e(17928),
    c = e(554146),
    d = e(661531),
    r = e(815021),
    n = e(297264),
    o = e(834730),
    m = e(812993),
    x = e(821609),
    u = e(224640),
    h = e(367727),
    j = e(174459),
    N = e(832163),
    p = e(44724),
    v = e(652215),
    A = e(49999),
    b = e(743215);
function k(s) {
    let {
            version: a,
            logo: e,
            backgroundImage: k,
            titles: D,
            subtitle: S,
            features: _,
            buttonText: g,
            applicationId: C,
            onClose: E,
            ...L
        } = s,
        M = (0, t.bG)([N.A], () => N.A.getGuildIdFromApplicationId(C ?? void 0));
    i.useEffect(() => {
        j.default.track(v.HAw.OPEN_MODAL, { type: "Social Layer Storefront Announcement Modal", application_id: C }),
            (0, h.$l)(c.M.GAME_SHOP_ANNOUNCEMENT_MODAL, a, { dismissAction: A.i.AUTO_DISMISS });
    }, [C, a]);
    let T = i.useCallback(() => {
            null != M && (0, p.X)({ guildId: M });
        }, [M]),
        O = i.useCallback(() => {
            null != M && ((0, p.default)({ guildId: M }), E());
        }, [M, E]);
    return (0, l.jsx)(u.d, {
        ...L,
        onClose: E,
        size: "lg",
        children: (0, l.jsxs)("div", {
            className: b.Qs,
            children: [
                (0, l.jsx)("img", { src: k, alt: "", "aria-hidden": !0, className: b.iL }),
                (0, l.jsx)("div", {
                    className: b.b,
                    children: (0, l.jsx)(r.J, { onClick: E, variant: "overlay-secondary" }),
                }),
                (0, l.jsxs)("div", {
                    className: b.ZK,
                    children: [
                        (0, l.jsx)("img", { src: e, alt: "", className: b.wm }),
                        D.map((s, a) =>
                            (0, l.jsx)(
                                n.D,
                                { variant: "display-md", color: "text-strong", className: b.DD, children: s },
                                a,
                            ),
                        ),
                        (0, l.jsx)(o.E, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            className: b.VA,
                            children: S,
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: b.qT,
                    children: _.map((s, a) =>
                        (0, l.jsxs)(
                            "div",
                            {
                                className: b.N4,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: b.Lw,
                                        children: [
                                            (0, l.jsx)("img", { src: s.assetUrl, alt: "" }),
                                            null != s.assetLabelText &&
                                                (0, l.jsx)(m.Lp, {
                                                    text: s.assetLabelText,
                                                    color: d.A.colors.STATUS_POSITIVE.css,
                                                    className: b.pl,
                                                }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: b.kh,
                                        children: [
                                            (0, l.jsx)(n.D, {
                                                variant: "heading-md/bold",
                                                color: "text-strong",
                                                children: s.title,
                                            }),
                                            (0, l.jsx)(o.E, {
                                                variant: "text-sm/medium",
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
                    className: b.UD,
                    children: (0, l.jsx)(x.$, { variant: "primary", text: g, onClick: O, onMouseDown: T }),
                }),
            ],
        }),
    });
}
