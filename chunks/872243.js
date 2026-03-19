n.d(e, { default: () => x });
var a = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(732955),
    o = n(397927),
    c = n(47167),
    l = n(734057),
    u = n(181079),
    d = n(422258),
    h = n(985018),
    p = n(366925);
function x(t) {
    let { channelId: e, onClose: n, transitionState: x, heading: m, formTitle: C } = t,
        g = (0, r.bG)([l.A, u.A], () => l.A.getChannel(e) ?? u.A.getCategoryRecord(e)),
        k = (0, c.Ay)(g),
        v = u.A.getNickname(e),
        [f, b] = i.useState(v ?? "");
    function y(t) {
        t.preventDefault(), (0, d.w6)(e, f), n();
    }
    return (0, a.jsx)("form", {
        onSubmit: y,
        children: (0, a.jsxs)(s.aFV, {
            title: m,
            actions: [
                { text: h.intl.string(h.t["ETE/oC"]), onClick: n, variant: "secondary" },
                { text: m, onClick: y, variant: "primary", type: "submit" },
            ],
            onClose: n,
            transitionState: x,
            children: [
                (0, a.jsx)(o.ksK, {
                    label: C,
                    value: f,
                    onChange: b,
                    placeholder: k ?? void 0,
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
