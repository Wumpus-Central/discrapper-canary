n.d(t, { Z: () => s });
var i = n(192379),
    r = n(723184),
    a = n(341518);
let s = function (e) {
    var t = e.onClick,
        n = e.hsl,
        s = (0, r.default)({
            default: {
                swatches: { marginTop: '20px' },
                swatch: {
                    boxSizing: 'border-box',
                    width: '20%',
                    paddingRight: '1px',
                    float: 'left'
                },
                clear: { clear: 'both' }
            }
        }),
        o = 0.1;
    return i.createElement(
        'div',
        { style: s.swatches },
        i.createElement(
            'div',
            { style: s.swatch },
            i.createElement(a.Z, {
                hsl: n,
                offset: '.80',
                active: Math.abs(n.l - 0.8) < o && Math.abs(n.s - 0.5) < o,
                onClick: t,
                first: !0
            })
        ),
        i.createElement(
            'div',
            { style: s.swatch },
            i.createElement(a.Z, {
                hsl: n,
                offset: '.65',
                active: Math.abs(n.l - 0.65) < o && Math.abs(n.s - 0.5) < o,
                onClick: t
            })
        ),
        i.createElement(
            'div',
            { style: s.swatch },
            i.createElement(a.Z, {
                hsl: n,
                offset: '.50',
                active: Math.abs(n.l - 0.5) < o && Math.abs(n.s - 0.5) < o,
                onClick: t
            })
        ),
        i.createElement(
            'div',
            { style: s.swatch },
            i.createElement(a.Z, {
                hsl: n,
                offset: '.35',
                active: Math.abs(n.l - 0.35) < o && Math.abs(n.s - 0.5) < o,
                onClick: t
            })
        ),
        i.createElement(
            'div',
            { style: s.swatch },
            i.createElement(a.Z, {
                hsl: n,
                offset: '.20',
                active: Math.abs(n.l - 0.2) < o && Math.abs(n.s - 0.5) < o,
                onClick: t,
                last: !0
            })
        ),
        i.createElement('div', { style: s.clear })
    );
};
