t.d(s, { default: () => F });
var l = t(627968);
t(64700);
var n = t(732159),
    i = t(417597),
    o = t(834730),
    a = t(289873),
    r = t(843472),
    c = t(997509),
    u = t(734057),
    d = t(258671),
    g = t(652215),
    _ = t(985018),
    h = t(893727);
function F(e) {
    let { channelId: s, messageId: t, transitionState: F, onClose: S } = e,
        m = (0, i.bG)([u.A], () => u.A.getChannel(s)),
        [C, b] = (0, d.A)(s),
        f = m?.guild_id;
    return (0, l.jsx)(n.ConfirmModal, {
        title: _.intl.string(_.t.aIz1oV),
        confirmText: _.intl.string(_.t["cY+Oob"]),
        onConfirm: () => r.A.crosspostMessage(s, t),
        transitionState: F,
        onClose: S,
        variant: "primary",
        children: (0, l.jsx)(o.E, {
            variant: "text-md/normal",
            className: h.YK,
            children: b
                ? (0, l.jsx)(a.y, {})
                : null != C && null != C.guildsFollowing && C.guildsFollowing > 0
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(o.E, {
                                className: h.YK,
                                variant: "text-sm/normal",
                                children: _.intl.format(_.t.GCGrNP, { numGuildsFollowing: C.guildsFollowing }),
                            }),
                            (0, l.jsx)(o.E, {
                                variant: "text-sm/normal",
                                children: _.intl.format(_.t.IMhGZz, {
                                    onClick: () => {
                                        null != f && null != S && (S(), c.A.open(f, g.BEX.ANALYTICS));
                                    },
                                }),
                            }),
                        ],
                    })
                  : _.intl.string(_.t["8FpqOs"]),
        }),
    });
}
