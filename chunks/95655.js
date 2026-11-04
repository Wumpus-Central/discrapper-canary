var t = l(477900),
    i = l(582128),
    s = l(866665),
    r = l(254138),
    a = l(646514),
    c = l(939249),
    o = l(778712),
    d = l(834730),
    u = l(22231),
    h = l(442433),
    x = l(793574),
    m = l(47167),
    A = l(598104),
    j = l(73028),
    g = l(665691),
    b = l(129230),
    p = l(652215),
    E = l(792996),
    f = l(77709);
function N(e) {
    let { channel: n } = e;
    return (0, g.bG)({ channelId: n.id })
        ? (0, t.jsx)(s.m, {
              text: E.intl.string(E.t.QyZ4Td),
              children: (0, t.jsx)(r.m, {
                  size: "xs",
                  "aria-label": E.intl.string(E.t.VHXh8a),
                  color: a.A.colors.INTERACTIVE_TEXT_DEFAULT,
              }),
          })
        : null;
}
let I = i.memo(function (e) {
    let { channel: n } = e,
        i = n.id,
        r = (0, m.Ay)(n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(s.m, {
                asContainer: !0,
                text: E.intl.string(E.t["5Q9+/L"]),
                position: "bottom",
                children: (0, t.jsxs)(c.D, {
                    className: f.cD,
                    onClick: () => {
                        (0, j.U)(i, x.A.HEADER_BAR);
                    },
                    onContextMenu: (e) =>
                        (0, h.L3)(
                            e,
                            () =>
                                Promise.all([
                                    l.e(926132),
                                    l.e(893190),
                                    l.e(146652),
                                    l.e(391763),
                                    l.e(491001),
                                    l.e(382563),
                                    l.e(947502),
                                    l.e(965789),
                                    l.e(150773),
                                    l.e(935483),
                                    l.e(275289),
                                    l.e(566378),
                                    l.e(17244),
                                    l.e(996028),
                                    l.e(153416),
                                    l.e(760200),
                                ])
                                    .then(l.bind(l, 4027))
                                    .then((e) => {
                                        let { default: l } = e;
                                        return (e) => (0, t.jsx)(l, { ...e, channel: n, selected: !0 });
                                    }),
                            { noBlurEvent: !0 },
                        ),
                    onDoubleClick: (e) => e.stopPropagation(),
                    onMouseEnter: () => {
                        b.default.track(p.HAw.GDM_EDIT_INTERACTED, {
                            channel_id: n.id,
                            action: "entry_point_hovered",
                            location: x.A.HEADER_BAR,
                        });
                    },
                    "aria-label": E.intl.string(E.t["5Q9+/L"]),
                    children: [
                        (0, t.jsx)(A.A, {
                            className: f.gn,
                            "aria-hidden": !0,
                            channel: n,
                            size: o._3.SIZE_20,
                            facepileSizeOverride: o._3.SIZE_24,
                        }),
                        (0, t.jsx)(d.E, { variant: "body-md/medium", color: "text-strong", children: r ?? "" }),
                        (0, t.jsx)(u.PencilIcon, { className: f.IZ, size: "xs", color: "currentColor" }),
                    ],
                }),
            }),
            (0, t.jsx)(N, { channel: n }),
        ],
    });
});
l.d(n, {}, { n: I });
