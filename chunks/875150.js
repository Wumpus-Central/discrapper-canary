t.d(n, { A: () => k });
var l = t(627968),
    i = t(64700),
    a = t(17928),
    r = t(58149),
    o = t(688810),
    s = t(46225),
    c = t(627363),
    u = t(587895),
    d = t(137177),
    m = t(954571),
    h = t(834730),
    p = t(289873),
    g = t(628284),
    x = t(821609),
    A = t(985018),
    f = t(221919);
function C(e) {
    let { displayName: n, description: t, icon: i, isLoading: a, isConnected: r, canConnect: o, onConnect: s } = e;
    return (0, l.jsxs)("div", {
        className: f.Nr,
        children: [
            (0, l.jsxs)("div", {
                className: f.hu,
                children: [
                    (0, l.jsx)("div", { className: f.Kk, children: i }),
                    (0, l.jsxs)("div", {
                        className: f.P_,
                        children: [
                            (0, l.jsx)(h.E, { variant: "text-md/medium", color: "text-strong", children: n }),
                            null != t &&
                                t.length > 0 &&
                                (0, l.jsx)(h.E, { variant: "text-sm/medium", color: "text-muted", children: t }),
                        ],
                    }),
                ],
            }),
            a
                ? (0, l.jsx)(p.y, {})
                : r
                  ? (0, l.jsxs)("div", {
                        className: f.ul,
                        children: [
                            (0, l.jsx)(h.E, {
                                variant: "text-md/medium",
                                color: "text-feedback-positive",
                                children: A.intl.string(A.t["LV+CXH"]),
                            }),
                            (0, l.jsx)(g.y, { size: "custom", width: 20, height: 20, color: "var(--status-positive)" }),
                        ],
                    })
                  : (0, l.jsx)(x.$, {
                        variant: "primary",
                        size: "sm",
                        onClick: s,
                        text: A.intl.string(A.t.S0W8Z5),
                        disabled: !o,
                    }),
        ],
    });
}
var j = t(652215);
function v(e) {
    let { connection: n, guildId: t, location: h } = e,
        p = (0, a.bG)([u.A], () => (null != n.application_id ? u.A.getApplication(n.application_id) : null), [
            n.application_id,
        ]),
        { analyticsLocations: g } = (0, o.Ay)(h);
    i.useEffect(() => {
        null != p ||
            null == n.application_id ||
            u.A.isFetchingApplication(n.application_id) ||
            u.A.didFetchingApplicationFail(n.application_id) ||
            (0, c.TA)(n.application_id).catch(() => {});
    }, [p, n.application_id]);
    let x = p?.name ?? A.intl.string(A.t.cgPbaZ),
        { hasAlreadyLinked: f, canStartAuthorization: v, startAuthorization: y, fetched: _ } = (0, s.RD)(p),
        N = (0, l.jsx)(d.A, { game: p, size: d.M.MEDIUM }),
        E = i.useCallback(() => {
            m.default.track(j.HAw.GUILD_ONBOARDING_CONNECTION_CLICKED, {
                ...(0, r.H$)(t),
                connection_type: "application",
                application_id: n.application_id ?? void 0,
                location: h,
            }),
                y({ analyticsLocations: g });
        }, [y, t, n.application_id, h, g]);
    return (0, l.jsx)(C, {
        displayName: x,
        description: n.description,
        icon: N,
        isLoading: !_,
        isConnected: f,
        canConnect: v,
        onConnect: E,
    });
}
var y = t(462887),
    _ = t(173936),
    N = t(736653),
    E = t(573648),
    w = t(456647);
function b(e) {
    let { connection: n, guildId: t, location: a } = e,
        o = (0, N.Ay)(),
        s = (null != n.provider_id ? E.A.get(n.provider_id)?.name : null) ?? A.intl.string(A.t.NzCoRx),
        {
            hasConnection: c,
            canConnect: u,
            startConnection: d,
            loading: h,
        } = (function (e) {
            let { loading: n, hasConnection: t, canConnect: l, startConnection: a, account: r } = (0, w.X)(e);
            return {
                loading: n,
                hasConnection: t,
                canConnect: l,
                startConnection: i.useCallback(
                    async (e) => {
                        let n = await a(e);
                        if (n.success && null != n.url) {
                            let e = window.open(n.url, "_blank");
                            return null == e ? { success: !1 } : { success: !0, popup: e };
                        }
                        return { success: !1 };
                    },
                    [a],
                ),
                account: r,
            };
        })(n.provider_id),
        p = i.useCallback(async () => {
            m.default.track(j.HAw.GUILD_ONBOARDING_CONNECTION_CLICKED, {
                ...(0, r.H$)(t),
                connection_type: "provider",
                provider_id: n.provider_id ?? void 0,
                location: a,
            }),
                await d(a);
        }, [d, t, n.provider_id, a]),
        g = i.useMemo(() => {
            if (null != n.provider_id) {
                let e = E.A.get(n.provider_id),
                    t = e?.icon != null ? ((0, y.M)(o) ? e.icon.darkPNG : e.icon.lightPNG) : null;
                if (null != t) return (0, l.jsx)("img", { src: t, alt: s, width: 40, height: 40 });
            }
            return (0, l.jsx)(_.q, { size: "custom", width: 40, height: 40, color: "currentColor" });
        }, [n.provider_id, o, s]);
    return (0, l.jsx)(C, {
        displayName: s,
        description: n.description,
        icon: g,
        isLoading: h,
        isConnected: c,
        canConnect: u,
        onConnect: p,
    });
}
var I = t(539916);
function k(e) {
    let { connection: n, guildId: t, location: i } = e;
    return n.connection_type === I.wZ.APPLICATION
        ? (0, l.jsx)(v, { connection: n, guildId: t, location: i })
        : n.connection_type === I.wZ.PROVIDER_CONNECTED_ACCOUNT
          ? (0, l.jsx)(b, { connection: n, guildId: t, location: i })
          : null;
}
