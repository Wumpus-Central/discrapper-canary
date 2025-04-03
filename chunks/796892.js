r.d(t, { Z: () => c });
var n = r(192379),
    o = r(476400),
    a = r.n(o),
    i = r(723184),
    l = r(877837),
    s =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    u = function (e) {
        var t = e.colors,
            r = e.onClick,
            o = void 0 === r ? function () {} : r,
            a = e.onSwatchHover,
            u = (0, i.default)(
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
                { 'no-presets': !t || !t.length }
            ),
            c = function (e, t) {
                o(
                    {
                        hex: e,
                        source: 'hex'
                    },
                    t
                );
            };
        return n.createElement(
            'div',
            {
                style: u.colors,
                className: 'flexbox-fix'
            },
            t.map(function (e) {
                var t = 'string' == typeof e ? { color: e } : e,
                    r = '' + t.color + (t.title || '');
                return n.createElement(
                    'div',
                    {
                        key: r,
                        style: u.swatchWrap
                    },
                    n.createElement(
                        l.m4,
                        s({}, t, {
                            style: u.swatch,
                            onClick: c,
                            onHover: a,
                            focusStyle: { boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ' + t.color }
                        })
                    )
                );
            })
        );
    };
u.propTypes = {
    colors: a().arrayOf(
        a().oneOfType([
            a().string,
            a().shape({
                color: a().string,
                title: a().string
            })
        ])
    ).isRequired
};
let c = u;
