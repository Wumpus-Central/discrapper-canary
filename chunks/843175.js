var r = n(192379),
    i = n(476400),
    o = n.n(i),
    a = n(723184),
    s = n(829307),
    l = n(877837),
    c = n(871810),
    u = n(913727),
    d = function (e) {
        var t = e.hsl,
            n = e.onChange,
            i = e.pointer,
            o = e.styles,
            u = void 0 === o ? {} : o,
            d = e.className,
            f = void 0 === d ? '' : d,
            p = (0, a.default)(
                (0, s.Z)(
                    {
                        default: {
                            hue: {
                                height: '12px',
                                position: 'relative'
                            },
                            Hue: { radius: '2px' }
                        }
                    },
                    u
                )
            );
        return r.createElement(
            'div',
            {
                style: p.wrap || {},
                className: 'slider-picker ' + f
            },
            r.createElement(
                'div',
                { style: p.hue },
                r.createElement(l.PS, {
                    style: p.Hue,
                    hsl: t,
                    pointer: i,
                    onChange: n
                })
            ),
            r.createElement(
                'div',
                { style: p.swatches },
                r.createElement(c.Z, {
                    hsl: t,
                    onClick: n
                })
            )
        );
    };
(d.propTypes = { styles: o().object }),
    (d.defaultProps = {
        pointer: u.Z,
        styles: {}
    }),
    (0, l.t1)(d);
