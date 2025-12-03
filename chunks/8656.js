n.d(t, { default: () => O }), n(388685), n(539854), n(953529), n(642613), n(781311);
var l = n(54381),
    i = n(473749),
    r = n(793030),
    o = n(442837),
    a = n(481060),
    c = n(410030),
    s = n(726542),
    d = n(728345),
    u = n(812206),
    p = n(624138),
    g = n(999382),
    h = n(980555),
    f = n(987350),
    I = n(190007),
    _ = n(290511),
    A = n(388032),
    x = n(342203);
function O(e) {
    var t;
    let { transitionState: n, onClose: O, connection: S, index: v } = e,
        m = (0, c.ZP)(),
        L = null != S && null != v,
        N = g.Z.getGuildId(),
        C = (0, o.e7)([f.Z], () => {
            var e;
            return null != (e = f.Z.getAllowedApplicationIds(N)) ? e : [];
        }, [N]);
    i.useEffect(() => {
        null != N && (0, h.X)(N);
    }, [N]),
        i.useEffect(() => {
            for (let e of C)
                null != u.Z.getApplication(e) || u.Z.isFetchingApplication(e) || (0, d.UM)(e).catch(() => {});
        }, [C]);
    let T = (0, o.Wu)([u.Z], () => {
            let e = [];
            for (let t of C) {
                let n = u.Z.getApplication(t);
                null != n && e.push(n);
            }
            return e;
        }, [C]),
        [E, b] = i.useState(() => (null != S ? (0, _.a4)(S) : void 0)),
        [y, j] = i.useState(null != (t = null == S ? void 0 : S.description) ? t : ""),
        [G, P] = i.useState([]),
        D = i.useMemo(() => {
            let e = [];
            for (let l of s.Z.filter((e) => e.enabled && !_.Ni.has(e.type))) {
                var t, n;
                let i =
                    "light" === m
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
            for (let t of T)
                e.push({
                    label: t.name,
                    value: "app:".concat(t.id),
                    icon: t.getIconURL(128),
                });
            for (let t of C)
                null == u.Z.getApplication(t) &&
                    u.Z.isFetchingApplication(t) &&
                    e.push({
                        label: "Loading...",
                        value: "app:".concat(t),
                        icon: void 0,
                    });
            return e.sort((e, t) => e.label.localeCompare(t.label)), e;
        }, [T, C, m]),
        w = i.useCallback(() => {
            if (null == E || "" === E) return void P(["Please select a connection"]);
            let e = (0, _.BN)(E);
            if (null == e) return void P(["Invalid connection selected"]);
            let t = y.trim(),
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
                        description: (0, p.Ew)(t) ? void 0 : t,
                    },
                    null != e.applicationId && { application_id: e.applicationId },
                    null != e.providerId && { provider_id: e.providerId },
                ),
                l = (0, _.t9)(n);
            if (l.length > 0) return void P(l);
            L ? (0, I.HZ)(v, n) : (0, I.HE)(n), O();
        }, [E, y, L, v, O]),
        Z = i.useCallback(
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
                            : (0, l.jsx)(a.iWm, {
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
        R = i.useCallback((e) => {
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
                        : (0, l.jsx)(a.iWm, {
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
        title: L ? A.intl.string(A.t.yqegs1) : A.intl.string(A.t.B6qOe2),
        onClose: O,
        actions: [
            {
                variant: "secondary",
                text: A.intl.string(A.t["ETE/oC"]),
                onClick: O,
            },
            {
                variant: "primary",
                text: L ? A.intl.string(A.t["R3BPH+"]) : A.intl.string(A.t.qMOnJu),
                onClick: w,
            },
        ],
        children: (0, l.jsxs)("div", {
            className: x.content,
            children: [
                !L &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: A.intl.string(A.t.mGhCgX),
                            }),
                            (0, l.jsx)(a.xJW, {
                                title: A.intl.string(A.t.joNLrt),
                                children: (0, l.jsx)(a.q4e, {
                                    value: null != E ? E : "",
                                    onChange: (e) => {
                                        b(e), P([]);
                                    },
                                    options: D,
                                    placeholder: A.intl.string(A.t.Wq1LfI),
                                    renderOptionLabel: Z,
                                    renderOptionValue: R,
                                }),
                            }),
                            G.length > 0 &&
                                (0, l.jsx)("div", {
                                    className: x.errors,
                                    children: G.map((e, t) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: x.errorRow,
                                                children: [
                                                    (0, l.jsx)(r.Mgn, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                    }),
                                                    (0, l.jsx)(a.Text, {
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
                                (0, l.jsx)(a.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: A.intl.string(A.t.WoyrU8),
                                }),
                                (0, l.jsx)(a.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: A.intl.string(A.t.zdWNET),
                                }),
                            ],
                        }),
                        (0, l.jsx)(a.Kx8, {
                            value: y,
                            onChange: j,
                            placeholder: A.intl.string(A.t["28bQNf"]),
                            maxLength: _.kk,
                        }),
                    ],
                }),
            ],
        }),
    });
}
