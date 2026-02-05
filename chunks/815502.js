n.d(t, { A: () => d });
var l = n(627968),
    s = n(64700),
    r = n(533925),
    i = n(397927),
    a = n(398450),
    o = n(985018);
function d(e) {
    let { mfaChallenge: t, finish: n, setSlide: d, onClose: c, isSlideReady: u, headerAlignStart: h } = e,
        [g, m] = s.useState(!1),
        [f, x] = s.useState(null),
        [S, p] = s.useState(""),
        j = s.useRef(null),
        b = o.intl.string(o.t["C/ZAw/"]),
        A = o.intl.string(o.t.fZSi1D),
        y = s.useCallback(
            (e) => {
                p(e), x(null);
            },
            [p, x],
        );
    return (
        s.useEffect(() => {
            u && j.current?.focus();
        }, [u]),
        (0, l.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    m(!0),
                    n({ mfaType: "backup", data: S.replace(/-/g, "") })
                        .catch((e) => {
                            x(e.body?.message ?? e.message);
                        })
                        .finally(() => {
                            m(!1);
                        });
            },
            children: [
                (0, l.jsx)(a.A.SlideHeader, { onClose: c, headerAlignStart: h }),
                (0, l.jsxs)(a.A.SlideContent, {
                    children: [
                        (0, l.jsx)(i.ksK, {
                            label: b,
                            inputRef: j,
                            onChange: y,
                            placeholder: A,
                            maxLength: r.pu,
                            minLength: r.Zp,
                            value: S,
                            spellCheck: "false",
                            disabled: g,
                        }),
                        (0, l.jsx)(a.A.SlideError, { error: f }),
                    ],
                }),
                (0, l.jsx)(a.A.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: d,
                    showConfirm: !0,
                    disabled: S.length < 8,
                    submitting: g,
                }),
            ],
        })
    );
}
