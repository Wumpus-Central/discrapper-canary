n.d(e, { Z: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(793030),
    o = n(755721),
    c = n(481060),
    d = n(367907),
    u = n(177862),
    p = n(981631),
    b = n(388032),
    g = n(882313);
function f(t) {
    let { guildId: e, transitionState: n, onClose: l } = t,
        [f, O] = i.useState([]),
        [h, _] = i.useState(),
        j = [
            {
                text: b.intl.string(b.t["//3pvr"]),
                value: u.C2.DM_SPAM,
            },
            {
                text: b.intl.string(b.t.SdVsio),
                value: u.C2.MENTION_SPAM,
            },
            {
                text: b.intl.string(b.t.uTiSVF),
                value: u.C2.CHANNEL_SPAM,
            },
            {
                text: b.intl.string(b.t.GQczU1),
                value: u.C2.SUS_NEW_MEMBERS,
            },
            {
                text: b.intl.string(b.t.AAgqy8),
                value: u.C2.CHANGING_SETTINGS,
            },
            {
                text: b.intl.string(b.t.ryPKb2),
                value: u.C2.OTHER,
            },
        ];
    function x(t) {
        f.includes(t) ? O((e) => e.filter((e) => e !== t)) : O((e) => [...e, t]);
    }
    return null == e
        ? (l(), null)
        : (0, r.jsx)(s.Modal, {
              transitionState: n,
              title: b.intl.string(b.t.f5hd9P),
              actions: [
                  {
                      text: b.intl.string(b.t["ETE/oK"]),
                      onClick: l,
                      variant: "secondary",
                  },
                  {
                      text: b.intl.string(b.t.nAt0rK),
                      onClick: function () {
                          (0, d.yw)(p.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                              raid_lockdown_feedback_type: f,
                              raid_lockdown_feedback_other_reason: h,
                              guild_id: e,
                          }),
                              l();
                      },
                      disabled: 0 === f.length,
                  },
              ],
              onClose: l,
              children: (0, r.jsx)(c.Kqy, {
                  gap: 8,
                  children: j.map((t) => {
                      let { text: e, value: n } = t;
                      return (0, r.jsxs)(
                          "div",
                          {
                              className: a()(g.optionContainer, { [g.optionContainerOther]: n === u.C2.OTHER }),
                              children: [
                                  (0, r.jsxs)(c.P3F, {
                                      className: g.optionText,
                                      onClick: () => x(n),
                                      children: [
                                          (0, r.jsx)("div", {
                                              children: (0, r.jsx)(o.$q, {
                                                  type: o.M0.INVERTED,
                                                  size: 20,
                                                  value: f.includes(n),
                                                  onChange: () => x(n),
                                              }),
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              variant: "text-md/medium",
                                              color: f.includes(n) ? "interactive-active" : "interactive-normal",
                                              children: e,
                                          }),
                                      ],
                                  }),
                                  n === u.C2.OTHER &&
                                      f.includes(u.C2.OTHER) &&
                                      (0, r.jsx)("div", {
                                          className: g.textboxContainer,
                                          children: (0, r.jsx)(c.Kx8, {
                                              placeholder: b.intl.string(b.t["PAM+JS"]),
                                              onChange: _,
                                              value: h,
                                              autoFocus: !0,
                                          }),
                                      }),
                              ],
                          },
                          n,
                      );
                  }),
              }),
          });
}
