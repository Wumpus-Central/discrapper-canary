(l.d(e, { default: () => D }), l(321073));
var i = l(477900),
    n = l(582128),
    a = l(855986),
    o = l(189213),
    r = l(687966),
    s = l(834730),
    c = l(321471),
    d = l(691885),
    p = l(695366),
    u = l(103557),
    A = l(736653),
    I = l(573648),
    h = l(627363),
    _ = l(587895),
    g = l(240248),
    S = l(555337),
    L = l(620632),
    N = l(73153);
let f = null,
    E = null,
    C = !1;
class T extends a.Ay.Store {
    static displayName = "GuildSettingsOnboardingAllowedApplicationsStore";
    getAllowedApplicationIds(t) {
        return f === t ? E : null;
    }
    isFetching(t) {
        return f === t && C;
    }
    hasCachedData(t) {
        return f === t && null !== E;
    }
}
let O = new T(N.h, {
    GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_START: function (t) {
        let { guildId: e } = t;
        ((f = e), (C = !0), (E = []));
    },
    GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS: function (t) {
        let { guildId: e, applicationIds: l } = t;
        f === e && ((E = l), (C = !1));
    },
    GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_FAILURE: function (t) {
        let { guildId: e } = t;
        f === e && ((E = []), (C = !1));
    },
    GUILD_SETTINGS_CLOSE: function () {
        ((f = null), (E = null), (C = !1));
    },
});
var m = l(652215),
    v = l(923121),
    G = l(539916),
    y = l(792996),
    x = l(925891);
function D(t) {
    let { transitionState: e, onClose: l, connection: f, index: E } = t,
        C = (0, A.Ay)(),
        T = null != f && null != E,
        D = S.A.getGuildId(),
        b = (0, a.bG)([O], () => O.getAllowedApplicationIds(D) ?? [], [D]);
    (n.useEffect(() => {
        null != D &&
            (async function (t) {
                let e = O.getAllowedApplicationIds(t);
                if (null !== e) return Promise.resolve(e);
                if (O.isFetching(t))
                    return new Promise((e) => {
                        O.addChangeListener(function l() {
                            let i = O.getAllowedApplicationIds(t);
                            null !== i && (O.removeChangeListener(l), e(i));
                        });
                    });
                N.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_START", guildId: t });
                try {
                    let e = await L.Bo.get({
                        url: m.Rsh.GUILD_ONBOARDING_ALLOWED_APPLICATIONS(t),
                        rejectWithError: (0, L.fT)(),
                    });
                    if (e.body?.application_ids) {
                        let l = e.body.application_ids.map((t) => String(t));
                        return (
                            N.h.dispatch({
                                type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS",
                                guildId: t,
                                applicationIds: l,
                            }),
                            l
                        );
                    }
                    return (
                        N.h.dispatch({
                            type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS",
                            guildId: t,
                            applicationIds: [],
                        }),
                        []
                    );
                } catch (e) {
                    return (
                        N.h.dispatch({
                            type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_FAILURE",
                            guildId: t,
                        }),
                        []
                    );
                }
            })(D);
    }, [D]),
        n.useEffect(() => {
            for (let t of b)
                null != _.A.getApplication(t) || _.A.isFetchingApplication(t) || (0, h.TA)(t).catch(() => {});
        }, [b]));
    let P = (0, a.yK)(
            [_.A],
            () => {
                let t = [];
                for (let e of b) {
                    let l = _.A.getApplication(e);
                    null != l && t.push(l);
                }
                return t;
            },
            [b],
        ),
        [j, F] = n.useState(() => (null != f ? (0, G.Sq)(f) : void 0)),
        [U, R] = n.useState(f?.description ?? ""),
        [W, B] = n.useState([]),
        k = n.useMemo(() => {
            let t = [];
            for (let e of I.A.filter((t) => t.enabled && !G.tb.has(t.type))) {
                let l = "light" === C ? e.icon?.lightPNG : e.icon?.darkPNG;
                t.push({ label: e.name, value: `provider:${e.type}`, icon: l });
            }
            for (let e of P) t.push({ label: e.name, value: `app:${e.id}`, icon: e.getIconURL(128) });
            for (let e of b)
                null == _.A.getApplication(e) &&
                    _.A.isFetchingApplication(e) &&
                    t.push({ label: "Loading...", value: `app:${e}`, icon: void 0 });
            return (t.sort((t, e) => t.label.localeCompare(e.label)), t);
        }, [P, b, C]),
        w = n.useCallback(() => {
            if (null == j || "" === j) return void B(["Please select a connection"]);
            let t = (0, G.vK)(j);
            if (null == t) return void B(["Invalid connection selected"]);
            let e = U.trim(),
                i = {
                    connection_type: t.type,
                    description: (0, g.uJ)(e) ? void 0 : e,
                    ...(null != t.applicationId && { application_id: t.applicationId }),
                    ...(null != t.providerId && { provider_id: t.providerId }),
                },
                n = (0, G.Ii)(i);
            n.length > 0 ? B(n) : (T ? (0, v.yM)(E, i) : (0, v.sF)(i), l());
        }, [j, U, T, E, l]),
        H = n.useCallback(
            (t) => ({
                id: t.value,
                value: t.value,
                label: t.label,
                leading: "string" == typeof t.icon ? { type: "image", src: t.icon } : r.GameControllerIcon,
            }),
            [],
        );
    return (0, i.jsx)(o.a, {
        transitionState: e,
        title: T ? y.intl.string(y.t.yqegs1) : y.intl.string(y.t.B6qOe2),
        onClose: l,
        actions: [
            { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: l },
            { variant: "primary", text: T ? y.intl.string(y.t["R3BPH+"]) : y.intl.string(y.t.qMOnJu), onClick: w },
        ],
        children: (0, i.jsxs)("div", {
            className: x.Qs,
            children: [
                !T &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(s.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: y.intl.string(y.t.mGhCgX),
                            }),
                            (0, i.jsx)(c.e, {
                                title: y.intl.string(y.t.joNLrt),
                                children: (0, i.jsx)(d.l, {
                                    selectionMode: "single",
                                    value: j,
                                    onSelectionChange: (t) => {
                                        (F(t), B([]));
                                    },
                                    options: k,
                                    formatOption: H,
                                    placeholder: y.intl.string(y.t.Wq1LfI),
                                    label: y.intl.string(y.t.joNLrt),
                                    hideLabel: !0,
                                    required: !0,
                                    fullWidth: !0,
                                }),
                            }),
                            W.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: x.sO,
                                    children: W.map((t, e) =>
                                        (0, i.jsxs)(
                                            "div",
                                            {
                                                className: x.Ff,
                                                children: [
                                                    (0, i.jsx)(p.E, { size: "sm", color: "currentColor" }),
                                                    (0, i.jsx)(s.E, {
                                                        variant: "body-sm/normal",
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
                                (0, i.jsx)(s.E, {
                                    variant: "body-md/medium",
                                    color: "text-strong",
                                    children: y.intl.string(y.t.WoyrU8),
                                }),
                                (0, i.jsx)(s.E, {
                                    variant: "body-sm/normal",
                                    color: "text-subtle",
                                    children: y.intl.string(y.t.zdWNET),
                                }),
                            ],
                        }),
                        (0, i.jsx)(u.f, {
                            value: U,
                            onChange: R,
                            placeholder: y.intl.string(y.t["28bQNf"]),
                            maxLength: 100,
                        }),
                    ],
                }),
            ],
        }),
    });
}
