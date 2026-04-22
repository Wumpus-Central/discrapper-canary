a.d(t, { A: () => _ });
var n = a(627968),
    l = a(64700),
    i = a(534514),
    s = a(834730),
    r = a(821609),
    o = a(975807),
    c = a(975571),
    d = a(500049),
    u = a(902527),
    h = a(652215),
    m = a(985018),
    p = a(834951);
function _(e) {
    let { padding: t = !1 } = e,
        a = l.useCallback(() => {
            (0, o.A)(c.A.getAppsSupportURL(h.MVz.APPS_LEARN_MORE));
        }, []),
        { trackSectionImpressionRef: _ } = (0, u.A)({ sectionName: d.yK.NEW_TO_APPS, numItems: 1, numVisibleItems: 1 });
    return (0, n.jsx)("div", {
        className: t ? p.pK : void 0,
        children: (0, n.jsxs)("div", {
            ref: (e) => {
                _.current = e;
            },
            className: p.kL,
            children: [
                (0, n.jsxs)("div", {
                    className: p.rf,
                    children: [
                        (0, n.jsx)(i.D, {
                            variant: "heading-lg/bold",
                            color: "text-strong",
                            children: m.intl.string(m.t["kw8/Ec"]),
                        }),
                        (0, n.jsx)(s.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: m.intl.string(m.t.GZoV1O),
                        }),
                    ],
                }),
                (0, n.jsx)(r.$, {
                    variant: "primary",
                    text: m.intl.string(m.t.Ye51oT),
                    "aria-label": m.intl.formatToPlainString(m.t.xx5Sug, {
                        sectionTitle: m.intl.string(m.t["kw8/Ec"]),
                        sectionBody: m.intl.string(m.t.GZoV1O),
                    }),
                    onClick: a,
                }),
            ],
        }),
    });
}
