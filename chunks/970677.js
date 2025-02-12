n.d(t, { q: () => c });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(743236),
    l = n(939350),
    u = n(335765);
function c(e) {
    let { color: t = 'default', disabled: n, isFocused: a, showDefaultFocus: c = !1, menuItemProps: d, children: f } = e,
        _ = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            if (!a) return;
            let e = _.current;
            if (null == e) return;
            (0, o.F)(_);
            let t = e.querySelector('[tabindex="0"]');
            null == t || t.focus();
        }, [a]),
        (0, i.jsx)('div', {
            ref: _,
            className: s()(u.item, l._[t], {
                [u.disabled]: n,
                [u.focused]: c && a,
                [u.hideInteraction]: !c
            }),
            'aria-disabled': n,
            ...d,
            children: f
        })
    );
}
