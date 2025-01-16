n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(831209),
    l = n(481060),
    d = n(367907),
    c = n(177862),
    x = n(981631),
    u = n(388032),
    h = n(506452);
function C(e) {
    let { guildId: t, transitionState: n, onClose: s } = e,
        [C, m] = o.useState([]),
        [p, _] = o.useState(),
        j = [
            {
                text: u.intl.string(u.t['//3pvr']),
                value: c.C2.DM_SPAM
            },
            {
                text: u.intl.string(u.t.SdVsio),
                value: c.C2.MENTION_SPAM
            },
            {
                text: u.intl.string(u.t.uTiSVF),
                value: c.C2.CHANNEL_SPAM
            },
            {
                text: u.intl.string(u.t.GQczU1),
                value: c.C2.SUS_NEW_MEMBERS
            },
            {
                text: u.intl.string(u.t.AAgqy8),
                value: c.C2.CHANGING_SETTINGS
            },
            {
                text: u.intl.string(u.t.ryPKb2),
                value: c.C2.OTHER
            }
        ];
    function g(e) {
        C.includes(e) ? m((t) => t.filter((t) => t !== e)) : m((t) => [...t, e]);
    }
    return null == t
        ? (s(), null)
        : (0, i.jsxs)(l.ModalRoot, {
              transitionState: n,
              size: l.ModalSize.MEDIUM,
              children: [
                  (0, i.jsx)(l.ModalHeader, {
                      separator: !0,
                      children: (0, i.jsxs)('div', {
                          className: h.headerContainer,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: h.headerText,
                                  children: [
                                      (0, i.jsx)(l.LockIcon, {
                                          size: 'xs',
                                          color: a.Z.INTERACTIVE_NORMAL
                                      }),
                                      (0, i.jsx)(l.Heading, {
                                          color: 'header-primary',
                                          variant: 'heading-md/semibold',
                                          children: u.intl.string(u.t.f5hd9P)
                                      })
                                  ]
                              }),
                              (0, i.jsx)(l.Clickable, {
                                  onClick: s,
                                  children: (0, i.jsx)(l.XSmallIcon, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: h.closeIcon
                                  })
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)(l.ModalContent, {
                      children: (0, i.jsx)('div', {
                          className: h.options,
                          children: j.map((e) => {
                              let { text: t, value: n } = e;
                              return (0, i.jsxs)(
                                  'div',
                                  {
                                      className: r()(h.optionContainer, { [h.optionContainerOther]: n === c.C2.OTHER }),
                                      children: [
                                          (0, i.jsxs)(l.Clickable, {
                                              className: h.optionText,
                                              onClick: () => g(n),
                                              children: [
                                                  (0, i.jsx)('div', {
                                                      children: (0, i.jsx)(l.Checkbox, {
                                                          type: l.Checkbox.Types.INVERTED,
                                                          size: 20,
                                                          value: C.includes(n),
                                                          onChange: () => g(n)
                                                      })
                                                  }),
                                                  (0, i.jsx)(l.Text, {
                                                      variant: 'text-md/medium',
                                                      color: C.includes(n) ? 'interactive-active' : 'interactive-normal',
                                                      children: t
                                                  })
                                              ]
                                          }),
                                          n === c.C2.OTHER &&
                                              C.includes(c.C2.OTHER) &&
                                              (0, i.jsx)('div', {
                                                  className: h.textboxContainer,
                                                  children: (0, i.jsx)(l.TextArea, {
                                                      className: h.serverLockdownReasonText,
                                                      placeholder: u.intl.string(u.t['PAM+JS']),
                                                      onChange: (e) => _(e),
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
                  (0, i.jsx)(l.ModalFooter, {
                      children: (0, i.jsx)(l.Button, {
                          onClick: function () {
                              (0, d.yw)(x.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                                  raid_lockdown_feedback_type: C,
                                  raid_lockdown_feedback_other_reason: p,
                                  guild_id: t
                              }),
                                  s();
                          },
                          color: l.Button.Colors.BRAND,
                          look: l.Button.Looks.FILLED,
                          submitting: !1,
                          children: u.intl.string(u.t.nAt0rK)
                      })
                  })
              ]
          });
}
