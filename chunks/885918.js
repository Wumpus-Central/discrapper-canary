n.d(t, { A: () => f });
var i = n(975975),
    r = n.n(i),
    a = n(762230),
    s = n(665260),
    l = n(148494),
    o = n(596720),
    d = n(451909),
    c = n(677413),
    u = n(734057),
    _ = n(576705),
    E = n(513480),
    A = n(652215),
    h = n(381941);
let I = {
        async sendForward(e, t, n) {
            let i = u.A.getChannel(t),
                r = u.A.getChannel(e.channel_id),
                I = n?.isICYMIGameContentForwarding ? o.VL : r?.guild_id;
            if (null == r && null == I) throw Error("Unable to find original channel for message");
            if (null == i) throw Error("Unable to find destination channel for message");
            let f = d.Ay.parse(i, ""),
                p = {
                    guild_id: I,
                    channel_id: e.channel_id,
                    message_id: e.id,
                    type: a.S.FORWARD,
                    forward_only:
                        n?.onlyAttachmentIds != null || n?.onlyEmbedIndices != null
                            ? { attachment_ids: n.onlyAttachmentIds, embed_indices: n.onlyEmbedIndices }
                            : void 0,
                },
                T = 0,
                m = n?.withMessage;
            if (null != m) {
                let [e, t] = (0, c.Ay)(m);
                e && ((m = t), (T = (0, s.UI)(T, A.pr7.SUPPRESS_NOTIFICATIONS)));
            }
            await l.A.sendMessage(i.id, f, !1, {
                messageReference: p,
                location: h.Hx.FORWARDING,
                eagerDispatch: !1,
                flags: T,
            }),
                null == m ||
                    "" === m ||
                    (0, E.lP)(i, _.A) ||
                    (await l.A.sendMessage(i.id, d.Ay.parse(i, m), !1, { location: h.Hx.FORWARDING, flags: T }));
        },
        sendForwards: (e, t, n) => r()(t.map((t) => I.sendForward(e, t, n))),
    },
    f = I;
