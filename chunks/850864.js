n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(399606),
    s = n(780384),
    a = n(481060),
    o = n(210887),
    c = n(430824),
    d = n(999382),
    u = n(8426),
    g = n(969632),
    m = n(998164),
    p = n(340189),
    f = n(507317),
    h = n(399614),
    x = n(387960),
    b = n(806742),
    j = n(388032),
    _ = n(197530),
    v = n(91716),
    C = n(470264),
    O = n(710043),
    y = n(847950);
function N(e) {
    let { guild: t, saveOnClose: n } = e,
        [c, d] = i.useState("new"),
        N = i.useMemo(
            () => [
                {
                    value: "new",
                    name: j.intl.string(j.t["4e5u3t"]),
                },
                {
                    value: "existing",
                    name: j.intl.string(j.t.cmkOsb),
                },
            ],
            [],
        ),
        E = (0, l.e7)([o.Z], () => o.Z.theme);
    i.useEffect(
        () => () => {
            let e = g.Z.getSettings();
            (0, u.oo)(t.id, e);
        },
        [n, t.id],
    );
    let I = i.useMemo(() => ((0, s.ap)(E) ? ("existing" === c ? C : y) : "existing" === c ? v : O), [c, E]);
    return (0, r.jsxs)("div", {
        className: _.page,
        children: [
            (0, r.jsxs)("div", {
                className: _.leftColumn,
                children: [
                    (0, r.jsx)(a.X6q, {
                        className: _.header,
                        variant: "heading-lg/extrabold",
                        children: j.intl.string(j.t.tbUZVl),
                    }),
                    (0, r.jsx)("div", {
                        className: _.descriptionSection,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: j.intl.string(j.t.DvHCq6),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: _.section,
                        children: (0, r.jsx)(b.Z, { guildId: t.id }),
                    }),
                    (0, r.jsx)("div", { className: _.sectionSeparator }),
                    (0, r.jsx)(a.X6q, {
                        className: _.header,
                        variant: "heading-lg/extrabold",
                        children: j.intl.string(j.t["roY/ws"]),
                    }),
                    (0, r.jsx)("div", {
                        className: _.descriptionSection,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: j.intl.format(j.t["/lWYYW"], {}),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: _.section,
                        children: (0, r.jsx)(p.Z, {}),
                    }),
                    (0, r.jsx)(m.Z, { guildId: t.id }),
                    (0, r.jsx)("div", { className: _.sectionSeparator }),
                    (0, r.jsx)(a.X6q, {
                        className: _.header,
                        variant: "heading-lg/extrabold",
                        children: j.intl.string(j.t.hEjHyM),
                    }),
                    (0, r.jsxs)("div", {
                        className: _.descriptionSection,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                color: "header-secondary",
                                children: j.intl.string(j.t.YnvKVF),
                            }),
                            (0, r.jsxs)("ul", {
                                className: _.bulletList,
                                children: [
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(a.Text, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "header-secondary",
                                            children: j.intl.string(j.t["6jEvRU"]),
                                        }),
                                    }),
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(a.Text, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "header-secondary",
                                            children: j.intl.string(j.t["Fq+UsL"]),
                                        }),
                                    }),
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(a.Text, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "header-secondary",
                                            children: j.intl.string(j.t.LeEPoK),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: _.section,
                        children: [(0, r.jsx)(x.Z, { guildId: t.id }), (0, r.jsx)(h.Z, { guildId: t.id })],
                    }),
                    (0, r.jsx)("div", { className: _.sectionSeparator }),
                    (0, r.jsx)(f.Z, { guild: t }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: _.rightColumn,
                children: [
                    (0, r.jsx)("div", {
                        className: _.centeredSection,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: j.intl.string(j.t.EVV6ub),
                        }),
                    }),
                    (0, r.jsx)("img", {
                        className: _.previewImage,
                        src: I,
                        alt: j.intl.string(j.t.ST4UOz),
                    }),
                    (0, r.jsx)(a.sY7, {
                        options: N,
                        value: c,
                        onChange: (e) => d(e.value),
                        look: "pill",
                    }),
                ],
            }),
        ],
    });
}
function E(e) {
    let { saveOnClose: t } = e,
        n = (0, l.e7)([d.Z, c.Z], () => {
            let e = d.Z.getGuildId();
            return c.Z.getGuild(e);
        });
    return null == n
        ? null
        : (0, r.jsx)(N, {
              guild: n,
              saveOnClose: t,
          });
}
