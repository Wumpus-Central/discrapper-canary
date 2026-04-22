a.d(t, { y: () => d });
var n = a(627968),
    l = a(64700),
    i = a(331322),
    s = a(834730),
    r = a(123292),
    o = a(821609);
function d() {
    let [e, t] = l.useState(null),
        a = l.useRef(null),
        d = l.useCallback((e) => {
            let a = e.target.files?.[0];
            if (null == a) return;
            let n = new FileReader();
            (n.onload = () => t({ src: n.result, name: a.name })), n.readAsDataURL(a), (e.target.value = "");
        }, []),
        c = l.useCallback(
            () =>
                (0, n.jsxs)(i.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "center",
                    children: [
                        (0, n.jsx)("input", {
                            ref: a,
                            type: "file",
                            accept: "image/jpeg,image/png,image/gif,image/webp,image/avif",
                            onChange: d,
                            style: { display: "none" },
                        }),
                        null != e
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(s.E, { variant: "text-sm/normal", children: e.name }),
                                      (0, n.jsx)(r.Q, {
                                          text: "Remove",
                                          variant: "critical",
                                          textVariant: "text-sm/medium",
                                          onClick: () => t(null),
                                      }),
                                  ],
                              })
                            : (0, n.jsx)(o.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: "Upload button hover image",
                                  onClick: () => a.current?.click(),
                              }),
                    ],
                }),
            [e, d],
        );
    return { images: { buttonBackground: e }, renderPickers: c };
}
