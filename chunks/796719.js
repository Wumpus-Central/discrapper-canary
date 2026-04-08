n.d(t, { y: () => c });
var a = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(946274),
    r = n(222094);
let o = [{ name: "Images", extensions: ["jpg", "jpeg", "jfif", "png", "gif", "webp", "avif", "apng"] }],
    d = { tooltip: "Tooltip image", srcDarkHovered: "Dark theme image", srcLightHovered: "Light theme image" };
function c() {
    let [e, t] = i.useState({ tooltip: null, srcDarkHovered: null, srcLightHovered: null }),
        n = i.useCallback(
            () =>
                (0, a.jsxs)(l.BJc, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(l.DZT, { variant: "heading-sm/semibold", children: "Preview" }),
                        (0, a.jsx)(l.EYj, {
                            variant: "text-sm/normal",
                            children:
                                "Upload background images for the shop tab button. Each picker maps to a theme + hover state combination.",
                        }),
                        (0, a.jsx)(l.BJc, {
                            gap: 12,
                            children: Object.keys(d).map((n) => {
                                let i = d[n];
                                return (0, a.jsxs)(
                                    l.BJc,
                                    {
                                        gap: 4,
                                        className: r.dz,
                                        children: [
                                            (0, a.jsx)(l.EYj, { variant: "text-sm/medium", children: i }),
                                            null != e[n]
                                                ? (0, a.jsxs)(l.BJc, {
                                                      direction: "horizontal",
                                                      gap: 8,
                                                      align: "center",
                                                      children: [
                                                          (0, a.jsx)(l.EYj, {
                                                              variant: "text-sm/normal",
                                                              children: e[n].name,
                                                          }),
                                                          (0, a.jsx)(l.QWc, {
                                                              text: "Remove",
                                                              variant: "critical",
                                                              textVariant: "text-sm/medium",
                                                              onClick: () => t((e) => ({ ...e, [n]: null })),
                                                          }),
                                                      ],
                                                  })
                                                : (0, a.jsx)(s.Ay, {
                                                      onChange: (e, a) =>
                                                          t((t) => ({ ...t, [n]: { src: e, name: a.name } })),
                                                      maxFileSizeBytes: 0xa00000,
                                                      multiple: !1,
                                                      filters: o,
                                                      "aria-label": `Upload ${i} background image`,
                                                  }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
            [e],
        );
    return { images: e, renderPickers: n };
}
