t.d(n, {
    default: () => _,
}),
    t(896048);
var i = t(627968),
    a = t(64700),
    r = t(478437),
    l = t(158954),
    d = t(311907),
    o = t(397927),
    s = t(713654),
    u = t(687021),
    c = t(769765),
    f = t(711014),
    v = t(543465),
    A = t(422258),
    p = t(93055),
    h = t(231150),
    C = t(985018),
    E = t(233492);

function _(e) {
    let { transitionState: n, onClose: t, parentId: r } = e,
        s = (0, d.bG)([f.Ay], () => f.Ay.getFlattenedGuildIds()[0]),
        [c, v] = a.useState(s),
        [A, p] = a.useState(!1);
    return (0, i.jsx)(l.Modal, {
        title: C.intl.string(C.t["4wcdE/"]),
        actions: [],
        transitionState: n,
        onClose: t,
        input: (0, i.jsx)(u.v, {
            guildId: c,
            onChange: function (e) {
                null != e && v(e.id);
            },
        }),
        actionBarInput: (0, i.jsx)(o.dOG, {
            checked: A,
            onChange: (e) => p(e),
            label: C.intl.string(C.t.UwOLJO),
        }),
        children: (0, i.jsx)(I, {
            guildId: c,
            hideMutedChannels: A,
            parentId: r,
        }),
    });
}

function I(e) {
    let { guildId: n, hideMutedChannels: t, parentId: l } = e,
        o = (0, d.bG)([c.A], () => c.A.getCategories(n)),
        s = (0, h.A)(o),
        u = a.useRef(null);
    return (
        a.useEffect(() => {
            var e;
            null == u ||
                null == (e = u.current) ||
                e.scroll({
                    top: 0,
                });
        }, [n]),
        (0, i.jsx)("div", {
            ref: u,
            children: s.map((e) =>
                e.type === r.r.GUILD_CATEGORY
                    ? (0, i.jsx)(
                          m,
                          {
                              name: e.name,
                          },
                          e.id,
                      )
                    : (0, i.jsx)(
                          x,
                          {
                              channel: e,
                              hideMutedChannels: t,
                              parentId: l,
                          },
                          e.id,
                      ),
            ),
        })
    );
}

function m(e) {
    let { name: n } = e;
    return (0, i.jsx)(o.Text, {
        className: E.Fv,
        variant: "eyebrow",
        color: "interactive-text-default",
        children: n,
    });
}

function x(e) {
    let { channel: n, hideMutedChannels: t, parentId: a } = e,
        r = (0, p.Af)(n.id);
    if ((0, d.bG)([v.Ay], () => v.Ay.isChannelMuted(n.guild_id, n.id)) && t) return null;
    let l = (0, s.gU)(n);
    return (0, i.jsxs)(
        "div",
        {
            className: E.WG,
            children: [
                (0, i.jsxs)("div", {
                    className: E.HA,
                    children: [
                        null != l &&
                            (0, i.jsx)("div", {
                                className: E.uM,
                                children: (0, i.jsx)(l, {
                                    className: E.p,
                                    size: "custom",
                                    color: "currentColor",
                                    height: 20,
                                    width: 20,
                                }),
                            }),
                        (0, i.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "interactive-text-default",
                            children: n.name,
                        }),
                    ],
                }),
                null != r
                    ? (0, i.jsx)(b, {
                          channelId: n.id,
                      })
                    : (0, i.jsx)(N, {
                          channelId: n.id,
                          parentId: a,
                      }),
            ],
        },
        n.id,
    );
}

function N(e) {
    let { channelId: n, parentId: t } = e;
    return (0, i.jsx)(o.Button, {
        variant: "primary",
        size: "sm",
        text: C.intl.string(C.t.OYkgVk),
        onClick: function () {
            (0, A.Jz)(n, t);
        },
    });
}

function b(e) {
    let { channelId: n } = e;
    return (0, i.jsx)(o.Button, {
        variant: "secondary",
        size: "sm",
        text: C.intl.string(C.t.N86XcP),
        onClick: function () {
            (0, A.i_)(n);
        },
    });
}
