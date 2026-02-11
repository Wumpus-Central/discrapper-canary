"use strict";
let r, i;
n.d(t, { A: () => y });
var a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(73153),
    u = n(313961),
    c = n(652896),
    d = n(616356),
    _ = n(961350),
    f = n(430452),
    h = n(485296),
    p = n(806931);
function g() {
    let e,
        t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (null == r) e = null;
    else {
        null != (e = u.A.getSelectedParticipantId(r)) && u.A.isParticipantPoppedOut(r, e) && (e = null);
        let t = d.A.getLastActiveStream(),
            n = null != e ? u.A.getParticipant(r, e) : null;
        if (
            ((n?.type !== p.lp.ACTIVITY && (n?.type !== p.lp.USER || n.voiceState?.selfVideo)) || (e = null),
            null != t && null == e)
        ) {
            let n = u.A.getParticipant(r, (0, c._z)(t))?.id;
            null == n || u.A.isParticipantPoppedOut(r, n) || (e = n);
        }
        if (null == e) {
            let t = _.default.getId(),
                n = s()(u.A.getVideoParticipants(r)).filter(
                    (e) =>
                        e.type === p.lp.USER &&
                        e.user.id !== t &&
                        !f.Ay.isLocalVideoDisabled(e.user.id) &&
                        !u.A.isParticipantPoppedOut(r, e.id),
                ),
                a = n.map((e) => e.user.id),
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
                    })?.[0]) && (e = null != i && a.has(i) ? i : n.first()?.user?.id);
        }
    }
    i !== e && ((i = e), t && T.emitChange());
}
let E = s().throttle(g, 300, { trailing: !0 });
function A() {
    return E(), !1;
}
class I extends o.Ay.Store {
    static displayName = "VideoSpeakerStore";
    initialize() {
        this.waitFor(u.A, _.default, h.A, d.A, f.Ay), this.syncWith([u.A, d.A], A);
    }
    getSpeaker(e) {
        return r !== e && ((r = e), g(!1)), i ?? _.default.getId();
    }
}
let T = new I(l.h, { AUDIO_SET_LOCAL_VIDEO_DISABLED: A }),
    y = T;
