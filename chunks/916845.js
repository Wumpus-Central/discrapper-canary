n.d(t, { q: () => o });
var i = n(477900),
    s = n(582128),
    a = n(113325),
    l = n(815021),
    r = n(375708),
    E = n(753094);
function o(e) {
    let { onClick: t, "aria-label": n = r.intl.string(r.t.cpT0Cq), variant: o } = e,
        { firstFocusableItemProps: c } = s.useContext(a.MV);
    return (0, i.jsx)("div", {
        className: E.closeButton,
        children: (0, i.jsx)(l.J, { size: "sm", "aria-label": n, onClick: t, variant: o, ...c }),
    });
}
