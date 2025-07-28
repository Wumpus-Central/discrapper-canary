(n.d(t, { Z: () => o }), n(388685), n(457542));
var l = n(255367),
    r = n(73800),
    i = n(481060),
    s = n(507453),
    a = n(388032);
function o(e) {
    let { mfaChallenge: t, finish: n, setSlide: o, onClose: d, isSlideReady: c, headerAlignStart: u } = e,
        [h, f] = r.useState(!1),
        [m, g] = r.useState(null),
        [x, p] = r.useState(''),
        S = r.useRef(null);
    return (
        r.useEffect(() => {
            if (c) {
                var e;
                null == (e = S.current) || e.focus();
            }
        }, [c]),
        (0, l.jsxs)('form', {
            onSubmit: (e) => {
                (e.preventDefault(),
                    f(!0),
                    n({
                        mfaType: 'password',
                        data: x
                    })
                        .catch((e) => {
                            var t, n;
                            g(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                        })
                        .finally(() => {
                            f(!1);
                        }));
            },
            children: [
                (0, l.jsx)(s.Z.SlideHeader, {
                    onClose: d,
                    headerAlignStart: u
                }),
                (0, l.jsx)(s.Z.SlideContent, {
                    children: (0, l.jsxs)(i.xJW, {
                        title: a.intl.string(a.t['CIGa+/']),
                        children: [
                            (0, l.jsx)(i.oil, {
                                inputRef: S,
                                onChange: p,
                                value: x,
                                type: 'password',
                                autoComplete: 'password',
                                spellCheck: 'false',
                                disabled: h
                            }),
                            (0, l.jsx)(s.Z.SlideError, { error: m })
                        ]
                    })
                }),
                (0, l.jsx)(s.Z.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: o,
                    showConfirm: !0,
                    disabled: 0 === x.length,
                    submitting: h
                })
            ]
        })
    );
}
