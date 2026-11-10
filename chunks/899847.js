var i = n(620632),
    r = n(873298),
    a = n(73153),
    s = n(969935),
    l = n(662502),
    o = n(159201),
    d = n(761821),
    c = n(129230),
    u = n(842144),
    _ = n(191627),
    E = n(652215),
    A = n(835002);
async function f(e) {
    let t = new Set();
    (e.forEach((e) => {
        if (null != e.invoice_items && e.invoice_items.length > 0) {
            let n = e.invoice_items[0];
            null != n.sku_id && t.add(n.sku_id);
        }
    }),
        await Promise.all(Array.from(t).map((e) => (0, s.RE)(e))));
}
async function h(e) {
    let t = new Set();
    (e.forEach((e) => {
        null != e.sku_id && t.add(e.sku_id);
    }),
        await Promise.all(Array.from(t).map((e) => (0, s.RE)(e))));
}
let I = new Map(),
    p = new Map();
function m() {
    l.A.showFailedToast(A.OB.FAMILY_CENTER_TEEN_SETTINGS_LOAD_ERROR);
}
n.d(
    t,
    {},
    {
        Ay: {
            async initialPageLoad() {
                let e,
                    { showLoading: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t && a.h.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
                try {
                    e = await i.Bo.get({ url: E.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_ME, rejectWithError: (0, i.fT)() });
                } catch {
                    return (a.h.dispatch({ type: "FAMILY_CENTER_INITIAL_LOAD_FAILURE" }), null);
                }
                let { body: n } = e,
                    { teen_audit_log: r, linked_users: s, users: l, age_group: o } = n,
                    d = {
                        teenId: r?.teen_user_id,
                        rangeStartId: r?.range_start_id,
                        totals: r?.totals ?? {},
                        actions: r?.actions ?? [],
                        users: r?.users ?? [],
                        guilds: r?.guilds ?? [],
                        topUserActivities: r?.top_user_activities ?? [],
                        topGuildActivities: r?.top_guild_activities ?? [],
                        totalSpendAmount: r?.total_spend?.amount ?? null,
                        totalSpendCurrency: r?.total_spend?.currency ?? null,
                        spendingLimit: n.spending_limit ?? null,
                        monthlyPurchases: n.monthly_purchases ?? null,
                        invoices: r?.invoices ?? [],
                        gifts: r?.gifts ?? [],
                    };
                return (
                    null != d.invoices && d.invoices.length > 0 && (await f(d.invoices)),
                    null != d.gifts && d.gifts.length > 0 && (await h(d.gifts)),
                    a.h.dispatch({
                        type: "FAMILY_CENTER_INITIAL_LOAD",
                        familyCenterTeenActivity: d,
                        linkedUsers: s,
                        users: l,
                        ageGroup: o,
                    }),
                    null != n.restricted_schedule &&
                        null != d.teenId &&
                        a.h.dispatch({
                            type: "USER_RESTRICTED_SCHEDULE_UPDATE",
                            userId: d.teenId,
                            restrictedSchedule: n.restricted_schedule,
                        }),
                    d
                );
            },
            async fetchLinkedUsers() {
                let { body: e } = await i.Bo.get({
                        url: E.Rsh.FAMILY_CENTER_LINKED_USERS,
                        rejectWithError: (0, i.fT)(),
                    }),
                    t = { linkedUsers: e.linked_users, users: e.users };
                return (a.h.dispatch({ type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS", ...t }), t);
            },
            async getConnectionPrerequisites(e, t) {
                let { body: n } = await i.Bo.get({
                    url: E.Rsh.FAMILY_CENTER_CONNECTION_PREREQUISITES,
                    query: { teen_id: e, link_code: t },
                    rejectWithError: !0,
                });
                return n;
            },
            setPendingConnection(e, t) {
                a.h.dispatch({ type: "FAMILY_CENTER_PENDING_CONNECTION_SET", teenId: e, linkCode: t });
            },
            clearPendingConnection() {
                a.h.dispatch({ type: "FAMILY_CENTER_PENDING_CONNECTION_CLEAR" });
            },
            async requestLink(e, t) {
                let { body: n } = await i.Bo.post({
                        url: E.Rsh.FAMILY_CENTER_LINKED_USERS,
                        body: { recipient_id: e, code: t },
                        rejectWithError: (0, i.fT)(),
                    }),
                    r = { linkedUsers: n.linked_users, users: n.users };
                return (a.h.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS", ...r }), r);
            },
            async fetchTeenActivity(e) {
                let t;
                a.h.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
                let n = E.Rsh.FAMILY_CENTER_TEEN_ACTIVITY(e);
                try {
                    t = await i.Bo.get({ url: n, rejectWithError: (0, i.fT)() });
                } catch (e) {
                    throw (a.h.dispatch({ type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_FAILURE" }), e);
                }
                let { body: r } = t,
                    s = r.teen_audit_log,
                    l = {
                        teenId: s.teen_user_id,
                        rangeStartId: s.range_start_id,
                        totals: s.totals,
                        actions: s.actions,
                        users: s.users,
                        guilds: s.guilds,
                        topUserActivities: s.top_user_activities ?? [],
                        topGuildActivities: s.top_guild_activities ?? [],
                        totalSpendAmount: s?.total_spend?.amount ?? null,
                        totalSpendCurrency: s?.total_spend?.currency ?? null,
                        spendingLimit: r.spending_limit ?? null,
                        monthlyPurchases: r.monthly_purchases ?? null,
                        invoices: s?.invoices ?? [],
                        gifts: s?.gifts ?? [],
                    };
                return (
                    l.invoices && l.invoices.length > 0 && (await f(l.invoices)),
                    l.gifts && l.gifts.length > 0 && (await h(l.gifts)),
                    a.h.dispatch({ type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS", familyCenterTeenActivity: l }),
                    null != r.restricted_schedule &&
                        a.h.dispatch({
                            type: "USER_RESTRICTED_SCHEDULE_UPDATE",
                            userId: e,
                            restrictedSchedule: r.restricted_schedule,
                        }),
                    l
                );
            },
            async fetchMoreTeenActivity(e, t, n, r) {
                let { body: s } = await i.Bo.get({
                        url: E.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, t, n, r),
                        rejectWithError: (0, i.fT)(),
                    }),
                    { teen_audit_log: l } = s,
                    o = {
                        teenId: l.teen_user_id,
                        rangeStartId: l.range_start_id,
                        actions: l.actions,
                        users: l.users,
                        guilds: l.guilds,
                        topUserActivities: l.top_user_activities ?? [],
                        topGuildActivities: l.top_guild_activities ?? [],
                        totalSpendAmount: l?.total_spend?.amount ?? null,
                        totalSpendCurrency: l?.total_spend?.currency ?? null,
                        invoices: l?.invoices ?? [],
                        gifts: l?.gifts ?? [],
                    };
                return (
                    c.default.track(E.HAw.FAMILY_CENTER_ACTION, {
                        action: _.qb.LoadMore,
                        selected_teen_id: e,
                        action_display_type: t,
                    }),
                    a.h.dispatch({
                        type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
                        familyCenterTeenActivity: o,
                    }),
                    l
                );
            },
            selectTab(e) {
                a.h.dispatch({ type: "FAMILY_CENTER_HANDLE_TAB_SELECT", tab: e });
            },
            async fetchTeenSettingsAndConsents(e) {
                let t = I.get(e);
                if (null != t) return t;
                let n = (async function (e) {
                    try {
                        let { body: t } = await i.Bo.get({
                                url: E.Rsh.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(e),
                                rejectWithError: (0, i.fT)(),
                            }),
                            { settings: n, consents: r } = t;
                        a.h.dispatch({
                            type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS",
                            userId: e,
                            settings: n,
                            consents: r,
                        });
                    } catch {
                        let t = p.get(e);
                        null != t && t.size > 0 ? t.forEach((e) => e()) : m();
                    }
                })(e);
                I.set(e, n);
                try {
                    await n;
                } finally {
                    I.delete(e);
                }
            },
            onTeenSettingsLoadFailure(e, t) {
                let n = p.get(e) ?? new Set();
                return (
                    n.add(t),
                    p.set(e, n),
                    () => {
                        (n.delete(t), 0 === n.size && p.delete(e));
                    }
                );
            },
            showTeenSettingsLoadErrorToast: m,
            async updateTeenSettings(e, t, n) {
                let s = (0, o.f)(r.nT, t),
                    l = u.A.getSettings(e)?.[t],
                    c = (0, o.a)(l, n, s, r.nT, t);
                if (null == c) return;
                let { body: _ } = await i.Bo.patch({
                        url: E.Rsh.FAMILY_CENTER_TEEN_SETTINGS(e),
                        body: { settings: (0, d.ob)(r.nT, c) },
                        rejectWithError: (0, i.fT)(),
                    }),
                    { settings: A } = _;
                a.h.dispatch({ type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS", userId: e, settings: A });
            },
            updateTeenConsents: (e, t, n) =>
                i.Bo.patch({
                    url: E.Rsh.FAMILY_CENTER_TEEN_CONSENTS(e),
                    body: { grant: t, revoke: n },
                    rejectWithError: (0, i.fT)(),
                }).then((t) => {
                    let { body: n } = t;
                    a.h.dispatch({ type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS", userId: e, consents: n });
                }),
        },
        HB: async function () {
            await i.Bo.get({ url: E.Rsh.FAMILY_CENTER_LINK_CODE, rejectWithError: (0, i.fT)() }).then((e) => {
                let { body: t } = e,
                    n = t.link_code,
                    i = t.expires_at;
                return (a.h.dispatch({ type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS", linkCode: n, expiresAt: i }), n);
            });
        },
        Xz: async function () {
            await i.Bo.post({ url: E.Rsh.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS, rejectWithError: !0 });
        },
        e$: async function (e) {
            await i.Bo.del({
                url: E.Rsh.FAMILY_CENTER_LINKED_USERS,
                body: { linked_user_id: e },
                rejectWithError: (0, i.fT)(),
            }).then((t) => {
                let { body: n } = t;
                return (
                    a.h.dispatch({
                        type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS",
                        linkedUsers: n,
                        deletedUserId: e,
                    }),
                    n
                );
            });
        },
        nt: async function (e, t) {
            await i.Bo.patch({
                url: E.Rsh.FAMILY_CENTER_LINKED_USERS,
                body: { linked_user_id: e, link_status: t },
                rejectWithError: (0, i.fT)(),
            }).then((e) => {
                let { body: t } = e;
                return (a.h.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS", linkedUsers: t }), t);
            });
        },
    },
);
