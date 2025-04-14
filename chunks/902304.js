n.d(t, { Z: () => D }), n(388685);
var r = n(512722),
    i = n.n(r),
    o = n(846519),
    a = n(668781),
    s = n(846027),
    l = n(147913),
    c = n(710845),
    u = n(314897),
    d = n(131951),
    f = n(19780),
    _ = n(797258),
    p = n(979651),
    h = n(823379),
    m = n(254238),
    g = n(607214),
    E = n(258609),
    b = n(565473),
    y = n(444092),
    v = n(927923),
    O = n(65154),
    I = n(388032);
function S(e, t, n) {
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
let T = new c.Z('GameConsoleManager'),
    N = 3000,
    A = 60000,
    C = 180000;
async function R(e) {
    let t = f.Z.getChannelId();
    i()(null == t, 'Syncing to remote while in voice!'), e.selfMute !== d.Z.isSelfMute() && (await s.Z.toggleSelfMute({ syncRemote: !1 })), e.selfDeaf !== d.Z.isSelfDeaf() && s.Z.toggleSelfDeaf({ syncRemote: !1 });
}
function P(e) {
    let t = E.Z.getAwaitingRemoteSessionInfo();
    return e.find((e) => {
        let n = v.al.has(e.clientInfo.os),
            r = null != p.Z.getVoiceStateForSession(u.default.getId(), e.sessionId),
            i = null == t || (0, b.y)(t.type) === e.clientInfo.os;
        return n && i && r;
    });
}
class w extends l.Z {
    constructor(...e) {
        super(...e),
            S(this, 'rollbackCommandTimeout', new o.V7()),
            S(this, 'awaitRemoteTimeout', new o.V7()),
            S(this, 'actions', {
                WAIT_FOR_REMOTE_SESSION: () => this.handleWaitForRemoteSession(),
                POST_CONNECTION_OPEN: () => this.handleSessionsChanged(),
                SESSIONS_REPLACE: () => this.handleSessionsChanged(),
                AUDIO_TOGGLE_SELF_DEAF: (e) => this.handleAudioStateToggle(e),
                AUDIO_TOGGLE_SELF_MUTE: (e) => this.handleAudioStateToggle(e),
                VOICE_STATE_UPDATES: (e) => this.handleVoiceStateUpdates(e),
                CONSOLE_COMMAND_UPDATE: (e) => this.handleConsoleCommandUpdate(e),
                PASSIVE_UPDATE_V2: (e) => this.handleVoiceStateUpdates(e),
                REMOTE_SESSION_DISCONNECT: () => this.handleRemoteSessionDisconnect()
            }),
            S(this, 'maybeConnect', (e) => {
                let t = P(e);
                if (null == t) return null;
                this.awaitRemoteTimeout.stop(), (0, m.ef)(t.sessionId);
                let n = p.Z.getVoiceStateForSession(u.default.getId(), t.sessionId);
                null != n && R(n);
            }),
            S(this, 'handleAudioStateToggle', (e) => {
                let { syncRemote: t, context: n } = e;
                if (!t || n !== O.Yn.DEFAULT) return;
                let r = d.Z.isSelfDeaf(),
                    i = d.Z.isSelfMute(),
                    o = u.default.getId(),
                    a = E.Z.getRemoteSessionId();
                if (null == a) return;
                let s = p.Z.getVoiceStateForSession(o, a);
                null != s &&
                    (s.selfDeaf !== r || s.selfMute !== i) &&
                    ((0, m.Vv)(a, {
                        selfDeaf: r,
                        selfMute: i
                    }),
                    this.rollbackCommandTimeout.start(N, () => {
                        R(s);
                    }));
            }),
            S(this, 'handleVoiceStateUpdates', (e) => {
                let t = e.voiceStates,
                    n = E.Z.getRemoteSessionId();
                if (null == n) {
                    let e = t
                        .map((e) => {
                            let { sessionId: t } = e;
                            return null != t ? _.Z.getSessionById(t) : null;
                        })
                        .filter(h.lm);
                    return this.maybeConnect(e);
                }
                let r = t.find((e) => {
                    let { sessionId: t } = e;
                    return t === n;
                });
                null != r && (this.rollbackCommandTimeout.stop(), R(r));
            }),
            S(this, 'handleSessionsChanged', () => {
                let e = E.Z.getRemoteSessionId();
                null != e && null == _.Z.getSessionById(e) && (0, m.s6)(), null == e && this.maybeConnect(Object.values(_.Z.getSessions()));
            }),
            S(this, 'handleWaitForRemoteSession', () => {
                this.awaitRemoteTimeout.start(A, () => {
                    (0, m.s6)(),
                        a.Z.show({
                            title: I.NW.string(I.t.wGMxr6),
                            body: I.NW.string(I.t.i5k8b2)
                        });
                });
            }),
            S(this, 'handleConsoleCommandUpdate', (e) => {
                var t;
                let { id: n, result: r, error: i } = e;
                if (('failed' !== r && 'n/a' !== r) || null == i) return;
                T.info('Console command Error result:', r, i);
                let o = E.Z.getAwaitingRemoteSessionInfo();
                if ((null == o ? void 0 : o.commandId) !== n) return;
                let a = E.Z.getDevice(o.type, null != (t = o.deviceId) ? t : ''),
                    s = (0, y.Z)(
                        null != a
                            ? a
                            : {
                                  id: 'id',
                                  platform: I.NW.string(I.t['UQMV/P']),
                                  name: I.NW.string(I.t['UQMV/P'])
                              },
                        r,
                        i
                    );
                null != s &&
                    g.Z.showSelfDismissableAlert({
                        title: s.title,
                        body: s.body,
                        errorCodeMessage: s.errorCodeMessage,
                        reconnectPlatformType: s.isAccountLinkError ? o.type : void 0
                    }),
                    v.e8.has(i.code) && this.awaitRemoteTimeout.isStarted() ? this.awaitRemoteTimeout.start(C, () => (0, m.s6)(), !0) : 'failed' === r && (0, m.s6)();
            }),
            S(this, 'handleRemoteSessionDisconnect', () => {
                this.awaitRemoteTimeout.stop();
            });
    }
}
let D = new w();
