a.d(t, { q: () => c });
var n = a(627968),
    r = a(64700),
    l = a(113325),
    i = a(815021),
    s = a(985018),
    o = a(824078);
function c(e) {
    let { onClick: t, "aria-label": a = s.intl.string(s.t.cpT0Cq), variant: c } = e,
        { firstFocusableItemProps: d } = r.useContext(l.M);
    return (0, n.jsx)("div", {
        className: o.closeButton,
        children: (0, n.jsx)(i.J, { size: "sm", "aria-label": a, onClick: t, variant: c, ...d }),
    });
}
