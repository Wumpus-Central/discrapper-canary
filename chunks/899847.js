n.d(t, { Ay: () => T, HB: () => I, Xz: () => p, e$: () => f, nt: () => h });
var i = n(636537),
    r = n(873298),
    a = n(73153),
    s = n(815996),
    l = n(159201),
    o = n(761821),
    d = n(174459),
    c = n(842144),
    u = n(191627),
    _ = n(652215);
async function E(e) {
    let t = new Set();
    (e.forEach((e) => {
        if (null != e.invoice_items && e.invoice_items.length > 0) {
            let n = e.invoice_items[0];
            null != n.sku_id && t.add(n.sku_id);
        }
    }),
        await Promise.all(Array.from(t).map((e) => (0, s.RE)(e))));
}
async function A(e) {
    let t = new Set();
    (e.forEach((e) => {
        null != e.sku_id && t.add(e.sku_id);
    }),
        await Promise.all(Array.from(t).map((e) => (0, s.RE)(e))));
}
async function h(e, t) {
    await i.Bo.patch({
        url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
        body: { linked_user_id: e, link_status: t },
        rejectWithError: (0, i.fT)(),
    }).then((e) => {
        let { body: t } = e;
        return (a.h.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS", linkedUsers: t }), t);
    });
}
async function f(e) {
    await i.Bo.del({
        url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
        body: { linked_user_id: e },
        rejectWithError: (0, i.fT)(),
    }).then((t) => {
        let { body: n } = t;
        return (
            a.h.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS", linkedUsers: n, deletedUserId: e }), n
        );
    });
}
async function I() {
    await i.Bo.get({ url: _.Rsh.FAMILY_CENTER_LINK_CODE, rejectWithError: (0, i.fT)() }).then((e) => {
        let { body: t } = e,
            n = t.link_code,
            i = t.expires_at;
        return (a.h.dispatch({ type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS", linkCode: n, expiresAt: i }), n);
    });
}
async function p() {
    await i.Bo.post({ url: _.Rsh.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS, rejectWithError: !0 });
}
let T = {
    async initialPageLoad() {
        let e;
        a.h.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        try {
            e = await i.Bo.get({ url: _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_ME, rejectWithError: (0, i.fT)() });
        } catch {
            return (a.h.dispatch({ type: "FAMILY_CENTER_INITIAL_LOAD_FAILURE" }), null);
        }
        let { body: t } = e,
            { teen_audit_log: n, linked_users: r, users: s, age_group: l } = t,
            o = {
                teenId: n?.teen_user_id,
                rangeStartId: n?.range_start_id,
                totals: n?.totals ?? {},
                actions: n?.actions ?? [],
                users: n?.users ?? [],
                guilds: n?.guilds ?? [],
                topUserActivities: n?.top_user_activities ?? [],
                topGuildActivities: n?.top_guild_activities ?? [],
                totalSpendAmount: n?.total_spend?.amount ?? null,
                totalSpendCurrency: n?.total_spend?.currency ?? null,
                spendingLimit: t.spending_limit ?? null,
                monthlyPurchases: t.monthly_purchases ?? null,
                invoices: n?.invoices ?? [],
                gifts: n?.gifts ?? [],
            };
        return (
            null != o.invoices && o.invoices.length > 0 && (await E(o.invoices)),
            null != o.gifts && o.gifts.length > 0 && (await A(o.gifts)),
            a.h.dispatch({
                type: "FAMILY_CENTER_INITIAL_LOAD",
                familyCenterTeenActivity: o,
                linkedUsers: r,
                users: s,
                ageGroup: l,
            }),
            null != t.restricted_schedule &&
                null != o.teenId &&
                a.h.dispatch({
                    type: "USER_RESTRICTED_SCHEDULE_UPDATE",
                    userId: o.teenId,
                    restrictedSchedule: t.restricted_schedule,
                }),
            o
        );
    },
    async fetchLinkedUsers() {
        let { body: e } = await i.Bo.get({ url: _.Rsh.FAMILY_CENTER_LINKED_USERS, rejectWithError: (0, i.fT)() }),
            t = { linkedUsers: e.linked_users, users: e.users };
        return (a.h.dispatch({ type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS", ...t }), t);
    },
    async getConnectionPrerequisites(e, t) {
        let { body: n } = await i.Bo.get({
            url: _.Rsh.FAMILY_CENTER_CONNECTION_PREREQUISITES,
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
                url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
                body: { recipient_id: e, code: t },
                rejectWithError: (0, i.fT)(),
            }),
            r = { linkedUsers: n.linked_users, users: n.users };
        return (a.h.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS", ...r }), r);
    },
    async fetchTeenActivity(e) {
        let t;
        a.h.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let n = _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY(e);
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
            l.invoices && l.invoices.length > 0 && (await E(l.invoices)),
            l.gifts && l.gifts.length > 0 && (await A(l.gifts)),
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
                url: _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, t, n, r),
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
            d.default.track(_.HAw.FAMILY_CENTER_ACTION, {
                action: u.qb.LoadMore,
                selected_teen_id: e,
                action_display_type: t,
            }),
            a.h.dispatch({ type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS", familyCenterTeenActivity: o }),
            l
        );
    },
    selectTab(e) {
        a.h.dispatch({ type: "FAMILY_CENTER_HANDLE_TAB_SELECT", tab: e });
    },
    fetchTeenSettingsAndConsents: (e) =>
        i.Bo.get({ url: _.Rsh.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(e), rejectWithError: (0, i.fT)() }).then((t) => {
            let { body: n } = t,
                { settings: i, consents: r } = n;
            a.h.dispatch({
                type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS",
                userId: e,
                settings: i,
                consents: r,
            });
        }),
    async updateTeenSettings(e, t, n) {
        let s = (0, l.f)(r.nT, t),
            d = c.A.getSettings(e)?.[t],
            u = (0, l.a)(d, n, s, r.nT, t);
        if (null == u) return;
        let { body: E } = await i.Bo.patch({
                url: _.Rsh.FAMILY_CENTER_TEEN_SETTINGS(e),
                body: { settings: (0, o.ob)(r.nT, u) },
                rejectWithError: (0, i.fT)(),
            }),
            { settings: A } = E;
        a.h.dispatch({ type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS", userId: e, settings: A });
    },
    updateTeenConsents: (e, t, n) =>
        i.Bo.patch({
            url: _.Rsh.FAMILY_CENTER_TEEN_CONSENTS(e),
            body: { grant: t, revoke: n },
            rejectWithError: (0, i.fT)(),
        }).then((t) => {
            let { body: n } = t;
            a.h.dispatch({ type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS", userId: e, consents: n });
        }),
};
