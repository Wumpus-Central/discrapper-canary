r.d(n, {
    q: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(743236),
    u = r(939350),
    c = r(450793);
function d(e) {
    let { color: n = 'default', disabled: r, isFocused: o, showDefaultFocus: d = !1, menuItemProps: f, children: p } = e,
        h = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            if (!o) return;
            let e = h.current;
            if (null == e) return;
            (0, l.F)(h);
            let n = e.querySelector('[tabindex="0"]');
            null == n || n.focus();
        }, [o]),
        (0, i.jsx)('div', {
            ref: h,
            className: s()(c.item, u._[n], {
                [c.disabled]: r,
                [c.focused]: d && o,
                [c.hideInteraction]: !d
            }),
            'aria-disabled': r,
            ...f,
            children: p
        })
    );
}
