var i = n(477900),
    r = n(582128),
    a = n(116711),
    s = n(834730),
    l = n(787165);
n.d(
    t,
    {},
    {
        o: function (e) {
            let { message: t } = e,
                { i18n: n } = r.useContext(a.VO);
            return (0, i.jsx)("div", {
                className: l.p,
                role: "status",
                children: (0, i.jsx)(s.E, {
                    variant: "body-md/medium",
                    className: l.q,
                    children: t ?? n.LISTBOX_EMPTY_STATE,
                }),
            });
        },
    },
);
