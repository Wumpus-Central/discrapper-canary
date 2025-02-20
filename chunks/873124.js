r.d(t, { Z: () => a }), r(47120), r(773603);
var n = r(200651),
    l = r(192379),
    i = r(481060),
    s = r(507453),
    o = r(388032);
function a(e) {
    let { mfaChallenge: t, finish: r, setSlide: a, onClose: c, isSlideReady: d } = e,
        [u, f] = l.useState(!1),
        [h, m] = l.useState(null),
        [p, g] = l.useState(''),
        b = l.useRef(null);
    return (
        l.useEffect(() => {
            if (d) {
                var e;
                null === (e = b.current) || void 0 === e || e.focus();
            }
        }, [d]),
        (0, n.jsxs)('form', {
            onSubmit: (e) => {
                e.preventDefault(),
                    f(!0),
                    r({
                        mfaType: 'password',
                        data: p
                    })
                        .catch((e) => {
                            var t, r;
                            m(null !== (r = null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== r ? r : e.message);
                        })
                        .finally(() => {
                            f(!1);
                        });
            },
            children: [
                (0, n.jsx)(s.Z.SlideHeader, { onClose: c }),
                (0, n.jsx)(s.Z.SlideContent, {
                    children: (0, n.jsxs)(i.xJW, {
                        title: o.NW.string(o.t['CIGa+/']),
                        children: [
                            (0, n.jsx)(i.oil, {
                                inputRef: b,
                                onChange: g,
                                value: p,
                                type: 'password',
                                autoComplete: 'password',
                                spellCheck: 'false',
                                disabled: u
                            }),
                            (0, n.jsx)(s.Z.SlideError, { error: h })
                        ]
                    })
                }),
                (0, n.jsx)(s.Z.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: a,
                    showConfirm: !0,
                    disabled: 0 === p.length,
                    submitting: u
                })
            ]
        })
    );
}
