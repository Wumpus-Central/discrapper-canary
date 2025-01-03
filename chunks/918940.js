n(47120);
var i = n(570140),
    r = n(996106),
    l = n(452426),
    a = n(701488),
    s = n(231338);
t.Z = {
    [s.Et.SET_ORIENTATION_LOCK_STATE]: {
        validation: (e) =>
            (0, l.Z)(e)
                .required()
                .keys({
                    lock_state: e.number().valid(a.xK.UNLOCKED, a.xK.PORTRAIT, a.xK.LANDSCAPE).required(),
                    picture_in_picture_lock_state: e.number().valid(a.xK.UNLOCKED, a.xK.PORTRAIT, a.xK.LANDSCAPE).allow(null).optional(),
                    grid_lock_state: e.number().valid(a.xK.UNLOCKED, a.xK.PORTRAIT, a.xK.LANDSCAPE).allow(null).optional()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { lock_state: n, picture_in_picture_lock_state: l, grid_lock_state: a }
                } = e,
                o = t.application.id;
            if (null != o)
                i.Z.dispatch({
                    type: 'EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE',
                    applicationId: o,
                    lockState: n,
                    pictureInPictureLockState: l,
                    gridLockState: a
                });
            else throw new r.Z({ errorCode: s.lT.INVALID_COMMAND }, 'No application.');
        }
    }
};
