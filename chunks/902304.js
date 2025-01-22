var i = r(47120);
var a = r(512722),
    o = r.n(a),
    s = r(846519),
    l = r(668781),
    u = r(846027),
    c = r(147913),
    d = r(710845),
    f = r(314897),
    p = r(131951),
    h = r(19780),
    _ = r(797258),
    m = r(979651),
    g = r(823379),
    E = r(254238),
    v = r(607214),
    y = r(258609),
    b = r(565473),
    I = r(444092),
    T = r(927923),
    S = r(65154),
    A = r(388032);
function C(e, n, r) {
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
let N = new d.Z('GameConsoleManager'),
    R = 3000,
    O = 60000,
    D = 180000;
async function x(e) {
    let n = h.Z.getChannelId();
    o()(null == n, 'Syncing to remote while in voice!'), e.selfMute !== p.Z.isSelfMute() && (await u.Z.toggleSelfMute({ syncRemote: !1 })), e.selfDeaf !== p.Z.isSelfDeaf() && u.Z.toggleSelfDeaf({ syncRemote: !1 });
}
function L(e) {
    let n = y.Z.getAwaitingRemoteSessionInfo();
    return e.find((e) => {
        let r = T.al.has(e.clientInfo.os),
            i = null != m.Z.getVoiceStateForSession(f.default.getId(), e.sessionId),
            a = null == n || (0, b.y)(n.type) === e.clientInfo.os;
        return r && a && i;
    });
}
class w extends c.Z {
    constructor(...e) {
        super(...e),
            C(this, 'rollbackCommandTimeout', new s.V7()),
            C(this, 'awaitRemoteTimeout', new s.V7()),
            C(this, 'actions', {
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
            C(this, 'maybeConnect', (e) => {
                let n = L(e);
                if (null == n) return null;
                this.awaitRemoteTimeout.stop(), (0, E.ef)(n.sessionId);
                let r = m.Z.getVoiceStateForSession(f.default.getId(), n.sessionId);
                null != r && x(r);
            }),
            C(this, 'handleAudioStateToggle', (e) => {
                let { syncRemote: n, context: r } = e;
                if (!n || r !== S.Yn.DEFAULT) return;
                let i = p.Z.isSelfDeaf(),
                    a = p.Z.isSelfMute(),
                    o = f.default.getId(),
                    s = y.Z.getRemoteSessionId();
                if (null == s) return;
                let l = m.Z.getVoiceStateForSession(o, s);
                if (null != l)
                    (l.selfDeaf !== i || l.selfMute !== a) &&
                        ((0, E.Vv)(s, {
                            selfDeaf: i,
                            selfMute: a
                        }),
                        this.rollbackCommandTimeout.start(R, () => {
                            x(l);
                        }));
            }),
            C(this, 'handleVoiceStateUpdates', (e) => {
                let n = e.voiceStates,
                    r = y.Z.getRemoteSessionId();
                if (null == r) {
                    let e = n
                        .map((e) => {
                            let { sessionId: n } = e;
                            return null != n ? _.Z.getSessionById(n) : null;
                        })
                        .filter(g.lm);
                    return this.maybeConnect(e);
                }
                let i = n.find((e) => {
                    let { sessionId: n } = e;
                    return n === r;
                });
                null != i && (this.rollbackCommandTimeout.stop(), x(i));
            }),
            C(this, 'handleSessionsChanged', () => {
                let e = y.Z.getRemoteSessionId();
                null != e && null == _.Z.getSessionById(e) && (0, E.s6)(), null == e && this.maybeConnect(Object.values(_.Z.getSessions()));
            }),
            C(this, 'handleWaitForRemoteSession', () => {
                this.awaitRemoteTimeout.start(O, () => {
                    (0, E.s6)(),
                        l.Z.show({
                            title: A.intl.string(A.t.wGMxr6),
                            body: A.intl.string(A.t.i5k8b2)
                        });
                });
            }),
            C(this, 'handleConsoleCommandUpdate', (e) => {
                var n;
                let { id: r, result: i, error: a } = e;
                if (('failed' !== i && 'n/a' !== i) || null == a) return;
                N.info('Console command Error result:', i, a);
                let o = y.Z.getAwaitingRemoteSessionInfo();
                if ((null == o ? void 0 : o.commandId) !== r) return;
                let s = y.Z.getDevice(o.type, null !== (n = o.deviceId) && void 0 !== n ? n : ''),
                    l = (0, I.Z)(
                        null != s
                            ? s
                            : {
                                  id: 'id',
                                  platform: A.intl.string(A.t['UQMV/P']),
                                  name: A.intl.string(A.t['UQMV/P'])
                              },
                        i,
                        a
                    );
                null != l &&
                    v.Z.showSelfDismissableAlert({
                        title: l.title,
                        body: l.body,
                        errorCodeMessage: l.errorCodeMessage,
                        reconnectPlatformType: l.isAccountLinkError ? o.type : void 0
                    }),
                    T.e8.has(a.code) && this.awaitRemoteTimeout.isStarted() ? this.awaitRemoteTimeout.start(D, () => (0, E.s6)(), !0) : 'failed' === i && (0, E.s6)();
            }),
            C(this, 'handleRemoteSessionDisconnect', () => {
                this.awaitRemoteTimeout.stop();
            });
    }
}
n.Z = new w();
