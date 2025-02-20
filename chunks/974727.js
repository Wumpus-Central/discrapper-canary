n.d(t, { Z: () => o });
var r = n(192379),
    i = n(723184);
let o = function (e) {
    var t = e.hsl,
        n = (0, i.default)(
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
    return r.createElement('div', { style: n.picker });
};
