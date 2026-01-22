n.d(t, { A: () => d }), n(747238), n(812715), n(896048), n(492834);
var r = n(627968),
    l = n(64700),
    i = n(533925),
    s = n(397927),
    a = n(398450),
    o = n(985018);
function d(e) {
    let { mfaChallenge: t, finish: n, setSlide: d, onClose: c, isSlideReady: u, headerAlignStart: f } = e,
        [h, g] = l.useState(!1),
        [p, m] = l.useState(null),
        [b, j] = l.useState(""),
        y = l.useRef(null),
        S = o.intl.string(o.t["C/ZAw/"]),
        x = o.intl.string(o.t.fZSi1D),
        v = l.useCallback(
            (e) => {
                j(e), m(null);
            },
            [j, m],
        );
    return (
        l.useEffect(() => {
            if (u) {
                var e;
                null == (e = y.current) || e.focus();
            }
        }, [u]),
        (0, r.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    g(!0),
                    n({
                        mfaType: "backup",
                        data: b.replace(/-/g, ""),
                    })
                        .catch((e) => {
                            var t, n;
                            m(null != (t = null == (n = e.body) ? void 0 : n.message) ? t : e.message);
                        })
                        .finally(() => {
                            g(!1);
                        });
            },
            children: [
                (0, r.jsx)(a.A.SlideHeader, {
                    onClose: c,
                    headerAlignStart: f,
                }),
                (0, r.jsxs)(a.A.SlideContent, {
                    children: [
                        (0, r.jsx)(s.ksK, {
                            label: S,
                            inputRef: y,
                            onChange: v,
                            placeholder: x,
                            maxLength: i.pu,
                            minLength: i.Zp,
                            value: b,
                            spellCheck: "false",
                            disabled: h,
                        }),
                        (0, r.jsx)(a.A.SlideError, { error: p }),
                    ],
                }),
                (0, r.jsx)(a.A.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: d,
                    showConfirm: !0,
                    disabled: b.length < 8,
                    submitting: h,
                }),
            ],
        })
    );
}
