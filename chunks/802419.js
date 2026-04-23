l.d(e, { default: () => j }), l(321073);
var i = l(627968),
    n = l(64700),
    r = l(189213),
    o = l(695366),
    s = l(17928),
    a = l(843282),
    c = l(687966),
    d = l(834730),
    p = l(321471),
    u = l(260598),
    h = l(736653),
    A = l(573648),
    g = l(627363),
    I = l(587895),
    _ = l(240248),
    f = l(555337),
    S = l(636537),
    x = l(228366);
let L = null,
    C = null,
    N = !1;
class E extends s.Ay.Store {
    static displayName = "GuildSettingsOnboardingAllowedApplicationsStore";
    getAllowedApplicationIds(t) {
        return L === t ? C : null;
    }
    isFetching(t) {
        return L === t && N;
    }
    hasCachedData(t) {
        return L === t && null !== C;
    }
}
let O = new E(x.h, {
    GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_START: function (t) {
        let { guildId: e } = t;
        (L = e), (N = !0), (C = []);
    },
    GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS: function (t) {
        let { guildId: e, applicationIds: l } = t;
        L === e && ((C = l), (N = !1));
    },
    GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_FAILURE: function (t) {
        let { guildId: e } = t;
        L === e && ((C = []), (N = !1));
    },
    GUILD_SETTINGS_CLOSE: function () {
        (L = null), (C = null), (N = !1);
    },
});
var T = l(652215);
async function m(t) {
    let e = O.getAllowedApplicationIds(t);
    if (null !== e) return Promise.resolve(e);
    if (O.isFetching(t))
        return new Promise((e) => {
            let l = () => {
                let i = O.getAllowedApplicationIds(t);
                null !== i && (O.removeChangeListener(l), e(i));
            };
            O.addChangeListener(l);
        });
    x.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_START", guildId: t });
    try {
        let e = await S.Bo.get({ url: T.Rsh.GUILD_ONBOARDING_ALLOWED_APPLICATIONS(t), rejectWithError: !1 });
        if (e.ok && e.body?.application_ids) {
            let l = e.body.application_ids.map((t) => String(t));
            return (
                x.h.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS",
                    guildId: t,
                    applicationIds: l,
                }),
                l
            );
        }
        return (
            x.h.dispatch({
                type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS",
                guildId: t,
                applicationIds: [],
            }),
            []
        );
    } catch (e) {
        return x.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_FAILURE", guildId: t }), [];
    }
}
var v = l(923121),
    G = l(539916),
    y = l(985018),
    D = l(886106);
function j(t) {
    let { transitionState: e, onClose: l, connection: S, index: x } = t,
        L = (0, h.Ay)(),
        C = null != S && null != x,
        N = f.A.getGuildId(),
        E = (0, s.bG)([O], () => O.getAllowedApplicationIds(N) ?? [], [N]);
    n.useEffect(() => {
        null != N && m(N);
    }, [N]),
        n.useEffect(() => {
            for (let t of E)
                null != I.A.getApplication(t) || I.A.isFetchingApplication(t) || (0, g.TA)(t).catch(() => {});
        }, [E]);
    let T = (0, s.yK)([I.A], () => {
            let t = [];
            for (let e of E) {
                let l = I.A.getApplication(e);
                null != l && t.push(l);
            }
            return t;
        }, [E]),
        [j, b] = n.useState(() => (null != S ? (0, G.Sq)(S) : void 0)),
        [P, F] = n.useState(S?.description ?? ""),
        [R, U] = n.useState([]),
        w = n.useMemo(() => {
            let t = [];
            for (let e of A.A.filter((t) => t.enabled && !G.tb.has(t.type))) {
                let l = "light" === L ? e.icon?.lightPNG : e.icon?.darkPNG;
                t.push({ label: e.name, value: `provider:${e.type}`, icon: l });
            }
            for (let e of T) t.push({ label: e.name, value: `app:${e.id}`, icon: e.getIconURL(128) });
            for (let e of E)
                null == I.A.getApplication(e) &&
                    I.A.isFetchingApplication(e) &&
                    t.push({ label: "Loading...", value: `app:${e}`, icon: void 0 });
            return t.sort((t, e) => t.label.localeCompare(e.label)), t;
        }, [T, E, L]),
        k = n.useCallback(() => {
            if (null == j || "" === j) return void U(["Please select a connection"]);
            let t = (0, G.vK)(j);
            if (null == t) return void U(["Invalid connection selected"]);
            let e = P.trim(),
                i = {
                    connection_type: t.type,
                    description: (0, _.uJ)(e) ? void 0 : e,
                    ...(null != t.applicationId && { application_id: t.applicationId }),
                    ...(null != t.providerId && { provider_id: t.providerId }),
                },
                n = (0, G.Ii)(i);
            n.length > 0 ? U(n) : (C ? (0, v.yM)(x, i) : (0, v.sF)(i), l());
        }, [j, P, C, x, l]),
        B = n.useCallback(
            (t) =>
                (0, i.jsxs)("div", {
                    style: { display: "flex", alignItems: "center", gap: "8px" },
                    children: [
                        t.icon
                            ? "string" == typeof t.icon
                                ? (0, i.jsx)("img", { src: t.icon, alt: "", width: 20, height: 20 })
                                : null
                            : (0, i.jsx)(c._, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                        (0, i.jsx)("span", { children: t.label }),
                    ],
                }),
            [],
        ),
        W = n.useCallback((t) => {
            if (0 === t.length) return null;
            let e = t[0];
            return (0, i.jsxs)("div", {
                style: { display: "flex", alignItems: "center", gap: "8px" },
                children: [
                    e.icon && "string" == typeof e.icon
                        ? (0, i.jsx)("img", { src: e.icon, alt: "", width: 20, height: 20 })
                        : (0, i.jsx)(c._, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                    (0, i.jsx)("span", { children: e.label }),
                ],
            });
        }, []);
    return (0, i.jsx)(r.Modal, {
        transitionState: e,
        title: C ? y.intl.string(y.t.yqegs1) : y.intl.string(y.t.B6qOe2),
        onClose: l,
        actions: [
            { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: l },
            { variant: "primary", text: C ? y.intl.string(y.t["R3BPH+"]) : y.intl.string(y.t.qMOnJu), onClick: k },
        ],
        children: (0, i.jsxs)("div", {
            className: D.Qs,
            children: [
                !C &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(d.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: y.intl.string(y.t.mGhCgX),
                            }),
                            (0, i.jsx)(p.e, {
                                title: y.intl.string(y.t.joNLrt),
                                children: (0, i.jsx)(a.Te, {
                                    value: j ?? "",
                                    onChange: (t) => {
                                        b(t), U([]);
                                    },
                                    options: w,
                                    placeholder: y.intl.string(y.t.Wq1LfI),
                                    renderOptionLabel: B,
                                    renderOptionValue: W,
                                    "data-migration-pending": !0,
                                }),
                            }),
                            R.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: D.sO,
                                    children: R.map((t, e) =>
                                        (0, i.jsxs)(
                                            "div",
                                            {
                                                className: D.Ff,
                                                children: [
                                                    (0, i.jsx)(o.E, { size: "sm", color: "currentColor" }),
                                                    (0, i.jsx)(d.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: t,
                                                    }),
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                        ],
                    }),
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsxs)("div", {
                            style: { display: "flex", flexDirection: "column", gap: "4px", marginBottom: "8px" },
                            children: [
                                (0, i.jsx)(d.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: y.intl.string(y.t.WoyrU8),
                                }),
                                (0, i.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: y.intl.string(y.t.zdWNET),
                                }),
                            ],
                        }),
                        (0, i.jsx)(u.f, {
                            value: P,
                            onChange: F,
                            placeholder: y.intl.string(y.t["28bQNf"]),
                            maxLength: G.sd,
                        }),
                    ],
                }),
            ],
        }),
    });
}
