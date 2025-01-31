n.d(t, { Z: () => s });
var i = n(570140),
    r = n(626135),
    a = n(981631);
let s = {
    dismissForApplicationId(e) {
        i.Z.dispatch({
            type: 'ACTIVITY_INVITE_EDUCATION_DISMISS',
            key: e,
            value: !0
        }),
            r.default.track(a.rMx.CLOSE_TUTORIAL, {
                tutorial: 'activity-invite-nux-inline',
                application_id: e,
                acknowledged: !0
            });
    }
};
