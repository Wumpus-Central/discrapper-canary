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
    p = n(112560),
    _ = n(388032),
    m = n(470276);
let h = 175,
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
        className: a()(m.content, m.streamHidden),
        children: (0, r.jsx)(p.Z, {
            className: m.streamHiddenEmptyState,
            artURL: E,
            noArt: i,
            selected: b,
            size: (0, p.L)(n),
            header: y ? null : _.intl.string(_.t.epU4Ec),
            description: b
                ? null
                : (0, r.jsxs)("div", {
                      className: a()(m.streamHiddenCTA, { [m.largePaddingTop]: !y }),
                      children: [
                          (0, r.jsx)("div", {
                              className: m.cta,
                              children: (0, r.jsx)(l.Button, {
                                  variant: "secondary",
                                  size: y ? "sm" : "md",
                                  text: n < h ? _.intl.string(_.t.I6JG46) : _.intl.string(_.t["7Xq/nV"]),
                              }),
                          }),
                          v && !O
                              ? (0, r.jsx)("div", {
                                    className: a()(m.cta, m.addCta),
                                    children: (0, r.jsx)(s.u, {
                                        text: _.intl.string(_.t.wCrzut),
                                        children: (0, r.jsx)(l.hU, {
                                            variant: "secondary",
                                            size: y ? "sm" : "md",
                                            icon: l.OgY,
                                            "aria-label": _.intl.string(_.t.wCrzut),
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
