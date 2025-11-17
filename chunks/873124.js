n.d(t, { Z: () => o }), n(388685), n(457542);
var l = n(54381),
    r = n(473749),
    i = n(481060),
    s = n(507453),
    a = n(388032);
function o(e) {
    let { mfaChallenge: t, finish: n, setSlide: o, onClose: d, isSlideReady: u, headerAlignStart: c } = e,
        [h, f] = r.useState(!1),
        [g, m] = r.useState(null),
        [p, b] = r.useState(""),
        S = r.useRef(null);
    return (
        r.useEffect(() => {
            if (u) {
                var e;
                null == (e = S.current) || e.focus();
            }
        }, [u]),
        (0, l.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    f(!0),
                    n({
                        mfaType: "password",
                        data: p,
                    })
                        .catch((e) => {
                            var t, n;
                            m(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                        })
                        .finally(() => {
                            f(!1);
                        });
            },
            children: [
                (0, l.jsx)(s.Z.SlideHeader, {
                    onClose: d,
                    headerAlignStart: c,
                }),
                (0, l.jsxs)(s.Z.SlideContent, {
                    children: [
                        (0, l.jsx)(i.oil, {
                            label: a.intl.string(a.t["CIGa+7"]),
                            inputRef: S,
                            onChange: b,
                            value: p,
                            type: "password",
                            autoComplete: "password",
                            spellCheck: "false",
                            disabled: h,
                        }),
                        (0, l.jsx)(s.Z.SlideError, { error: g }),
                    ],
                }),
                (0, l.jsx)(s.Z.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: o,
                    showConfirm: !0,
                    disabled: 0 === p.length,
                    submitting: h,
                }),
            ],
        })
    );
}
