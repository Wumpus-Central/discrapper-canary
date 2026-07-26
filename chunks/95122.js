r.d(e, { A: () => x });
var i = r(627968);
r(64700);
var n = r(17928),
    l = r(477782),
    s = r(287809),
    a = r(562465),
    u = r(349435),
    d = r(652215),
    c = r(486227),
    o = r(375708),
    g = r(966107),
    f = r(178186),
    _ = r(617641),
    j = r(452082),
    A = r(544231),
    b = r(74114);
function x(t) {
    let e,
        r,
        x,
        R,
        h,
        E,
        T,
        { channel: m } = t,
        p = (0, n.bG)([s.default], () => s.default.getCurrentUser()),
        I =
            ((e = (0, n.bG)([s.default], () => s.default.getCurrentUser())),
            e?.isStaff() !== !0
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          !m.isMessageRequest &&
                              (0, i.jsx)(l.Dr, {
                                  id: "mark-as-message-request",
                                  label: o.intl.string(o.t.L6623r),
                                  action: () => (0, g.Sk)(m.id),
                              }),
                          (0, i.jsx)(l.Dr, {
                              id: "clear-message-request",
                              label: o.intl.string(o.t["85YWlY"]),
                              action: () => (0, g.JH)(m.id),
                          }),
                      ],
                  })),
        C = (function (t) {
            var e;
            let r,
                a,
                d,
                c =
                    ((e = t),
                    (r = (0, _.Lc)({ location: "context-menu-item" })),
                    (a = (0, n.bG)([s.default], () => s.default.getCurrentUser())),
                    (d = (0, j.j)(e.id, "context-menu-item")),
                    a?.isStaff() === !0 && r && e.isDM()
                        ? {
                              isTier1: d?.type === u._j.INAPPROPRIATE_CONVERSATION_TIER_1,
                              isTier2: d?.type === u._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                          }
                        : null),
                g = (0, _.Lc)({ location: "inappropriate_conversation_context_menu" });
            if (null === c || !g) return null;
            let { isTier1: A, isTier2: b } = c;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    !A &&
                        (0, i.jsx)(l.Dr, {
                            id: "mark-as-tier-1-inappro",
                            label: o.intl.string(o.t.EuzCET),
                            action: () => (0, f.Rw)(t.id, u._j.INAPPROPRIATE_CONVERSATION_TIER_1),
                        }),
                    !b &&
                        (0, i.jsx)(l.Dr, {
                            id: "mark-as-tier-2-inappro",
                            label: o.intl.string(o.t["tBw/1i"]),
                            action: () => (0, f.Rw)(t.id, u._j.INAPPROPRIATE_CONVERSATION_TIER_2),
                        }),
                ],
            });
        })(m),
        D =
            ((r = (0, n.bG)([s.default], () => s.default.getCurrentUser())),
            (x = (0, b.l)(m.id)),
            r?.isStaff() === !0 && m.isDM() && null == x
                ? (0, i.jsx)(l.Dr, {
                      id: "mark-as-stranger-danger",
                      label: o.intl.string(o.t.CgWmmT),
                      action: () => (0, A.Ju)(m.id),
                  })
                : null),
        N =
            ((R = (0, n.bG)([s.default], () => s.default.getCurrentUser())),
            (h = (0, n.bG)([u.Ay], () => u.Ay.getChannelSafetyWarnings(m.id))),
            R?.isStaff() !== !0 || null == h || 0 === h.length
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(l.Dr, {
                              id: "delete-safety-warnings",
                              label: o.intl.string(o.t.g7o9bs),
                              action: () => (0, f.Ey)(m.id),
                          }),
                          (0, i.jsx)(l.Dr, {
                              id: "clear-safety-warnings",
                              label: o.intl.string(o.t.VuSvGu),
                              action: () => (0, A.WJ)(m.id),
                          }),
                      ],
                  })),
        S =
            ((E = (0, n.bG)([s.default], () => s.default.getCurrentUser())),
            (T = (0, c.E)(m.id)),
            E?.isStaff() === !0 && m.isDM() && null == T
                ? (0, i.jsx)(l.Dr, {
                      id: "mark-as-likely-ato",
                      label: o.intl.string(o.t.AWKKgc),
                      action: () => {
                          var t;
                          return (
                              (t = m.id),
                              a.Bo.post({
                                  url: d.Rsh.ADD_SAFETY_WARNING(t),
                                  body: { safety_warning_type: u._j.LIKELY_ATO },
                                  rejectWithError: !1,
                              })
                          );
                      },
                  })
                : null);
    return p?.isStaff() !== !0
        ? null
        : (0, i.jsxs)(l.Dr, {
              id: "dev tools",
              label: "Dev Tools",
              children: [
                  (0, i.jsx)(l.rX, { children: I }),
                  (0, i.jsx)(l.rX, { children: N }),
                  (0, i.jsx)(l.rX, { children: D }),
                  (0, i.jsx)(l.rX, { children: C }),
                  (0, i.jsx)(l.rX, { children: S }),
              ],
          });
}
