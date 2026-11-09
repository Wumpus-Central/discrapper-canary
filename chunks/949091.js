var t = n(477900),
    i = n(477782),
    a = n(783977),
    c = n(398590),
    o = n(790271),
    s = n(944771),
    d = n(101715),
    p = n(652215);
n.d(
    l,
    {},
    {
        A: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                l = (0, o.ni)("playground_menu"),
                n = (0, s.useComponentPlaygroundConfigs)(l);
            if (!l) return null;
            let u = n.flatMap((e) => e.collections);
            return (0, t.jsx)(
                i.Dr,
                {
                    id: "playgrounds",
                    label: "Playgrounds",
                    leadingAccessory: e ? { type: "icon", icon: a.FiltersHorizontalIcon } : void 0,
                    action: () => {
                        (d.x.setState({ selectedCollection: null, selectedStory: null }),
                            (0, c.id)(p.zgK.COMPONENT_PLAYGROUND));
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
                                            (d.x.setState({ selectedCollection: e.id, selectedStory: null }),
                                                (0, c.id)(p.zgK.COMPONENT_PLAYGROUND));
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
        },
    },
);
