t.d(n, { n: () => b });
var l = t(627968),
    i = t(64700),
    s = t(990078),
    r = t(254138),
    a = t(661531),
    c = t(939249),
    o = t(778712),
    d = t(834730),
    u = t(22231),
    h = t(442433),
    x = t(793574),
    m = t(47167),
    A = t(598104),
    g = t(73028),
    N = t(665691),
    j = t(174459),
    I = t(652215),
    E = t(375708),
    p = t(762432);
let C = (e) => {
        let { channel: n } = e;
        return (0, N.bG)({ channelId: n.id })
            ? (0, l.jsx)(s.m, {
                  text: E.intl.string(E.t.QyZ4Td),
                  children: (0, l.jsx)(r.m, {
                      size: "xs",
                      "aria-label": E.intl.string(E.t.VHXh8a),
                      color: a.A.colors.INTERACTIVE_TEXT_DEFAULT,
                  }),
              })
            : null;
    },
    b = i.memo(function (e) {
        let { channel: n } = e,
            i = n.id,
            r = (0, m.Ay)(n);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(s.m, {
                    asContainer: !0,
                    text: E.intl.string(E.t["5Q9+/L"]),
                    position: "bottom",
                    children: (0, l.jsxs)(c.D, {
                        className: p.cD,
                        onClick: () => {
                            (0, g.U)(i, x.A.HEADER_BAR);
                        },
                        onContextMenu: (e) =>
                            (0, h.L3)(
                                e,
                                () =>
                                    Promise.all([
                                        t.e("26132"),
                                        t.e("46652"),
                                        t.e("93190"),
                                        t.e("91763"),
                                        t.e("38730"),
                                        t.e("34971"),
                                        t.e("42339"),
                                        t.e("21106"),
                                        t.e("40175"),
                                        t.e("43746"),
                                        t.e("90554"),
                                        t.e("12520"),
                                        t.e("53416"),
                                        t.e("60200"),
                                    ])
                                        .then(t.bind(t, 4027))
                                        .then((e) => {
                                            let { default: t } = e;
                                            return (e) => (0, l.jsx)(t, { ...e, channel: n, selected: !0 });
                                        }),
                                { noBlurEvent: !0 },
                            ),
                        onDoubleClick: (e) => e.stopPropagation(),
                        onMouseEnter: () => {
                            j.default.track(I.HAw.GDM_EDIT_INTERACTED, {
                                channel_id: n.id,
                                action: "entry_point_hovered",
                                location: x.A.HEADER_BAR,
                            });
                        },
                        "aria-label": E.intl.string(E.t["5Q9+/L"]),
                        children: [
                            (0, l.jsx)(A.A, {
                                className: p.gn,
                                "aria-hidden": !0,
                                channel: n,
                                size: o._3.SIZE_20,
                                facepileSizeOverride: o._3.SIZE_24,
                            }),
                            (0, l.jsx)(d.E, { variant: "text-md/medium", color: "text-strong", children: r ?? "" }),
                            (0, l.jsx)(u.R, { className: p.IZ, size: "xs", color: "currentColor" }),
                        ],
                    }),
                }),
                (0, l.jsx)(C, { channel: n }),
            ],
        });
    });
