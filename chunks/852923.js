n.d(t, { Z: () => T });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(755721),
    o = n(481060),
    c = n(592125),
    s = n(944486),
    u = n(471253),
    d = n(623633),
    _ = n(930180),
    E = n(388032),
    I = n(957991);
function O(e) {
    let t = s.Z.getVoiceChannelId();
    if (null == t) return;
    let n = c.Z.getChannel(t);
    null != n && (0, u.RK)(n, e);
}
function p(e) {
    var t, n;
    let { channelId: i } = e,
        a = null != (t = (0, _._d)(i)) ? t : 0,
        o = null != (n = (0, _.K3)(i)) ? n : 0;
    return a > 0 && o > 0
        ? (0, r.jsx)('div', {
              className: I.blocked,
              children: (0, r.jsx)('div', {
                  className: l()(I.blockedText, I.noIcon),
                  children: E.intl.string(E.t.xlJRfn)
              })
          })
        : a > 0
          ? (0, r.jsx)('div', {
                className: I.blocked,
                children: (0, r.jsx)('div', {
                    className: l()(I.blockedText, I.noIcon),
                    children: E.intl.string(E.t.WYad9f)
                })
            })
          : o > 0
            ? (0, r.jsx)('div', {
                  className: I.blocked,
                  children: (0, r.jsx)('div', {
                      className: l()(I.blockedText, I.noIcon),
                      children: E.intl.string(E.t.eHq2OD)
                  })
              })
            : null;
}
function T() {
    let e = (0, d.Z)();
    return null == e
        ? null
        : (0, r.jsxs)(o.qXd, {
              className: I.container,
              color: o.DM8.DEFAULT,
              children: [
                  (0, r.jsx)('div', { children: E.intl.string(E.t.Ul1RJS) }),
                  (0, r.jsx)(p, { channelId: e.id }),
                  (0, r.jsx)(a.zx, {
                      className: I.acceptButton,
                      size: a.zx.Sizes.MIN,
                      color: a.zx.Colors.WHITE,
                      onClick: () => O(!1),
                      children: (0, r.jsx)(o.Text, {
                          className: I.acceptText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: E.intl.string(E.t.MpO0p6)
                      })
                  }),
                  (0, r.jsx)(a.zx, {
                      className: I.declineButton,
                      look: a.zx.Looks.OUTLINED,
                      size: a.zx.Sizes.MIN,
                      color: a.zx.Colors.WHITE,
                      onClick: () => O(!0),
                      children: (0, r.jsx)(o.Text, {
                          className: I.declineText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: E.intl.string(E.t['1YDv7e'])
                      })
                  })
              ]
          });
}
