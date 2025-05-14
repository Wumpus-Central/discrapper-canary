n.d(e, { Z: () => g }), n(388685);
var l = n(255367),
    i = n(73800),
    r = n(374470),
    c = n(442837),
    s = n(481060),
    a = n(295866),
    o = n(398327),
    u = n(63063),
    d = n(601993),
    b = n(981631),
    p = n(388032);
function f(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            l.forEach(function (e) {
                var l;
                (l = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = l);
            });
    }
    return t;
}
function h(t, e) {
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
function g(t) {
    let { text: e = '', target: n } = t,
        g = (0, c.e7)([o.Z], () => o.Z.isEnabled()),
        E = (0, c.e7)([o.Z], () => o.Z.hasLearnedWord(e), [e]),
        O = i.useRef(h(f({}, t), { spellcheckEnabled: g }));
    O.current = h(f({}, t), { spellcheckEnabled: g });
    let y = i.useRef(!1),
        [j, S] = i.useState(!1),
        [k, m] = i.useState([]),
        x = i.useCallback(() => {
            let { spellcheckEnabled: t, text: e, onHeightUpdate: n } = O.current;
            t &&
                (0, d.Gb)() &&
                Promise.all([(0, d.f5)(e, !0), (0, d.WA)(e, !0)]).then((t) => {
                    let [e, l] = t;
                    y.current && (S(e), m(l), n());
                });
        }, []),
        N = i.useCallback(() => {
            if ((0, r.k)(n, HTMLInputElement) || (0, r.k)(n, HTMLTextAreaElement)) {
                let { selectionStart: t, selectionEnd: e, value: l } = n;
                (n.value = ''), (n.value = l), 'email' !== n.type && ((n.selectionStart = t), (n.selectionEnd = e));
            }
        }, [n]);
    return (i.useEffect(() => {
        let t = (0, d.RD)(x);
        return (
            (y.current = !0),
            () => {
                (y.current = !1), t();
            }
        );
    }, [x]),
    i.useEffect(() => {
        x();
    }, [e, g, x]),
    (0, d.Gb)())
        ? [
              k.map((t, e) =>
                  (0, l.jsx)(
                      s.sNh,
                      {
                          id: 'correction-'.concat(e),
                          label: t,
                          action: () => {
                              (0, d.Rs)(t), n.focus();
                          }
                      },
                      'correction-'.concat(e)
                  )
              ),
              (0, l.jsxs)(l.Fragment, {
                  children: [
                      j
                          ? (0, l.jsx)(s.sNh, {
                                id: 'add-to-dictionary',
                                label: p.intl.string(p.t.HJmG1N),
                                action: () => {
                                    (0, a.D0)(e), N();
                                }
                            })
                          : null,
                      E &&
                          (0, l.jsx)(s.sNh, {
                              id: 'remove-from-dictionary',
                              label: p.intl.string(p.t.xXqIX1),
                              action: () => {
                                  (0, a.lE)(e), N();
                              }
                          }),
                      (0, l.jsx)(s.S89, {
                          id: 'spellcheck',
                          label: p.intl.string(p.t.TKkotb),
                          checked: g,
                          action: () => {
                              (0, a.kY)(), N();
                          }
                      }),
                      g
                          ? (0, l.jsx)(s.sNh, {
                                id: 'languages',
                                label: p.intl.string(p.t.OlOHDA),
                                action: () => window.open(u.Z.getArticleURL(b.BhN.SPELLCHECK))
                            })
                          : null
                  ]
              })
          ]
        : [null, null];
}
