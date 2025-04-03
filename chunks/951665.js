n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(457414),
    l = n(311173),
    o = n(388032),
    c = n(320705);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    var t;
    let { rule: n, onChangeRule: m, collapsed: g = !1 } = e,
        [p, h] = i.useState(!g),
        f = i.useCallback(() => {
            h(!p);
        }, [p, h]),
        b = i.useCallback(
            (e) => {
                m(u(d({}, n), { triggerMetadata: u(d({}, n.triggerMetadata), { regexPatterns: e }) }));
            },
            [m, n]
        );
    return (0, a.S)(n.triggerType)
        ? (0, r.jsx)(s.zF9, {
              isExpanded: p,
              collapsibleContent: (0, r.jsx)(l.Z, {
                  rule: n,
                  onChangeText: b,
                  className: c.textAreaContainer,
                  initialValue: null == (t = n.triggerMetadata) ? void 0 : t.regexPatterns
              }),
              className: c.collapseable,
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, r.jsx)(s.P3F, {
                      onClick: (e) => {
                          f(), t(e);
                      },
                      children: (0, r.jsxs)('div', {
                          className: c.header,
                          children: [
                              (0, r.jsx)(s.X6q, {
                                  variant: 'text-sm/medium',
                                  children: o.NW.string(o.t.dnunm5)
                              }),
                              p
                                  ? (0, r.jsx)(s.u04, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: c.arrow
                                    })
                                  : (0, r.jsx)(s.CJ0, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: c.arrow
                                    })
                          ]
                      })
                  });
              }
          })
        : null;
}
