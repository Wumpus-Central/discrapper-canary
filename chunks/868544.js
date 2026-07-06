t.r(a), t.d(a, { default: () => m });
var d = t(627968);
t(64700);
let c =
    "https://cdn.discordapp.com/assets/content/25db3694287e08eae733a6a231e2928d1839893a68f9284cd7cfebfe73966a84.png";
function s(e) {
    let { alt: a, ariaLabel: t, ariaHidden: s, role: n, width: i = 100, height: r = 100 } = e;
    return (0, d.jsx)("img", {
        style: { width: i, height: r },
        src: c,
        srcSet: `${c} 1x, https://cdn.discordapp.com/assets/content/ee3ace48038b994c125208c2a38d1e4826c96e6074f82eb3efe04314d95c3fb4.png 2x`,
        alt: a,
        "aria-label": t,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
let n =
    "https://cdn.discordapp.com/assets/content/cf2abd927687e1dbd71e89fef193064cfe267cb5768e97ab9c578cf52f109a2d.png";
function i(e) {
    let { alt: a, ariaLabel: t, ariaHidden: c, role: s, width: i = 100, height: r = 100 } = e;
    return (0, d.jsx)("img", {
        style: { width: i, height: r },
        src: n,
        srcSet: `${n} 1x, https://cdn.discordapp.com/assets/content/e12c86e0d292c0f5d24fe25a3ab142b7bf67b60f2ad164b82ef215e5c27dc7fe.png 2x`,
        alt: a,
        "aria-label": t,
        "aria-hidden": c,
        role: s ?? "img",
    });
}
let r =
    "https://cdn.discordapp.com/assets/content/3cff702a266643a7a3adc7f15befbdb9a25b0d4355e46e312dd99671a99f21c0.png";
function f(e) {
    let { alt: a, ariaLabel: t, ariaHidden: c, role: s, width: n = 100, height: i = 100 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: i },
        src: r,
        srcSet: `${r} 1x, https://cdn.discordapp.com/assets/content/40755f3ac33c26e88419a044067ed9e19bf2e8fe4438f5ed5d44d9fd8aa0a8cc.png 2x`,
        alt: a,
        "aria-label": t,
        "aria-hidden": c,
        role: s ?? "img",
    });
}
let l =
    "https://cdn.discordapp.com/assets/content/9c992565eab6cbb4f2f565a074e39a75c6b168b5df2e779a96bc325819af03a1.png";
function p(e) {
    let { alt: a, ariaLabel: t, ariaHidden: c, role: s, width: n = 100, height: i = 100 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: i },
        src: l,
        srcSet: `${l} 1x, https://cdn.discordapp.com/assets/content/bfaf0686098768efbd090c466ad55399b2c8ec82e1d2dbf031c5f6fdd721f828.png 2x`,
        alt: a,
        "aria-label": t,
        "aria-hidden": c,
        role: s ?? "img",
    });
}
let o =
    "https://cdn.discordapp.com/assets/content/5872ee723b5960f2ca267d399475a1211259b9e91308f0ce18f8db96e17ea33d.png";
function h(e) {
    let { alt: a, ariaLabel: t, ariaHidden: c, role: s, width: n = 100, height: i = 100 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: i },
        src: o,
        srcSet: `${o} 1x, https://cdn.discordapp.com/assets/content/44f8af61f60d0d3de9e9897c0691cdd472a7a5c29cc6e88164cf07fa670c980c.png 2x`,
        alt: a,
        "aria-label": t,
        "aria-hidden": c,
        role: s ?? "img",
    });
}
var b = t(762232);
function g() {
    return (0, d.jsxs)("div", {
        className: b.R,
        "aria-hidden": !0,
        children: [
            (0, d.jsx)(s, { alt: "", ariaHidden: !0, width: 40, height: 40 }),
            (0, d.jsx)(i, { alt: "", ariaHidden: !0, width: 50, height: 50 }),
            (0, d.jsx)(f, { alt: "", ariaHidden: !0, width: 40, height: 40 }),
        ],
    });
}
function x() {
    return (0, d.jsxs)("div", {
        className: b.U,
        "aria-hidden": !0,
        children: [
            (0, d.jsx)(p, { alt: "", ariaHidden: !0, width: 42, height: 42 }),
            (0, d.jsx)(h, { alt: "", ariaHidden: !0, width: 60, height: 60 }),
            (0, d.jsx)(f, { alt: "", ariaHidden: !0, width: 42, height: 42 }),
        ],
    });
}
function m(e) {
    let { hasProgress: a } = e;
    return a ? (0, d.jsx)(x, {}) : (0, d.jsx)(g, {});
}
