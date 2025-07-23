n.d(t, { i: () => s });
var r = n(73800),
    i = n(186325),
    l = n(481060),
    a = n(588927);
let o = (e, t) => {
    let n = {
            opacity: 0,
            transform: ''
        },
        r = {
            opacity: 0,
            transform: ''
        };
    if (t)
        return {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: { duration: 150 }
        };
    switch (e) {
        case 'top':
            ((n.transform = 'translate3d(0, -'.concat(10, 'px, 0)')), (r.transform = 'translate3d(0, '.concat(10, 'px, 0)')));
            break;
        case 'bottom':
            ((n.transform = 'translate3d(0, '.concat(10, 'px, 0)')), (r.transform = 'translate3d(0, -'.concat(10, 'px, 0)')));
            break;
        case 'left':
            ((n.transform = 'translate3d(-'.concat(10, 'px, 0, 0)')), (r.transform = 'translate3d('.concat(10, 'px, 0, 0)')));
            break;
        case 'right':
            ((n.transform = 'translate3d('.concat(10, 'px, 0, 0)')), (r.transform = 'translate3d(-'.concat(10, 'px, 0, 0)')));
    }
    return {
        from: n,
        enter: {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
        },
        leave: r,
        config: void 0
    };
};
function s(e) {
    var t, n;
    let { shouldShow: s, caretPosition: c, onExitComplete: u } = e,
        { reducedMotion: d } = r.useContext(i.S),
        p = o(c, d.enabled),
        { config: m } = p,
        f = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(p, ['config']);
    return (0, l.Yzy)(
        s,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        ((r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r));
                    }));
            }
            return e;
        })({}, f)),
        (n = n =
            {
                config: null != m ? m : (e, t) => (s ? a.Z : a.R),
                onRest: () => {
                    s || null == u || u();
                }
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
        'animate-always'
    );
}
