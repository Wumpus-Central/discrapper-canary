"use strict";
let i, r;
n.d(t, { A: () => T });
var s = n(735438),
    a = n.n(s),
    o = n(17928),
    l = n(228366),
    u = n(313961),
    c = n(652896),
    d = n(616356),
    _ = n(495544),
    f = n(235058),
    h = n(485296),
    p = n(806931);
function E() {
    let e,
        t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (null == i) e = null;
    else {
        null != (e = u.A.getSelectedParticipantId(i)) && u.A.isParticipantPoppedOut(i, e) && (e = null);
        let t = d.A.getLastActiveStream(),
            n = null != e ? u.A.getParticipant(i, e) : null;
        if (
            ((n?.type !== p.lp.ACTIVITY && (n?.type !== p.lp.USER || n.voiceState?.selfVideo)) || (e = null),
            null != t && null == e)
        ) {
            let n = u.A.getParticipant(i, (0, c._z)(t))?.id;
            null == n || u.A.isParticipantPoppedOut(i, n) || (e = n);
        }
        if (null == e) {
            let t = _.default.getId(),
                n = a()(u.A.getVideoParticipants(i)).filter(
                    (e) =>
                        e.type === p.lp.USER &&
                        e.user.id !== t &&
                        !f.Ay.isLocalVideoDisabled(e.user.id) &&
                        !u.A.isParticipantPoppedOut(i, e.id),
                ),
                s = n.map((e) => e.user.id),
                o = Date.now();
            null ==
                (e = n
                    .map((e) => [e.user.id, h.A.getSpeakingDuration(e.user.id, o)])
                    .filter((e) => {
                        let [t, n] = e;
                        return 0 !== n;
                    })
                    .maxBy((e) => {
                        let [t, n] = e;
                        return -n;
                    })?.[0]) && (e = null != r && s.has(r) ? r : n.first()?.user?.id);
        }
    }
    r !== e && ((r = e), t && I.emitChange());
}
let m = a().throttle(E, 300, { trailing: !0 });
function g() {
    return m(), !1;
}
class A extends o.Ay.Store {
    static displayName = "VideoSpeakerStore";
    initialize() {
        this.waitFor(u.A, _.default, h.A, d.A, f.Ay), this.syncWith([u.A, d.A], g);
    }
    getSpeaker(e) {
        return i !== e && ((i = e), E(!1)), r ?? _.default.getId();
    }
}
let I = new A(l.h, { AUDIO_SET_LOCAL_VIDEO_DISABLED: g }),
    T = I;
