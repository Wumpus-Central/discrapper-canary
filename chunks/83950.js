e.d(t, { default: () => A });
var r = e(255367),
    n = e(73800),
    s = e(990547),
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
    m = e(335131),
    p = e(981631),
    v = e(388032),
    L = e(777134),
    h = e(749423);
function b() {
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
        className: L.avatarBackground,
        children: [
            (0, r.jsx)(c.qEK, {
                size: c.EFr.SIZE_120,
                src: h,
                avatarDecoration: a,
                className: L.leftAvatar,
                'aria-hidden': !0
            }),
            (0, r.jsx)(c.qEK, {
                size: c.EFr.SIZE_120,
                src: h,
                avatarDecoration: t,
                className: L.centerAvatar,
                'aria-hidden': !0
            }),
            (0, r.jsx)(c.qEK, {
                size: c.EFr.SIZE_120,
                src: h,
                avatarDecoration: e,
                className: L.rightAvatar,
                'aria-hidden': !0
            })
        ]
    });
}
function A(a) {
    let { transitionState: t, onClose: e, skuId: f } = a,
        h = (0, E.Dt)(),
        { analyticsLocations: A } = (0, _.ZP)(l.Z.COLLECTIBLES_EXPIRY_MODAL),
        I = (0, x.Z)({ analyticsLocations: A }),
        C = n.useRef(null);
    return (
        n.useEffect(
            () => (
                (0, i.Mn)({ avatarDecoration: null }),
                () => {
                    k.default.track(p.rMx.COLLECTIBLES_EXPIRY_MODAL_CLOSED, {
                        reason: C.current,
                        sku_id: f
                    });
                }
            ),
            [f]
        ),
        (0, d.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.COLLECTIBLES_EXPIRY_MODAL,
            properties: {
                location_stack: A,
                sku_id: f
            }
        }),
        (0, r.jsxs)(c.Y0X, {
            transitionState: t,
            'aria-labelledby': h,
            className: L.container,
            parentComponent: 'CollectiblesExpiryModal',
            children: [
                (0, r.jsx)(b, {}),
                (0, r.jsx)(c.olH, {
                    onClick: () => {
                        (C.current = 'tap_close_button'), e();
                    },
                    className: L.closeButton
                }),
                (0, r.jsxs)(c.hzk, {
                    className: L.content,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-xl/bold',
                            className: L.title,
                            children: v.intl.string(v.t.xz81o6)
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            className: L.body,
                            children: v.intl.string(v.t.Vrbnnp)
                        })
                    ]
                }),
                (0, r.jsxs)(c.mzw, {
                    className: L.footer,
                    children: [
                        (0, r.jsx)(c.zxk, {
                            look: c.zxk.Looks.LINK,
                            color: c.zxk.Colors.BRAND,
                            onClick: () => {
                                (C.current = 'change_avatar_decoration'), e(), (0, o.xf)(), I(), (0, u.ps)({ analyticsLocations: A });
                            },
                            children: v.intl.string(v.t['x8T+k5'])
                        }),
                        (0, r.jsx)(c.zxk, {
                            look: c.zxk.Looks.FILLED,
                            color: c.zxk.Colors.BRAND,
                            onClick: () => {
                                (C.current = 'go_to_shop'),
                                    e(),
                                    (0, m.mK)({
                                        analyticsLocations: A,
                                        analyticsSource: l.Z.COLLECTIBLES_EXPIRY_MODAL,
                                        openInLayer: !1
                                    });
                            },
                            children: v.intl.string(v.t.fmqMER)
                        })
                    ]
                })
            ]
        })
    );
}
