n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(457414),
    s = n(311173),
    o = n(388032),
    c = n(683708);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
function g(e) {
    var t;
    let { rule: n, onChangeRule: g, collapsed: m = !1 } = e,
        [f, p] = i.useState(!m),
        b = i.useCallback(() => {
            p(!f);
        }, [f, p]),
        h = i.useCallback(
            (e) => {
                g(u(d({}, n), { triggerMetadata: u(d({}, n.triggerMetadata), { regexPatterns: e }) }));
            },
            [g, n],
        );
    return (0, a.S)(n.triggerType)
        ? (0, r.jsx)(l.zF9, {
              isExpanded: f,
              collapsibleContent: (0, r.jsx)(s.Z, {
                  rule: n,
                  onChangeText: h,
                  className: c.textAreaContainer,
                  initialValue: null == (t = n.triggerMetadata) ? void 0 : t.regexPatterns,
              }),
              className: c.collapseable,
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, r.jsx)(l.P3F, {
                      onClick: (e) => {
                          b(), t(e);
                      },
                      children: (0, r.jsxs)("div", {
                          className: c.header,
                          children: [
                              (0, r.jsx)(l.Heading, {
                                  variant: "text-sm/medium",
                                  children: o.intl.string(o.t["dnunm+"]),
                              }),
                              f
                                  ? (0, r.jsx)(l.u04, {
                                        size: "md",
                                        color: "currentColor",
                                        className: c.arrow,
                                    })
                                  : (0, r.jsx)(l.CJ0, {
                                        size: "md",
                                        color: "currentColor",
                                        className: c.arrow,
                                    }),
                          ],
                      }),
                  });
              },
          })
        : null;
}
