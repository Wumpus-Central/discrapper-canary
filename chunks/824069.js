t.d(r, { K: () => u });
var i = t(477900);
t(582128);
var n = t(877624),
    l = t(834730),
    a = t(349288),
    s = t(549996),
    c = t(807098),
    o = t(637706),
    d = t(954824);
function u() {
    let e = (0, s.c)(n.C.PLAN_SELECT_CARD_BANNER),
        r =
            null != e && "planSelectCardBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.planSelectCardBanner
                : null,
        t = (0, c.T)(r?.asset);
    if (null == r || "" === r.body) return null;
    let u = (0, o.C)(r.helpArticle, "");
    return (0, i.jsxs)("div", {
        className: d.kL,
        children: [
            null != t && (0, i.jsx)("img", { alt: "", className: d.Sl, src: t }),
            (0, i.jsxs)(l.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: d.rf,
                children: [
                    r.body,
                    null != u &&
                        (0, i.jsxs)(i.Fragment, {
                            children: ["\xa0", (0, i.jsx)(a.Anchor, { href: u.url, children: u.linkText })],
                        }),
                ],
            }),
        ],
    });
}
