(n.d(t, { Z: () => j }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(831209),
    o = n(755721),
    c = n(481060),
    d = n(367907),
    u = n(177862),
    x = n(981631),
    h = n(388032),
    p = n(147612);
function j(e) {
    let { guildId: t, transitionState: n, onClose: l } = e,
        [j, b] = i.useState([]),
        [g, m] = i.useState(),
        O = [
            {
                text: h.intl.string(h.t['//3pvr']),
                value: u.C2.DM_SPAM
            },
            {
                text: h.intl.string(h.t.SdVsio),
                value: u.C2.MENTION_SPAM
            },
            {
                text: h.intl.string(h.t.uTiSVF),
                value: u.C2.CHANNEL_SPAM
            },
            {
                text: h.intl.string(h.t.GQczU1),
                value: u.C2.SUS_NEW_MEMBERS
            },
            {
                text: h.intl.string(h.t.AAgqy8),
                value: u.C2.CHANGING_SETTINGS
            },
            {
                text: h.intl.string(h.t.ryPKb2),
                value: u.C2.OTHER
            }
        ];
    function f(e) {
        j.includes(e) ? b((t) => t.filter((t) => t !== e)) : b((t) => [...t, e]);
    }
    return null == t
        ? (l(), null)
        : (0, r.jsxs)(c.Y0X, {
              transitionState: n,
              size: c.CgR.MEDIUM,
              parentComponent: 'GuildRaidLockdownFeedbackModal',
              children: [
                  (0, r.jsx)(c.xBx, {
                      separator: !0,
                      children: (0, r.jsxs)('div', {
                          className: p.headerContainer,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: p.headerText,
                                  children: [
                                      (0, r.jsx)(c.mBM, {
                                          size: 'xs',
                                          color: a.Z.INTERACTIVE_NORMAL
                                      }),
                                      (0, r.jsx)(c.X6q, {
                                          color: 'header-primary',
                                          variant: 'heading-md/semibold',
                                          children: h.intl.string(h.t.f5hd9P)
                                      })
                                  ]
                              }),
                              (0, r.jsx)(c.P3F, {
                                  onClick: l,
                                  children: (0, r.jsx)(c.Dio, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: p.closeIcon
                                  })
                              })
                          ]
                      })
                  }),
                  (0, r.jsx)(c.hzk, {
                      children: (0, r.jsx)('div', {
                          className: p.options,
                          children: O.map((e) => {
                              let { text: t, value: n } = e;
                              return (0, r.jsxs)(
                                  'div',
                                  {
                                      className: s()(p.optionContainer, { [p.optionContainerOther]: n === u.C2.OTHER }),
                                      children: [
                                          (0, r.jsxs)(c.P3F, {
                                              className: p.optionText,
                                              onClick: () => f(n),
                                              children: [
                                                  (0, r.jsx)('div', {
                                                      children: (0, r.jsx)(c.XZJ, {
                                                          type: c.XZJ.Types.INVERTED,
                                                          size: 20,
                                                          value: j.includes(n),
                                                          onChange: () => f(n)
                                                      })
                                                  }),
                                                  (0, r.jsx)(c.Text, {
                                                      variant: 'text-md/medium',
                                                      color: j.includes(n) ? 'interactive-active' : 'interactive-normal',
                                                      children: t
                                                  })
                                              ]
                                          }),
                                          n === u.C2.OTHER &&
                                              j.includes(u.C2.OTHER) &&
                                              (0, r.jsx)('div', {
                                                  className: p.textboxContainer,
                                                  children: (0, r.jsx)(o.iS, {
                                                      className: p.serverLockdownReasonText,
                                                      placeholder: h.intl.string(h.t['PAM+JS']),
                                                      onChange: (e) => m(e),
                                                      value: g,
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
                  (0, r.jsx)(c.mzw, {
                      children: (0, r.jsx)(c.zxk, {
                          variant: 'primary',
                          text: h.intl.string(h.t.nAt0rK),
                          onClick: function () {
                              ((0, d.yw)(x.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                                  raid_lockdown_feedback_type: j,
                                  raid_lockdown_feedback_other_reason: g,
                                  guild_id: t
                              }),
                                  l());
                          },
                          loading: !1
                      })
                  })
              ]
          });
}
