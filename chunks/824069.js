r.d(t, { K: () => m });
var n = r(477900);
r(582128);
var i = r(877624),
    l = r(834730),
    s = r(28863),
    a = r(549996),
    o = r(807098),
    u = r(637706),
    c = r(788883),
    d = r(592455);
function m() {
    let e = (0, a.c)(i.C.PLAN_SELECT_CARD_BANNER),
        t =
            null != e && "planSelectCardBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.planSelectCardBanner
                : null,
        r = (0, o.T)(t?.asset);
    if (null == e || null == t || "" === t.body) return null;
    let m = (0, u.C)(t.helpArticle, "");
    return (0, n.jsxs)("div", {
        className: d.kL,
        children: [
            (0, n.jsx)(c.A, {
                componentType: i.C.PLAN_SELECT_CARD_BANNER,
                componentId: e.id,
                promotionId: e.promotionId,
            }),
            null != r && (0, n.jsx)("img", { alt: "", className: d.Sl, src: r }),
            (0, n.jsxs)(l.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: d.rf,
                children: [
                    t.body,
                    null != m &&
                        (0, n.jsxs)(n.Fragment, {
                            children: ["\xa0", (0, n.jsx)(s.Anchor, { href: m.url, children: m.linkText })],
                        }),
                ],
            }),
        ],
    });
}
