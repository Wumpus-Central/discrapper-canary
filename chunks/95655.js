"use strict";
n.d(t, { n: () => f });
var i = n(627968),
    s = n(64700),
    l = n(990078),
    r = n(397927),
    a = n(442433),
    o = n(793574),
    c = n(47167),
    d = n(598104),
    u = n(73028),
    h = n(665691),
    A = n(954571),
    p = n(652215),
    g = n(985018),
    m = n(202115);
let _ = (e) => {
        let { channel: t } = e;
        return (0, h.bG)({ channelId: t.id })
            ? (0, i.jsx)(l.m, {
                  text: g.intl.string(g.t.QyZ4Td),
                  children: (0, i.jsx)(r.m5V, {
                      size: "xs",
                      "aria-label": g.intl.string(g.t.VHXh8a),
                      color: r.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
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
                    text: g.intl.string(g.t["5Q9+/L"]),
                    position: "bottom",
                    children: (0, i.jsxs)(r.DUT, {
                        className: m.cD,
                        onClick: () => {
                            (0, u.U)(s, o.A.HEADER_BAR);
                        },
                        onContextMenu: (e) =>
                            (0, a.L3)(
                                e,
                                () =>
                                    Promise.all([n.e("97262"), n.e("37819")])
                                        .then(n.bind(n, 4027))
                                        .then((e) => {
                                            let { default: n } = e;
                                            return (e) => (0, i.jsx)(n, { ...e, channel: t, selected: !0 });
                                        }),
                                { noBlurEvent: !0 },
                            ),
                        onDoubleClick: (e) => e.stopPropagation(),
                        onMouseEnter: () => {
                            A.default.track(p.HAw.GDM_EDIT_INTERACTED, {
                                channel_id: t.id,
                                action: "entry_point_hovered",
                                location: o.A.HEADER_BAR,
                            });
                        },
                        "aria-label": g.intl.string(g.t["5Q9+/L"]),
                        children: [
                            (0, i.jsx)(d.A, {
                                className: m.gn,
                                "aria-hidden": !0,
                                channel: t,
                                size: r._3J.SIZE_20,
                                facepileSizeOverride: r._3J.SIZE_24,
                            }),
                            (0, i.jsx)(r.Text, { variant: "text-md/medium", color: "text-strong", children: h ?? "" }),
                            (0, i.jsx)(r.R2l, { className: m.IZ, size: "xs", color: "currentColor" }),
                        ],
                    }),
                }),
                (0, i.jsx)(_, { channel: t }),
            ],
        });
    });
