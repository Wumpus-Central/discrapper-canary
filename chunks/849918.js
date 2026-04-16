n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(915089),
    r = n(71532),
    a = n(496794),
    o = n(832208),
    d = n(985018),
    c = n(536439);
let u = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, l.Ld)(),
                        title: () => d.intl.string(d.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => d.intl.string(d.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => c.ep,
                        renderInput: (e) => (0, i.jsx)(a.A, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    m = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: l, error: a } = e,
            [c, m] = s.useState(!1),
            [g, _] = s.useState(null),
            [x, h] = s.useState(l);
        return (
            s.useEffect(() => {
                t({ expirationDate: x }, null === g);
            }, [x, t, g]),
            (0, i.jsx)(o.A, {
                className: n,
                form: u,
                values: { expirationDate: x },
                errors: null != g ? { expirationDate: g } : {},
                formError: a,
                onFieldChange: (e) => {
                    c || "" === e || m(!0),
                        (c && "" === e) || !(0, r.So)(e) ? _(d.intl.string(d.t["9/zZdl"])) : _(null),
                        h(e);
                },
            })
        );
    };
