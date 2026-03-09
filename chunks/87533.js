l.d(e, { A: () => c });
var n = l(627968);
l(64700);
var i = l(397927),
    s = l(333672),
    r = l(652215),
    a = l(985018),
    o = l(978707);
let d = { type: "rive", rive: i.DSM, aspectRatio: "16/9" };
function c(t) {
    let {
            transitionState: e,
            guild: l,
            slotCount: c,
            canceledCount: u,
            isModifyingSubscription: x,
            error: m,
            expressiveCta: h,
            onConfirm: g,
            onClose: C,
        } = t,
        j = [
            {
                variant: h ? "expressive" : "primary",
                text: a.intl.formatToPlainString(a.t.ZU5x5w, { slotCount: c }),
                onClick: g,
                loading: x,
                disabled: x,
            },
        ];
    return (0, n.jsxs)(i.kpP, {
        transitionState: e,
        onClose: C,
        graphic: d,
        title: a.intl.string(a.t["7KP/fI"]),
        actions: j,
        children: [
            (0, n.jsx)(i.Text, { variant: "text-md/normal", children: a.intl.string(a.t.yTlZV0) }),
            (0, n.jsx)(s.Ay, { className: o.g, guild: l, subscriptionChange: c }),
            (0, n.jsx)(i.Text, {
                variant: "text-md/normal",
                className: o.$,
                children: a.intl.formatToPlainString(a.t.KPnDlu, { days: r.FI6, slotCount: c }),
            }),
            u > 0 ? (0, n.jsx)(s.ti, { canceledCount: u }) : null,
            null != m &&
                (0, n.jsx)(i.Text, {
                    color: "text-feedback-critical",
                    variant: "text-sm/semibold",
                    children: m.message,
                }),
        ],
    });
}
