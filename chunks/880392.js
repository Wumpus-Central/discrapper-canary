l.d(t, { A: () => E });
var i = l(627968),
    s = l(64700),
    a = l(503698),
    n = l.n(a),
    r = l(20742),
    c = l(430993),
    d = l(364840),
    o = l(696208),
    u = l(311907),
    m = l(939249),
    x = l(834730),
    C = l(365199),
    g = l(289873),
    h = l(761508),
    j = l(573613),
    L = l(534514),
    _ = l(263063),
    p = l(519480),
    f = l(682557),
    A = l(985018),
    v = l(125039),
    S = l(853552),
    b = l(906471);
function I(e) {
    let { guild: t, onClick: l } = e;
    return (0, i.jsxs)(m.D, {
        className: v.y5,
        onClick: l,
        children: [
            (0, i.jsx)(_.Ay, { guild: t, size: _.Ay.Sizes.MEDIUM, active: !0 }),
            (0, i.jsx)(x.E, { className: v.J5, variant: "text-md/semibold", children: t.name }),
            (0, i.jsx)("img", { alt: "", src: b }),
        ],
    });
}
function N(e) {
    let { directoryChannelId: t, guild: l } = e,
        a = (0, u.bG)([p.A], () => p.A.getDirectoryEntry(t, l.id)),
        n = s.useRef(null);
    return (0, i.jsxs)("div", {
        className: v._S,
        children: [
            (0, i.jsx)(_.Ay, { guild: l, size: _.Ay.Sizes.MEDIUM, active: !0 }),
            (0, i.jsx)(x.E, { className: v.J5, variant: "text-md/normal", children: l.name }),
            (0, i.jsx)(f.A, {
                entry: a,
                targetElementRef: n,
                children: (e) => (0, i.jsx)(C.j, { ref: n, size: "md", color: "currentColor", ...e, className: v.IQ }),
            }),
        ],
    });
}
function E(e) {
    let t,
        {
            directoryChannelId: l,
            onGuildChosen: a,
            handleChooseCreate: u,
            directoryGuildName: m,
            availableGuilds: C,
            addedGuilds: _,
            loading: p,
        } = e,
        [f, b] = s.useState(0);
    return (
        (t = p
            ? (0, i.jsx)("div", { className: v.do, children: (0, i.jsx)(g.y, {}) })
            : 0 === f
              ? 0 === C.length
                  ? (0, i.jsxs)("div", {
                        className: v.do,
                        children: [
                            (0, i.jsx)("img", { src: S, alt: "", className: v.hd }),
                            (0, i.jsx)(x.E, {
                                className: v.BI,
                                color: "text-default",
                                variant: "text-md/normal",
                                children: A.intl.string(A.t.liuEhd),
                            }),
                        ],
                    })
                  : C.map((e) => (0, i.jsx)(I, { guild: e, onClick: () => a(e) }, e.id))
              : 0 === _.length
                ? (0, i.jsxs)("div", {
                      className: v.do,
                      children: [
                          (0, i.jsx)("img", { src: S, alt: "", className: v.hd }),
                          (0, i.jsx)(x.E, {
                              className: v.BI,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: A.intl.string(A.t.WJLuKK),
                          }),
                      ],
                  })
                : _.map((e) => (0, i.jsx)(N, { directoryChannelId: l, guild: e }, e.id))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.rQ, {
                    title: A.intl.formatToPlainString(A.t["9SKJdF"], { guildName: m }),
                    subtitle: A.intl.string(A.t.pYFZ9p),
                }),
                (0, i.jsx)(c.c, {
                    controls: (0, i.jsxs)(h.V, {
                        className: v.$H,
                        selectedItem: f,
                        onItemSelect: b,
                        type: "top",
                        look: "brand",
                        children: [
                            (0, i.jsx)(h.V.Item, {
                                className: n()(v.YU, { [v.xR]: 0 === f }),
                                id: 0,
                                children: A.intl.string(A.t.FTe8HS),
                            }),
                            (0, i.jsx)(h.V.Item, {
                                className: n()(v.YU, { [v.xR]: 1 === f }),
                                id: 1,
                                children: A.intl.string(A.t.epOumr),
                            }),
                        ],
                    }),
                    children: (0, i.jsx)(j.Ip, {
                        className: v.XG,
                        children: (0, i.jsx)("div", { className: v.OW, children: t }),
                    }),
                }),
                (0, i.jsxs)(d.j, {
                    children: [
                        (0, i.jsx)(L.D, {
                            variant: "heading-lg/semibold",
                            className: v.K8,
                            children: A.intl.string(A.t.pgCZRP),
                        }),
                        (0, i.jsx)(o.H, {
                            actionsFullWidth: !0,
                            actions: [{ variant: "secondary", text: A.intl.string(A.t.WqJbLi), onClick: u }],
                        }),
                    ],
                }),
            ],
        })
    );
}
