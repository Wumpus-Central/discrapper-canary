n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    l = n(536982),
    a = n(684275),
    s = n(456677),
    o = n(55889),
    c = n(300453),
    d = n(620436),
    u = n(273504),
    g = n(388032),
    f = n(365604);
function m(e) {
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
function b(e, t) {
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
function p(e) {
    var t, n, p;
    let { rule: h, onChangeRule: x } = e,
        j = i.useCallback(
            (e) => {
                x(b(m({}, h), { triggerMetadata: b(m({}, h.triggerMetadata), { allowList: e }) }));
            },
            [x, h],
        );
    return (0, r.jsxs)("div", {
        className: f.cardContentsContainer,
        children: [
            (0, r.jsxs)(c.Z, {
                step: 1,
                header: g.intl.string(g.t.CX5Yfc),
                children: [
                    (0, r.jsx)(a.Z, {
                        rule: h,
                        onChangeRule: x,
                    }),
                    (0, r.jsx)(l.Z, {
                        onChange: j,
                        initialValue: null == (t = h.triggerMetadata) ? void 0 : t.allowList,
                        maxWordCount: u.I3,
                        collapsed:
                            (null == (n = h.triggerMetadata) ? void 0 : n.allowList) == null ||
                            (null == (p = h.triggerMetadata) ? void 0 : p.allowList.length) === 0,
                    }),
                ],
            }),
            (0, r.jsx)(d.Z, { type: d.Z.Type.ARROW_DOWN }),
            (0, r.jsx)(c.Z, {
                step: 2,
                header: g.intl.string(g.t["18TOiQ"]),
                children: (0, r.jsx)(s.Z, {
                    rule: h,
                    onChangeRule: x,
                }),
            }),
            (0, r.jsx)(d.Z, { type: d.Z.Type.CROSS }),
            (0, r.jsx)(c.Z, {
                step: 3,
                header: g.intl.string(g.t.eq3gjh),
                children: (0, r.jsx)(o.Z, {
                    rule: h,
                    onChangeRule: x,
                }),
            }),
        ],
    });
}
