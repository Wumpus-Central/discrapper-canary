t.d(s, { default: () => h });
var l = t(627968);
t(64700);
var n = t(158954),
    i = t(417597),
    o = t(397927),
    a = t(843472),
    r = t(997509),
    c = t(734057),
    u = t(258671),
    d = t(652215),
    g = t(985018),
    _ = t(378720);
function h(e) {
    let { channelId: s, messageId: t, transitionState: h, onClose: F } = e,
        S = (0, i.bG)([c.A], () => c.A.getChannel(s)),
        [m, C] = (0, u.A)(s),
        b = S?.guild_id;
    return (0, l.jsx)(n.ConfirmModal, {
        title: g.intl.string(g.t.aIz1oV),
        confirmText: g.intl.string(g.t["cY+Oob"]),
        onConfirm: () => a.A.crosspostMessage(s, t),
        transitionState: h,
        onClose: F,
        variant: "primary",
        children: (0, l.jsx)(o.Text, {
            variant: "text-md/normal",
            className: _.YK,
            children: C
                ? (0, l.jsx)(o.y$y, {})
                : null != m && null != m.guildsFollowing && m.guildsFollowing > 0
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(o.Text, {
                                className: _.YK,
                                variant: "text-sm/normal",
                                children: g.intl.format(g.t.GCGrNP, { numGuildsFollowing: m.guildsFollowing }),
                            }),
                            (0, l.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: g.intl.format(g.t.IMhGZz, {
                                    onClick: () => {
                                        null != b && null != F && (F(), r.A.open(b, d.BEX.ANALYTICS));
                                    },
                                }),
                            }),
                        ],
                    })
                  : g.intl.string(g.t["8FpqOs"]),
        }),
    });
}
