n.d(t, { Z: () => _ }), n(411104);
var a = n(991637),
    l = n.n(a),
    i = n(388123),
    s = n(904245),
    r = n(761080),
    o = n(957730),
    c = n(592125),
    d = n(496675),
    u = n(784384);
let m = {
        async sendForward(e, t, n) {
            let a = c.Z.getChannel(t),
                l = c.Z.getChannel(e.channel_id),
                m = (null == n ? void 0 : n.isICYMIGameContentForwarding) ? r.KF : null == l ? void 0 : l.guild_id;
            if (null == l && null == m) throw Error('Unable to find original channel for message');
            if (null == a) throw Error('Unable to find destination channel for message');
            let _ = o.ZP.parse(a, ''),
                h = {
                    guild_id: m,
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
            await s.Z.sendMessage(a.id, _, !1, {
                messageReference: h,
                eagerDispatch: !1
            }),
                (null == n ? void 0 : n.withMessage) == null || (0, u.pU)(a, d.Z) || (await s.Z.sendMessage(a.id, o.ZP.parse(a, n.withMessage), !1));
        },
        sendForwards: (e, t, n) => l()(t.map((t) => m.sendForward(e, t, n)))
    },
    _ = m;
