n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(831209),
    l = n(481060),
    d = n(367907),
    c = n(177862),
    x = n(981631),
    h = n(388032),
    u = n(506452);
function _(e) {
    let { guildId: t, transitionState: n, onClose: r } = e,
        [_, C] = s.useState([]),
        [m, p] = s.useState(),
        j = [
            {
                text: h.intl.string(h.t['//3pvr']),
                value: c.C2.DM_SPAM
            },
            {
                text: h.intl.string(h.t.SdVsio),
                value: c.C2.MENTION_SPAM
            },
            {
                text: h.intl.string(h.t.uTiSVF),
                value: c.C2.CHANNEL_SPAM
            },
            {
                text: h.intl.string(h.t.GQczU1),
                value: c.C2.SUS_NEW_MEMBERS
            },
            {
                text: h.intl.string(h.t.AAgqy8),
                value: c.C2.CHANGING_SETTINGS
            },
            {
                text: h.intl.string(h.t.ryPKb2),
                value: c.C2.OTHER
            }
        ];
    function g(e) {
        _.includes(e) ? C((t) => t.filter((t) => t !== e)) : C((t) => [...t, e]);
    }
    return null == t
        ? (r(), null)
        : (0, i.jsxs)(l.Y0X, {
              transitionState: n,
              size: l.CgR.MEDIUM,
              children: [
                  (0, i.jsx)(l.xBx, {
                      separator: !0,
                      children: (0, i.jsxs)('div', {
                          className: u.headerContainer,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: u.headerText,
                                  children: [
                                      (0, i.jsx)(l.mBM, {
                                          size: 'xs',
                                          color: a.Z.INTERACTIVE_NORMAL
                                      }),
                                      (0, i.jsx)(l.X6q, {
                                          color: 'header-primary',
                                          variant: 'heading-md/semibold',
                                          children: h.intl.string(h.t.f5hd9P)
                                      })
                                  ]
                              }),
                              (0, i.jsx)(l.P3F, {
                                  onClick: r,
                                  children: (0, i.jsx)(l.Dio, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: u.closeIcon
                                  })
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)(l.hzk, {
                      children: (0, i.jsx)('div', {
                          className: u.options,
                          children: j.map((e) => {
                              let { text: t, value: n } = e;
                              return (0, i.jsxs)(
                                  'div',
                                  {
                                      className: o()(u.optionContainer, { [u.optionContainerOther]: n === c.C2.OTHER }),
                                      children: [
                                          (0, i.jsxs)(l.P3F, {
                                              className: u.optionText,
                                              onClick: () => g(n),
                                              children: [
                                                  (0, i.jsx)('div', {
                                                      children: (0, i.jsx)(l.XZJ, {
                                                          type: l.XZJ.Types.INVERTED,
                                                          size: 20,
                                                          value: _.includes(n),
                                                          onChange: () => g(n)
                                                      })
                                                  }),
                                                  (0, i.jsx)(l.Text, {
                                                      variant: 'text-md/medium',
                                                      color: _.includes(n) ? 'interactive-active' : 'interactive-normal',
                                                      children: t
                                                  })
                                              ]
                                          }),
                                          n === c.C2.OTHER &&
                                              _.includes(c.C2.OTHER) &&
                                              (0, i.jsx)('div', {
                                                  className: u.textboxContainer,
                                                  children: (0, i.jsx)(l.Kx8, {
                                                      className: u.serverLockdownReasonText,
                                                      placeholder: h.intl.string(h.t['PAM+JS']),
                                                      onChange: (e) => p(e),
                                                      value: m,
                                                      rows: 2,
                                                      autoFocus: !0,
                                                      flex: !0
                                                  })
                                              })
                                      ]
                                  },
                                  n
                              );
                          })
                      })
                  }),
                  (0, i.jsx)(l.mzw, {
                      children: (0, i.jsx)(l.zxk, {
                          onClick: function () {
                              (0, d.yw)(x.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                                  raid_lockdown_feedback_type: _,
                                  raid_lockdown_feedback_other_reason: m,
                                  guild_id: t
                              }),
                                  r();
                          },
                          color: l.zxk.Colors.BRAND,
                          look: l.zxk.Looks.FILLED,
                          submitting: !1,
                          children: h.intl.string(h.t.nAt0rK)
                      })
                  })
              ]
          });
}
