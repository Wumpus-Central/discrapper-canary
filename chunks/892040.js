n.d(t, { K: () => u });
var i = n(627968);
n(64700);
var r = n(115723),
    a = n(827734),
    l = n(534514),
    s = n(821609),
    o = n(985018),
    d = n(146983);
function u(e) {
    let { onDiscardApplication: t, onContinueApplication: n, guild: u } = e;
    return (0, i.jsxs)("div", {
        className: d.EL,
        children: [
            (0, i.jsx)("div", {
                className: d.P0,
                children: (0, i.jsx)(r.p, { size: "md", color: a.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, i.jsx)(l.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children:
                    null != u
                        ? o.intl.formatToPlainString(o.t.f5Jaw7, { guildName: u.name })
                        : o.intl.string(o.t["0sTyEb"]),
            }),
            (0, i.jsxs)("div", {
                className: d.rn,
                children: [
                    (0, i.jsx)(s.$, {
                        fullWidth: !0,
                        onClick: n,
                        variant: "secondary",
                        size: "md",
                        text: o.intl.string(o.t.h3aGmv),
                    }),
                    (0, i.jsx)(s.$, {
                        fullWidth: !0,
                        onClick: t,
                        variant: "critical-primary",
                        size: "md",
                        text: o.intl.string(o.t.OQFlFD),
                    }),
                ],
            }),
        ],
    });
}
