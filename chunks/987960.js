n.d(t, { E: () => h });
var r = n(387509),
    i = n(614157),
    a = n(677061),
    o = n(682308),
    s = n(735437),
    l = n(900197),
    c = n(43341),
    u = n(521707),
    d = n(752321),
    f = n(226138),
    _ = n(970185);
function p(e) {
    return e && e.__esModule ? e.default : e;
}
function h(e, t, n) {
    let { item: h } = e,
        m = (0, _.q)(p(i.Z), "@react-aria/tag"),
        g = (0, a.Me)(),
        { onRemove: E } = r.L.get(t) || {},
        { rowProps: b, gridCellProps: y, ...O } = (0, f.F)({ node: h }, t, n),
        { descriptionProps: v, ...I } = O,
        T = t.disabledKeys.has(h.key) || h.props.isDisabled,
        S = (e) => {
            ("Delete" === e.key || "Backspace" === e.key) &&
                (T ||
                    (e.preventDefault(),
                    t.selectionManager.isSelected(h.key)
                        ? null == E || E(new Set(t.selectionManager.selectedKeys))
                        : null == E || E(new Set([h.key]))));
        },
        A = (0, u.Kf)();
    "virtual" === A && "undefined" != typeof window && "ontouchstart" in window && (A = "pointer");
    let C = E && ("keyboard" === A || "virtual" === A) ? m.format("removeDescription") : "",
        N = (0, o.P)(C),
        R = h.key === t.selectionManager.focusedKey,
        P = null != t.selectionManager.focusedKey,
        w = -1;
    T || (!R && P) || (w = 0);
    let D = (0, s.z)(h.props),
        x = (0, l.fU)(h.props),
        { focusableProps: L } = (0, d.kc)({ isDisabled: T }, n);
    return {
        removeButtonProps: {
            "aria-label": m.format("removeButtonLabel"),
            "aria-labelledby": `${g} ${b.id}`,
            isDisabled: T,
            id: g,
            onPress: () => (E ? E(new Set([h.key])) : null),
        },
        rowProps: (0, c.d)(L, b, D, x, {
            tabIndex: w,
            onKeyDown: E ? S : void 0,
            "aria-describedby": N["aria-describedby"],
        }),
        gridCellProps: (0, c.d)(y, {
            "aria-errormessage": e["aria-errormessage"],
            "aria-label": e["aria-label"],
        }),
        ...I,
        allowsRemoving: !!E,
    };
}
