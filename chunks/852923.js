n.d(t, { Z: () => g });
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
    h = n(930180),
    _ = n(388032),
    E = n(957991);
function p(e) {
    let t = c.Z.getVoiceChannelId();
    if (null == t) return;
    let n = a.Z.getChannel(t);
    null != n && (0, d.RK)(n, e);
}
function I(e) {
    var t, n;
    let { channelId: r } = e,
        o = null != (t = (0, h._d)(r)) ? t : 0,
        s = null != (n = (0, h.K3)(r)) ? n : 0;
    return o > 0 && s > 0
        ? (0, i.jsx)('div', {
              className: E.blocked,
              children: (0, i.jsx)('div', {
                  className: l()(E.blockedText, E.noIcon),
                  children: _.intl.string(_.t.xlJRfn)
              })
          })
        : o > 0
          ? (0, i.jsx)('div', {
                className: E.blocked,
                children: (0, i.jsx)('div', {
                    className: l()(E.blockedText, E.noIcon),
                    children: _.intl.string(_.t.WYad9f)
                })
            })
          : s > 0
            ? (0, i.jsx)('div', {
                  className: E.blocked,
                  children: (0, i.jsx)('div', {
                      className: l()(E.blockedText, E.noIcon),
                      children: _.intl.string(_.t.eHq2OD)
                  })
              })
            : null;
}
function g() {
    let e = (0, u.Z)();
    return null == e
        ? null
        : (0, i.jsxs)(s.qXd, {
              className: E.container,
              color: s.DM8.DEFAULT,
              children: [
                  (0, i.jsx)('div', { children: _.intl.string(_.t.Ul1RJS) }),
                  (0, i.jsx)(I, { channelId: e.id }),
                  (0, i.jsx)(o.zx, {
                      className: E.acceptButton,
                      size: o.zx.Sizes.MIN,
                      color: o.zx.Colors.WHITE,
                      onClick: () => p(!1),
                      children: (0, i.jsx)(s.Text, {
                          className: E.acceptText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: _.intl.string(_.t.MpO0p6)
                      })
                  }),
                  (0, i.jsx)(o.zx, {
                      className: E.declineButton,
                      look: o.zx.Looks.OUTLINED,
                      size: o.zx.Sizes.MIN,
                      color: o.zx.Colors.WHITE,
                      onClick: () => p(!0),
                      children: (0, i.jsx)(s.Text, {
                          className: E.declineText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: _.intl.string(_.t['1YDv7e'])
                      })
                  })
              ]
          });
}
