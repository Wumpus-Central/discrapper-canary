n.d(t, { A: () => j }), n(896048);
var r = n(627968),
    a = n(64700),
    l = n(311907),
    s = n(397927),
    i = n(317525),
    c = n(147925),
    o = n(59375),
    d = n(391442),
    u = n(411342),
    x = n(652215),
    m = n(985018),
    h = n(392294);
let f = "expanded-area";
function b(e) {
    let { attachments: t, role: n, roleLocked: l } = e,
        [i, x] = a.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.DUT, {
                className: h.YA,
                onClick: () => {
                    x((e) => !e);
                },
                "aria-expanded": i,
                "aria-controls": f,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: i ? m.intl.string(m.t.DKNxgB) : m.intl.string(m.t.ESEKua),
                    }),
                    (0, r.jsx)(c.A, {
                        className: h.Rq,
                        direction: i ? c.A.Directions.UP : c.A.Directions.DOWN,
                    }),
                ],
            }),
            (0, r.jsx)(s.hKd, { size: 12 }),
            i &&
                (0, r.jsxs)("ul", {
                    className: h.cu,
                    id: f,
                    children: [
                        (0, r.jsx)(d.A, {
                            label: m.intl.string(m.t.DWYJua),
                            children: (0, r.jsx)("ul", {
                                className: h.yO,
                                children: t.map((e) => (0, r.jsx)(o.A, { attachment: e }, e.id)),
                            }),
                        }),
                        null != n &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", { className: h.me }),
                                    (0, r.jsx)(d.A, {
                                        label: m.intl.string(m.t.o9xphc),
                                        children: (0, r.jsx)(u.A, {
                                            role: n,
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
function j(e) {
    var t;
    let { listing: n } = e,
        a = null != (t = n.attachments) ? t : [],
        s = (0, l.bG)([i.A], () => {
            var e;
            return i.A.getRole(n.guild_id, null != (e = n.role_id) ? e : x.dJq);
        }),
        c = !n.has_entitlement;
    return 0 === a.length && null == s
        ? null
        : 0 === a.length && null != s
          ? (0, r.jsx)(u.A, {
                role: s,
                textVariant: "text-md/medium",
                locked: c,
            })
          : (0, r.jsx)(b, {
                attachments: a,
                role: s,
                roleLocked: c,
            });
}
