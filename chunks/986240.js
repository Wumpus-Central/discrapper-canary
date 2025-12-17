n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    o = n(980463),
    a = n(328908),
    c = n(992970),
    s = n(135793),
    u = n(576645),
    d = n(84040),
    f = n(626135),
    g = n(981631),
    b = n(388032);
function p(e, t) {
    let n = (0, d.Z)(t),
        p = e.hasPotions(),
        O = (0, u.Nt)(),
        y = i.useCallback(
            (n) => {
                try {
                    (0, o.qc)(t.id, e.id, n);
                } catch (e) {
                    (0, l.showToast)((0, l.createToast)(b.intl.string(b.t.xsfC2S), l.ToastType.FAILURE));
                }
            },
            [t.id, e.id],
        ),
        m = i.useCallback(() => {
            f.default.track(g.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, { location: c.MG.MessageContextMenu }),
                (0, s.s)({
                    channelId: t.id,
                    message: e,
                    onRedeem: y,
                    onClose: a.Qy,
                    source: c.YD.MessageContextMenu,
                });
        }, [t.id, e, y]);
    return n && !p && O
        ? (0, r.jsx)(l.sNh, {
              id: "add-confetti-potion",
              label: b.intl.string(b.t.icaJW5),
              icon: l.l22,
              action: m,
          })
        : null;
}
