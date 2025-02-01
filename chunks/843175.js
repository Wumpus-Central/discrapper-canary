var i = n(192379),
    r = n(476400),
    a = n.n(r),
    s = n(723184),
    o = n(829307),
    l = n(877837),
    u = n(871810),
    c = n(913727),
    d = function (e) {
        var t = e.hsl,
            n = e.onChange,
            r = e.pointer,
            a = e.styles,
            c = void 0 === a ? {} : a,
            d = e.className,
            f = void 0 === d ? '' : d,
            _ = (0, s.default)(
                (0, o.Z)(
                    {
                        default: {
                            hue: {
                                height: '12px',
                                position: 'relative'
                            },
                            Hue: { radius: '2px' }
                        }
                    },
                    c
                )
            );
        return i.createElement(
            'div',
            {
                style: _.wrap || {},
                className: 'slider-picker ' + f
            },
            i.createElement(
                'div',
                { style: _.hue },
                i.createElement(l.PS, {
                    style: _.Hue,
                    hsl: t,
                    pointer: r,
                    onChange: n
                })
            ),
            i.createElement(
                'div',
                { style: _.swatches },
                i.createElement(u.Z, {
                    hsl: t,
                    onClick: n
                })
            )
        );
    };
(d.propTypes = { styles: a().object }),
    (d.defaultProps = {
        pointer: c.Z,
        styles: {}
    }),
    (0, l.t1)(d);
