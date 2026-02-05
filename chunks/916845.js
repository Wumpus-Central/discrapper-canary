"use strict";
n.d(t, { q: () => u });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(732955),
    o = n(985018),
    l = n(248789);
function u(e) {
    let { onClick: t, "aria-label": n = o.intl.string(o.t.cpT0Cq), variant: u } = e,
        { firstFocusableItemProps: c } = i.useContext(a.MVj);
    return (0, r.jsx)("div", {
        className: l.closeButton,
        children: (0, r.jsx)(s.JnF, { size: "sm", "aria-label": n, onClick: t, variant: u, ...c }),
    });
}
