l.d(n, { n: () => T });
var t = l(477900),
    i = l(582128),
    s = l(866665),
    r = l(254138),
    a = l(661531),
    c = l(939249),
    o = l(778712),
    d = l(834730),
    u = l(22231),
    h = l(442433),
    x = l(793574),
    m = l(47167),
    A = l(598104),
    g = l(73028),
    j = l(665691),
    E = l(174459),
    N = l(652215),
    f = l(375708),
    p = l(589256);
function C(e) {
    let { channel: n } = e;
    return (0, j.bG)({ channelId: n.id })
        ? (0, t.jsx)(s.m, {
              text: f.intl.string(f.t.QyZ4Td),
              children: (0, t.jsx)(r.m, {
                  size: "xs",
                  "aria-label": f.intl.string(f.t.VHXh8a),
                  color: a.A.colors.INTERACTIVE_TEXT_DEFAULT,
              }),
          })
        : null;
}
let T = i.memo(function (e) {
    let { channel: n } = e,
        i = n.id,
        r = (0, m.Ay)(n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(s.m, {
                asContainer: !0,
                text: f.intl.string(f.t["5Q9+/L"]),
                position: "bottom",
                children: (0, t.jsxs)(c.D, {
                    className: p.cD,
                    onClick: () => {
                        (0, g.U)(i, x.A.HEADER_BAR);
                    },
                    onContextMenu: (e) =>
                        (0, h.L3)(
                            e,
                            () =>
                                Promise.all([
                                    l.e("26132"),
                                    l.e("46652"),
                                    l.e("93190"),
                                    l.e("91763"),
                                    l.e("38730"),
                                    l.e("47502"),
                                    l.e("21106"),
                                    l.e("80740"),
                                    l.e("90434"),
                                    l.e("66378"),
                                    l.e("17244"),
                                    l.e("53416"),
                                    l.e("60200"),
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
                        E.default.track(N.HAw.GDM_EDIT_INTERACTED, {
                            channel_id: n.id,
                            action: "entry_point_hovered",
                            location: x.A.HEADER_BAR,
                        });
                    },
                    "aria-label": f.intl.string(f.t["5Q9+/L"]),
                    children: [
                        (0, t.jsx)(A.A, {
                            className: p.gn,
                            "aria-hidden": !0,
                            channel: n,
                            size: o._3.SIZE_20,
                            facepileSizeOverride: o._3.SIZE_24,
                        }),
                        (0, t.jsx)(d.E, { variant: "text-md/medium", color: "text-strong", children: r ?? "" }),
                        (0, t.jsx)(u.R, { className: p.IZ, size: "xs", color: "currentColor" }),
                    ],
                }),
            }),
            (0, t.jsx)(C, { channel: n }),
        ],
    });
});
