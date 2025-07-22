(n.d(e, { Z: () => x }), n(388685));
var s = n(255367),
    a = n(73800),
    r = n(374470),
    i = n(442837),
    c = n(481060),
    o = n(295866),
    l = n(398327),
    u = n(63063),
    p = n(601993),
    f = n(981631),
    g = n(388032);
function d(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            s = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            s.forEach(function (e) {
                var s;
                ((s = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = s));
            }));
    }
    return t;
}
function b(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var s = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, s);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function x(t) {
    let { text: e = '', target: n } = t,
        x = (0, i.e7)([l.Z], () => l.Z.isEnabled()),
        h = (0, i.e7)([l.Z], () => l.Z.hasLearnedWord(e), [e]),
        y = a.useRef(b(d({}, t), { spellcheckEnabled: x }));
    y.current = b(d({}, t), { spellcheckEnabled: x });
    let m = a.useRef(!1),
        [S, j] = a.useState(!1),
        [E, T] = a.useState([]),
        O = a.useCallback(() => {
            let { spellcheckEnabled: t, text: e, onHeightUpdate: n } = y.current;
            t &&
                (0, p.Gb)() &&
                Promise.all([(0, p.f5)(e, !0), (0, p.WA)(e, !0)]).then((t) => {
                    let [e, s] = t;
                    m.current && (j(e), T(s), n());
                });
        }, []),
        k = a.useCallback(() => {
            if ((0, r.k)(n, HTMLInputElement) || (0, r.k)(n, HTMLTextAreaElement)) {
                let { selectionStart: t, selectionEnd: e, value: s } = n;
                ((n.value = ''), (n.value = s), 'email' !== n.type && ((n.selectionStart = t), (n.selectionEnd = e)));
            }
        }, [n]);
    return (a.useEffect(() => {
        let t = (0, p.RD)(O);
        return (
            (m.current = !0),
            () => {
                ((m.current = !1), t());
            }
        );
    }, [O]),
    a.useEffect(() => {
        O();
    }, [e, x, O]),
    (0, p.Gb)())
        ? [
              E.map((t, e) =>
                  (0, s.jsx)(
                      c.sNh,
                      {
                          id: 'correction-'.concat(e),
                          label: t,
                          action: () => {
                              ((0, p.Rs)(t), n.focus());
                          }
                      },
                      'correction-'.concat(e)
                  )
              ),
              (0, s.jsxs)(s.Fragment, {
                  children: [
                      S
                          ? (0, s.jsx)(c.sNh, {
                                id: 'add-to-dictionary',
                                label: g.intl.string(g.t.HJmG1N),
                                action: () => {
                                    ((0, o.D0)(e), k());
                                }
                            })
                          : null,
                      h &&
                          (0, s.jsx)(c.sNh, {
                              id: 'remove-from-dictionary',
                              label: g.intl.string(g.t.xXqIX1),
                              action: () => {
                                  ((0, o.lE)(e), k());
                              }
                          }),
                      (0, s.jsx)(c.S89, {
                          id: 'spellcheck',
                          label: g.intl.string(g.t.TKkotb),
                          checked: x,
                          action: () => {
                              ((0, o.kY)(), k());
                          }
                      }),
                      x
                          ? (0, s.jsx)(c.sNh, {
                                id: 'languages',
                                label: g.intl.string(g.t.OlOHDA),
                                action: () => window.open(u.Z.getArticleURL(f.BhN.SPELLCHECK))
                            })
                          : null
                  ]
              })
          ]
        : [null, null];
}
