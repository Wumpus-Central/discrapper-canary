n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(592125),
    c = n(944486),
    s = n(471253),
    u = n(623633),
    d = n(930180),
    _ = n(388032),
    E = n(708011);
function O(e) {
    let t = c.Z.getVoiceChannelId();
    if (null == t) return;
    let n = a.Z.getChannel(t);
    null != n && (0, s.RK)(n, e);
}
function I(e) {
    var t, n;
    let { channelId: i } = e,
        o = null != (t = (0, d._d)(i)) ? t : 0,
        a = null != (n = (0, d.K3)(i)) ? n : 0;
    return o > 0 && a > 0
        ? (0, r.jsx)('div', {
              className: E.blocked,
              children: (0, r.jsx)('div', {
                  className: l()(E.blockedText, E.noIcon),
                  children: _.intl.string(_.t.xlJRfn)
              })
          })
        : o > 0
          ? (0, r.jsx)('div', {
                className: E.blocked,
                children: (0, r.jsx)('div', {
                    className: l()(E.blockedText, E.noIcon),
                    children: _.intl.string(_.t.WYad9f)
                })
            })
          : a > 0
            ? (0, r.jsx)('div', {
                  className: E.blocked,
                  children: (0, r.jsx)('div', {
                      className: l()(E.blockedText, E.noIcon),
                      children: _.intl.string(_.t.eHq2OD)
                  })
              })
            : null;
}
function p() {
    let e = (0, u.Z)();
    return null == e
        ? null
        : (0, r.jsxs)(o.qXd, {
              className: E.container,
              color: o.DM8.DEFAULT,
              children: [
                  (0, r.jsx)('div', { children: _.intl.string(_.t.Ul1RJS) }),
                  (0, r.jsx)(I, { channelId: e.id }),
                  (0, r.jsx)(o.zxk, {
                      className: E.acceptButton,
                      size: o.zxk.Sizes.MIN,
                      color: o.zxk.Colors.WHITE,
                      onClick: () => O(!1),
                      children: (0, r.jsx)(o.Text, {
                          className: E.acceptText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: _.intl.string(_.t.MpO0p6)
                      })
                  }),
                  (0, r.jsx)(o.zxk, {
                      className: E.declineButton,
                      look: o.zxk.Looks.OUTLINED,
                      size: o.zxk.Sizes.MIN,
                      color: o.zxk.Colors.WHITE,
                      onClick: () => O(!0),
                      children: (0, r.jsx)(o.Text, {
                          className: E.declineText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: _.intl.string(_.t['1YDv7e'])
                      })
                  })
              ]
          });
}
