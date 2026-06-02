"use strict";
n.d(t, { Ay: () => g, HB: () => E, Xz: () => m, e$: () => p, nt: () => f });
var i = n(636537),
    r = n(873298),
    s = n(228366),
    a = n(859040),
    o = n(159201),
    l = n(761821),
    u = n(174459),
    c = n(842144),
    d = n(191627),
    _ = n(652215);
async function h(e) {
    let t = new Set();
    e.forEach((e) => {
        if (null != e.invoice_items && e.invoice_items.length > 0) {
            let n = e.invoice_items[0];
            null != n.sku_id && t.add(n.sku_id);
        }
    }),
        await Promise.all(Array.from(t).map((e) => (0, a.RE)(e)));
}
async function f(e, t) {
    await i.Bo.patch({
        url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
        body: { linked_user_id: e, link_status: t },
        rejectWithError: !1,
    }).then((e) => {
        let { body: t } = e;
        return s.h.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS", linkedUsers: t }), t;
    });
}
async function p(e) {
    await i.Bo.del({ url: _.Rsh.FAMILY_CENTER_LINKED_USERS, body: { linked_user_id: e }, rejectWithError: !1 }).then(
        (t) => {
            let { body: n } = t;
            return (
                s.h.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS", linkedUsers: n, deletedUserId: e }), n
            );
        },
    );
}
async function E() {
    await i.Bo.get({ url: _.Rsh.FAMILY_CENTER_LINK_CODE, rejectWithError: !1 }).then((e) => {
        let { body: t } = e,
            n = t.link_code;
        return s.h.dispatch({ type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS", linkCode: n }), n;
    });
}
async function m() {
    await i.Bo.post({ url: _.Rsh.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS, rejectWithError: !0 });
}
let g = {
    async initialPageLoad() {
        s.h.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let { body: e } = await i.Bo.get({ url: _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_ME, rejectWithError: !1 }),
            { teen_audit_log: t, linked_users: n, users: r, age_group: a } = e,
            o = {
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
            };
        return (
            null != o.invoices && o.invoices.length > 0 && (await h(o.invoices)),
            s.h.dispatch({
                type: "FAMILY_CENTER_INITIAL_LOAD",
                familyCenterTeenActivity: o,
                linkedUsers: n,
                users: r,
                ageGroup: a,
            }),
            null != e.restricted_schedule &&
                null != o.teenId &&
                s.h.dispatch({
                    type: "USER_RESTRICTED_SCHEDULE_UPDATE",
                    userId: o.teenId,
                    restrictedSchedule: e.restricted_schedule,
                }),
            o
        );
    },
    async fetchLinkedUsers() {
        let { body: e } = await i.Bo.get({ url: _.Rsh.FAMILY_CENTER_LINKED_USERS, rejectWithError: !1 }),
            t = { linkedUsers: e.linked_users, users: e.users };
        return s.h.dispatch({ type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS", ...t }), t;
    },
    async requestLink(e, t) {
        let { body: n } = await i.Bo.post({
                url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
                body: { recipient_id: e, code: t },
                rejectWithError: !1,
            }),
            r = { linkedUsers: n.linked_users, users: n.users };
        return s.h.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS", ...r }), r;
    },
    async fetchTeenActivity(e) {
        s.h.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let t = _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY(e),
            { body: n } = await i.Bo.get({ url: t, rejectWithError: !1 }),
            r = n.teen_audit_log,
            a = {
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
            };
        return (
            a.invoices && a.invoices.length > 0 && (await h(a.invoices)),
            s.h.dispatch({ type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS", familyCenterTeenActivity: a }),
            null != n.restricted_schedule &&
                s.h.dispatch({
                    type: "USER_RESTRICTED_SCHEDULE_UPDATE",
                    userId: e,
                    restrictedSchedule: n.restricted_schedule,
                }),
            a
        );
    },
    async fetchMoreTeenActivity(e, t, n, r) {
        let { body: a } = await i.Bo.get({
                url: _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, t, n, r),
                rejectWithError: !1,
            }),
            { teen_audit_log: o } = a,
            l = {
                teenId: o.teen_user_id,
                rangeStartId: o.range_start_id,
                actions: o.actions,
                users: o.users,
                guilds: o.guilds,
                topUserActivities: o.top_user_activities ?? [],
                topGuildActivities: o.top_guild_activities ?? [],
                totalSpendAmount: o?.total_spend?.amount ?? null,
                totalSpendCurrency: o?.total_spend?.currency ?? null,
                invoices: o?.invoices ?? [],
            };
        return (
            u.default.track(_.HAw.FAMILY_CENTER_ACTION, {
                action: d.qb.LoadMore,
                selected_teen_id: e,
                action_display_type: t,
            }),
            s.h.dispatch({ type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS", familyCenterTeenActivity: l }),
            o
        );
    },
    selectTab(e) {
        s.h.dispatch({ type: "FAMILY_CENTER_HANDLE_TAB_SELECT", tab: e });
    },
    fetchTeenSettingsAndConsents: (e) =>
        i.Bo.get({ url: _.Rsh.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(e), rejectWithError: !1 }).then((t) => {
            let { body: n } = t,
                { settings: i, consents: r } = n;
            s.h.dispatch({
                type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS",
                userId: e,
                settings: i,
                consents: r,
            });
        }),
    async updateTeenSettings(e, t, n) {
        let a = (0, o.f)(r.nT, t),
            u = c.A.getSettings(e)?.[t],
            d = (0, o.a)(u, n, a, r.nT, t);
        if (null == d) return;
        let { body: h } = await i.Bo.patch({
                url: _.Rsh.FAMILY_CENTER_TEEN_SETTINGS(e),
                body: { settings: (0, l.ob)(r.nT, d) },
                rejectWithError: !1,
            }),
            { settings: f } = h;
        s.h.dispatch({ type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS", userId: e, settings: f });
    },
    updateTeenConsents: (e, t, n) =>
        i.Bo.patch({
            url: _.Rsh.FAMILY_CENTER_TEEN_CONSENTS(e),
            body: { grant: t, revoke: n },
            rejectWithError: !1,
        }).then((t) => {
            let { body: n } = t;
            s.h.dispatch({ type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS", userId: e, consents: n });
        }),
};
