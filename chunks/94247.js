let i, r;
n.d(t, { A: () => g }), n(321073);
var a = n(435558),
    s = n.n(a),
    l = n(17928),
    o = n(228366),
    d = n(652896),
    c = n(616356),
    u = n(280450),
    _ = n(45630),
    E = n(485296),
    A = n(198052),
    h = n(806931);
function I() {
    let e,
        t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (null == i) e = null;
    else {
        null != (e = A.A.getSelectedParticipantId(i)) && A.A.isParticipantPoppedOut(i, e) && (e = null);
        let t = c.A.getLastActiveStream(),
            n = null != e ? A.A.getParticipant(i, e) : null;
        if (
            ((n?.type !== h.lp.ACTIVITY && (n?.type !== h.lp.USER || n.voiceState?.selfVideo)) || (e = null),
            null != t && null == e)
        ) {
            let n = A.A.getParticipant(i, (0, d._z)(t))?.id;
            null == n || A.A.isParticipantPoppedOut(i, n) || (e = n);
        }
        if (null == e) {
            let t,
                n,
                a = u.default.getId(),
                s = Date.now(),
                l = [],
                o = [];
            for (let e of A.A.getVideoParticipants(i)) {
                if (e.user.id === a || _.Ay.isLocalVideoDisabled(e.user.id) || A.A.isParticipantPoppedOut(i, e.id))
                    continue;
                l.push(e.user.id);
                let t = E.A.getSpeakingDuration(e.user.id, s);
                0 !== t && o.push({ userId: e.user.id, duration: t });
            }
            for (let { userId: e, duration: i } of o) (null == n || i < n) && ((t = e), (n = i));
            null == (e = t) && (e = null != r && l.includes(r) ? r : l[0]);
        }
    }
    r !== e && ((r = e), t && m.emitChange());
}
let f = s().throttle(I, 300, { trailing: !0 });
function p() {
    return f(), !1;
}
class T extends l.Ay.Store {
    static displayName = "VideoSpeakerStore";
    initialize() {
        this.waitFor(A.A, u.default, E.A, c.A, _.Ay), this.syncWith([A.A, c.A], p);
    }
    getSpeaker(e) {
        return i !== e && ((i = e), (r = null), I(!1)), r ?? u.default.getId();
    }
}
let m = new T(o.h, { AUDIO_SET_LOCAL_VIDEO_DISABLED: p }),
    g = m;
