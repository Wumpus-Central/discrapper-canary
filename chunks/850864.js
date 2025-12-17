n.d(t, { Z: () => I }), n(388685);
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
    f = n(998164),
    m = n(340189),
    b = n(507317),
    p = n(399614),
    h = n(387960),
    x = n(806742),
    j = n(388032),
    v = n(551952),
    O = n(91716),
    C = n(470264),
    y = n(710043),
    N = n(847950);
function E(e) {
    let { guild: t, saveOnClose: n } = e,
        [c, d] = i.useState("new"),
        E = i.useMemo(
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
        I = (0, l.e7)([o.Z], () => o.Z.theme);
    i.useEffect(
        () => () => {
            let e = g.Z.getSettings();
            (0, u.oo)(t.id, e);
        },
        [n, t.id],
    );
    let S = i.useMemo(() => ((0, a.ap)(I) ? ("existing" === c ? C : N) : "existing" === c ? O : y), [c, I]);
    return (0, r.jsxs)("div", {
        className: v.page,
        children: [
            (0, r.jsxs)("div", {
                className: v.leftColumn,
                children: [
                    (0, r.jsx)(s.Heading, {
                        className: v.header,
                        variant: "heading-lg/extrabold",
                        children: j.intl.string(j.t.tbUZVr),
                    }),
                    (0, r.jsx)("div", {
                        className: v.descriptionSection,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: j.intl.string(j.t.DvHCq5),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: v.section,
                        children: (0, r.jsx)(x.Z, { guildId: t.id }),
                    }),
                    (0, r.jsx)("div", { className: v.sectionSeparator }),
                    (0, r.jsx)(s.Heading, {
                        className: v.header,
                        variant: "heading-lg/extrabold",
                        children: j.intl.string(j.t["roY/wu"]),
                    }),
                    (0, r.jsx)("div", {
                        className: v.descriptionSection,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: j.intl.format(j.t["/lWYYS"], {}),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: v.section,
                        children: (0, r.jsx)(m.Z, {}),
                    }),
                    (0, r.jsx)(f.Z, { guildId: t.id }),
                    (0, r.jsx)("div", { className: v.sectionSeparator }),
                    (0, r.jsx)(s.Heading, {
                        className: v.header,
                        variant: "heading-lg/extrabold",
                        children: j.intl.string(j.t.hEjHyH),
                    }),
                    (0, r.jsxs)("div", {
                        className: v.descriptionSection,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: j.intl.string(j.t.YnvKVE),
                            }),
                            (0, r.jsxs)("ul", {
                                className: v.bulletList,
                                children: [
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(s.Text, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-default",
                                            children: j.intl.string(j.t["6jEvRU"]),
                                        }),
                                    }),
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(s.Text, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-default",
                                            children: j.intl.string(j.t["Fq+UsH"]),
                                        }),
                                    }),
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(s.Text, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-default",
                                            children: j.intl.string(j.t.LeEPoH),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: v.section,
                        children: [(0, r.jsx)(h.Z, { guildId: t.id }), (0, r.jsx)(p.Z, { guildId: t.id })],
                    }),
                    (0, r.jsx)("div", { className: v.sectionSeparator }),
                    (0, r.jsx)(b.Z, { guild: t }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: v.rightColumn,
                children: [
                    (0, r.jsx)("div", {
                        className: v.centeredSection,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: j.intl.string(j.t.EVV6uZ),
                        }),
                    }),
                    (0, r.jsx)("img", {
                        className: v.previewImage,
                        src: S,
                        alt: j.intl.string(j.t.ST4UOy),
                    }),
                    (0, r.jsx)(s.sY7, {
                        options: E,
                        value: c,
                        onChange: (e) => d(e.value),
                        look: "pill",
                    }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { saveOnClose: t } = e,
        n = (0, l.e7)([d.Z, c.Z], () => {
            let e = d.Z.getGuildId();
            return c.Z.getGuild(e);
        });
    return null == n
        ? null
        : (0, r.jsx)(E, {
              guild: n,
              saveOnClose: t,
          });
}
