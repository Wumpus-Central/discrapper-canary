n.d(t, { Z: () => x });
var r = n(200651),
    i = n(192379),
    s = n(536982),
    l = n(456677),
    a = n(951665),
    o = n(428760),
    c = n(55889),
    d = n(300453),
    u = n(620436),
    m = n(273504),
    g = n(388032),
    p = n(217234);
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
    var t, n, x, b, j, N;
    let { rule: _, onChangeRule: v } = e,
        O = i.useCallback(
            (e) => {
                v(f(h({}, _), { triggerMetadata: f(h({}, _.triggerMetadata), { keywordFilter: e }) }));
            },
            [v, _]
        ),
        C = i.useCallback(
            (e) => {
                v(f(h({}, _), { triggerMetadata: f(h({}, _.triggerMetadata), { allowList: e }) }));
            },
            [v, _]
        );
    return (0, r.jsxs)('div', {
        className: p.cardContentsContainer,
        children: [
            (0, r.jsxs)(d.Z, {
                step: 1,
                header: g.NW.string(g.t['ue+tnZ']),
                children: [
                    (0, r.jsx)(o.Z, {
                        onChangeText: O,
                        maxWordCount: m.RH,
                        initialValue: null == (t = _.triggerMetadata) ? void 0 : t.keywordFilter
                    }),
                    (0, r.jsx)(a.Z, {
                        rule: _,
                        onChangeRule: v,
                        collapsed: (null == _ || null == (n = _.triggerMetadata) ? void 0 : n.regexPatterns) == null || (null == _ || null == (x = _.triggerMetadata) ? void 0 : x.regexPatterns.length) === 0
                    }),
                    (0, r.jsx)(s.Z, {
                        onChange: C,
                        initialValue: null == (b = _.triggerMetadata) ? void 0 : b.allowList,
                        maxWordCount: m.n4,
                        collapsed: (null == (j = _.triggerMetadata) ? void 0 : j.allowList) == null || (null == (N = _.triggerMetadata) ? void 0 : N.allowList.length) === 0
                    })
                ]
            }),
            (0, r.jsx)(u.Z, { type: u.Z.Type.ARROW_DOWN }),
            (0, r.jsx)(d.Z, {
                step: 2,
                header: g.NW.string(g.t['18TOiY']),
                children: (0, r.jsx)(l.Z, {
                    rule: _,
                    onChangeRule: v
                })
            }),
            (0, r.jsx)(u.Z, { type: u.Z.Type.CROSS }),
            (0, r.jsx)(d.Z, {
                step: 3,
                header: g.NW.string(g.t.u5xPPT),
                children: (0, r.jsx)(c.Z, {
                    rule: _,
                    onChangeRule: v,
                    onlyRoles: !0
                })
            })
        ]
    });
}
