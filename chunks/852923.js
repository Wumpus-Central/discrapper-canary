n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(592125),
    c = n(944486),
    u = n(471253),
    d = n(623633),
    f = n(930180),
    _ = n(388032),
    p = n(957991);
function h(e) {
    let t = c.Z.getVoiceChannelId();
    if (null == t) return;
    let n = l.Z.getChannel(t);
    null != n && (0, u.RK)(n, e);
}
function m(e) {
    var t, n;
    let { channelId: i } = e,
        o = null != (t = (0, f._d)(i)) ? t : 0,
        s = null != (n = (0, f.K3)(i)) ? n : 0;
    return o > 0 && s > 0
        ? (0, r.jsx)('div', {
              className: p.blocked,
              children: (0, r.jsx)('div', {
                  className: a()(p.blockedText, p.noIcon),
                  children: _.intl.string(_.t.xlJRfn)
              })
          })
        : o > 0
          ? (0, r.jsx)('div', {
                className: p.blocked,
                children: (0, r.jsx)('div', {
                    className: a()(p.blockedText, p.noIcon),
                    children: _.intl.string(_.t.WYad9f)
                })
            })
          : s > 0
            ? (0, r.jsx)('div', {
                  className: p.blocked,
                  children: (0, r.jsx)('div', {
                      className: a()(p.blockedText, p.noIcon),
                      children: _.intl.string(_.t.eHq2OD)
                  })
              })
            : null;
}
function g() {
    let e = (0, d.Z)();
    return null == e
        ? null
        : (0, r.jsxs)(s.qXd, {
              className: p.container,
              color: s.DM8.DEFAULT,
              children: [
                  (0, r.jsx)('div', { children: _.intl.string(_.t.Ul1RJS) }),
                  (0, r.jsx)(m, { channelId: e.id }),
                  (0, r.jsx)(o.zx, {
                      className: p.acceptButton,
                      size: o.zx.Sizes.MIN,
                      color: o.zx.Colors.WHITE,
                      onClick: () => h(!1),
                      children: (0, r.jsx)(s.Text, {
                          className: p.acceptText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: _.intl.string(_.t.MpO0p6)
                      })
                  }),
                  (0, r.jsx)(o.zx, {
                      className: p.declineButton,
                      look: o.zx.Looks.OUTLINED,
                      size: o.zx.Sizes.MIN,
                      color: o.zx.Colors.WHITE,
                      onClick: () => h(!0),
                      children: (0, r.jsx)(s.Text, {
                          className: p.declineText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: _.intl.string(_.t['1YDv7e'])
                      })
                  })
              ]
          });
}
