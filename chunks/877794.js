n.d(e, { Z: () => h }), n(388685);
var l = n(54381),
    a = n(473749),
    i = n(374470),
    r = n(442837),
    s = n(481060),
    o = n(295866),
    c = n(398327),
    u = n(63063),
    d = n(601993),
    b = n(981631),
    p = n(388032);
function g(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            l.forEach(function (e) {
                var l;
                (l = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = l);
            });
    }
    return t;
}
function f(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function h(t) {
    let { text: e = "", target: n } = t,
        h = (0, r.e7)([c.Z], () => c.Z.isEnabled()),
        y = (0, r.e7)([c.Z], () => c.Z.hasLearnedWord(e), [e]),
        m = a.useRef(f(g({}, t), { spellcheckEnabled: h }));
    m.current = f(g({}, t), { spellcheckEnabled: h });
    let S = a.useRef(!1),
        [j, T] = a.useState(!1),
        [x, E] = a.useState([]),
        k = a.useCallback(() => {
            let { spellcheckEnabled: t, text: e, onHeightUpdate: n } = m.current;
            t &&
                (0, d.Gb)() &&
                Promise.all([(0, d.f5)(e, !0), (0, d.WA)(e, !0)]).then((t) => {
                    let [e, l] = t;
                    S.current && (T(e), E(l), n());
                });
        }, []),
        O = a.useCallback(() => {
            if ((0, i.kK)(n, HTMLInputElement) || (0, i.kK)(n, HTMLTextAreaElement)) {
                let { selectionStart: t, selectionEnd: e, value: l } = n;
                (n.value = ""), (n.value = l), "email" !== n.type && ((n.selectionStart = t), (n.selectionEnd = e));
            }
        }, [n]);
    return (a.useEffect(() => {
        let t = (0, d.RD)(k);
        return (
            (S.current = !0),
            () => {
                (S.current = !1), t();
            }
        );
    }, [k]),
    a.useEffect(() => {
        k();
    }, [e, h, k]),
    (0, d.Gb)())
        ? [
              x.map((t, e) =>
                  (0, l.jsx)(
                      s.sNh,
                      {
                          id: "correction-".concat(e),
                          label: t,
                          action: () => {
                              (0, d.Rs)(t), n.focus();
                          },
                      },
                      "correction-".concat(e),
                  ),
              ),
              (0, l.jsxs)(l.Fragment, {
                  children: [
                      j
                          ? (0, l.jsx)(s.sNh, {
                                id: "add-to-dictionary",
                                label: p.intl.string(p.t.HJmG1G),
                                action: () => {
                                    (0, o.D0)(e), O();
                                },
                            })
                          : null,
                      y &&
                          (0, l.jsx)(s.sNh, {
                              id: "remove-from-dictionary",
                              label: p.intl.string(p.t.xXqIX0),
                              action: () => {
                                  (0, o.lE)(e), O();
                              },
                          }),
                      (0, l.jsx)(s.S89, {
                          id: "spellcheck",
                          label: p.intl.string(p.t.TKkotf),
                          checked: h,
                          action: () => {
                              (0, o.kY)(), O();
                          },
                      }),
                      h
                          ? (0, l.jsx)(s.sNh, {
                                id: "languages",
                                label: p.intl.string(p.t.OlOHDH),
                                action: () => window.open(u.Z.getArticleURL(b.BhN.SPELLCHECK)),
                            })
                          : null,
                  ],
              }),
          ]
        : [null, null];
}
