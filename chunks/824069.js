t.d(r, { K: () => d });
var n = t(477900);
t(582128);
var l = t(877624),
    i = t(834730),
    a = t(28863),
    s = t(549996),
    c = t(807098),
    u = t(637706),
    o = t(788883),
    m = t(592455);
function d() {
    let e = (0, s.c)(l.C.PLAN_SELECT_CARD_BANNER),
        r =
            null != e && "planSelectCardBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.planSelectCardBanner
                : null,
        t = (0, c.T)(r?.asset);
    if (null == e || null == r || "" === r.body) return null;
    let d = (0, u.C)(r.helpArticle, "");
    return (0, n.jsxs)("div", {
        className: m.kL,
        children: [
            (0, n.jsx)(o.A, {
                componentType: l.C.PLAN_SELECT_CARD_BANNER,
                componentId: e.id,
                promotionId: e.promotionId,
            }),
            null != t && (0, n.jsx)("img", { alt: "", className: m.Sl, src: t }),
            (0, n.jsxs)(i.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: m.rf,
                children: [
                    r.body,
                    null != d &&
                        (0, n.jsxs)(n.Fragment, {
                            children: ["\xa0", (0, n.jsx)(a.Anchor, { href: d.url, children: d.linkText })],
                        }),
                ],
            }),
        ],
    });
}
