e.d(i, { A: () => L });
var n = e(477900),
    s = e(582128),
    r = e(297264),
    A = e(834730),
    a = e(821609),
    o = e(975807),
    l = e(975571),
    I = e(500049),
    N = e(902527),
    c = e(652215),
    _ = e(375708),
    E = e(56671);
function L(t) {
    let { padding: i = !1 } = t,
        e = s.useCallback(() => {
            (0, o.A)(l.A.getAppsSupportURL(c.MVz.APPS_LEARN_MORE));
        }, []),
        { trackSectionImpressionRef: L } = (0, N.A)({ sectionName: I.yK.NEW_TO_APPS, numItems: 1, numVisibleItems: 1 });
    return (0, n.jsx)("div", {
        className: i ? E.pK : void 0,
        children: (0, n.jsxs)("div", {
            ref: (t) => {
                L.current = t;
            },
            className: E.kL,
            children: [
                (0, n.jsxs)("div", {
                    className: E.rf,
                    children: [
                        (0, n.jsx)(r.D, {
                            variant: "heading-lg/bold",
                            color: "text-strong",
                            children: _.intl.string(_.t["kw8/Ec"]),
                        }),
                        (0, n.jsx)(A.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: _.intl.string(_.t.GZoV1O),
                        }),
                    ],
                }),
                (0, n.jsx)(a.$, {
                    variant: "primary",
                    text: _.intl.string(_.t.Ye51oT),
                    "aria-label": _.intl.formatToPlainString(_.t.xx5Sug, {
                        sectionTitle: _.intl.string(_.t["kw8/Ec"]),
                        sectionBody: _.intl.string(_.t.GZoV1O),
                    }),
                    onClick: e,
                }),
            ],
        }),
    });
}
