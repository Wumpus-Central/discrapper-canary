n.d(t, { Z: () => I }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(699516),
    u = n(5192),
    d = n(785717),
    f = n(221292),
    p = n(687158),
    _ = n(316027),
    m = n(502762),
    h = n(848780),
    g = n(907179),
    E = n(671955),
    b = n(388032),
    y = n(637079),
    O = n(609440);
function v(e, t, n) {
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
function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e) {
    let {
            user: t,
            guildId: n,
            setPopoutRef: v,
            channelId: I,
            messageId: T,
            roleId: A,
            openedAt: C,
            onHide: N,
            newAnalyticsLocations: P = [],
            disableAutoFocus: R = !1,
        } = e,
        w = (0, a.e7)([c.Z], () => c.Z.isBlocked(t.id)),
        { analyticsLocations: D } = (0, l.ZP)([...P, w ? s.Z.BLOCKED_PROFILE_POPOUT : s.Z.IGNORED_PROFILE_POPOUT]),
        x = (0, d.ZB)({
            layout: "POPOUT",
            userId: t.id,
            guildId: n,
            channelId: I,
            messageId: T,
            roleId: A,
        }),
        L = i.useRef(null),
        j = (0, p.ZP)(t.id, n);
    i.useEffect(() => {
        null == v || v(null == L ? void 0 : L.current);
    }, [L, v]);
    let M = w ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
        k = R ? "div" : o.VqE;
    return (0, r.jsx)(l.Gt, {
        value: D,
        children: (0, r.jsx)(d.Mt, {
            value: x,
            openedAt: C,
            fetchStartedAt: null == j ? void 0 : j.fetchStartedAt,
            fetchEndedAt: null == j ? void 0 : j.fetchEndedAt,
            isLoaded: null == j ? void 0 : j.isLoaded,
            children: (0, r.jsx)(k, {
                ref: L,
                "aria-label": t.username,
                children: (0, r.jsx)(m.Z, {
                    user: t,
                    displayProfile: j,
                    themeType: E.l.POPOUT,
                    children: (0, r.jsxs)("div", {
                        className: y.container,
                        children: [
                            (0, r.jsx)("img", {
                                alt: "",
                                src: O,
                                className: y.preview,
                                "aria-hidden": !0,
                            }),
                            (0, r.jsxs)("div", {
                                className: y.body,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: y.headerContainer,
                                        children: [
                                            (0, r.jsx)(_.Z, {
                                                user: t,
                                                guildId: n,
                                            }),
                                            (0, r.jsx)(o.Heading, {
                                                variant: "heading-lg/bold",
                                                children: b.intl.string(b.t.b33pLD),
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-sm/medium",
                                                children: b.intl.format(w ? b.t["8F+WNz"] : b.t["/cZp5s"], {
                                                    username: u.ZP.getName(n, I, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(o.Kqy, {
                                        align: "center",
                                        children: [
                                            (0, r.jsx)(g.Z, {
                                                isBlocked: w,
                                                onClick: () => {
                                                    N(),
                                                        (0, f.pQ)(
                                                            S(
                                                                {
                                                                    action: M,
                                                                    analyticsLocations: D,
                                                                },
                                                                x,
                                                            ),
                                                        );
                                                },
                                            }),
                                            (0, r.jsx)(h.Z, {
                                                userId: t.id,
                                                onClick: () => {
                                                    N(),
                                                        (0, f.pQ)(
                                                            S(
                                                                {
                                                                    action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                                    analyticsLocations: D,
                                                                },
                                                                x,
                                                            ),
                                                        );
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
