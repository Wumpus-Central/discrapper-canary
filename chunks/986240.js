n.d(t, { Z: () => h });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    s = n(980463),
    r = n(328908),
    o = n(992970),
    d = n(135793),
    c = n(111810),
    u = n(84040),
    g = n(626135),
    f = n(981631),
    m = n(388032);
function h(e, t) {
    let n = (0, u.Z)(t, e),
        h = e.hasPotions(),
        E = (0, c.V1)('Message Context Menu'),
        v = l.useCallback(
            (n) => {
                try {
                    (0, s.qc)(t.id, e.id, n);
                } catch {
                    (0, a.showToast)((0, a.createToast)(m.intl.string(m.t.xsfC2d), a.ToastType.FAILURE));
                }
            },
            [t.id, e.id]
        ),
        Z = l.useCallback(() => {
            g.default.track(f.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, { location: o.MG.MessageContextMenu }),
                (0, d.s)({
                    channelId: t.id,
                    message: e,
                    onRedeem: v,
                    onClose: r.Qy,
                    source: o.YD.MessageContextMenu
                });
        }, [t.id, e, v]);
    return n && !h && E
        ? (0, i.jsx)(a.sNh, {
              id: 'add-confetti-potion',
              label: m.intl.string(m.t.icaJW1),
              icon: a.l22,
              action: Z
          })
        : null;
}
