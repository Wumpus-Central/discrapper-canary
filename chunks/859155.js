n.d(t, { Z: () => h }), n(415506);
var l = n(991637),
    r = n.n(l),
    i = n(388123),
    a = n(904245),
    s = n(761080),
    o = n(957730),
    c = n(592125),
    u = n(496675),
    d = n(784384);
let f = {
        async sendForward(e, t, n) {
            let l = c.Z.getChannel(t),
                r = c.Z.getChannel(e.channel_id),
                f = (null == n ? void 0 : n.isICYMIGameContentForwarding) ? s.KF : null == r ? void 0 : r.guild_id;
            if (null == r && null == f) throw Error('Unable to find original channel for message');
            if (null == l) throw Error('Unable to find destination channel for message');
            let h = o.ZP.parse(l, ''),
                _ = {
                    guild_id: f,
                    channel_id: e.channel_id,
                    message_id: e.id,
                    type: i.U.FORWARD,
                    forward_only:
                        (null == n ? void 0 : n.onlyAttachmentIds) != null || (null == n ? void 0 : n.onlyEmbedIndices) != null
                            ? {
                                  attachment_ids: n.onlyAttachmentIds,
                                  embed_indices: n.onlyEmbedIndices
                              }
                            : void 0
                };
            await a.Z.sendMessage(l.id, h, !1, {
                messageReference: _,
                eagerDispatch: !1
            }),
                (null == n ? void 0 : n.withMessage) == null || (0, d.pU)(l, u.Z) || (await a.Z.sendMessage(l.id, o.ZP.parse(l, n.withMessage), !1));
        },
        sendForwards: (e, t, n) => r()(t.map((t) => f.sendForward(e, t, n)))
    },
    h = f;
