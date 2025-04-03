r.d(t, { Z: () => a });
var n = r(192379),
    o = r(723184);
let a = function (e) {
    var t = e.hsl,
        r = (0, o.default)(
            {
                default: {
                    picker: {
                        width: '12px',
                        height: '12px',
                        borderRadius: '6px',
                        boxShadow: 'inset 0 0 0 1px #fff',
                        transform: 'translate(-6px, -6px)'
                    }
                },
                'black-outline': { picker: { boxShadow: 'inset 0 0 0 1px #000' } }
            },
            { 'black-outline': t.l > 0.5 }
        );
    return n.createElement('div', { style: r.picker });
};
