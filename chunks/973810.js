n.d(t, { Z: () => g }), n(388685), n(49124);
var l = n(951288),
    r = n(647438),
    i = n(849055),
    s = n(544891),
    a = n(481060),
    o = n(358085),
    d = n(960048),
    c = n(998502),
    u = n(507453),
    h = n(981631),
    f = n(388032);
function g(e) {
    let { mfaChallenge: t, finish: n, setSlide: g, onClose: m, headerAlignStart: x } = e,
        [p, S] = r.useState(!1),
        [j, b] = r.useState(null),
        { challenge: y } = t.methods.find((e) => "webauthn" === e.type),
        v = async () => {
            S(!0), b(null);
            let e =
                    o.isPlatformEmbedded && c.ZP.supportsFeature(h.eRX.WEBAUTHN)
                        ? c.ZP.webAuthnAuthenticate(y)
                        : i.U2(JSON.parse(y)).then((e) => JSON.stringify(e)),
                t = async (e) => {
                    try {
                        await n({
                            mfaType: "webauthn",
                            data: e,
                        });
                    } catch (e) {
                        e instanceof s.Pd ? b(f.intl.string(f.t.xSCvBQ)) : b(e.message);
                    }
                };
            try {
                let n = await e;
                await t(n);
            } catch (e) {
                d.Z.captureException(e), b(f.intl.string(f.t.xSCvBQ));
            } finally {
                S(!1);
            }
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(u.Z.SlideHeader, {
                onClose: m,
                headerAlignStart: x,
            }),
            null != j && (0, l.jsx)(u.Z.SlideContent, { children: (0, l.jsx)(u.Z.SlideError, { error: j }) }),
            (0, l.jsx)(u.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: g,
                leadingButton: (0, l.jsx)(a.zxk, {
                    variant: "primary",
                    text: f.intl.string(f.t.Xr3Ekp),
                    loading: p,
                    onClick: v,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
