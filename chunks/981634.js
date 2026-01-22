n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(417597),
    a = n(397927),
    c = n(709066),
    o = n(351906),
    d = n(89200);
function u(e) {
    let { className: t, avatarURL: n, name: i, bot: u, verifiedBot: f, userTag: g } = e,
        b = (0, s.bG)([o.A], () => o.A.hidePersonalInformation);
    return (0, r.jsxs)("div", {
        className: l()(d.kL, t),
        children: [
            (0, r.jsx)(a.euF, {
                className: d.my,
                src: n,
                size: a._3J.SIZE_24,
                "aria-label": i,
            }),
            (0, r.jsxs)("div", {
                className: d.FS,
                children: [
                    (0, r.jsx)(a.Text, {
                        tag: "span",
                        className: d.UU,
                        color: "text-strong",
                        variant: "text-sm/semibold",
                        children: i,
                    }),
                    u
                        ? (0, r.jsx)(c.A, {
                              className: d.AO,
                              verified: f,
                          })
                        : null,
                    b
                        ? null
                        : (0, r.jsx)(a.Text, {
                              tag: "span",
                              color: "interactive-text-default",
                              className: d.a1,
                              variant: "text-sm/normal",
                              children: g,
                          }),
                ],
            }),
        ],
    });
}
