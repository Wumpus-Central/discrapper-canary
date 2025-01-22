var i = r(192379),
    a = r(723184),
    o = r(317019),
    s = r(716708),
    l =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    u = 13,
    c = function (e) {
        var n = e.color,
            r = e.style,
            o = e.onClick,
            c = void 0 === o ? function () {} : o,
            d = e.onHover,
            f = e.title,
            p = void 0 === f ? n : f,
            h = e.children,
            _ = e.focus,
            m = e.focusStyle,
            g = void 0 === m ? {} : m,
            E = 'transparent' === n,
            v = (0, a.default)({
                default: {
                    swatch: l(
                        {
                            background: n,
                            height: '100%',
                            width: '100%',
                            cursor: 'pointer',
                            position: 'relative',
                            outline: 'none'
                        },
                        r,
                        _ ? g : {}
                    )
                }
            }),
            y = function (e) {
                return c(n, e);
            },
            b = function (e) {
                return e.keyCode === u && c(n, e);
            },
            I = function (e) {
                return d(n, e);
            },
            T = {};
        return (
            d && (T.onMouseOver = I),
            i.createElement(
                'div',
                l(
                    {
                        style: v.swatch,
                        onClick: y,
                        title: p,
                        tabIndex: 0,
                        onKeyDown: b
                    },
                    T
                ),
                h,
                E &&
                    i.createElement(s.Z, {
                        borderRadius: v.swatch.borderRadius,
                        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
                    })
            )
        );
    };
n.Z = (0, o.I)(c);
