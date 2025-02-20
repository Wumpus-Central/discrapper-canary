r.d(t, { Z: () => m }), r(47120), r(26686);
var n = r(200651),
    l = r(192379),
    i = r(849055),
    s = r(544891),
    o = r(481060),
    a = r(358085),
    c = r(960048),
    d = r(998502),
    u = r(507453),
    f = r(981631),
    h = r(388032);
function m(e) {
    let { mfaChallenge: t, finish: r, setSlide: m, onClose: p } = e,
        [g, b] = l.useState(!1),
        [j, y] = l.useState(null),
        { challenge: x } = t.methods.find((e) => 'webauthn' === e.type),
        v = async () => {
            b(!0), y(null);
            let e = a.isPlatformEmbedded && d.ZP.supportsFeature(f.eRX.WEBAUTHN) ? d.ZP.webAuthnAuthenticate(x) : i.U2(JSON.parse(x)).then((e) => JSON.stringify(e)),
                t = async (e) => {
                    try {
                        await r({
                            mfaType: 'webauthn',
                            data: e
                        });
                    } catch (e) {
                        e instanceof s.Pd ? y(h.NW.string(h.t.xSCvBQ)) : y(e.message);
                    }
                };
            try {
                let r = await e;
                await t(r);
            } catch (e) {
                c.Z.captureException(e), y(h.NW.string(h.t.xSCvBQ));
            } finally {
                b(!1);
            }
        };
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(u.Z.SlideHeader, { onClose: p }),
            (0, n.jsxs)(u.Z.SlideContent, {
                children: [
                    (0, n.jsx)(o.zxk, {
                        submitting: g,
                        onClick: v,
                        children: h.NW.string(h.t.Xr3Ekp)
                    }),
                    (0, n.jsx)(u.Z.SlideError, { error: j })
                ]
            }),
            (0, n.jsx)(u.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: m
            })
        ]
    });
}
