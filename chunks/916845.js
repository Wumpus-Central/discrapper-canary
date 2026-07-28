"use strict";
n.d(t, { q: () => d });
var i = n(477900),
    r = n(582128),
    a = n(113325),
    s = n(815021),
    l = n(375708),
    o = n(753094);
function d(e) {
    let { onClick: t, "aria-label": n = l.intl.string(l.t.cpT0Cq), variant: d } = e,
        { firstFocusableItemProps: c } = r.useContext(a.MV);
    return (0, i.jsx)("div", {
        className: o.closeButton,
        children: (0, i.jsx)(s.J, { size: "sm", "aria-label": n, onClick: t, variant: d, ...c }),
    });
}
