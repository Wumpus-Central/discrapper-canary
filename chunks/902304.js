n.d(t, { Z: () => D }), n(388685);
var r = n(512722),
    i = n.n(r),
    a = n(846519),
    o = n(668781),
    s = n(846027),
    l = n(147913),
    c = n(710845),
    u = n(314897),
    d = n(131951),
    f = n(19780),
    p = n(797258),
    _ = n(979651),
    m = n(823379),
    h = n(254238),
    g = n(607214),
    E = n(258609),
    b = n(565473),
    y = n(444092),
    O = n(927923),
    v = n(65154),
    S = n(388032);
function I(e, t, n) {
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
let T = new c.Z("GameConsoleManager"),
    C = 3000,
    A = 60000,
    N = 180000;
async function P(e) {
    let t = f.Z.getChannelId();
    i()(null == t, "Syncing to remote while in voice!"),
        e.selfMute !== d.Z.isSelfMute() && (await s.Z.toggleSelfMute({ syncRemote: !1 })),
        e.selfDeaf !== d.Z.isSelfDeaf() && s.Z.toggleSelfDeaf({ syncRemote: !1 });
}
function R(e) {
    let t = E.default.getAwaitingRemoteSessionInfo();
    return e.find((e) => {
        let n = O.al.has(e.clientInfo.os),
            r = null != _.Z.getVoiceStateForSession(u.default.getId(), e.sessionId),
            i = null == t || (0, b.y)(t.type) === e.clientInfo.os;
        return n && i && r;
    });
}
class w extends l.Z {
    constructor(...e) {
        super(...e),
            I(this, "rollbackCommandTimeout", new a.V7()),
            I(this, "awaitRemoteTimeout", new a.V7()),
            I(this, "actions", {
                WAIT_FOR_REMOTE_SESSION: () => this.handleWaitForRemoteSession(),
                POST_CONNECTION_OPEN: () => this.handleSessionsChanged(),
                SESSIONS_REPLACE: () => this.handleSessionsChanged(),
                AUDIO_TOGGLE_SELF_DEAF: (e) => this.handleAudioStateToggle(e),
                AUDIO_TOGGLE_SELF_MUTE: (e) => this.handleAudioStateToggle(e),
                VOICE_STATE_UPDATES: (e) => this.handleVoiceStateUpdates(e),
                CONSOLE_COMMAND_UPDATE: (e) => this.handleConsoleCommandUpdate(e),
                PASSIVE_UPDATE_V2: (e) => this.handleVoiceStateUpdates(e),
                REMOTE_SESSION_DISCONNECT: () => this.handleRemoteSessionDisconnect(),
            }),
            I(this, "maybeConnect", (e) => {
                let t = R(e);
                if (null == t) return null;
                this.awaitRemoteTimeout.stop(), (0, h.ef)(t.sessionId);
                let n = _.Z.getVoiceStateForSession(u.default.getId(), t.sessionId);
                null != n && P(n);
            }),
            I(this, "handleAudioStateToggle", (e) => {
                let { syncRemote: t, context: n } = e;
                if (!t || n !== v.Yn.DEFAULT) return;
                let r = d.Z.isSelfDeaf(),
                    i = d.Z.isSelfMute(),
                    a = u.default.getId(),
                    o = E.default.getRemoteSessionId();
                if (null == o) return;
                let s = _.Z.getVoiceStateForSession(a, o);
                null != s &&
                    (s.selfDeaf !== r || s.selfMute !== i) &&
                    ((0, h.Vv)(o, {
                        selfDeaf: r,
                        selfMute: i,
                    }),
                    this.rollbackCommandTimeout.start(C, () => {
                        P(s);
                    }));
            }),
            I(this, "handleVoiceStateUpdates", (e) => {
                let t = e.voiceStates,
                    n = E.default.getRemoteSessionId();
                if (null == n) {
                    let e = t
                        .map((e) => {
                            let { sessionId: t } = e;
                            return null != t ? p.Z.getSessionById(t) : null;
                        })
                        .filter(m.lm);
                    return this.maybeConnect(e);
                }
                let r = t.find((e) => {
                    let { sessionId: t } = e;
                    return t === n;
                });
                null != r && (this.rollbackCommandTimeout.stop(), P(r));
            }),
            I(this, "handleSessionsChanged", () => {
                let e = E.default.getRemoteSessionId();
                null != e && null == p.Z.getSessionById(e) && (0, h.s6)(),
                    null == e && this.maybeConnect(Object.values(p.Z.getSessions()));
            }),
            I(this, "handleWaitForRemoteSession", () => {
                this.awaitRemoteTimeout.start(A, () => {
                    (0, h.s6)(),
                        o.Z.show({
                            title: S.intl.string(S.t.wGMxr3),
                            body: S.intl.string(S.t.i5k8b5),
                        });
                });
            }),
            I(this, "handleConsoleCommandUpdate", (e) => {
                var t;
                let { id: n, result: r, error: i } = e;
                if (("failed" !== r && "n/a" !== r) || null == i) return;
                T.info("Console command Error result:", r, i);
                let a = E.default.getAwaitingRemoteSessionInfo();
                if ((null == a ? void 0 : a.commandId) !== n) return;
                let o = E.default.getDevice(a.type, null != (t = a.deviceId) ? t : ""),
                    s = (0, y.Z)(
                        null != o
                            ? o
                            : {
                                  id: "id",
                                  platform: S.intl.string(S.t["UQMV/E"]),
                                  name: S.intl.string(S.t["UQMV/E"]),
                              },
                        r,
                        i,
                    );
                null != s &&
                    g.Z.showSelfDismissableAlert({
                        title: s.title,
                        body: s.body,
                        errorCodeMessage: s.errorCodeMessage,
                        reconnectPlatformType: s.isAccountLinkError ? a.type : void 0,
                    }),
                    O.e8.has(i.code) && this.awaitRemoteTimeout.isStarted()
                        ? this.awaitRemoteTimeout.start(N, () => (0, h.s6)(), !0)
                        : "failed" === r && (0, h.s6)();
            }),
            I(this, "handleRemoteSessionDisconnect", () => {
                this.awaitRemoteTimeout.stop();
            });
    }
}
let D = new w();
