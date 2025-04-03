n.d(t, { Z: () => O });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(592125),
    s = n(944486),
    c = n(471253),
    u = n(623633),
    d = n(930180),
    E = n(388032),
    _ = n(957991);
function I(e) {
    let t = s.Z.getVoiceChannelId();
    if (null == t) return;
    let n = a.Z.getChannel(t);
    null != n && (0, c.RK)(n, e);
}
function N(e) {
    var t, n;
    let { channelId: i } = e,
        o = null != (t = (0, d._d)(i)) ? t : 0,
        a = null != (n = (0, d.K3)(i)) ? n : 0;
    return o > 0 && a > 0
        ? (0, r.jsx)('div', {
              className: _.blocked,
              children: (0, r.jsx)('div', {
                  className: l()(_.blockedText, _.noIcon),
                  children: E.NW.string(E.t.xlJRfn)
              })
          })
        : o > 0
          ? (0, r.jsx)('div', {
                className: _.blocked,
                children: (0, r.jsx)('div', {
                    className: l()(_.blockedText, _.noIcon),
                    children: E.NW.string(E.t.WYad9f)
                })
            })
          : a > 0
            ? (0, r.jsx)('div', {
                  className: _.blocked,
                  children: (0, r.jsx)('div', {
                      className: l()(_.blockedText, _.noIcon),
                      children: E.NW.string(E.t.eHq2OD)
                  })
              })
            : null;
}
function O() {
    let e = (0, u.Z)();
    return null == e
        ? null
        : (0, r.jsxs)(o.qXd, {
              className: _.container,
              color: o.DM8.DEFAULT,
              children: [
                  (0, r.jsx)('div', { children: E.NW.string(E.t.Ul1RJS) }),
                  (0, r.jsx)(N, { channelId: e.id }),
                  (0, r.jsx)(o.zxk, {
                      className: _.acceptButton,
                      size: o.zxk.Sizes.MIN,
                      color: o.zxk.Colors.WHITE,
                      onClick: () => I(!1),
                      children: (0, r.jsx)(o.Text, {
                          className: _.acceptText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: E.NW.string(E.t.MpO0p6)
                      })
                  }),
                  (0, r.jsx)(o.zxk, {
                      className: _.declineButton,
                      look: o.zxk.Looks.OUTLINED,
                      size: o.zxk.Sizes.MIN,
                      color: o.zxk.Colors.WHITE,
                      onClick: () => I(!0),
                      children: (0, r.jsx)(o.Text, {
                          className: _.declineText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: E.NW.string(E.t['1YDv7e'])
                      })
                  })
              ]
          });
}
