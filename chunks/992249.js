n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(717251),
    c = n(241917);
function d(e) {
    let { action: t, children: n, className: l, onExpandChange: d, loading: u, ...m } = e,
        [h, g] = r.useState(!1),
        x = (e) => {
            g(e), null == d || d(e);
        };
    return (0, i.jsx)(a.Collapsible, {
        className: s()(c.groupContainer, l),
        isExpanded: h,
        collapsibleContent: (0, i.jsxs)('div', {
            className: c.groupCollapsedContainer,
            children: [h && (0, i.jsx)('div', { className: c.pointer }), n]
        }),
        children: (e) => {
            let { onClick: n } = e;
            return (0, i.jsx)(o.Z, {
                ...m,
                className: c.groupHeaderRow,
                action: u ? (0, i.jsx)(a.Spinner, { type: a.Spinner.Type.PULSING_ELLIPSIS }) : t,
                onClick: (e) => {
                    x(!h), n(e);
                }
            });
        }
    });
}
