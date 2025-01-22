r.d(n, {
    kZ: function () {
        return h;
    }
});
var i = r(4313),
    a = r(493623),
    o = r(620720),
    s = r(343713),
    l = r(540321),
    u = r(609027),
    c = r(375317),
    d = r(882159),
    f = {
        placement: 'bottom',
        modifiers: [],
        strategy: 'absolute'
    };
function p() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    return !n.some(function (e) {
        return !(e && 'function' == typeof e.getBoundingClientRect);
    });
}
function h(e) {
    void 0 === e && (e = {});
    var n = e,
        r = n.defaultModifiers,
        h = void 0 === r ? [] : r,
        _ = n.defaultOptions,
        m = void 0 === _ ? f : _;
    return function (e, n, r) {
        void 0 === r && (r = m);
        var _ = {
                placement: 'bottom',
                orderedModifiers: [],
                options: Object.assign({}, f, m),
                modifiersData: {},
                elements: {
                    reference: e,
                    popper: n
                },
                attributes: {},
                styles: {}
            },
            g = [],
            E = !1,
            v = {
                state: _,
                setOptions: function (r) {
                    var i = 'function' == typeof r ? r(_.options) : r;
                    b(),
                        (_.options = Object.assign({}, m, _.options, i)),
                        (_.scrollParents = {
                            reference: (0, d.kK)(e) ? (0, o.Z)(e) : e.contextElement ? (0, o.Z)(e.contextElement) : [],
                            popper: (0, o.Z)(n)
                        });
                    var a = (0, l.Z)((0, c.Z)([].concat(h, _.options.modifiers)));
                    return (
                        (_.orderedModifiers = a.filter(function (e) {
                            return e.enabled;
                        })),
                        y(),
                        v.update()
                    );
                },
                forceUpdate: function () {
                    if (E) return;
                    var e = _.elements,
                        n = e.reference,
                        r = e.popper;
                    if (!!p(n, r)) {
                        (_.rects = {
                            reference: (0, i.Z)(n, (0, s.Z)(r), 'fixed' === _.options.strategy),
                            popper: (0, a.Z)(r)
                        }),
                            (_.reset = !1),
                            (_.placement = _.options.placement),
                            _.orderedModifiers.forEach(function (e) {
                                return (_.modifiersData[e.name] = Object.assign({}, e.data));
                            });
                        for (var o = 0; o < _.orderedModifiers.length; o++) {
                            if (!0 === _.reset) {
                                (_.reset = !1), (o = -1);
                                continue;
                            }
                            var l = _.orderedModifiers[o],
                                u = l.fn,
                                c = l.options,
                                d = void 0 === c ? {} : c,
                                f = l.name;
                            'function' == typeof u &&
                                (_ =
                                    u({
                                        state: _,
                                        options: d,
                                        name: f,
                                        instance: v
                                    }) || _);
                        }
                    }
                },
                update: (0, u.Z)(function () {
                    return new Promise(function (e) {
                        v.forceUpdate(), e(_);
                    });
                }),
                destroy: function () {
                    b(), (E = !0);
                }
            };
        if (!p(e, n)) return v;
        function y() {
            _.orderedModifiers.forEach(function (e) {
                var n = e.name,
                    r = e.options,
                    i = void 0 === r ? {} : r,
                    a = e.effect;
                if ('function' == typeof a) {
                    var o = a({
                            state: _,
                            name: n,
                            instance: v,
                            options: i
                        }),
                        s = function () {};
                    g.push(o || s);
                }
            });
        }
        function b() {
            g.forEach(function (e) {
                return e();
            }),
                (g = []);
        }
        return (
            v.setOptions(r).then(function (e) {
                !E && r.onFirstUpdate && r.onFirstUpdate(e);
            }),
            v
        );
    };
}
