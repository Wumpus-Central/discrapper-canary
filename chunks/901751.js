n.d(t, { ZP: () => M }), n(47120);
var r = n(754700),
    i = n(147913),
    o = n(317381),
    a = n(594190),
    s = n(569545),
    l = n(199902),
    c = n(314897),
    u = n(77498),
    d = n(938475),
    f = n(70956),
    p = n(272008),
    _ = n(569984),
    h = n(918701),
    m = n(5881),
    g = n(566078),
    E = n(46140),
    v = n(70722);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let y = +f.Z.Millis.MINUTE,
    O = 2,
    S = +f.Z.Millis.SECOND,
    I = (0, m.T)({ location: E.dr.QUESTS_MANAGER }),
    T = (e) =>
        (0, s.V9)({
            streamType: v.lo.CALL,
            channelId: e,
            ownerId: '1'
        });
function N() {
    let e = l.Z.getStreamerActiveStreamMetadata();
    if ((null == e ? void 0 : e.id) == null) return null;
    let t = u.Z.getDetectableGame(e.id);
    if ((null == t ? void 0 : t.id) == null) return null;
    let n = (0, h.lQ)(_.Z.quests, t.id);
    return null != n && C(n) ? n : null;
}
function A(e) {
    return d.ZP.countVoiceStatesForChannel(e) >= O;
}
function C(e) {
    return !(0, h.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function R(e) {
    var t;
    let { questId: n, streamKey: r, applicationId: i } = e,
        { channelId: o } = (0, s.my)(r),
        c = A(o),
        u = _.Z.quests.get(n);
    if (null == u || !C(u)) return 'STOP';
    let d = null === (t = N()) || void 0 === t ? void 0 : t.config,
        f = null != l.Z.getRTCStream(r) && null != d && g.r.build(d).application.id === i && c,
        p = null != w(u),
        m = a.ZP.getRunningGames().map((e) => e.id),
        E = (0, h.$H)(u) && m.includes(i);
    return f || p || E ? 'BEAT' : 'BEAT_TERMINAL';
}
function P(e) {
    let t = _.Z.quests.get(e);
    return null == t
        ? {
              quest: null,
              activity: null
          }
        : {
              quest: t,
              activity: w(t)
          };
}
function w(e) {
    let t = g.r.build(e.config);
    if (!(0, h.pO)(e)) return null;
    let n = o.ZP.getSelfEmbeddedActivities();
    if (0 === n.size) return null;
    if ((0, h.KM)(e)) {
        var r;
        return null !== (r = n.values().next().value) && void 0 !== r ? r : null;
    }
    for (let e of n.values()) if (e.applicationId === t.application.id) return e;
    return null;
}
function D(e, t) {
    let n = (0, h.lQ)(e, t);
    if (null != n && (0, h.pO)(n)) return n;
    for (let [t, n] of e) if (!(0, h.zi)(n) && (0, h.KM)(n)) return n;
}
function x(e) {
    let t = D(_.Z.quests, e);
    if (null == t)
        return {
            quest: null,
            activity: null
        };
    let n = o.ZP.getSelfEmbeddedActivities().get(e);
    return {
        quest: t,
        activity: null != n ? n : null
    };
}
class L extends i.Z {
    constructor(...e) {
        super(...e),
            b(this, 'streamKeyToHeartbeatState', new Map()),
            b(this, 'initiateHeartbeat', (e) => {
                let { questId: t, streamKey: n, applicationId: r } = e;
                if (this.streamKeyToHeartbeatState.has(n)) {
                    I.log('~ initiateHeartbeat -> Heartbeat already initiated:', n);
                    return;
                }
                let i = () => {
                    let e = R({
                        questId: t,
                        streamKey: n,
                        applicationId: r
                    });
                    if ((I.log('~ initiateHeartbeat -> streamkey '.concat(n, '. heartbeat decision: '), e), 'BEAT' === e)) {
                        (0, p.m0)({
                            questId: t,
                            streamKey: n
                        });
                        let e = this.calculateHeartbeatDurationMs(t),
                            r = window.setTimeout(i, e);
                        this.streamKeyToHeartbeatState.set(n, {
                            heartbeatTimeoutId: r,
                            questId: t
                        });
                    } else
                        this.terminateHeartbeat({
                            streamKey: n,
                            sendTerminalHeartbeat: 'BEAT_TERMINAL' === e
                        });
                };
                i();
            }),
            b(this, 'calculateHeartbeatDurationMs', (e) => {
                let t = _.Z.quests.get(e);
                if (null == t || null == t.config || null == t.userStatus) return y;
                let { progressSeconds: n, targetSeconds: i } = (0, h.il)(t, r.T.DESKTOP),
                    o = Math.max(0, (i - n) * f.Z.Millis.SECOND);
                return o <= y ? o + S : y;
            }),
            b(this, 'terminateHeartbeat', (e) => {
                let { streamKey: t, sendTerminalHeartbeat: n } = e,
                    r = this.streamKeyToHeartbeatState.get(t);
                if (null != r) {
                    I.log('~ terminateHeartbeat -> Terminating heartbeat:', {
                        streamKey: t,
                        sendTerminalHeartbeat: n
                    });
                    let { questId: e, heartbeatTimeoutId: i } = r;
                    window.clearTimeout(i),
                        this.streamKeyToHeartbeatState.delete(t),
                        n &&
                            (0, p.m0)({
                                questId: e,
                                streamKey: t,
                                terminal: !0
                            });
                }
            }),
            b(this, 'terminateHeartbeatForQuestId', (e) => {
                let { previewQuestUserStatus: t } = e,
                    { questId: n, enrolledAt: r, completedAt: i } = t;
                (null === r || null === i) &&
                    this.streamKeyToHeartbeatState.forEach((e, t) => {
                        e.questId === n &&
                            (I.log('terminateHeartbeatForQuestId - terminating heartbeat for quest ID '.concat(n)),
                            this.terminateHeartbeat({
                                streamKey: t,
                                sendTerminalHeartbeat: !0
                            }));
                    });
            }),
            b(this, 'handleEnrollmentSuccess', (e) => {
                let {
                        enrolledQuestUserStatus: { questId: t }
                    } = e,
                    n = l.Z.getCurrentUserActiveStream(),
                    r = N();
                if (null != n && null != r && r.id === t && C(r)) {
                    I.log('handleEnrollmentSuccess - initiating heartbeat for stream'),
                        this.initiateHeartbeat({
                            streamKey: (0, s.V9)(n),
                            applicationId: g.r.build(r.config).application.id,
                            questId: r.id
                        });
                    return;
                }
                let { quest: i, activity: o } = P(t);
                if (null != o && null != i && C(i)) {
                    I.log('handleEnrollmentSuccess - initiating heartbeat for activity'),
                        this.initiateHeartbeat({
                            streamKey: T(i.id),
                            applicationId: o.applicationId,
                            questId: i.id
                        });
                    return;
                }
                a.ZP.getRunningGames().forEach((e) => {
                    if (null != e.id) {
                        for (let t of (0, h.dh)(_.Z.quests, e.id))
                            if (null != t && C(t) && (0, h.$H)(t)) {
                                I.log('handleEnrollmentSuccess - initiating heartbeat for playtime task');
                                let e = T(t.id);
                                this.initiateHeartbeat({
                                    streamKey: e,
                                    applicationId: g.r.build(t.config).application.id,
                                    questId: t.id
                                });
                            }
                    }
                });
            }),
            b(this, 'handleSendHeartbeatSuccess', (e) => {
                let { streamKey: t, userStatus: n } = e;
                I.log('~ handleSendHeartbeatSuccess -> Heartbeat succeeded:', t),
                    null != n.completedAt &&
                        this.terminateHeartbeat({
                            streamKey: t,
                            sendTerminalHeartbeat: !1
                        });
            }),
            b(this, 'handleSendHeartbeatFailure', (e) => {
                let { streamKey: t } = e;
                I.log('~ handleSendHeartbeatFailure -> Heartbeat failed:', t);
            }),
            b(this, 'handleQuestsFetchCurrentQuestsSuccess', (e) => {
                let { quests: t } = e;
                I.log('~ handleQuestsFetchCurrentQuestsSuccess -> Quests fetched:', t);
                let n = a.ZP.getRunningGames().map((e) => e.id);
                t.forEach((e) => {
                    if (C(e) && (0, h.$H)(e)) {
                        let t = T(e.id),
                            r = n.includes(g.r.build(e.config).application.id),
                            i = !this.streamKeyToHeartbeatState.has(t) && r;
                        this.streamKeyToHeartbeatState.has(t) && !r
                            ? this.terminateHeartbeat({
                                  streamKey: t,
                                  sendTerminalHeartbeat: !0
                              })
                            : i &&
                              (I.log('handleQuestsFetchCurrentQuestsSuccess - initiating heartbeat for playtime task'),
                              this.initiateHeartbeat({
                                  streamKey: t,
                                  applicationId: g.r.build(e.config).application.id,
                                  questId: e.id
                              }));
                    }
                });
            }),
            b(this, 'handleRunningGamesChange', (e) => {
                let { removed: t, games: n } = e;
                I.log('~ handleRunningGamesChange -> Games detected:', {
                    runningGames: n,
                    removedGames: t
                }),
                    n.forEach((e) => {
                        if (null != e.id)
                            for (let t of (0, h.dh)(_.Z.quests, e.id)) {
                                if (!C(t)) continue;
                                let e = T(t.id);
                                (0, h.$H)(t) &&
                                    !this.streamKeyToHeartbeatState.has(e) &&
                                    (I.log('handleRunningGamesChange - initiating heartbeat for playtime task'),
                                    this.initiateHeartbeat({
                                        streamKey: e,
                                        applicationId: g.r.build(t.config).application.id,
                                        questId: t.id
                                    }));
                            }
                    }),
                    t.forEach((e) => {
                        if (null != e.id)
                            for (let t of (0, h.dh)(_.Z.quests, e.id)) {
                                if (!C(t)) continue;
                                let e = T(t.id);
                                (0, h.$H)(t) &&
                                    this.streamKeyToHeartbeatState.has(e) &&
                                    this.terminateHeartbeat({
                                        streamKey: e,
                                        sendTerminalHeartbeat: !0
                                    });
                            }
                    });
            }),
            b(this, 'handleVoiceStateChange', () => {
                let e = l.Z.getCurrentUserActiveStream(),
                    t = N();
                null != e &&
                    this._handleVoiceStateChange({
                        streamKey: (0, s.V9)(e),
                        channelId: e.channelId,
                        quest: t
                    });
            }),
            b(this, '_handleVoiceStateChange', (e) => {
                let { streamKey: t, channelId: n, quest: r } = e,
                    i = null == r || !A(n),
                    o = A(n) && !this.streamKeyToHeartbeatState.has(t) && null != r && C(r) && !(0, h.$H)(r);
                i
                    ? (I.log('handleVoiceStateChange - calling terminateHeartbeat for streamKey '.concat(t)),
                      this.terminateHeartbeat({
                          streamKey: t,
                          sendTerminalHeartbeat: !0
                      }))
                    : o &&
                      (I.log('handleVoiceStateChange - initiating heartbeat for stream task'),
                      this.initiateHeartbeat({
                          streamKey: t,
                          applicationId: g.r.build(r.config).application.id,
                          questId: r.id
                      }));
            }),
            b(this, 'handleEmbeddedActivityUpdate', (e) => {
                let { quest: t, activity: n } = x(e);
                if (null == t || !(0, h.pO)(t)) return;
                let r = T(t.id),
                    i = null == n && this.streamKeyToHeartbeatState.has(r),
                    o = null != n && C(t) && !this.streamKeyToHeartbeatState.has(r);
                i
                    ? (I.log('handleEmbeddedActivityUpdate - terminating heartbeat'),
                      this.terminateHeartbeat({
                          streamKey: r,
                          sendTerminalHeartbeat: !0
                      }))
                    : o &&
                      (I.log('handleEmbeddedActivityUpdate - initiating heartbeat for activity task'),
                      this.initiateHeartbeat({
                          streamKey: r,
                          applicationId: e,
                          questId: t.id
                      }));
            }),
            b(this, 'handleStreamCreate', (e) => {
                let { streamKey: t } = e,
                    { channelId: n, ownerId: r } = (0, s.my)(t);
                if (r !== c.default.getId()) return;
                let i = N();
                if (null == i) {
                    I.log('handleStreamCreate - calling terminateHeartbeat for streamKey '.concat(t)),
                        this.terminateHeartbeat({
                            streamKey: t,
                            sendTerminalHeartbeat: !1
                        });
                    return;
                }
                A(n) &&
                    C(i) &&
                    !(0, h.$H)(i) &&
                    !this.streamKeyToHeartbeatState.has(t) &&
                    (I.log('handleStreamCreate - initiating heartbeat for stream task'),
                    this.initiateHeartbeat({
                        streamKey: t,
                        applicationId: g.r.build(i.config).application.id,
                        questId: i.id
                    }));
            }),
            b(this, 'handleStreamStart', (e) => {
                let { streamType: t, guildId: n, channelId: r } = e,
                    i = N(),
                    o = (0, s.V9)({
                        streamType: t,
                        guildId: n,
                        channelId: r,
                        ownerId: c.default.getId()
                    });
                null == i
                    ? (I.log('handleStreamStart - calling terminateHeartbeat for streamKey '.concat(o)),
                      this.terminateHeartbeat({
                          streamKey: o,
                          sendTerminalHeartbeat: !0
                      }))
                    : A(r) &&
                      C(i) &&
                      !(0, h.$H)(i) &&
                      !this.streamKeyToHeartbeatState.has(o) &&
                      (I.log('handleStreamStart - initiating heartbeat for stream task'),
                      this.initiateHeartbeat({
                          streamKey: o,
                          applicationId: g.r.build(i.config).application.id,
                          questId: i.id
                      }));
            }),
            b(this, 'handleStreamClose', (e) => {
                let { streamKey: t } = e;
                I.log('handleStreamClose - terminating heartbeat'),
                    this.terminateHeartbeat({
                        streamKey: t,
                        sendTerminalHeartbeat: !0
                    });
            }),
            b(this, 'actions', {
                QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: this.handleQuestsFetchCurrentQuestsSuccess,
                QUESTS_ENROLL_SUCCESS: this.handleEnrollmentSuccess,
                QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
                QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
                QUESTS_PREVIEW_UPDATE_SUCCESS: this.terminateHeartbeatForQuestId,
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                STREAM_START: this.handleStreamStart,
                STREAM_CREATE: this.handleStreamCreate,
                STREAM_CLOSE: this.handleStreamClose,
                PASSIVE_UPDATE_V2: this.handleVoiceStateChange,
                VOICE_STATE_UPDATES: this.handleVoiceStateChange,
                EMBEDDED_ACTIVITY_UPDATE_V2: (e) => {
                    let { applicationId: t } = e;
                    return this.handleEmbeddedActivityUpdate(t);
                }
            });
    }
}
let M = new L();
