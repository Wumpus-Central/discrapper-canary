n.d(e, { Ay: () => I, HB: () => A, Xz: () => C, e$: () => S, nt: () => c });
var i = n(562465),
    r = n(873298),
    l = n(73153),
    a = n(979286),
    s = n(159201),
    o = n(761821),
    d = n(954571),
    u = n(842144),
    E = n(191627),
    _ = n(652215);
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
async function c(t, e) {
    await i.Bo.patch({
        url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
        body: { linked_user_id: t, link_status: e },
        rejectWithError: !1,
    }).then((t) => {
        let { body: e } = t;
        return l.h.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS", linkedUsers: e }), e;
    });
}
async function S(t) {
    await i.Bo.del({ url: _.Rsh.FAMILY_CENTER_LINKED_USERS, body: { linked_user_id: t }, rejectWithError: !1 }).then(
        (e) => {
            let { body: n } = e;
            return (
                l.h.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS", linkedUsers: n, deletedUserId: t }), n
            );
        },
    );
}
async function A() {
    await i.Bo.get({ url: _.Rsh.FAMILY_CENTER_LINK_CODE, rejectWithError: !1 }).then((t) => {
        let { body: e } = t,
            n = e.link_code;
        return l.h.dispatch({ type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS", linkCode: n }), n;
    });
}
async function C() {
    await i.Bo.post({ url: _.Rsh.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS, rejectWithError: !0 });
}
let I = {
    async initialPageLoad() {
        l.h.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let { body: t } = await i.Bo.get({ url: _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_ME, rejectWithError: !1 }),
            { teen_audit_log: e, linked_users: n, users: r, age_group: a } = t,
            s = {
                teenId: e?.teen_user_id,
                rangeStartId: e?.range_start_id,
                totals: e?.totals ?? {},
                actions: e?.actions ?? [],
                users: e?.users ?? [],
                guilds: e?.guilds ?? [],
                topUserActivities: e?.top_user_activities ?? [],
                topGuildActivities: e?.top_guild_activities ?? [],
                totalSpendAmount: e?.total_spend?.amount ?? null,
                totalSpendCurrency: e?.total_spend?.currency ?? null,
                invoices: e?.invoices ?? [],
            };
        return (
            null != s.invoices && s.invoices.length > 0 && (await T(s.invoices)),
            l.h.dispatch({
                type: "FAMILY_CENTER_INITIAL_LOAD",
                familyCenterTeenActivity: s,
                linkedUsers: n,
                users: r,
                ageGroup: a,
            }),
            s
        );
    },
    async fetchLinkedUsers() {
        let { body: t } = await i.Bo.get({ url: _.Rsh.FAMILY_CENTER_LINKED_USERS, rejectWithError: !1 }),
            e = { linkedUsers: t.linked_users, users: t.users };
        return l.h.dispatch({ type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS", ...e }), e;
    },
    async requestLink(t, e) {
        let { body: n } = await i.Bo.post({
                url: _.Rsh.FAMILY_CENTER_LINKED_USERS,
                body: { recipient_id: t, code: e },
                rejectWithError: !1,
            }),
            r = { linkedUsers: n.linked_users, users: n.users };
        return l.h.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS", ...r }), r;
    },
    async fetchTeenActivity(t) {
        l.h.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let e = _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY(t),
            { body: n } = await i.Bo.get({ url: e, rejectWithError: !1 }),
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
                invoices: r?.invoices ?? [],
            };
        return (
            a.invoices && a.invoices.length > 0 && (await T(a.invoices)),
            l.h.dispatch({ type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS", familyCenterTeenActivity: a }),
            a
        );
    },
    async fetchMoreTeenActivity(t, e, n, r) {
        let { body: a } = await i.Bo.get({
                url: _.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_MORE(t, e, n, r),
                rejectWithError: !1,
            }),
            { teen_audit_log: s } = a,
            o = {
                teenId: s.teen_user_id,
                rangeStartId: s.range_start_id,
                actions: s.actions,
                users: s.users,
                guilds: s.guilds,
                topUserActivities: s.top_user_activities ?? [],
                topGuildActivities: s.top_guild_activities ?? [],
                totalSpendAmount: s?.total_spend?.amount ?? null,
                totalSpendCurrency: s?.total_spend?.currency ?? null,
                invoices: s?.invoices ?? [],
            };
        return (
            d.default.track(_.HAw.FAMILY_CENTER_ACTION, {
                action: E.qb.LoadMore,
                selected_teen_id: t,
                action_display_type: e,
            }),
            l.h.dispatch({ type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS", familyCenterTeenActivity: o }),
            s
        );
    },
    selectTab(t) {
        l.h.dispatch({ type: "FAMILY_CENTER_HANDLE_TAB_SELECT", tab: t });
    },
    fetchTeenSettingsAndConsents: (t) =>
        i.Bo.get({ url: _.Rsh.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(t), rejectWithError: !1 }).then((e) => {
            let { body: n } = e,
                { settings: i, consents: r } = n;
            l.h.dispatch({
                type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS",
                userId: t,
                settings: i,
                consents: r,
            });
        }),
    async updateTeenSettings(t, e, n) {
        let a = (0, s.f)(r.nT, e),
            d = u.A.getSettings(t)?.[e],
            E = (0, s.a)(d, n, a, r.nT, e);
        if (null == E) return;
        let { body: T } = await i.Bo.patch({
                url: _.Rsh.FAMILY_CENTER_TEEN_SETTINGS(t),
                body: { settings: (0, o.ob)(r.nT, E) },
                rejectWithError: !1,
            }),
            { settings: c } = T;
        l.h.dispatch({ type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS", userId: t, settings: c });
    },
    updateTeenConsents: (t, e, n) =>
        i.Bo.patch({
            url: _.Rsh.FAMILY_CENTER_TEEN_CONSENTS(t),
            body: { grant: e, revoke: n },
            rejectWithError: !1,
        }).then((e) => {
            let { body: n } = e;
            l.h.dispatch({ type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS", userId: t, consents: n });
        }),
};
