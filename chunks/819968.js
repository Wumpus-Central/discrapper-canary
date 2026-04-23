s.d(t, { A: () => g });
var a = s(627968),
    i = s(64700),
    l = s(311907),
    n = s(939249),
    r = s(834730),
    o = s(696986),
    c = s(317525),
    d = s(147925),
    x = s(59375),
    m = s(391442),
    h = s(411342),
    u = s(652215),
    _ = s(985018),
    f = s(441231);
let j = "expanded-area";
function A(e) {
    let { attachments: t, role: s, roleLocked: l } = e,
        [c, u] = i.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(n.D, {
                className: f.YA,
                onClick: () => {
                    u((e) => !e);
                },
                "aria-expanded": c,
                "aria-controls": j,
                children: [
                    (0, a.jsx)(r.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: c ? _.intl.string(_.t.DKNxgB) : _.intl.string(_.t.ESEKua),
                    }),
                    (0, a.jsx)(d.A, { className: f.Rq, direction: c ? d.A.Directions.UP : d.A.Directions.DOWN }),
                ],
            }),
            (0, a.jsx)(o.h, { size: 12 }),
            c &&
                (0, a.jsxs)("ul", {
                    className: f.cu,
                    id: j,
                    children: [
                        (0, a.jsx)(m.A, {
                            label: _.intl.string(_.t.DWYJua),
                            children: (0, a.jsx)("ul", {
                                className: f.yO,
                                children: t.map((e) => (0, a.jsx)(x.A, { attachment: e }, e.id)),
                            }),
                        }),
                        null != s &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)("div", { className: f.me }),
                                    (0, a.jsx)(m.A, {
                                        label: _.intl.string(_.t.o9xphc),
                                        children: (0, a.jsx)(h.A, {
                                            role: s,
                                            textVariant: "text-md/medium",
                                            locked: l,
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
        ],
    });
}
function g(e) {
    let { listing: t } = e,
        s = t.attachments ?? [],
        i = (0, l.bG)([c.A], () => c.A.getRole(t.guild_id, t.role_id ?? u.dJq)),
        n = !t.has_entitlement;
    return 0 === s.length && null == i
        ? null
        : 0 === s.length && null != i
          ? (0, a.jsx)(h.A, { role: i, textVariant: "text-md/medium", locked: n })
          : (0, a.jsx)(A, { attachments: s, role: i, roleLocked: n });
}
