n.d(e, { Z: () => p }), n(47120);
var l = n(200651),
    i = n(192379),
    c = n(374470),
    s = n(442837),
    a = n(481060),
    r = n(295866),
    o = n(398327),
    u = n(63063),
    d = n(601993),
    h = n(981631),
    E = n(388032);
function p(t) {
    let { text: e = '', target: n } = t,
        p = (0, s.e7)([o.Z], () => o.Z.isEnabled()),
        f = (0, s.e7)([o.Z], () => o.Z.hasLearnedWord(e), [e]),
        k = i.useRef({
            ...t,
            spellcheckEnabled: p
        });
    k.current = {
        ...t,
        spellcheckEnabled: p
    };
    let b = i.useRef(!1),
        [x, C] = i.useState(!1),
        [L, S] = i.useState([]),
        N = i.useCallback(() => {
            let { spellcheckEnabled: t, text: e, onHeightUpdate: n } = k.current;
            t &&
                (0, d.Gb)() &&
                Promise.all([(0, d.f5)(e, !0), (0, d.WA)(e, !0)]).then((t) => {
                    let [e, l] = t;
                    b.current && (C(e), S(l), n());
                });
        }, []),
        m = i.useCallback(() => {
            if ((0, c.k)(n, HTMLInputElement) || (0, c.k)(n, HTMLTextAreaElement)) {
                let { selectionStart: t, selectionEnd: e, value: l } = n;
                (n.value = ''), (n.value = l), 'email' !== n.type && ((n.selectionStart = t), (n.selectionEnd = e));
            }
        }, [n]);
    return (i.useEffect(() => {
        let t = (0, d.RD)(N);
        return (
            (b.current = !0),
            () => {
                (b.current = !1), t();
            }
        );
    }, [N]),
    i.useEffect(() => {
        N();
    }, [e, p, N]),
    (0, d.Gb)())
        ? [
              L.map((t, e) =>
                  (0, l.jsx)(
                      a.sNh,
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
                      x
                          ? (0, l.jsx)(a.sNh, {
                                id: 'add-to-dictionary',
                                label: E.intl.string(E.t.HJmG1N),
                                action: () => {
                                    (0, r.D0)(e), m();
                                }
                            })
                          : null,
                      f &&
                          (0, l.jsx)(a.sNh, {
                              id: 'remove-from-dictionary',
                              label: E.intl.string(E.t.xXqIX1),
                              action: () => {
                                  (0, r.lE)(e), m();
                              }
                          }),
                      (0, l.jsx)(a.S89, {
                          id: 'spellcheck',
                          label: E.intl.string(E.t.TKkotb),
                          checked: p,
                          action: () => {
                              (0, r.kY)(), m();
                          }
                      }),
                      p
                          ? (0, l.jsx)(a.sNh, {
                                id: 'languages',
                                label: E.intl.string(E.t.OlOHDA),
                                action: () => window.open(u.Z.getArticleURL(h.BhN.SPELLCHECK))
                            })
                          : null
                  ]
              })
          ]
        : [null, null];
}
