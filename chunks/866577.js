n.d(t, { i: () => o });
var i = n(73800),
    r = n(186325),
    s = n(481060),
    a = n(588927);
let l = (e, t) => {
    let n = {
            opacity: 0,
            transform: ''
        },
        i = {
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
            ((n.transform = 'translate3d(0, -'.concat(10, 'px, 0)')), (i.transform = 'translate3d(0, '.concat(10, 'px, 0)')));
            break;
        case 'bottom':
            ((n.transform = 'translate3d(0, '.concat(10, 'px, 0)')), (i.transform = 'translate3d(0, -'.concat(10, 'px, 0)')));
            break;
        case 'left':
            ((n.transform = 'translate3d(-'.concat(10, 'px, 0, 0)')), (i.transform = 'translate3d('.concat(10, 'px, 0, 0)')));
            break;
        case 'right':
            ((n.transform = 'translate3d('.concat(10, 'px, 0, 0)')), (i.transform = 'translate3d(-'.concat(10, 'px, 0, 0)')));
    }
    return {
        from: n,
        enter: {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
        },
        leave: i,
        config: void 0
    };
};
function o(e) {
    var t, n;
    let { shouldShow: o, caretPosition: c, onExitComplete: d } = e,
        { reducedMotion: u } = i.useContext(r.S),
        m = l(c, u.enabled),
        { config: p } = m,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(m, ['config']);
    return (0, s.Yzy)(
        o,
        ((t = (function (e) {
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
        })({}, g)),
        (n = n =
            {
                config: null != p ? p : (e, t) => (o ? a.Z : a.R),
                onRest: () => {
                    o || null == d || d();
                }
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
        'animate-always'
    );
}
