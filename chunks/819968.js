s.d(t, { A: () => A });
var a = s(627968),
    n = s(64700),
    i = s(311907),
    l = s(397927),
    r = s(317525),
    d = s(147925),
    o = s(59375),
    c = s(391442),
    x = s(411342),
    m = s(652215),
    u = s(985018),
    h = s(441231);
let _ = "expanded-area";
function j(e) {
    let { attachments: t, role: s, roleLocked: i } = e,
        [r, m] = n.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(l.DUT, {
                className: h.YA,
                onClick: () => {
                    m((e) => !e);
                },
                "aria-expanded": r,
                "aria-controls": _,
                children: [
                    (0, a.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: r ? u.intl.string(u.t.DKNxgB) : u.intl.string(u.t.ESEKua),
                    }),
                    (0, a.jsx)(d.A, { className: h.Rq, direction: r ? d.A.Directions.UP : d.A.Directions.DOWN }),
                ],
            }),
            (0, a.jsx)(l.hKd, { size: 12 }),
            r &&
                (0, a.jsxs)("ul", {
                    className: h.cu,
                    id: _,
                    children: [
                        (0, a.jsx)(c.A, {
                            label: u.intl.string(u.t.DWYJua),
                            children: (0, a.jsx)("ul", {
                                className: h.yO,
                                children: t.map((e) => (0, a.jsx)(o.A, { attachment: e }, e.id)),
                            }),
                        }),
                        null != s &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)("div", { className: h.me }),
                                    (0, a.jsx)(c.A, {
                                        label: u.intl.string(u.t.o9xphc),
                                        children: (0, a.jsx)(x.A, {
                                            role: s,
                                            textVariant: "text-md/medium",
                                            locked: i,
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
        ],
    });
}
function A(e) {
    let { listing: t } = e,
        s = t.attachments ?? [],
        n = (0, i.bG)([r.A], () => r.A.getRole(t.guild_id, t.role_id ?? m.dJq)),
        l = !t.has_entitlement;
    return 0 === s.length && null == n
        ? null
        : 0 === s.length && null != n
          ? (0, a.jsx)(x.A, { role: n, textVariant: "text-md/medium", locked: l })
          : (0, a.jsx)(j, { attachments: s, role: n, roleLocked: l });
}
