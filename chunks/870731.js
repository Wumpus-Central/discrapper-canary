n.d(t, { Z: () => C }), n(388685);
var l = n(54381),
    r = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(399606),
    c = n(28664),
    o = n(481060),
    u = n(239091),
    d = n(835473),
    p = n(925329),
    m = n(547972),
    f = n(556296),
    y = n(13140),
    b = n(52436),
    h = n(981631),
    v = n(332325),
    j = n(388032),
    g = n(245725);
let O = r.memo(function (e) {
        let { allClips: t } = e,
            { query: i, setQuery: a } = (0, b.f)(),
            d = (0, s.e7)([f.ZP], () => f.ZP.getKeybindForAction(h.kg4.SAVE_CLIP)),
            p = (0, b.f)(
                (e) =>
                    e.selectedUserIds.size > 0 ||
                    null != e.selectedActivity ||
                    null != e.selectedGuildId ||
                    null != e.selectedYear,
            ),
            O = r.useCallback(() => {
                (0, m.Z)(v.Z.CLIPS, { stackingBehavior: "stack" });
            }, []),
            x = r.useCallback(
                (e) => {
                    (0, u.jW)(e, async () => {
                        let { default: e } = await n.e("13170").then(n.bind(n, 446302));
                        return (n) => {
                            var r, i;
                            return (0, l.jsx)(
                                e,
                                ((r = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            l = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            l.forEach(function (t) {
                                                var l;
                                                (l = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = l);
                                            });
                                    }
                                    return e;
                                })({}, n)),
                                (i = i = { allClips: t }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var l = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, l);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                r),
                            );
                        };
                    });
                },
                [t],
            ),
            C = r.useCallback(() => a(""), [a]),
            w = null != d ? y.BB(d.shortcut, !0) : null;
        return (0, l.jsxs)("div", {
            className: g.sidebarHeader,
            children: [
                (0, l.jsxs)("div", {
                    className: g.profileHeader,
                    children: [
                        (0, l.jsxs)("div", {
                            className: g.titleWithKeybind,
                            children: [
                                (0, l.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    color: "header-primary",
                                    children: j.intl.string(j.t.z2jK6X),
                                }),
                                null != w &&
                                    (0, l.jsx)(o.M2$, {
                                        className: g.keybind,
                                        shortcut: w,
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: g.headerActions,
                            children: [
                                (0, l.jsx)(c.u, {
                                    text: j.intl.string(j.t.X7yRDm),
                                    children: (0, l.jsx)(o.hU, {
                                        onClick: x,
                                        icon: o.gXV,
                                        size: "sm",
                                        variant: p ? "active" : "icon-only",
                                        "aria-label": j.intl.string(j.t.X7yRDm),
                                    }),
                                }),
                                (0, l.jsx)(c.u, {
                                    text: j.intl.string(j.t["3D5yo/"]),
                                    children: (0, l.jsx)(o.hU, {
                                        onClick: O,
                                        icon: o.ewm,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": j.intl.string(j.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: g.searchContainer,
                    children: (0, l.jsx)(o.E1j, {
                        placeholder: j.intl.string(j.t["5h0QOP"]),
                        query: i,
                        onChange: a,
                        onClear: C,
                        size: "md",
                    }),
                }),
            ],
        });
    }),
    x = r.memo(function (e) {
        let { name: t, count: n, icon: r, isSelected: i, onClick: s } = e;
        return (0, l.jsxs)(o.P3F, {
            className: a()(g.gameItem, { [g.selected]: i }),
            onClick: s,
            children: [
                (0, l.jsxs)("div", {
                    className: g.gameItemContent,
                    children: [
                        r,
                        (0, l.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: g.gameName,
                            children: t,
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: g.countBadge,
                    children: (0, l.jsx)(o.Text, {
                        variant: "text-xs/semibold",
                        color: "currentColor",
                        children: n,
                    }),
                }),
            ],
        });
    });
function C(e) {
    let { clipsByGame: t, filteredClips: n, favoriteClips: i, allClips: a } = e,
        s = (0, b.f)((e) => e.selectedGameId),
        c = (0, b.f)((e) => e.setSelectedGameId),
        u = r.useMemo(() => t.map((e) => e.applicationId), [t]),
        m = (0, d.Z)(u),
        f = r.useCallback(() => c(null), [c]),
        y = r.useCallback(() => c("favorites"), [c]),
        h = r.useMemo(() => new Map(m.map((e) => [null == e ? void 0 : e.id, e])), [m]);
    return (0, l.jsxs)("div", {
        className: g.sidebar,
        children: [
            (0, l.jsx)(O, { allClips: a }),
            (0, l.jsxs)(o.zJl, {
                className: g.sidebarContent,
                fade: !0,
                children: [
                    (0, l.jsx)("div", {
                        className: g.sidebarSection,
                        children: (0, l.jsxs)("div", {
                            className: g.gamesList,
                            children: [
                                (0, l.jsx)(x, {
                                    name: j.intl.string(j.t.dPVrEv),
                                    count: n.length,
                                    icon: (0, l.jsx)(o.AlX, {}),
                                    isSelected: null === s,
                                    onClick: f,
                                }),
                                (0, l.jsx)(x, {
                                    name: j.intl.string(j.t["9rlCk1"]),
                                    count: i.length,
                                    icon: (0, l.jsx)(o.h_8, {}),
                                    isSelected: "favorites" === s,
                                    onClick: y,
                                }),
                            ],
                        }),
                    }),
                    t.length > 0 &&
                        (0, l.jsxs)("div", {
                            className: g.sidebarSection,
                            children: [
                                (0, l.jsx)(o.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-tertiary",
                                    className: g.sectionLabel,
                                    children: j.intl.string(j.t.URyqtP),
                                }),
                                (0, l.jsx)("div", {
                                    className: g.gamesList,
                                    children: t.map((e) => {
                                        let { name: t, count: n, applicationId: r } = e;
                                        return (0, l.jsx)(
                                            x,
                                            {
                                                name: t,
                                                count: n,
                                                icon: (0, l.jsx)(p.Z, {
                                                    game: h.get(r),
                                                    size: p.A.XSMALL,
                                                }),
                                                isSelected: s === r,
                                                onClick: () => c(r),
                                            },
                                            r,
                                        );
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
