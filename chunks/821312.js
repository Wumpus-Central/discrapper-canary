n.d(t, { Z: () => x }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(831209),
    o = n(481060),
    d = n(367907),
    c = n(177862),
    u = n(981631),
    m = n(388032),
    h = n(20078);
function x(e) {
    let { guildId: t, transitionState: n, onClose: a } = e,
        [x, g] = l.useState([]),
        [p, b] = l.useState(),
        _ = [
            {
                text: m.intl.string(m.t['//3pvr']),
                value: c.C2.DM_SPAM
            },
            {
                text: m.intl.string(m.t.SdVsio),
                value: c.C2.MENTION_SPAM
            },
            {
                text: m.intl.string(m.t.uTiSVF),
                value: c.C2.CHANNEL_SPAM
            },
            {
                text: m.intl.string(m.t.GQczU1),
                value: c.C2.SUS_NEW_MEMBERS
            },
            {
                text: m.intl.string(m.t.AAgqy8),
                value: c.C2.CHANGING_SETTINGS
            },
            {
                text: m.intl.string(m.t.ryPKb2),
                value: c.C2.OTHER
            }
        ];
    function f(e) {
        x.includes(e) ? g((t) => t.filter((t) => t !== e)) : g((t) => [...t, e]);
    }
    return null == t
        ? (a(), null)
        : (0, i.jsxs)(o.Y0X, {
              transitionState: n,
              size: o.CgR.MEDIUM,
              children: [
                  (0, i.jsx)(o.xBx, {
                      separator: !0,
                      children: (0, i.jsxs)('div', {
                          className: h.headerContainer,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: h.headerText,
                                  children: [
                                      (0, i.jsx)(o.mBM, {
                                          size: 'xs',
                                          color: s.Z.INTERACTIVE_NORMAL
                                      }),
                                      (0, i.jsx)(o.X6q, {
                                          color: 'header-primary',
                                          variant: 'heading-md/semibold',
                                          children: m.intl.string(m.t.f5hd9P)
                                      })
                                  ]
                              }),
                              (0, i.jsx)(o.P3F, {
                                  onClick: a,
                                  children: (0, i.jsx)(o.Dio, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: h.closeIcon
                                  })
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)(o.hzk, {
                      children: (0, i.jsx)('div', {
                          className: h.options,
                          children: _.map((e) => {
                              let { text: t, value: n } = e;
                              return (0, i.jsxs)(
                                  'div',
                                  {
                                      className: r()(h.optionContainer, { [h.optionContainerOther]: n === c.C2.OTHER }),
                                      children: [
                                          (0, i.jsxs)(o.P3F, {
                                              className: h.optionText,
                                              onClick: () => f(n),
                                              children: [
                                                  (0, i.jsx)('div', {
                                                      children: (0, i.jsx)(o.XZJ, {
                                                          type: o.XZJ.Types.INVERTED,
                                                          size: 20,
                                                          value: x.includes(n),
                                                          onChange: () => f(n)
                                                      })
                                                  }),
                                                  (0, i.jsx)(o.Text, {
                                                      variant: 'text-md/medium',
                                                      color: x.includes(n) ? 'interactive-active' : 'interactive-normal',
                                                      children: t
                                                  })
                                              ]
                                          }),
                                          n === c.C2.OTHER &&
                                              x.includes(c.C2.OTHER) &&
                                              (0, i.jsx)('div', {
                                                  className: h.textboxContainer,
                                                  children: (0, i.jsx)(o.Kx8, {
                                                      className: h.serverLockdownReasonText,
                                                      placeholder: m.intl.string(m.t['PAM+JS']),
                                                      onChange: (e) => b(e),
                                                      value: p,
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
                  (0, i.jsx)(o.mzw, {
                      children: (0, i.jsx)(o.zxk, {
                          onClick: function () {
                              (0, d.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                                  raid_lockdown_feedback_type: x,
                                  raid_lockdown_feedback_other_reason: p,
                                  guild_id: t
                              }),
                                  a();
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
