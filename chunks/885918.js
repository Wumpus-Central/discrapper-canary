"use strict";
n.d(t, { A: () => p });
var r = n(975975),
    i = n.n(r),
    a = n(762230),
    s = n(843472),
    o = n(596720),
    l = n(451909),
    u = n(734057),
    c = n(576705),
    d = n(513480),
    _ = n(381941);
let f = {
        async sendForward(e, t, n) {
            let r = u.A.getChannel(t),
                i = u.A.getChannel(e.channel_id),
                f = n?.isICYMIGameContentForwarding ? o.VL : i?.guild_id;
            if (null == i && null == f) throw Error("Unable to find original channel for message");
            if (null == r) throw Error("Unable to find destination channel for message");
            let p = l.Ay.parse(r, ""),
                h = {
                    guild_id: f,
                    channel_id: e.channel_id,
                    message_id: e.id,
                    type: a.S.FORWARD,
                    forward_only:
                        n?.onlyAttachmentIds != null || n?.onlyEmbedIndices != null
                            ? { attachment_ids: n.onlyAttachmentIds, embed_indices: n.onlyEmbedIndices }
                            : void 0,
                };
            await s.A.sendMessage(r.id, p, !1, { messageReference: h, location: _.Hx.FORWARDING, eagerDispatch: !1 }),
                n?.withMessage == null ||
                    (0, d.lP)(r, c.A) ||
                    (await s.A.sendMessage(r.id, l.Ay.parse(r, n.withMessage), !1, { location: _.Hx.FORWARDING }));
        },
        sendForwards: (e, t, n) => i()(t.map((t) => f.sendForward(e, t, n))),
    },
    p = f;
