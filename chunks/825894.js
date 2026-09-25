i.d(n, { default: () => u });
var l = i(477900);
i(582128);
var r = i(17928),
    a = i(189213),
    e = i(834730),
    s = i(47167),
    c = i(734057),
    o = i(375708);
function u(t) {
    let { onConfirm: n, channelId: i, ...u } = t,
        d = (0, r.bG)([c.A], () => (null != i ? c.A.getChannel(i) : null)),
        p = (0, s.Ay)(d, !0);
    return (0, l.jsx)(a.a, {
        ...u,
        title: o.intl.string(o.t.S2eoq8),
        actions: [
            { variant: "secondary", text: o.intl.string(o.t["ETE/oC"]), onClick: u.onClose },
            { variant: "critical-primary", text: o.intl.string(o.t.N86XcP), onClick: n },
        ],
        children: (0, l.jsx)(e.E, {
            variant: "text-sm/normal",
            children: null != d ? o.intl.format(o.t["1KT3Fp"], { channelName: p }) : o.intl.string(o.t.VOPUVy),
        }),
    });
}
