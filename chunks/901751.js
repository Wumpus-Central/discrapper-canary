var i,
    a = r(47120);
var o = r(754700),
    s = r(147913),
    l = r(317381),
    u = r(16609),
    c = r(594190),
    d = r(569545),
    f = r(199902),
    p = r(314897),
    h = r(77498),
    _ = r(938475),
    m = r(70956),
    g = r(272008),
    E = r(569984),
    v = r(918701),
    y = r(432945),
    b = r(5881),
    I = r(566078),
    T = r(46140),
    S = r(70722);
function A(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let C = 1 * m.Z.Millis.MINUTE,
    N = 2,
    R = 1 * m.Z.Millis.SECOND,
    O = (0, b.T)({ location: T.dr.QUESTS_MANAGER }),
    D = (e) =>
        (0, d.V9)({
            streamType: S.lo.CALL,
            channelId: e,
            ownerId: '1'
        });
function x() {
    let e = f.Z.getStreamerActiveStreamMetadata();
    if ((null == e ? void 0 : e.id) == null) return null;
    let n = h.Z.getDetectableGame(e.id);
    if ((null == n ? void 0 : n.id) == null) return null;
    let r = (0, v.lQ)(E.Z.quests, n.id);
    return null != r && w(r) ? r : null;
}
function L(e) {
    return _.ZP.countVoiceStatesForChannel(e) >= N;
}
function w(e) {
    return !(0, v.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function P(e) {
    var n;
    let { questId: r, streamKey: i, applicationId: a } = e,
        { channelId: o } = (0, d.my)(i),
        s = L(o),
        l = E.Z.quests.get(r);
    if (null == l || !w(l)) return 'STOP';
    let p = null === (n = x()) || void 0 === n ? void 0 : n.config,
        h = null != f.Z.getRTCStream(i) && null != p && I.r.build(p).application.id === a && s,
        { quest: _, activity: m } = M(),
        g = (0, u.p)(null == m ? void 0 : m.location),
        y = null != (null == _ ? void 0 : _.config) && (null == _ ? void 0 : _.id) === r && (0, v.UZ)(a, _) && g === o,
        b = c.ZP.getRunningGames().map((e) => e.id),
        T = (0, v.$H)(l) && b.includes(a);
    return h || y || T ? 'BEAT' : 'BEAT_TERMINAL';
}
function M(e) {
    let n = {
        quest: null,
        activity: null
    };
    if (
        !(0, y.S)({
            location: T.dr.QUESTS_MANAGER,
            autoTrackExposure: !1
        })
    )
        return n;
    for (let i of l.ZP.getSelfEmbeddedActivities().values()) {
        var r;
        if (null != e && i.location.id !== e.id) continue;
        let a = null !== (r = (0, v.tF)(E.Z.quests, i)) && void 0 !== r ? r : null;
        if (null != a && w(a))
            return {
                quest: a,
                activity: i
            };
        n = {
            quest: null,
            activity: i
        };
    }
    return n;
}
!(function (e) {
    (e.BEAT = 'BEAT'), (e.STOP = 'STOP'), (e.BEAT_TERMINAL = 'BEAT_TERMINAL');
})(i || (i = {}));
class k extends s.Z {
    constructor(...e) {
        super(...e),
            A(this, 'streamKeyToHeartbeatState', new Map()),
            A(this, 'initiateHeartbeat', (e) => {
                let { questId: n, streamKey: r, applicationId: i } = e;
                if (this.streamKeyToHeartbeatState.has(r)) {
                    O.log('~ initiateHeartbeat -> Heartbeat already initiated:', r);
                    return;
                }
                let a = () => {
                    let e = P({
                        questId: n,
                        streamKey: r,
                        applicationId: i
                    });
                    if ((O.log('~ initiateHeartbeat -> streamkey '.concat(r, '. heartbeat decision: '), e), 'BEAT' === e)) {
                        (0, g.m0)({
                            questId: n,
                            streamKey: r
                        });
                        let e = this.calculateHeartbeatDurationMs(n),
                            i = window.setTimeout(a, e);
                        this.streamKeyToHeartbeatState.set(r, {
                            heartbeatTimeoutId: i,
                            questId: n
                        });
                    } else
                        this.terminateHeartbeat({
                            streamKey: r,
                            sendTerminalHeartbeat: 'BEAT_TERMINAL' === e
                        });
                };
                a();
            }),
            A(this, 'calculateHeartbeatDurationMs', (e) => {
                let n = E.Z.quests.get(e);
                if (null == n || null == n.config || null == n.userStatus) return C;
                let { progressSeconds: r, targetSeconds: i } = (0, v.il)(n, o.T.DESKTOP),
                    a = Math.max(0, (i - r) * m.Z.Millis.SECOND);
                return a <= C ? a + R : C;
            }),
            A(this, 'terminateHeartbeat', (e) => {
                let { streamKey: n, sendTerminalHeartbeat: r } = e,
                    i = this.streamKeyToHeartbeatState.get(n);
                if (null != i) {
                    O.log('~ terminateHeartbeat -> Terminating heartbeat:', {
                        streamKey: n,
                        sendTerminalHeartbeat: r
                    });
                    let { questId: e, heartbeatTimeoutId: a } = i;
                    window.clearTimeout(a),
                        this.streamKeyToHeartbeatState.delete(n),
                        r &&
                            (0, g.m0)({
                                questId: e,
                                streamKey: n,
                                terminal: !0
                            });
                }
            }),
            A(this, 'terminateHeartbeatForQuestId', (e) => {
                let { previewQuestUserStatus: n } = e,
                    { questId: r, enrolledAt: i, completedAt: a } = n;
                (null === i || null === a) &&
                    this.streamKeyToHeartbeatState.forEach((e, n) => {
                        e.questId === r &&
                            (O.log('terminateHeartbeatForQuestId - terminating heartbeat for quest ID '.concat(r)),
                            this.terminateHeartbeat({
                                streamKey: n,
                                sendTerminalHeartbeat: !0
                            }));
                    });
            }),
            A(this, 'handleEnrollmentSuccess', (e) => {
                let {
                        enrolledQuestUserStatus: { questId: n }
                    } = e,
                    r = f.Z.getCurrentUserActiveStream(),
                    i = x();
                if (null != r && null != i && i.id === n && w(i)) {
                    O.log('handleEnrollmentSuccess - initiating heartbeat for stream'),
                        this.initiateHeartbeat({
                            streamKey: (0, d.V9)(r),
                            applicationId: I.r.build(i.config).application.id,
                            questId: i.id
                        });
                    return;
                }
                let { quest: a, activity: o } = M(),
                    s = (0, u.p)(null == o ? void 0 : o.location);
                if (null != o && null != s && null != a && w(a) && a.id === n) {
                    O.log('handleEnrollmentSuccess - initiating heartbeat for activity'),
                        this.initiateHeartbeat({
                            streamKey: D(s),
                            applicationId: I.r.build(a.config).application.id,
                            questId: a.id
                        });
                    return;
                }
                c.ZP.getRunningGames().forEach((e) => {
                    if (null != e.id) {
                        for (let n of (0, v.dh)(E.Z.quests, e.id))
                            if (null != n && w(n) && (0, v.$H)(n)) {
                                O.log('handleEnrollmentSuccess - initiating heartbeat for playtime task');
                                let e = D(n.id);
                                this.initiateHeartbeat({
                                    streamKey: e,
                                    applicationId: I.r.build(n.config).application.id,
                                    questId: n.id
                                });
                            }
                    }
                });
            }),
            A(this, 'handleSendHeartbeatSuccess', (e) => {
                let { streamKey: n, userStatus: r } = e;
                O.log('~ handleSendHeartbeatSuccess -> Heartbeat succeeded:', n),
                    null != r.completedAt &&
                        this.terminateHeartbeat({
                            streamKey: n,
                            sendTerminalHeartbeat: !1
                        });
            }),
            A(this, 'handleSendHeartbeatFailure', (e) => {
                let { streamKey: n } = e;
                O.log('~ handleSendHeartbeatFailure -> Heartbeat failed:', n);
            }),
            A(this, 'handleQuestsFetchCurrentQuestsSuccess', (e) => {
                let { quests: n } = e;
                O.log('~ handleQuestsFetchCurrentQuestsSuccess -> Quests fetched:', n);
                let r = c.ZP.getRunningGames().map((e) => e.id);
                n.forEach((e) => {
                    if (w(e) && (0, v.$H)(e)) {
                        let n = D(e.id),
                            i = r.includes(I.r.build(e.config).application.id),
                            a = !this.streamKeyToHeartbeatState.has(n) && i;
                        this.streamKeyToHeartbeatState.has(n) && !i
                            ? this.terminateHeartbeat({
                                  streamKey: n,
                                  sendTerminalHeartbeat: !0
                              })
                            : a &&
                              (O.log('handleQuestsFetchCurrentQuestsSuccess - initiating heartbeat for playtime task'),
                              this.initiateHeartbeat({
                                  streamKey: n,
                                  applicationId: I.r.build(e.config).application.id,
                                  questId: e.id
                              }));
                    }
                });
            }),
            A(this, 'handleRunningGamesChange', (e) => {
                let { removed: n, games: r } = e;
                O.log('~ handleRunningGamesChange -> Games detected:', {
                    runningGames: r,
                    removedGames: n
                }),
                    r.forEach((e) => {
                        if (null != e.id)
                            for (let n of (0, v.dh)(E.Z.quests, e.id)) {
                                if (!w(n)) continue;
                                let e = D(n.id);
                                (0, v.$H)(n) &&
                                    !this.streamKeyToHeartbeatState.has(e) &&
                                    (O.log('handleRunningGamesChange - initiating heartbeat for playtime task'),
                                    this.initiateHeartbeat({
                                        streamKey: e,
                                        applicationId: I.r.build(n.config).application.id,
                                        questId: n.id
                                    }));
                            }
                    }),
                    n.forEach((e) => {
                        if (null != e.id)
                            for (let n of (0, v.dh)(E.Z.quests, e.id)) {
                                if (!w(n)) continue;
                                let e = D(n.id);
                                (0, v.$H)(n) &&
                                    this.streamKeyToHeartbeatState.has(e) &&
                                    this.terminateHeartbeat({
                                        streamKey: e,
                                        sendTerminalHeartbeat: !0
                                    });
                            }
                    });
            }),
            A(this, 'handleVoiceStateChange', () => {
                let e = f.Z.getCurrentUserActiveStream(),
                    n = x();
                null != e &&
                    this._handleVoiceStateChange({
                        streamKey: (0, d.V9)(e),
                        channelId: e.channelId,
                        quest: n
                    });
            }),
            A(this, '_handleVoiceStateChange', (e) => {
                let { streamKey: n, channelId: r, quest: i } = e,
                    a = null == i || !L(r),
                    o = L(r) && !this.streamKeyToHeartbeatState.has(n) && null != i && w(i) && !(0, v.$H)(i);
                a
                    ? (O.log('handleVoiceStateChange - calling terminateHeartbeat for streamKey '.concat(n)),
                      this.terminateHeartbeat({
                          streamKey: n,
                          sendTerminalHeartbeat: !0
                      }))
                    : o &&
                      (O.log('handleVoiceStateChange - initiating heartbeat for stream task'),
                      this.initiateHeartbeat({
                          streamKey: n,
                          applicationId: I.r.build(i.config).application.id,
                          questId: i.id
                      }));
            }),
            A(this, 'handleEmbeddedActivityUpdate', (e) => {
                let { quest: n, activity: r } = M(e),
                    i = (0, u.p)(e);
                if (null == i) return;
                let a = D(i),
                    o = (null == r || null == n) && this.streamKeyToHeartbeatState.has(a),
                    s = null != r && null != n && w(n) && !this.streamKeyToHeartbeatState.has(a);
                o
                    ? (O.log('handleEmbeddedActivityUpdate - terminating heartbeat'),
                      this.terminateHeartbeat({
                          streamKey: a,
                          sendTerminalHeartbeat: !0
                      }))
                    : s &&
                      (O.log('handleEmbeddedActivityUpdate - initiating heartbeat for activity task'),
                      this.initiateHeartbeat({
                          streamKey: a,
                          applicationId: I.r.build(n.config).application.id,
                          questId: n.id
                      }));
            }),
            A(this, 'handleStreamCreate', (e) => {
                let { streamKey: n } = e,
                    { channelId: r, ownerId: i } = (0, d.my)(n);
                if (i !== p.default.getId()) return;
                let a = x();
                if (null == a) {
                    O.log('handleStreamCreate - calling terminateHeartbeat for streamKey '.concat(n)),
                        this.terminateHeartbeat({
                            streamKey: n,
                            sendTerminalHeartbeat: !1
                        });
                    return;
                }
                L(r) &&
                    w(a) &&
                    !(0, v.$H)(a) &&
                    !this.streamKeyToHeartbeatState.has(n) &&
                    (O.log('handleStreamCreate - initiating heartbeat for stream task'),
                    this.initiateHeartbeat({
                        streamKey: n,
                        applicationId: I.r.build(a.config).application.id,
                        questId: a.id
                    }));
            }),
            A(this, 'handleStreamStart', (e) => {
                let { streamType: n, guildId: r, channelId: i } = e,
                    a = x(),
                    o = (0, d.V9)({
                        streamType: n,
                        guildId: r,
                        channelId: i,
                        ownerId: p.default.getId()
                    });
                null == a
                    ? (O.log('handleStreamStart - calling terminateHeartbeat for streamKey '.concat(o)),
                      this.terminateHeartbeat({
                          streamKey: o,
                          sendTerminalHeartbeat: !0
                      }))
                    : L(i) &&
                      w(a) &&
                      !(0, v.$H)(a) &&
                      !this.streamKeyToHeartbeatState.has(o) &&
                      (O.log('handleStreamStart - initiating heartbeat for stream task'),
                      this.initiateHeartbeat({
                          streamKey: o,
                          applicationId: I.r.build(a.config).application.id,
                          questId: a.id
                      }));
            }),
            A(this, 'handleStreamClose', (e) => {
                let { streamKey: n } = e;
                O.log('handleStreamClose - terminating heartbeat'),
                    this.terminateHeartbeat({
                        streamKey: n,
                        sendTerminalHeartbeat: !0
                    });
            }),
            A(this, 'actions', {
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
                    let { location: n } = e;
                    return this.handleEmbeddedActivityUpdate(n);
                }
            });
    }
}
n.ZP = new k();
