i.d(n, { default: () => a });
var e = i(627968);
i(64700);
var r = i(189213),
    o = i(172710),
    l = i(985018);
function a(t) {
    let { transitionState: n, onClose: i } = t;
    return (0, e.jsx)(r.Modal, {
        transitionState: n,
        onClose: i,
        size: "sm",
        title: l.intl.formatToMarkdownString(l.t.DQsSGr, {}),
        subtitle: l.intl.string(l.t.xGMwi9),
        actions: [
            { variant: "secondary", text: l.intl.string(l.t["ETE/oC"]), onClick: i },
            {
                variant: "primary",
                text: l.intl.string(l.t.n8U5jd),
                onClick: function () {
                    (0, o.Pt)(), i();
                },
            },
        ],
    });
}
