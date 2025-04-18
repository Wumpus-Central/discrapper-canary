n.d(t, { Z: () => o });
var r = n(200651),
    i = n(192379);
function a(e) {
    return {
        position: 'vertical' === e ? 'absolute' : 'relative',
        pointerEvents: 'none',
        minHeight: +('vertical' !== e),
        minWidth: +('horizontal' !== e),
        flex: '0 0 auto'
    };
}
function o(e) {
    let { paddingFix: t = !0, orientation: n = 'vertical', dir: o, className: s, scrollerRef: l, specs: c } = e,
        u = (0, i.useRef)(null);
    return (
        (0, i.useLayoutEffect)(() => {
            var e;
            let { current: r } = l;
            if (null == r || 'auto' === n || !t) return;
            let i = null == (e = r.ownerDocument) ? void 0 : e.defaultView;
            if (null == i) return;
            (r.style.paddingTop = ''), (r.style.paddingBottom = ''), (r.style.paddingLeft = ''), (r.style.paddingRight = '');
            let a = i.getComputedStyle(r);
            if ('vertical' === n) {
                if ('rtl' === o) {
                    let e = parseInt(a.getPropertyValue('padding-left'), 10);
                    (r.style.paddingLeft = ''.concat(Math.max(0, e - c.width), 'px')), (r.style.paddingRight = '');
                } else {
                    let e = parseInt(a.getPropertyValue('padding-right'), 10);
                    (r.style.paddingRight = ''.concat(Math.max(0, e - c.width), 'px')), (r.style.paddingLeft = '');
                }
                let { current: e } = u;
                null != e && (e.style.height = a.getPropertyValue('padding-bottom'));
            } else {
                let e = parseInt(a.getPropertyValue('padding-bottom'), 10);
                r.style.paddingBottom = ''.concat(Math.max(0, e - c.height), 'px');
                let { current: t } = u;
                null != t && (t.style.width = a.getPropertyValue('padding-left'));
            }
        }, [n, o, s, l, t, c]),
        (0, i.useMemo)(
            () =>
                'auto' !== n
                    ? (0, r.jsx)('div', {
                          'aria-hidden': !0,
                          style: a(n),
                          ref: u
                      })
                    : null,
            [n]
        )
    );
}
