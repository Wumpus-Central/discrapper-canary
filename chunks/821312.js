n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    o = n.n(s),
    a = n(831209),
    l = n(481060),
    c = n(367907),
    d = n(177862),
    x = n(981631),
    u = n(388032),
    h = n(147612);
function p(e) {
    let { guildId: t, transitionState: n, onClose: s } = e,
        [p, j] = i.useState([]),
        [m, N] = i.useState(),
        _ = [
            {
                text: u.NW.string(u.t['//3pvr']),
                value: d.C2.DM_SPAM
            },
            {
                text: u.NW.string(u.t.SdVsio),
                value: d.C2.MENTION_SPAM
            },
            {
                text: u.NW.string(u.t.uTiSVF),
                value: d.C2.CHANNEL_SPAM
            },
            {
                text: u.NW.string(u.t.GQczU1),
                value: d.C2.SUS_NEW_MEMBERS
            },
            {
                text: u.NW.string(u.t.AAgqy8),
                value: d.C2.CHANGING_SETTINGS
            },
            {
                text: u.NW.string(u.t.ryPKb2),
                value: d.C2.OTHER
            }
        ];
    function C(e) {
        p.includes(e) ? j((t) => t.filter((t) => t !== e)) : j((t) => [...t, e]);
    }
    return null == t
        ? (s(), null)
        : (0, r.jsxs)(l.Y0X, {
              transitionState: n,
              size: l.CgR.MEDIUM,
              children: [
                  (0, r.jsx)(l.xBx, {
                      separator: !0,
                      children: (0, r.jsxs)('div', {
                          className: h.headerContainer,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: h.headerText,
                                  children: [
                                      (0, r.jsx)(l.mBM, {
                                          size: 'xs',
                                          color: a.Z.INTERACTIVE_NORMAL
                                      }),
                                      (0, r.jsx)(l.X6q, {
                                          color: 'header-primary',
                                          variant: 'heading-md/semibold',
                                          children: u.NW.string(u.t.f5hd9P)
                                      })
                                  ]
                              }),
                              (0, r.jsx)(l.P3F, {
                                  onClick: s,
                                  children: (0, r.jsx)(l.Dio, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: h.closeIcon
                                  })
                              })
                          ]
                      })
                  }),
                  (0, r.jsx)(l.hzk, {
                      children: (0, r.jsx)('div', {
                          className: h.options,
                          children: _.map((e) => {
                              let { text: t, value: n } = e;
                              return (0, r.jsxs)(
                                  'div',
                                  {
                                      className: o()(h.optionContainer, { [h.optionContainerOther]: n === d.C2.OTHER }),
                                      children: [
                                          (0, r.jsxs)(l.P3F, {
                                              className: h.optionText,
                                              onClick: () => C(n),
                                              children: [
                                                  (0, r.jsx)('div', {
                                                      children: (0, r.jsx)(l.XZJ, {
                                                          type: l.XZJ.Types.INVERTED,
                                                          size: 20,
                                                          value: p.includes(n),
                                                          onChange: () => C(n)
                                                      })
                                                  }),
                                                  (0, r.jsx)(l.Text, {
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
                                                  children: (0, r.jsx)(l.Kx8, {
                                                      className: h.serverLockdownReasonText,
                                                      placeholder: u.NW.string(u.t['PAM+JS']),
                                                      onChange: (e) => N(e),
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
                  (0, r.jsx)(l.mzw, {
                      children: (0, r.jsx)(l.zxk, {
                          onClick: function () {
                              (0, c.yw)(x.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                                  raid_lockdown_feedback_type: p,
                                  raid_lockdown_feedback_other_reason: m,
                                  guild_id: t
                              }),
                                  s();
                          },
                          color: l.zxk.Colors.BRAND,
                          look: l.zxk.Looks.FILLED,
                          submitting: !1,
                          children: u.NW.string(u.t.nAt0rK)
                      })
                  })
              ]
          });
}
