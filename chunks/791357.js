n.d(t, { U: () => s });
var r = n(806262),
    i = n(752689),
    a = n(218769);
function o(e) {
    return e && e.__esModule ? e.default : e;
}
function s(e, t) {
    let { key: n } = e,
        s = t.selectionManager,
        l = (0, i.Me)(),
        c = !t.selectionManager.canSelectItem(n),
        u = t.selectionManager.isSelected(n),
        d = () => s.toggleSelection(n);
    return {
        checkboxProps: {
            id: l,
            "aria-label": (0, a.q)(o(r.Z), "@react-aria/grid").format("select"),
            isSelected: u,
            isDisabled: c,
            onChange: d,
        },
    };
}
