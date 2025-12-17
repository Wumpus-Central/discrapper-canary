n.d(t, { default: () => m }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(793030),
    a = n(481060),
    o = n(367907),
    s = n(177862),
    c = n(981631),
    d = n(388032),
    u = n(247873);
function m(e) {
    let { guildId: t, transitionState: n, onClose: m } = e,
        [b, p] = r.useState([]),
        [g, f] = r.useState(),
        h = [
            {
                label: d.intl.string(d.t["//3pvi"]),
                value: s.C2.DM_SPAM,
            },
            {
                label: d.intl.string(d.t.SdVsip),
                value: s.C2.MENTION_SPAM,
            },
            {
                label: d.intl.string(d.t.uTiSVL),
                value: s.C2.CHANNEL_SPAM,
            },
            {
                label: d.intl.string(d.t.GQczU8),
                value: s.C2.SUS_NEW_MEMBERS,
            },
            {
                label: d.intl.string(d.t.AAgqy3),
                value: s.C2.CHANGING_SETTINGS,
            },
            {
                label: d.intl.string(d.t.ryPKb7),
                value: s.C2.OTHER,
            },
        ],
        x = r.useCallback((e) => {
            p(e);
        }, []);
    return null == t
        ? (m(), null)
        : (0, i.jsx)(l.Modal, {
              transitionState: n,
              title: d.intl.string(d.t.f5hd9P),
              actions: [
                  {
                      text: d.intl.string(d.t["ETE/oC"]),
                      onClick: m,
                      variant: "secondary",
                  },
                  {
                      text: d.intl.string(d.t.nAt0rE),
                      onClick: function () {
                          (0, o.yw)(c.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                              raid_lockdown_feedback_type: b,
                              raid_lockdown_feedback_other_reason: g,
                              guild_id: t,
                          }),
                              m();
                      },
                      disabled: 0 === b.length,
                  },
              ],
              onClose: m,
              children: (0, i.jsxs)(a.Kqy, {
                  gap: 8,
                  children: [
                      (0, i.jsx)(a.cOn, {
                          selectedValues: b,
                          onChange: x,
                          options: h,
                      }),
                      b.includes(s.C2.OTHER) &&
                          (0, i.jsx)("div", {
                              className: u.textboxContainer,
                              children: (0, i.jsx)(a.Kx8, {
                                  placeholder: d.intl.string(d.t["PAM+JR"]),
                                  onChange: f,
                                  value: g,
                                  autoFocus: !0,
                              }),
                          }),
                  ],
              }),
          });
}
