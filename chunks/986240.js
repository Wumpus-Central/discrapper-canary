n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(980463),
    s = n(328908),
    l = n(992970),
    c = n(135793),
    u = n(576645),
    d = n(84040),
    f = n(626135),
    _ = n(981631),
    p = n(388032);
function h(e, t) {
    let n = (0, d.Z)(t),
        h = e.hasPotions(),
        m = (0, u.Nt)(),
        g = i.useCallback(
            (n) => {
                try {
                    (0, a.qc)(t.id, e.id, n);
                } catch (e) {
                    (0, o.showToast)((0, o.createToast)(p.intl.string(p.t.xsfC2d), o.ToastType.FAILURE));
                }
            },
            [t.id, e.id],
        ),
        E = i.useCallback(() => {
            f.default.track(_.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, { location: l.MG.MessageContextMenu }),
                (0, c.s)({
                    channelId: t.id,
                    message: e,
                    onRedeem: g,
                    onClose: s.Qy,
                    source: l.YD.MessageContextMenu,
                });
        }, [t.id, e, g]);
    return n && !h && m
        ? (0, r.jsx)(o.sNh, {
              id: "add-confetti-potion",
              label: p.intl.string(p.t.icaJW1),
              icon: o.l22,
              action: E,
          })
        : null;
}
