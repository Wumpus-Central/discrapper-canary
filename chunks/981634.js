n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(417597),
    a = n(97808),
    o = n(778712),
    d = n(834730),
    c = n(709066),
    u = n(351906),
    m = n(795573);
function g(e) {
    let { className: t, avatarURL: n, name: l, bot: g, verifiedBot: h, userTag: x } = e,
        _ = (0, r.bG)([u.A], () => u.A.hidePersonalInformation);
    return (0, i.jsxs)("div", {
        className: s()(m.kL, t),
        children: [
            (0, i.jsx)(a.eu, { className: m.my, src: n, size: o._3.SIZE_24, "aria-label": l }),
            (0, i.jsxs)("div", {
                className: m.FS,
                children: [
                    (0, i.jsx)(d.E, {
                        tag: "span",
                        className: m.UU,
                        color: "text-strong",
                        variant: "text-sm/semibold",
                        children: l,
                    }),
                    g ? (0, i.jsx)(c.A, { className: m.AO, verified: h }) : null,
                    _
                        ? null
                        : (0, i.jsx)(d.E, {
                              tag: "span",
                              color: "interactive-text-default",
                              className: m.a1,
                              variant: "text-sm/normal",
                              children: x,
                          }),
                ],
            }),
        ],
    });
}
