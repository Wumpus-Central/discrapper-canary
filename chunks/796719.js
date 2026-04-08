n.d(t, { y: () => l });
var a = n(627968),
    i = n(64700),
    s = n(158954);
function l() {
    let [e, t] = i.useState(null),
        n = i.useRef(null),
        l = i.useCallback((e) => {
            let n = e.target.files?.[0];
            if (null == n) return;
            let a = new FileReader();
            (a.onload = () => t({ src: a.result, name: n.name })), a.readAsDataURL(n), (e.target.value = "");
        }, []),
        r = i.useCallback(
            () =>
                (0, a.jsxs)(s.BJc, {
                    direction: "horizontal",
                    gap: 8,
                    align: "center",
                    children: [
                        (0, a.jsx)("input", {
                            ref: n,
                            type: "file",
                            accept: "image/jpeg,image/png,image/gif,image/webp,image/avif",
                            onChange: l,
                            style: { display: "none" },
                        }),
                        null != e
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(s.EYj, { variant: "text-sm/normal", children: e.name }),
                                      (0, a.jsx)(s.QWc, {
                                          text: "Remove",
                                          variant: "critical",
                                          textVariant: "text-sm/medium",
                                          onClick: () => t(null),
                                      }),
                                  ],
                              })
                            : (0, a.jsx)(s.$nd, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: "Upload button hover image",
                                  onClick: () => n.current?.click(),
                              }),
                    ],
                }),
            [e, l],
        );
    return { images: { buttonBackground: e }, renderPickers: r };
}
