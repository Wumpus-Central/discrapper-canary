t.d(l, { default: () => h }), t(896048);
var n = t(627968);
t(64700);
var s = t(417597),
    o = t(421380),
    i = t(397927),
    r = t(843472),
    a = t(997509),
    c = t(734057),
    u = t(258671),
    d = t(652215),
    g = t(985018),
    b = t(378720);
function h(e) {
    let { channelId: l, messageId: t, transitionState: h, onClose: S } = e,
        _ = (0, s.bG)([c.A], () => c.A.getChannel(l)),
        [f, C] = (0, u.A)(l),
        F = null == _ ? void 0 : _.guild_id;
    return (0, n.jsx)(i.VoidConfirmModal, {
        header: g.intl.string(g.t.aIz1oV),
        confirmText: g.intl.string(g.t["cY+Oob"]),
        cancelText: g.intl.string(g.t["ETE/oC"]),
        confirmButtonColor: o.$n.Colors.BRAND,
        onConfirm: () => r.A.crosspostMessage(l, t),
        transitionState: h,
        onClose: S,
        children: (0, n.jsx)(i.Text, {
            variant: "text-md/normal",
            className: b.YK,
            children: C
                ? (0, n.jsx)(i.y$y, {})
                : null != f && null != f.guildsFollowing && f.guildsFollowing > 0
                  ? (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(i.Text, {
                                className: b.YK,
                                variant: "text-sm/normal",
                                children: g.intl.format(g.t.GCGrNP, { numGuildsFollowing: f.guildsFollowing }),
                            }),
                            (0, n.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: g.intl.format(g.t.IMhGZz, {
                                    onClick: () => {
                                        null != F && null != S && (S(), a.A.open(F, d.BEX.ANALYTICS));
                                    },
                                }),
                            }),
                        ],
                    })
                  : g.intl.string(g.t["8FpqOs"]),
        }),
    });
}
