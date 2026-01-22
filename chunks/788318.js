let r, i;
n.d(t, { A: () => v }), n(896048);
var a,
    s = n(735438),
    o = n.n(s),
    l = n(311907),
    c = n(73153),
    u = n(313961),
    d = n(652896),
    f = n(616356),
    p = n(961350),
    _ = n(430452),
    h = n(485296),
    m = n(806931);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E() {
    let e,
        t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (null == r) e = null;
    else {
        var n, a, s, l, c;
        null != (e = u.A.getSelectedParticipantId(r)) && u.A.isParticipantPoppedOut(r, e) && (e = null);
        let t = f.A.getLastActiveStream(),
            g = null != e ? u.A.getParticipant(r, e) : null;
        if (
            (((null == g ? void 0 : g.type) !== m.lp.ACTIVITY &&
                ((null == g ? void 0 : g.type) !== m.lp.USER || (null == (n = g.voiceState) ? void 0 : n.selfVideo))) ||
                (e = null),
            null != t && null == e)
        ) {
            let n = null == (a = u.A.getParticipant(r, (0, d._z)(t))) ? void 0 : a.id;
            null == n || u.A.isParticipantPoppedOut(r, n) || (e = n);
        }
        if (null == e) {
            let t = p.default.getId(),
                n = o()(u.A.getVideoParticipants(r)).filter(
                    (e) =>
                        e.type === m.lp.USER &&
                        e.user.id !== t &&
                        !_.A.isLocalVideoDisabled(e.user.id) &&
                        !u.A.isParticipantPoppedOut(r, e.id),
                ),
                a = n.map((e) => e.user.id),
                d = Date.now();
            null ==
                (e =
                    null ==
                    (s = n
                        .map((e) => [e.user.id, h.A.getSpeakingDuration(e.user.id, d)])
                        .filter((e) => {
                            let [t, n] = e;
                            return 0 !== n;
                        })
                        .maxBy((e) => {
                            let [t, n] = e;
                            return -n;
                        }))
                        ? void 0
                        : s[0]) &&
                (e = null != i && a.has(i) ? i : null == (c = n.first()) || null == (l = c.user) ? void 0 : l.id);
        }
    }
    i !== e && ((i = e), t && A.emitChange());
}
let b = o().debounce(E, 300);
function y() {
    return b(), !1;
}
class O extends (a = l.Ay.Store) {
    initialize() {
        this.waitFor(u.A, p.default, h.A, f.A, _.A), this.syncWith([u.A, f.A], y);
    }
    getSpeaker(e) {
        return r !== e && ((r = e), E(!1)), null != i ? i : p.default.getId();
    }
}
g(O, "displayName", "VideoSpeakerStore");
let A = new O(c.h, { AUDIO_SET_LOCAL_VIDEO_DISABLED: y }),
    v = A;
