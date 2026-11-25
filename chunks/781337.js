var i = t(477900);
t(582128);
var o = t(855986),
    n = t(833272),
    l = t(916099),
    c = t(175841),
    s = t(555704),
    a = t(406810),
    d = t(48507),
    u = t(165862),
    b = t(477782),
    p = t(442433),
    A = t(554375),
    j = t(817281),
    y = t(4703),
    f = t(121681),
    g = t(7584),
    k = t(964404),
    h = t(690521),
    m = t(627167),
    x = t(968088),
    N = t(792996),
    E = t(513075);
let I = n.A.convert.fromCodePoint("1f44b"),
    L = [
        { order: m.N.DEFAULT, label: N.t.bBvAEH, icon: l.ListBulletsIcon },
        { order: m.N.NEWEST, label: x.default.L7XfA6, icon: c.SparklesIcon },
        { order: m.N.FREQUENT, label: x.default.rt73eS, icon: s.AnalyticsIcon },
        { order: m.N.RECENT, label: x.default["+ARzoH"], icon: a.ClockIcon },
        { order: m.N.ALPHABETICAL, label: x.default.LzorWu, icon: d.LettersIcon },
    ];
function S(e) {
    return h.Ay.getURL(I + e);
}
function v(e) {
    let { surrogate: r } = e;
    return (0, i.jsx)("img", { "aria-hidden": !0, alt: "", className: E.N, src: S(r) });
}
t.d(
    r,
    {},
    {
        default: function (e) {
            let { onSelect: r } = e,
                t = (0, o.bG)([f.Ay], () => f.Ay.diversitySurrogate),
                n = (0, o.bG)([k.Ay], () => k.Ay.emojiPickerSortOrder);
            return (0, i.jsx)(u.W, {
                navId: "emoji-picker-options",
                onClose: p.Z_,
                onSelect: r,
                "aria-label": N.intl.string(N.t["+1H47t"]),
                children: (0, i.jsxs)(b.rX, {
                    children: [
                        (0, i.jsx)(b.Dr, {
                            id: "sort-by",
                            label: N.intl.string(N.t.LxVjvJ),
                            children: L.map((e) => {
                                let { order: r, label: t, icon: o } = e;
                                return (0, i.jsx)(
                                    b.iD,
                                    {
                                        id: `sort-by-${r}`,
                                        group: "emoji-sort-order",
                                        label: N.intl.string(t),
                                        leftIcon: o,
                                        leadingAccessory: { type: "icon", icon: o },
                                        checked: n === r,
                                        action: () => {
                                            ((0, p.Z_)(), j.Ay.updatedUnsyncedSettings({ emojiPickerSortOrder: r }));
                                        },
                                    },
                                    r,
                                );
                            }),
                        }),
                        (0, i.jsx)(b.Dr, {
                            id: "skin-tone",
                            label: N.intl.string(x.default.Qaxl2i),
                            icon: (0, i.jsx)(v, { surrogate: t }),
                            leadingAccessory: { type: "emoji", src: S(t) },
                            children: ["", ...g.W$].map((e) =>
                                (0, i.jsx)(
                                    b.iD,
                                    {
                                        id: `skin-tone-${"" === e ? "default" : e}`,
                                        group: "emoji-skin-tone",
                                        label: (0, y.r)(e),
                                        leftIcon: (0, i.jsx)(v, { surrogate: e }),
                                        leadingAccessory: { type: "emoji", src: S(e) },
                                        checked: t === e,
                                        action: () => {
                                            ((0, p.Z_)(), (0, A.dK)(e));
                                        },
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
            });
        },
    },
);
