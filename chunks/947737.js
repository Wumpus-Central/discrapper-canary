n.d(t, { A: () => o });
var a = n(627968),
    r = n(64700),
    i = n(292666),
    s = n(398450),
    l = n(985018);
function o(e) {
    let { mfaChallenge: t, finish: n, setSlide: o, onClose: d, isSlideReady: c, headerAlignStart: u } = e,
        [h, g] = r.useState(!1),
        [m, p] = r.useState(null),
        [f, x] = r.useState(""),
        S = r.useRef(null);
    return (
        r.useEffect(() => {
            c && S.current?.focus();
        }, [c]),
        (0, a.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    g(!0),
                    n({ mfaType: "password", data: f })
                        .catch((e) => {
                            p(e.body?.message ?? e.message);
                        })
                        .finally(() => {
                            g(!1);
                        });
            },
            children: [
                (0, a.jsx)(s.A.SlideHeader, { onClose: d, headerAlignStart: u }),
                (0, a.jsxs)(s.A.SlideContent, {
                    children: [
                        (0, a.jsx)(i.k, {
                            label: l.intl.string(l.t["CIGa+7"]),
                            inputRef: S,
                            onChange: x,
                            value: f,
                            type: "password",
                            autoComplete: "password",
                            spellCheck: "false",
                            disabled: h,
                        }),
                        (0, a.jsx)(s.A.SlideError, { error: m }),
                    ],
                }),
                (0, a.jsx)(s.A.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: o,
                    showConfirm: !0,
                    disabled: 0 === f.length,
                    submitting: h,
                }),
            ],
        })
    );
}
