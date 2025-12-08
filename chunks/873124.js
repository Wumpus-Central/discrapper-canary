n.d(t, { Z: () => o }), n(388685), n(457542);
var r = n(54381),
    l = n(473749),
    i = n(481060),
    s = n(507453),
    a = n(388032);
function o(e) {
    let { mfaChallenge: t, finish: n, setSlide: o, onClose: c, isSlideReady: u, headerAlignStart: d } = e,
        [f, h] = l.useState(!1),
        [g, m] = l.useState(null),
        [b, p] = l.useState(""),
        j = l.useRef(null);
    return (
        l.useEffect(() => {
            if (u) {
                var e;
                null == (e = j.current) || e.focus();
            }
        }, [u]),
        (0, r.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    h(!0),
                    n({
                        mfaType: "password",
                        data: b,
                    })
                        .catch((e) => {
                            var t, n;
                            m(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                        })
                        .finally(() => {
                            h(!1);
                        });
            },
            children: [
                (0, r.jsx)(s.Z.SlideHeader, {
                    onClose: c,
                    headerAlignStart: d,
                }),
                (0, r.jsxs)(s.Z.SlideContent, {
                    children: [
                        (0, r.jsx)(i.oil, {
                            label: a.intl.string(a.t["CIGa+7"]),
                            inputRef: j,
                            onChange: p,
                            value: b,
                            type: "password",
                            autoComplete: "password",
                            spellCheck: "false",
                            disabled: f,
                        }),
                        (0, r.jsx)(s.Z.SlideError, { error: g }),
                    ],
                }),
                (0, r.jsx)(s.Z.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: o,
                    showConfirm: !0,
                    disabled: 0 === b.length,
                    submitting: f,
                }),
            ],
        })
    );
}
