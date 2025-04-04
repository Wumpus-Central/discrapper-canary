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
    _ = n(70956),
    p = n(675478),
    h = n(581883),
    m = n(48481),
    g = n(526761),
    E = n(674563);
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
let y = 10 + Math.random() * (10 * _.Z.Millis.SECOND),
    v = 2 * _.Z.Millis.HOUR + Math.floor(Math.random() * (10 * _.Z.Millis.MINUTE)),
    O = null,
    I = !1;
class S extends a.Z {
    _initialize() {
        p.DZ.beforeSendCallbacks.push({
            hasChanges: () => !1,
            processProto: () => {
                R(v, !1);
            }
        }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => d.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    d.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.stickerFrecency = o.ls.create()), (e.stickerFrecency.stickers = (0, m.tU)(d.Z.stickerFrecencyWithoutFetchingLatest.usageHistory, 100)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => c.ZP.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    c.ZP.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.emojiFrecency = o.PL.create()), (e.emojiReactionFrecency = o.PL.create()), (e.emojiFrecency.emojis = (0, m.tU)(c.ZP.emojiFrecencyWithoutFetchingLatest.usageHistory, 100)), (e.emojiReactionFrecency.emojis = (0, m.tU)(c.ZP.emojiReactionFrecencyWithoutFetchingLatest.usageHistory, 100)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => u.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    u.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (i().isEmpty(u.Z.playedSoundHistory) || ((e.playedSoundFrecency = o.pL.create()), (e.playedSoundFrecency.playedSounds = (0, m.tU)(u.Z.playedSoundHistory, 100))));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => s.ZP.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    s.ZP.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.applicationCommandFrecency = o.YI.create()), (e.applicationCommandFrecency.applicationCommands = (0, m.tU)(s.ZP.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => l.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    l.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.applicationFrecency = o.UY.create()), (e.applicationFrecency.applications = (0, m.tU)(l.Z.getApplicationFrecencyWithoutLoadingLatest().usageHistory, E.yP)));
                }
            }),
            p.DZ.beforeSendCallbacks.push({
                hasChanges: () => f.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    f.Z.hasPendingUsage() && h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.guildAndChannelFrecency = o.lG.create()), (e.guildAndChannelFrecency.guildAndChannels = (0, m.tU)(f.Z.frecencyWithoutFetchingLatest.usageHistory, f.C)));
                }
            });
    }
    constructor(...e) {
        super(...e),
            b(this, 'actions', {
                POST_CONNECTION_OPEN: T,
                CONNECTION_RESUMED: T,
                CONNECTION_CLOSED: A,
                APP_STATE_UPDATE: N
            });
    }
}
function T() {
    (I = !0), R(y, !0);
}
function N(e) {
    I && 'active' !== e.state && (clearTimeout(O), (O = null), C(!1));
}
function A() {
    I && (clearTimeout(O), (O = null), C(!1));
}
async function C(e) {
    R(v, !1),
        !h.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (d.Z.hasPendingUsage() || c.ZP.hasPendingUsage() || s.ZP.hasPendingUsage() || l.Z.hasPendingUsage() || (f.Z.hasPendingUsage() && !e)) && ((0, p.T6)(), await p.DZ.loadIfNecessary()),
        i().forEach(p.aj, (e) => {
            e.markDirtyIfHasPendingChange();
        });
}
function R(e, t) {
    null != O && clearTimeout(O), (O = setTimeout(() => C(t), e));
}
let P = new S();
