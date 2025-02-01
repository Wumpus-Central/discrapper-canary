n.d(t, { Z: () => a });
var i = n(192379),
    r = n(723184);
let a = function (e) {
    var t = e.rgb,
        n = e.currentColor,
        a = (0, r.default)({
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
                    background: n,
                    boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000'
                },
                label: {
                    fontSize: '14px',
                    color: '#000',
                    textAlign: 'center'
                }
            }
        });
    return i.createElement('div', null, i.createElement('div', { style: a.label }, 'new'), i.createElement('div', { style: a.swatches }, i.createElement('div', { style: a.new }), i.createElement('div', { style: a.current })), i.createElement('div', { style: a.label }, 'current'));
};
