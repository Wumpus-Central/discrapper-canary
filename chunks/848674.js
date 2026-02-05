"use strict";
n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(793574),
    s = n(70730),
    o = n(275759),
    l = n(423998),
    u = n(570287),
    c = n(822775),
    d = n(784886),
    _ = n(183959);
function f(e) {
    let { user: t, guildId: n, channelId: f, onClose: p, appContext: h, disableAutoFocus: m = !1 } = e,
        g = (0, u.A)(t.id, n),
        E = (0, s.p)(a.A.USER_PROFILE_POPOUT),
        A = (0, i.bG)([o.Ay], () => o.Ay.canShowProfilePopoutGiftIntents(t.id), [t.id]),
        I = E && A;
    return (0, r.jsxs)("div", {
        className: _.qr,
        children: [
            g &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        I && (0, r.jsx)(l.O, { profileUserId: t.id }),
                        (0, r.jsx)(d.A, {
                            user: t,
                            guildId: n,
                            channelId: f,
                            onClose: p,
                            disableAutoFocus: m,
                            upsell: I,
                        }),
                    ],
                }),
            !g && (0, r.jsx)(c.A, { user: t, guildId: n, onClose: p, fullWidth: !0, appContext: h }),
        ],
    });
}
