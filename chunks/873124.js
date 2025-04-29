n.d(t, { Z: () => a }), n(388685), n(457542);
var r = n(255367),
    l = n(73800),
    i = n(481060),
    s = n(507453),
    o = n(388032);
function a(e) {
    let { mfaChallenge: t, finish: n, setSlide: a, onClose: c, isSlideReady: u } = e,
        [d, f] = l.useState(!1),
        [h, m] = l.useState(null),
        [p, g] = l.useState(''),
        b = l.useRef(null);
    return (
        l.useEffect(() => {
            if (u) {
                var e;
                null == (e = b.current) || e.focus();
            }
        }, [u]),
        (0, r.jsxs)('form', {
            onSubmit: (e) => {
                e.preventDefault(),
                    f(!0),
                    n({
                        mfaType: 'password',
                        data: p
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
                (0, r.jsx)(s.Z.SlideHeader, { onClose: c }),
                (0, r.jsx)(s.Z.SlideContent, {
                    children: (0, r.jsxs)(i.xJW, {
                        title: o.intl.string(o.t['CIGa+/']),
                        children: [
                            (0, r.jsx)(i.oil, {
                                inputRef: b,
                                onChange: g,
                                value: p,
                                type: 'password',
                                autoComplete: 'password',
                                spellCheck: 'false',
                                disabled: d
                            }),
                            (0, r.jsx)(s.Z.SlideError, { error: h })
                        ]
                    })
                }),
                (0, r.jsx)(s.Z.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: a,
                    showConfirm: !0,
                    disabled: 0 === p.length,
                    submitting: d
                })
            ]
        })
    );
}
