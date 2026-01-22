n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(793574),
    s = n(70730),
    o = n(275759),
    l = n(423998),
    c = n(570287),
    u = n(822775),
    d = n(784886),
    f = n(183959);
function p(e) {
    let { user: t, guildId: n, channelId: p, onClose: _, appContext: h, disableAutoFocus: m = !1 } = e,
        g = (0, c.A)(t.id, n),
        E = (0, s.p)(a.A.USER_PROFILE_POPOUT),
        b = (0, i.bG)([o.Ay], () => o.Ay.canShowProfilePopoutGiftIntents(t.id), [t.id]),
        y = E && b;
    return (0, r.jsxs)("div", {
        className: f.qr,
        children: [
            g &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        y && (0, r.jsx)(l.O, { profileUserId: t.id }),
                        (0, r.jsx)(d.A, {
                            user: t,
                            guildId: n,
                            channelId: p,
                            onClose: _,
                            disableAutoFocus: m,
                            upsell: y,
                        }),
                    ],
                }),
            !g &&
                (0, r.jsx)(u.A, {
                    user: t,
                    guildId: n,
                    onClose: _,
                    fullWidth: !0,
                    appContext: h,
                }),
        ],
    });
}
