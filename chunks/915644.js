n.d(t, {
    A: () => A,
    C: () => x,
}),
    n(228524);
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(554146),
    s = n(397927),
    c = n(826673),
    d = n(367727),
    o = n(997509),
    u = n(307879),
    f = n(395504),
    b = n(652215),
    h = n(49999),
    p = n(985018),
    g = n(932726),
    m = n(529732);
function x(e) {
    return (0, f.Xn)(e) ? 250 : 152;
}
function A(e) {
    let { guild: t } = e,
        n = (0, f.Xn)(t.id),
        r = (0, c.JZ)(a.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        x = n && !r ? a.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : a.M.CHANNEL_BROWSER_NUX;
    (0, d.Vh)(x);
    let A = n
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(s.Heading, {
                              className: g.R_,
                              color: "always-white",
                              variant: "heading-lg/semibold",
                              children: p.intl.string(p.t.AalzkJ),
                          }),
                          (0, l.jsx)(s.Text, {
                              className: g.h_,
                              variant: "text-md/normal",
                              color: "always-white",
                              children: p.intl.string(p.t.CXh95Z),
                          }),
                          (0, l.jsx)(s.Button, {
                              variant: "overlay-primary",
                              onClick: () => {
                                  o.A.open(t.id, b.BEX.ONBOARDING), (0, c.Dr)(x, { dismissAction: h.i.PRIMARY });
                              },
                              text: p.intl.string(p.t["+OtO4e"]),
                          }),
                      ],
                  }),
                  (0, l.jsx)(u.M, { isTooltip: !0 }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: g.FQ,
              children: [
                  (0, l.jsx)("img", {
                      width: 180,
                      className: g.Sl,
                      src: m,
                      alt: "",
                      "aria-hidden": !0,
                  }),
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(s.Heading, {
                              className: g.R_,
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              children: p.intl.string(p.t.utqWEC),
                          }),
                          (0, l.jsx)(s.Text, {
                              variant: "text-md/normal",
                              color: "text-default",
                              children: p.intl.string(p.t["+9etcM"]),
                          }),
                          (0, l.jsx)(s.Text, {
                              className: g.uN,
                              variant: "text-md/normal",
                              color: "text-default",
                              children: p.intl.format(p.t.Z0axjk, {}),
                          }),
                      ],
                  }),
              ],
          });
    return (0, l.jsxs)("div", {
        className: i()(g.kL, { [g.xY]: n }),
        children: [
            (0, l.jsx)(s.DUT, {
                className: g.b,
                onClick: () => {
                    (0, c.Dr)(x, { dismissAction: h.i.DISMISS });
                },
                children: (0, l.jsx)(s.PGe, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
            A,
        ],
    });
}
