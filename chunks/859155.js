n.d(t, { Z: () => _ }), n(415506);
var l = n(991637),
    r = n.n(l),
    i = n(388123),
    a = n(904245),
    s = n(797394),
    o = n(957730),
    c = n(592125),
    u = n(496675),
    d = n(784384),
    f = n(959517);
let h = {
        async sendForward(e, t, n) {
            let l = c.Z.getChannel(t),
                r = c.Z.getChannel(e.channel_id),
                h = (null == n ? void 0 : n.isICYMIGameContentForwarding) ? s.KF : null == r ? void 0 : r.guild_id;
            if (null == r && null == h) throw Error("Unable to find original channel for message");
            if (null == l) throw Error("Unable to find destination channel for message");
            let _ = o.ZP.parse(l, ""),
                g = {
                    guild_id: h,
                    channel_id: e.channel_id,
                    message_id: e.id,
                    type: i.U.FORWARD,
                    forward_only:
                        (null == n ? void 0 : n.onlyAttachmentIds) != null ||
                        (null == n ? void 0 : n.onlyEmbedIndices) != null
                            ? {
                                  attachment_ids: n.onlyAttachmentIds,
                                  embed_indices: n.onlyEmbedIndices,
                              }
                            : void 0,
                };
            await a.Z.sendMessage(l.id, _, !1, {
                messageReference: g,
                location: f.dy.FORWARDING,
                eagerDispatch: !1,
            }),
                (null == n ? void 0 : n.withMessage) == null ||
                    (0, d.pU)(l, u.Z) ||
                    (await a.Z.sendMessage(l.id, o.ZP.parse(l, n.withMessage), !1, { location: f.dy.FORWARDING }));
        },
        sendForwards: (e, t, n) => r()(t.map((t) => h.sendForward(e, t, n))),
    },
    _ = h;
