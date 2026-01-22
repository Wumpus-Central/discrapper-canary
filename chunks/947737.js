n.d(t, { A: () => o }), n(896048), n(492834);
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(398450),
    a = n(985018);
function o(e) {
    let { mfaChallenge: t, finish: n, setSlide: o, onClose: d, isSlideReady: c, headerAlignStart: u } = e,
        [f, h] = l.useState(!1),
        [g, p] = l.useState(null),
        [m, b] = l.useState(""),
        j = l.useRef(null);
    return (
        l.useEffect(() => {
            if (c) {
                var e;
                null == (e = j.current) || e.focus();
            }
        }, [c]),
        (0, r.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    h(!0),
                    n({
                        mfaType: "password",
                        data: m,
                    })
                        .catch((e) => {
                            var t, n;
                            p(null != (t = null == (n = e.body) ? void 0 : n.message) ? t : e.message);
                        })
                        .finally(() => {
                            h(!1);
                        });
            },
            children: [
                (0, r.jsx)(s.A.SlideHeader, {
                    onClose: d,
                    headerAlignStart: u,
                }),
                (0, r.jsxs)(s.A.SlideContent, {
                    children: [
                        (0, r.jsx)(i.ksK, {
                            label: a.intl.string(a.t["CIGa+7"]),
                            inputRef: j,
                            onChange: b,
                            value: m,
                            type: "password",
                            autoComplete: "password",
                            spellCheck: "false",
                            disabled: f,
                        }),
                        (0, r.jsx)(s.A.SlideError, { error: g }),
                    ],
                }),
                (0, r.jsx)(s.A.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: o,
                    showConfirm: !0,
                    disabled: 0 === m.length,
                    submitting: f,
                }),
            ],
        })
    );
}
