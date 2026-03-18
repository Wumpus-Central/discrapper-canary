"use strict";
n.d(t, { A: () => m });
var r = n(64700),
    i = n(308528),
    s = n(843472),
    a = n(56562),
    o = n(432222),
    l = n(976860),
    u = n(734057),
    c = n(320501),
    d = n(954571),
    _ = n(652215),
    f = n(381941),
    p = n(901123),
    h = n(985018);
function m(e, t) {
    let n = r.useRef(!1);
    return r.useCallback(
        async (r, m) => {
            try {
                if (n.current) return;
                n.current = !0;
                let h = await i.A.openPrivateChannel({ recipientIds: e, location: t, navigateToChannel: !1 }),
                    m = u.A.getChannel(h);
                if (null == m) throw Error("Failed to open private channel");
                d.default.track(_.HAw.WAVE_CTA_CLICKED, { source: t }),
                    await s.A.sendStickers(m.id, [o.w], "", { location: f.Hx.SEND_WAVE }),
                    r?.(),
                    (0, l.pX)(_.BVt.CHANNEL(p.ME, m.id)),
                    s.A.jumpToMessage({
                        channelId: m.id,
                        messageId: c.A.getLastMessage(m.id)?.id ?? "",
                        jumpType: a.US.INSTANT,
                    });
            } catch (e) {
                m(h.intl.string(h.t.Q97Gke));
            } finally {
                n.current = !1;
            }
        },
        [t, e],
    );
}
