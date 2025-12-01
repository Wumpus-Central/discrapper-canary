n.d(t, { Z: () => R }), n(539854), n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(377108),
    o = n(147913),
    s = n(654455),
    l = n(822245),
    c = n(339085),
    u = n(178106),
    d = n(822179),
    f = n(580005),
    p = n(70956),
    _ = n(675478),
    m = n(581883),
    h = n(48481),
    g = n(526761),
    E = n(674563);
function b(e, t, n) {
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
let y = 10 + Math.random() * (10 * p.Z.Millis.SECOND),
    O = 2 * p.Z.Millis.HOUR + Math.floor(Math.random() * (10 * p.Z.Millis.MINUTE)),
    v = null,
    S = !1;
class I extends o.Z {
    _initialize() {
        _.DZ.beforeSendCallbacks.push({
            hasChanges: () => !1,
            processProto: () => {
                P(O, !1);
            },
        }),
            _.DZ.beforeSendCallbacks.push({
                hasChanges: () => d.Z.hasPendingUsage() && m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    d.Z.hasPendingUsage() &&
                        m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) &&
                        ((e.stickerFrecency = a.ls.create()),
                        (e.stickerFrecency.stickers = (0, h.tU)(
                            d.Z.stickerFrecencyWithoutFetchingLatest.usageHistory,
                            100,
                        )));
                },
            }),
            _.DZ.beforeSendCallbacks.push({
                hasChanges: () => c.ZP.hasPendingUsage() && m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    c.ZP.hasPendingUsage() &&
                        m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) &&
                        ((e.emojiFrecency = a.PL.create()),
                        (e.emojiReactionFrecency = a.PL.create()),
                        (e.emojiFrecency.emojis = (0, h.tU)(c.ZP.emojiFrecencyWithoutFetchingLatest.usageHistory, 100)),
                        (e.emojiReactionFrecency.emojis = (0, h.tU)(
                            c.ZP.emojiReactionFrecencyWithoutFetchingLatest.usageHistory,
                            100,
                        )));
                },
            }),
            _.DZ.beforeSendCallbacks.push({
                hasChanges: () => u.Z.hasPendingUsage() && m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    u.Z.hasPendingUsage() &&
                        m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) &&
                        (i().isEmpty(u.Z.playedSoundHistory) ||
                            ((e.playedSoundFrecency = a.pL.create()),
                            (e.playedSoundFrecency.playedSounds = (0, h.tU)(u.Z.playedSoundHistory, 100))));
                },
            }),
            _.DZ.beforeSendCallbacks.push({
                hasChanges: () => s.ZP.hasPendingUsage() && m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    s.ZP.hasPendingUsage() &&
                        m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) &&
                        ((e.applicationCommandFrecency = a.YI.create()),
                        (e.applicationCommandFrecency.applicationCommands = (0, h.tU)(
                            s.ZP.getCommandFrecencyWithoutLoadingLatest().usageHistory,
                            500,
                        )));
                },
            }),
            _.DZ.beforeSendCallbacks.push({
                hasChanges: () => l.Z.hasPendingUsage() && m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    l.Z.hasPendingUsage() &&
                        m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) &&
                        ((e.applicationFrecency = a.UY.create()),
                        (e.applicationFrecency.applications = (0, h.tU)(
                            l.Z.getApplicationFrecencyWithoutLoadingLatest().usageHistory,
                            E.yP,
                        )));
                },
            }),
            _.DZ.beforeSendCallbacks.push({
                hasChanges: () => f.Z.hasPendingUsage() && m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    f.Z.hasPendingUsage() &&
                        m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) &&
                        ((e.guildAndChannelFrecency = a.lG.create()),
                        (e.guildAndChannelFrecency.guildAndChannels = (0, h.tU)(
                            f.Z.frecencyWithoutFetchingLatest.usageHistory,
                            f.C,
                        )));
                },
            });
    }
    constructor(...e) {
        super(...e),
            b(this, "actions", {
                POST_CONNECTION_OPEN: T,
                CONNECTION_RESUMED: T,
                CONNECTION_CLOSED: C,
                APP_STATE_UPDATE: A,
            });
    }
}
function T() {
    (S = !0), P(y, !0);
}
function A(e) {
    S && "active" !== e.state && (clearTimeout(v), (v = null), N(!1));
}
function C() {
    S && (clearTimeout(v), (v = null), N(!1));
}
async function N(e) {
    P(O, !1),
        !m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) &&
            (d.Z.hasPendingUsage() ||
                c.ZP.hasPendingUsage() ||
                s.ZP.hasPendingUsage() ||
                l.Z.hasPendingUsage() ||
                (f.Z.hasPendingUsage() && !e)) &&
            ((0, _.T6)(), await _.DZ.loadIfNecessary()),
        i().forEach(_.aj, (e) => {
            e.markDirtyIfHasPendingChange();
        });
}
function P(e, t) {
    null != v && clearTimeout(v), (v = setTimeout(() => N(t), e));
}
let R = new I();
