(n.d(t, { Z: () => p }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(831209),
    o = n(481060),
    c = n(367907),
    d = n(177862),
    u = n(981631),
    x = n(388032),
    h = n(147612);
function p(e) {
    let { guildId: t, transitionState: n, onClose: l } = e,
        [p, j] = i.useState([]),
        [b, g] = i.useState(),
        m = [
            {
                text: x.intl.string(x.t['//3pvr']),
                value: d.C2.DM_SPAM
            },
            {
                text: x.intl.string(x.t.SdVsio),
                value: d.C2.MENTION_SPAM
            },
            {
                text: x.intl.string(x.t.uTiSVF),
                value: d.C2.CHANNEL_SPAM
            },
            {
                text: x.intl.string(x.t.GQczU1),
                value: d.C2.SUS_NEW_MEMBERS
            },
            {
                text: x.intl.string(x.t.AAgqy8),
                value: d.C2.CHANGING_SETTINGS
            },
            {
                text: x.intl.string(x.t.ryPKb2),
                value: d.C2.OTHER
            }
        ];
    function O(e) {
        p.includes(e) ? j((t) => t.filter((t) => t !== e)) : j((t) => [...t, e]);
    }
    return null == t
        ? (l(), null)
        : (0, r.jsxs)(o.Y0X, {
              transitionState: n,
              size: o.CgR.MEDIUM,
              parentComponent: 'GuildRaidLockdownFeedbackModal',
              children: [
                  (0, r.jsx)(o.xBx, {
                      separator: !0,
                      children: (0, r.jsxs)('div', {
                          className: h.headerContainer,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: h.headerText,
                                  children: [
                                      (0, r.jsx)(o.mBM, {
                                          size: 'xs',
                                          color: a.Z.INTERACTIVE_NORMAL
                                      }),
                                      (0, r.jsx)(o.X6q, {
                                          color: 'header-primary',
                                          variant: 'heading-md/semibold',
                                          children: x.intl.string(x.t.f5hd9P)
                                      })
                                  ]
                              }),
                              (0, r.jsx)(o.P3F, {
                                  onClick: l,
                                  children: (0, r.jsx)(o.Dio, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: h.closeIcon
                                  })
                              })
                          ]
                      })
                  }),
                  (0, r.jsx)(o.hzk, {
                      children: (0, r.jsx)('div', {
                          className: h.options,
                          children: m.map((e) => {
                              let { text: t, value: n } = e;
                              return (0, r.jsxs)(
                                  'div',
                                  {
                                      className: s()(h.optionContainer, { [h.optionContainerOther]: n === d.C2.OTHER }),
                                      children: [
                                          (0, r.jsxs)(o.P3F, {
                                              className: h.optionText,
                                              onClick: () => O(n),
                                              children: [
                                                  (0, r.jsx)('div', {
                                                      children: (0, r.jsx)(o.XZJ, {
                                                          type: o.XZJ.Types.INVERTED,
                                                          size: 20,
                                                          value: p.includes(n),
                                                          onChange: () => O(n)
                                                      })
                                                  }),
                                                  (0, r.jsx)(o.Text, {
                                                      variant: 'text-md/medium',
                                                      color: p.includes(n) ? 'interactive-active' : 'interactive-normal',
                                                      children: t
                                                  })
                                              ]
                                          }),
                                          n === d.C2.OTHER &&
                                              p.includes(d.C2.OTHER) &&
                                              (0, r.jsx)('div', {
                                                  className: h.textboxContainer,
                                                  children: (0, r.jsx)(o.Kx8, {
                                                      className: h.serverLockdownReasonText,
                                                      placeholder: x.intl.string(x.t['PAM+JS']),
                                                      onChange: (e) => g(e),
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
                          variant: 'primary',
                          text: x.intl.string(x.t.nAt0rK),
                          onClick: function () {
                              ((0, c.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                                  raid_lockdown_feedback_type: p,
                                  raid_lockdown_feedback_other_reason: b,
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
