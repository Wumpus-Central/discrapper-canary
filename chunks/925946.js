"use strict";
n.d(t, { A: () => h });
var r = n(64700),
    i = n(397927),
    s = n(308528),
    a = n(843472),
    o = n(432222),
    l = n(976860),
    u = n(734057),
    c = n(954571),
    d = n(652215),
    _ = n(381941),
    f = n(901123),
    p = n(985018);
function h(e, t) {
    let [n, h] = r.useState(!1);
    return r.useCallback(async () => {
        let r = await s.A.openPrivateChannel({ recipientIds: e, location: t }),
            m = u.A.getChannel(r);
        if (null == m) throw Error("Failed to open private channel");
        if (!n) {
            h(!0), (0, l.pX)(d.BVt.CHANNEL(f.ME, m.id));
            try {
                await a.A.sendStickers(m.id, [o.w], "", { location: _.Hx.SEND_WAVE });
            } catch (e) {
                e.ok ||
                    429 !== e.status ||
                    (0, i.showToast)((0, i.createToast)(p.intl.string(p.t.Whhv4w), i.ToastType.FAILURE));
            }
            c.default.track(d.HAw.WAVE_CTA_CLICKED, { source: t }), h(!1);
        }
    }, [t, n, e]);
}
