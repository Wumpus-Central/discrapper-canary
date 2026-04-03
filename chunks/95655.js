n.d(t, { n: () => f });
var i = n(627968),
    l = n(64700),
    s = n(990078),
    a = n(397927),
    r = n(442433),
    o = n(793574),
    d = n(47167),
    c = n(598104),
    u = n(73028),
    h = n(665691),
    A = n(954571),
    _ = n(652215),
    m = n(985018),
    g = n(917328);
let p = (e) => {
        let { channel: t } = e;
        return (0, h.bG)({ channelId: t.id })
            ? (0, i.jsx)(s.m, {
                  text: m.intl.string(m.t.QyZ4Td),
                  children: (0, i.jsx)(a.m5V, {
                      size: "xs",
                      "aria-label": m.intl.string(m.t.VHXh8a),
                      color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                  }),
              })
            : null;
    },
    f = l.memo(function (e) {
        let { channel: t } = e,
            l = t.id,
            h = (0, d.Ay)(t);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.m, {
                    asContainer: !0,
                    text: m.intl.string(m.t["5Q9+/L"]),
                    position: "bottom",
                    children: (0, i.jsxs)(a.DUT, {
                        className: g.cD,
                        onClick: () => {
                            (0, u.U)(l, o.A.HEADER_BAR);
                        },
                        onContextMenu: (e) =>
                            (0, r.L3)(
                                e,
                                () =>
                                    Promise.all([n.e("97262"), n.e("60200"), n.e("21969")])
                                        .then(n.bind(n, 4027))
                                        .then((e) => {
                                            let { default: n } = e;
                                            return (e) => (0, i.jsx)(n, { ...e, channel: t, selected: !0 });
                                        }),
                                { noBlurEvent: !0 },
                            ),
                        onDoubleClick: (e) => e.stopPropagation(),
                        onMouseEnter: () => {
                            A.default.track(_.HAw.GDM_EDIT_INTERACTED, {
                                channel_id: t.id,
                                action: "entry_point_hovered",
                                location: o.A.HEADER_BAR,
                            });
                        },
                        "aria-label": m.intl.string(m.t["5Q9+/L"]),
                        children: [
                            (0, i.jsx)(c.A, {
                                className: g.gn,
                                "aria-hidden": !0,
                                channel: t,
                                size: a._3J.SIZE_20,
                                facepileSizeOverride: a._3J.SIZE_24,
                            }),
                            (0, i.jsx)(a.Text, { variant: "text-md/medium", color: "text-strong", children: h ?? "" }),
                            (0, i.jsx)(a.R2l, { className: g.IZ, size: "xs", color: "currentColor" }),
                        ],
                    }),
                }),
                (0, i.jsx)(p, { channel: t }),
            ],
        });
    });
