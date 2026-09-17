r.d(t, { K: () => m });
var i = r(477900);
r(582128);
var n = r(877624),
    l = r(834730),
    s = r(28863),
    a = r(549996),
    o = r(807098),
    d = r(637706),
    c = r(788883),
    u = r(592455);
function m() {
    let e = (0, a.c)(n.C.PLAN_SELECT_CARD_BANNER),
        t =
            null != e && "planSelectCardBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.planSelectCardBanner
                : null,
        r = (0, o.T)(t?.asset);
    if (null == e || null == t || "" === t.body) return null;
    let m = (0, d.C)(t.helpArticle, "");
    return (0, i.jsxs)("div", {
        className: u.kL,
        children: [
            (0, i.jsx)(c.A, {
                componentType: n.C.PLAN_SELECT_CARD_BANNER,
                componentId: e.id,
                promotionId: e.promotionId,
            }),
            null != r && (0, i.jsx)("img", { alt: "", className: u.Sl, src: r }),
            (0, i.jsxs)(l.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: u.rf,
                children: [
                    t.body,
                    null != m &&
                        (0, i.jsxs)(i.Fragment, {
                            children: ["\xa0", (0, i.jsx)(s.Anchor, { href: m.url, children: m.linkText })],
                        }),
                ],
            }),
        ],
    });
}
