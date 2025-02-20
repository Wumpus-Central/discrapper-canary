n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(831209),
    s = n(481060),
    c = n(367907),
    d = n(177862),
    u = n(981631),
    p = n(388032),
    m = n(468094);
function b(e) {
    let { guildId: t, transitionState: n, onClose: l } = e,
        [b, g] = i.useState([]),
        [f, h] = i.useState(),
        x = [
            {
                text: p.NW.string(p.t['//3pvr']),
                value: d.C2.DM_SPAM
            },
            {
                text: p.NW.string(p.t.SdVsio),
                value: d.C2.MENTION_SPAM
            },
            {
                text: p.NW.string(p.t.uTiSVF),
                value: d.C2.CHANNEL_SPAM
            },
            {
                text: p.NW.string(p.t.GQczU1),
                value: d.C2.SUS_NEW_MEMBERS
            },
            {
                text: p.NW.string(p.t.AAgqy8),
                value: d.C2.CHANGING_SETTINGS
            },
            {
                text: p.NW.string(p.t.ryPKb2),
                value: d.C2.OTHER
            }
        ];
    function j(e) {
        b.includes(e) ? g((t) => t.filter((t) => t !== e)) : g((t) => [...t, e]);
    }
    return null == t
        ? (l(), null)
        : (0, r.jsxs)(s.Y0X, {
              transitionState: n,
              size: s.CgR.MEDIUM,
              children: [
                  (0, r.jsx)(s.xBx, {
                      separator: !0,
                      children: (0, r.jsxs)('div', {
                          className: m.headerContainer,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: m.headerText,
                                  children: [
                                      (0, r.jsx)(s.mBM, {
                                          size: 'xs',
                                          color: a.Z.INTERACTIVE_NORMAL
                                      }),
                                      (0, r.jsx)(s.X6q, {
                                          color: 'header-primary',
                                          variant: 'heading-md/semibold',
                                          children: p.NW.string(p.t.f5hd9P)
                                      })
                                  ]
                              }),
                              (0, r.jsx)(s.P3F, {
                                  onClick: l,
                                  children: (0, r.jsx)(s.Dio, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: m.closeIcon
                                  })
                              })
                          ]
                      })
                  }),
                  (0, r.jsx)(s.hzk, {
                      children: (0, r.jsx)('div', {
                          className: m.options,
                          children: x.map((e) => {
                              let { text: t, value: n } = e;
                              return (0, r.jsxs)(
                                  'div',
                                  {
                                      className: o()(m.optionContainer, { [m.optionContainerOther]: n === d.C2.OTHER }),
                                      children: [
                                          (0, r.jsxs)(s.P3F, {
                                              className: m.optionText,
                                              onClick: () => j(n),
                                              children: [
                                                  (0, r.jsx)('div', {
                                                      children: (0, r.jsx)(s.XZJ, {
                                                          type: s.XZJ.Types.INVERTED,
                                                          size: 20,
                                                          value: b.includes(n),
                                                          onChange: () => j(n)
                                                      })
                                                  }),
                                                  (0, r.jsx)(s.Text, {
                                                      variant: 'text-md/medium',
                                                      color: b.includes(n) ? 'interactive-active' : 'interactive-normal',
                                                      children: t
                                                  })
                                              ]
                                          }),
                                          n === d.C2.OTHER &&
                                              b.includes(d.C2.OTHER) &&
                                              (0, r.jsx)('div', {
                                                  className: m.textboxContainer,
                                                  children: (0, r.jsx)(s.Kx8, {
                                                      className: m.serverLockdownReasonText,
                                                      placeholder: p.NW.string(p.t['PAM+JS']),
                                                      onChange: (e) => h(e),
                                                      value: f,
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
                  (0, r.jsx)(s.mzw, {
                      children: (0, r.jsx)(s.zxk, {
                          onClick: function () {
                              (0, c.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                                  raid_lockdown_feedback_type: b,
                                  raid_lockdown_feedback_other_reason: f,
                                  guild_id: t
                              }),
                                  l();
                          },
                          color: s.zxk.Colors.BRAND,
                          look: s.zxk.Looks.FILLED,
                          submitting: !1,
                          children: p.NW.string(p.t.nAt0rK)
                      })
                  })
              ]
          });
}
