n.d(l, { A: () => u });
var t = n(477900),
    i = n(477782),
    d = n(783977),
    s = n(398590),
    o = n(790271),
    a = n(944771),
    c = n(101715),
    r = n(652215);
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        l = (0, o.ni)("playground_menu"),
        n = (0, a.useComponentPlaygroundConfigs)(l);
    if (!l) return null;
    let u = n.flatMap((e) => e.collections);
    return (0, t.jsx)(
        i.Dr,
        {
            id: "playgrounds",
            label: "Playgrounds",
            leadingAccessory: e ? { type: "icon", icon: d.R } : void 0,
            action: () => {
                (c.x.setState({ selectedCollection: null, selectedStory: null }),
                    (0, s.id)(r.zgK.COMPONENT_PLAYGROUND));
            },
            children: (0, t.jsx)(
                i.rX,
                {
                    children: u.map((e) =>
                        (0, t.jsx)(
                            i.Dr,
                            {
                                id: `${e.id}-playground`,
                                label: e.name,
                                action: () => {
                                    (c.x.setState({ selectedCollection: e.id, selectedStory: null }),
                                        (0, s.id)(r.zgK.COMPONENT_PLAYGROUND));
                                },
                            },
                            e.id,
                        ),
                    ),
                },
                "design-systems",
            ),
        },
        "playgrounds",
    );
}
