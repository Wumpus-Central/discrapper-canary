var i = r(192379),
    a = r(723184),
    o = r(341518),
    s = function (e) {
        var n = e.onClick,
            r = e.hsl,
            s = (0, a.default)({
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
            l = 0.1;
        return i.createElement(
            'div',
            { style: s.swatches },
            i.createElement(
                'div',
                { style: s.swatch },
                i.createElement(o.Z, {
                    hsl: r,
                    offset: '.80',
                    active: Math.abs(r.l - 0.8) < l && Math.abs(r.s - 0.5) < l,
                    onClick: n,
                    first: !0
                })
            ),
            i.createElement(
                'div',
                { style: s.swatch },
                i.createElement(o.Z, {
                    hsl: r,
                    offset: '.65',
                    active: Math.abs(r.l - 0.65) < l && Math.abs(r.s - 0.5) < l,
                    onClick: n
                })
            ),
            i.createElement(
                'div',
                { style: s.swatch },
                i.createElement(o.Z, {
                    hsl: r,
                    offset: '.50',
                    active: Math.abs(r.l - 0.5) < l && Math.abs(r.s - 0.5) < l,
                    onClick: n
                })
            ),
            i.createElement(
                'div',
                { style: s.swatch },
                i.createElement(o.Z, {
                    hsl: r,
                    offset: '.35',
                    active: Math.abs(r.l - 0.35) < l && Math.abs(r.s - 0.5) < l,
                    onClick: n
                })
            ),
            i.createElement(
                'div',
                { style: s.swatch },
                i.createElement(o.Z, {
                    hsl: r,
                    offset: '.20',
                    active: Math.abs(r.l - 0.2) < l && Math.abs(r.s - 0.5) < l,
                    onClick: n,
                    last: !0
                })
            ),
            i.createElement('div', { style: s.clear })
        );
    };
n.Z = s;
