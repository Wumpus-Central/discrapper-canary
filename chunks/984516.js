"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(975807),
    o = n(975571),
    l = n(500049),
    u = n(902527),
    c = n(652215),
    d = n(985018),
    _ = n(615074);
function f(e) {
    let { padding: t = !1 } = e,
        n = i.useCallback(() => {
            (0, s.A)(o.A.getAppsSupportURL(c.MVz.APPS_LEARN_MORE));
        }, []),
        { trackSectionImpressionRef: f } = (0, u.A)({ sectionName: l.yK.NEW_TO_APPS, numItems: 1, numVisibleItems: 1 });
    return (0, r.jsx)("div", {
        className: t ? _.pK : void 0,
        children: (0, r.jsxs)("div", {
            ref: (e) => {
                f.current = e;
            },
            className: _.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: _.rf,
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
