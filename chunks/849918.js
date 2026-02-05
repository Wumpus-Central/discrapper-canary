n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    r = n(915089),
    a = n(71532),
    l = n(496794),
    o = n(832208),
    c = n(985018),
    d = n(784550);
let u = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, r.Ld)(),
                        title: () => c.intl.string(c.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => c.intl.string(c.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => d.ep,
                        renderInput: (e) => (0, i.jsx)(l.A, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    _ = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: r, error: l } = e,
            [d, _] = s.useState(!1),
            [m, A] = s.useState(null),
            [g, E] = s.useState(r);
        return (
            s.useEffect(() => {
                t({ expirationDate: g }, null === m);
            }, [g, t, m]),
            (0, i.jsx)(o.A, {
                className: n,
                form: u,
                values: { expirationDate: g },
                errors: null != m ? { expirationDate: m } : {},
                formError: l,
                onFieldChange: (e) => {
                    d || "" === e || _(!0),
                        (d && "" === e) || !(0, a.So)(e) ? A(c.intl.string(c.t["9/zZdl"])) : A(null),
                        E(e);
                },
            })
        );
    };
