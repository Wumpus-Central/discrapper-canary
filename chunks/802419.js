l.d(e, { default: () => b }), l(321073);
var i = l(627968),
    n = l(64700),
    a = l(189213),
    r = l(695366),
    o = l(17928),
    s = l(687966),
    c = l(834730),
    d = l(321471),
    p = l(691885),
    u = l(260598),
    A = l(736653),
    I = l(573648),
    h = l(627363),
    _ = l(587895),
    g = l(240248),
    S = l(913758),
    L = l(636537),
    N = l(228366);
let E = null,
    f = null,
    C = !1;
class O extends o.Ay.Store {
    static displayName = "GuildSettingsOnboardingAllowedApplicationsStore";
    getAllowedApplicationIds(t) {
        return E === t ? f : null;
    }
    isFetching(t) {
        return E === t && C;
    }
    hasCachedData(t) {
        return E === t && null !== f;
    }
}
let T = new O(N.h, {
    GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_START: function (t) {
        let { guildId: e } = t;
        (E = e), (C = !0), (f = []);
    },
    GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS: function (t) {
        let { guildId: e, applicationIds: l } = t;
        E === e && ((f = l), (C = !1));
    },
    GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_FAILURE: function (t) {
        let { guildId: e } = t;
        E === e && ((f = []), (C = !1));
    },
    GUILD_SETTINGS_CLOSE: function () {
        (E = null), (f = null), (C = !1);
    },
});
var v = l(652215);
async function m(t) {
    let e = T.getAllowedApplicationIds(t);
    if (null !== e) return Promise.resolve(e);
    if (T.isFetching(t))
        return new Promise((e) => {
            T.addChangeListener(function l() {
                let i = T.getAllowedApplicationIds(t);
                null !== i && (T.removeChangeListener(l), e(i));
            });
        });
    N.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_START", guildId: t });
    try {
        let e = await L.Bo.get({ url: v.Rsh.GUILD_ONBOARDING_ALLOWED_APPLICATIONS(t), rejectWithError: !1 });
        if (e.ok && e.body?.application_ids) {
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
        return N.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_FAILURE", guildId: t }), [];
    }
}
var x = l(923121),
    G = l(539916),
    D = l(375708),
    y = l(62874);
function b(t) {
    let { transitionState: e, onClose: l, connection: L, index: N } = t,
        E = (0, A.Ay)(),
        f = null != L && null != N,
        C = S.A.getGuildId(),
        O = (0, o.bG)([T], () => T.getAllowedApplicationIds(C) ?? [], [C]);
    n.useEffect(() => {
        null != C && m(C);
    }, [C]),
        n.useEffect(() => {
            for (let t of O)
                null != _.A.getApplication(t) || _.A.isFetchingApplication(t) || (0, h.TA)(t).catch(() => {});
        }, [O]);
    let v = (0, o.yK)([_.A], () => {
            let t = [];
            for (let e of O) {
                let l = _.A.getApplication(e);
                null != l && t.push(l);
            }
            return t;
        }, [O]),
        [b, P] = n.useState(() => (null != L ? (0, G.Sq)(L) : void 0)),
        [j, F] = n.useState(L?.description ?? ""),
        [U, R] = n.useState([]),
        W = n.useMemo(() => {
            let t = [];
            for (let e of I.A.filter((t) => t.enabled && !G.tb.has(t.type))) {
                let l = "light" === E ? e.icon?.lightPNG : e.icon?.darkPNG;
                t.push({ label: e.name, value: `provider:${e.type}`, icon: l });
            }
            for (let e of v) t.push({ label: e.name, value: `app:${e.id}`, icon: e.getIconURL(128) });
            for (let e of O)
                null == _.A.getApplication(e) &&
                    _.A.isFetchingApplication(e) &&
                    t.push({ label: "Loading...", value: `app:${e}`, icon: void 0 });
            return t.sort((t, e) => t.label.localeCompare(e.label)), t;
        }, [v, O, E]),
        B = n.useCallback(() => {
            if (null == b || "" === b) return void R(["Please select a connection"]);
            let t = (0, G.vK)(b);
            if (null == t) return void R(["Invalid connection selected"]);
            let e = j.trim(),
                i = {
                    connection_type: t.type,
                    description: (0, g.uJ)(e) ? void 0 : e,
                    ...(null != t.applicationId && { application_id: t.applicationId }),
                    ...(null != t.providerId && { provider_id: t.providerId }),
                },
                n = (0, G.Ii)(i);
            n.length > 0 ? R(n) : (f ? (0, x.yM)(N, i) : (0, x.sF)(i), l());
        }, [b, j, f, N, l]),
        k = n.useCallback(
            (t) => ({
                id: t.value,
                value: t.value,
                label: t.label,
                leading: "string" == typeof t.icon ? { type: "image", src: t.icon } : s._,
            }),
            [],
        );
    return (0, i.jsx)(a.Modal, {
        transitionState: e,
        title: f ? D.intl.string(D.t.yqegs1) : D.intl.string(D.t.B6qOe2),
        onClose: l,
        actions: [
            { variant: "secondary", text: D.intl.string(D.t["ETE/oC"]), onClick: l },
            { variant: "primary", text: f ? D.intl.string(D.t["R3BPH+"]) : D.intl.string(D.t.qMOnJu), onClick: B },
        ],
        children: (0, i.jsxs)("div", {
            className: y.Qs,
            children: [
                !f &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: D.intl.string(D.t.mGhCgX),
                            }),
                            (0, i.jsx)(d.e, {
                                title: D.intl.string(D.t.joNLrt),
                                children: (0, i.jsx)(p.l, {
                                    selectionMode: "single",
                                    value: b,
                                    onSelectionChange: (t) => {
                                        P(t), R([]);
                                    },
                                    options: W,
                                    formatOption: k,
                                    placeholder: D.intl.string(D.t.Wq1LfI),
                                    label: D.intl.string(D.t.joNLrt),
                                    hideLabel: !0,
                                    required: !0,
                                    fullWidth: !0,
                                }),
                            }),
                            U.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: y.sO,
                                    children: U.map((t, e) =>
                                        (0, i.jsxs)(
                                            "div",
                                            {
                                                className: y.Ff,
                                                children: [
                                                    (0, i.jsx)(r.E, { size: "sm", color: "currentColor" }),
                                                    (0, i.jsx)(c.E, {
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
                                (0, i.jsx)(c.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: D.intl.string(D.t.WoyrU8),
                                }),
                                (0, i.jsx)(c.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: D.intl.string(D.t.zdWNET),
                                }),
                            ],
                        }),
                        (0, i.jsx)(u.f, {
                            value: j,
                            onChange: F,
                            placeholder: D.intl.string(D.t["28bQNf"]),
                            maxLength: G.sd,
                        }),
                    ],
                }),
            ],
        }),
    });
}
