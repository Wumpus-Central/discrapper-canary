n.d(t, { Z: () => m }), n(388685), n(49124);
var r = n(200651),
    l = n(192379),
    i = n(849055),
    s = n(544891),
    o = n(481060),
    a = n(358085),
    c = n(960048),
    u = n(998502),
    d = n(507453),
    f = n(981631),
    h = n(388032);
function m(e) {
    let { mfaChallenge: t, finish: n, setSlide: m, onClose: p } = e,
        [g, b] = l.useState(!1),
        [j, y] = l.useState(null),
        { challenge: x } = t.methods.find((e) => 'webauthn' === e.type),
        S = async () => {
            b(!0), y(null);
            let e = a.isPlatformEmbedded && u.ZP.supportsFeature(f.eRX.WEBAUTHN) ? u.ZP.webAuthnAuthenticate(x) : i.U2(JSON.parse(x)).then((e) => JSON.stringify(e)),
                t = async (e) => {
                    try {
                        await n({
                            mfaType: 'webauthn',
                            data: e
                        });
                    } catch (e) {
                        e instanceof s.Pd ? y(h.intl.string(h.t.xSCvBQ)) : y(e.message);
                    }
                };
            try {
                let n = await e;
                await t(n);
            } catch (e) {
                c.Z.captureException(e), y(h.intl.string(h.t.xSCvBQ));
            } finally {
                b(!1);
            }
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.Z.SlideHeader, { onClose: p }),
            (0, r.jsxs)(d.Z.SlideContent, {
                children: [
                    (0, r.jsx)(o.zxk, {
                        submitting: g,
                        onClick: S,
                        children: h.intl.string(h.t.Xr3Ekp)
                    }),
                    (0, r.jsx)(d.Z.SlideError, { error: j })
                ]
            }),
            (0, r.jsx)(d.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: m
            })
        ]
    });
}
