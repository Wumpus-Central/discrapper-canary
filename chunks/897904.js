"use strict";
n.d(t, { fs: () => I, XG: () => S, Uf: () => T });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(939249),
    o = n(789645),
    l = n(534514),
    u = n(834730),
    c = n(241524),
    d = n(166532),
    _ = n(19311),
    h = n(482132),
    f = n(4126),
    p = n(376747),
    E = n(375708),
    m = n(702361),
    g = n(575650),
    A = n(938430);
let I = (e) => {
        let { step: t, onClose: n } = e,
            r = (0, c.A)(p.T);
        return t === d.pn.CONFIRM || t === d.pn.BENEFITS
            ? (0, i.jsx)("div", {})
            : (0, i.jsxs)("div", {
                  className: s()(m.N1, g.GI),
                  children: [
                      !r &&
                          (0, i.jsx)("div", {
                              className: m.oZ,
                              "aria-hidden": "true",
                              children: (0, i.jsx)("img", {
                                  src: "/assets/6a6a49ffafe96618.svg",
                                  alt: "",
                                  className: m.F0,
                              }),
                          }),
                      (0, i.jsx)(a.D, {
                          className: m.G3,
                          onClick: () => n(),
                          "aria-label": E.intl.string(E.t.cpT0Cq),
                          children: (0, i.jsx)(o.P, { size: "md", color: "currentColor", className: m.ut }),
                      }),
                  ],
              });
    },
    T = (e) => {
        let {
            icon: t,
            storeListingBenefits: n,
            skuBenefits: r,
            application: s,
            title: a,
            subtitle: o,
            description: l,
        } = e;
        return null == s
            ? null
            : (0, i.jsx)("div", {
                  className: m.RP,
                  children: (0, i.jsxs)(f.$K, {
                      children: [
                          (0, i.jsx)(f.KF, { application: s, asset: t }),
                          (0, i.jsx)(f.kj, { children: a }),
                          (0, i.jsx)(f.ri, {}),
                          (0, i.jsx)(f.Mx, { title: o, description: l }),
                          (0, i.jsx)(f.iH, { applicationId: s.id, storeListingBenefits: n, skuBenefits: r }),
                      ],
                  }),
              });
    };
function S(e) {
    let { tierName: t, onConfirm: n, subscription: r } = e;
    return (0, i.jsxs)("div", {
        className: m.NV,
        children: [
            (0, i.jsx)("img", { src: A, alt: "", width: 300, height: 126 }),
            (0, i.jsx)(l.D, {
                className: m.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: E.intl.format(E.t.wLFT6z, { tier: t }),
            }),
            (0, i.jsx)(u.E, {
                className: m.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: E.intl.format(E.t.OsAK9h, { timestamp: r?.currentPeriodEnd }),
            }),
            (0, i.jsx)(h.UX, {
                children: (0, i.jsx)(_.Ay, {
                    onPrimary: n,
                    primaryCTA: _.ti.CONTINUE,
                    primaryText: E.intl.string(E.t["JtWl+a"]),
                }),
            }),
        ],
    });
}
