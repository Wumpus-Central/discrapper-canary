var i = n(192379),
    r = n(476400),
    a = n.n(r),
    s = n(723184),
    o = n(329022),
    l = n(829307),
    u = n(820611),
    c = n(877837),
    d = n(279796),
    f = n(3024),
    _ = function (e) {
        var t = e.onChange,
            n = e.onSwatchHover,
            r = e.colors,
            a = e.hex,
            _ = e.rgb,
            p = e.styles,
            h = void 0 === p ? {} : p,
            m = e.className,
            g = void 0 === m ? '' : m,
            E = (0, s.default)(
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
                    ? u.FX(e.hex) &&
                      t(
                          {
                              hex: e.hex,
                              source: 'hex'
                          },
                          n
                      )
                    : t(e, n);
            };
        return i.createElement(
            c.xZ,
            {
                style: E.Compact,
                styles: h
            },
            i.createElement(
                'div',
                {
                    style: E.compact,
                    className: 'compact-picker ' + g
                },
                i.createElement(
                    'div',
                    null,
                    (0, o.Z)(r, function (e) {
                        return i.createElement(d.Z, {
                            key: e,
                            color: e,
                            active: e.toLowerCase() === a,
                            onClick: v,
                            onSwatchHover: n
                        });
                    }),
                    i.createElement('div', { style: E.clear })
                ),
                i.createElement(f.Z, {
                    hex: a,
                    rgb: _,
                    onChange: v
                })
            )
        );
    };
(_.propTypes = {
    colors: a().arrayOf(a().string),
    styles: a().object
}),
    (_.defaultProps = {
        colors: ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'],
        styles: {}
    }),
    (0, c.t1)(_);
