"use strict";
n.d(t, { A: () => m });
var i = n(975975),
    r = n.n(i),
    s = n(762230),
    a = n(665260),
    o = n(493336),
    l = n(596720),
    u = n(451909),
    c = n(677413),
    d = n(734057),
    _ = n(576705),
    h = n(513480),
    f = n(652215),
    p = n(381941);
let E = {
        async sendForward(e, t, n) {
            let i = d.A.getChannel(t),
                r = d.A.getChannel(e.channel_id),
                E = n?.isICYMIGameContentForwarding ? l.VL : r?.guild_id;
            if (null == r && null == E) throw Error("Unable to find original channel for message");
            if (null == i) throw Error("Unable to find destination channel for message");
            let m = u.Ay.parse(i, ""),
                g = {
                    guild_id: E,
                    channel_id: e.channel_id,
                    message_id: e.id,
                    type: s.S.FORWARD,
                    forward_only:
                        n?.onlyAttachmentIds != null || n?.onlyEmbedIndices != null
                            ? { attachment_ids: n.onlyAttachmentIds, embed_indices: n.onlyEmbedIndices }
                            : void 0,
                },
                A = 0,
                I = n?.withMessage;
            if (null != I) {
                let [e, t] = (0, c.A)(I);
                e && ((I = t), (A = (0, a.UI)(A, f.pr7.SUPPRESS_NOTIFICATIONS)));
            }
            await o.A.sendMessage(i.id, m, !1, {
                messageReference: g,
                location: p.Hx.FORWARDING,
                eagerDispatch: !1,
                flags: A,
            }),
                null == I ||
                    "" === I ||
                    (0, h.lP)(i, _.A) ||
                    (await o.A.sendMessage(i.id, u.Ay.parse(i, I), !1, { location: p.Hx.FORWARDING, flags: A }));
        },
        sendForwards: (e, t, n) => r()(t.map((t) => E.sendForward(e, t, n))),
    },
    m = E;
