var i = r(192379),
    a = r(723184),
    o = function (e) {
        var n = e.rgb,
            r = e.currentColor,
            o = (0, a.default)({
                default: {
                    swatches: {
                        border: '1px solid #B3B3B3',
                        borderBottom: '1px solid #F0F0F0',
                        marginBottom: '2px',
                        marginTop: '1px'
                    },
                    new: {
                        height: '34px',
                        background: 'rgb(' + n.r + ',' + n.g + ', ' + n.b + ')',
                        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000'
                    },
                    current: {
                        height: '34px',
                        background: r,
                        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000'
                    },
                    label: {
                        fontSize: '14px',
                        color: '#000',
                        textAlign: 'center'
                    }
                }
            });
        return i.createElement('div', null, i.createElement('div', { style: o.label }, 'new'), i.createElement('div', { style: o.swatches }, i.createElement('div', { style: o.new }), i.createElement('div', { style: o.current })), i.createElement('div', { style: o.label }, 'current'));
    };
n.Z = o;
