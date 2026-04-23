"use strict";
i.d(t, { A: () => s });
var n = i(627968),
    r = i(64700),
    a = i(477782),
    o = i(669550);
function s(e, t) {
    let { node: i } = (0, o.Ay)(e, ""),
        [s, l] = r.useState(i);
    return s.layout.map((e) => {
        var i, r;
        let o;
        return (
            (i = e),
            (r = t),
            (o = i.useTitle?.()),
            (0, n.jsx)(
                a.rX,
                {
                    label: o,
                    children: i.layout.map((e) => {
                        var t, i;
                        let o, s, l, d;
                        return (
                            (t = e),
                            (i = r),
                            (o = t.useTitle?.()),
                            (s = t.useMenu?.()),
                            (l = "destructive" === t.variant ? "danger" : void 0),
                            (d = t.onClick ?? (() => i(t.key))),
                            (0, n.jsx)(
                                a.Dr,
                                {
                                    label: o,
                                    id: t.key,
                                    leadingAccessory: { type: "icon", icon: t.icon },
                                    iconLeft: t.icon,
                                    color: l,
                                    action: d,
                                    children: s,
                                },
                                t.key,
                            )
                        );
                    }),
                },
                i.key,
            )
        );
    });
}
