"use strict";
n.d(t, { q: () => u });
var i = n(627968),
    r = n(64700),
    s = n(113325),
    a = n(815021),
    o = n(375708),
    l = n(824078);
function u(e) {
    let { onClick: t, "aria-label": n = o.intl.string(o.t.cpT0Cq), variant: u } = e,
        { firstFocusableItemProps: c } = r.useContext(s.M);
    return (0, i.jsx)("div", {
        className: l.closeButton,
        children: (0, i.jsx)(a.J, { size: "sm", "aria-label": n, onClick: t, variant: u, ...c }),
    });
}
