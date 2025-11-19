n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(399606),
    a = n(780384),
    s = n(481060),
    o = n(210887),
    c = n(430824),
    d = n(999382),
    u = n(8426),
    g = n(969632),
    m = n(998164),
    p = n(340189),
    f = n(507317),
    h = n(399614),
    b = n(387960),
    x = n(806742),
    j = n(388032),
    _ = n(359449),
    v = n(91716),
    O = n(470264),
    C = n(710043),
    y = n(847950);
function N(e) {
    let { guild: t, saveOnClose: n } = e,
        [c, d] = i.useState("new"),
        N = i.useMemo(
            () => [
                {
                    value: "new",
                    name: j.intl.string(j.t["4e5u3l"]),
                },
                {
                    value: "existing",
                    name: j.intl.string(j.t.cmkOsU),
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
    let I = i.useMemo(() => ((0, a.ap)(E) ? ("existing" === c ? O : y) : "existing" === c ? v : C), [c, E]);
    return (0, r.jsxs)("div", {
        className: _.page,
        children: [
            (0, r.jsxs)("div", {
                className: _.leftColumn,
                children: [
                    (0, r.jsx)(s.Heading, {
                        className: _.header,
                        variant: "heading-lg/extrabold",
                        children: j.intl.string(j.t.tbUZVr),
                    }),
                    (0, r.jsx)("div", {
                        className: _.descriptionSection,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: j.intl.string(j.t.DvHCq5),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: _.section,
                        children: (0, r.jsx)(x.Z, { guildId: t.id }),
                    }),
                    (0, r.jsx)("div", { className: _.sectionSeparator }),
                    (0, r.jsx)(s.Heading, {
                        className: _.header,
                        variant: "heading-lg/extrabold",
                        children: j.intl.string(j.t["roY/wu"]),
                    }),
                    (0, r.jsx)("div", {
                        className: _.descriptionSection,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: j.intl.format(j.t["/lWYYS"], {}),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: _.section,
                        children: (0, r.jsx)(p.Z, {}),
                    }),
                    (0, r.jsx)(m.Z, { guildId: t.id }),
                    (0, r.jsx)("div", { className: _.sectionSeparator }),
                    (0, r.jsx)(s.Heading, {
                        className: _.header,
                        variant: "heading-lg/extrabold",
                        children: j.intl.string(j.t.hEjHyH),
                    }),
                    (0, r.jsxs)("div", {
                        className: _.descriptionSection,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "header-secondary",
                                children: j.intl.string(j.t.YnvKVE),
                            }),
                            (0, r.jsxs)("ul", {
                                className: _.bulletList,
                                children: [
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(s.Text, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "header-secondary",
                                            children: j.intl.string(j.t["6jEvRU"]),
                                        }),
                                    }),
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(s.Text, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "header-secondary",
                                            children: j.intl.string(j.t["Fq+UsH"]),
                                        }),
                                    }),
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(s.Text, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "header-secondary",
                                            children: j.intl.string(j.t.LeEPoH),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: _.section,
                        children: [(0, r.jsx)(b.Z, { guildId: t.id }), (0, r.jsx)(h.Z, { guildId: t.id })],
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
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: j.intl.string(j.t.EVV6uZ),
                        }),
                    }),
                    (0, r.jsx)("img", {
                        className: _.previewImage,
                        src: I,
                        alt: j.intl.string(j.t.ST4UOy),
                    }),
                    (0, r.jsx)(s.sY7, {
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
