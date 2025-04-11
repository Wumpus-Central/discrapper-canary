n.d(t, { Z: () => b });
var i = n(200651),
    r = n(192379),
    l = n(481060),
    o = n(620662),
    a = n(841784),
    s = n(429589),
    c = n(499493),
    u = n(797342),
    d = n(314734),
    p = n(981631),
    m = n(977481);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { entry: t } = e,
        { user: n, activity: b, embeddedActivity: _ } = (0, u.n)(t),
        y = r.useMemo(() => {
            if (null == n || null == b) return null;
            let e = (0, o.Z)(b, p.xjy.JOIN) || (0, a.Z)(b);
            return e && e
                ? (0, i.jsx)(s.Z, {
                      embeddedActivity: _,
                      activity: b,
                      user: n,
                      ButtonComponent: (e) =>
                          (0, i.jsx)(
                              l.zxk,
                              h(f({}, e), {
                                  className: m.joinButton,
                                  onClick: function (t) {
                                      var n;
                                      t.stopPropagation(), null == (n = e.onClick) || n.call(e, t);
                                  }
                              })
                          )
                  })
                : null;
        }, [b, _, n]);
    return (0, i.jsx)(
        c.Z,
        h(f({}, e), {
            onReaction: () => {},
            onRequestOpen: () => {},
            customCTA: null != y ? y : null,
            popoutClassname: d.I4,
            popoutPosition: 'left'
        })
    );
}
