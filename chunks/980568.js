i.d(t, { Z: () => o });
var n = i(570140),
    r = i(626135),
    s = i(981631);
let o = {
    dismissForApplicationId(e) {
        n.Z.dispatch({
            type: "ACTIVITY_INVITE_EDUCATION_DISMISS",
            key: e,
            value: !0,
        }),
            r.default.track(s.rMx.CLOSE_TUTORIAL, {
                tutorial: "activity-invite-nux-inline",
                application_id: e,
                acknowledged: !0,
            });
    },
};
