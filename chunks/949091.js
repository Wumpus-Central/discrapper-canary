var t = n(477900),
    i = n(477782),
    o = n(783977),
    s = n(398590),
    d = n(790271),
    r = n(944771),
    a = n(101715),
    c = n(652215);
n.d(
    l,
    {},
    {
        A: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                l = (0, d.ni)("playground_menu"),
                n = (0, r.useComponentPlaygroundConfigs)(l);
            if (!l) return null;
            let u = n.flatMap((e) => e.collections);
            return (0, t.jsx)(
                i.Dr,
                {
                    id: "playgrounds",
                    label: "Playgrounds",
                    leadingAccessory: e ? { type: "icon", icon: o.FiltersHorizontalIcon } : void 0,
                    action: () => {
                        (a.x.setState({ selectedCollection: null, selectedStory: null }),
                            (0, s.id)(c.zgK.COMPONENT_PLAYGROUND));
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
                                            (a.x.setState({ selectedCollection: e.id, selectedStory: null }),
                                                (0, s.id)(c.zgK.COMPONENT_PLAYGROUND));
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
