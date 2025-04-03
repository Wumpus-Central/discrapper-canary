r.d(t, { Z: () => m }), r(47120), r(26686);
var n = r(200651),
    l = r(192379),
    s = r(849055),
    i = r(544891),
    o = r(481060),
    a = r(358085),
    c = r(960048),
    u = r(998502),
    d = r(507453),
    f = r(981631),
    h = r(388032);
function m(e) {
    let { mfaChallenge: t, finish: r, setSlide: m, onClose: p } = e,
        [g, b] = l.useState(!1),
        [j, y] = l.useState(null),
        { challenge: x } = t.methods.find((e) => 'webauthn' === e.type),
        S = async () => {
            b(!0), y(null);
            let e = a.isPlatformEmbedded && u.ZP.supportsFeature(f.eRX.WEBAUTHN) ? u.ZP.webAuthnAuthenticate(x) : s.U2(JSON.parse(x)).then((e) => JSON.stringify(e)),
                t = async (e) => {
                    try {
                        await r({
                            mfaType: 'webauthn',
                            data: e
                        });
                    } catch (e) {
                        e instanceof i.Pd ? y(h.NW.string(h.t.xSCvBQ)) : y(e.message);
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
            (0, n.jsx)(d.Z.SlideHeader, { onClose: p }),
            (0, n.jsxs)(d.Z.SlideContent, {
                children: [
                    (0, n.jsx)(o.zxk, {
                        submitting: g,
                        onClick: S,
                        children: h.NW.string(h.t.Xr3Ekp)
                    }),
                    (0, n.jsx)(d.Z.SlideError, { error: j })
                ]
            }),
            (0, n.jsx)(d.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: m
            })
        ]
    });
}
