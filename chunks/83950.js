e.d(t, { default: () => k });
var r = e(255367),
    n = e(73800),
    s = e(990547),
    c = e(481060),
    i = e(37234),
    o = e(809206),
    l = e(100527),
    _ = e(906732),
    d = e(213609),
    u = e(1585),
    E = e(313201),
    v = e(300284),
    m = e(626135),
    p = e(768581),
    x = e(335131),
    f = e(981631),
    h = e(388032),
    b = e(777134),
    L = e(749423);
function A() {
    let a = (0, p.NZ)({
            avatarDecoration: { asset: 'a_49c479e15533fb4c02eb320c9c137433' },
            canAnimate: !1,
            size: (0, u.y9)(c.EFr.SIZE_120)
        }),
        t = (0, p.NZ)({
            avatarDecoration: { asset: 'a_c3cffc19e9784f7d0b005eecdf1b566e' },
            canAnimate: !1,
            size: (0, u.y9)(c.EFr.SIZE_120)
        }),
        e = (0, p.NZ)({
            avatarDecoration: { asset: 'a_d72066b8cecbadd9fc951913ebcc384f' },
            canAnimate: !1,
            size: (0, u.y9)(c.EFr.SIZE_120)
        });
    return (0, r.jsxs)('div', {
        className: b.avatarBackground,
        children: [
            (0, r.jsx)(c.qEK, {
                size: c.EFr.SIZE_120,
                src: L,
                avatarDecoration: a,
                className: b.leftAvatar,
                'aria-hidden': !0
            }),
            (0, r.jsx)(c.qEK, {
                size: c.EFr.SIZE_120,
                src: L,
                avatarDecoration: t,
                className: b.centerAvatar,
                'aria-hidden': !0
            }),
            (0, r.jsx)(c.qEK, {
                size: c.EFr.SIZE_120,
                src: L,
                avatarDecoration: e,
                className: b.rightAvatar,
                'aria-hidden': !0
            })
        ]
    });
}
function k(a) {
    let { transitionState: t, onClose: e, skuId: p } = a,
        L = (0, E.Dt)(),
        { analyticsLocations: k } = (0, _.ZP)(l.Z.COLLECTIBLES_EXPIRY_MODAL),
        I = (0, v.Z)({ analyticsLocations: k }),
        C = n.useRef(null);
    return (
        n.useEffect(
            () => (
                (0, o.Mn)({ avatarDecoration: null }),
                () => {
                    m.default.track(f.rMx.COLLECTIBLES_EXPIRY_MODAL_CLOSED, {
                        reason: C.current,
                        sku_id: p
                    });
                }
            ),
            [p]
        ),
        (0, d.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.COLLECTIBLES_EXPIRY_MODAL,
            properties: {
                location_stack: k,
                sku_id: p
            }
        }),
        (0, r.jsxs)(c.Y0X, {
            transitionState: t,
            'aria-labelledby': L,
            className: b.container,
            parentComponent: 'CollectiblesExpiryModal',
            children: [
                (0, r.jsx)(A, {}),
                (0, r.jsx)(c.olH, {
                    onClick: () => {
                        ((C.current = 'tap_close_button'), e());
                    },
                    className: b.closeButton
                }),
                (0, r.jsxs)(c.hzk, {
                    className: b.content,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-xl/bold',
                            className: b.title,
                            children: h.intl.string(h.t.xz81o6)
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            className: b.body,
                            children: h.intl.string(h.t.Vrbnnp)
                        })
                    ]
                }),
                (0, r.jsxs)(c.mzw, {
                    className: b.footer,
                    children: [
                        (0, r.jsx)(c.Avr, {
                            variant: 'primary',
                            text: h.intl.string(h.t['x8T+k5']),
                            onClick: () => {
                                ((C.current = 'change_avatar_decoration'), e(), (0, i.xf)(), I(), (0, u.ps)({ analyticsLocations: k }));
                            }
                        }),
                        (0, r.jsx)(c.zxk, {
                            variant: 'primary',
                            text: h.intl.string(h.t.fmqMER),
                            onClick: () => {
                                ((C.current = 'go_to_shop'),
                                    e(),
                                    (0, x.mK)({
                                        analyticsLocations: k,
                                        analyticsSource: l.Z.COLLECTIBLES_EXPIRY_MODAL,
                                        openInLayer: !1
                                    }));
                            }
                        })
                    ]
                })
            ]
        })
    );
}
