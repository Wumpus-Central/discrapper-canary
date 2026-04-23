"use strict";
n.d(t, { Ay: () => g, HB: () => E, Xz: () => m, e$: () => h, nt: () => p });
var r = n(562465),
    i = n(873298),
    s = n(73153),
    a = n(979286),
    o = n(159201),
    l = n(761821),
    u = n(954571),
    c = n(842144),
    d = n(191627),
    _ = n(652215);
async function f(e) {
    let t = new Set();
    e.forEach((e) => {
        if (null != e.invoice_items && e.invoice_items.length > 0) {
            let n = e.invoice_items[0];
            null != n.sku_id && t.add(n.sku_id);
        }
    }),
        await Promise.all(Array.from(t).map((e) => (0, a.RE)(e)));
}
async function p(e, t) {
    await r.Bo.patch({
        url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
        body: { linked_user_id: e, link_status: t },
        rejectWithError: !1,
    }).then((e) => {
        let { body: t } = e;
        return s.h.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS", linkedUsers: t }), t;
    });
}
async function h(e) {
    await r.Bo.del({ url: _.Rsh.FAMILY_CENTER_LINKED_USERS, body: { linked_user_id: e }, rejectWithError: !1 }).then(
        (t) => {
            let { body: n } = t;
            return (
                s.h.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS", linkedUsers: n, deletedUserId: e }), n
            );
        },
    );
}
async function E() {
    await r.Bo.get({ url: _.Rsh.FAMILY_CENTER_LINK_CODE, rejectWithError: !1 }).then((e) => {
        let { body: t } = e,
            n = t.link_code;
        return s.h.dispatch({ type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS", linkCode: n }), n;
    });
}
async function m() {
    await r.Bo.post({ url: _.Rsh.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS, rejectWithError: !0 });
}
let g = {
    async initialPageLoad() {
        s.h.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let { body: e } = await r.Bo.get({ url: _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_ME, rejectWithError: !1 }),
            { teen_audit_log: t, linked_users: n, users: i, age_group: a } = e,
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
                invoices: t?.invoices ?? [],
            };
        return (
            null != o.invoices && o.invoices.length > 0 && (await f(o.invoices)),
            s.h.dispatch({
                type: "FAMILY_CENTER_INITIAL_LOAD",
                familyCenterTeenActivity: o,
                linkedUsers: n,
                users: i,
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
        let { body: e } = await r.Bo.get({ url: _.Rsh.FAMILY_CENTER_LINKED_USERS, rejectWithError: !1 }),
            t = { linkedUsers: e.linked_users, users: e.users };
        return s.h.dispatch({ type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS", ...t }), t;
    },
    async requestLink(e, t) {
        let { body: n } = await r.Bo.post({
                url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
                body: { recipient_id: e, code: t },
                rejectWithError: !1,
            }),
            i = { linkedUsers: n.linked_users, users: n.users };
        return s.h.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS", ...i }), i;
    },
    async fetchTeenActivity(e) {
        s.h.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let t = _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY(e),
            { body: n } = await r.Bo.get({ url: t, rejectWithError: !1 }),
            i = n.teen_audit_log,
            a = {
                teenId: i.teen_user_id,
                rangeStartId: i.range_start_id,
                totals: i.totals,
                actions: i.actions,
                users: i.users,
                guilds: i.guilds,
                topUserActivities: i.top_user_activities ?? [],
                topGuildActivities: i.top_guild_activities ?? [],
                totalSpendAmount: i?.total_spend?.amount ?? null,
                totalSpendCurrency: i?.total_spend?.currency ?? null,
                invoices: i?.invoices ?? [],
            };
        return (
            a.invoices && a.invoices.length > 0 && (await f(a.invoices)),
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
    async fetchMoreTeenActivity(e, t, n, i) {
        let { body: a } = await r.Bo.get({
                url: _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, t, n, i),
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
        r.Bo.get({ url: _.Rsh.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(e), rejectWithError: !1 }).then((t) => {
            let { body: n } = t,
                { settings: r, consents: i } = n;
            s.h.dispatch({
                type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS",
                userId: e,
                settings: r,
                consents: i,
            });
        }),
    async updateTeenSettings(e, t, n) {
        let a = (0, o.f)(i.nT, t),
            u = c.A.getSettings(e)?.[t],
            d = (0, o.a)(u, n, a, i.nT, t);
        if (null == d) return;
        let { body: f } = await r.Bo.patch({
                url: _.Rsh.FAMILY_CENTER_TEEN_SETTINGS(e),
                body: { settings: (0, l.ob)(i.nT, d) },
                rejectWithError: !1,
            }),
            { settings: p } = f;
        s.h.dispatch({ type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS", userId: e, settings: p });
    },
    updateTeenConsents: (e, t, n) =>
        r.Bo.patch({
            url: _.Rsh.FAMILY_CENTER_TEEN_CONSENTS(e),
            body: { grant: t, revoke: n },
            rejectWithError: !1,
        }).then((t) => {
            let { body: n } = t;
            s.h.dispatch({ type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS", userId: e, consents: n });
        }),
};
