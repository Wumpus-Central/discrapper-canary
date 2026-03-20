n.d(e, { default: () => x });
var a = n(627968),
    i = n(64700),
    s = n(311907),
    r = n(732955),
    o = n(397927),
    l = n(47167),
    c = n(734057),
    u = n(181079),
    d = n(422258),
    h = n(985018),
    p = n(366925);
function x(t) {
    let { channelId: e, onClose: n, transitionState: x, heading: m, formTitle: k } = t,
        v = (0, s.bG)([c.A], () => c.A.getChannel(e)),
        C = (0, l.Ay)(v),
        f = u.A.getNickname(e),
        [b, g] = i.useState(f ?? "");
    function y(t) {
        t.preventDefault(), (0, d.w6)(e, b), n();
    }
    return (0, a.jsx)("form", {
        onSubmit: y,
        children: (0, a.jsxs)(r.aFV, {
            title: m,
            actions: [
                { text: h.intl.string(h.t["ETE/oC"]), onClick: n, variant: "secondary" },
                { text: m, onClick: y, variant: "primary", type: "submit" },
            ],
            onClose: n,
            transitionState: x,
            children: [
                (0, a.jsx)(o.ksK, {
                    label: k,
                    value: b,
                    onChange: g,
                    placeholder: C ?? void 0,
                    maxLength: 100,
                    autoFocus: !0,
                }),
                (0, a.jsx)(o.Text, {
                    className: p.h,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: h.intl.string(h.t["2vyz+N"]),
                }),
            ],
        }),
    });
}
