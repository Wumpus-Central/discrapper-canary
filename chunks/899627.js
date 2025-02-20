n.d(t, { Z: () => s });
var r = n(192379),
    i = n(723184),
    o = n(820611),
    a = n(877837);
let s = function (e) {
    var t = e.onChange,
        n = e.rgb,
        s = e.hsl,
        l = e.hex,
        c = e.hsv,
        u = function (e, n) {
            if (e.hex)
                o.FX(e.hex) &&
                    t(
                        {
                            hex: e.hex,
                            source: 'hex'
                        },
                        n
                    );
            else if (e.rgb) {
                var r = e.rgb.split(',');
                o.p7(e.rgb, 'rgb') &&
                    t(
                        {
                            r: r[0],
                            g: r[1],
                            b: r[2],
                            a: 1,
                            source: 'rgb'
                        },
                        n
                    );
            } else if (e.hsv) {
                var i = e.hsv.split(',');
                o.p7(e.hsv, 'hsv') &&
                    ((i[2] = i[2].replace('%', '')),
                    (i[1] = i[1].replace('%', '')),
                    (i[0] = i[0].replace('\xB0', '')),
                    1 == i[1] ? (i[1] = 0.01) : 1 == i[2] && (i[2] = 0.01),
                    t(
                        {
                            h: Number(i[0]),
                            s: Number(i[1]),
                            v: Number(i[2]),
                            source: 'hsv'
                        },
                        n
                    ));
            } else if (e.hsl) {
                var a = e.hsl.split(',');
                o.p7(e.hsl, 'hsl') &&
                    ((a[2] = a[2].replace('%', '')),
                    (a[1] = a[1].replace('%', '')),
                    (a[0] = a[0].replace('\xB0', '')),
                    1 == _[1] ? (_[1] = 0.01) : 1 == _[2] && (_[2] = 0.01),
                    t(
                        {
                            h: Number(a[0]),
                            s: Number(a[1]),
                            v: Number(a[2]),
                            source: 'hsl'
                        },
                        n
                    ));
            }
        },
        d = (0, i.default)({
            default: {
                wrap: {
                    display: 'flex',
                    height: '100px',
                    marginTop: '4px'
                },
                fields: { width: '100%' },
                column: {
                    paddingTop: '10px',
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                double: {
                    padding: '0px 4.4px',
                    boxSizing: 'border-box'
                },
                input: {
                    width: '100%',
                    height: '38px',
                    boxSizing: 'border-box',
                    padding: '4px 10% 3px',
                    textAlign: 'center',
                    border: '1px solid #dadce0',
                    fontSize: '11px',
                    textTransform: 'lowercase',
                    borderRadius: '5px',
                    outline: 'none',
                    fontFamily: 'Roboto,Arial,sans-serif'
                },
                input2: {
                    height: '38px',
                    width: '100%',
                    border: '1px solid #dadce0',
                    boxSizing: 'border-box',
                    fontSize: '11px',
                    textTransform: 'lowercase',
                    borderRadius: '5px',
                    outline: 'none',
                    paddingLeft: '10px',
                    fontFamily: 'Roboto,Arial,sans-serif'
                },
                label: {
                    textAlign: 'center',
                    fontSize: '12px',
                    background: '#fff',
                    position: 'absolute',
                    textTransform: 'uppercase',
                    color: '#3c4043',
                    width: '35px',
                    top: '-6px',
                    left: '0',
                    right: '0',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    fontFamily: 'Roboto,Arial,sans-serif'
                },
                label2: {
                    left: '10px',
                    textAlign: 'center',
                    fontSize: '12px',
                    background: '#fff',
                    position: 'absolute',
                    textTransform: 'uppercase',
                    color: '#3c4043',
                    width: '32px',
                    top: '-6px',
                    fontFamily: 'Roboto,Arial,sans-serif'
                },
                single: {
                    flexGrow: '1',
                    margin: '0px 4.4px'
                }
            }
        }),
        f = n.r + ', ' + n.g + ', ' + n.b,
        p = Math.round(s.h) + '\xB0, ' + Math.round(100 * s.s) + '%, ' + Math.round(100 * s.l) + '%',
        _ = Math.round(c.h) + '\xB0, ' + Math.round(100 * c.s) + '%, ' + Math.round(100 * c.v) + '%';
    return r.createElement(
        'div',
        {
            style: d.wrap,
            className: 'flexbox-fix'
        },
        r.createElement(
            'div',
            { style: d.fields },
            r.createElement(
                'div',
                { style: d.double },
                r.createElement(a.Vm, {
                    style: {
                        input: d.input,
                        label: d.label
                    },
                    label: 'hex',
                    value: l,
                    onChange: u
                })
            ),
            r.createElement(
                'div',
                { style: d.column },
                r.createElement(
                    'div',
                    { style: d.single },
                    r.createElement(a.Vm, {
                        style: {
                            input: d.input2,
                            label: d.label2
                        },
                        label: 'rgb',
                        value: f,
                        onChange: u
                    })
                ),
                r.createElement(
                    'div',
                    { style: d.single },
                    r.createElement(a.Vm, {
                        style: {
                            input: d.input2,
                            label: d.label2
                        },
                        label: 'hsv',
                        value: _,
                        onChange: u
                    })
                ),
                r.createElement(
                    'div',
                    { style: d.single },
                    r.createElement(a.Vm, {
                        style: {
                            input: d.input2,
                            label: d.label2
                        },
                        label: 'hsl',
                        value: p,
                        onChange: u
                    })
                )
            )
        )
    );
};
