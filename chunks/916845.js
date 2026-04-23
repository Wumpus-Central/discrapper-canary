"use strict";
n.d(t, { q: () => u });
var r = n(627968),
    i = n(64700),
    s = n(113325),
    a = n(815021),
    o = n(985018),
    l = n(824078);
function u(e) {
    let { onClick: t, "aria-label": n = o.intl.string(o.t.cpT0Cq), variant: u } = e,
        { firstFocusableItemProps: c } = i.useContext(s.M);
    return (0, r.jsx)("div", {
        className: l.closeButton,
        children: (0, r.jsx)(a.J, { size: "sm", "aria-label": n, onClick: t, variant: u, ...c }),
    });
}
