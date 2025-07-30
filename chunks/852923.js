n.d(t, { Z: () => I });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(755721),
    o = n(481060),
    s = n(592125),
    c = n(944486),
    u = n(471253),
    d = n(623633),
    _ = n(930180),
    E = n(388032),
    p = n(957991);
function O(e) {
    let t = c.Z.getVoiceChannelId();
    if (null == t) return;
    let n = s.Z.getChannel(t);
    null != n && (0, u.RK)(n, e);
}
function f(e) {
    var t, n;
    let { channelId: i } = e,
        a = null != (t = (0, _._d)(i)) ? t : 0,
        o = null != (n = (0, _.K3)(i)) ? n : 0;
    return a > 0 && o > 0
        ? (0, r.jsx)('div', {
              className: p.blocked,
              children: (0, r.jsx)('div', {
                  className: l()(p.blockedText, p.noIcon),
                  children: E.intl.string(E.t.xlJRfn)
              })
          })
        : a > 0
          ? (0, r.jsx)('div', {
                className: p.blocked,
                children: (0, r.jsx)('div', {
                    className: l()(p.blockedText, p.noIcon),
                    children: E.intl.string(E.t.WYad9f)
                })
            })
          : o > 0
            ? (0, r.jsx)('div', {
                  className: p.blocked,
                  children: (0, r.jsx)('div', {
                      className: l()(p.blockedText, p.noIcon),
                      children: E.intl.string(E.t.eHq2OD)
                  })
              })
            : null;
}
function I() {
    let e = (0, d.Z)();
    return null == e
        ? null
        : (0, r.jsxs)(o.qXd, {
              className: p.container,
              color: o.DM8.DEFAULT,
              children: [
                  (0, r.jsx)('div', { children: E.intl.string(E.t.Ul1RJS) }),
                  (0, r.jsx)(f, { channelId: e.id }),
                  (0, r.jsx)(a.zx, {
                      className: p.acceptButton,
                      size: a.zx.Sizes.MIN,
                      color: a.zx.Colors.WHITE,
                      onClick: () => O(!1),
                      children: (0, r.jsx)(o.Text, {
                          className: p.acceptText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: E.intl.string(E.t.MpO0p6)
                      })
                  }),
                  (0, r.jsx)(a.zx, {
                      className: p.declineButton,
                      look: a.zx.Looks.OUTLINED,
                      size: a.zx.Sizes.MIN,
                      color: a.zx.Colors.WHITE,
                      onClick: () => O(!0),
                      children: (0, r.jsx)(o.Text, {
                          className: p.declineText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: E.intl.string(E.t['1YDv7e'])
                      })
                  })
              ]
          });
}
