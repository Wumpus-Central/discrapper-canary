t.d(n, { A: () => v, C: () => j });
var l = t(627968);
t(64700);
var i = t(503698),
    s = t.n(i),
    a = t(554146),
    r = t(534514),
    d = t(834730),
    c = t(821609),
    o = t(939249),
    u = t(789645),
    _ = t(826673),
    h = t(367727),
    m = t(997509),
    x = t(307879),
    A = t(395504),
    C = t(652215),
    g = t(49999),
    f = t(985018),
    p = t(176771),
    N = t(529732);
function j(e) {
    return (0, A.Xn)(e) ? 250 : 152;
}
function v(e) {
    let { guild: n } = e,
        t = (0, A.Xn)(n.id),
        i = (0, _.JZ)(a.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        j = t && !i ? a.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : a.M.CHANNEL_BROWSER_NUX;
    (0, h.Vh)(j);
    let v = t
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(r.D, {
                              className: p.R_,
                              color: "always-white",
                              variant: "heading-lg/semibold",
                              children: f.intl.string(f.t.AalzkJ),
                          }),
                          (0, l.jsx)(d.E, {
                              className: p.h_,
                              variant: "text-md/normal",
                              color: "always-white",
                              children: f.intl.string(f.t.CXh95Z),
                          }),
                          (0, l.jsx)(c.$, {
                              variant: "overlay-primary",
                              onClick: () => {
                                  m.A.open(n.id, C.BEX.ONBOARDING), (0, _.Dr)(j, { dismissAction: g.i.PRIMARY });
                              },
                              text: f.intl.string(f.t["+OtO4e"]),
                          }),
                      ],
                  }),
                  (0, l.jsx)(x.M, { isTooltip: !0 }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: p.FQ,
              children: [
                  (0, l.jsx)("img", { width: 180, className: p.Sl, src: N, alt: "", "aria-hidden": !0 }),
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(r.D, {
                              className: p.R_,
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              children: f.intl.string(f.t.utqWEC),
                          }),
                          (0, l.jsx)(d.E, {
                              variant: "text-md/normal",
                              color: "text-default",
                              children: f.intl.string(f.t["+9etcM"]),
                          }),
                          (0, l.jsx)(d.E, {
                              className: p.uN,
                              variant: "text-md/normal",
                              color: "text-default",
                              children: f.intl.format(f.t.Z0axjk, {}),
                          }),
                      ],
                  }),
              ],
          });
    return (0, l.jsxs)("div", {
        className: s()(p.kL, { [p.xY]: t }),
        children: [
            (0, l.jsx)(o.D, {
                className: p.b,
                onClick: () => {
                    (0, _.Dr)(j, { dismissAction: g.i.DISMISS });
                },
                children: (0, l.jsx)(u.P, { size: "md", color: "currentColor" }),
            }),
            v,
        ],
    });
}
