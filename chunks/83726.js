n.d(t, { A: () => d });
var a = n(627968),
    r = n(64700),
    i = n(834730),
    s = n(821609),
    l = n(398450),
    o = n(985018);
function d(e) {
    let { setSlide: t } = e,
        [n, d] = r.useState(10);
    return (
        r.useEffect(() => {
            if (n > 0) {
                let e = setTimeout(() => {
                    d((e) => e - 1);
                }, 1e3);
                return () => clearTimeout(e);
            }
        }, [n]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(l.A.SlideHeader, { ...e, subtitle: o.intl.string(o.t.c5J7O0) }),
                (0, a.jsxs)(l.A.SlideContent, {
                    children: [
                        (0, a.jsx)(i.E, { variant: "text-md/normal", children: o.intl.format(o.t.Nixbli, {}) }),
                        (0, a.jsx)(i.E, {
                            variant: "text-md/normal",
                            children:
                                n > 0 ? o.intl.format(o.t.tsWkAE, { countdown: n }) : o.intl.string(o.t["GK/Qfd"]),
                        }),
                    ],
                }),
                (0, a.jsx)(l.A.SlideFooter, {
                    ...e,
                    trailingButton: (0, a.jsx)(s.$, {
                        variant: "primary",
                        text: o.intl.string(o.t.oyjspn),
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
