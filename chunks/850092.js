"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(935520),
    o = n(429521),
    l = n(985018),
    u = n(74209);
function c(e) {
    let { userId: t, onSendWave: n } = e,
        { enabled: c } = a.A.useConfig({ location: "Friend Request Toast" }),
        [d, _] = i.useState(null),
        [f, p] = i.useState(!1),
        h = (0, o.A)(t, "User Profile Friend Request Toast"),
        m = i.useCallback(async () => {
            p(!0), await h(n, _), p(!1);
        }, [n, h]);
    return c
        ? (0, r.jsx)("div", {
              className: u.$J,
              children:
                  null != d
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    className: u.i3,
                                    children: (0, r.jsx)(s.PGe, { color: s.LU0.colors.STATUS_DANGER }),
                                }),
                                (0, r.jsx)(s.Text, { variant: "text-sm/normal", color: "text-muted", children: d }),
                            ],
                        })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: l.intl.string(l.t.XcTHmQ),
                                }),
                                (0, r.jsx)(s.Button, {
                                    disabled: f,
                                    variant: "secondary",
                                    text: l.intl.string(l.t.pVlP58),
                                    size: "sm",
                                    onClick: m,
                                }),
                            ],
                        }),
          })
        : null;
}
