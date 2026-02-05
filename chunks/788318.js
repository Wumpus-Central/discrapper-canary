"use strict";
let r, i;
n.d(t, { A: () => T });
var a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(73153),
    u = n(313961),
    c = n(652896),
    d = n(616356),
    _ = n(961350),
    f = n(430452),
    p = n(485296),
    h = n(806931);
function m() {
    let e,
        t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (null == r) e = null;
    else {
        null != (e = u.A.getSelectedParticipantId(r)) && u.A.isParticipantPoppedOut(r, e) && (e = null);
        let t = d.A.getLastActiveStream(),
            n = null != e ? u.A.getParticipant(r, e) : null;
        if (
            ((n?.type !== h.lp.ACTIVITY && (n?.type !== h.lp.USER || n.voiceState?.selfVideo)) || (e = null),
            null != t && null == e)
        ) {
            let n = u.A.getParticipant(r, (0, c._z)(t))?.id;
            null == n || u.A.isParticipantPoppedOut(r, n) || (e = n);
        }
        if (null == e) {
            let t = _.default.getId(),
                n = s()(u.A.getVideoParticipants(r)).filter(
                    (e) =>
                        e.type === h.lp.USER &&
                        e.user.id !== t &&
                        !f.A.isLocalVideoDisabled(e.user.id) &&
                        !u.A.isParticipantPoppedOut(r, e.id),
                ),
                a = n.map((e) => e.user.id),
                o = Date.now();
            null ==
                (e = n
                    .map((e) => [e.user.id, p.A.getSpeakingDuration(e.user.id, o)])
                    .filter((e) => {
                        let [t, n] = e;
                        return 0 !== n;
                    })
                    .maxBy((e) => {
                        let [t, n] = e;
                        return -n;
                    })?.[0]) && (e = null != i && a.has(i) ? i : n.first()?.user?.id);
        }
    }
    i !== e && ((i = e), t && I.emitChange());
}
let g = s().throttle(m, 300, { trailing: !0 });
function E() {
    return g(), !1;
}
class A extends o.Ay.Store {
    static displayName = "VideoSpeakerStore";
    initialize() {
        this.waitFor(u.A, _.default, p.A, d.A, f.A), this.syncWith([u.A, d.A], E);
    }
    getSpeaker(e) {
        return r !== e && ((r = e), m(!1)), i ?? _.default.getId();
    }
}
let I = new A(l.h, { AUDIO_SET_LOCAL_VIDEO_DISABLED: E }),
    T = I;
