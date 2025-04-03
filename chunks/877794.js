n.d(t, { Z: () => E }), n(47120);
var r = n(200651),
    c = n(192379),
    l = n(374470),
    i = n(442837),
    s = n(481060),
    o = n(295866),
    a = n(398327),
    u = n(63063),
    d = n(601993),
    p = n(981631),
    b = n(388032);
function f(e) {
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
function h(e, t) {
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
function E(e) {
    let { text: t = '', target: n } = e,
        E = (0, i.e7)([a.Z], () => a.Z.isEnabled()),
        O = (0, i.e7)([a.Z], () => a.Z.hasLearnedWord(t), [t]),
        j = c.useRef(h(f({}, e), { spellcheckEnabled: E }));
    j.current = h(f({}, e), { spellcheckEnabled: E });
    let y = c.useRef(!1),
        [k, N] = c.useState(!1),
        [g, m] = c.useState([]),
        S = c.useCallback(() => {
            let { spellcheckEnabled: e, text: t, onHeightUpdate: n } = j.current;
            e &&
                (0, d.Gb)() &&
                Promise.all([(0, d.f5)(t, !0), (0, d.WA)(t, !0)]).then((e) => {
                    let [t, r] = e;
                    y.current && (N(t), m(r), n());
                });
        }, []),
        x = c.useCallback(() => {
            if ((0, l.k)(n, HTMLInputElement) || (0, l.k)(n, HTMLTextAreaElement)) {
                let { selectionStart: e, selectionEnd: t, value: r } = n;
                (n.value = ''), (n.value = r), 'email' !== n.type && ((n.selectionStart = e), (n.selectionEnd = t));
            }
        }, [n]);
    return (c.useEffect(() => {
        let e = (0, d.RD)(S);
        return (
            (y.current = !0),
            () => {
                (y.current = !1), e();
            }
        );
    }, [S]),
    c.useEffect(() => {
        S();
    }, [t, E, S]),
    (0, d.Gb)())
        ? [
              g.map((e, t) =>
                  (0, r.jsx)(
                      s.sNh,
                      {
                          id: 'correction-'.concat(t),
                          label: e,
                          action: () => {
                              (0, d.Rs)(e), n.focus();
                          }
                      },
                      'correction-'.concat(t)
                  )
              ),
              (0, r.jsxs)(r.Fragment, {
                  children: [
                      k
                          ? (0, r.jsx)(s.sNh, {
                                id: 'add-to-dictionary',
                                label: b.NW.string(b.t.HJmG1N),
                                action: () => {
                                    (0, o.D0)(t), x();
                                }
                            })
                          : null,
                      O &&
                          (0, r.jsx)(s.sNh, {
                              id: 'remove-from-dictionary',
                              label: b.NW.string(b.t.xXqIX1),
                              action: () => {
                                  (0, o.lE)(t), x();
                              }
                          }),
                      (0, r.jsx)(s.S89, {
                          id: 'spellcheck',
                          label: b.NW.string(b.t.TKkotb),
                          checked: E,
                          action: () => {
                              (0, o.kY)(), x();
                          }
                      }),
                      E
                          ? (0, r.jsx)(s.sNh, {
                                id: 'languages',
                                label: b.NW.string(b.t.OlOHDA),
                                action: () => window.open(u.Z.getArticleURL(p.BhN.SPELLCHECK))
                            })
                          : null
                  ]
              })
          ]
        : [null, null];
}
