n.d(t, { Z: () => a });
var r = n(192379),
    i = n(723184),
    o = n(341518);
let a = function (e) {
    var t = e.onClick,
        n = e.hsl,
        a = (0, i.default)({
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
        s = 0.1;
    return r.createElement(
        'div',
        { style: a.swatches },
        r.createElement(
            'div',
            { style: a.swatch },
            r.createElement(o.Z, {
                hsl: n,
                offset: '.80',
                active: Math.abs(n.l - 0.8) < s && Math.abs(n.s - 0.5) < s,
                onClick: t,
                first: !0
            })
        ),
        r.createElement(
            'div',
            { style: a.swatch },
            r.createElement(o.Z, {
                hsl: n,
                offset: '.65',
                active: Math.abs(n.l - 0.65) < s && Math.abs(n.s - 0.5) < s,
                onClick: t
            })
        ),
        r.createElement(
            'div',
            { style: a.swatch },
            r.createElement(o.Z, {
                hsl: n,
                offset: '.50',
                active: Math.abs(n.l - 0.5) < s && Math.abs(n.s - 0.5) < s,
                onClick: t
            })
        ),
        r.createElement(
            'div',
            { style: a.swatch },
            r.createElement(o.Z, {
                hsl: n,
                offset: '.35',
                active: Math.abs(n.l - 0.35) < s && Math.abs(n.s - 0.5) < s,
                onClick: t
            })
        ),
        r.createElement(
            'div',
            { style: a.swatch },
            r.createElement(o.Z, {
                hsl: n,
                offset: '.20',
                active: Math.abs(n.l - 0.2) < s && Math.abs(n.s - 0.5) < s,
                onClick: t,
                last: !0
            })
        ),
        r.createElement('div', { style: a.clear })
    );
};
