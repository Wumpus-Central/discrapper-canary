t.d(e, {
    default: () => u,
});
var r = t(627968);
t(64700);
var a = t(397927),
    c = t(442433),
    l = t(358367),
    i = t(793574),
    o = t(50268),
    s = t(317910),
    A = t(985018);
let u = (0, l.A)(
    function (n) {
        let { channel: e, onSelect: t } = n,
            l = (0, s.A)(e),
            i = (0, o.A)({
                id: e.id,
                label: A.intl.string(A.t.gFHI3k),
            });
        return (0, r.jsxs)(a.W1t, {
            "data-menu-mixed": !0,
            navId: "channel-context",
            onClose: c.Z_,
            "aria-label": A.intl.string(A.t.Xm41aV),
            onSelect: t,
            children: [
                (0, r.jsx)(a.rXV, {
                    children: l,
                }),
                (0, r.jsx)(a.rXV, {
                    children: i,
                }),
            ],
        });
    },
    [i.A.CONTEXT_MENU, i.A.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU],
);
