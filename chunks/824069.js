var n = t(477900);
t(582128);
var l = t(517352),
    i = t(834730),
    s = t(28863),
    a = t(641436),
    c = t(807098),
    u = t(637706),
    o = t(788883),
    m = t(592455);
t.d(
    r,
    {},
    {
        K: function () {
            let e = (0, a.u)(l.oW.PLAN_SELECT_CARD_BANNER),
                r = (0, c.T)(e?.surface.asset);
            if (null == e || "" === e.surface.body) return null;
            let { surface: t, id: d, promotionId: p, componentType: x } = e,
                h = (0, u.C)(t.helpArticle, "");
            return (0, n.jsxs)("div", {
                className: m.kL,
                children: [
                    (0, n.jsx)(o.A, { componentType: x, componentId: d, promotionId: p }),
                    null != r && (0, n.jsx)("img", { alt: "", className: m.Sl, src: r }),
                    (0, n.jsxs)(i.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        className: m.rf,
                        children: [
                            t.body,
                            null != h &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: ["\xa0", (0, n.jsx)(s.Anchor, { href: h.url, children: h.linkText })],
                                }),
                        ],
                    }),
                ],
            });
        },
    },
);
