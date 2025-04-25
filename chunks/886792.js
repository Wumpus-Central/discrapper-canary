n.d(t, { Z: () => _ });
var i = n(200651),
    r = n(192379),
    l = n(481060),
    o = n(620662),
    a = n(841784),
    s = n(429589),
    c = n(100527),
    u = n(499493),
    d = n(797342),
    p = n(314734),
    m = n(981631),
    f = n(977481);
function h(e) {
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
function b(e, t) {
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
function _(e) {
    let { entry: t } = e,
        { user: n, activity: _, embeddedActivity: y } = (0, d.n)(t),
        v = r.useMemo(() => {
            if (null == n || null == _) return null;
            let e = (0, o.Z)(_, m.xjy.JOIN) || (0, a.Z)(_);
            return e && e
                ? (0, i.jsx)(s.Z, {
                      embeddedActivity: y,
                      activity: _,
                      user: n,
                      ButtonComponent: (e) =>
                          (0, i.jsx)(
                              l.zxk,
                              b(h({}, e), {
                                  className: f.joinButton,
                                  onClick: function (t) {
                                      var n;
                                      t.stopPropagation(), null == (n = e.onClick) || n.call(e, t);
                                  },
                                  color: l.Ttl.PRIMARY
                              })
                          ),
                      location: c.Z.APP_LAUNCHER_FRIENDS_TAB_JOIN_BUTTON
                  })
                : null;
        }, [_, y, n]);
    return (0, i.jsx)(
        u.Z,
        b(h({}, e), {
            onReaction: () => {},
            onRequestOpen: () => {},
            customCTA: null != v ? v : null,
            popoutClassname: p.I4,
            popoutPosition: 'left'
        })
    );
}
