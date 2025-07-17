n.d(t, { Z: () => C });
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    o = n(755721),
    s = n(481060),
    a = n(592125),
    c = n(944486),
    u = n(471253),
    d = n(623633),
    _ = n(930180),
    h = n(388032),
    E = n(957991);
function I(e) {
    let t = c.Z.getVoiceChannelId();
    if (null == t) return;
    let n = a.Z.getChannel(t);
    null != n && (0, u.RK)(n, e);
}
function p(e) {
    var t, n;
    let { channelId: r } = e,
        o = null != (t = (0, _._d)(r)) ? t : 0,
        s = null != (n = (0, _.K3)(r)) ? n : 0;
    return o > 0 && s > 0
        ? (0, i.jsx)('div', {
              className: E.blocked,
              children: (0, i.jsx)('div', {
                  className: l()(E.blockedText, E.noIcon),
                  children: h.intl.string(h.t.xlJRfn)
              })
          })
        : o > 0
          ? (0, i.jsx)('div', {
                className: E.blocked,
                children: (0, i.jsx)('div', {
                    className: l()(E.blockedText, E.noIcon),
                    children: h.intl.string(h.t.WYad9f)
                })
            })
          : s > 0
            ? (0, i.jsx)('div', {
                  className: E.blocked,
                  children: (0, i.jsx)('div', {
                      className: l()(E.blockedText, E.noIcon),
                      children: h.intl.string(h.t.eHq2OD)
                  })
              })
            : null;
}
function C() {
    let e = (0, d.Z)();
    return null == e
        ? null
        : (0, i.jsxs)(s.qXd, {
              className: E.container,
              color: s.DM8.DEFAULT,
              children: [
                  (0, i.jsx)('div', { children: h.intl.string(h.t.Ul1RJS) }),
                  (0, i.jsx)(p, { channelId: e.id }),
                  (0, i.jsx)(o.zx, {
                      className: E.acceptButton,
                      size: o.zx.Sizes.MIN,
                      color: o.zx.Colors.WHITE,
                      onClick: () => I(!1),
                      children: (0, i.jsx)(s.Text, {
                          className: E.acceptText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: h.intl.string(h.t.MpO0p6)
                      })
                  }),
                  (0, i.jsx)(o.zx, {
                      className: E.declineButton,
                      look: o.zx.Looks.OUTLINED,
                      size: o.zx.Sizes.MIN,
                      color: o.zx.Colors.WHITE,
                      onClick: () => I(!0),
                      children: (0, i.jsx)(s.Text, {
                          className: E.declineText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: h.intl.string(h.t['1YDv7e'])
                      })
                  })
              ]
          });
}
