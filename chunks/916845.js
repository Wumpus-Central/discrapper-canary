r.d(t, { q: () => c });
var n = r(627968),
    a = r(64700),
    l = r(113325),
    s = r(815021),
    i = r(985018),
    o = r(824078);
function c(e) {
    let { onClick: t, "aria-label": r = i.intl.string(i.t.cpT0Cq), variant: c } = e,
        { firstFocusableItemProps: u } = a.useContext(l.M);
    return (0, n.jsx)("div", {
        className: o.closeButton,
        children: (0, n.jsx)(s.J, { size: "sm", "aria-label": r, onClick: t, variant: c, ...u }),
    });
}
