n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(272812),
    a = n(200749),
    r = n(652215),
    o = n(985018),
    d = n(492955),
    c = n(828230);
function u(e) {
    let { channel: t, guild: u, width: h, inPopout: A } = e;
    return (0, i.jsx)(s.A, {
        className: d.zr,
        children: (0, i.jsx)(a.A, {
            artURL: c,
            size: (0, a.J)(h),
            header: o.intl.string(o.t.O4FiWi),
            onCTAClick: () =>
                (0, l.mMO)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(
                            n.bind(n, 234355),
                        );
                        return (n) => (0, i.jsx)(e, { ...n, guild: u, channel: t, source: r.PE1.CHANNEL_CALL });
                    },
                    { contextKey: A ? l.KX8 : l.SYi },
                ),
            callToAction: o.intl.string(o.t.VINpSK),
        }),
    });
}
