(n.d(t, { O: () => r }), n(388685), n(467055));
var i = n(73800);
let r = function (e) {
    let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
        n = (0, i.useCallback)(
            (e) => {
                let n = o.current[e];
                null != n &&
                    ((n.style.scrollMarginTop = ''.concat(t, 'px')),
                    n.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    }));
            },
            [t]
        ),
        [r, s] = (0, i.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
        [l, a] = (0, i.useState)(e[0]);
    (0, i.useEffect)(() => {
        let e = Object.keys(r).filter((e) => r[e]);
        e.length > 0 && a(e[0]);
    }, [r]);
    let o = (0, i.useRef)({});
    return (
        (0, i.useEffect)(() => {
            let e = new IntersectionObserver((e) => {
                e.forEach((e) => {
                    s((t) => {
                        var n, i;
                        return (
                            (n = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            ((i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = i));
                                        }));
                                }
                                return e;
                            })({}, t)),
                            (i = i = { [e.target.id]: e.isIntersecting }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            n
                        );
                    });
                });
            });
            return (
                Object.values(o.current).forEach((t) => {
                    null != t && e.observe(t);
                }),
                () => e.disconnect()
            );
        }, []),
        {
            navBarSections: (0, i.useMemo)(
                () =>
                    e.reduce(
                        (e, t, i) => (
                            (e[t] = {
                                id: t,
                                ref: (e) => {
                                    ((o.current[t] = e), null != e && (e.id = t));
                                },
                                scrollToSection: () => n(t),
                                order: i
                            }),
                            e
                        ),
                        {}
                    ),
                [e, n]
            ),
            activeSectionId: l,
            setActiveSectionId: a
        }
    );
};
