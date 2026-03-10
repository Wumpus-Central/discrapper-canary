"use strict";
n.d(t, { n: () => f });
var i = n(627968),
    s = n(64700),
    l = n(990078),
    a = n(397927),
    r = n(442433),
    o = n(793574),
    c = n(47167),
    d = n(598104),
    u = n(73028),
    h = n(665691),
    A = n(954571),
    m = n(652215),
    p = n(985018),
    g = n(202115);
let _ = (e) => {
        let { channel: t } = e;
        return (0, h.bG)({ channelId: t.id })
            ? (0, i.jsx)(l.m, {
                  text: p.intl.string(p.t.QyZ4Td),
                  children: (0, i.jsx)(a.m5V, {
                      size: "xs",
                      "aria-label": p.intl.string(p.t.VHXh8a),
                      color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                  }),
              })
            : null;
    },
    f = s.memo(function (e) {
        let { channel: t } = e,
            s = t.id,
            h = (0, c.Ay)(t);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.m, {
                    asContainer: !0,
                    text: p.intl.string(p.t["5Q9+/L"]),
                    position: "bottom",
                    children: (0, i.jsxs)(a.DUT, {
                        className: g.cD,
                        onClick: () => {
                            (0, u.U)(s, o.A.HEADER_BAR);
                        },
                        onContextMenu: (e) =>
                            (0, r.L3)(
                                e,
                                () =>
                                    Promise.all([n.e("97262"), n.e("60200"), n.e("98750")])
                                        .then(n.bind(n, 4027))
                                        .then((e) => {
                                            let { default: n } = e;
                                            return (e) => (0, i.jsx)(n, { ...e, channel: t, selected: !0 });
                                        }),
                                { noBlurEvent: !0 },
                            ),
                        onDoubleClick: (e) => e.stopPropagation(),
                        onMouseEnter: () => {
                            A.default.track(m.HAw.GDM_EDIT_INTERACTED, {
                                channel_id: t.id,
                                action: "entry_point_hovered",
                                location: o.A.HEADER_BAR,
                            });
                        },
                        "aria-label": p.intl.string(p.t["5Q9+/L"]),
                        children: [
                            (0, i.jsx)(d.A, {
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
                (0, i.jsx)(_, { channel: t }),
            ],
        });
    });
