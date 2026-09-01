l.d(i, { default: () => T });
var r = l(477900),
    n = l(582128),
    t = l(980707),
    d = l(477782),
    c = l(358367),
    o = l(793574),
    a = l(581298),
    s = l(766075),
    u = l(242718),
    v = l(17928),
    b = l(406810),
    p = l(848847),
    h = l(148810),
    y = l(521502),
    k = l(380610),
    A = l(390486),
    g = l(540999),
    x = l(375708),
    j = l(650956),
    f = l(949091);
let T = (0, c.A)(
    function (e) {
        let i = (function () {
                let e = (0, v.bG)([y.A], () =>
                        (0, k.kK)() ? y.A.getCurrentBuildOverride().overrides?.discord_web : null,
                    ),
                    i = (0, v.bG)([g.A], () => g.A.isDeveloper),
                    l = n.useMemo(() => (i ? (0, A.H)() : []), [i]),
                    [t, c] = n.useState(!1);
                async function o(i) {
                    if (null == i || i.id !== e?.id)
                        try {
                            c(!0),
                                (null != i ? await (0, h.oA)(i.payload) : await (0, h.iD)()).ok &&
                                    window.location.reload(!0);
                        } finally {
                            c(!1);
                        }
                }
                return (0, r.jsxs)(d.rX, {
                    children: [
                        i &&
                            l.length > 0 &&
                            (0, r.jsx)(
                                d.Dr,
                                {
                                    label: "Recent Build Overrides",
                                    id: "recent-build-overrides",
                                    leadingAccessory: { type: "icon", icon: b.ClockIcon },
                                    children: l.map((i) =>
                                        (0, r.jsx)(
                                            d.iD,
                                            {
                                                id: i.id,
                                                label: i.id,
                                                group: "recent-build-overrides",
                                                checked: i.id === e?.id,
                                                action: () => o(i),
                                            },
                                            i.id,
                                        ),
                                    ),
                                },
                                "recent-build-overrides",
                            ),
                        null != e &&
                            (0, r.jsx)(
                                d.Dr,
                                {
                                    id: "clear-build-override",
                                    disabled: t,
                                    leadingAccessory: { type: "icon", icon: p.H },
                                    iconLeft: p.H,
                                    label: x.intl.string(x.t["/Nz9rY"]),
                                    subtext: (0, r.jsx)("div", {
                                        className: j.Z,
                                        children: (0, r.jsx)("div", { className: j.i, children: e.id }),
                                    }),
                                    action: () => o(null),
                                    color: "danger",
                                },
                                "clear-build-override",
                            ),
                    ],
                });
            })(),
            l = (0, f.A)(!0),
            c = (function (e, i) {
                let { node: l } = (0, a.Ay)(e, ""),
                    [t, c] = n.useState(l);
                return t.layout.map((e) => {
                    var l, n;
                    let t;
                    return (
                        (l = e),
                        (n = i),
                        (t = l.useTitle?.()),
                        (0, r.jsx)(
                            d.rX,
                            {
                                label: l.hideTitle ? void 0 : t,
                                "aria-label": l.hideTitle ? t : void 0,
                                children: l.layout.map((e) => {
                                    var i, l;
                                    let t, c, o, a;
                                    return (
                                        (i = e),
                                        (l = n),
                                        (t = i.useTitle?.()),
                                        (c = i.useMenu?.()),
                                        (o = "destructive" === i.variant ? "danger" : void 0),
                                        (a = i.onClick ?? (() => l(i.key))),
                                        (0, r.jsx)(
                                            d.Dr,
                                            {
                                                label: t,
                                                id: i.key,
                                                leadingAccessory: { type: "icon", icon: i.icon },
                                                iconLeft: i.icon,
                                                color: o,
                                                action: a,
                                                children: c,
                                            },
                                            i.key,
                                        )
                                    );
                                }),
                            },
                            l.key,
                        )
                    );
                });
            })(u.D, (e) => (0, s.openUserSettings)(e));
        return (0, r.jsxs)(t.W, {
            navId: "settings-menu",
            "aria-label": x.intl.string(x.t.opYYHn),
            onSelect: void 0,
            ...e,
            children: [c, null != l && (0, r.jsx)(d.rX, { children: l }), i],
        });
    },
    [o.A.CONTEXT_MENU, o.A.USER_SETTINGS_MENU],
);
