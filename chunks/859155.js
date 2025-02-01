n.d(t, { Z: () => h }), n(411104);
var l = n(991637),
    i = n.n(l),
    a = n(388123),
    s = n(904245),
    r = n(761080),
    o = n(957730),
    c = n(592125),
    u = n(496675),
    d = n(784384);
let _ = {
        async sendForward(e, t, n) {
            let l = c.Z.getChannel(t),
                i = c.Z.getChannel(e.channel_id),
                _ = (null == n ? void 0 : n.isICYMIGameContentForwarding) ? r.KF : null == i ? void 0 : i.guild_id;
            if (null == i && null == _) throw Error('Unable to find original channel for message');
            if (null == l) throw Error('Unable to find destination channel for message');
            let h = o.ZP.parse(l, ''),
                f = {
                    guild_id: _,
                    channel_id: e.channel_id,
                    message_id: e.id,
                    type: a.U.FORWARD,
                    forward_only:
                        (null == n ? void 0 : n.onlyAttachmentIds) != null || (null == n ? void 0 : n.onlyEmbedIndices) != null
                            ? {
                                  attachment_ids: n.onlyAttachmentIds,
                                  embed_indices: n.onlyEmbedIndices
                              }
                            : void 0
                };
            await s.Z.sendMessage(l.id, h, !1, {
                messageReference: f,
                eagerDispatch: !1
            }),
                (null == n ? void 0 : n.withMessage) == null || (0, d.pU)(l, u.Z) || (await s.Z.sendMessage(l.id, o.ZP.parse(l, n.withMessage), !1));
        },
        sendForwards: (e, t, n) => i()(t.map((t) => _.sendForward(e, t, n)))
    },
    h = _;
