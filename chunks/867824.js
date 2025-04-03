r.d(e, { T: () => u });
var n = r(661763),
    i = r(192379),
    o = r(921336);
let a = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px',
    whiteSpace: 'nowrap'
};
function u(t) {
    let { children: e, elementType: r = 'div', isFocusable: u, style: s, ...c } = t,
        { visuallyHiddenProps: l } = (function (t = {}) {
            let { style: e, isFocusable: r } = t,
                [n, u] = (0, i.useState)(!1),
                { focusWithinProps: s } = (0, o.L_)({
                    isDisabled: !r,
                    onFocusWithinChange: (t) => u(t)
                }),
                c = (0, i.useMemo)(
                    () =>
                        n
                            ? e
                            : e
                              ? {
                                    ...a,
                                    ...e
                                }
                              : a,
                    [n]
                );
            return {
                visuallyHiddenProps: {
                    ...s,
                    style: c
                }
            };
        })(t);
    return i.createElement(r, (0, n.dG)(c, l), e);
}
