n.d(t, { K: () => m });
var r = n(477900);
n(582128);
var l = n(877624),
    i = n(834730),
    a = n(28863),
    s = n(549996),
    o = n(807098),
    c = n(637706),
    u = n(788883),
    d = n(592455);
function m() {
    let e = (0, s.c)(l.C.PLAN_SELECT_CARD_BANNER),
        t =
            null != e && "planSelectCardBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.planSelectCardBanner
                : null,
        n = (0, o.T)(t?.asset);
    if (null == e || null == t || "" === t.body) return null;
    let m = (0, c.C)(t.helpArticle, "");
    return (0, r.jsxs)("div", {
        className: d.kL,
        children: [
            (0, r.jsx)(u.A, {
                componentType: l.C.PLAN_SELECT_CARD_BANNER,
                componentId: e.id,
                promotionId: e.promotionId,
            }),
            null != n && (0, r.jsx)("img", { alt: "", className: d.Sl, src: n }),
            (0, r.jsxs)(i.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: d.rf,
                children: [
                    t.body,
                    null != m &&
                        (0, r.jsxs)(r.Fragment, {
                            children: ["\xa0", (0, r.jsx)(a.Anchor, { href: m.url, children: m.linkText })],
                        }),
                ],
            }),
        ],
    });
}
