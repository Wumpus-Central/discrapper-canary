t.d(l, {
    default: () => S,
}),
    t(896048);
var s = t(627968);
t(64700);
var n = t(158954),
    i = t(417597),
    o = t(397927),
    a = t(843472),
    r = t(997509),
    u = t(734057),
    c = t(258671),
    d = t(652215),
    g = t(985018),
    _ = t(378720);

function S(e) {
    let { channelId: l, messageId: t, transitionState: S, onClose: h } = e,
        F = (0, i.bG)([u.A], () => u.A.getChannel(l)),
        [b, m] = (0, c.A)(l),
        f = null == F ? void 0 : F.guild_id;
    return (0, s.jsx)(n.ConfirmModal, {
        title: g.intl.string(g.t.aIz1oV),
        confirmText: g.intl.string(g.t["cY+Oob"]),
        onConfirm: () => a.A.crosspostMessage(l, t),
        transitionState: S,
        onClose: h,
        variant: "primary",
        children: (0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            className: _.YK,
            children: m
                ? (0, s.jsx)(o.y$y, {})
                : null != b && null != b.guildsFollowing && b.guildsFollowing > 0
                  ? (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(o.Text, {
                                className: _.YK,
                                variant: "text-sm/normal",
                                children: g.intl.format(g.t.GCGrNP, {
                                    numGuildsFollowing: b.guildsFollowing,
                                }),
                            }),
                            (0, s.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: g.intl.format(g.t.IMhGZz, {
                                    onClick: () => {
                                        null != f && null != h && (h(), r.A.open(f, d.BEX.ANALYTICS));
                                    },
                                }),
                            }),
                        ],
                    })
                  : g.intl.string(g.t["8FpqOs"]),
        }),
    });
}
