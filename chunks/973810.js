n.d(t, { Z: () => g }), n(388685), n(49124);
var r = n(54381),
    l = n(473749),
    i = n(849055),
    s = n(544891),
    a = n(481060),
    o = n(287880),
    c = n(358085),
    u = n(998502),
    d = n(507453),
    f = n(981631),
    h = n(388032);
function g(e) {
    let { mfaChallenge: t, finish: n, setSlide: g, onClose: m, headerAlignStart: b } = e,
        [p, j] = l.useState(!1),
        [x, y] = l.useState(null),
        { challenge: S } = t.methods.find((e) => "webauthn" === e.type),
        v = async () => {
            j(!0), y(null);
            let e =
                    c.isPlatformEmbedded && u.ZP.supportsFeature(f.eRX.WEBAUTHN)
                        ? u.ZP.webAuthnAuthenticate(S)
                        : i.U2(JSON.parse(S)).then((e) => JSON.stringify(e)),
                t = async (e) => {
                    try {
                        await n({
                            mfaType: "webauthn",
                            data: e,
                        });
                    } catch (e) {
                        e instanceof s.Pd ? y(h.intl.string(h.t.xSCvBf)) : ((0, o.SN)(e, {}), y(e.message));
                    }
                };
            try {
                let n = await e;
                await t(n);
            } catch (e) {
                (0, o.SN)(e, { extra: { error_type: "webauthn_api_error" } }), y(h.intl.string(h.t.xSCvBf));
            } finally {
                j(!1);
            }
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.Z.SlideHeader, {
                onClose: m,
                headerAlignStart: b,
            }),
            null != x && (0, r.jsx)(d.Z.SlideContent, { children: (0, r.jsx)(d.Z.SlideError, { error: x }) }),
            (0, r.jsx)(d.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: g,
                trailingButton: (0, r.jsx)(a.Button, {
                    variant: "primary",
                    text: h.intl.string(h.t.Xr3Eks),
                    loading: p,
                    onClick: v,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
