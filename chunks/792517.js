n.d(t, { Z: () => b });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(681715),
    l = n(481060),
    c = n(872810),
    u = n(595816),
    d = n(199902),
    f = n(314897),
    _ = n(112560),
    p = n(388032),
    h = n(982584);
let m = 175,
    g = 195,
    E = n(978538);
function b(e) {
    let { participant: t, width: n, noArt: i = !1, selected: b = !1 } = e,
        y = n < g,
        { defaultWatchMultipleStreams: O } = (0, u.P)({ location: "StreamHidden" }),
        v = (0, o.e7)([d.Z, f.default], () =>
            d.Z.getAllActiveStreams().some((e) => {
                let { ownerId: t } = e;
                return t !== f.default.getId();
            }),
        );
    return (0, r.jsx)("div", {
        className: a()(h.content, h.streamHidden),
        children: (0, r.jsx)(_.Z, {
            className: h.streamHiddenEmptyState,
            artURL: E,
            noArt: i,
            selected: b,
            size: (0, _.L)(n),
            header: y ? null : p.intl.string(p.t.epU4Ec),
            description: b
                ? null
                : (0, r.jsxs)("div", {
                      className: a()(h.streamHiddenCTA, { [h.largePaddingTop]: !y }),
                      children: [
                          (0, r.jsx)("div", {
                              className: h.cta,
                              children: (0, r.jsx)(l.Button, {
                                  variant: "secondary",
                                  size: y ? "sm" : "md",
                                  text: n < m ? p.intl.string(p.t.I6JG46) : p.intl.string(p.t["7Xq/nV"]),
                              }),
                          }),
                          v && !O
                              ? (0, r.jsx)("div", {
                                    className: a()(h.cta, h.addCta),
                                    children: (0, r.jsx)(s.u, {
                                        text: p.intl.string(p.t.wCrzut),
                                        children: (0, r.jsx)(l.hU, {
                                            variant: "secondary",
                                            size: y ? "sm" : "md",
                                            icon: l.OgY,
                                            "aria-label": p.intl.string(p.t.wCrzut),
                                            onClick: (e) => {
                                                e.stopPropagation(), (0, c.rn)(t.stream, { forceMultiple: !0 });
                                            },
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
        }),
    });
}
