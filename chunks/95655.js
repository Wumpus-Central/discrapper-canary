n.d(t, { n: () => b });
var i = n(627968),
    l = n(64700),
    s = n(990078),
    a = n(254138),
    r = n(827734),
    o = n(939249),
    d = n(778712),
    c = n(834730),
    u = n(22231),
    h = n(442433),
    A = n(793574),
    _ = n(47167),
    m = n(598104),
    g = n(73028),
    p = n(665691),
    f = n(954571),
    E = n(652215),
    x = n(985018),
    I = n(910720);
let C = (e) => {
        let { channel: t } = e;
        return (0, p.bG)({ channelId: t.id })
            ? (0, i.jsx)(s.m, {
                  text: x.intl.string(x.t.QyZ4Td),
                  children: (0, i.jsx)(a.m, {
                      size: "xs",
                      "aria-label": x.intl.string(x.t.VHXh8a),
                      color: r.A.colors.INTERACTIVE_TEXT_DEFAULT,
                  }),
              })
            : null;
    },
    b = l.memo(function (e) {
        let { channel: t } = e,
            l = t.id,
            a = (0, _.Ay)(t);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.m, {
                    asContainer: !0,
                    text: x.intl.string(x.t["5Q9+/L"]),
                    position: "bottom",
                    children: (0, i.jsxs)(o.D, {
                        className: I.cD,
                        onClick: () => {
                            (0, g.U)(l, A.A.HEADER_BAR);
                        },
                        onContextMenu: (e) =>
                            (0, h.L3)(
                                e,
                                () =>
                                    Promise.all([n.e("97262"), n.e("2271"), n.e("60200")])
                                        .then(n.bind(n, 4027))
                                        .then((e) => {
                                            let { default: n } = e;
                                            return (e) => (0, i.jsx)(n, { ...e, channel: t, selected: !0 });
                                        }),
                                { noBlurEvent: !0 },
                            ),
                        onDoubleClick: (e) => e.stopPropagation(),
                        onMouseEnter: () => {
                            f.default.track(E.HAw.GDM_EDIT_INTERACTED, {
                                channel_id: t.id,
                                action: "entry_point_hovered",
                                location: A.A.HEADER_BAR,
                            });
                        },
                        "aria-label": x.intl.string(x.t["5Q9+/L"]),
                        children: [
                            (0, i.jsx)(m.A, {
                                className: I.gn,
                                "aria-hidden": !0,
                                channel: t,
                                size: d._3.SIZE_20,
                                facepileSizeOverride: d._3.SIZE_24,
                            }),
                            (0, i.jsx)(c.E, { variant: "text-md/medium", color: "text-strong", children: a ?? "" }),
                            (0, i.jsx)(u.R, { className: I.IZ, size: "xs", color: "currentColor" }),
                        ],
                    }),
                }),
                (0, i.jsx)(C, { channel: t }),
            ],
        });
    });
