"use strict";
let i, r;
n.d(t, { A: () => T }), n(321073);
var s = n(735438),
    a = n.n(s),
    o = n(17928),
    l = n(228366),
    u = n(652896),
    c = n(616356),
    d = n(495544),
    _ = n(890063),
    h = n(485296),
    f = n(313961),
    p = n(806931);
function E() {
    let e,
        t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (null == i) e = null;
    else {
        null != (e = f.A.getSelectedParticipantId(i)) && f.A.isParticipantPoppedOut(i, e) && (e = null);
        let t = c.A.getLastActiveStream(),
            n = null != e ? f.A.getParticipant(i, e) : null;
        if (
            ((n?.type !== p.lp.ACTIVITY && (n?.type !== p.lp.USER || n.voiceState?.selfVideo)) || (e = null),
            null != t && null == e)
        ) {
            let n = f.A.getParticipant(i, (0, u._z)(t))?.id;
            null == n || f.A.isParticipantPoppedOut(i, n) || (e = n);
        }
        if (null == e) {
            let t,
                n,
                s = d.default.getId(),
                a = Date.now(),
                o = [],
                l = [];
            for (let e of f.A.getVideoParticipants(i)) {
                if (e.user.id === s || _.Ay.isLocalVideoDisabled(e.user.id) || f.A.isParticipantPoppedOut(i, e.id))
                    continue;
                o.push(e.user.id);
                let t = h.A.getSpeakingDuration(e.user.id, a);
                0 !== t && l.push({ userId: e.user.id, duration: t });
            }
            for (let { userId: e, duration: i } of l) (null == n || i < n) && ((t = e), (n = i));
            null == (e = t) && (e = null != r && o.includes(r) ? r : o[0]);
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
        this.waitFor(f.A, d.default, h.A, c.A, _.Ay), this.syncWith([f.A, c.A], g);
    }
    getSpeaker(e) {
        return i !== e && ((i = e), (r = null), E(!1)), r ?? d.default.getId();
    }
}
let I = new A(l.h, { AUDIO_SET_LOCAL_VIDEO_DISABLED: g }),
    T = I;
