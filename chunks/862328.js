"use strict";
n.d(t, { Q: () => u });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(602853),
    o = n(661531),
    d = n(534409),
    c = n(135295);
function u(e) {
    let {
            selected: t = !1,
            lowerBadgeSize: n = { width: 16, height: 16 },
            highlight: r = !1,
            rounded: a = !1,
            ...s
        } = e,
        c = !!s.isFolder,
        u = (0, d.qK)("BlobMask"),
        E = (0, l.r)(o.A.modules.guildbar.AVATAR_SIZE),
        A = (0, l.r)(o.A.modules.guildbar.FOLDER_SIZE),
        h = !u && c ? A : E,
        I = h / 2;
    return (0, i.jsx)(_, {
        ...s,
        selected: t,
        rounded: a,
        baseViewBoxSize: h,
        viewBoxSize: h,
        style: { width: h, height: h },
        badgeMaskSize: I,
        badgeMaskStroke: 2,
        lowerBadgeSize: n,
        highlight: r,
    });
}
function _(e) {
    let {
            children: t,
            viewBoxSize: n,
            className: a,
            style: l,
            innerClassName: d,
            isFolder: u,
            lowerBadgeSize: _,
            highlight: E,
            badgeMaskStroke: A,
            badgeMaskSize: h,
            upperBadge: I,
            lowerBadge: f,
            decorationSrc: p,
            rounded: T = !1,
            "aria-hidden": m,
        } = e,
        [g, S] = r.useState(!1),
        N = null != I,
        C = null != f,
        O = r.useId(),
        R = `${O}-upper_badge_masks`,
        L = `${O}-lower_badge_masks`,
        y = `${O}-blob_mask`,
        D = `${O}-stroke_mask`,
        v = `${O}-highlight_mask`,
        b = _?.width != null ? _.width : 16,
        M = _?.height != null ? _.height : 16,
        P = { width: u ? n : n + 8, height: u ? n : n + 8, x: u ? 0 : -4, y: u ? 0 : -4 },
        U = u ? 20 : h,
        w = T
            ? (function (e) {
                  switch (e) {
                      case 48:
                          return "M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z";
                      case 44:
                          return "M44 22C44 34.1502 34.1502 44 22 44C9.84978 44 0 34.1502 0 22C0 9.84978 9.84978 0 22 0C34.1502 0 44 9.84978 44 22Z";
                      case 40:
                          return "M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z";
                      default:
                          throw Error(`Unsupported BlobMask circle size: ${e}`);
                  }
              })(n)
            : (function (e) {
                  switch (e) {
                      case 52:
                          return "M0 25.6C0 16.6392 0 12.1587 1.7439 8.73615C3.27787 5.72556 5.72556 3.27787 8.73615 1.7439C12.1587 0 16.6392 0 25.6 0H26.4C35.3608 0 39.8413 0 43.2638 1.7439C46.2744 3.27787 48.7221 5.72556 50.2561 8.73615C52 12.1587 52 16.6392 52 25.6V26.4C52 35.3608 52 39.8413 50.2561 43.2638C48.7221 46.2744 46.2744 48.7221 43.2638 50.2561C39.8413 52 35.3608 52 26.4 52H25.6C16.6392 52 12.1587 52 8.73615 50.2561C5.72556 48.7221 3.27787 46.2744 1.7439 43.2638C0 39.8413 0 35.3608 0 26.4V25.6Z";
                      case 48:
                          return "M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z";
                      case 44:
                          return "M0 19.2C0 12.4794 0 9.11906 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11906 0 12.4794 0 19.2 0H24.8C31.5206 0 34.8809 0 37.4479 1.30792C39.7058 2.4584 41.5416 4.29417 42.6921 6.55211C44 9.11906 44 12.4794 44 19.2V24.8C44 31.5206 44 34.8809 42.6921 37.4479C41.5416 39.7058 39.7058 41.5416 37.4479 42.6921C34.8809 44 31.5206 44 24.8 44H19.2C12.4794 44 9.11906 44 6.55211 42.6921C4.29417 41.5416 2.4584 39.7058 1.30792 37.4479C0 34.8809 0 31.5206 0 24.8V19.2Z";
                      case 40:
                          return "M0 17.4545C0 11.3449 0 8.29005 1.18902 5.95647C2.23491 3.90379 3.90379 2.23491 5.95647 1.18902C8.29005 0 11.3449 0 17.4545 0H22.5455C28.6551 0 31.71 0 34.0435 1.18902C36.0962 2.23491 37.7651 3.90379 38.811 5.95647C40 8.29005 40 11.3449 40 17.4545V22.5455C40 28.6551 40 31.71 38.811 34.0435C37.7651 36.0962 36.0962 37.7651 34.0435 38.811C31.71 40 28.6551 40 22.5455 40H17.4545C11.3449 40 8.29005 40 5.95647 38.811C3.90379 37.7651 2.23491 36.0962 1.18902 34.0435C0 31.71 0 28.6551 0 22.5455V17.4545Z";
                      default:
                          throw Error(`Unsupported BlobMask squicle size: ${e}`);
                  }
              })(n);
    return (0, i.jsxs)(
        "div",
        {
            className: s()(a, c.iE),
            style: l,
            onFocus: function () {
                S(!0);
            },
            onBlur: function () {
                S(!1);
            },
            "aria-hidden": m,
            children: [
                (0, i.jsxs)(
                    "svg",
                    {
                        width: P.width,
                        height: P.height,
                        viewBox: `${P.x} ${P.y} ${P.width} ${P.height}`,
                        className: s()(c.JW, { [c.Qq]: E, [c.Pm]: !u }),
                        overflow: "visible",
                        role: "none",
                        children: [
                            (0, i.jsxs)("defs", {
                                children: [
                                    E && (0, i.jsx)("path", { d: w, id: v }),
                                    (0, i.jsx)("path", { d: w, id: y }),
                                    null != I
                                        ? (0, i.jsx)("rect", {
                                              id: R,
                                              x: n - U + A,
                                              y: -A,
                                              width: U,
                                              height: U,
                                              rx: U / 2,
                                              ry: U / 2,
                                          })
                                        : null,
                                    null != f
                                        ? (0, i.jsx)("rect", {
                                              id: L,
                                              x: n - (b + 2 * A) + A,
                                              y: n - (M + 2 * A) + A,
                                              width: b + 2 * A,
                                              height: M + 2 * A,
                                              rx: h / 2,
                                              ry: h / 2,
                                          })
                                        : null,
                                ],
                            }),
                            (0, i.jsxs)("mask", {
                                id: O,
                                fill: "black",
                                x: 0,
                                y: 0,
                                width: n,
                                height: n,
                                children: [
                                    E && (0, i.jsx)("use", { href: `#${v}`, fill: "black" }),
                                    (0, i.jsx)("use", { href: `#${y}`, fill: "white", className: s()({ [c.OV]: E }) }),
                                    N ? (0, i.jsx)("use", { href: `#${R}`, fill: "black" }) : null,
                                    C ? (0, i.jsx)("use", { href: `#${L}`, fill: "black" }) : null,
                                ],
                            }),
                            N || C
                                ? (0, i.jsxs)("mask", {
                                      id: D,
                                      children: [
                                          (0, i.jsx)("rect", {
                                              width: "150%",
                                              height: "150%",
                                              x: "-25%",
                                              y: "-25%",
                                              fill: "white",
                                          }),
                                          N ? (0, i.jsx)("use", { href: `#${R}`, fill: "black" }) : null,
                                          C ? (0, i.jsx)("use", { href: `#${L}`, fill: "black" }) : null,
                                      ],
                                  })
                                : null,
                            g
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)("g", {
                                              className: c.ZD,
                                              mask: `url(#${D})`,
                                              children: (0, i.jsx)("use", { href: `#${y}` }),
                                          }),
                                          (0, i.jsxs)("g", {
                                              className: c.e7,
                                              children: [
                                                  null != I ? (0, i.jsx)("use", { href: `#${R}` }) : null,
                                                  null != f ? (0, i.jsx)("use", { href: `#${L}` }) : null,
                                              ],
                                          }),
                                      ],
                                  })
                                : null,
                            E &&
                                (0, i.jsx)("path", {
                                    d: w,
                                    stroke: o.A.unsafe_rawColors.BRAND_500.css,
                                    strokeWidth: 2,
                                    className: c.Zt,
                                    mask: `url(#${D})`,
                                }),
                            (0, i.jsx)(
                                "foreignObject",
                                { mask: `url(#${O})`, x: 0, y: 0, className: d, width: n, height: n, children: t },
                                "foreign-object",
                            ),
                        ],
                    },
                    "svg",
                ),
                null != p
                    ? (0, i.jsx)("div", {
                          className: c.H8,
                          "aria-hidden": !0,
                          children: (0, i.jsx)("img", { className: c.O4, src: p, alt: "" }),
                      })
                    : null,
                null != f ? (0, i.jsx)("div", { className: c.H7, children: f }) : null,
                null != I ? (0, i.jsx)("div", { className: c.A8, children: I }) : null,
            ],
        },
        `${C}-${N}`,
    );
}
