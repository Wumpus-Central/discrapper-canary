n.d(t, { Z: () => b });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(872810),
    c = n(595816),
    u = n(199902),
    d = n(314897),
    f = n(685203),
    _ = n(112560),
    p = n(388032),
    h = n(866752);
let m = 175,
    g = 195,
    E = n(978538);
function b(e) {
    let { participant: t, width: n, noArt: i = !1, selected: b = !1 } = e,
        y = n < g,
        { defaultWatchMultipleStreams: O } = (0, c.P)({ location: "StreamHidden" }),
        v = (0, o.e7)([u.Z, d.default], () =>
            u.Z.getAllActiveStreams().some((e) => {
                let { ownerId: t } = e;
                return t !== d.default.getId();
            }),
        );
    return (0, r.jsx)("div", {
        className: a()(h.content, h.streamHidden, { [h.__invalid_small]: y }),
        children: (0, r.jsx)(_.Z, {
            className: h.streamHiddenEmptyState,
            artURL: E,
            noArt: i,
            selected: b,
            size: (0, _.L)(n),
            header: y ? null : p.intl.string(p.t.epU4ER),
            description: b
                ? null
                : (0, r.jsxs)("div", {
                      className: a()(h.streamHiddenCTA, { [h.largePaddingTop]: !y }),
                      children: [
                          (0, r.jsx)(f.a, {
                              isSmall: y,
                              children: (0, r.jsx)(s.Text, {
                                  variant: y ? "text-sm/semibold" : "text-md/semibold",
                                  color: "none",
                                  children: n < m ? p.intl.string(p.t["I6JG4+"]) : p.intl.string(p.t["7Xq/nZ"]),
                              }),
                          }),
                          v && !O
                              ? (0, r.jsx)(f.a, {
                                    className: h.addCTA,
                                    tooltip: p.intl.string(p.t.wCrzur),
                                    onClick: (e) => {
                                        e.stopPropagation(), (0, l.rn)(t.stream, { forceMultiple: !0 });
                                    },
                                    isSmall: y,
                                    children: (0, r.jsx)(s.OgY, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: h.addStreamIcon,
                                    }),
                                })
                              : null,
                      ],
                  }),
        }),
    });
}
