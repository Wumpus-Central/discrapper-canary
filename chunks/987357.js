n.d(t, { Z: () => s });
var i = n(200651),
    r = n(192379);
function a(e) {
    return {
        position: 'vertical' === e ? 'absolute' : 'relative',
        pointerEvents: 'none',
        minHeight: 'vertical' === e ? 0 : 1,
        minWidth: 'horizontal' === e ? 0 : 1,
        flex: '0 0 auto'
    };
}
function s(e) {
    let { paddingFix: t = !0, orientation: n = 'vertical', dir: s, className: o, scrollerRef: l, specs: u } = e,
        c = (0, r.useRef)(null);
    return (
        (0, r.useLayoutEffect)(() => {
            var e;
            let { current: i } = l;
            if (null == i || 'auto' === n || !t) return;
            let r = null === (e = i.ownerDocument) || void 0 === e ? void 0 : e.defaultView;
            if (null == r) return;
            (i.style.paddingTop = ''), (i.style.paddingBottom = ''), (i.style.paddingLeft = ''), (i.style.paddingRight = '');
            let a = r.getComputedStyle(i);
            if ('vertical' === n) {
                if ('rtl' === s) {
                    let e = parseInt(a.getPropertyValue('padding-left'), 10);
                    (i.style.paddingLeft = ''.concat(Math.max(0, e - u.width), 'px')), (i.style.paddingRight = '');
                } else {
                    let e = parseInt(a.getPropertyValue('padding-right'), 10);
                    (i.style.paddingRight = ''.concat(Math.max(0, e - u.width), 'px')), (i.style.paddingLeft = '');
                }
                let { current: e } = c;
                null != e && (e.style.height = a.getPropertyValue('padding-bottom'));
            } else {
                let e = parseInt(a.getPropertyValue('padding-bottom'), 10);
                i.style.paddingBottom = ''.concat(Math.max(0, e - u.height), 'px');
                let { current: t } = c;
                null != t && (t.style.width = a.getPropertyValue('padding-left'));
            }
        }, [n, s, o, l, t, u]),
        (0, r.useMemo)(
            () =>
                'auto' !== n
                    ? (0, i.jsx)('div', {
                          'aria-hidden': !0,
                          style: a(n),
                          ref: c
                      })
                    : null,
            [n]
        )
    );
}
