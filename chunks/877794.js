n.d(e, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    c = n(513431),
    r = n(442837),
    u = n(481060),
    a = n(295866),
    s = n(398327),
    o = n(63063),
    d = n(601993),
    f = n(981631),
    p = n(388032);
function E(t) {
    let { text: e = '', target: n } = t,
        E = (0, r.e7)([s.Z], () => s.Z.isEnabled()),
        h = (0, r.e7)([s.Z], () => s.Z.hasLearnedWord(e), [e]),
        m = i.useRef({
            ...t,
            spellcheckEnabled: E
        });
    m.current = {
        ...t,
        spellcheckEnabled: E
    };
    let M = i.useRef(!1),
        [b, x] = i.useState(!1),
        [k, C] = i.useState([]),
        L = i.useCallback(() => {
            let { spellcheckEnabled: t, text: e, onHeightUpdate: n } = m.current;
            t &&
                (0, d.Gb)() &&
                Promise.all([(0, d.f5)(e, !0), (0, d.WA)(e, !0)]).then((t) => {
                    let [e, l] = t;
                    M.current && (x(e), C(l), n());
                });
        }, []),
        T = i.useCallback(() => {
            if ((0, c.k)(n, HTMLInputElement) || (0, c.k)(n, HTMLTextAreaElement)) {
                let { selectionStart: t, selectionEnd: e, value: l } = n;
                (n.value = ''), (n.value = l), 'email' !== n.type && ((n.selectionStart = t), (n.selectionEnd = e));
            }
        }, [n]);
    if (
        (i.useEffect(() => {
            let t = (0, d.RD)(L);
            return (
                (M.current = !0),
                () => {
                    (M.current = !1), t();
                }
            );
        }, [L]),
        i.useEffect(() => {
            L();
        }, [e, E, L]),
        !(0, d.Gb)())
    )
        return [null, null];
    let Z = k.map((t, e) =>
        (0, l.jsx)(
            u.MenuItem,
            {
                id: 'correction-'.concat(e),
                label: t,
                action: () => {
                    (0, d.Rs)(t), n.focus();
                }
            },
            'correction-'.concat(e)
        )
    );
    return [
        Z,
        (0, l.jsxs)(l.Fragment, {
            children: [
                b
                    ? (0, l.jsx)(u.MenuItem, {
                          id: 'add-to-dictionary',
                          label: p.intl.string(p.t.HJmG1N),
                          action: () => {
                              (0, a.D0)(e), T();
                          }
                      })
                    : null,
                h &&
                    (0, l.jsx)(u.MenuItem, {
                        id: 'remove-from-dictionary',
                        label: p.intl.string(p.t.xXqIX1),
                        action: () => {
                            (0, a.lE)(e), T();
                        }
                    }),
                (0, l.jsx)(u.MenuCheckboxItem, {
                    id: 'spellcheck',
                    label: p.intl.string(p.t.TKkotb),
                    checked: E,
                    action: () => {
                        (0, a.kY)(), T();
                    }
                }),
                E
                    ? (0, l.jsx)(u.MenuItem, {
                          id: 'languages',
                          label: p.intl.string(p.t.OlOHDA),
                          action: () => window.open(o.Z.getArticleURL(f.BhN.SPELLCHECK))
                      })
                    : null
            ]
        })
    ];
}
