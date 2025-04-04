a.d(e, { f: () => n });
var r = a(981631);
function n(t) {
    let { maxBudgetMinute: e, maxBudgetHour: a } = t,
        r = {
            minute: {
                slot: 0,
                budgetUsed: 0
            },
            hour: {
                slot: 0,
                budgetUsed: 0
            }
        };
    return () => {
        let t = Date.now(),
            n = Math.round(t / 1000 / 60),
            _ = Math.round(t / 1000 / 60 / 60);
        return r.minute.slot !== n && ((r.minute.slot = n), (r.minute.budgetUsed = 0)), r.hour.slot !== _ && ((r.hour.slot = _), (r.hour.budgetUsed = 0)), !!(r.minute.budgetUsed < e) && (r.minute.budgetUsed++, !!(r.hour.budgetUsed < a)) && (r.hour.budgetUsed++, !0);
    };
}
r.rMx.START_SPEAKING, r.rMx.START_LISTENING, r.rMx.APP_OPENED, r.rMx.NOTIFICATION_CLICKED, r.rMx.EXPERIMENT_USER_TRIGGERED, r.rMx.EXPERIMENT_DM_TRIGGERED, r.rMx.EXPERIMENT_GUILD_TRIGGERED;
