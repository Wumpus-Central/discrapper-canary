var i = r(192379),
    a = r(723184),
    o = function (e) {
        var n = e.hsl,
            r = (0, a.default)(
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
                { 'black-outline': n.l > 0.5 }
            );
        return i.createElement('div', { style: r.picker });
    };
n.Z = o;
