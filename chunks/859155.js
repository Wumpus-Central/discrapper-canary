n.d(t, { Z: () => _ }), n(415506);
var r = n(991637),
    i = n.n(r),
    a = n(388123),
    o = n(904245),
    s = n(797394),
    l = n(957730),
    c = n(592125),
    u = n(496675),
    d = n(784384),
    f = n(959517);
let p = {
        async sendForward(e, t, n) {
            let r = c.Z.getChannel(t),
                i = c.Z.getChannel(e.channel_id),
                p = (null == n ? void 0 : n.isICYMIGameContentForwarding) ? s.KF : null == i ? void 0 : i.guild_id;
            if (null == i && null == p) throw Error("Unable to find original channel for message");
            if (null == r) throw Error("Unable to find destination channel for message");
            let _ = l.ZP.parse(r, ""),
                m = {
                    guild_id: p,
                    channel_id: e.channel_id,
                    message_id: e.id,
                    type: a.U.FORWARD,
                    forward_only:
                        (null == n ? void 0 : n.onlyAttachmentIds) != null ||
                        (null == n ? void 0 : n.onlyEmbedIndices) != null
                            ? {
                                  attachment_ids: n.onlyAttachmentIds,
                                  embed_indices: n.onlyEmbedIndices,
                              }
                            : void 0,
                };
            await o.Z.sendMessage(r.id, _, !1, {
                messageReference: m,
                location: f.dy.FORWARDING,
                eagerDispatch: !1,
            }),
                (null == n ? void 0 : n.withMessage) == null ||
                    (0, d.pU)(r, u.Z) ||
                    (await o.Z.sendMessage(r.id, l.ZP.parse(r, n.withMessage), !1, { location: f.dy.FORWARDING }));
        },
        sendForwards: (e, t, n) => i()(t.map((t) => p.sendForward(e, t, n))),
    },
    _ = p;
