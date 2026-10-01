i.d(a, { q: () => p });
var t = i(477900),
    e = i(582128),
    n = i(113325),
    c = i(815021),
    r = i(375708),
    l = i(489387);
function p(s) {
    let { onClick: a, "aria-label": i = r.intl.string(r.t.cpT0Cq), variant: p } = s,
        { firstFocusableItemProps: u } = e.useContext(n.MV);
    return (0, t.jsx)("div", {
        className: l.closeButton,
        children: (0, t.jsx)(c.J, { size: "sm", "aria-label": i, onClick: a, variant: p, ...u }),
    });
}
