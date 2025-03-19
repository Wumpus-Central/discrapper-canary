n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    l = n(481060),
    a = n(592125),
    s = n(944486),
    c = n(471253),
    u = n(623633),
    d = n(930180),
    _ = n(388032),
    p = n(211534);
function E(e) {
    let t = s.Z.getVoiceChannelId();
    if (null == t) return;
    let n = a.Z.getChannel(t);
    null != n && (0, c.RK)(n, e);
}
function f(e) {
    var t, n;
    let { channelId: i } = e,
        l = null !== (t = (0, d._d)(i)) && void 0 !== t ? t : 0,
        a = null !== (n = (0, d.K3)(i)) && void 0 !== n ? n : 0;
    return l > 0 && a > 0
        ? (0, r.jsx)('div', {
              className: p.blocked,
              children: (0, r.jsx)('div', {
                  className: o()(p.blockedText, p.noIcon),
                  children: _.NW.string(_.t.xlJRfn)
              })
          })
        : l > 0
          ? (0, r.jsx)('div', {
                className: p.blocked,
                children: (0, r.jsx)('div', {
                    className: o()(p.blockedText, p.noIcon),
                    children: _.NW.string(_.t.WYad9f)
                })
            })
          : a > 0
            ? (0, r.jsx)('div', {
                  className: p.blocked,
                  children: (0, r.jsx)('div', {
                      className: o()(p.blockedText, p.noIcon),
                      children: _.NW.string(_.t.eHq2OD)
                  })
              })
            : null;
}
function h() {
    let e = (0, u.Z)();
    return null == e
        ? null
        : (0, r.jsxs)(l.qXd, {
              className: p.container,
              color: l.DM8.DEFAULT,
              children: [
                  (0, r.jsx)('div', { children: _.NW.string(_.t.Ul1RJS) }),
                  (0, r.jsx)(f, { channelId: e.id }),
                  (0, r.jsx)(l.zxk, {
                      className: p.acceptButton,
                      size: l.zxk.Sizes.MIN,
                      color: l.zxk.Colors.WHITE,
                      onClick: () => E(!1),
                      children: (0, r.jsx)(l.Text, {
                          className: p.acceptText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: _.NW.string(_.t.MpO0p6)
                      })
                  }),
                  (0, r.jsx)(l.zxk, {
                      className: p.declineButton,
                      look: l.zxk.Looks.OUTLINED,
                      size: l.zxk.Sizes.MIN,
                      color: l.zxk.Colors.WHITE,
                      onClick: () => E(!0),
                      children: (0, r.jsx)(l.Text, {
                          className: p.declineText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: _.NW.string(_.t['1YDv7e'])
                      })
                  })
              ]
          });
}
