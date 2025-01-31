n.d(t, { Z: () => f }), n(47120);
var l = n(200651),
    i = n(192379),
    s = n(849055),
    r = n(544891),
    o = n(481060),
    a = n(358085),
    d = n(960048),
    u = n(998502),
    c = n(507453),
    h = n(981631),
    m = n(388032);
function f(e) {
    let { mfaChallenge: t, finish: n, setSlide: f, onClose: x } = e,
        [g, S] = i.useState(!1),
        [v, p] = i.useState(null),
        { challenge: j } = t.methods.find((e) => 'webauthn' === e.type),
        b = async () => {
            S(!0), p(null);
            let e = a.isPlatformEmbedded && u.ZP.supportsFeature(h.eRX.WEBAUTHN) ? u.ZP.webAuthnAuthenticate(j) : s.U2(JSON.parse(j)).then((e) => JSON.stringify(e)),
                t = async (e) => {
                    try {
                        await n({
                            mfaType: 'webauthn',
                            data: e
                        });
                    } catch (e) {
                        e instanceof r.Pd ? p(m.intl.string(m.t.xSCvBQ)) : p(e.message);
                    }
                };
            try {
                let n = await e;
                await t(n);
            } catch (e) {
                d.Z.captureException(e), p(m.intl.string(m.t.xSCvBQ));
            } finally {
                S(!1);
            }
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(c.Z.SlideHeader, { onClose: x }),
            (0, l.jsxs)(c.Z.SlideContent, {
                children: [
                    (0, l.jsx)(o.zxk, {
                        submitting: g,
                        onClick: b,
                        children: m.intl.string(m.t.Xr3Ekp)
                    }),
                    (0, l.jsx)(c.Z.SlideError, { error: v })
                ]
            }),
            (0, l.jsx)(c.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: f
            })
        ]
    });
}
