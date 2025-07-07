n.d(t, { Z: () => p });
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    o = n(481060),
    s = n(592125),
    a = n(944486),
    c = n(471253),
    d = n(623633),
    u = n(930180),
    _ = n(388032),
    E = n(957991);
function h(e) {
    let t = a.Z.getVoiceChannelId();
    if (null == t) return;
    let n = s.Z.getChannel(t);
    null != n && (0, c.RK)(n, e);
}
function I(e) {
    var t, n;
    let { channelId: r } = e,
        o = null != (t = (0, u._d)(r)) ? t : 0,
        s = null != (n = (0, u.K3)(r)) ? n : 0;
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
function p() {
    let e = (0, d.Z)();
    return null == e
        ? null
        : (0, i.jsxs)(o.qXd, {
              className: E.container,
              color: o.DM8.DEFAULT,
              children: [
                  (0, i.jsx)('div', { children: _.intl.string(_.t.Ul1RJS) }),
                  (0, i.jsx)(I, { channelId: e.id }),
                  (0, i.jsx)(o.zxk, {
                      className: E.acceptButton,
                      size: o.zxk.Sizes.MIN,
                      color: o.zxk.Colors.WHITE,
                      onClick: () => h(!1),
                      children: (0, i.jsx)(o.Text, {
                          className: E.acceptText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: _.intl.string(_.t.MpO0p6)
                      })
                  }),
                  (0, i.jsx)(o.zxk, {
                      className: E.declineButton,
                      look: o.zxk.Looks.OUTLINED,
                      size: o.zxk.Sizes.MIN,
                      color: o.zxk.Colors.WHITE,
                      onClick: () => h(!0),
                      children: (0, i.jsx)(o.Text, {
                          className: E.declineText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: _.intl.string(_.t['1YDv7e'])
                      })
                  })
              ]
          });
}
