n.d(t, { Z: () => a }), n(47120), n(773603);
var l = n(200651),
    i = n(192379),
    s = n(481060),
    r = n(507453),
    o = n(388032);
function a(e) {
    let { mfaChallenge: t, finish: n, setSlide: a, onClose: d, isSlideReady: u } = e,
        [c, h] = i.useState(!1),
        [m, f] = i.useState(null),
        [x, g] = i.useState(''),
        S = i.useRef(null);
    return (
        i.useEffect(() => {
            if (u) {
                var e;
                null === (e = S.current) || void 0 === e || e.focus();
            }
        }, [u]),
        (0, l.jsxs)('form', {
            onSubmit: (e) => {
                e.preventDefault(),
                    h(!0),
                    n({
                        mfaType: 'password',
                        data: x
                    })
                        .catch((e) => {
                            var t, n;
                            f(null !== (n = null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : e.message);
                        })
                        .finally(() => {
                            h(!1);
                        });
            },
            children: [
                (0, l.jsx)(r.Z.SlideHeader, { onClose: d }),
                (0, l.jsx)(r.Z.SlideContent, {
                    children: (0, l.jsxs)(s.xJW, {
                        title: o.intl.string(o.t['CIGa+/']),
                        children: [
                            (0, l.jsx)(s.oil, {
                                inputRef: S,
                                onChange: g,
                                value: x,
                                type: 'password',
                                autoComplete: 'password',
                                spellCheck: 'false',
                                disabled: c
                            }),
                            (0, l.jsx)(r.Z.SlideError, { error: m })
                        ]
                    })
                }),
                (0, l.jsx)(r.Z.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: a,
                    showConfirm: !0,
                    disabled: 0 === x.length,
                    submitting: c
                })
            ]
        })
    );
}
