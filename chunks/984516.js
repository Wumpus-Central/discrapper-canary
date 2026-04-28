i.d(e, { A: () => L });
var s = i(627968),
    n = i(64700),
    r = i(534514),
    A = i(834730),
    a = i(821609),
    l = i(975807),
    o = i(975571),
    I = i(500049),
    N = i(902527),
    c = i(652215),
    _ = i(985018),
    E = i(834951);
function L(t) {
    let { padding: e = !1 } = t,
        i = n.useCallback(() => {
            (0, l.A)(o.A.getAppsSupportURL(c.MVz.APPS_LEARN_MORE));
        }, []),
        { trackSectionImpressionRef: L } = (0, N.A)({ sectionName: I.yK.NEW_TO_APPS, numItems: 1, numVisibleItems: 1 });
    return (0, s.jsx)("div", {
        className: e ? E.pK : void 0,
        children: (0, s.jsxs)("div", {
            ref: (t) => {
                L.current = t;
            },
            className: E.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: E.rf,
                    children: [
                        (0, s.jsx)(r.D, {
                            variant: "heading-lg/bold",
                            color: "text-strong",
                            children: _.intl.string(_.t["kw8/Ec"]),
                        }),
                        (0, s.jsx)(A.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: _.intl.string(_.t.GZoV1O),
                        }),
                    ],
                }),
                (0, s.jsx)(a.$, {
                    variant: "primary",
                    text: _.intl.string(_.t.Ye51oT),
                    "aria-label": _.intl.formatToPlainString(_.t.xx5Sug, {
                        sectionTitle: _.intl.string(_.t["kw8/Ec"]),
                        sectionBody: _.intl.string(_.t.GZoV1O),
                    }),
                    onClick: i,
                }),
            ],
        }),
    });
}
