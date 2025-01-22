n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(922611),
    s = n(592125),
    c = n(944486),
    u = n(471253),
    d = n(623633),
    m = n(930180),
    h = n(388032),
    f = n(360686);
function p(e) {
    let t = c.Z.getVoiceChannelId();
    if (null == t) return;
    let n = s.Z.getChannel(t);
    if (null != n) (0, u.RK)(n, e);
}
function _(e) {
    var t, n;
    let { channelId: r } = e,
        s = null !== (t = (0, m._d)(r)) && void 0 !== t ? t : 0,
        c = null !== (n = (0, m.K3)(r)) && void 0 !== n ? n : 0,
        u = (0, o.Do)({ location: 'invited_to_speak_header' });
    return s > 0 && c > 0
        ? (0, i.jsx)('div', {
              className: f.blocked,
              children: (0, i.jsx)('div', {
                  className: l()(f.blockedText, f.noIcon),
                  children: h.intl.string(h.t.xlJRfn)
              })
          })
        : u && s > 0
          ? (0, i.jsx)('div', {
                className: f.blocked,
                children: (0, i.jsx)('div', {
                    className: l()(f.blockedText, f.noIcon),
                    children: h.intl.string(h.t.WYad9f)
                })
            })
          : s > 0
            ? (0, i.jsxs)('div', {
                  className: f.blocked,
                  children: [
                      u
                          ? null
                          : (0, i.jsx)(a.DenyIcon, {
                                size: 'xxs',
                                color: 'currentColor',
                                className: f.blockedIcon
                            }),
                      (0, i.jsx)('div', {
                          className: l()(f.blockedText, { [f.noIcon]: u }),
                          children: h.intl.format(h.t.ATpigY, { number: s })
                      })
                  ]
              })
            : c > 0
              ? (0, i.jsx)('div', {
                    className: f.blocked,
                    children: (0, i.jsx)('div', {
                        className: l()(f.blockedText, f.noIcon),
                        children: h.intl.string(h.t.eHq2OD)
                    })
                })
              : null;
}
function g() {
    let e = (0, d.Z)();
    return null == e
        ? null
        : (0, i.jsxs)(a.Notice, {
              className: f.container,
              color: a.NoticeColors.DEFAULT,
              children: [
                  (0, i.jsx)('div', { children: h.intl.string(h.t.Ul1RJS) }),
                  (0, i.jsx)(_, { channelId: e.id }),
                  (0, i.jsx)(a.Button, {
                      className: f.acceptButton,
                      size: a.Button.Sizes.MIN,
                      color: a.Button.Colors.WHITE,
                      onClick: () => p(!1),
                      children: (0, i.jsx)(a.Text, {
                          className: f.acceptText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: h.intl.string(h.t.MpO0p6)
                      })
                  }),
                  (0, i.jsx)(a.Button, {
                      className: f.declineButton,
                      look: a.Button.Looks.OUTLINED,
                      size: a.Button.Sizes.MIN,
                      color: a.Button.Colors.WHITE,
                      onClick: () => p(!0),
                      children: (0, i.jsx)(a.Text, {
                          className: f.declineText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: h.intl.string(h.t['1YDv7e'])
                      })
                  })
              ]
          });
}
