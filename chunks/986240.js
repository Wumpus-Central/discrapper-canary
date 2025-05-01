n.d(t, { Z: () => p });
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
function p(e, t) {
    let n = (0, d.Z)(t, e),
        p = e.hasPotions(),
        b = (0, u.Nt)(),
        h = r.useCallback(
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
                    onRedeem: h,
                    onClose: o.Qy,
                    source: s.YD.MessageContextMenu
                });
        }, [t.id, e, h]);
    return n && !p && b
        ? (0, i.jsx)(l.sNh, {
              id: 'add-confetti-potion',
              label: m.intl.string(m.t.icaJW1),
              icon: l.l22,
              action: O
          })
        : null;
}
