n.d(t, { Z: () => g });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    s = n(980463),
    r = n(328908),
    o = n(135793),
    d = n(111810),
    c = n(84040),
    u = n(388032);
function g(e, t) {
    let n = (0, c.Z)(t, e),
        g = e.hasPotions(),
        f = (0, d.V1)('Message Context Menu'),
        m = l.useCallback(
            (n) => {
                try {
                    (0, s.qc)(t.id, e.id, n);
                } catch {
                    (0, a.showToast)((0, a.createToast)(u.intl.string(u.t.xsfC2d), a.ToastType.FAILURE));
                }
            },
            [t.id, e.id]
        );
    return n && !g && f
        ? (0, i.jsx)(a.sNh, {
              id: 'add-confetti-potion',
              label: u.intl.string(u.t.icaJW1),
              icon: a.l22,
              action: () =>
                  (0, o.s)({
                      channelId: t.id,
                      message: e,
                      onRedeem: m,
                      onClose: r.Qy
                  })
          })
        : null;
}
