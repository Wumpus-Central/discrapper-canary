n.d(t, { Z: () => P }), n(653041), n(47120);
var r = n(392711),
    i = n.n(r),
    o = n(377108),
    a = n(147913),
    s = n(654455),
    l = n(822245),
    c = n(339085),
    u = n(178106),
    d = n(822179),
    f = n(580005),
    p = n(70956),
    _ = n(675478),
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
let b = 10 + Math.random() * (10 * p.Z.Millis.SECOND),
    y = 2 * p.Z.Millis.HOUR + Math.floor(Math.random() * (10 * p.Z.Millis.MINUTE)),
    O = null,
    S = !1;
class I extends a.Z {
    _initialize() {
        _.DZ.beforeSendCallbacks.push({
            hasChanges: () => !1,
            processProto: () => {
                R(y, !1);
            }
        }),
            _.DZ.beforeSendCallbacks.push({
                hasChanges: () => d.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    d.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.stickerFrecency = o.ls.create()), (e.stickerFrecency.stickers = (0, m.tU)(d.Z.stickerFrecencyWithoutFetchingLatest.usageHistory, 100)));
                }
            }),
            _.DZ.beforeSendCallbacks.push({
                hasChanges: () => c.ZP.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    c.ZP.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.emojiFrecency = o.PL.create()), (e.emojiReactionFrecency = o.PL.create()), (e.emojiFrecency.emojis = (0, m.tU)(c.ZP.emojiFrecencyWithoutFetchingLatest.usageHistory, 100)), (e.emojiReactionFrecency.emojis = (0, m.tU)(c.ZP.emojiReactionFrecencyWithoutFetchingLatest.usageHistory, 100)));
                }
            }),
            _.DZ.beforeSendCallbacks.push({
                hasChanges: () => u.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    u.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && !i().isEmpty(u.Z.playedSoundHistory) && ((e.playedSoundFrecency = o.pL.create()), (e.playedSoundFrecency.playedSounds = (0, m.tU)(u.Z.playedSoundHistory, 100)));
                }
            }),
            _.DZ.beforeSendCallbacks.push({
                hasChanges: () => s.ZP.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    s.ZP.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.applicationCommandFrecency = o.YI.create()), (e.applicationCommandFrecency.applicationCommands = (0, m.tU)(s.ZP.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500)));
                }
            }),
            _.DZ.beforeSendCallbacks.push({
                hasChanges: () => l.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    l.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.applicationFrecency = o.UY.create()), (e.applicationFrecency.applications = (0, m.tU)(l.Z.getApplicationFrecencyWithoutLoadingLatest().usageHistory, E.yP)));
                }
            }),
            _.DZ.beforeSendCallbacks.push({
                hasChanges: () => f.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    f.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.guildAndChannelFrecency = o.lG.create()), (e.guildAndChannelFrecency.guildAndChannels = (0, m.tU)(f.Z.frecencyWithoutFetchingLatest.usageHistory, f.C)));
                }
            });
    }
    constructor(...e) {
        super(...e),
            v(this, 'actions', {
                POST_CONNECTION_OPEN: T,
                CONNECTION_RESUMED: T,
                CONNECTION_CLOSED: A,
                APP_STATE_UPDATE: N
            });
    }
}
function T() {
    (S = !0), R(b, !0);
}
function N(e) {
    S && 'active' !== e.state && (clearTimeout(O), (O = null), C(!1));
}
function A() {
    S && (clearTimeout(O), (O = null), C(!1));
}
async function C(e) {
    R(y, !1),
        !h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (d.Z.hasPendingUsage() || c.ZP.hasPendingUsage() || s.ZP.hasPendingUsage() || l.Z.hasPendingUsage() || (f.Z.hasPendingUsage() && !e)) && ((0, _.T6)(), await _.DZ.loadIfNecessary()),
        i().forEach(_.aj, (e) => {
            e.markDirtyIfHasPendingChange();
        });
}
function R(e, t) {
    null != O && clearTimeout(O), (O = setTimeout(() => C(t), e));
}
let P = new I();
