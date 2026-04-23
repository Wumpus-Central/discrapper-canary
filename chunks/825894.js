i.d(n, { default: () => d });
var l = i(627968);
i(64700);
var r = i(189213),
    a = i(17928),
    e = i(834730),
    s = i(47167),
    c = i(734057),
    o = i(985018);
function d(t) {
    let { onConfirm: n, channelId: i, ...d } = t,
        u = (0, a.bG)([c.A], () => (null != i ? c.A.getChannel(i) : null)),
        p = (0, s.Ay)(u, !0);
    return (0, l.jsx)(r.Modal, {
        ...d,
        title: o.intl.string(o.t.S2eoq8),
        actions: [
            { variant: "secondary", text: o.intl.string(o.t["ETE/oC"]), onClick: d.onClose },
            { variant: "critical-primary", text: o.intl.string(o.t.N86XcP), onClick: n },
        ],
        children: (0, l.jsx)(e.E, {
            variant: "text-sm/normal",
            children: null != u ? o.intl.format(o.t["1KT3Fp"], { channelName: p }) : o.intl.string(o.t.VOPUVy),
        }),
    });
}
