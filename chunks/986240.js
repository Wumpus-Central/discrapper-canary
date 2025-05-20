n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(980463),
    o = n(328908),
    s = n(992970),
    c = n(135793),
    u = n(576645),
    d = n(84040),
    f = n(626135),
    g = n(981631),
    b = n(388032);
function p(e, t) {
    let n = (0, d.Z)(t, e),
        p = e.hasPotions(),
        O = (0, u.Nt)(),
        m = i.useCallback(
            (n) => {
                try {
                    (0, a.qc)(t.id, e.id, n);
                } catch (e) {
                    (0, l.showToast)((0, l.createToast)(b.intl.string(b.t.xsfC2d), l.ToastType.FAILURE));
                }
            },
            [t.id, e.id]
        ),
        h = i.useCallback(() => {
            f.default.track(g.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, { location: s.MG.MessageContextMenu }),
                (0, c.s)({
                    channelId: t.id,
                    message: e,
                    onRedeem: m,
                    onClose: o.Qy,
                    source: s.YD.MessageContextMenu
                });
        }, [t.id, e, m]);
    return n && !p && O
        ? (0, r.jsx)(l.sNh, {
              id: 'add-confetti-potion',
              label: b.intl.string(b.t.icaJW1),
              icon: l.l22,
              action: h
          })
        : null;
}
