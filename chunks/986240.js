n.d(t, { Z: () => b });
var i = n(200651),
    r = n(192379),
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
        h = (0, u.Nt)(),
        p = r.useCallback(
            (n) => {
                try {
                    (0, a.qc)(t.id, e.id, n);
                } catch (e) {
                    (0, l.showToast)((0, l.createToast)(m.intl.string(m.t.xsfC2d), l.ToastType.FAILURE));
                }
            },
            [t.id, e.id]
        ),
        O = r.useCallback(() => {
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
        ? (0, i.jsx)(l.sNh, {
              id: 'add-confetti-potion',
              label: m.intl.string(m.t.icaJW1),
              icon: l.l22,
              action: O
          })
        : null;
}
