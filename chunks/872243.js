var a = n(477900),
    i = n(582128),
    s = n(855986),
    o = n(189213),
    r = n(95477),
    l = n(834730),
    c = n(47167),
    u = n(734057),
    d = n(181079),
    h = n(146092),
    p = n(792996),
    m = n(275585);
n.d(
    e,
    {},
    {
        default: function (t) {
            let { channelId: e, onClose: n, transitionState: k, heading: v, formTitle: x } = t,
                C = (0, s.bG)([u.A], () => u.A.getChannel(e)),
                b = (0, c.Ay)(C),
                f = d.A.getNickname(e),
                [g, y] = i.useState(f ?? "");
            function j(t) {
                (t.preventDefault(), (0, h.w6)(e, g), n());
            }
            return (0, a.jsx)("form", {
                onSubmit: j,
                children: (0, a.jsxs)(o.a, {
                    title: v,
                    actions: [
                        { text: p.intl.string(p.t["ETE/oC"]), onClick: n, variant: "secondary" },
                        { text: v, onClick: j, variant: "primary", type: "submit" },
                    ],
                    onClose: n,
                    transitionState: k,
                    children: [
                        (0, a.jsx)(r.k, {
                            label: x,
                            value: g,
                            onChange: y,
                            placeholder: b ?? void 0,
                            maxLength: 100,
                            autoFocus: !0,
                        }),
                        (0, a.jsx)(l.E, {
                            className: m.h,
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: p.intl.string(p.t["2vyz+N"]),
                        }),
                    ],
                }),
            });
        },
    },
);
