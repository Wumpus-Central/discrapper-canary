n.d(t, { Z: () => g }), n(415506);
var l = n(991637),
    a = n.n(l),
    r = n(388123),
    i = n(904245),
    s = n(797394),
    o = n(957730),
    u = n(592125),
    c = n(496675),
    d = n(784384),
    h = n(959517);
let m = {
        async sendForward(e, t, n) {
            let l = u.Z.getChannel(t),
                a = u.Z.getChannel(e.channel_id),
                m = (null == n ? void 0 : n.isICYMIGameContentForwarding) ? s.KF : null == a ? void 0 : a.guild_id;
            if (null == a && null == m) throw Error("Unable to find original channel for message");
            if (null == l) throw Error("Unable to find destination channel for message");
            let g = o.ZP.parse(l, ""),
                f = {
                    guild_id: m,
                    channel_id: e.channel_id,
                    message_id: e.id,
                    type: r.U.FORWARD,
                    forward_only:
                        (null == n ? void 0 : n.onlyAttachmentIds) != null ||
                        (null == n ? void 0 : n.onlyEmbedIndices) != null
                            ? {
                                  attachment_ids: n.onlyAttachmentIds,
                                  embed_indices: n.onlyEmbedIndices,
                              }
                            : void 0,
                };
            await i.Z.sendMessage(l.id, g, !1, {
                messageReference: f,
                location: h.dy.FORWARDING,
                eagerDispatch: !1,
            }),
                (null == n ? void 0 : n.withMessage) == null ||
                    (0, d.pU)(l, c.Z) ||
                    (await i.Z.sendMessage(l.id, o.ZP.parse(l, n.withMessage), !1, { location: h.dy.FORWARDING }));
        },
        sendForwards: (e, t, n) => a()(t.map((t) => m.sendForward(e, t, n))),
    },
    g = m;
