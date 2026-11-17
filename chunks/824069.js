var r = n(477900);
n(582128);
var i = n(517352),
    l = n(834730),
    a = n(28863),
    s = n(641436),
    o = n(807098),
    c = n(637706),
    u = n(788883),
    m = n(592455);
n.d(
    t,
    {},
    {
        K: function () {
            let e = (0, s.u)(i.oW.PLAN_SELECT_CARD_BANNER),
                t = (0, o.T)(e?.surface.asset);
            if (null == e || "" === e.surface.body) return null;
            let { surface: n, id: d, promotionId: g, componentType: I } = e,
                x = (0, c.C)(n.helpArticle, "");
            return (0, r.jsxs)("div", {
                className: m.kL,
                children: [
                    (0, r.jsx)(u.A, { componentType: I, componentId: d, promotionId: g }),
                    null != t && (0, r.jsx)("img", { alt: "", className: m.Sl, src: t }),
                    (0, r.jsxs)(l.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        className: m.rf,
                        children: [
                            n.body,
                            null != x &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: ["\xa0", (0, r.jsx)(a.Anchor, { href: x.url, children: x.linkText })],
                                }),
                        ],
                    }),
                ],
            });
        },
    },
);
