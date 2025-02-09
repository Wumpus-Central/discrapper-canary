n.d(t, { Z: () => c });
var i = n(192379),
    r = n(723184),
    a = n(317019),
    s = n(716708),
    o =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    l = 13,
    u = function (e) {
        var t = e.color,
            n = e.style,
            a = e.onClick,
            u = void 0 === a ? function () {} : a,
            c = e.onHover,
            d = e.title,
            f = void 0 === d ? t : d,
            _ = e.children,
            p = e.focus,
            h = e.focusStyle,
            m = void 0 === h ? {} : h,
            g = 'transparent' === t,
            E = (0, r.default)({
                default: {
                    swatch: o(
                        {
                            background: t,
                            height: '100%',
                            width: '100%',
                            cursor: 'pointer',
                            position: 'relative',
                            outline: 'none'
                        },
                        n,
                        p ? m : {}
                    )
                }
            }),
            v = function (e) {
                return u(t, e);
            },
            y = function (e) {
                return e.keyCode === l && u(t, e);
            },
            I = function (e) {
                return c(t, e);
            },
            T = {};
        return (
            c && (T.onMouseOver = I),
            i.createElement(
                'div',
                o(
                    {
                        style: E.swatch,
                        onClick: v,
                        title: f,
                        tabIndex: 0,
                        onKeyDown: y
                    },
                    T
                ),
                _,
                g &&
                    i.createElement(s.Z, {
                        borderRadius: E.swatch.borderRadius,
                        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
                    })
            )
        );
    };
let c = (0, a.I)(u);
