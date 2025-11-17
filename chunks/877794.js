n.d(e, { Z: () => y }), n(388685);
var r = n(54381),
    l = n(473749),
    c = n(374470),
    i = n(442837),
    s = n(481060),
    o = n(295866),
    a = n(398327),
    u = n(63063),
    p = n(601993),
    d = n(981631),
    f = n(388032);
function b(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            r.forEach(function (e) {
                var r;
                (r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
function y(t) {
    let { text: e = "", target: n } = t,
        y = (0, i.e7)([a.Z], () => a.Z.isEnabled()),
        O = (0, i.e7)([a.Z], () => a.Z.hasLearnedWord(e), [e]),
        j = l.useRef(h(b({}, t), { spellcheckEnabled: y }));
    j.current = h(b({}, t), { spellcheckEnabled: y });
    let E = l.useRef(!1),
        [m, g] = l.useState(!1),
        [k, P] = l.useState([]),
        x = l.useCallback(() => {
            let { spellcheckEnabled: t, text: e, onHeightUpdate: n } = j.current;
            t &&
                (0, p.Gb)() &&
                Promise.all([(0, p.f5)(e, !0), (0, p.WA)(e, !0)]).then((t) => {
                    let [e, r] = t;
                    E.current && (g(e), P(r), n());
                });
        }, []),
        C = l.useCallback(() => {
            if ((0, c.kK)(n, HTMLInputElement) || (0, c.kK)(n, HTMLTextAreaElement)) {
                let { selectionStart: t, selectionEnd: e, value: r } = n;
                (n.value = ""), (n.value = r), "email" !== n.type && ((n.selectionStart = t), (n.selectionEnd = e));
            }
        }, [n]);
    return (l.useEffect(() => {
        let t = (0, p.RD)(x);
        return (
            (E.current = !0),
            () => {
                (E.current = !1), t();
            }
        );
    }, [x]),
    l.useEffect(() => {
        x();
    }, [e, y, x]),
    (0, p.Gb)())
        ? [
              k.map((t, e) =>
                  (0, r.jsx)(
                      s.sNh,
                      {
                          id: "correction-".concat(e),
                          label: t,
                          action: () => {
                              (0, p.Rs)(t), n.focus();
                          },
                      },
                      "correction-".concat(e),
                  ),
              ),
              (0, r.jsxs)(r.Fragment, {
                  children: [
                      m
                          ? (0, r.jsx)(s.sNh, {
                                id: "add-to-dictionary",
                                label: f.intl.string(f.t.HJmG1G),
                                action: () => {
                                    (0, o.D0)(e), C();
                                },
                            })
                          : null,
                      O &&
                          (0, r.jsx)(s.sNh, {
                              id: "remove-from-dictionary",
                              label: f.intl.string(f.t.xXqIX0),
                              action: () => {
                                  (0, o.lE)(e), C();
                              },
                          }),
                      (0, r.jsx)(s.S89, {
                          id: "spellcheck",
                          label: f.intl.string(f.t.TKkotf),
                          checked: y,
                          action: () => {
                              (0, o.kY)(), C();
                          },
                      }),
                      y
                          ? (0, r.jsx)(s.sNh, {
                                id: "languages",
                                label: f.intl.string(f.t.OlOHDH),
                                action: () => window.open(u.Z.getArticleURL(d.BhN.SPELLCHECK)),
                            })
                          : null,
                  ],
              }),
          ]
        : [null, null];
}
