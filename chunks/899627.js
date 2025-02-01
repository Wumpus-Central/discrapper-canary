n.d(t, { Z: () => o });
var i = n(192379),
    r = n(723184),
    a = n(820611),
    s = n(877837);
let o = function (e) {
    var t = e.onChange,
        n = e.rgb,
        o = e.hsl,
        l = e.hex,
        u = e.hsv,
        c = function (e, n) {
            if (e.hex)
                a.FX(e.hex) &&
                    t(
                        {
                            hex: e.hex,
                            source: 'hex'
                        },
                        n
                    );
            else if (e.rgb) {
                var i = e.rgb.split(',');
                a.p7(e.rgb, 'rgb') &&
                    t(
                        {
                            r: i[0],
                            g: i[1],
                            b: i[2],
                            a: 1,
                            source: 'rgb'
                        },
                        n
                    );
            } else if (e.hsv) {
                var r = e.hsv.split(',');
                a.p7(e.hsv, 'hsv') &&
                    ((r[2] = r[2].replace('%', '')),
                    (r[1] = r[1].replace('%', '')),
                    (r[0] = r[0].replace('\xB0', '')),
                    1 == r[1] ? (r[1] = 0.01) : 1 == r[2] && (r[2] = 0.01),
                    t(
                        {
                            h: Number(r[0]),
                            s: Number(r[1]),
                            v: Number(r[2]),
                            source: 'hsv'
                        },
                        n
                    ));
            } else if (e.hsl) {
                var s = e.hsl.split(',');
                a.p7(e.hsl, 'hsl') &&
                    ((s[2] = s[2].replace('%', '')),
                    (s[1] = s[1].replace('%', '')),
                    (s[0] = s[0].replace('\xB0', '')),
                    1 == p[1] ? (p[1] = 0.01) : 1 == p[2] && (p[2] = 0.01),
                    t(
                        {
                            h: Number(s[0]),
                            s: Number(s[1]),
                            v: Number(s[2]),
                            source: 'hsl'
                        },
                        n
                    ));
            }
        },
        d = (0, r.default)({
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
        _ = Math.round(o.h) + '\xB0, ' + Math.round(100 * o.s) + '%, ' + Math.round(100 * o.l) + '%',
        p = Math.round(u.h) + '\xB0, ' + Math.round(100 * u.s) + '%, ' + Math.round(100 * u.v) + '%';
    return i.createElement(
        'div',
        {
            style: d.wrap,
            className: 'flexbox-fix'
        },
        i.createElement(
            'div',
            { style: d.fields },
            i.createElement(
                'div',
                { style: d.double },
                i.createElement(s.Vm, {
                    style: {
                        input: d.input,
                        label: d.label
                    },
                    label: 'hex',
                    value: l,
                    onChange: c
                })
            ),
            i.createElement(
                'div',
                { style: d.column },
                i.createElement(
                    'div',
                    { style: d.single },
                    i.createElement(s.Vm, {
                        style: {
                            input: d.input2,
                            label: d.label2
                        },
                        label: 'rgb',
                        value: f,
                        onChange: c
                    })
                ),
                i.createElement(
                    'div',
                    { style: d.single },
                    i.createElement(s.Vm, {
                        style: {
                            input: d.input2,
                            label: d.label2
                        },
                        label: 'hsv',
                        value: p,
                        onChange: c
                    })
                ),
                i.createElement(
                    'div',
                    { style: d.single },
                    i.createElement(s.Vm, {
                        style: {
                            input: d.input2,
                            label: d.label2
                        },
                        label: 'hsl',
                        value: _,
                        onChange: c
                    })
                )
            )
        )
    );
};
