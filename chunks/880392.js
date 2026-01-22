n.d(t, { A: () => h }), n(896048);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(158954),
    c = n(311907),
    d = n(397927),
    o = n(263063),
    u = n(519480),
    x = n(682557),
    m = n(985018),
    g = n(891674),
    C = n(853552),
    j = n(906471);
function b(e) {
    let { guild: t, onClick: n } = e;
    return (0, l.jsxs)(d.DUT, {
        className: g.y5,
        onClick: n,
        children: [
            (0, l.jsx)(o.A, {
                guild: t,
                size: o.A.Sizes.MEDIUM,
                active: !0,
            }),
            (0, l.jsx)(d.Text, {
                className: g.J5,
                variant: "text-md/semibold",
                children: t.name,
            }),
            (0, l.jsx)("img", {
                alt: "",
                src: j,
            }),
        ],
    });
}
function f(e) {
    let { directoryChannelId: t, guild: n } = e,
        s = (0, c.bG)([u.A], () => u.A.getDirectoryEntry(t, n.id)),
        a = i.useRef(null);
    return (0, l.jsxs)("div", {
        className: g._S,
        children: [
            (0, l.jsx)(o.A, {
                guild: n,
                size: o.A.Sizes.MEDIUM,
                active: !0,
            }),
            (0, l.jsx)(d.Text, {
                className: g.J5,
                variant: "text-md/normal",
                children: n.name,
            }),
            (0, l.jsx)(x.A, {
                entry: s,
                targetElementRef: a,
                children: (e) => {
                    var t, n;
                    return (0, l.jsx)(
                        d.jNK,
                        ((t = (function (e) {
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
                        })(
                            {
                                ref: a,
                                size: "md",
                                color: "currentColor",
                            },
                            e,
                        )),
                        (n = n = { className: g.IQ }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, l);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t),
                    );
                },
            }),
        ],
    });
}
function h(e) {
    let t,
        {
            directoryChannelId: n,
            onGuildChosen: s,
            handleChooseCreate: c,
            directoryGuildName: o,
            availableGuilds: u,
            addedGuilds: x,
            loading: j,
        } = e,
        [h, p] = i.useState(0);
    return (
        (t = j
            ? (0, l.jsx)("div", {
                  className: g.do,
                  children: (0, l.jsx)(d.y$y, {}),
              })
            : 0 === h
              ? 0 === u.length
                  ? (0, l.jsxs)("div", {
                        className: g.do,
                        children: [
                            (0, l.jsx)("img", {
                                src: C,
                                alt: "",
                                className: g.hd,
                            }),
                            (0, l.jsx)(d.Text, {
                                className: g.BI,
                                color: "text-default",
                                variant: "text-md/normal",
                                children: m.intl.string(m.t.liuEhd),
                            }),
                        ],
                    })
                  : u.map((e) =>
                        (0, l.jsx)(
                            b,
                            {
                                guild: e,
                                onClick: () => s(e),
                            },
                            e.id,
                        ),
                    )
              : 0 === x.length
                ? (0, l.jsxs)("div", {
                      className: g.do,
                      children: [
                          (0, l.jsx)("img", {
                              src: C,
                              alt: "",
                              className: g.hd,
                          }),
                          (0, l.jsx)(d.Text, {
                              className: g.BI,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: m.intl.string(m.t.WJLuKK),
                          }),
                      ],
                  })
                : x.map((e) =>
                      (0, l.jsx)(
                          f,
                          {
                              directoryChannelId: n,
                              guild: e,
                          },
                          e.id,
                      ),
                  )),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(r.rQ0, {
                    title: m.intl.formatToPlainString(m.t["9SKJdF"], { guildName: o }),
                    subtitle: m.intl.string(m.t.pYFZ9p),
                }),
                (0, l.jsx)(r.cwr, {
                    controls: (0, l.jsxs)(d.VQ0, {
                        className: g.$H,
                        selectedItem: h,
                        onItemSelect: p,
                        type: "top",
                        look: "brand",
                        children: [
                            (0, l.jsx)(d.VQ0.Item, {
                                className: a()(g.YU, { [g.xR]: 0 === h }),
                                id: 0,
                                children: m.intl.string(m.t.FTe8HS),
                            }),
                            (0, l.jsx)(d.VQ0.Item, {
                                className: a()(g.YU, { [g.xR]: 1 === h }),
                                id: 1,
                                children: m.intl.string(m.t.epOumr),
                            }),
                        ],
                    }),
                    children: (0, l.jsx)(d.HOs, {
                        className: g.XG,
                        children: (0, l.jsx)("div", {
                            className: g.OW,
                            children: t,
                        }),
                    }),
                }),
                (0, l.jsxs)(r.jlY, {
                    children: [
                        (0, l.jsx)(d.Heading, {
                            variant: "heading-lg/semibold",
                            className: g.K8,
                            children: m.intl.string(m.t.pgCZRP),
                        }),
                        (0, l.jsx)(r.H7u, {
                            actionsFullWidth: !0,
                            actions: [
                                {
                                    variant: "secondary",
                                    text: m.intl.string(m.t.WqJbLi),
                                    onClick: c,
                                },
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
