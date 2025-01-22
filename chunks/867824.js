r.d(n, {
    S: function () {
        return l;
    },
    T: function () {
        return u;
    }
});
var i = r(661763),
    a = r(192379),
    o = r(921336);
let s = {
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
function l(e = {}) {
    let { style: n, isFocusable: r } = e,
        [i, l] = (0, a.useState)(!1),
        { focusWithinProps: u } = (0, o.L_)({
            isDisabled: !r,
            onFocusWithinChange: (e) => l(e)
        }),
        c = (0, a.useMemo)(
            () =>
                i
                    ? n
                    : n
                      ? {
                            ...s,
                            ...n
                        }
                      : s,
            [i]
        );
    return {
        visuallyHiddenProps: {
            ...u,
            style: c
        }
    };
}
function u(e) {
    let { children: n, elementType: r = 'div', isFocusable: o, style: s, ...u } = e,
        { visuallyHiddenProps: c } = l(e);
    return a.createElement(r, (0, i.dG)(u, c), n);
}
