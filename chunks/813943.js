r.d(t, { Z: () => a });
var n = r(73800),
    o = r(9196);
let a = function (e) {
    var t = e.rgb,
        r = e.currentColor,
        a = (0, o.default)({
            default: {
                swatches: {
                    border: '1px solid #B3B3B3',
                    borderBottom: '1px solid #F0F0F0',
                    marginBottom: '2px',
                    marginTop: '1px'
                },
                new: {
                    height: '34px',
                    background: 'rgb(' + t.r + ',' + t.g + ', ' + t.b + ')',
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
    return n.createElement('div', null, n.createElement('div', { style: a.label }, 'new'), n.createElement('div', { style: a.swatches }, n.createElement('div', { style: a.new }), n.createElement('div', { style: a.current })), n.createElement('div', { style: a.label }, 'current'));
};
