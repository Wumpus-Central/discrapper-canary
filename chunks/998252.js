n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(521933),
    a = n(452357),
    l = n(985018),
    o = n(139674);
function c(e) {
    let { currentUser: t } = e;
    return t.isClaimed()
        ? null == t.email
            ? null
            : t.verified
              ? void 0
              : (0, i.jsxs)(s.wx6, {
                    type: "warning",
                    children: [
                        (0, i.jsx)(s.Heading, { variant: "heading-md/medium", children: l.intl.string(l.t.tuGzBT) }),
                        (0, i.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            className: o.PA,
                            children: l.intl.string(l.t.NAzplE),
                        }),
                        (0, i.jsx)(a.A, { size: "sm", variant: "secondary" }),
                    ],
                })
        : (0, i.jsxs)(s.wx6, {
              type: "critical",
              children: [
                  (0, i.jsx)(s.Heading, { variant: "heading-md/medium", children: l.intl.string(l.t["/3qnL/"]) }),
                  (0, i.jsx)(s.Text, {
                      variant: "text-sm/normal",
                      className: o.PA,
                      children: l.intl.string(l.t.qKs3vg),
                  }),
                  (0, i.jsx)(s.Button, {
                      variant: "secondary",
                      size: "sm",
                      text: l.intl.string(l.t["7psymi"]),
                      onClick: () => r.A.openClaimAccountModal(),
                  }),
              ],
          });
}
