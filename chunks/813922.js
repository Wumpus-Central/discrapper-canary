n.d(t, { Z: () => x });
var r = n(255367),
    i = n(73800),
    l = n(536982),
    s = n(456677),
    a = n(951665),
    o = n(428760),
    c = n(55889),
    u = n(300453),
    d = n(620436),
    m = n(273504),
    g = n(388032),
    p = n(461367);
function h(e) {
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
function x(e) {
    var t, n, x, b, j, _;
    let { rule: v, onChangeRule: O } = e,
        C = i.useCallback(
            (e) => {
                O(f(h({}, v), { triggerMetadata: f(h({}, v.triggerMetadata), { keywordFilter: e }) }));
            },
            [O, v]
        ),
        y = i.useCallback(
            (e) => {
                O(f(h({}, v), { triggerMetadata: f(h({}, v.triggerMetadata), { allowList: e }) }));
            },
            [O, v]
        );
    return (0, r.jsxs)('div', {
        className: p.cardContentsContainer,
        children: [
            (0, r.jsxs)(u.Z, {
                step: 1,
                header: g.intl.string(g.t['ue+tnZ']),
                children: [
                    (0, r.jsx)(o.Z, {
                        onChangeText: C,
                        maxWordCount: m.RH,
                        initialValue: null == (t = v.triggerMetadata) ? void 0 : t.keywordFilter
                    }),
                    (0, r.jsx)(a.Z, {
                        rule: v,
                        onChangeRule: O,
                        collapsed: (null == v || null == (n = v.triggerMetadata) ? void 0 : n.regexPatterns) == null || (null == v || null == (x = v.triggerMetadata) ? void 0 : x.regexPatterns.length) === 0
                    }),
                    (0, r.jsx)(l.Z, {
                        onChange: y,
                        initialValue: null == (b = v.triggerMetadata) ? void 0 : b.allowList,
                        maxWordCount: m.n4,
                        collapsed: (null == (j = v.triggerMetadata) ? void 0 : j.allowList) == null || (null == (_ = v.triggerMetadata) ? void 0 : _.allowList.length) === 0
                    })
                ]
            }),
            (0, r.jsx)(d.Z, { type: d.Z.Type.ARROW_DOWN }),
            (0, r.jsx)(u.Z, {
                step: 2,
                header: g.intl.string(g.t['18TOiY']),
                children: (0, r.jsx)(s.Z, {
                    rule: v,
                    onChangeRule: O
                })
            }),
            (0, r.jsx)(d.Z, { type: d.Z.Type.CROSS }),
            (0, r.jsx)(u.Z, {
                step: 3,
                header: g.intl.string(g.t.u5xPPT),
                children: (0, r.jsx)(c.Z, {
                    rule: v,
                    onChangeRule: O,
                    onlyRoles: !0
                })
            })
        ]
    });
}
