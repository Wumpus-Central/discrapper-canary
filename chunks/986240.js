n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    o = n(980463),
    a = n(328908),
    s = n(992970),
    c = n(135793),
    u = n(576645),
    d = n(84040),
    f = n(626135),
    g = n(981631),
    b = n(388032);
function p(e, t) {
    let n = (0, d.Z)(t),
        p = e.hasPotions(),
        m = (0, u.Nt)(),
        O = i.useCallback(
            (n) => {
                try {
                    (0, o.qc)(t.id, e.id, n);
                } catch (e) {
                    (0, l.showToast)((0, l.createToast)(b.intl.string(b.t.xsfC2S), l.ToastType.FAILURE));
                }
            },
            [t.id, e.id],
        ),
        v = i.useCallback(() => {
            f.default.track(g.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, { location: s.MG.MessageContextMenu }),
                (0, c.s)({
                    channelId: t.id,
                    message: e,
                    onRedeem: O,
                    onClose: a.Qy,
                    source: s.YD.MessageContextMenu,
                });
        }, [t.id, e, O]);
    return n && !p && m
        ? (0, r.jsx)(l.sNh, {
              id: "add-confetti-potion",
              label: b.intl.string(b.t.icaJW5),
              icon: l.l22,
              action: v,
          })
        : null;
}
