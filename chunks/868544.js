c.r(a), c.d(a, { default: () => m });
var d = c(477900);
c(582128);
let t =
    "https://cdn.discordapp.com/assets/content/b384cf57c336aee4e08cffcc1f0e615de87443fd62de7dd17683f9cd327be10c.png";
function s(e) {
    let { alt: a, ariaLabel: c, ariaHidden: s, role: n, width: i = 100, height: r = 100 } = e;
    return (0, d.jsx)("img", {
        style: { width: i, height: r },
        src: t,
        srcSet: `${t} 1x, https://cdn.discordapp.com/assets/content/2ea590b597fe6ff28cb97183003f1f15cdf6db437c61c6744be254c749626597.png 2x`,
        alt: a,
        "aria-label": c,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
let n =
    "https://cdn.discordapp.com/assets/content/bb28e23bbe0d40370f9607c53feb99aae654241956976b88b103c853daccfc83.png";
function i(e) {
    let { alt: a, ariaLabel: c, ariaHidden: t, role: s, width: i = 100, height: r = 100 } = e;
    return (0, d.jsx)("img", {
        style: { width: i, height: r },
        src: n,
        srcSet: `${n} 1x, https://cdn.discordapp.com/assets/content/e5821acfe02b78af6a917a2df8dd45b1fed7f8c1af5c904037eb3b7b7c8331d6.png 2x`,
        alt: a,
        "aria-label": c,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
let r =
    "https://cdn.discordapp.com/assets/content/11e214829b6718d48c5575507df29b807cc8f961d5c880ddb37d368dd8107fb3.png";
function l(e) {
    let { alt: a, ariaLabel: c, ariaHidden: t, role: s, width: n = 100, height: i = 100 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: i },
        src: r,
        srcSet: `${r} 1x, https://cdn.discordapp.com/assets/content/f0a064a784d6032a59b99efc37a7993e0e2c3d73b52ecc27dc9898fc4138ecfb.png 2x`,
        alt: a,
        "aria-label": c,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
let f =
    "https://cdn.discordapp.com/assets/content/d5e46eb0908f15eae4a3f6ff2537644fd1196bbbb291c9386efe8252b8803b24.png";
function o(e) {
    let { alt: a, ariaLabel: c, ariaHidden: t, role: s, width: n = 100, height: i = 100 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: i },
        src: f,
        srcSet: `${f} 1x, https://cdn.discordapp.com/assets/content/de4752f2858baf5cd535cac05ea64291e9b9bf5728caae239847170498b82bbe.png 2x`,
        alt: a,
        "aria-label": c,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
let b =
    "https://cdn.discordapp.com/assets/content/366e70897d6e8210d1261b93df800786d9cb751f3af489e7f1f0cd382001facb.png";
function h(e) {
    let { alt: a, ariaLabel: c, ariaHidden: t, role: s, width: n = 100, height: i = 100 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: i },
        src: b,
        srcSet: `${b} 1x, https://cdn.discordapp.com/assets/content/c23fe410b2ce1007412116671a4e44afe82a06168b65079f56b421d893a4926c.png 2x`,
        alt: a,
        "aria-label": c,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
var p = c(930055);
function x() {
    return (0, d.jsxs)("div", {
        className: p.Re,
        "aria-hidden": !0,
        children: [
            (0, d.jsx)(s, { alt: "", ariaHidden: !0, width: 40, height: 40 }),
            (0, d.jsx)(i, { alt: "", ariaHidden: !0, width: 50, height: 50 }),
            (0, d.jsx)(l, { alt: "", ariaHidden: !0, width: 40, height: 40 }),
        ],
    });
}
function u(e) {
    let { iconUrl: a } = e;
    return (0, d.jsx)("img", { className: p.rF, src: a, alt: "", "aria-hidden": !0, draggable: !1 });
}
function g(e) {
    let { badgeIconUrls: a = [] } = e,
        [c, t, s] = a;
    return null != c && null == t
        ? (0, d.jsx)("div", { className: p.R2, "aria-hidden": !0, children: (0, d.jsx)(u, { iconUrl: c }) })
        : null != c && null != t && null == s
          ? (0, d.jsxs)("div", {
                className: p.$Z,
                "aria-hidden": !0,
                children: [(0, d.jsx)(u, { iconUrl: t }), (0, d.jsx)(u, { iconUrl: c })],
            })
          : null != c && null != t && null != s
            ? (0, d.jsxs)("div", {
                  className: p.no,
                  "aria-hidden": !0,
                  children: [
                      (0, d.jsx)(u, { iconUrl: t }),
                      (0, d.jsx)(u, { iconUrl: c }),
                      (0, d.jsx)(u, { iconUrl: s }),
                  ],
              })
            : (0, d.jsxs)("div", {
                  className: p.U6,
                  "aria-hidden": !0,
                  children: [
                      (0, d.jsx)(o, { alt: "", ariaHidden: !0, width: 42, height: 42 }),
                      (0, d.jsx)(h, { alt: "", ariaHidden: !0, width: 60, height: 60 }),
                      (0, d.jsx)(l, { alt: "", ariaHidden: !0, width: 42, height: 42 }),
                  ],
              });
}
function m(e) {
    let { hasProgress: a, badgeIconUrls: c } = e;
    return a ? (0, d.jsx)(g, { badgeIconUrls: c }) : (0, d.jsx)(x, {});
}
