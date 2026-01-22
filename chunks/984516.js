n.d(t, {
    A: () => p,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(975807),
    o = n(975571),
    l = n(500049),
    c = n(902527),
    u = n(652215),
    d = n(985018),
    f = n(615074);

function p(e) {
    let { padding: t = !1 } = e,
        n = i.useCallback(() => {
            (0, s.A)(o.A.getAppsSupportURL(u.MVz.APPS_LEARN_MORE));
        }, []),
        { trackSectionImpressionRef: p } = (0, c.A)({
            sectionName: l.yK.NEW_TO_APPS,
            numItems: 1,
            numVisibleItems: 1,
        });
    return (0, r.jsx)("div", {
        className: t ? f.pK : void 0,
        children: (0, r.jsxs)("div", {
            ref: (e) => {
                p.current = e;
            },
            className: f.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: f.rf,
                    children: [
                        (0, r.jsx)(a.Heading, {
                            variant: "heading-lg/bold",
                            color: "text-strong",
                            children: d.intl.string(d.t["kw8/Ec"]),
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: d.intl.string(d.t.GZoV1O),
                        }),
                    ],
                }),
                (0, r.jsx)(a.Button, {
                    variant: "primary",
                    text: d.intl.string(d.t.Ye51oT),
                    "aria-label": d.intl.formatToPlainString(d.t.xx5Sug, {
                        sectionTitle: d.intl.string(d.t["kw8/Ec"]),
                        sectionBody: d.intl.string(d.t.GZoV1O),
                    }),
                    onClick: n,
                }),
            ],
        }),
    });
}
