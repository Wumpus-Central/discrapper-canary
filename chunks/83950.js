e.d(t, { default: () => A });
var r = e(200651),
    s = e(192379),
    n = e(990547),
    c = e(481060),
    o = e(37234),
    i = e(809206),
    l = e(100527),
    _ = e(906732),
    d = e(213609),
    u = e(1585),
    E = e(313201),
    x = e(300284),
    k = e(626135),
    f = e(768581),
    v = e(335131),
    L = e(981631),
    h = e(388032),
    m = e(777134),
    p = e(749423);
function N() {
    let a = (0, f.NZ)({
            avatarDecoration: { asset: 'a_49c479e15533fb4c02eb320c9c137433' },
            canAnimate: !1,
            size: (0, u.y9)(c.EFr.SIZE_120)
        }),
        t = (0, f.NZ)({
            avatarDecoration: { asset: 'a_c3cffc19e9784f7d0b005eecdf1b566e' },
            canAnimate: !1,
            size: (0, u.y9)(c.EFr.SIZE_120)
        }),
        e = (0, f.NZ)({
            avatarDecoration: { asset: 'a_d72066b8cecbadd9fc951913ebcc384f' },
            canAnimate: !1,
            size: (0, u.y9)(c.EFr.SIZE_120)
        });
    return (0, r.jsxs)('div', {
        className: m.avatarBackground,
        children: [
            (0, r.jsx)(c.qEK, {
                size: c.EFr.SIZE_120,
                src: p,
                avatarDecoration: a,
                className: m.leftAvatar,
                'aria-hidden': !0
            }),
            (0, r.jsx)(c.qEK, {
                size: c.EFr.SIZE_120,
                src: p,
                avatarDecoration: t,
                className: m.centerAvatar,
                'aria-hidden': !0
            }),
            (0, r.jsx)(c.qEK, {
                size: c.EFr.SIZE_120,
                src: p,
                avatarDecoration: e,
                className: m.rightAvatar,
                'aria-hidden': !0
            })
        ]
    });
}
function A(a) {
    let { transitionState: t, onClose: e, skuId: f } = a,
        p = (0, E.Dt)(),
        { analyticsLocations: A } = (0, _.ZP)(l.Z.COLLECTIBLES_EXPIRY_MODAL),
        I = (0, x.Z)({ analyticsLocations: A }),
        b = s.useRef(null);
    return (
        s.useEffect(
            () => (
                (0, i.Mn)({ avatarDecoration: null }),
                () => {
                    k.default.track(L.rMx.COLLECTIBLES_EXPIRY_MODAL_CLOSED, {
                        reason: b.current,
                        sku_id: f
                    });
                }
            ),
            [f]
        ),
        (0, d.Z)({
            type: n.ImpressionTypes.MODAL,
            name: n.ImpressionNames.COLLECTIBLES_EXPIRY_MODAL,
            properties: {
                location_stack: A,
                sku_id: f
            }
        }),
        (0, r.jsxs)(c.Y0X, {
            transitionState: t,
            'aria-labelledby': p,
            className: m.container,
            children: [
                (0, r.jsx)(N, {}),
                (0, r.jsx)(c.olH, {
                    onClick: () => {
                        (b.current = 'tap_close_button'), e();
                    },
                    className: m.closeButton
                }),
                (0, r.jsxs)(c.hzk, {
                    className: m.content,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-xl/bold',
                            className: m.title,
                            children: h.NW.string(h.t.xz81o6)
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            className: m.body,
                            children: h.NW.string(h.t.Vrbnnp)
                        })
                    ]
                }),
                (0, r.jsxs)(c.mzw, {
                    className: m.footer,
                    children: [
                        (0, r.jsx)(c.zxk, {
                            look: c.zxk.Looks.LINK,
                            color: c.zxk.Colors.BRAND,
                            onClick: () => {
                                (b.current = 'change_avatar_decoration'), e(), (0, o.xf)(), I(), (0, u.ps)({ analyticsLocations: A });
                            },
                            children: h.NW.string(h.t['x8T+k5'])
                        }),
                        (0, r.jsx)(c.zxk, {
                            look: c.zxk.Looks.FILLED,
                            color: c.zxk.Colors.BRAND,
                            onClick: () => {
                                (b.current = 'go_to_shop'),
                                    e(),
                                    (0, v.mK)({
                                        analyticsLocations: A,
                                        analyticsSource: l.Z.COLLECTIBLES_EXPIRY_MODAL,
                                        openInLayer: !1
                                    });
                            },
                            children: h.NW.string(h.t.fmqMER)
                        })
                    ]
                })
            ]
        })
    );
}
