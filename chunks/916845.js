n.d(t, { q: () => c });
var r = n(477900),
    a = n(582128),
    l = n(113325),
    o = n(815021),
    s = n(375708),
    i = n(489387);
function c(e) {
    let { onClick: t, "aria-label": n = s.intl.string(s.t.cpT0Cq), variant: c } = e,
        { firstFocusableItemProps: u } = a.useContext(l.MV);
    return (0, r.jsx)("div", {
        className: i.closeButton,
        children: (0, r.jsx)(o.J, { size: "sm", "aria-label": n, onClick: t, variant: c, ...u }),
    });
}
