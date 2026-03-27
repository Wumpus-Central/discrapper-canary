n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(915089),
    a = n(71532),
    r = n(496794),
    o = n(832208),
    d = n(985018),
    c = n(62727);
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
                        renderInput: (e) => (0, i.jsx)(r.A, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    m = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: l, error: r } = e,
            [c, m] = s.useState(!1),
            [_, g] = s.useState(null),
            [x, A] = s.useState(l);
        return (
            s.useEffect(() => {
                t({ expirationDate: x }, null === _);
            }, [x, t, _]),
            (0, i.jsx)(o.A, {
                className: n,
                form: u,
                values: { expirationDate: x },
                errors: null != _ ? { expirationDate: _ } : {},
                formError: r,
                onFieldChange: (e) => {
                    c || "" === e || m(!0),
                        (c && "" === e) || !(0, a.So)(e) ? g(d.intl.string(d.t["9/zZdl"])) : g(null),
                        A(e);
                },
            })
        );
    };
