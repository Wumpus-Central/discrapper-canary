n.d(t, { Z: () => O });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(922611),
    s = n(592125),
    c = n(944486),
    u = n(471253),
    E = n(623633),
    d = n(930180),
    _ = n(388032),
    N = n(29829);
function I(e) {
    let t = c.Z.getVoiceChannelId();
    if (null == t) return;
    let n = s.Z.getChannel(t);
    null != n && (0, u.RK)(n, e);
}
function T(e) {
    var t, n;
    let { channelId: i } = e,
        s = null !== (t = (0, d._d)(i)) && void 0 !== t ? t : 0,
        c = null !== (n = (0, d.K3)(i)) && void 0 !== n ? n : 0,
        u = (0, a.Do)({ location: 'invited_to_speak_header' });
    return s > 0 && c > 0
        ? (0, r.jsx)('div', {
              className: N.blocked,
              children: (0, r.jsx)('div', {
                  className: l()(N.blockedText, N.noIcon),
                  children: _.NW.string(_.t.xlJRfn)
              })
          })
        : u && s > 0
          ? (0, r.jsx)('div', {
                className: N.blocked,
                children: (0, r.jsx)('div', {
                    className: l()(N.blockedText, N.noIcon),
                    children: _.NW.string(_.t.WYad9f)
                })
            })
          : s > 0
            ? (0, r.jsxs)('div', {
                  className: N.blocked,
                  children: [
                      u
                          ? null
                          : (0, r.jsx)(o.t6m, {
                                size: 'xxs',
                                color: 'currentColor',
                                className: N.blockedIcon
                            }),
                      (0, r.jsx)('div', {
                          className: l()(N.blockedText, { [N.noIcon]: u }),
                          children: _.NW.format(_.t.ATpigY, { number: s })
                      })
                  ]
              })
            : c > 0
              ? (0, r.jsx)('div', {
                    className: N.blocked,
                    children: (0, r.jsx)('div', {
                        className: l()(N.blockedText, N.noIcon),
                        children: _.NW.string(_.t.eHq2OD)
                    })
                })
              : null;
}
function O() {
    let e = (0, E.Z)();
    return null == e
        ? null
        : (0, r.jsxs)(o.qXd, {
              className: N.container,
              color: o.DM8.DEFAULT,
              children: [
                  (0, r.jsx)('div', { children: _.NW.string(_.t.Ul1RJS) }),
                  (0, r.jsx)(T, { channelId: e.id }),
                  (0, r.jsx)(o.zxk, {
                      className: N.acceptButton,
                      size: o.zxk.Sizes.MIN,
                      color: o.zxk.Colors.WHITE,
                      onClick: () => I(!1),
                      children: (0, r.jsx)(o.Text, {
                          className: N.acceptText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: _.NW.string(_.t.MpO0p6)
                      })
                  }),
                  (0, r.jsx)(o.zxk, {
                      className: N.declineButton,
                      look: o.zxk.Looks.OUTLINED,
                      size: o.zxk.Sizes.MIN,
                      color: o.zxk.Colors.WHITE,
                      onClick: () => I(!0),
                      children: (0, r.jsx)(o.Text, {
                          className: N.declineText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: _.NW.string(_.t['1YDv7e'])
                      })
                  })
              ]
          });
}
