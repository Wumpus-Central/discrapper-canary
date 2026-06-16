n.d(e, { default: () => x });
var a = n(627968),
    i = n(64700),
    s = n(17928),
    l = n(189213),
    o = n(292666),
    r = n(834730),
    c = n(47167),
    u = n(734057),
    d = n(181079),
    h = n(422258),
    p = n(375708),
    m = n(832518);
function x(t) {
    let { channelId: e, onClose: n, transitionState: x, heading: k, formTitle: v } = t,
        C = (0, s.bG)([u.A], () => u.A.getChannel(e)),
        b = (0, c.Ay)(C),
        f = d.A.getNickname(e),
        [g, y] = i.useState(f ?? "");
    function j(t) {
        t.preventDefault(), (0, h.w6)(e, g), n();
    }
    return (0, a.jsx)("form", {
        onSubmit: j,
        children: (0, a.jsxs)(l.Modal, {
            title: k,
            actions: [
                { text: p.intl.string(p.t["ETE/oC"]), onClick: n, variant: "secondary" },
                { text: k, onClick: j, variant: "primary", type: "submit" },
            ],
            onClose: n,
            transitionState: x,
            children: [
                (0, a.jsx)(o.k, {
                    label: v,
                    value: g,
                    onChange: y,
                    placeholder: b ?? void 0,
                    maxLength: 100,
                    autoFocus: !0,
                }),
                (0, a.jsx)(r.E, {
                    className: m.h,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: p.intl.string(p.t["2vyz+N"]),
                }),
            ],
        }),
    });
}
