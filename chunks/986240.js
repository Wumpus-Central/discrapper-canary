n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(980463),
    o = n(328908),
    s = n(992970),
    c = n(135793),
    u = n(576645),
    d = n(84040),
    f = n(626135),
    g = n(981631),
    m = n(388032);
function b(e, t) {
    let n = (0, d.Z)(t, e),
        b = e.hasPotions(),
        p = (0, u.Nt)(),
        h = i.useCallback(
            (n) => {
                try {
                    (0, a.qc)(t.id, e.id, n);
                } catch (e) {
                    (0, l.showToast)((0, l.createToast)(m.NW.string(m.t.xsfC2d), l.ToastType.FAILURE));
                }
            },
            [t.id, e.id]
        ),
        y = i.useCallback(() => {
            f.default.track(g.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, { location: s.MG.MessageContextMenu }),
                (0, c.s)({
                    channelId: t.id,
                    message: e,
                    onRedeem: h,
                    onClose: o.Qy,
                    source: s.YD.MessageContextMenu
                });
        }, [t.id, e, h]);
    return n && !b && p
        ? (0, r.jsx)(l.sNh, {
              id: 'add-confetti-potion',
              label: m.NW.string(m.t.icaJW1),
              icon: l.l22,
              action: y
          })
        : null;
}
