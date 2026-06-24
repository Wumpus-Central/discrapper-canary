l.d(i, { default: () => T });
var r = l(627968),
    n = l(64700),
    t = l(980707),
    d = l(477782),
    a = l(358367),
    c = l(793574),
    o = l(581298),
    s = l(766075),
    u = l(456283),
    v = l(17928),
    b = l(406810),
    p = l(848847),
    h = l(148810),
    y = l(521502),
    A = l(380610),
    g = l(390486),
    k = l(540999),
    x = l(375708),
    j = l(990581),
    f = l(949091);
let T = (0, a.A)(
    function (e) {
        let i = (function () {
                let e = (0, v.bG)([y.A], () =>
                        (0, A.kK)() ? y.A.getCurrentBuildOverride().overrides?.discord_web : null,
                    ),
                    i = (0, v.bG)([k.A], () => k.A.isDeveloper),
                    l = n.useMemo(() => (i ? (0, g.H)() : []), [i]),
                    [t, a] = n.useState(!1);
                async function c(i) {
                    if (null == i || i.id !== e?.id)
                        try {
                            a(!0),
                                (null != i ? await (0, h.oA)(i.payload) : await (0, h.iD)()).ok &&
                                    window.location.reload(!0);
                        } finally {
                            a(!1);
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
                                    leadingAccessory: { type: "icon", icon: b.O },
                                    children: l.map((i) =>
                                        (0, r.jsx)(
                                            d.iD,
                                            {
                                                id: i.id,
                                                label: i.id,
                                                group: "recent-build-overrides",
                                                checked: i.id === e?.id,
                                                action: () => c(i),
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
                                    action: () => c(null),
                                    color: "danger",
                                },
                                "clear-build-override",
                            ),
                    ],
                });
            })(),
            l = (0, f.A)(!0),
            a = (function (e, i) {
                let { node: l } = (0, o.Ay)(e, ""),
                    [t, a] = n.useState(l);
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
                                    let t, a, c, o;
                                    return (
                                        (i = e),
                                        (l = n),
                                        (t = i.useTitle?.()),
                                        (a = i.useMenu?.()),
                                        (c = "destructive" === i.variant ? "danger" : void 0),
                                        (o = i.onClick ?? (() => l(i.key))),
                                        (0, r.jsx)(
                                            d.Dr,
                                            {
                                                label: t,
                                                id: i.key,
                                                leadingAccessory: { type: "icon", icon: i.icon },
                                                iconLeft: i.icon,
                                                color: c,
                                                action: o,
                                                children: a,
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
            children: [a, null != l && (0, r.jsx)(d.rX, { children: l }), i],
        });
    },
    [c.A.CONTEXT_MENU, c.A.USER_SETTINGS_MENU],
);
