"use strict";
n.d(t, { Q: () => d });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(602853),
    l = n(661531),
    u = n(534409),
    c = n(943223);
function d(e) {
    let {
            selected: t = !1,
            lowerBadgeSize: n = { width: 16, height: 16 },
            highlight: r = !1,
            rounded: s = !1,
            ...a
        } = e,
        c = !!a.isFolder,
        d = (0, u.qK)("BlobMask"),
        h = (0, o.r)(l.A.modules.guildbar.AVATAR_SIZE),
        f = (0, o.r)(l.A.modules.guildbar.FOLDER_SIZE),
        p = !d && c ? f : h,
        E = p / 2;
    return (0, i.jsx)(_, {
        ...a,
        selected: t,
        rounded: s,
        baseViewBoxSize: p,
        viewBoxSize: p,
        style: { width: p, height: p },
        badgeMaskSize: E,
        badgeMaskStroke: 2,
        lowerBadgeSize: n,
        highlight: r,
    });
}
function _(e) {
    let {
            children: t,
            viewBoxSize: n,
            className: s,
            style: o,
            innerClassName: u,
            isFolder: d,
            lowerBadgeSize: _,
            highlight: h,
            badgeMaskStroke: f,
            badgeMaskSize: p,
            upperBadge: E,
            lowerBadge: m,
            rounded: g = !1,
            "aria-hidden": A,
        } = e,
        [I, T] = r.useState(!1),
        S = null != E,
        y = null != m,
        N = r.useId(),
        v = `${N}-upper_badge_masks`,
        C = `${N}-lower_badge_masks`,
        R = `${N}-blob_mask`,
        O = `${N}-stroke_mask`,
        b = `${N}-highlight_mask`,
        D = _?.width != null ? _.width : 16,
        L = _?.height != null ? _.height : 16,
        w = { width: d ? n : n + 8, height: d ? n : n + 8, x: d ? 0 : -4, y: d ? 0 : -4 },
        M = d ? 20 : p,
        P = g
            ? ((e) => {
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
            : ((e) => {
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
            className: a()(s, c.iE),
            style: o,
            onFocus: () => {
                T(!0);
            },
            onBlur: () => {
                T(!1);
            },
            "aria-hidden": A,
            children: [
                (0, i.jsxs)(
                    "svg",
                    {
                        width: w.width,
                        height: w.height,
                        viewBox: `${w.x} ${w.y} ${w.width} ${w.height}`,
                        className: a()(c.JW, { [c.Qq]: h, [c.Pm]: !d }),
                        overflow: "visible",
                        role: "none",
                        children: [
                            (0, i.jsxs)("defs", {
                                children: [
                                    h && (0, i.jsx)("path", { d: P, id: b }),
                                    (0, i.jsx)("path", { d: P, id: R }),
                                    null != E
                                        ? (0, i.jsx)("rect", {
                                              id: v,
                                              x: n - M + f,
                                              y: -f,
                                              width: M,
                                              height: M,
                                              rx: M / 2,
                                              ry: M / 2,
                                          })
                                        : null,
                                    null != m
                                        ? (0, i.jsx)("rect", {
                                              id: C,
                                              x: n - (D + 2 * f) + f,
                                              y: n - (L + 2 * f) + f,
                                              width: D + 2 * f,
                                              height: L + 2 * f,
                                              rx: p / 2,
                                              ry: p / 2,
                                          })
                                        : null,
                                ],
                            }),
                            (0, i.jsxs)("mask", {
                                id: N,
                                fill: "black",
                                x: 0,
                                y: 0,
                                width: n,
                                height: n,
                                children: [
                                    h && (0, i.jsx)("use", { href: `#${b}`, fill: "black" }),
                                    (0, i.jsx)("use", { href: `#${R}`, fill: "white", className: a()({ [c.OV]: h }) }),
                                    S ? (0, i.jsx)("use", { href: `#${v}`, fill: "black" }) : null,
                                    y ? (0, i.jsx)("use", { href: `#${C}`, fill: "black" }) : null,
                                ],
                            }),
                            S || y
                                ? (0, i.jsxs)("mask", {
                                      id: O,
                                      children: [
                                          (0, i.jsx)("rect", {
                                              width: "150%",
                                              height: "150%",
                                              x: "-25%",
                                              y: "-25%",
                                              fill: "white",
                                          }),
                                          S ? (0, i.jsx)("use", { href: `#${v}`, fill: "black" }) : null,
                                          y ? (0, i.jsx)("use", { href: `#${C}`, fill: "black" }) : null,
                                      ],
                                  })
                                : null,
                            I
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)("g", {
                                              className: c.ZD,
                                              mask: `url(#${O})`,
                                              children: (0, i.jsx)("use", { href: `#${R}` }),
                                          }),
                                          (0, i.jsxs)("g", {
                                              className: c.e7,
                                              children: [
                                                  null != E ? (0, i.jsx)("use", { href: `#${v}` }) : null,
                                                  null != m ? (0, i.jsx)("use", { href: `#${C}` }) : null,
                                              ],
                                          }),
                                      ],
                                  })
                                : null,
                            h &&
                                (0, i.jsx)("path", {
                                    d: P,
                                    stroke: l.A.unsafe_rawColors.BRAND_500.css,
                                    strokeWidth: 2,
                                    className: c.Zt,
                                    mask: `url(#${O})`,
                                }),
                            (0, i.jsx)(
                                "foreignObject",
                                { mask: `url(#${N})`, x: 0, y: 0, className: u, width: n, height: n, children: t },
                                "foreign-object",
                            ),
                        ],
                    },
                    "svg",
                ),
                null != m ? (0, i.jsx)("div", { className: c.H7, children: m }) : null,
                null != E ? (0, i.jsx)("div", { className: c.A8, children: E }) : null,
            ],
        },
        `${y}-${S}`,
    );
}
