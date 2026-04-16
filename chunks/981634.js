"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(417597),
    a = n(397927),
    o = n(709066),
    d = n(351906),
    c = n(795573);
function u(e) {
    let { className: t, avatarURL: n, name: s, bot: u, verifiedBot: m, userTag: g } = e,
        x = (0, r.bG)([d.A], () => d.A.hidePersonalInformation);
    return (0, i.jsxs)("div", {
        className: l()(c.kL, t),
        children: [
            (0, i.jsx)(a.euF, { className: c.my, src: n, size: a._3J.SIZE_24, "aria-label": s }),
            (0, i.jsxs)("div", {
                className: c.FS,
                children: [
                    (0, i.jsx)(a.Text, {
                        tag: "span",
                        className: c.UU,
                        color: "text-strong",
                        variant: "text-sm/semibold",
                        children: s,
                    }),
                    u ? (0, i.jsx)(o.A, { className: c.AO, verified: m }) : null,
                    x
                        ? null
                        : (0, i.jsx)(a.Text, {
                              tag: "span",
                              color: "interactive-text-default",
                              className: c.a1,
                              variant: "text-sm/normal",
                              children: g,
                          }),
                ],
            }),
        ],
    });
}
