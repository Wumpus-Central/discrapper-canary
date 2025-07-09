n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(755721),
    a = n(481060),
    c = n(592125),
    s = n(944486),
    u = n(471253),
    d = n(623633),
    _ = n(930180),
    E = n(388032),
    O = n(957991);
function I(e) {
    let t = s.Z.getVoiceChannelId();
    if (null == t) return;
    let n = c.Z.getChannel(t);
    null != n && (0, u.RK)(n, e);
}
function T(e) {
    var t, n;
    let { channelId: i } = e,
        o = null != (t = (0, _._d)(i)) ? t : 0,
        a = null != (n = (0, _.K3)(i)) ? n : 0;
    return o > 0 && a > 0
        ? (0, r.jsx)('div', {
              className: O.blocked,
              children: (0, r.jsx)('div', {
                  className: l()(O.blockedText, O.noIcon),
                  children: E.intl.string(E.t.xlJRfn)
              })
          })
        : o > 0
          ? (0, r.jsx)('div', {
                className: O.blocked,
                children: (0, r.jsx)('div', {
                    className: l()(O.blockedText, O.noIcon),
                    children: E.intl.string(E.t.WYad9f)
                })
            })
          : a > 0
            ? (0, r.jsx)('div', {
                  className: O.blocked,
                  children: (0, r.jsx)('div', {
                      className: l()(O.blockedText, O.noIcon),
                      children: E.intl.string(E.t.eHq2OD)
                  })
              })
            : null;
}
function p() {
    let e = (0, d.Z)();
    return null == e
        ? null
        : (0, r.jsxs)(a.qXd, {
              className: O.container,
              color: a.DM8.DEFAULT,
              children: [
                  (0, r.jsx)('div', { children: E.intl.string(E.t.Ul1RJS) }),
                  (0, r.jsx)(T, { channelId: e.id }),
                  (0, r.jsx)(o.zx, {
                      className: O.acceptButton,
                      size: o.zx.Sizes.MIN,
                      color: o.zx.Colors.WHITE,
                      onClick: () => I(!1),
                      children: (0, r.jsx)(a.Text, {
                          className: O.acceptText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: E.intl.string(E.t.MpO0p6)
                      })
                  }),
                  (0, r.jsx)(o.zx, {
                      className: O.declineButton,
                      look: o.zx.Looks.OUTLINED,
                      size: o.zx.Sizes.MIN,
                      color: o.zx.Colors.WHITE,
                      onClick: () => I(!0),
                      children: (0, r.jsx)(a.Text, {
                          className: O.declineText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: E.intl.string(E.t['1YDv7e'])
                      })
                  })
              ]
          });
}
