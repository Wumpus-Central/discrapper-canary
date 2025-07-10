n.d(t, { Z: () => C });
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    o = n(755721),
    s = n(481060),
    a = n(592125),
    c = n(944486),
    d = n(471253),
    u = n(623633),
    _ = n(930180),
    E = n(388032),
    h = n(957991);
function I(e) {
    let t = c.Z.getVoiceChannelId();
    if (null == t) return;
    let n = a.Z.getChannel(t);
    null != n && (0, d.RK)(n, e);
}
function p(e) {
    var t, n;
    let { channelId: r } = e,
        o = null != (t = (0, _._d)(r)) ? t : 0,
        s = null != (n = (0, _.K3)(r)) ? n : 0;
    return o > 0 && s > 0
        ? (0, i.jsx)('div', {
              className: h.blocked,
              children: (0, i.jsx)('div', {
                  className: l()(h.blockedText, h.noIcon),
                  children: E.intl.string(E.t.xlJRfn)
              })
          })
        : o > 0
          ? (0, i.jsx)('div', {
                className: h.blocked,
                children: (0, i.jsx)('div', {
                    className: l()(h.blockedText, h.noIcon),
                    children: E.intl.string(E.t.WYad9f)
                })
            })
          : s > 0
            ? (0, i.jsx)('div', {
                  className: h.blocked,
                  children: (0, i.jsx)('div', {
                      className: l()(h.blockedText, h.noIcon),
                      children: E.intl.string(E.t.eHq2OD)
                  })
              })
            : null;
}
function C() {
    let e = (0, u.Z)();
    return null == e
        ? null
        : (0, i.jsxs)(s.qXd, {
              className: h.container,
              color: s.DM8.DEFAULT,
              children: [
                  (0, i.jsx)('div', { children: E.intl.string(E.t.Ul1RJS) }),
                  (0, i.jsx)(p, { channelId: e.id }),
                  (0, i.jsx)(o.zx, {
                      className: h.acceptButton,
                      size: o.zx.Sizes.MIN,
                      color: o.zx.Colors.WHITE,
                      onClick: () => I(!1),
                      children: (0, i.jsx)(s.Text, {
                          className: h.acceptText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: E.intl.string(E.t.MpO0p6)
                      })
                  }),
                  (0, i.jsx)(o.zx, {
                      className: h.declineButton,
                      look: o.zx.Looks.OUTLINED,
                      size: o.zx.Sizes.MIN,
                      color: o.zx.Colors.WHITE,
                      onClick: () => I(!0),
                      children: (0, i.jsx)(s.Text, {
                          className: h.declineText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: E.intl.string(E.t['1YDv7e'])
                      })
                  })
              ]
          });
}
