n.d(t, { Z: () => g }), n(388685), n(49124);
var l = n(54381),
    r = n(473749),
    i = n(849055),
    s = n(544891),
    a = n(481060),
    o = n(358085),
    d = n(960048),
    u = n(998502),
    c = n(507453),
    h = n(981631),
    f = n(388032);
function g(e) {
    let { mfaChallenge: t, finish: n, setSlide: g, onClose: m, headerAlignStart: p } = e,
        [b, S] = r.useState(!1),
        [x, j] = r.useState(null),
        { challenge: y } = t.methods.find((e) => "webauthn" === e.type),
        v = async () => {
            S(!0), j(null);
            let e =
                    o.isPlatformEmbedded && u.ZP.supportsFeature(h.eRX.WEBAUTHN)
                        ? u.ZP.webAuthnAuthenticate(y)
                        : i.U2(JSON.parse(y)).then((e) => JSON.stringify(e)),
                t = async (e) => {
                    try {
                        await n({
                            mfaType: "webauthn",
                            data: e,
                        });
                    } catch (e) {
                        e instanceof s.Pd ? j(f.intl.string(f.t.xSCvBf)) : j(e.message);
                    }
                };
            try {
                let n = await e;
                await t(n);
            } catch (e) {
                d.Z.captureException(e), j(f.intl.string(f.t.xSCvBf));
            } finally {
                S(!1);
            }
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(c.Z.SlideHeader, {
                onClose: m,
                headerAlignStart: p,
            }),
            null != x && (0, l.jsx)(c.Z.SlideContent, { children: (0, l.jsx)(c.Z.SlideError, { error: x }) }),
            (0, l.jsx)(c.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: g,
                leadingButton: (0, l.jsx)(a.Button, {
                    variant: "primary",
                    text: f.intl.string(f.t.Xr3Eks),
                    loading: b,
                    onClick: v,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
