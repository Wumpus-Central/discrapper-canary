n.d(t, { A: () => _ }), n(65821);
var r = n(975975),
    i = n.n(r),
    a = n(762230),
    s = n(843472),
    o = n(596720),
    l = n(451909),
    c = n(734057),
    u = n(576705),
    d = n(513480),
    f = n(381941);
let p = {
        async sendForward(e, t, n) {
            let r = c.A.getChannel(t),
                i = c.A.getChannel(e.channel_id),
                p = (null == n ? void 0 : n.isICYMIGameContentForwarding) ? o.VL : null == i ? void 0 : i.guild_id;
            if (null == i && null == p) throw Error("Unable to find original channel for message");
            if (null == r) throw Error("Unable to find destination channel for message");
            let _ = l.Ay.parse(r, ""),
                h = {
                    guild_id: p,
                    channel_id: e.channel_id,
                    message_id: e.id,
                    type: a.S.FORWARD,
                    forward_only:
                        (null == n ? void 0 : n.onlyAttachmentIds) != null ||
                        (null == n ? void 0 : n.onlyEmbedIndices) != null
                            ? {
                                  attachment_ids: n.onlyAttachmentIds,
                                  embed_indices: n.onlyEmbedIndices,
                              }
                            : void 0,
                };
            await s.A.sendMessage(r.id, _, !1, {
                messageReference: h,
                location: f.Hx.FORWARDING,
                eagerDispatch: !1,
            }),
                (null == n ? void 0 : n.withMessage) == null ||
                    (0, d.lP)(r, u.A) ||
                    (await s.A.sendMessage(r.id, l.Ay.parse(r, n.withMessage), !1, { location: f.Hx.FORWARDING }));
        },
        sendForwards: (e, t, n) => i()(t.map((t) => p.sendForward(e, t, n))),
    },
    _ = p;
