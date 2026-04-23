n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(915089),
    a = n(71532),
    r = n(496794),
    o = n(832208),
    d = n(985018),
    u = n(536439);
let c = [
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
                        getClassNameForLayout: () => u.ep,
                        renderInput: (e) => (0, i.jsx)(r.A, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    g = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: l, error: r } = e,
            [u, g] = s.useState(!1),
            [m, _] = s.useState(null),
            [A, h] = s.useState(l);
        return (
            s.useEffect(() => {
                t({ expirationDate: A }, null === m);
            }, [A, t, m]),
            (0, i.jsx)(o.A, {
                className: n,
                form: c,
                values: { expirationDate: A },
                errors: null != m ? { expirationDate: m } : {},
                formError: r,
                onFieldChange: (e) => {
                    u || "" === e || g(!0),
                        (u && "" === e) || !(0, a.So)(e) ? _(d.intl.string(d.t["9/zZdl"])) : _(null),
                        h(e);
                },
            })
        );
    };
