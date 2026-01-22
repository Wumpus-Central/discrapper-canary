n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(554146),
    i = n(439372),
    a = n(826673),
    s = n(217222),
    o = n(15285),
    l = n(617617),
    c = n(71393),
    u = n(871123),
    d = n(916023),
    f = n(533406),
    p = n(188275),
    _ = n(355097);

function h(e, t, n) {
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
class m extends i.A {
    constructor(...e) {
        super(...e),
            h(this, "_didAttemptToOpenModal", !1),
            h(this, "_didConnectionOpen", !1),
            h(this, "_didUserSettingsProtoLoad", !1),
            h(this, "_didGamesSeenLoad", !1),
            h(this, "actions", {
                POST_CONNECTION_OPEN: () => this._handlePostConnectionOpen(),
            }),
            h(
                this,
                "stores",
                new Map()
                    .set(l.A, () => this._handleUserSettingsProtoUpdate())
                    .set(o.Ay, () => this._handleGamesSeenUpdate())
                    .set(s.A, () => this._handleApexExperimentUpdate()),
            ),
            h(this, "_handlePostConnectionOpen", () => {
                (this._didConnectionOpen = !0), this._handleShowAnnouncementModal();
            }),
            h(this, "_handleUserSettingsProtoUpdate", () => {
                (this._didUserSettingsProtoLoad = l.A.hasLoaded(_.oD.PRELOADED_USER_SETTINGS)),
                    this._handleShowAnnouncementModal();
            }),
            h(this, "_handleGamesSeenUpdate", () => {
                (this._didGamesSeenLoad = o.Ay.isGamesSeenLoaded()), this._handleShowAnnouncementModal();
            }),
            h(this, "_handleApexExperimentUpdate", () => {
                this._handleShowAnnouncementModal();
            }),
            h(this, "_handleShowAnnouncementModal", () => {
                if (
                    !this._didAttemptToOpenModal &&
                    this._didConnectionOpen &&
                    this._didUserSettingsProtoLoad &&
                    this._didGamesSeenLoad &&
                    (0, d.xD)({
                        location: "social-layer-storefront-announcement-modal",
                    }) &&
                    ((this._didAttemptToOpenModal = !0), !(0, a.k8)(r.M.GAME_SHOP_ANNOUNCEMENT_MODAL))
                ) {
                    if (null != c.A.getGuild((0, u.zf)())) return void (0, f.B)();
                    for (let e of o.Ay.getGamesSeen(!1, !1)) if (null != e.id && p.sQ.has(e.id)) return void (0, f.B)();
                }
            });
    }
}
let g = new m();
