n.d(t, { Z: () => p }), n(411104);
var a = n(991637),
    r = n.n(a),
    l = n(388123),
    i = n(904245),
    s = n(761080),
    o = n(957730),
    c = n(592125),
    u = n(496675),
    d = n(784384);
let m = {
        async sendForward(e, t, n) {
            let a = c.Z.getChannel(t),
                r = c.Z.getChannel(e.channel_id),
                m = (null == n ? void 0 : n.isICYMIGameContentForwarding) ? s.KF : null == r ? void 0 : r.guild_id;
            if (null == r && null == m) throw Error('Unable to find original channel for message');
            if (null == a) throw Error('Unable to find destination channel for message');
            let p = o.ZP.parse(a, ''),
                h = {
                    guild_id: m,
                    channel_id: e.channel_id,
                    message_id: e.id,
                    type: l.U.FORWARD,
                    forward_only:
                        (null == n ? void 0 : n.onlyAttachmentIds) != null || (null == n ? void 0 : n.onlyEmbedIndices) != null
                            ? {
                                  attachment_ids: n.onlyAttachmentIds,
                                  embed_indices: n.onlyEmbedIndices
                              }
                            : void 0
                };
            await i.Z.sendMessage(a.id, p, !1, {
                messageReference: h,
                eagerDispatch: !1
            }),
                (null == n ? void 0 : n.withMessage) == null || (0, d.pU)(a, u.Z) || (await i.Z.sendMessage(a.id, o.ZP.parse(a, n.withMessage), !1));
        },
        sendForwards: (e, t, n) => r()(t.map((t) => m.sendForward(e, t, n)))
    },
    p = m;
