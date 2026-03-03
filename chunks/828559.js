n.d(i, { A: () => o });
var l = n(627968),
    r = n(64700),
    t = n(397927),
    d = n(669550);
function o(e, i) {
    let { node: n } = (0, d.Ay)(e, ""),
        [o, a] = r.useState(n);
    return o.layout.map((e) => {
        var n, r;
        let d;
        return (
            (n = e),
            (r = i),
            (d = n.useTitle?.()),
            (0, l.jsx)(
                t.rXV,
                {
                    label: d,
                    children: n.layout.map((e) => {
                        var i, n;
                        let d, o, a, s;
                        return (
                            (i = e),
                            (n = r),
                            (d = i.useTitle?.()),
                            (o = i.useMenu?.()),
                            (a = "destructive" === i.variant ? "danger" : void 0),
                            (s = i.onClick ?? (() => n(i.key))),
                            (0, l.jsx)(
                                t.Drp,
                                {
                                    label: d,
                                    id: i.key,
                                    leadingAccessory: { type: "icon", icon: i.icon },
                                    iconLeft: i.icon,
                                    color: a,
                                    action: s,
                                    children: o,
                                },
                                i.key,
                            )
                        );
                    }),
                },
                n.key,
            )
        );
    });
}
