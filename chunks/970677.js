r.d(n, {
    q: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(743236),
    u = r(939350),
    c = r(450793);
function d(e) {
    let { color: n = 'default', disabled: r, isFocused: s, showDefaultFocus: d = !1, menuItemProps: f, children: _ } = e,
        h = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            if (!s) return;
            let e = h.current;
            if (null == e) return;
            (0, l.F)(h);
            let n = e.querySelector('[tabindex="0"]');
            null == n || n.focus();
        }, [s]),
        (0, i.jsx)('div', {
            ref: h,
            className: o()(c.item, u._[n], {
                [c.disabled]: r,
                [c.focused]: d && s,
                [c.hideInteraction]: !d
            }),
            'aria-disabled': r,
            ...f,
            children: _
        })
    );
}
