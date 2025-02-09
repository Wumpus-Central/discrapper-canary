n.d(t, { Z: () => D }), n(653041), n(47120);
var i = n(392711),
    r = n.n(i),
    a = n(377108),
    s = n(147913),
    o = n(654455),
    l = n(822245),
    u = n(339085),
    c = n(178106),
    d = n(822179),
    f = n(580005),
    _ = n(70956),
    p = n(675478),
    h = n(581883),
    m = n(48481),
    g = n(526761),
    E = n(674563);
function v(e, t, n) {
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
let y = 10 + Math.random() * (10 * _.Z.Millis.SECOND),
    I = 2 * _.Z.Millis.HOUR + Math.floor(Math.random() * (10 * _.Z.Millis.MINUTE)),
    T = null,
    b = !1;
class S extends s.Z {
    _initialize() {
        p.DZ.beforeSendCallbacks.push({
            hasChanges: () => !1,
            processProto: () => {
                O(I, !1);
            }
        }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => d.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    d.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.stickerFrecency = a.ls.create()), (e.stickerFrecency.stickers = (0, m.tU)(d.Z.stickerFrecencyWithoutFetchingLatest.usageHistory, 100)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => u.ZP.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    u.ZP.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.emojiFrecency = a.PL.create()), (e.emojiReactionFrecency = a.PL.create()), (e.emojiFrecency.emojis = (0, m.tU)(u.ZP.emojiFrecencyWithoutFetchingLatest.usageHistory, 100)), (e.emojiReactionFrecency.emojis = (0, m.tU)(u.ZP.emojiReactionFrecencyWithoutFetchingLatest.usageHistory, 100)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => c.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    c.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && !r().isEmpty(c.Z.playedSoundHistory) && ((e.playedSoundFrecency = a.pL.create()), (e.playedSoundFrecency.playedSounds = (0, m.tU)(c.Z.playedSoundHistory, 100)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => o.ZP.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    o.ZP.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.applicationCommandFrecency = a.YI.create()), (e.applicationCommandFrecency.applicationCommands = (0, m.tU)(o.ZP.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => l.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    l.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.applicationFrecency = a.UY.create()), (e.applicationFrecency.applications = (0, m.tU)(l.Z.getApplicationFrecencyWithoutLoadingLatest().usageHistory, E.yP)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => f.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    f.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.guildAndChannelFrecency = a.lG.create()), (e.guildAndChannelFrecency.guildAndChannels = (0, m.tU)(f.Z.frecencyWithoutFetchingLatest.usageHistory, f.C)));
                }
            });
    }
    constructor(...e) {
        super(...e),
            v(this, 'actions', {
                POST_CONNECTION_OPEN: A,
                CONNECTION_RESUMED: A,
                CONNECTION_CLOSED: C,
                APP_STATE_UPDATE: N
            });
    }
}
function A() {
    (b = !0), O(y, !0);
}
function N(e) {
    b && 'active' !== e.state && (clearTimeout(T), (T = null), R(!1));
}
function C() {
    b && (clearTimeout(T), (T = null), R(!1));
}
async function R(e) {
    O(I, !1),
        !h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (d.Z.hasPendingUsage() || u.ZP.hasPendingUsage() || o.ZP.hasPendingUsage() || l.Z.hasPendingUsage() || (f.Z.hasPendingUsage() && !e)) && ((0, p.T6)(), await p.DZ.loadIfNecessary()),
        r().forEach(p.aj, (e) => {
            e.markDirtyIfHasPendingChange();
        });
}
function O(e, t) {
    null != T && clearTimeout(T), (T = setTimeout(() => R(t), e));
}
let D = new S();
