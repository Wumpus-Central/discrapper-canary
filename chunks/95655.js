l.d(n, { n: () => p });
var t = l(477900),
    i = l(582128),
    s = l(866665),
    r = l(254138),
    a = l(661531),
    c = l(939249),
    o = l(778712),
    u = l(834730),
    d = l(22231),
    h = l(442433),
    x = l(793574),
    m = l(47167),
    A = l(598104),
    g = l(73028),
    j = l(665691),
    E = l(174459),
    b = l(652215),
    N = l(375708),
    C = l(77709);
function f(e) {
    let { channel: n } = e;
    return (0, j.bG)({ channelId: n.id })
        ? (0, t.jsx)(s.m, {
              text: N.intl.string(N.t.QyZ4Td),
              children: (0, t.jsx)(r.m, {
                  size: "xs",
                  "aria-label": N.intl.string(N.t.VHXh8a),
                  color: a.A.colors.INTERACTIVE_TEXT_DEFAULT,
              }),
          })
        : null;
}
let p = i.memo(function (e) {
    let { channel: n } = e,
        i = n.id,
        r = (0, m.Ay)(n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(s.m, {
                asContainer: !0,
                text: N.intl.string(N.t["5Q9+/L"]),
                position: "bottom",
                children: (0, t.jsxs)(c.D, {
                    className: C.cD,
                    onClick: () => {
                        (0, g.U)(i, x.A.HEADER_BAR);
                    },
                    onContextMenu: (e) =>
                        (0, h.L3)(
                            e,
                            () =>
                                Promise.all([
                                    l.e("926132"),
                                    l.e("146652"),
                                    l.e("893190"),
                                    l.e("391763"),
                                    l.e("955557"),
                                    l.e("947502"),
                                    l.e("965789"),
                                    l.e("21106"),
                                    l.e("187048"),
                                    l.e("341154"),
                                    l.e("566378"),
                                    l.e("17244"),
                                    l.e("153416"),
                                    l.e("760200"),
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
                        E.default.track(b.HAw.GDM_EDIT_INTERACTED, {
                            channel_id: n.id,
                            action: "entry_point_hovered",
                            location: x.A.HEADER_BAR,
                        });
                    },
                    "aria-label": N.intl.string(N.t["5Q9+/L"]),
                    children: [
                        (0, t.jsx)(A.A, {
                            className: C.gn,
                            "aria-hidden": !0,
                            channel: n,
                            size: o._3.SIZE_20,
                            facepileSizeOverride: o._3.SIZE_24,
                        }),
                        (0, t.jsx)(u.E, { variant: "text-md/medium", color: "text-strong", children: r ?? "" }),
                        (0, t.jsx)(d.PencilIcon, { className: C.IZ, size: "xs", color: "currentColor" }),
                    ],
                }),
            }),
            (0, t.jsx)(f, { channel: n }),
        ],
    });
});
