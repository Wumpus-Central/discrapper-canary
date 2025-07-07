(n.d(t, { Z: () => h }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(831209),
    o = n(481060),
    c = n(367907),
    d = n(177862),
    u = n(981631),
    m = n(388032),
    x = n(147612);
function h(e) {
    let { guildId: t, transitionState: n, onClose: i } = e,
        [h, j] = l.useState([]),
        [b, f] = l.useState(),
        p = [
            {
                text: m.intl.string(m.t['//3pvr']),
                value: d.C2.DM_SPAM
            },
            {
                text: m.intl.string(m.t.SdVsio),
                value: d.C2.MENTION_SPAM
            },
            {
                text: m.intl.string(m.t.uTiSVF),
                value: d.C2.CHANNEL_SPAM
            },
            {
                text: m.intl.string(m.t.GQczU1),
                value: d.C2.SUS_NEW_MEMBERS
            },
            {
                text: m.intl.string(m.t.AAgqy8),
                value: d.C2.CHANGING_SETTINGS
            },
            {
                text: m.intl.string(m.t.ryPKb2),
                value: d.C2.OTHER
            }
        ];
    function g(e) {
        h.includes(e) ? j((t) => t.filter((t) => t !== e)) : j((t) => [...t, e]);
    }
    return null == t
        ? (i(), null)
        : (0, r.jsxs)(o.Y0X, {
              transitionState: n,
              size: o.CgR.MEDIUM,
              parentComponent: 'GuildRaidLockdownFeedbackModal',
              children: [
                  (0, r.jsx)(o.xBx, {
                      separator: !0,
                      children: (0, r.jsxs)('div', {
                          className: x.headerContainer,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: x.headerText,
                                  children: [
                                      (0, r.jsx)(o.mBM, {
                                          size: 'xs',
                                          color: s.Z.INTERACTIVE_NORMAL
                                      }),
                                      (0, r.jsx)(o.X6q, {
                                          color: 'header-primary',
                                          variant: 'heading-md/semibold',
                                          children: m.intl.string(m.t.f5hd9P)
                                      })
                                  ]
                              }),
                              (0, r.jsx)(o.P3F, {
                                  onClick: i,
                                  children: (0, r.jsx)(o.Dio, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: x.closeIcon
                                  })
                              })
                          ]
                      })
                  }),
                  (0, r.jsx)(o.hzk, {
                      children: (0, r.jsx)('div', {
                          className: x.options,
                          children: p.map((e) => {
                              let { text: t, value: n } = e;
                              return (0, r.jsxs)(
                                  'div',
                                  {
                                      className: a()(x.optionContainer, { [x.optionContainerOther]: n === d.C2.OTHER }),
                                      children: [
                                          (0, r.jsxs)(o.P3F, {
                                              className: x.optionText,
                                              onClick: () => g(n),
                                              children: [
                                                  (0, r.jsx)('div', {
                                                      children: (0, r.jsx)(o.XZJ, {
                                                          type: o.XZJ.Types.INVERTED,
                                                          size: 20,
                                                          value: h.includes(n),
                                                          onChange: () => g(n)
                                                      })
                                                  }),
                                                  (0, r.jsx)(o.Text, {
                                                      variant: 'text-md/medium',
                                                      color: h.includes(n) ? 'interactive-active' : 'interactive-normal',
                                                      children: t
                                                  })
                                              ]
                                          }),
                                          n === d.C2.OTHER &&
                                              h.includes(d.C2.OTHER) &&
                                              (0, r.jsx)('div', {
                                                  className: x.textboxContainer,
                                                  children: (0, r.jsx)(o.Kx8, {
                                                      className: x.serverLockdownReasonText,
                                                      placeholder: m.intl.string(m.t['PAM+JS']),
                                                      onChange: (e) => f(e),
                                                      value: b,
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
                  (0, r.jsx)(o.mzw, {
                      children: (0, r.jsx)(o.zxk, {
                          onClick: function () {
                              ((0, c.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                                  raid_lockdown_feedback_type: h,
                                  raid_lockdown_feedback_other_reason: b,
                                  guild_id: t
                              }),
                                  i());
                          },
                          color: o.zxk.Colors.BRAND,
                          look: o.zxk.Looks.FILLED,
                          submitting: !1,
                          children: m.intl.string(m.t.nAt0rK)
                      })
                  })
              ]
          });
}
