"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    a = n(64700),
    s = n(534514),
    l = n(834730),
    r = n(821609),
    o = n(975807),
    c = n(975571),
    d = n(500049),
    u = n(902527),
    h = n(652215),
    p = n(985018),
    m = n(834951);
function _(e) {
    let { padding: t = !1 } = e,
        n = a.useCallback(() => {
            (0, o.A)(c.A.getAppsSupportURL(h.MVz.APPS_LEARN_MORE));
        }, []),
        { trackSectionImpressionRef: _ } = (0, u.A)({ sectionName: d.yK.NEW_TO_APPS, numItems: 1, numVisibleItems: 1 });
    return (0, i.jsx)("div", {
        className: t ? m.pK : void 0,
        children: (0, i.jsxs)("div", {
            ref: (e) => {
                _.current = e;
            },
            className: m.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: m.rf,
                    children: [
                        (0, i.jsx)(s.D, {
                            variant: "heading-lg/bold",
                            color: "text-strong",
                            children: p.intl.string(p.t["kw8/Ec"]),
                        }),
                        (0, i.jsx)(l.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: p.intl.string(p.t.GZoV1O),
                        }),
                    ],
                }),
                (0, i.jsx)(r.$, {
                    variant: "primary",
                    text: p.intl.string(p.t.Ye51oT),
                    "aria-label": p.intl.formatToPlainString(p.t.xx5Sug, {
                        sectionTitle: p.intl.string(p.t["kw8/Ec"]),
                        sectionBody: p.intl.string(p.t.GZoV1O),
                    }),
                    onClick: n,
                }),
            ],
        }),
    });
}
