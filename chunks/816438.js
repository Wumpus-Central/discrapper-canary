n.d(t, { kZ: () => p });
var r = n(4313),
    i = n(493623),
    o = n(620720),
    a = n(343713),
    s = n(540321),
    l = n(609027),
    c = n(375317),
    u = n(882159),
    d = {
        placement: 'bottom',
        modifiers: [],
        strategy: 'absolute'
    };
function f() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function (e) {
        return !(e && 'function' == typeof e.getBoundingClientRect);
    });
}
function p(e) {
    void 0 === e && (e = {});
    var t = e,
        n = t.defaultModifiers,
        p = void 0 === n ? [] : n,
        _ = t.defaultOptions,
        h = void 0 === _ ? d : _;
    return function (e, t, n) {
        void 0 === n && (n = h);
        var _ = {
                placement: 'bottom',
                orderedModifiers: [],
                options: Object.assign({}, d, h),
                modifiersData: {},
                elements: {
                    reference: e,
                    popper: t
                },
                attributes: {},
                styles: {}
            },
            m = [],
            g = !1,
            E = {
                state: _,
                setOptions: function (n) {
                    var r = 'function' == typeof n ? n(_.options) : n;
                    b(),
                        (_.options = Object.assign({}, h, _.options, r)),
                        (_.scrollParents = {
                            reference: (0, u.kK)(e) ? (0, o.Z)(e) : e.contextElement ? (0, o.Z)(e.contextElement) : [],
                            popper: (0, o.Z)(t)
                        });
                    var i = (0, s.Z)((0, c.Z)([].concat(p, _.options.modifiers)));
                    return (
                        (_.orderedModifiers = i.filter(function (e) {
                            return e.enabled;
                        })),
                        v(),
                        E.update()
                    );
                },
                forceUpdate: function () {
                    if (!g) {
                        var e = _.elements,
                            t = e.reference,
                            n = e.popper;
                        if (f(t, n)) {
                            (_.rects = {
                                reference: (0, r.Z)(t, (0, a.Z)(n), 'fixed' === _.options.strategy),
                                popper: (0, i.Z)(n)
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
                                var s = _.orderedModifiers[o],
                                    l = s.fn,
                                    c = s.options,
                                    u = void 0 === c ? {} : c,
                                    d = s.name;
                                'function' == typeof l &&
                                    (_ =
                                        l({
                                            state: _,
                                            options: u,
                                            name: d,
                                            instance: E
                                        }) || _);
                            }
                        }
                    }
                },
                update: (0, l.Z)(function () {
                    return new Promise(function (e) {
                        E.forceUpdate(), e(_);
                    });
                }),
                destroy: function () {
                    b(), (g = !0);
                }
            };
        if (!f(e, t)) return E;
        function v() {
            _.orderedModifiers.forEach(function (e) {
                var t = e.name,
                    n = e.options,
                    r = void 0 === n ? {} : n,
                    i = e.effect;
                if ('function' == typeof i) {
                    var o = i({
                            state: _,
                            name: t,
                            instance: E,
                            options: r
                        }),
                        a = function () {};
                    m.push(o || a);
                }
            });
        }
        function b() {
            m.forEach(function (e) {
                return e();
            }),
                (m = []);
        }
        return (
            E.setOptions(n).then(function (e) {
                !g && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            E
        );
    };
}
