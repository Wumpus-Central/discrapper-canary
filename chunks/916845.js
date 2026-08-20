n.d(t, { q: () => c });
var a = n(477900),
    r = n(582128),
    l = n(113325),
    i = n(815021),
    s = n(375708),
    o = n(489387);
function c(e) {
    let { onClick: t, "aria-label": n = s.intl.string(s.t.cpT0Cq), variant: c } = e,
        { firstFocusableItemProps: d } = r.useContext(l.MV);
    return (0, a.jsx)("div", {
        className: o.closeButton,
        children: (0, a.jsx)(i.J, { size: "sm", "aria-label": n, onClick: t, variant: c, ...d }),
    });
}
