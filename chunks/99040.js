var r = n(192379),
    i = n(476400),
    o = n.n(i),
    a = n(723184),
    s = n(329022),
    l = n(829307),
    c = n(820611),
    u = n(877837),
    d = n(279796),
    f = n(3024),
    p = function (e) {
        var t = e.onChange,
            n = e.onSwatchHover,
            i = e.colors,
            o = e.hex,
            p = e.rgb,
            _ = e.styles,
            h = void 0 === _ ? {} : _,
            m = e.className,
            g = void 0 === m ? '' : m,
            E = (0, a.default)(
                (0, l.Z)(
                    {
                        default: {
                            Compact: {
                                background: '#f6f6f6',
                                radius: '4px'
                            },
                            compact: {
                                paddingTop: '5px',
                                paddingLeft: '5px',
                                boxSizing: 'initial',
                                width: '240px'
                            },
                            clear: { clear: 'both' }
                        }
                    },
                    h
                )
            ),
            v = function (e, n) {
                e.hex
                    ? c.FX(e.hex) &&
                      t(
                          {
                              hex: e.hex,
                              source: 'hex'
                          },
                          n
                      )
                    : t(e, n);
            };
        return r.createElement(
            u.xZ,
            {
                style: E.Compact,
                styles: h
            },
            r.createElement(
                'div',
                {
                    style: E.compact,
                    className: 'compact-picker ' + g
                },
                r.createElement(
                    'div',
                    null,
                    (0, s.Z)(i, function (e) {
                        return r.createElement(d.Z, {
                            key: e,
                            color: e,
                            active: e.toLowerCase() === o,
                            onClick: v,
                            onSwatchHover: n
                        });
                    }),
                    r.createElement('div', { style: E.clear })
                ),
                r.createElement(f.Z, {
                    hex: o,
                    rgb: p,
                    onChange: v
                })
            )
        );
    };
(p.propTypes = {
    colors: o().arrayOf(o().string),
    styles: o().object
}),
    (p.defaultProps = {
        colors: ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'],
        styles: {}
    }),
    (0, u.t1)(p);
