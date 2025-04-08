n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    a = n(481060),
    l = n(980463),
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
        h = (0, u.Nt)(),
        p = i.useCallback(
            (n) => {
                try {
                    (0, l.qc)(t.id, e.id, n);
                } catch (e) {
                    (0, a.showToast)((0, a.createToast)(m.NW.string(m.t.xsfC2d), a.ToastType.FAILURE));
                }
            },
            [t.id, e.id]
        ),
        O = i.useCallback(() => {
            f.default.track(g.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, { location: s.MG.MessageContextMenu }),
                (0, c.s)({
                    channelId: t.id,
                    message: e,
                    onRedeem: p,
                    onClose: o.Qy,
                    source: s.YD.MessageContextMenu
                });
        }, [t.id, e, p]);
    return n && !b && h
        ? (0, r.jsx)(a.sNh, {
              id: 'add-confetti-potion',
              label: m.NW.string(m.t.icaJW1),
              icon: a.l22,
              action: O
          })
        : null;
}
