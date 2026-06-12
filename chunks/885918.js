"use strict";
n.d(t, { A: () => f });
var i = n(975975),
    r = n.n(i),
    s = n(762230),
    a = n(720149),
    o = n(596720),
    l = n(451909),
    u = n(734057),
    c = n(576705),
    d = n(513480),
    _ = n(381941);
let h = {
        async sendForward(e, t, n) {
            let i = u.A.getChannel(t),
                r = u.A.getChannel(e.channel_id),
                h = n?.isICYMIGameContentForwarding ? o.VL : r?.guild_id;
            if (null == r && null == h) throw Error("Unable to find original channel for message");
            if (null == i) throw Error("Unable to find destination channel for message");
            let f = l.Ay.parse(i, ""),
                p = {
                    guild_id: h,
                    channel_id: e.channel_id,
                    message_id: e.id,
                    type: s.S.FORWARD,
                    forward_only:
                        n?.onlyAttachmentIds != null || n?.onlyEmbedIndices != null
                            ? { attachment_ids: n.onlyAttachmentIds, embed_indices: n.onlyEmbedIndices }
                            : void 0,
                };
            await a.A.sendMessage(i.id, f, !1, { messageReference: p, location: _.Hx.FORWARDING, eagerDispatch: !1 }),
                n?.withMessage == null ||
                    (0, d.lP)(i, c.A) ||
                    (await a.A.sendMessage(i.id, l.Ay.parse(i, n.withMessage), !1, { location: _.Hx.FORWARDING }));
        },
        sendForwards: (e, t, n) => r()(t.map((t) => h.sendForward(e, t, n))),
    },
    f = h;
