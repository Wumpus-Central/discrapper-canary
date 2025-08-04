(n.d(e, { Z: () => O }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(82659),
    o = n(755721),
    c = n(481060),
    d = n(367907),
    u = n(177862),
    p = n(981631),
    b = n(388032),
    f = n(147612);
function O(t) {
    let { guildId: e, transitionState: n, onClose: l } = t,
        [O, g] = i.useState([]),
        [_, h] = i.useState(),
        y = [
            {
                text: b.intl.string(b.t['//3pvr']),
                value: u.C2.DM_SPAM
            },
            {
                text: b.intl.string(b.t.SdVsio),
                value: u.C2.MENTION_SPAM
            },
            {
                text: b.intl.string(b.t.uTiSVF),
                value: u.C2.CHANNEL_SPAM
            },
            {
                text: b.intl.string(b.t.GQczU1),
                value: u.C2.SUS_NEW_MEMBERS
            },
            {
                text: b.intl.string(b.t.AAgqy8),
                value: u.C2.CHANGING_SETTINGS
            },
            {
                text: b.intl.string(b.t.ryPKb2),
                value: u.C2.OTHER
            }
        ];
    function x(t) {
        O.includes(t) ? g((e) => e.filter((e) => e !== t)) : g((e) => [...e, t]);
    }
    return null == e
        ? (l(), null)
        : (0, r.jsx)(a.Modal, {
              transitionState: n,
              title: b.intl.string(b.t.f5hd9P),
              actions: [
                  {
                      text: b.intl.string(b.t['ETE/oK']),
                      onClick: l,
                      variant: 'secondary'
                  },
                  {
                      text: b.intl.string(b.t.nAt0rK),
                      onClick: function () {
                          ((0, d.yw)(p.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                              raid_lockdown_feedback_type: O,
                              raid_lockdown_feedback_other_reason: _,
                              guild_id: e
                          }),
                              l());
                      },
                      disabled: 0 === O.length
                  }
              ],
              onClose: l,
              children: (0, r.jsx)(c.Kqy, {
                  gap: 8,
                  children: y.map((t) => {
                      let { text: e, value: n } = t;
                      return (0, r.jsxs)(
                          'div',
                          {
                              className: s()(f.optionContainer, { [f.optionContainerOther]: n === u.C2.OTHER }),
                              children: [
                                  (0, r.jsxs)(c.P3F, {
                                      className: f.optionText,
                                      onClick: () => x(n),
                                      children: [
                                          (0, r.jsx)('div', {
                                              children: (0, r.jsx)(c.XZJ, {
                                                  type: c.XZJ.Types.INVERTED,
                                                  size: 20,
                                                  value: O.includes(n),
                                                  onChange: () => x(n)
                                              })
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              variant: 'text-md/medium',
                                              color: O.includes(n) ? 'interactive-active' : 'interactive-normal',
                                              children: e
                                          })
                                      ]
                                  }),
                                  n === u.C2.OTHER &&
                                      O.includes(u.C2.OTHER) &&
                                      (0, r.jsx)('div', {
                                          className: f.textboxContainer,
                                          children: (0, r.jsx)(o.iS, {
                                              className: f.serverLockdownReasonText,
                                              placeholder: b.intl.string(b.t['PAM+JS']),
                                              onChange: (t) => h(t),
                                              value: _,
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
          });
}
