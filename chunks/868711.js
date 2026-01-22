t.d(n, {
    A: () => g,
});
var r = t(627968);
t(64700);
var l = t(311907),
    i = t(397927),
    s = t(997509),
    a = t(489673),
    c = t(71393),
    o = t(576705),
    u = t(652215),
    d = t(985018),
    m = t(563959);

function g(e) {
    let { guildId: n, onClose: t } = e,
        g = (0, l.bG)([c.A, o.A], () => {
            let e = c.A.getGuild(n);
            return o.A.can(u.xBc.MANAGE_ROLES, e);
        }, [n]);
    return (0, r.jsxs)("div", {
        className: m.kL,
        children: [
            (0, r.jsx)(a.A, {
                children: (0, r.jsx)("div", {
                    className: m.n1,
                    children: (0, r.jsx)(i.CTc, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: m.Kk,
                    }),
                }),
            }),
            (0, r.jsx)(i.Heading, {
                color: "text-strong",
                variant: "heading-xl/semibold",
                className: m.DD,
                children: d.intl.string(d.t["WgZ+3D"]),
            }),
            (0, r.jsx)(i.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: m.VA,
                children: d.intl.string(d.t["v/S/PG"]),
            }),
            g &&
                (0, r.jsx)(i.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: m.Ec,
                    children: d.intl.format(d.t["K+DH2o"], {
                        onClick: () => {
                            s.A.open(n, u.BEX.ROLES), t();
                        },
                    }),
                }),
        ],
    });
}
