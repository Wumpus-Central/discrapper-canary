n.d(e, { default: () => m });
var a = n(627968),
    i = n(64700),
    s = n(17928),
    o = n(189213),
    r = n(292666),
    l = n(834730),
    c = n(47167),
    u = n(734057),
    d = n(181079),
    h = n(422258),
    p = n(985018),
    x = n(832518);
function m(t) {
    let { channelId: e, onClose: n, transitionState: m, heading: k, formTitle: v } = t,
        C = (0, s.bG)([u.A], () => u.A.getChannel(e)),
        f = (0, c.Ay)(C),
        b = d.A.getNickname(e),
        [g, y] = i.useState(b ?? "");
    function j(t) {
        t.preventDefault(), (0, h.w6)(e, g), n();
    }
    return (0, a.jsx)("form", {
        onSubmit: j,
        children: (0, a.jsxs)(o.Modal, {
            title: k,
            actions: [
                { text: p.intl.string(p.t["ETE/oC"]), onClick: n, variant: "secondary" },
                { text: k, onClick: j, variant: "primary", type: "submit" },
            ],
            onClose: n,
            transitionState: m,
            children: [
                (0, a.jsx)(r.k, {
                    label: v,
                    value: g,
                    onChange: y,
                    placeholder: f ?? void 0,
                    maxLength: 100,
                    autoFocus: !0,
                }),
                (0, a.jsx)(l.E, {
                    className: x.h,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: p.intl.string(p.t["2vyz+N"]),
                }),
            ],
        }),
    });
}
