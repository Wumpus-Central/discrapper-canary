n.d(t, { Z: () => E }), n(388685);
var r = n(147913),
    i = n(70956),
    o = n(272008),
    a = n(569984),
    s = n(497505),
    l = n(573196),
    c = n(977156),
    u = n(46140);
function d(e, t, n) {
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
let f = i.Z.Millis.DAY,
    _ = 30 * i.Z.Millis.MINUTE,
    p = 5 * i.Z.Millis.SECOND,
    h = 5 * i.Z.Millis.MINUTE,
    m = 12 * i.Z.Millis.HOUR;
class g extends r.Z {
    _fetch() {
        (0, c.cB)({ location: u.dr.QUESTS_MANAGER }) && !a.Z.isFetchingCurrentQuests && ((0, o.xw)(), (0, o.w)(s.Ok.DESKTOP_ACCOUNT_PANEL_AREA));
    }
    constructor(...e) {
        super(...e),
            d(this, 'instantiatedAt', Date.now()),
            d(this, 'initialFetchTimerId', null),
            d(this, 'recurringFetchTimerId', null),
            d(this, 'lastFetchAttemptedAt', 0),
            d(this, 'lastFetchedQuestForLocaleChangeAt', 0),
            d(this, 'handleQuestsFetchCurrentQuestsBegin', () => {
                this.lastFetchAttemptedAt = Date.now();
            }),
            d(this, 'handlePostConnectionOpen', () => {
                let e = (0, l.G)({ location: u.dr.QUESTS_MANAGER });
                window.clearTimeout(this.initialFetchTimerId),
                    window.clearTimeout(this.recurringFetchTimerId),
                    (this.recurringFetchTimerId = window.setInterval(() => {
                        Date.now() - this.lastFetchAttemptedAt > f && this._fetch();
                    }, _)),
                    (this.initialFetchTimerId = window.setTimeout(
                        () => {
                            (e || 0 === a.Z.lastFetchedCurrentQuests) && this._fetch();
                        },
                        Math.floor(Math.random() * p)
                    ));
            }),
            d(this, 'handleRunningGamesChange', () => {
                this.instantiatedAt + m > Date.now() || a.Z.lastFetchedCurrentQuests + m > Date.now() || this._fetch();
            }),
            d(this, 'handleUserSettingsProtoUpdate', (e) => {
                let { partial: t, settings: n, wasSaved: r } = e;
                !('localization' in n.proto) || !t || r || Date.now() - this.lastFetchedQuestForLocaleChangeAt <= h || ((this.lastFetchedQuestForLocaleChangeAt = Date.now()), this._fetch());
            }),
            d(this, 'handleLogout', () => {
                window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), (this.lastFetchAttemptedAt = 0), (this.lastFetchedQuestForLocaleChangeAt = 0);
            }),
            d(this, 'actions', {
                QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
                LOGOUT: this.handleLogout
            });
    }
}
let E = new g();
