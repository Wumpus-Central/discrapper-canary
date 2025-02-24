var n = r(192379),
    o = r(476400),
    a = r.n(o),
    i = r(723184),
    l = r(829307),
    s = r(877837),
    u = r(871810),
    c = r(913727),
    p = function (e) {
        var t = e.hsl,
            r = e.onChange,
            o = e.pointer,
            a = e.styles,
            c = e.className,
            p = (0, i.default)(
                (0, l.Z)(
                    {
                        default: {
                            hue: {
                                height: '12px',
                                position: 'relative'
                            },
                            Hue: { radius: '2px' }
                        }
                    },
                    void 0 === a ? {} : a
                )
            );
        return n.createElement(
            'div',
            {
                style: p.wrap || {},
                className: 'slider-picker ' + (void 0 === c ? '' : c)
            },
            n.createElement(
                'div',
                { style: p.hue },
                n.createElement(s.PS, {
                    style: p.Hue,
                    hsl: t,
                    pointer: o,
                    onChange: r
                })
            ),
            n.createElement(
                'div',
                { style: p.swatches },
                n.createElement(u.Z, {
                    hsl: t,
                    onClick: r
                })
            )
        );
    };
(p.propTypes = { styles: a().object }),
    (p.defaultProps = {
        pointer: c.Z,
        styles: {}
    }),
    (0, s.t1)(p);
