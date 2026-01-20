n.d(t, { default: () => S }), n(388685), n(539854), n(953529), n(642613), n(781311);
var l = n(54381),
    i = n(473749),
    r = n(793030),
    o = n(442837),
    a = n(199849),
    c = n(481060),
    s = n(410030),
    d = n(726542),
    u = n(728345),
    p = n(812206),
    g = n(624138),
    h = n(999382),
    f = n(980555),
    I = n(987350),
    A = n(190007),
    _ = n(290511),
    x = n(388032),
    O = n(933177);
function S(e) {
    var t;
    let { transitionState: n, onClose: S, connection: v, index: m } = e,
        L = (0, s.ZP)(),
        N = null != v && null != m,
        C = h.Z.getGuildId(),
        T = (0, o.e7)([I.Z], () => {
            var e;
            return null != (e = I.Z.getAllowedApplicationIds(C)) ? e : [];
        }, [C]);
    i.useEffect(() => {
        null != C && (0, f.X)(C);
    }, [C]),
        i.useEffect(() => {
            for (let e of T)
                null != p.Z.getApplication(e) || p.Z.isFetchingApplication(e) || (0, u.UM)(e).catch(() => {});
        }, [T]);
    let b = (0, o.Wu)([p.Z], () => {
            let e = [];
            for (let t of T) {
                let n = p.Z.getApplication(t);
                null != n && e.push(n);
            }
            return e;
        }, [T]),
        [E, y] = i.useState(() => (null != v ? (0, _.a4)(v) : void 0)),
        [j, G] = i.useState(null != (t = null == v ? void 0 : v.description) ? t : ""),
        [P, D] = i.useState([]),
        w = i.useMemo(() => {
            let e = [];
            for (let l of d.Z.filter((e) => e.enabled && !_.Ni.has(e.type))) {
                var t, n;
                let i =
                    "light" === L
                        ? null == (t = l.icon)
                            ? void 0
                            : t.lightPNG
                        : null == (n = l.icon)
                          ? void 0
                          : n.darkPNG;
                e.push({
                    label: l.name,
                    value: "provider:".concat(l.type),
                    icon: i,
                });
            }
            for (let t of b)
                e.push({
                    label: t.name,
                    value: "app:".concat(t.id),
                    icon: t.getIconURL(128),
                });
            for (let t of T)
                null == p.Z.getApplication(t) &&
                    p.Z.isFetchingApplication(t) &&
                    e.push({
                        label: "Loading...",
                        value: "app:".concat(t),
                        icon: void 0,
                    });
            return e.sort((e, t) => e.label.localeCompare(t.label)), e;
        }, [b, T, L]),
        Z = i.useCallback(() => {
            if (null == E || "" === E) return void D(["Please select a connection"]);
            let e = (0, _.BN)(E);
            if (null == e) return void D(["Invalid connection selected"]);
            let t = j.trim(),
                n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })(
                    {
                        connection_type: e.type,
                        description: (0, g.Ew)(t) ? void 0 : t,
                    },
                    null != e.applicationId && { application_id: e.applicationId },
                    null != e.providerId && { provider_id: e.providerId },
                ),
                l = (0, _.t9)(n);
            if (l.length > 0) return void D(l);
            N ? (0, A.HZ)(m, n) : (0, A.HE)(n), S();
        }, [E, j, N, m, S]),
        R = i.useCallback(
            (e) =>
                (0, l.jsxs)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    },
                    children: [
                        e.icon
                            ? "string" == typeof e.icon
                                ? (0, l.jsx)("img", {
                                      src: e.icon,
                                      alt: "",
                                      width: 20,
                                      height: 20,
                                  })
                                : null
                            : (0, l.jsx)(c.iWm, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                        (0, l.jsx)("span", { children: e.label }),
                    ],
                }),
            [],
        ),
        U = i.useCallback((e) => {
            if (0 === e.length) return null;
            let t = e[0];
            return (0, l.jsxs)("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                },
                children: [
                    t.icon && "string" == typeof t.icon
                        ? (0, l.jsx)("img", {
                              src: t.icon,
                              alt: "",
                              width: 20,
                              height: 20,
                          })
                        : (0, l.jsx)(c.iWm, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                    (0, l.jsx)("span", { children: t.label }),
                ],
            });
        }, []);
    return (0, l.jsx)(r.Modal, {
        transitionState: n,
        title: N ? x.intl.string(x.t.yqegs1) : x.intl.string(x.t.B6qOe2),
        onClose: S,
        actions: [
            {
                variant: "secondary",
                text: x.intl.string(x.t["ETE/oC"]),
                onClick: S,
            },
            {
                variant: "primary",
                text: N ? x.intl.string(x.t["R3BPH+"]) : x.intl.string(x.t.qMOnJu),
                onClick: Z,
            },
        ],
        children: (0, l.jsxs)("div", {
            className: O.content,
            children: [
                !N &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: x.intl.string(x.t.mGhCgX),
                            }),
                            (0, l.jsx)(c.xJW, {
                                title: x.intl.string(x.t.joNLrt),
                                children: (0, l.jsx)(a.y6, {
                                    value: null != E ? E : "",
                                    onChange: (e) => {
                                        y(e), D([]);
                                    },
                                    options: w,
                                    placeholder: x.intl.string(x.t.Wq1LfI),
                                    renderOptionLabel: R,
                                    renderOptionValue: U,
                                    "data-migration-pending": !0,
                                }),
                            }),
                            P.length > 0 &&
                                (0, l.jsx)("div", {
                                    className: O.errors,
                                    children: P.map((e, t) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: O.errorRow,
                                                children: [
                                                    (0, l.jsx)(r.Mgn, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                    }),
                                                    (0, l.jsx)(c.Text, {
                                                        variant: "text-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: e,
                                                    }),
                                                ],
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                        ],
                    }),
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                                marginBottom: "8px",
                            },
                            children: [
                                (0, l.jsx)(c.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: x.intl.string(x.t.WoyrU8),
                                }),
                                (0, l.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: x.intl.string(x.t.zdWNET),
                                }),
                            ],
                        }),
                        (0, l.jsx)(c.Kx8, {
                            value: j,
                            onChange: G,
                            placeholder: x.intl.string(x.t["28bQNf"]),
                            maxLength: _.kk,
                        }),
                    ],
                }),
            ],
        }),
    });
}
