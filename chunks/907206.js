r.d(i, { default: () => m });
var l = r(627968),
    n = r(64700),
    t = r(980707),
    d = r(477782),
    c = r(358367),
    s = r(793574),
    a = r(581298),
    o = r(766075),
    u = r(755322),
    v = r(17928),
    b = r(406810),
    p = r(848847),
    y = r(148810),
    h = r(521502),
    A = r(380610),
    g = r(390486),
    k = r(540999),
    x = r(375708),
    j = r(990581),
    f = r(949091);
let m = (0, c.A)(
    function (e) {
        let i = (function () {
                let e = (0, v.bG)([h.A], () =>
                        (0, A.kK)() ? h.A.getCurrentBuildOverride().overrides?.discord_web : null,
                    ),
                    i = (0, v.bG)([k.A], () => k.A.isDeveloper),
                    r = n.useMemo(() => (i ? (0, g.H)() : []), [i]),
                    [t, c] = n.useState(!1),
                    s = async (i) => {
                        if (null == i || i.id !== e?.id)
                            try {
                                c(!0),
                                    (null != i ? await (0, y.oA)(i.payload) : await (0, y.iD)()).ok &&
                                        window.location.reload(!0);
                            } finally {
                                c(!1);
                            }
                    };
                return (0, l.jsxs)(d.rX, {
                    children: [
                        i &&
                            r.length > 0 &&
                            (0, l.jsx)(
                                d.Dr,
                                {
                                    label: "Recent Build Overrides",
                                    id: "recent-build-overrides",
                                    leadingAccessory: { type: "icon", icon: b.O },
                                    children: r.map((i) =>
                                        (0, l.jsx)(
                                            d.iD,
                                            {
                                                id: i.id,
                                                label: i.id,
                                                group: "recent-build-overrides",
                                                checked: i.id === e?.id,
                                                action: () => s(i),
                                            },
                                            i.id,
                                        ),
                                    ),
                                },
                                "recent-build-overrides",
                            ),
                        null != e &&
                            (0, l.jsx)(
                                d.Dr,
                                {
                                    id: "clear-build-override",
                                    disabled: t,
                                    leadingAccessory: { type: "icon", icon: p.H },
                                    iconLeft: p.H,
                                    label: x.intl.string(x.t["/Nz9rY"]),
                                    subtext: (0, l.jsx)("div", {
                                        className: j.Z,
                                        children: (0, l.jsx)("div", { className: j.i, children: e.id }),
                                    }),
                                    action: () => s(null),
                                    color: "danger",
                                },
                                "clear-build-override",
                            ),
                    ],
                });
            })(),
            r = (0, f.A)(!0),
            c = (function (e, i) {
                let { node: r } = (0, a.Ay)(e, ""),
                    [t, c] = n.useState(r);
                return t.layout.map((e) => {
                    var r, n;
                    let t;
                    return (
                        (r = e),
                        (n = i),
                        (t = r.useTitle?.()),
                        (0, l.jsx)(
                            d.rX,
                            {
                                label: t,
                                children: r.layout.map((e) => {
                                    var i, r;
                                    let t, c, s, a;
                                    return (
                                        (i = e),
                                        (r = n),
                                        (t = i.useTitle?.()),
                                        (c = i.useMenu?.()),
                                        (s = "destructive" === i.variant ? "danger" : void 0),
                                        (a = i.onClick ?? (() => r(i.key))),
                                        (0, l.jsx)(
                                            d.Dr,
                                            {
                                                label: t,
                                                id: i.key,
                                                leadingAccessory: { type: "icon", icon: i.icon },
                                                iconLeft: i.icon,
                                                color: s,
                                                action: a,
                                                children: c,
                                            },
                                            i.key,
                                        )
                                    );
                                }),
                            },
                            r.key,
                        )
                    );
                });
            })(u.D, (e) => (0, o.openUserSettings)(e));
        return (0, l.jsxs)(t.W, {
            navId: "settings-menu",
            "aria-label": x.intl.string(x.t.opYYHn),
            onSelect: void 0,
            ...e,
            children: [c, null != r && (0, l.jsx)(d.rX, { children: r }), i],
        });
    },
    [s.A.CONTEXT_MENU, s.A.USER_SETTINGS_MENU],
);
