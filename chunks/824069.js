t.d(r, { K: () => m });
var n = t(477900);
t(582128);
var l = t(877624),
    i = t(834730),
    a = t(28863),
    s = t(549996),
    c = t(807098),
    o = t(637706),
    u = t(788883),
    d = t(592455);
function m() {
    let e = (0, s.c)(l.C.PLAN_SELECT_CARD_BANNER),
        r =
            null != e && "planSelectCardBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.planSelectCardBanner
                : null,
        t = (0, c.T)(r?.asset);
    if (null == e || null == r || "" === r.body) return null;
    let m = (0, o.C)(r.helpArticle, "");
    return (0, n.jsxs)("div", {
        className: d.kL,
        children: [
            (0, n.jsx)(u.A, {
                componentType: l.C.PLAN_SELECT_CARD_BANNER,
                componentId: e.id,
                promotionId: e.promotionId,
            }),
            null != t && (0, n.jsx)("img", { alt: "", className: d.Sl, src: t }),
            (0, n.jsxs)(i.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: d.rf,
                children: [
                    r.body,
                    null != m &&
                        (0, n.jsxs)(n.Fragment, {
                            children: ["\xa0", (0, n.jsx)(a.Anchor, { href: m.url, children: m.linkText })],
                        }),
                ],
            }),
        ],
    });
}
