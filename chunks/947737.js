n.d(t, { A: () => o });
var l = n(627968),
    s = n(64700),
    r = n(397927),
    i = n(398450),
    a = n(985018);
function o(e) {
    let { mfaChallenge: t, finish: n, setSlide: o, onClose: d, isSlideReady: c, headerAlignStart: u } = e,
        [h, g] = s.useState(!1),
        [m, f] = s.useState(null),
        [x, S] = s.useState(""),
        p = s.useRef(null);
    return (
        s.useEffect(() => {
            c && p.current?.focus();
        }, [c]),
        (0, l.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    g(!0),
                    n({ mfaType: "password", data: x })
                        .catch((e) => {
                            f(e.body?.message ?? e.message);
                        })
                        .finally(() => {
                            g(!1);
                        });
            },
            children: [
                (0, l.jsx)(i.A.SlideHeader, { onClose: d, headerAlignStart: u }),
                (0, l.jsxs)(i.A.SlideContent, {
                    children: [
                        (0, l.jsx)(r.ksK, {
                            label: a.intl.string(a.t["CIGa+7"]),
                            inputRef: p,
                            onChange: S,
                            value: x,
                            type: "password",
                            autoComplete: "password",
                            spellCheck: "false",
                            disabled: h,
                        }),
                        (0, l.jsx)(i.A.SlideError, { error: m }),
                    ],
                }),
                (0, l.jsx)(i.A.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: o,
                    showConfirm: !0,
                    disabled: 0 === x.length,
                    submitting: h,
                }),
            ],
        })
    );
}
