l.d(t, { A: () => _ });
var i = l(627968),
    s = l(64700),
    a = l(503698),
    n = l.n(a),
    r = l(158954),
    c = l(311907),
    d = l(397927),
    o = l(263063),
    u = l(519480),
    x = l(682557),
    m = l(985018),
    C = l(65916),
    g = l(853552),
    h = l(906471);
function j(e) {
    let { guild: t, onClick: l } = e;
    return (0, i.jsxs)(d.DUT, {
        className: C.y5,
        onClick: l,
        children: [
            (0, i.jsx)(o.Ay, { guild: t, size: o.Ay.Sizes.MEDIUM, active: !0 }),
            (0, i.jsx)(d.Text, { className: C.J5, variant: "text-md/semibold", children: t.name }),
            (0, i.jsx)("img", { alt: "", src: h }),
        ],
    });
}
function L(e) {
    let { directoryChannelId: t, guild: l } = e,
        a = (0, c.bG)([u.A], () => u.A.getDirectoryEntry(t, l.id)),
        n = s.useRef(null);
    return (0, i.jsxs)("div", {
        className: C._S,
        children: [
            (0, i.jsx)(o.Ay, { guild: l, size: o.Ay.Sizes.MEDIUM, active: !0 }),
            (0, i.jsx)(d.Text, { className: C.J5, variant: "text-md/normal", children: l.name }),
            (0, i.jsx)(x.A, {
                entry: a,
                targetElementRef: n,
                children: (e) =>
                    (0, i.jsx)(d.jNK, { ref: n, size: "md", color: "currentColor", ...e, className: C.IQ }),
            }),
        ],
    });
}
function _(e) {
    let t,
        {
            directoryChannelId: l,
            onGuildChosen: a,
            handleChooseCreate: c,
            directoryGuildName: o,
            availableGuilds: u,
            addedGuilds: x,
            loading: h,
        } = e,
        [_, f] = s.useState(0);
    return (
        (t = h
            ? (0, i.jsx)("div", { className: C.do, children: (0, i.jsx)(d.y$y, {}) })
            : 0 === _
              ? 0 === u.length
                  ? (0, i.jsxs)("div", {
                        className: C.do,
                        children: [
                            (0, i.jsx)("img", { src: g, alt: "", className: C.hd }),
                            (0, i.jsx)(d.Text, {
                                className: C.BI,
                                color: "text-default",
                                variant: "text-md/normal",
                                children: m.intl.string(m.t.liuEhd),
                            }),
                        ],
                    })
                  : u.map((e) => (0, i.jsx)(j, { guild: e, onClick: () => a(e) }, e.id))
              : 0 === x.length
                ? (0, i.jsxs)("div", {
                      className: C.do,
                      children: [
                          (0, i.jsx)("img", { src: g, alt: "", className: C.hd }),
                          (0, i.jsx)(d.Text, {
                              className: C.BI,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: m.intl.string(m.t.WJLuKK),
                          }),
                      ],
                  })
                : x.map((e) => (0, i.jsx)(L, { directoryChannelId: l, guild: e }, e.id))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.rQ0, {
                    title: m.intl.formatToPlainString(m.t["9SKJdF"], { guildName: o }),
                    subtitle: m.intl.string(m.t.pYFZ9p),
                }),
                (0, i.jsx)(r.cwr, {
                    controls: (0, i.jsxs)(d.VQ0, {
                        className: C.$H,
                        selectedItem: _,
                        onItemSelect: f,
                        type: "top",
                        look: "brand",
                        children: [
                            (0, i.jsx)(d.VQ0.Item, {
                                className: n()(C.YU, { [C.xR]: 0 === _ }),
                                id: 0,
                                children: m.intl.string(m.t.FTe8HS),
                            }),
                            (0, i.jsx)(d.VQ0.Item, {
                                className: n()(C.YU, { [C.xR]: 1 === _ }),
                                id: 1,
                                children: m.intl.string(m.t.epOumr),
                            }),
                        ],
                    }),
                    children: (0, i.jsx)(d.HOs, {
                        className: C.XG,
                        children: (0, i.jsx)("div", { className: C.OW, children: t }),
                    }),
                }),
                (0, i.jsxs)(r.jlY, {
                    children: [
                        (0, i.jsx)(d.Heading, {
                            variant: "heading-lg/semibold",
                            className: C.K8,
                            children: m.intl.string(m.t.pgCZRP),
                        }),
                        (0, i.jsx)(r.H7u, {
                            actionsFullWidth: !0,
                            actions: [{ variant: "secondary", text: m.intl.string(m.t.WqJbLi), onClick: c }],
                        }),
                    ],
                }),
            ],
        })
    );
}
