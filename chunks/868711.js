t.d(n, { A: () => h });
var l = t(627968);
t(64700);
var i = t(311907),
    a = t(81466),
    s = t(534514),
    r = t(834730),
    c = t(997509),
    o = t(489673),
    d = t(71393),
    u = t(576705),
    g = t(652215),
    A = t(985018),
    m = t(553434);
function h(e) {
    let { guildId: n, onClose: t } = e,
        h = (0, i.bG)([d.A, u.A], () => {
            let e = d.A.getGuild(n);
            return u.A.can(g.xBc.MANAGE_ROLES, e);
        }, [n]);
    return (0, l.jsxs)("div", {
        className: m.kL,
        children: [
            (0, l.jsx)(o.A, {
                children: (0, l.jsx)("div", {
                    className: m.n1,
                    children: (0, l.jsx)(a.C, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: m.Kk,
                    }),
                }),
            }),
            (0, l.jsx)(s.D, {
                color: "text-strong",
                variant: "heading-xl/semibold",
                className: m.DD,
                children: A.intl.string(A.t["WgZ+3D"]),
            }),
            (0, l.jsx)(r.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: m.VA,
                children: A.intl.string(A.t["v/S/PG"]),
            }),
            h &&
                (0, l.jsx)(r.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: m.Ec,
                    children: A.intl.format(A.t["K+DH2o"], {
                        onClick: () => {
                            c.A.open(n, g.BEX.ROLES), t();
                        },
                    }),
                }),
        ],
    });
}
