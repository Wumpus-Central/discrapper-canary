r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(200651),
    a = r(192379);
function o(e) {
    return {
        position: 'vertical' === e ? 'absolute' : 'relative',
        pointerEvents: 'none',
        minHeight: 'vertical' === e ? 0 : 1,
        minWidth: 'horizontal' === e ? 0 : 1,
        flex: '0 0 auto'
    };
}
function s(e) {
    let { paddingFix: n = !0, orientation: r = 'vertical', dir: s, className: l, scrollerRef: u, specs: c } = e,
        d = (0, a.useRef)(null);
    return (
        (0, a.useLayoutEffect)(() => {
            var e;
            let { current: i } = u;
            if (null == i || 'auto' === r || !n) return;
            let a = null === (e = i.ownerDocument) || void 0 === e ? void 0 : e.defaultView;
            if (null == a) return;
            (i.style.paddingTop = ''), (i.style.paddingBottom = ''), (i.style.paddingLeft = ''), (i.style.paddingRight = '');
            let o = a.getComputedStyle(i);
            if ('vertical' === r) {
                if ('rtl' === s) {
                    let e = parseInt(o.getPropertyValue('padding-left'), 10);
                    (i.style.paddingLeft = ''.concat(Math.max(0, e - c.width), 'px')), (i.style.paddingRight = '');
                } else {
                    let e = parseInt(o.getPropertyValue('padding-right'), 10);
                    (i.style.paddingRight = ''.concat(Math.max(0, e - c.width), 'px')), (i.style.paddingLeft = '');
                }
                let { current: e } = d;
                null != e && (e.style.height = o.getPropertyValue('padding-bottom'));
            } else {
                let e = parseInt(o.getPropertyValue('padding-bottom'), 10);
                i.style.paddingBottom = ''.concat(Math.max(0, e - c.height), 'px');
                let { current: n } = d;
                null != n && (n.style.width = o.getPropertyValue('padding-left'));
            }
        }, [r, s, l, u, n, c]),
        (0, a.useMemo)(
            () =>
                'auto' !== r
                    ? (0, i.jsx)('div', {
                          'aria-hidden': !0,
                          style: o(r),
                          ref: d
                      })
                    : null,
            [r]
        )
    );
}
