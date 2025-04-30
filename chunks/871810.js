r.d(t, { Z: () => i });
var n = r(192379),
    o = r(723184),
    a = r(341518);
let i = function (e) {
    var t = e.onClick,
        r = e.hsl,
        i = (0, o.default)({
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
        });
    return n.createElement(
        'div',
        { style: i.swatches },
        n.createElement(
            'div',
            { style: i.swatch },
            n.createElement(a.Z, {
                hsl: r,
                offset: '.80',
                active: 0.1 > Math.abs(r.l - 0.8) && 0.1 > Math.abs(r.s - 0.5),
                onClick: t,
                first: !0
            })
        ),
        n.createElement(
            'div',
            { style: i.swatch },
            n.createElement(a.Z, {
                hsl: r,
                offset: '.65',
                active: 0.1 > Math.abs(r.l - 0.65) && 0.1 > Math.abs(r.s - 0.5),
                onClick: t
            })
        ),
        n.createElement(
            'div',
            { style: i.swatch },
            n.createElement(a.Z, {
                hsl: r,
                offset: '.50',
                active: 0.1 > Math.abs(r.l - 0.5) && 0.1 > Math.abs(r.s - 0.5),
                onClick: t
            })
        ),
        n.createElement(
            'div',
            { style: i.swatch },
            n.createElement(a.Z, {
                hsl: r,
                offset: '.35',
                active: 0.1 > Math.abs(r.l - 0.35) && 0.1 > Math.abs(r.s - 0.5),
                onClick: t
            })
        ),
        n.createElement(
            'div',
            { style: i.swatch },
            n.createElement(a.Z, {
                hsl: r,
                offset: '.20',
                active: 0.1 > Math.abs(r.l - 0.2) && 0.1 > Math.abs(r.s - 0.5),
                onClick: t,
                last: !0
            })
        ),
        n.createElement('div', { style: i.clear })
    );
};
