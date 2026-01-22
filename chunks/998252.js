n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(521933),
    s = n(452357),
    o = n(985018),
    l = n(139674);
function c(e) {
    let { currentUser: t } = e;
    return t.isClaimed()
        ? null == t.email
            ? null
            : t.verified
              ? void 0
              : (0, r.jsxs)(i.wx6, {
                    type: "warning",
                    children: [
                        (0, r.jsx)(i.Heading, {
                            variant: "heading-md/medium",
                            children: o.intl.string(o.t.tuGzBT),
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            className: l.PA,
                            children: o.intl.string(o.t.NAzplE),
                        }),
                        (0, r.jsx)(s.A, {
                            size: "sm",
                            variant: "secondary",
                        }),
                    ],
                })
        : (0, r.jsxs)(i.wx6, {
              type: "critical",
              children: [
                  (0, r.jsx)(i.Heading, {
                      variant: "heading-md/medium",
                      children: o.intl.string(o.t["/3qnL/"]),
                  }),
                  (0, r.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      className: l.PA,
                      children: o.intl.string(o.t.qKs3vg),
                  }),
                  (0, r.jsx)(i.Button, {
                      variant: "secondary",
                      size: "sm",
                      text: o.intl.string(o.t["7psymi"]),
                      onClick: () => a.A.openClaimAccountModal(),
                  }),
              ],
          });
}
