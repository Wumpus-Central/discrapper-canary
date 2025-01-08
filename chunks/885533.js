var a = r(259775),
    n = r(192379),
    o = r(639519),
    s = r.n(o),
    i = function (e) {
        var t = e.nodeType,
            r = e.styling,
            o = e.labelRenderer,
            s = e.keyPath,
            i = e.valueRenderer,
            c = e.value,
            u = e.valueGetter;
        return n.createElement(
            'li',
            r('value', t, s),
            n.createElement('label', r(['label', 'valueLabel'], t, s), o(s, t, !1, !1)),
            n.createElement(
                'span',
                r('valueText', t, s),
                i.apply(
                    void 0,
                    [
                        (void 0 === u
                            ? function (e) {
                                  return e;
                              }
                            : u)(c),
                        c
                    ].concat((0, a.Z)(s))
                )
            )
        );
    };
(i.propTypes = {
    nodeType: s().string.isRequired,
    styling: s().func.isRequired,
    labelRenderer: s().func.isRequired,
    keyPath: s().arrayOf(s().oneOfType([s().string, s().number]).isRequired).isRequired,
    valueRenderer: s().func.isRequired,
    value: s().any,
    valueGetter: s().func
}),
    (t.Z = i);
