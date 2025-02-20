n.d(t, { Z: () => u });
var r = n(192379),
    i = n(723184),
    o = n(317019),
    a = n(716708),
    s =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    l = 13,
    c = function (e) {
        var t = e.color,
            n = e.style,
            o = e.onClick,
            c = void 0 === o ? function () {} : o,
            u = e.onHover,
            d = e.title,
            f = void 0 === d ? t : d,
            p = e.children,
            _ = e.focus,
            h = e.focusStyle,
            m = void 0 === h ? {} : h,
            g = 'transparent' === t,
            E = (0, i.default)({
                default: {
                    swatch: s(
                        {
                            background: t,
                            height: '100%',
                            width: '100%',
                            cursor: 'pointer',
                            position: 'relative',
                            outline: 'none'
                        },
                        n,
                        _ ? m : {}
                    )
                }
            }),
            v = function (e) {
                return c(t, e);
            },
            b = function (e) {
                return e.keyCode === l && c(t, e);
            },
            y = function (e) {
                return u(t, e);
            },
            O = {};
        return (
            u && (O.onMouseOver = y),
            r.createElement(
                'div',
                s(
                    {
                        style: E.swatch,
                        onClick: v,
                        title: f,
                        tabIndex: 0,
                        onKeyDown: b
                    },
                    O
                ),
                p,
                g &&
                    r.createElement(a.Z, {
                        borderRadius: E.swatch.borderRadius,
                        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
                    })
            )
        );
    };
let u = (0, o.I)(c);
