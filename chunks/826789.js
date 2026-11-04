var n = e(477900);
e(582128);
var o = e(192308),
    c = e(523527),
    s = e(946830),
    i = e(976860),
    r = e(129230),
    u = e(652215);
e.d(
    a,
    {},
    {
        default: function (t) {
            let { onClose: a, ...e } = t;
            return (0, n.jsx)(s.default, {
                onClose: a,
                handleLearnMore: function () {
                    ((0, c.A)(),
                        (0, o.s7)(),
                        r.default.track(u.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_section: u.JJy.STREAM_UPSELL_MODAL,
                            location_object: u.ZSU.NAVIGATION_LINK,
                        }),
                        (0, i.pX)(u.BVt.APPLICATION_STORE));
                },
                ...e,
            });
        },
    },
);
