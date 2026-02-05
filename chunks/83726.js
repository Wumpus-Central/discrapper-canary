n.d(t, { A: () => o });
var l = n(627968),
    s = n(64700),
    r = n(397927),
    i = n(398450),
    a = n(985018);
function o(e) {
    let { setSlide: t } = e,
        [n, o] = s.useState(10);
    return (
        s.useEffect(() => {
            if (n > 0) {
                let e = setTimeout(() => {
                    o((e) => e - 1);
                }, 1e3);
                return () => clearTimeout(e);
            }
        }, [n]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(i.A.SlideHeader, { ...e, subtitle: a.intl.string(a.t.c5J7O0) }),
                (0, l.jsxs)(i.A.SlideContent, {
                    children: [
                        (0, l.jsx)(r.Text, { variant: "text-md/normal", children: a.intl.format(a.t.Nixbli, {}) }),
                        (0, l.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children:
                                n > 0 ? a.intl.format(a.t.tsWkAE, { countdown: n }) : a.intl.string(a.t["GK/Qfd"]),
                        }),
                    ],
                }),
                (0, l.jsx)(i.A.SlideFooter, {
                    ...e,
                    trailingButton: (0, l.jsx)(r.Button, {
                        variant: "primary",
                        text: a.intl.string(a.t.oyjspn),
                        onClick: () => t("backup_ack"),
                        disabled: n > 0,
                        loading: n > 0,
                        fullWidth: !0,
                    }),
                }),
            ],
        })
    );
}
