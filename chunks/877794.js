n.d(e, { Z: () => E }), n(388685);
var r = n(200651),
    l = n(192379),
    c = n(374470),
    i = n(442837),
    s = n(481060),
    o = n(295866),
    a = n(398327),
    u = n(63063),
    d = n(601993),
    p = n(981631),
    b = n(388032);
function f(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            r.forEach(function (e) {
                var r;
                (r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = r);
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
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function E(t) {
    let { text: e = '', target: n } = t,
        E = (0, i.e7)([a.Z], () => a.Z.isEnabled()),
        O = (0, i.e7)([a.Z], () => a.Z.hasLearnedWord(e), [e]),
        j = l.useRef(h(f({}, t), { spellcheckEnabled: E }));
    j.current = h(f({}, t), { spellcheckEnabled: E });
    let y = l.useRef(!1),
        [k, g] = l.useState(!1),
        [m, S] = l.useState([]),
        x = l.useCallback(() => {
            let { spellcheckEnabled: t, text: e, onHeightUpdate: n } = j.current;
            t &&
                (0, d.Gb)() &&
                Promise.all([(0, d.f5)(e, !0), (0, d.WA)(e, !0)]).then((t) => {
                    let [e, r] = t;
                    y.current && (g(e), S(r), n());
                });
        }, []),
        P = l.useCallback(() => {
            if ((0, c.k)(n, HTMLInputElement) || (0, c.k)(n, HTMLTextAreaElement)) {
                let { selectionStart: t, selectionEnd: e, value: r } = n;
                (n.value = ''), (n.value = r), 'email' !== n.type && ((n.selectionStart = t), (n.selectionEnd = e));
            }
        }, [n]);
    return (l.useEffect(() => {
        let t = (0, d.RD)(x);
        return (
            (y.current = !0),
            () => {
                (y.current = !1), t();
            }
        );
    }, [x]),
    l.useEffect(() => {
        x();
    }, [e, E, x]),
    (0, d.Gb)())
        ? [
              m.map((t, e) =>
                  (0, r.jsx)(
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
              (0, r.jsxs)(r.Fragment, {
                  children: [
                      k
                          ? (0, r.jsx)(s.sNh, {
                                id: 'add-to-dictionary',
                                label: b.intl.string(b.t.HJmG1N),
                                action: () => {
                                    (0, o.D0)(e), P();
                                }
                            })
                          : null,
                      O &&
                          (0, r.jsx)(s.sNh, {
                              id: 'remove-from-dictionary',
                              label: b.intl.string(b.t.xXqIX1),
                              action: () => {
                                  (0, o.lE)(e), P();
                              }
                          }),
                      (0, r.jsx)(s.S89, {
                          id: 'spellcheck',
                          label: b.intl.string(b.t.TKkotb),
                          checked: E,
                          action: () => {
                              (0, o.kY)(), P();
                          }
                      }),
                      E
                          ? (0, r.jsx)(s.sNh, {
                                id: 'languages',
                                label: b.intl.string(b.t.OlOHDA),
                                action: () => window.open(u.Z.getArticleURL(p.BhN.SPELLCHECK))
                            })
                          : null
                  ]
              })
          ]
        : [null, null];
}
