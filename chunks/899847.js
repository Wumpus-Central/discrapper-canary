n.d(e, {
    Ay: () => I,
    HB: () => C,
    Xz: () => f,
    e$: () => A,
    nt: () => S,
}),
    n(896048);
var i = n(562465),
    l = n(873298),
    r = n(73153),
    a = n(979286),
    o = n(159201),
    u = n(761821),
    s = n(954571),
    d = n(842144),
    E = n(191627),
    _ = n(652215);

function c(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            i.forEach(function (e) {
                var i;
                (i = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = i);
            });
    }
    return t;
}
async function T(t) {
    let e = new Set();
    t.forEach((t) => {
        if (null != t.invoice_items && t.invoice_items.length > 0) {
            let n = t.invoice_items[0];
            null != n.sku_id && e.add(n.sku_id);
        }
    }),
        await Promise.all(Array.from(e).map((t) => (0, a.RE)(t)));
}
async function S(t, e) {
    await i.Bo.patch({
        url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
        body: {
            linked_user_id: t,
            link_status: e,
        },
        rejectWithError: !1,
    }).then((t) => {
        let { body: e } = t;
        return (
            r.h.dispatch({
                type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS",
                linkedUsers: e,
            }),
            e
        );
    });
}
async function A(t) {
    await i.Bo.del({
        url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
        body: {
            linked_user_id: t,
        },
        rejectWithError: !1,
    }).then((e) => {
        let { body: n } = e;
        return (
            r.h.dispatch({
                type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS",
                linkedUsers: n,
                deletedUserId: t,
            }),
            n
        );
    });
}
async function C() {
    await i.Bo.get({
        url: _.Rsh.FAMILY_CENTER_LINK_CODE,
        rejectWithError: !1,
    }).then((t) => {
        let { body: e } = t,
            n = e.link_code;
        return (
            r.h.dispatch({
                type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS",
                linkCode: n,
            }),
            n
        );
    });
}
async function f() {
    await i.Bo.post({
        url: _.Rsh.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS,
        rejectWithError: !0,
    });
}
let I = {
    async initialPageLoad() {
        var t, e, n, l, a, o, u, s, d, E, c;
        r.h.dispatch({
            type: "FAMILY_CENTER_FETCH_START",
        });
        let { body: S } = await i.Bo.get({
                url: _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_ME,
                rejectWithError: !1,
            }),
            { teen_audit_log: A, linked_users: C, users: f, age_group: I } = S,
            N = {
                teenId: null == A ? void 0 : A.teen_user_id,
                rangeStartId: null == A ? void 0 : A.range_start_id,
                totals: null != (t = null == A ? void 0 : A.totals) ? t : {},
                actions: null != (e = null == A ? void 0 : A.actions) ? e : [],
                users: null != (n = null == A ? void 0 : A.users) ? n : [],
                guilds: null != (l = null == A ? void 0 : A.guilds) ? l : [],
                topUserActivities: null != (a = null == A ? void 0 : A.top_user_activities) ? a : [],
                topGuildActivities: null != (o = null == A ? void 0 : A.top_guild_activities) ? o : [],
                totalSpendAmount: null != (u = null == A || null == (E = A.total_spend) ? void 0 : E.amount) ? u : null,
                totalSpendCurrency:
                    null != (s = null == A || null == (c = A.total_spend) ? void 0 : c.currency) ? s : null,
                invoices: null != (d = null == A ? void 0 : A.invoices) ? d : [],
            };
        return (
            null != N.invoices && N.invoices.length > 0 && (await T(N.invoices)),
            r.h.dispatch({
                type: "FAMILY_CENTER_INITIAL_LOAD",
                familyCenterTeenActivity: N,
                linkedUsers: C,
                users: f,
                ageGroup: I,
            }),
            N
        );
    },
    async fetchLinkedUsers() {
        let { body: t } = await i.Bo.get({
                url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
                rejectWithError: !1,
            }),
            e = {
                linkedUsers: t.linked_users,
                users: t.users,
            };
        return (
            r.h.dispatch(
                c(
                    {
                        type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS",
                    },
                    e,
                ),
            ),
            e
        );
    },
    async requestLink(t, e) {
        let { body: n } = await i.Bo.post({
                url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
                body: {
                    recipient_id: t,
                    code: e,
                },
                rejectWithError: !1,
            }),
            l = {
                linkedUsers: n.linked_users,
                users: n.users,
            };
        return (
            r.h.dispatch(
                c(
                    {
                        type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS",
                    },
                    l,
                ),
            ),
            l
        );
    },
    async fetchTeenActivity(t) {
        var e, n, l, a, o, u, s;
        r.h.dispatch({
            type: "FAMILY_CENTER_FETCH_START",
        });
        let d = _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY(t),
            { body: E } = await i.Bo.get({
                url: d,
                rejectWithError: !1,
            }),
            c = E.teen_audit_log,
            S = {
                teenId: c.teen_user_id,
                rangeStartId: c.range_start_id,
                totals: c.totals,
                actions: c.actions,
                users: c.users,
                guilds: c.guilds,
                topUserActivities: null != (e = c.top_user_activities) ? e : [],
                topGuildActivities: null != (n = c.top_guild_activities) ? n : [],
                totalSpendAmount: null != (l = null == c || null == (u = c.total_spend) ? void 0 : u.amount) ? l : null,
                totalSpendCurrency:
                    null != (a = null == c || null == (s = c.total_spend) ? void 0 : s.currency) ? a : null,
                invoices: null != (o = null == c ? void 0 : c.invoices) ? o : [],
            };
        return (
            S.invoices && S.invoices.length > 0 && (await T(S.invoices)),
            r.h.dispatch({
                type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
                familyCenterTeenActivity: S,
            }),
            S
        );
    },
    async fetchMoreTeenActivity(t, e, n, l) {
        var a, o, u, d, c, T, S;
        let { body: A } = await i.Bo.get({
                url: _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_MORE(t, e, n, l),
                rejectWithError: !1,
            }),
            { teen_audit_log: C } = A,
            f = {
                teenId: C.teen_user_id,
                rangeStartId: C.range_start_id,
                actions: C.actions,
                users: C.users,
                guilds: C.guilds,
                topUserActivities: null != (a = C.top_user_activities) ? a : [],
                topGuildActivities: null != (o = C.top_guild_activities) ? o : [],
                totalSpendAmount: null != (u = null == C || null == (T = C.total_spend) ? void 0 : T.amount) ? u : null,
                totalSpendCurrency:
                    null != (d = null == C || null == (S = C.total_spend) ? void 0 : S.currency) ? d : null,
                invoices: null != (c = null == C ? void 0 : C.invoices) ? c : [],
            };
        return (
            s.default.track(_.HAw.FAMILY_CENTER_ACTION, {
                action: E.qb.LoadMore,
                selected_teen_id: t,
                action_display_type: e,
            }),
            r.h.dispatch({
                type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
                familyCenterTeenActivity: f,
            }),
            C
        );
    },
    selectTab(t) {
        r.h.dispatch({
            type: "FAMILY_CENTER_HANDLE_TAB_SELECT",
            tab: t,
        });
    },
    fetchTeenSettingsAndConsents: (t) =>
        i.Bo.get({
            url: _.Rsh.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(t),
            rejectWithError: !1,
        }).then((e) => {
            let { body: n } = e,
                { settings: i, consents: l } = n;
            r.h.dispatch({
                type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS",
                userId: t,
                settings: i,
                consents: l,
            });
        }),
    async updateTeenSettings(t, e, n) {
        var a;
        let s = (0, o.f)(l.nT, e),
            E = null == (a = d.A.getSettings(t)) ? void 0 : a[e],
            c = (0, o.a)(E, n, s, l.nT, e);
        if (null == c) return;
        let { body: T } = await i.Bo.patch({
                url: _.Rsh.FAMILY_CENTER_TEEN_SETTINGS(t),
                body: {
                    settings: (0, u.ob)(l.nT, c),
                },
                rejectWithError: !1,
            }),
            { settings: S } = T;
        r.h.dispatch({
            type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS",
            userId: t,
            settings: S,
        });
    },
    updateTeenConsents: (t, e, n) =>
        i.Bo.patch({
            url: _.Rsh.FAMILY_CENTER_TEEN_CONSENTS(t),
            body: {
                grant: e,
                revoke: n,
            },
            rejectWithError: !1,
        }).then((e) => {
            let { body: n } = e;
            r.h.dispatch({
                type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS",
                userId: t,
                consents: n,
            });
        }),
};
