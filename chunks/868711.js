t.d(n, { A: () => A });
var i = t(627968);
t(64700);
var l = t(311907),
    a = t(397927),
    r = t(997509),
    s = t(489673),
    c = t(71393),
    o = t(576705),
    d = t(652215),
    u = t(985018),
    g = t(563959);
function A(e) {
    let { guildId: n, onClose: t } = e,
        A = (0, l.bG)([c.A, o.A], () => {
            let e = c.A.getGuild(n);
            return o.A.can(d.xBc.MANAGE_ROLES, e);
        }, [n]);
    return (0, i.jsxs)("div", {
        className: g.kL,
        children: [
            (0, i.jsx)(s.A, {
                children: (0, i.jsx)("div", {
                    className: g.n1,
                    children: (0, i.jsx)(a.CTc, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: g.Kk,
                    }),
                }),
            }),
            (0, i.jsx)(a.Heading, {
                color: "text-strong",
                variant: "heading-xl/semibold",
                className: g.DD,
                children: u.intl.string(u.t["WgZ+3D"]),
            }),
            (0, i.jsx)(a.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: g.VA,
                children: u.intl.string(u.t["v/S/PG"]),
            }),
            A &&
                (0, i.jsx)(a.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: g.Ec,
                    children: u.intl.format(u.t["K+DH2o"], {
                        onClick: () => {
                            r.A.open(n, d.BEX.ROLES), t();
                        },
                    }),
                }),
        ],
    });
}
