n.d(e, { A: () => o });
var r = n(477900),
    i = n(97808),
    s = n(778712),
    t = n(834730),
    d = n(427262),
    c = n(191850),
    l = n(792996);
function o(a) {
    let { creator: e, guildId: n, color: o = "none" } = a;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.eu, { src: e.getAvatarURL(n, 40), size: s._3.SIZE_20, "aria-hidden": !0 }),
            (0, r.jsx)(t.E, {
                variant: "body-sm/normal",
                color: o,
                lineClamp: 1,
                children: l.intl.format(c.default["6/x9LD"], { name: (0, d.mG)(e) }),
            }),
        ],
    });
}
