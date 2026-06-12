n.d(t, { A: () => b });
var l = n(627968),
    i = n(64700),
    a = n(17928),
    r = n(95561),
    o = n(688810),
    s = n(46225),
    c = n(627363),
    d = n(587895),
    u = n(137177),
    m = n(174459),
    h = n(834730),
    p = n(289873),
    x = n(628284),
    g = n(821609),
    A = n(375708),
    f = n(221919);
function C(e) {
    let { displayName: t, description: n, icon: i, isLoading: a, isConnected: r, canConnect: o, onConnect: s } = e;
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
                            (0, l.jsx)(h.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                            null != n &&
                                n.length > 0 &&
                                (0, l.jsx)(h.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
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
                            (0, l.jsx)(x.y, { size: "custom", width: 20, height: 20, color: "var(--status-positive)" }),
                        ],
                    })
                  : (0, l.jsx)(g.$, {
                        variant: "primary",
                        size: "sm",
                        onClick: s,
                        text: A.intl.string(A.t.S0W8Z5),
                        disabled: !o,
                    }),
        ],
    });
}
var j = n(652215);
function v(e) {
    let { connection: t, guildId: n, location: h } = e,
        p = (0, a.bG)([d.A], () => (null != t.application_id ? d.A.getApplication(t.application_id) : null), [
            t.application_id,
        ]),
        { analyticsLocations: x } = (0, o.Ay)(h);
    i.useEffect(() => {
        null != p ||
            null == t.application_id ||
            d.A.isFetchingApplication(t.application_id) ||
            d.A.didFetchingApplicationFail(t.application_id) ||
            (0, c.TA)(t.application_id).catch(() => {});
    }, [p, t.application_id]);
    let g = p?.name ?? A.intl.string(A.t.cgPbaZ),
        { hasAlreadyLinked: f, canStartAuthorization: v, startAuthorization: _, fetched: N } = (0, s.RD)(p),
        y = (0, l.jsx)(u.A, { game: p, size: u.M.MEDIUM }),
        E = i.useCallback(() => {
            m.default.track(j.HAw.GUILD_ONBOARDING_CONNECTION_CLICKED, {
                ...(0, r.H$)(n),
                connection_type: "application",
                application_id: t.application_id ?? void 0,
                location: h,
            }),
                _({ analyticsLocations: x });
        }, [_, n, t.application_id, h, x]);
    return (0, l.jsx)(C, {
        displayName: g,
        description: t.description,
        icon: y,
        isLoading: !N,
        isConnected: f,
        canConnect: v,
        onConnect: E,
    });
}
var _ = n(462887),
    N = n(173936),
    y = n(736653),
    E = n(573648),
    w = n(456647);
function I(e) {
    let { connection: t, guildId: n, location: a } = e,
        o = (0, y.Ay)(),
        s = (null != t.provider_id ? E.A.get(t.provider_id)?.name : null) ?? A.intl.string(A.t.NzCoRx),
        {
            hasConnection: c,
            canConnect: d,
            startConnection: u,
            loading: h,
        } = (function (e) {
            let { loading: t, hasConnection: n, canConnect: l, startConnection: a, account: r } = (0, w.X)(e);
            return {
                loading: t,
                hasConnection: n,
                canConnect: l,
                startConnection: i.useCallback(
                    async (e) => {
                        let t = await a(e);
                        if (t.success && null != t.url) {
                            let e = window.open(t.url, "_blank");
                            return null == e ? { success: !1 } : { success: !0, popup: e };
                        }
                        return { success: !1 };
                    },
                    [a],
                ),
                account: r,
            };
        })(t.provider_id),
        p = i.useCallback(async () => {
            m.default.track(j.HAw.GUILD_ONBOARDING_CONNECTION_CLICKED, {
                ...(0, r.H$)(n),
                connection_type: "provider",
                provider_id: t.provider_id ?? void 0,
                location: a,
            }),
                await u(a);
        }, [u, n, t.provider_id, a]),
        x = i.useMemo(() => {
            if (null != t.provider_id) {
                let e = E.A.get(t.provider_id),
                    n = e?.icon != null ? ((0, _.M)(o) ? e.icon.darkPNG : e.icon.lightPNG) : null;
                if (null != n) return (0, l.jsx)("img", { src: n, alt: s, width: 40, height: 40 });
            }
            return (0, l.jsx)(N.q, { size: "custom", width: 40, height: 40, color: "currentColor" });
        }, [t.provider_id, o, s]);
    return (0, l.jsx)(C, {
        displayName: s,
        description: t.description,
        icon: x,
        isLoading: h,
        isConnected: c,
        canConnect: d,
        onConnect: p,
    });
}
var M = n(539916);
function b(e) {
    let { connection: t, guildId: n, location: i } = e;
    return t.connection_type === M.wZ.APPLICATION
        ? (0, l.jsx)(v, { connection: t, guildId: n, location: i })
        : t.connection_type === M.wZ.PROVIDER_CONNECTED_ACCOUNT
          ? (0, l.jsx)(I, { connection: t, guildId: n, location: i })
          : null;
}
