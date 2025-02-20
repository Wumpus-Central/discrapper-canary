n.d(t, { Z: () => s }), n(47120);
var r = n(570140),
    i = n(996106),
    l = n(452426),
    o = n(701488),
    a = n(231338);
let s = {
    [a.Et.SET_ORIENTATION_LOCK_STATE]: {
        validation: (e) =>
            (0, l.Z)(e)
                .required()
                .keys({
                    lock_state: e.number().valid(o.xK.UNLOCKED, o.xK.PORTRAIT, o.xK.LANDSCAPE).required(),
                    picture_in_picture_lock_state: e.number().valid(o.xK.UNLOCKED, o.xK.PORTRAIT, o.xK.LANDSCAPE).allow(null).optional(),
                    grid_lock_state: e.number().valid(o.xK.UNLOCKED, o.xK.PORTRAIT, o.xK.LANDSCAPE).allow(null).optional()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { lock_state: n, picture_in_picture_lock_state: l, grid_lock_state: o }
                } = e,
                s = t.application.id;
            if (null != s)
                r.Z.dispatch({
                    type: 'EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE',
                    applicationId: s,
                    lockState: n,
                    pictureInPictureLockState: l,
                    gridLockState: o
                });
            else throw new i.Z({ errorCode: a.lT.INVALID_COMMAND }, 'No application.');
        }
    }
};
