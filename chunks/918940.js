n.d(t, { Z: () => o }), n(47120);
var i = n(570140),
    l = n(996106),
    r = n(452426),
    a = n(701488),
    s = n(231338);
let o = {
    [s.Et.SET_ORIENTATION_LOCK_STATE]: {
        validation: (e) =>
            (0, r.Z)(e)
                .required()
                .keys({
                    lock_state: e.number().valid(a.xK.UNLOCKED, a.xK.PORTRAIT, a.xK.LANDSCAPE).required(),
                    picture_in_picture_lock_state: e.number().valid(a.xK.UNLOCKED, a.xK.PORTRAIT, a.xK.LANDSCAPE).allow(null).optional(),
                    grid_lock_state: e.number().valid(a.xK.UNLOCKED, a.xK.PORTRAIT, a.xK.LANDSCAPE).allow(null).optional()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { lock_state: n, picture_in_picture_lock_state: r, grid_lock_state: a }
                } = e,
                o = t.application.id;
            if (null != o)
                i.Z.dispatch({
                    type: 'EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE',
                    applicationId: o,
                    lockState: n,
                    pictureInPictureLockState: r,
                    gridLockState: a
                });
            else throw new l.Z({ errorCode: s.lT.INVALID_COMMAND }, 'No application.');
        }
    }
};
