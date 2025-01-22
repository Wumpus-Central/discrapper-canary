var i = r(192379),
    a = r(476400),
    o = r.n(a),
    s = r(723184),
    l = r(877837),
    u =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    c = function (e) {
        var n = e.colors,
            r = e.onClick,
            a = void 0 === r ? function () {} : r,
            o = e.onSwatchHover,
            c = (0, s.default)(
                {
                    default: {
                        colors: {
                            margin: '0 -10px',
                            padding: '10px 0 0 10px',
                            borderTop: '1px solid #eee',
                            display: 'flex',
                            flexWrap: 'wrap',
                            position: 'relative'
                        },
                        swatchWrap: {
                            width: '16px',
                            height: '16px',
                            margin: '0 10px 10px 0'
                        },
                        swatch: {
                            borderRadius: '3px',
                            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)'
                        }
                    },
                    'no-presets': { colors: { display: 'none' } }
                },
                { 'no-presets': !n || !n.length }
            ),
            d = function (e, n) {
                a(
                    {
                        hex: e,
                        source: 'hex'
                    },
                    n
                );
            };
        return i.createElement(
            'div',
            {
                style: c.colors,
                className: 'flexbox-fix'
            },
            n.map(function (e) {
                var n = 'string' == typeof e ? { color: e } : e,
                    r = '' + n.color + (n.title || '');
                return i.createElement(
                    'div',
                    {
                        key: r,
                        style: c.swatchWrap
                    },
                    i.createElement(
                        l.m4,
                        u({}, n, {
                            style: c.swatch,
                            onClick: d,
                            onHover: o,
                            focusStyle: { boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ' + n.color }
                        })
                    )
                );
            })
        );
    };
(c.propTypes = {
    colors: o().arrayOf(
        o().oneOfType([
            o().string,
            o().shape({
                color: o().string,
                title: o().string
            })
        ])
    ).isRequired
}),
    (n.Z = c);
