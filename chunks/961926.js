n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    l = n(536982),
    s = n(285318),
    a = n(456677),
    o = n(55889),
    c = n(300453),
    u = n(620436),
    d = n(273504),
    m = n(388032),
    g = n(461367);
function p(e) {
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
function f(e, t) {
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
function h(e) {
    var t, n, h;
    let { rule: x, onChangeRule: b } = e,
        j = i.useCallback(
            (e) => {
                b(f(p({}, x), { triggerMetadata: f(p({}, x.triggerMetadata), { allowList: e }) }));
            },
            [b, x]
        );
    return (0, r.jsxs)('div', {
        className: g.cardContentsContainer,
        children: [
            (0, r.jsxs)(c.Z, {
                step: 1,
                header: m.intl.string(m.t.CX5YfX),
                children: [
                    (0, r.jsx)(s.Z, {
                        rule: x,
                        onChangeRule: b
                    }),
                    (0, r.jsx)(l.Z, {
                        onChange: j,
                        initialValue: null == (t = x.triggerMetadata) ? void 0 : t.allowList,
                        maxWordCount: d.I3,
                        collapsed: (null == (n = x.triggerMetadata) ? void 0 : n.allowList) == null || (null == (h = x.triggerMetadata) ? void 0 : h.allowList.length) === 0
                    })
                ]
            }),
            (0, r.jsx)(u.Z, { type: u.Z.Type.ARROW_DOWN }),
            (0, r.jsx)(c.Z, {
                step: 2,
                header: m.intl.string(m.t['18TOiY']),
                children: (0, r.jsx)(a.Z, {
                    rule: x,
                    onChangeRule: b
                })
            }),
            (0, r.jsx)(u.Z, { type: u.Z.Type.CROSS }),
            (0, r.jsx)(c.Z, {
                step: 3,
                header: m.intl.string(m.t.eq3gjo),
                children: (0, r.jsx)(o.Z, {
                    rule: x,
                    onChangeRule: b
                })
            })
        ]
    });
}
