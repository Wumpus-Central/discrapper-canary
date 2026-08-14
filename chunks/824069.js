t.d(r, { K: () => m });
var i = t(477900);
t(582128);
var n = t(877624),
    l = t(834730),
    a = t(349288),
    s = t(549996),
    o = t(807098),
    d = t(637706),
    c = t(788883),
    u = t(954824);
function m() {
    let e = (0, s.c)(n.C.PLAN_SELECT_CARD_BANNER),
        r =
            null != e && "planSelectCardBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.planSelectCardBanner
                : null,
        t = (0, o.T)(r?.asset);
    if (null == e || null == r || "" === r.body) return null;
    let m = (0, d.C)(r.helpArticle, "");
    return (0, i.jsxs)("div", {
        className: u.kL,
        children: [
            (0, i.jsx)(c.A, {
                componentType: n.C.PLAN_SELECT_CARD_BANNER,
                componentId: e.id,
                promotionId: e.promotionId,
            }),
            null != t && (0, i.jsx)("img", { alt: "", className: u.Sl, src: t }),
            (0, i.jsxs)(l.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: u.rf,
                children: [
                    r.body,
                    null != m &&
                        (0, i.jsxs)(i.Fragment, {
                            children: ["\xa0", (0, i.jsx)(a.Anchor, { href: m.url, children: m.linkText })],
                        }),
                ],
            }),
        ],
    });
}
