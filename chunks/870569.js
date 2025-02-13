n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(481060),
    a = n(686546),
    s = n(23586);
function c(e) {
    let { tooltipText: t, children: n, onContextMenu: l, onClick: c, disabled: d, icon: u, iconForeground: h, innerClassName: p, className: m, tooltipClassName: g, onMouseEnter: f, onMouseLeave: _, 'aria-label': v, 'aria-checked': C, role: x, tooltipColor: I, tooltipForceOpen: Z, tooltipContentClassName: b } = e,
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
    return (0, i.jsx)(o.ua7, {
        tooltipClassName: g,
        text: t,
        'aria-label': v,
        color: I,
        tooltipContentClassName: b,
        forceOpen: Z,
        children: (e) => {
            let { onClick: t, onMouseEnter: u, onMouseLeave: h, ...g } = e;
            return (0, i.jsxs)(o.zxk, {
                ...g,
                look: o.zxk.Looks.BLANK,
                size: o.zxk.Sizes.NONE,
                disabled: d,
                innerClassName: p,
                wrapperClassName: r()(s.button, m),
                className: r()(s.button, m, {
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
                        ? (0, i.jsx)(a.ZP, {
                              width: 20,
                              height: 20,
                              mask: a.ZP.Masks.PANEL_BUTTON,
                              children: S
                          })
                        : S,
                    n
                ]
            });
        }
    });
}
