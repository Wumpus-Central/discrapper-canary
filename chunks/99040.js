var i = r(192379),
    a = r(476400),
    o = r.n(a),
    s = r(723184),
    l = r(329022),
    u = r(829307),
    c = r(820611),
    d = r(877837),
    f = r(279796),
    p = r(3024),
    h = function (e) {
        var n = e.onChange,
            r = e.onSwatchHover,
            a = e.colors,
            o = e.hex,
            h = e.rgb,
            _ = e.styles,
            m = void 0 === _ ? {} : _,
            g = e.className,
            E = void 0 === g ? '' : g,
            v = (0, s.default)(
                (0, u.Z)(
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
                    m
                )
            ),
            y = function (e, r) {
                e.hex
                    ? c.FX(e.hex) &&
                      n(
                          {
                              hex: e.hex,
                              source: 'hex'
                          },
                          r
                      )
                    : n(e, r);
            };
        return i.createElement(
            d.xZ,
            {
                style: v.Compact,
                styles: m
            },
            i.createElement(
                'div',
                {
                    style: v.compact,
                    className: 'compact-picker ' + E
                },
                i.createElement(
                    'div',
                    null,
                    (0, l.Z)(a, function (e) {
                        return i.createElement(f.Z, {
                            key: e,
                            color: e,
                            active: e.toLowerCase() === o,
                            onClick: y,
                            onSwatchHover: r
                        });
                    }),
                    i.createElement('div', { style: v.clear })
                ),
                i.createElement(p.Z, {
                    hex: o,
                    rgb: h,
                    onChange: y
                })
            )
        );
    };
(h.propTypes = {
    colors: o().arrayOf(o().string),
    styles: o().object
}),
    (h.defaultProps = {
        colors: ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'],
        styles: {}
    }),
    (0, d.t1)(h);
