n.d(t, { Z: () => a });
var r = n(570140),
    i = n(626135),
    o = n(981631);
let a = {
    dismissForApplicationId(e) {
        r.Z.dispatch({
            type: 'ACTIVITY_INVITE_EDUCATION_DISMISS',
            key: e,
            value: !0
        }),
            i.default.track(o.rMx.CLOSE_TUTORIAL, {
                tutorial: 'activity-invite-nux-inline',
                application_id: e,
                acknowledged: !0
            });
    }
};
