n.d(t, {
    N: () => y,
    Z: () => O,
});
var r = n(54381),
    i = n(473749),
    a = n(28664),
    o = n(481060),
    s = n(239091),
    l = n(299206),
    c = n(810568),
    u = n(168524),
    d = n(37258),
    f = n(26033),
    _ = n(178762),
    p = n(388032),
    h = n(313175);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = "content-inventory-context";
function O(e) {
    var t;
    let { user: n, guildId: m, channel: E, entry: O, onSelect: v, disableGameProfileLinks: I } = e,
        T = i.useRef(null),
        S = i.useContext(_.Ir),
        A = (0, d.Z)({
            userId: n.id,
            guildId: m,
            channelId: null == E ? void 0 : E.id,
            onAction: S,
        }),
        C = (0, l.Z)({
            id: n.id,
            label: p.intl.string(p.t["/AXYnE"]),
        }),
        N = "application_id" in O.extra ? O.extra.application_id : null,
        R = (0, l.Z)({
            id: N,
            label: p.intl.string(p.t["FfCL+6"]),
        }),
        P = (0, f.dX)(O),
        D = (0, u.Z)({
            location: "ContentPopoutContextMenu",
            applicationId: P && !0 !== I ? (null == (t = O.extra) ? void 0 : t.application_id) : void 0,
            source: c.m1.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: O.author_id,
        });
    return (0, r.jsx)(o.yRy, {
        targetElementRef: T,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(o.v2r, {
                navId: y,
                onClose: () => {
                    (0, s.Zy)(), t();
                },
                "aria-label": p.intl.string(p.t.liqwPJ),
                onSelect: v,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(o.kSQ, {
                            children: [
                                A,
                                null != D &&
                                    (0, r.jsx)(o.sNh, {
                                        id: "game-profile",
                                        label: p.intl.string(p.t.f7aVGn),
                                        action: (e) => {
                                            D(e), null == S || S();
                                        },
                                    }),
                            ],
                        }),
                        (0, r.jsxs)(o.kSQ, {
                            children: [C, R],
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(a.u, {
                asContainer: !0,
                text: p.intl.string(p.t["UKOtz+"]),
                children: (0, r.jsx)(
                    o.P3F,
                    b(
                        g(
                            {
                                innerRef: T,
                                className: h.menuIcon,
                            },
                            e,
                        ),
                        {
                            children: (0, r.jsx)(o.xhG, {
                                color: "currentColor",
                                size: "custom",
                                width: 16,
                                height: 16,
                            }),
                        },
                    ),
                ),
            }),
    });
}
