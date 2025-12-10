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
    p = n(178762),
    _ = n(388032),
    m = n(709516);
function h(e, t, n) {
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
                h(e, t, n[t]);
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
    let { user: n, guildId: h, channel: E, entry: O, onSelect: v, disableGameProfileLinks: S } = e,
        I = i.useRef(null),
        T = i.useContext(p.Ir),
        C = (0, d.Z)({
            userId: n.id,
            guildId: h,
            channelId: null == E ? void 0 : E.id,
            onAction: T,
        }),
        A = (0, l.Z)({
            id: n.id,
            label: _.intl.string(_.t["/AXYnE"]),
        }),
        N = "application_id" in O.extra ? O.extra.application_id : null,
        P = (0, l.Z)({
            id: N,
            label: _.intl.string(_.t["FfCL+6"]),
        }),
        R = (0, f.dX)(O),
        D = (0, u.Z)({
            location: "ContentPopoutContextMenu",
            applicationId: R && !0 !== S ? (null == (t = O.extra) ? void 0 : t.application_id) : void 0,
            source: c.m1.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: O.author_id,
        });
    return (0, r.jsx)(o.yRy, {
        targetElementRef: I,
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
                "aria-label": _.intl.string(_.t.liqwPJ),
                onSelect: v,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(o.kSQ, {
                            children: [
                                C,
                                null != D &&
                                    (0, r.jsx)(o.sNh, {
                                        id: "game-profile",
                                        label: _.intl.string(_.t.f7aVGn),
                                        action: (e) => {
                                            D(e), null == T || T();
                                        },
                                    }),
                            ],
                        }),
                        (0, r.jsxs)(o.kSQ, {
                            children: [A, P],
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(a.u, {
                asContainer: !0,
                text: _.intl.string(_.t["UKOtz+"]),
                children: (0, r.jsx)(
                    o.P3F,
                    b(
                        g(
                            {
                                innerRef: I,
                                className: m.menuIcon,
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
