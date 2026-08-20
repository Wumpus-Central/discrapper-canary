d.r(a), d.d(a, { default: () => m });
var c = d(477900);
d(582128);
let t =
    "https://cdn.discordapp.com/assets/content/25db3694287e08eae733a6a231e2928d1839893a68f9284cd7cfebfe73966a84.png";
function s(e) {
    let { alt: a, ariaLabel: d, ariaHidden: s, role: n, width: i = 100, height: r = 100 } = e;
    return (0, c.jsx)("img", {
        style: { width: i, height: r },
        src: t,
        srcSet: `${t} 1x, https://cdn.discordapp.com/assets/content/ee3ace48038b994c125208c2a38d1e4826c96e6074f82eb3efe04314d95c3fb4.png 2x`,
        alt: a,
        "aria-label": d,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
let n =
    "https://cdn.discordapp.com/assets/content/cf2abd927687e1dbd71e89fef193064cfe267cb5768e97ab9c578cf52f109a2d.png";
function i(e) {
    let { alt: a, ariaLabel: d, ariaHidden: t, role: s, width: i = 100, height: r = 100 } = e;
    return (0, c.jsx)("img", {
        style: { width: i, height: r },
        src: n,
        srcSet: `${n} 1x, https://cdn.discordapp.com/assets/content/e12c86e0d292c0f5d24fe25a3ab142b7bf67b60f2ad164b82ef215e5c27dc7fe.png 2x`,
        alt: a,
        "aria-label": d,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
let r =
    "https://cdn.discordapp.com/assets/content/9470b4e19ec49337673178fdeca9d571eb95eaf8e01e026453765e4e35f86a23.png";
function l(e) {
    let { alt: a, ariaLabel: d, ariaHidden: t, role: s, width: n = 100, height: i = 100 } = e;
    return (0, c.jsx)("img", {
        style: { width: n, height: i },
        src: r,
        srcSet: `${r} 1x, https://cdn.discordapp.com/assets/content/40755f3ac33c26e88419a044067ed9e19bf2e8fe4438f5ed5d44d9fd8aa0a8cc.png 2x`,
        alt: a,
        "aria-label": d,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
let f =
    "https://cdn.discordapp.com/assets/content/48b5779e466d0cee65cf2a8e330c84c1de5bb578c939fdba64cd56f0204229f1.png";
function o(e) {
    let { alt: a, ariaLabel: d, ariaHidden: t, role: s, width: n = 100, height: i = 100 } = e;
    return (0, c.jsx)("img", {
        style: { width: n, height: i },
        src: f,
        srcSet: `${f} 1x, https://cdn.discordapp.com/assets/content/bfaf0686098768efbd090c466ad55399b2c8ec82e1d2dbf031c5f6fdd721f828.png 2x`,
        alt: a,
        "aria-label": d,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
let h =
    "https://cdn.discordapp.com/assets/content/9a8eba88273235e38b10fd9e4437d8d4ebda9687041d7081995695716d050187.png";
function b(e) {
    let { alt: a, ariaLabel: d, ariaHidden: t, role: s, width: n = 100, height: i = 100 } = e;
    return (0, c.jsx)("img", {
        style: { width: n, height: i },
        src: h,
        srcSet: `${h} 1x, https://cdn.discordapp.com/assets/content/a66c43bfd9ceb690a9c1bc5fa69be9a1cb3f87b1fbbb498b7e0bafac162505f8.png 2x`,
        alt: a,
        "aria-label": d,
        "aria-hidden": t,
        role: s ?? "img",
    });
}
var p = d(930055);
function x() {
    return (0, c.jsxs)("div", {
        className: p.Re,
        "aria-hidden": !0,
        children: [
            (0, c.jsx)(s, { alt: "", ariaHidden: !0, width: 40, height: 40 }),
            (0, c.jsx)(i, { alt: "", ariaHidden: !0, width: 50, height: 50 }),
            (0, c.jsx)(l, { alt: "", ariaHidden: !0, width: 40, height: 40 }),
        ],
    });
}
function u(e) {
    let { iconUrl: a } = e;
    return (0, c.jsx)("img", { className: p.rF, src: a, alt: "", "aria-hidden": !0, draggable: !1 });
}
function g(e) {
    let { badgeIconUrls: a = [] } = e,
        [d, t, s] = a;
    return null != d && null == t
        ? (0, c.jsx)("div", { className: p.R2, "aria-hidden": !0, children: (0, c.jsx)(u, { iconUrl: d }) })
        : null != d && null != t && null == s
          ? (0, c.jsxs)("div", {
                className: p.$Z,
                "aria-hidden": !0,
                children: [(0, c.jsx)(u, { iconUrl: t }), (0, c.jsx)(u, { iconUrl: d })],
            })
          : null != d && null != t && null != s
            ? (0, c.jsxs)("div", {
                  className: p.no,
                  "aria-hidden": !0,
                  children: [
                      (0, c.jsx)(u, { iconUrl: t }),
                      (0, c.jsx)(u, { iconUrl: d }),
                      (0, c.jsx)(u, { iconUrl: s }),
                  ],
              })
            : (0, c.jsxs)("div", {
                  className: p.U6,
                  "aria-hidden": !0,
                  children: [
                      (0, c.jsx)(o, { alt: "", ariaHidden: !0, width: 42, height: 42 }),
                      (0, c.jsx)(b, { alt: "", ariaHidden: !0, width: 60, height: 60 }),
                      (0, c.jsx)(l, { alt: "", ariaHidden: !0, width: 42, height: 42 }),
                  ],
              });
}
function m(e) {
    let { hasProgress: a, badgeIconUrls: d } = e;
    return a ? (0, c.jsx)(g, { badgeIconUrls: d }) : (0, c.jsx)(x, {});
}
