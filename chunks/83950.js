a.d(n, { default: () => k });
var e = a(255367),
    s = a(73800),
    i = a(990547),
    r = a(667202),
    c = a(37234),
    o = a(809206),
    p = a(100527),
    u = a(906732),
    l = a(213609),
    _ = a(1585),
    L = a(300284),
    d = a(626135),
    E = a(335131),
    C = a(981631),
    f = a(388032),
    I = a(1359);
function k(t) {
    let { transitionState: n, onClose: a, skuId: k } = t,
        { analyticsLocations: b } = (0, u.ZP)(p.Z.COLLECTIBLES_EXPIRY_MODAL),
        y = (0, L.Z)({ analyticsLocations: b }),
        O = s.useRef(null);
    s.useEffect(
        () => (
            (0, o.Mn)({ avatarDecoration: null }),
            () => {
                d.default.track(C.rMx.COLLECTIBLES_EXPIRY_MODAL_CLOSED, {
                    reason: O.current,
                    sku_id: k,
                });
            }
        ),
        [k],
    ),
        (0, l.Z)({
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.COLLECTIBLES_EXPIRY_MODAL,
            properties: {
                location_stack: b,
                sku_id: k,
            },
        });
    let g = async () => {
            (O.current = "change_avatar_decoration"), await a(), (0, c.xf)(), y(), (0, _.ps)({ analyticsLocations: b });
        },
        h = async () => {
            (O.current = "go_to_shop"),
                await a(),
                (0, E.mK)({
                    analyticsLocations: b,
                    analyticsSource: p.Z.COLLECTIBLES_EXPIRY_MODAL,
                    openInLayer: !1,
                });
        },
        m = async () => {
            (O.current = "tap_close_button"), await a();
        },
        M = [
            {
                text: f.intl.string(f.t["x8T+k5"]),
                variant: "secondary",
                onClick: g,
            },
            {
                text: f.intl.string(f.t.fmqMER),
                variant: "primary",
                onClick: h,
            },
        ];
    return (0, e.jsx)(r.I, {
        graphic: {
            type: "image",
            src: I.Z,
        },
        title: f.intl.string(f.t.xz81o6),
        subtitle: f.intl.string(f.t.Vrbnnp),
        onClose: m,
        transitionState: n,
        actions: M,
    });
}
