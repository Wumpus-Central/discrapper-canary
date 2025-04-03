r.d(t, { Z: () => a }), r(47120), r(773603);
var n = r(200651),
    l = r(192379),
    s = r(481060),
    i = r(507453),
    o = r(388032);
function a(e) {
    let { mfaChallenge: t, finish: r, setSlide: a, onClose: c, isSlideReady: u } = e,
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
                            m(null != (r = null == (t = e.body) ? void 0 : t.message) ? r : e.message);
                        })
                        .finally(() => {
                            f(!1);
                        });
            },
            children: [
                (0, n.jsx)(i.Z.SlideHeader, { onClose: c }),
                (0, n.jsx)(i.Z.SlideContent, {
                    children: (0, n.jsxs)(s.xJW, {
                        title: o.NW.string(o.t['CIGa+/']),
                        children: [
                            (0, n.jsx)(s.oil, {
                                inputRef: b,
                                onChange: g,
                                value: p,
                                type: 'password',
                                autoComplete: 'password',
                                spellCheck: 'false',
                                disabled: d
                            }),
                            (0, n.jsx)(i.Z.SlideError, { error: h })
                        ]
                    })
                }),
                (0, n.jsx)(i.Z.SlideFooter, {
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
