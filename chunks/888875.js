var i = r(653041);
var a = r(47120);
var o = r(392711),
    s = r.n(o),
    l = r(377108),
    u = r(147913),
    c = r(654455),
    d = r(822245),
    f = r(339085),
    p = r(178106),
    h = r(822179),
    _ = r(580005),
    m = r(70956),
    g = r(675478),
    E = r(581883),
    v = r(48481),
    y = r(526761),
    b = r(674563);
function I(e, n, r) {
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
let T = 10 + Math.random() * (10 * m.Z.Millis.SECOND),
    S = 2 * m.Z.Millis.HOUR + Math.floor(Math.random() * (10 * m.Z.Millis.MINUTE)),
    A = null,
    C = !1;
class N extends u.Z {
    _initialize() {
        g.DZ.beforeSendCallbacks.push({
            hasChanges: () => !1,
            processProto: () => {
                L(S, !1);
            }
        }),
            g.DZ.beforeSendCallbacks.push({
                hasChanges: () => h.Z.hasPendingUsage() && E.Z.hasLoaded(y.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    if (!!h.Z.hasPendingUsage()) E.Z.hasLoaded(y.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.stickerFrecency = l.ls.create()), (e.stickerFrecency.stickers = (0, v.tU)(h.Z.stickerFrecencyWithoutFetchingLatest.usageHistory, 100)));
                }
            }),
            g.DZ.beforeSendCallbacks.push({
                hasChanges: () => f.ZP.hasPendingUsage() && E.Z.hasLoaded(y.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    if (!!f.ZP.hasPendingUsage()) E.Z.hasLoaded(y.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.emojiFrecency = l.PL.create()), (e.emojiReactionFrecency = l.PL.create()), (e.emojiFrecency.emojis = (0, v.tU)(f.ZP.emojiFrecencyWithoutFetchingLatest.usageHistory, 100)), (e.emojiReactionFrecency.emojis = (0, v.tU)(f.ZP.emojiReactionFrecencyWithoutFetchingLatest.usageHistory, 100)));
                }
            }),
            g.DZ.beforeSendCallbacks.push({
                hasChanges: () => p.Z.hasPendingUsage() && E.Z.hasLoaded(y.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    if (!!p.Z.hasPendingUsage()) E.Z.hasLoaded(y.yP.FRECENCY_AND_FAVORITES_SETTINGS) && !s().isEmpty(p.Z.playedSoundHistory) && ((e.playedSoundFrecency = l.pL.create()), (e.playedSoundFrecency.playedSounds = (0, v.tU)(p.Z.playedSoundHistory, 100)));
                }
            }),
            g.DZ.beforeSendCallbacks.push({
                hasChanges: () => c.ZP.hasPendingUsage() && E.Z.hasLoaded(y.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    if (!!c.ZP.hasPendingUsage()) E.Z.hasLoaded(y.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.applicationCommandFrecency = l.YI.create()), (e.applicationCommandFrecency.applicationCommands = (0, v.tU)(c.ZP.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500)));
                }
            }),
            g.DZ.beforeSendCallbacks.push({
                hasChanges: () => d.Z.hasPendingUsage() && E.Z.hasLoaded(y.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    if (!!d.Z.hasPendingUsage()) E.Z.hasLoaded(y.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.applicationFrecency = l.UY.create()), (e.applicationFrecency.applications = (0, v.tU)(d.Z.getApplicationFrecencyWithoutLoadingLatest().usageHistory, b.yP)));
                }
            }),
            g.DZ.beforeSendCallbacks.push({
                hasChanges: () => _.Z.hasPendingUsage() && E.Z.hasLoaded(y.yP.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    if (!!_.Z.hasPendingUsage()) E.Z.hasLoaded(y.yP.FRECENCY_AND_FAVORITES_SETTINGS) && ((e.guildAndChannelFrecency = l.lG.create()), (e.guildAndChannelFrecency.guildAndChannels = (0, v.tU)(_.Z.frecencyWithoutFetchingLatest.usageHistory, _.C)));
                }
            });
    }
    constructor(...e) {
        super(...e),
            I(this, 'actions', {
                POST_CONNECTION_OPEN: R,
                CONNECTION_RESUMED: R,
                CONNECTION_CLOSED: D,
                APP_STATE_UPDATE: O
            });
    }
}
function R() {
    (C = !0), L(T, !0);
}
function O(e) {
    C && 'active' !== e.state && (clearTimeout(A), (A = null), x(!1));
}
function D() {
    C && (clearTimeout(A), (A = null), x(!1));
}
async function x(e) {
    L(S, !1),
        !E.Z.hasLoaded(y.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (h.Z.hasPendingUsage() || f.ZP.hasPendingUsage() || c.ZP.hasPendingUsage() || d.Z.hasPendingUsage() || (_.Z.hasPendingUsage() && !e)) && ((0, g.T6)(), await g.DZ.loadIfNecessary()),
        s().forEach(g.aj, (e) => {
            e.markDirtyIfHasPendingChange();
        });
}
function L(e, n) {
    null != A && clearTimeout(A), (A = setTimeout(() => x(n), e));
}
n.Z = new N();
