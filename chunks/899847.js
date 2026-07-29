"use strict";
n.d(t, { Ay: () => T, HB: () => f, Xz: () => p, e$: () => I, nt: () => h });
var i = n(562465),
    r = n(873298),
    a = n(228366),
    s = n(839534),
    l = n(159201),
    o = n(761821),
    d = n(174459),
    c = n(842144),
    u = n(191627),
    _ = n(652215);
async function E(e) {
    let t = new Set();
    e.forEach((e) => {
        if (null != e.invoice_items && e.invoice_items.length > 0) {
            let n = e.invoice_items[0];
            null != n.sku_id && t.add(n.sku_id);
        }
    }),
        await Promise.all(Array.from(t).map((e) => (0, s.RE)(e)));
}
async function A(e) {
    let t = new Set();
    e.forEach((e) => {
        null != e.sku_id && t.add(e.sku_id);
    }),
        await Promise.all(Array.from(t).map((e) => (0, s.RE)(e)));
}
async function h(e, t) {
    await i.Bo.patch({
        url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
        body: { linked_user_id: e, link_status: t },
        rejectWithError: (0, i.fT)(),
    }).then((e) => {
        let { body: t } = e;
        return a.h.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS", linkedUsers: t }), t;
    });
}
async function I(e) {
    await i.Bo.del({
        url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
        body: { linked_user_id: e },
        rejectWithError: (0, i.fT)(),
    }).then((t) => {
        let { body: n } = t;
        return a.h.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS", linkedUsers: n, deletedUserId: e }), n;
    });
}
async function f() {
    await i.Bo.get({ url: _.Rsh.FAMILY_CENTER_LINK_CODE, rejectWithError: (0, i.fT)() }).then((e) => {
        let { body: t } = e,
            n = t.link_code,
            i = t.expires_at;
        return a.h.dispatch({ type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS", linkCode: n, expiresAt: i }), n;
    });
}
async function p() {
    await i.Bo.post({ url: _.Rsh.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS, rejectWithError: !0 });
}
let T = {
    async initialPageLoad() {
        a.h.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let { body: e } = await i.Bo.get({ url: _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_ME, rejectWithError: (0, i.fT)() }),
            { teen_audit_log: t, linked_users: n, users: r, age_group: s } = e,
            l = {
                teenId: t?.teen_user_id,
                rangeStartId: t?.range_start_id,
                totals: t?.totals ?? {},
                actions: t?.actions ?? [],
                users: t?.users ?? [],
                guilds: t?.guilds ?? [],
                topUserActivities: t?.top_user_activities ?? [],
                topGuildActivities: t?.top_guild_activities ?? [],
                totalSpendAmount: t?.total_spend?.amount ?? null,
                totalSpendCurrency: t?.total_spend?.currency ?? null,
                spendingLimit: e.spending_limit ?? null,
                monthlyPurchases: e.monthly_purchases ?? null,
                invoices: t?.invoices ?? [],
                gifts: t?.gifts ?? [],
            };
        return (
            null != l.invoices && l.invoices.length > 0 && (await E(l.invoices)),
            null != l.gifts && l.gifts.length > 0 && (await A(l.gifts)),
            a.h.dispatch({
                type: "FAMILY_CENTER_INITIAL_LOAD",
                familyCenterTeenActivity: l,
                linkedUsers: n,
                users: r,
                ageGroup: s,
            }),
            null != e.restricted_schedule &&
                null != l.teenId &&
                a.h.dispatch({
                    type: "USER_RESTRICTED_SCHEDULE_UPDATE",
                    userId: l.teenId,
                    restrictedSchedule: e.restricted_schedule,
                }),
            l
        );
    },
    async fetchLinkedUsers() {
        let { body: e } = await i.Bo.get({ url: _.Rsh.FAMILY_CENTER_LINKED_USERS, rejectWithError: (0, i.fT)() }),
            t = { linkedUsers: e.linked_users, users: e.users };
        return a.h.dispatch({ type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS", ...t }), t;
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
        return a.h.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS", ...r }), r;
    },
    async fetchTeenActivity(e) {
        a.h.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let t = _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY(e),
            { body: n } = await i.Bo.get({ url: t, rejectWithError: (0, i.fT)() }),
            r = n.teen_audit_log,
            s = {
                teenId: r.teen_user_id,
                rangeStartId: r.range_start_id,
                totals: r.totals,
                actions: r.actions,
                users: r.users,
                guilds: r.guilds,
                topUserActivities: r.top_user_activities ?? [],
                topGuildActivities: r.top_guild_activities ?? [],
                totalSpendAmount: r?.total_spend?.amount ?? null,
                totalSpendCurrency: r?.total_spend?.currency ?? null,
                spendingLimit: n.spending_limit ?? null,
                monthlyPurchases: n.monthly_purchases ?? null,
                invoices: r?.invoices ?? [],
                gifts: r?.gifts ?? [],
            };
        return (
            s.invoices && s.invoices.length > 0 && (await E(s.invoices)),
            s.gifts && s.gifts.length > 0 && (await A(s.gifts)),
            a.h.dispatch({ type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS", familyCenterTeenActivity: s }),
            null != n.restricted_schedule &&
                a.h.dispatch({
                    type: "USER_RESTRICTED_SCHEDULE_UPDATE",
                    userId: e,
                    restrictedSchedule: n.restricted_schedule,
                }),
            s
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
