(n.d(t, { Z: () => o }), n(388685), n(457542));
var l = n(255367),
    r = n(73800),
    i = n(481060),
    s = n(507453),
    a = n(388032);
function o(e) {
    let { mfaChallenge: t, finish: n, setSlide: o, onClose: d, isSlideReady: c } = e,
        [u, h] = r.useState(!1),
        [f, m] = r.useState(null),
        [g, x] = r.useState(''),
        p = r.useRef(null);
    return (
        r.useEffect(() => {
            if (c) {
                var e;
                null == (e = p.current) || e.focus();
            }
        }, [c]),
        (0, l.jsxs)('form', {
            onSubmit: (e) => {
                (e.preventDefault(),
                    h(!0),
                    n({
                        mfaType: 'password',
                        data: g
                    })
                        .catch((e) => {
                            var t, n;
                            m(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                        })
                        .finally(() => {
                            h(!1);
                        }));
            },
            children: [
                (0, l.jsx)(s.Z.SlideHeader, { onClose: d }),
                (0, l.jsx)(s.Z.SlideContent, {
                    children: (0, l.jsxs)(i.xJW, {
                        title: a.intl.string(a.t['CIGa+/']),
                        children: [
                            (0, l.jsx)(i.oil, {
                                inputRef: p,
                                onChange: x,
                                value: g,
                                type: 'password',
                                autoComplete: 'password',
                                spellCheck: 'false',
                                disabled: u
                            }),
                            (0, l.jsx)(s.Z.SlideError, { error: f })
                        ]
                    })
                }),
                (0, l.jsx)(s.Z.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: o,
                    showConfirm: !0,
                    disabled: 0 === g.length,
                    submitting: u
                })
            ]
        })
    );
}
