(d.r(e), d.d(e, { default: () => m }));
var c = d(477900);
d(582128);
let t =
    "https://cdn.discordapp.com/assets/content/70a36d30245591bdbda9514954b0dbc827d6943f966168afe819006e2d4cdaa0.png";
function s(a) {
    let { alt: e, ariaLabel: d, ariaHidden: s, role: n, width: i = 100, height: r = 100 } = a;
    return (0, c.jsx)("img", {
        style: { width: i, height: r },
        src: t,
        srcSet: `${t} 1x, https://cdn.discordapp.com/assets/content/b6da893abc4fcd7e335886962daa2e2f6b881705f57381565ae6bbd4f39f2beb.png 2x`,
        alt: e,
        "aria-label": d,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
let n =
    "https://cdn.discordapp.com/assets/content/d83ff62c1eff1828addc83a675c7d4348319c84c6a25b775c291ea935d2b0328.png";
function i(a) {
    let { alt: e, ariaLabel: d, ariaHidden: t, role: s, width: i = 100, height: r = 100 } = a;
    return (0, c.jsx)("img", {
        style: { width: i, height: r },
        src: n,
        srcSet: `${n} 1x, https://cdn.discordapp.com/assets/content/cd6b82fbab858cd39a2efad4835334f7cade17094e90439012efd3f0fb7f6e64.png 2x`,
        alt: e,
        "aria-label": d,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
let r =
    "https://cdn.discordapp.com/assets/content/88db4c558e6990ddac80ac023cdc69d9672ea3264938a100b63c154f95b0c432.png";
function l(a) {
    let { alt: e, ariaLabel: d, ariaHidden: t, role: s, width: n = 100, height: i = 100 } = a;
    return (0, c.jsx)("img", {
        style: { width: n, height: i },
        src: r,
        srcSet: `${r} 1x, https://cdn.discordapp.com/assets/content/6f6a03be2333c2e3b7ac5c65e0c9652598ada30e34d4a4c700efd3c35f40e4b2.png 2x`,
        alt: e,
        "aria-label": d,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
let o =
    "https://cdn.discordapp.com/assets/content/17ff091ccfa9136e09ea68643a3c697527b16d780fed48164e471d259fbe2a56.png";
function f(a) {
    let { alt: e, ariaLabel: d, ariaHidden: t, role: s, width: n = 100, height: i = 100 } = a;
    return (0, c.jsx)("img", {
        style: { width: n, height: i },
        src: o,
        srcSet: `${o} 1x, https://cdn.discordapp.com/assets/content/77e94daa4f2b6e8ae7f8b0a7c6ea220ea11fe35e8237cbe1ffd33da6ccb854f9.png 2x`,
        alt: e,
        "aria-label": d,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
let h =
    "https://cdn.discordapp.com/assets/content/f0c20e67a625c295733133cce9ed79aa71dd14e4d384dd8f9414d219de4e04ca.png";
function p(a) {
    let { alt: e, ariaLabel: d, ariaHidden: t, role: s, width: n = 100, height: i = 100 } = a;
    return (0, c.jsx)("img", {
        style: { width: n, height: i },
        src: h,
        srcSet: `${h} 1x, https://cdn.discordapp.com/assets/content/2fc74aec26aa1d678f9152656ecda29a2ee7abb35615c43a19df4f701c21549e.png 2x`,
        alt: e,
        "aria-label": d,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
var b = d(930055);
function x() {
    return (0, c.jsxs)("div", {
        className: b.Re,
        "aria-hidden": !0,
        children: [
            (0, c.jsx)(s, { alt: "", ariaHidden: !0, width: 40, height: 40 }),
            (0, c.jsx)(i, { alt: "", ariaHidden: !0, width: 50, height: 50 }),
            (0, c.jsx)(l, { alt: "", ariaHidden: !0, width: 40, height: 40 }),
        ],
    });
}
function u(a) {
    let { iconUrl: e } = a;
    return (0, c.jsx)("img", { className: b.rF, src: e, alt: "", "aria-hidden": !0, draggable: !1 });
}
function g(a) {
    let { badgeIconUrls: e = [] } = a,
        [d, t, s] = e;
    return null != d && null == t
        ? (0, c.jsx)("div", { className: b.R2, "aria-hidden": !0, children: (0, c.jsx)(u, { iconUrl: d }) })
        : null != d && null != t && null == s
          ? (0, c.jsxs)("div", {
                className: b.$Z,
                "aria-hidden": !0,
                children: [(0, c.jsx)(u, { iconUrl: t }), (0, c.jsx)(u, { iconUrl: d })],
            })
          : null != d && null != t && null != s
            ? (0, c.jsxs)("div", {
                  className: b.no,
                  "aria-hidden": !0,
                  children: [
                      (0, c.jsx)(u, { iconUrl: t }),
                      (0, c.jsx)(u, { iconUrl: d }),
                      (0, c.jsx)(u, { iconUrl: s }),
                  ],
              })
            : (0, c.jsxs)("div", {
                  className: b.U6,
                  "aria-hidden": !0,
                  children: [
                      (0, c.jsx)(f, { alt: "", ariaHidden: !0, width: 42, height: 42 }),
                      (0, c.jsx)(p, { alt: "", ariaHidden: !0, width: 60, height: 60 }),
                      (0, c.jsx)(l, { alt: "", ariaHidden: !0, width: 42, height: 42 }),
                  ],
              });
}
function m(a) {
    let { hasProgress: e, badgeIconUrls: d } = a;
    return e ? (0, c.jsx)(g, { badgeIconUrls: d }) : (0, c.jsx)(x, {});
}
