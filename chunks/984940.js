n.d(t, { F: () => s });
var r = n(981166),
    i = n(114206),
    a = n(921448),
    o = n(473749);
function s(e = {}) {
    let { autoFocus: t = !1, isTextInput: n, within: l } = e,
        c = (0, o.useRef)({
            isFocused: !1,
            isFocusVisible: t || (0, r.E)(),
        }),
        [u, d] = (0, o.useState)(!1),
        [f, _] = (0, o.useState)(() => c.current.isFocused && c.current.isFocusVisible),
        p = (0, o.useCallback)(() => _(c.current.isFocused && c.current.isFocusVisible), []),
        h = (0, o.useCallback)(
            (e) => {
                (c.current.isFocused = e), d(e), p();
            },
            [p],
        );
    (0, r.mG)(
        (e) => {
            (c.current.isFocusVisible = e), p();
        },
        [],
        { isTextInput: n },
    );
    let { focusProps: m } = (0, i.K)({
            isDisabled: l,
            onFocusChange: h,
        }),
        { focusWithinProps: g } = (0, a.L)({
            isDisabled: !l,
            onFocusWithinChange: h,
        });
    return {
        isFocused: u,
        isFocusVisible: f,
        focusProps: l ? g : m,
    };
}
