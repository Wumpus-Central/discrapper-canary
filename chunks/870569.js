n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(686546),
    s = n(32986);
function c(e) {
    let { tooltipText: t, children: n, onContextMenu: l, onClick: c, disabled: d, icon: u, iconForeground: h, innerClassName: p, className: g, tooltipClassName: m, onMouseEnter: f, onMouseLeave: _, 'aria-label': v, 'aria-checked': C, role: x, tooltipColor: Z, tooltipForceOpen: I, tooltipContentClassName: b } = e,
        S =
            'function' == typeof u
                ? (0, i.jsx)(u, {
                      width: 20,
                      height: 20,
                      size: 'custom',
                      colorClass: null != h ? h : '',
                      color: 'currentColor'
                  })
                : u;
    return (0, i.jsx)(a.ua7, {
        tooltipClassName: m,
        text: t,
        'aria-label': v,
        color: Z,
        tooltipContentClassName: b,
        forceOpen: I,
        children: (e) => {
            let { onClick: t, onMouseEnter: u, onMouseLeave: h, ...m } = e;
            return (0, i.jsxs)(a.zxk, {
                ...m,
                look: a.zxk.Looks.BLANK,
                size: a.zxk.Sizes.NONE,
                disabled: d,
                innerClassName: p,
                wrapperClassName: r()(s.button, g),
                className: r()(s.button, g, {
                    [s.disabled]: d,
                    [s.enabled]: !d
                }),
                onClick: (e) => {
                    null != t && t(), null != c && c(e);
                },
                onMouseEnter: () => {
                    null == u || u(), null == f || f();
                },
                onMouseLeave: () => {
                    null == h || h(), null == _ || _();
                },
                onContextMenu: l,
                role: x,
                'aria-checked': C,
                children: [
                    null != n
                        ? (0, i.jsx)(o.ZP, {
                              width: 20,
                              height: 20,
                              mask: o.ZP.Masks.PANEL_BUTTON,
                              children: S
                          })
                        : S,
                    n
                ]
            });
        }
    });
}
