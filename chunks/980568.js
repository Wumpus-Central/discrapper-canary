n.d(t, { Z: () => l });
var i = n(570140),
    r = n(626135),
    o = n(981631);
let l = {
    dismissForApplicationId(e) {
        i.Z.dispatch({
            type: "ACTIVITY_INVITE_EDUCATION_DISMISS",
            key: e,
            value: !0,
        }),
            r.default.track(o.rMx.CLOSE_TUTORIAL, {
                tutorial: "activity-invite-nux-inline",
                application_id: e,
                acknowledged: !0,
            });
    },
};
