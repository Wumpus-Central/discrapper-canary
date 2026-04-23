l.d(e, { A: () => m });
var n = l(627968);
l(64700);
var i = l(171283),
    s = l(772707),
    r = l(834730),
    a = l(333672),
    o = l(652215),
    d = l(985018),
    c = l(786148);
let u = { type: "rive", rive: i.D, aspectRatio: "16/9" };
function m(t) {
    let {
            transitionState: e,
            guild: l,
            slotCount: i,
            canceledCount: m,
            isModifyingSubscription: x,
            error: h,
            expressiveCta: g,
            onConfirm: C,
            onClose: j,
        } = t,
        v = [
            {
                variant: g ? "expressive" : "primary",
                text: d.intl.formatToPlainString(d.t.ZU5x5w, { slotCount: i }),
                onClick: C,
                loading: x,
                disabled: x,
            },
        ];
    return (0, n.jsxs)(s.k, {
        transitionState: e,
        onClose: j,
        graphic: u,
        title: d.intl.string(d.t["7KP/fI"]),
        actions: v,
        children: [
            (0, n.jsx)(r.E, { variant: "text-md/normal", children: d.intl.string(d.t.yTlZV0) }),
            (0, n.jsx)(a.Ay, { className: c.g, guild: l, subscriptionChange: i }),
            (0, n.jsx)(r.E, {
                variant: "text-md/normal",
                className: c.$,
                children: d.intl.formatToPlainString(d.t.KPnDlu, { days: o.FI6, slotCount: i }),
            }),
            m > 0 ? (0, n.jsx)(a.ti, { canceledCount: m }) : null,
            null != h &&
                (0, n.jsx)(r.E, { color: "text-feedback-critical", variant: "text-sm/semibold", children: h.message }),
        ],
    });
}
