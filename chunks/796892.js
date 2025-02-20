n.d(t, { Z: () => u });
var r = n(192379),
    i = n(476400),
    o = n.n(i),
    a = n(723184),
    s = n(877837),
    l =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    c = function (e) {
        var t = e.colors,
            n = e.onClick,
            i = void 0 === n ? function () {} : n,
            o = e.onSwatchHover,
            c = (0, a.default)(
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
            u = function (e, t) {
                i(
                    {
                        hex: e,
                        source: 'hex'
                    },
                    t
                );
            };
        return r.createElement(
            'div',
            {
                style: c.colors,
                className: 'flexbox-fix'
            },
            t.map(function (e) {
                var t = 'string' == typeof e ? { color: e } : e,
                    n = '' + t.color + (t.title || '');
                return r.createElement(
                    'div',
                    {
                        key: n,
                        style: c.swatchWrap
                    },
                    r.createElement(
                        s.m4,
                        l({}, t, {
                            style: c.swatch,
                            onClick: u,
                            onHover: o,
                            focusStyle: { boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ' + t.color }
                        })
                    )
                );
            })
        );
    };
c.propTypes = {
    colors: o().arrayOf(
        o().oneOfType([
            o().string,
            o().shape({
                color: o().string,
                title: o().string
            })
        ])
    ).isRequired
};
let u = c;
