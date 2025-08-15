n.d(a, { default: () => g });
var e = n(951288),
    c = n(647438),
    s = n(990547),
    i = n(667202),
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
    I = n(388032),
    k = n(890767),
    y = n(480443);
function g(t) {
    let { transitionState: a, onClose: n, skuId: g } = t,
        { analyticsLocations: h } = (0, l.ZP)(u.Z.COLLECTIBLES_EXPIRY_MODAL),
        m = (0, r.wjy)((0, d.ZP)()),
        O = (0, f.Z)({ analyticsLocations: h }),
        Z = c.useRef(null);
    c.useEffect(
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
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.COLLECTIBLES_EXPIRY_MODAL,
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
                text: I.intl.string(I.t["x8T+k5"]),
                variant: "secondary",
                onClick: M,
            },
            {
                text: I.intl.string(I.t.fmqMER),
                variant: "primary",
                onClick: x,
            },
        ];
    return (0, e.jsx)(i.I, {
        graphic: {
            type: "image",
            src: m ? k.Z : y.Z,
        },
        title: I.intl.string(I.t.xz81o6),
        subtitle: I.intl.string(I.t.Vrbnnp),
        onClose: D,
        transitionState: a,
        actions: S,
    });
}
