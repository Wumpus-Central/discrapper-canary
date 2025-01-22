t.d(n, {
    Z: function () {
        return f;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(481060),
    a = t(980463),
    o = t(328908),
    s = t(135793),
    u = t(111810),
    d = t(84040),
    c = t(388032);
function f(e, n) {
    let t = (0, d.Z)(n, e),
        f = e.hasPotions(),
        g = (0, u.V1)('Message Context Menu'),
        m = l.useCallback(
            (t) => {
                try {
                    (0, a.qc)(n.id, e.id, t);
                } catch {
                    (0, r.showToast)((0, r.createToast)(c.intl.string(c.t.xsfC2d), r.ToastType.FAILURE));
                }
            },
            [n.id, e.id]
        );
    return t && !f && g
        ? (0, i.jsx)(r.MenuItem, {
              id: 'add-confetti-potion',
              label: c.intl.string(c.t.icaJW1),
              icon: r.ExperimentalConfettiIcon,
              action: () =>
                  (0, s.openMessageConfettiModal)({
                      channelId: n.id,
                      message: e,
                      onRedeem: m,
                      onClose: o.Qy
                  })
          })
        : null;
}
