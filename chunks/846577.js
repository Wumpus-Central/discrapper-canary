n.d(t, { P: () => u });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(477782),
    a = n(966107),
    d = n(287809),
    s = n(985018);
function u(e) {
    let t = (0, i.bG)([d.default], () => d.default.getCurrentUser());
    return t?.isStaff() !== !0
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !e.isMessageRequest &&
                      (0, r.jsx)(l.Dr, {
                          id: "mark-as-message-request",
                          label: s.intl.string(s.t.L6623r),
                          action: () => (0, a.Sk)(e.id),
                      }),
                  (0, r.jsx)(l.Dr, {
                      id: "clear-message-request",
                      label: s.intl.string(s.t["85YWlY"]),
                      action: () => (0, a.JH)(e.id),
                  }),
              ],
          });
}
