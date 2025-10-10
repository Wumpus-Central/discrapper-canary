n.d(a, { default: () => g });
var e = n(951288),
    s = n(647438),
    c = n(990547),
    i = n(793030),
    r = n(481060),
    o = n(37234),
    p = n(809206),
    d = n(410030),
    u = n(100527),
    l = n(906732),
    _ = n(213609),
    L = n(1585),
    f = n(300284),
    E = n(626135),
    C = n(335131),
    b = n(981631),
    k = n(388032),
    y = n(890767),
    I = n(480443);
function g(t) {
    let { transitionState: a, onClose: n, skuId: g } = t,
        { analyticsLocations: h } = (0, l.ZP)(u.Z.COLLECTIBLES_EXPIRY_MODAL),
        m = (0, r.wjy)((0, d.ZP)()),
        O = (0, f.Z)({ analyticsLocations: h }),
        Z = s.useRef(null);
    s.useEffect(
        () => (
            (0, p.Mn)({ avatarDecoration: null }),
            () => {
                E.default.track(b.rMx.COLLECTIBLES_EXPIRY_MODAL_CLOSED, {
                    reason: Z.current,
                    sku_id: g,
                });
            }
        ),
        [g],
    ),
        (0, _.Z)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.COLLECTIBLES_EXPIRY_MODAL,
            properties: {
                location_stack: h,
                sku_id: g,
            },
        });
    let M = async () => {
            (Z.current = "change_avatar_decoration"), await n(), (0, o.xf)(), O(), (0, L.ps)({ analyticsLocations: h });
        },
        x = async () => {
            (Z.current = "go_to_shop"),
                await n(),
                (0, C.mK)({
                    analyticsLocations: h,
                    analyticsSource: u.Z.COLLECTIBLES_EXPIRY_MODAL,
                    openInLayer: !1,
                });
        },
        D = async () => {
            (Z.current = "tap_close_button"), await n();
        },
        S = [
            {
                text: k.intl.string(k.t["x8T+k5"]),
                variant: "secondary",
                onClick: M,
            },
            {
                text: k.intl.string(k.t.fmqMER),
                variant: "primary",
                onClick: x,
            },
        ];
    return (0, e.jsx)(i.ExpressiveModal, {
        graphic: {
            type: "image",
            src: m ? y.Z : I.Z,
        },
        title: k.intl.string(k.t.xz81o6),
        subtitle: k.intl.string(k.t.Vrbnnp),
        onClose: D,
        transitionState: a,
        actions: S,
    });
}
