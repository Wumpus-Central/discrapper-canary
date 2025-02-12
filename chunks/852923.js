n.d(t, { Z: () => A });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(922611),
    o = n(592125),
    c = n(944486),
    u = n(471253),
    E = n(623633),
    d = n(930180),
    _ = n(388032),
    I = n(811142);
function T(e) {
    let t = c.Z.getVoiceChannelId();
    if (null == t) return;
    let n = o.Z.getChannel(t);
    null != n && (0, u.RK)(n, e);
}
function N(e) {
    var t, n;
    let { channelId: l } = e,
        o = null !== (t = (0, d._d)(l)) && void 0 !== t ? t : 0,
        c = null !== (n = (0, d.K3)(l)) && void 0 !== n ? n : 0,
        u = (0, s.Do)({ location: 'invited_to_speak_header' });
    return o > 0 && c > 0
        ? (0, i.jsx)('div', {
              className: I.blocked,
              children: (0, i.jsx)('div', {
                  className: r()(I.blockedText, I.noIcon),
                  children: _.intl.string(_.t.xlJRfn)
              })
          })
        : u && o > 0
          ? (0, i.jsx)('div', {
                className: I.blocked,
                children: (0, i.jsx)('div', {
                    className: r()(I.blockedText, I.noIcon),
                    children: _.intl.string(_.t.WYad9f)
                })
            })
          : o > 0
            ? (0, i.jsxs)('div', {
                  className: I.blocked,
                  children: [
                      u
                          ? null
                          : (0, i.jsx)(a.t6m, {
                                size: 'xxs',
                                color: 'currentColor',
                                className: I.blockedIcon
                            }),
                      (0, i.jsx)('div', {
                          className: r()(I.blockedText, { [I.noIcon]: u }),
                          children: _.intl.format(_.t.ATpigY, { number: o })
                      })
                  ]
              })
            : c > 0
              ? (0, i.jsx)('div', {
                    className: I.blocked,
                    children: (0, i.jsx)('div', {
                        className: r()(I.blockedText, I.noIcon),
                        children: _.intl.string(_.t.eHq2OD)
                    })
                })
              : null;
}
function A() {
    let e = (0, E.Z)();
    return null == e
        ? null
        : (0, i.jsxs)(a.qXd, {
              className: I.container,
              color: a.DM8.DEFAULT,
              children: [
                  (0, i.jsx)('div', { children: _.intl.string(_.t.Ul1RJS) }),
                  (0, i.jsx)(N, { channelId: e.id }),
                  (0, i.jsx)(a.zxk, {
                      className: I.acceptButton,
                      size: a.zxk.Sizes.MIN,
                      color: a.zxk.Colors.WHITE,
                      onClick: () => T(!1),
                      children: (0, i.jsx)(a.Text, {
                          className: I.acceptText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: _.intl.string(_.t.MpO0p6)
                      })
                  }),
                  (0, i.jsx)(a.zxk, {
                      className: I.declineButton,
                      look: a.zxk.Looks.OUTLINED,
                      size: a.zxk.Sizes.MIN,
                      color: a.zxk.Colors.WHITE,
                      onClick: () => T(!0),
                      children: (0, i.jsx)(a.Text, {
                          className: I.declineText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: _.intl.string(_.t['1YDv7e'])
                      })
                  })
              ]
          });
}
