"use strict";
n.d(t, { A: () => E });
var r = n(64700),
    i = n(397927),
    s = n(308528),
    a = n(843472),
    o = n(56562),
    l = n(432222),
    u = n(976860),
    c = n(734057),
    d = n(320501),
    _ = n(954571),
    f = n(652215),
    p = n(381941),
    h = n(901123),
    m = n(985018);
function E(e, t) {
    let [n, E] = r.useState(!1);
    return r.useCallback(async () => {
        let r = await s.A.openPrivateChannel({ recipientIds: e, location: t }),
            g = c.A.getChannel(r);
        if (null == g) throw Error("Failed to open private channel");
        if (!n) {
            E(!0), (0, u.pX)(f.BVt.CHANNEL(h.ME, g.id));
            try {
                await a.A.sendStickers(g.id, [l.w], "", { location: p.Hx.SEND_WAVE }),
                    a.A.jumpToMessage({
                        channelId: g.id,
                        messageId: d.A.getLastMessage(g.id)?.id ?? "",
                        jumpType: o.US.INSTANT,
                    });
            } catch (e) {
                e.ok ||
                    429 !== e.status ||
                    (0, i.showToast)((0, i.createToast)(m.intl.string(m.t.Whhv4w), i.ToastType.FAILURE));
            }
            _.default.track(f.HAw.WAVE_CTA_CLICKED, { source: t }), E(!1);
        }
    }, [t, n, e]);
}
