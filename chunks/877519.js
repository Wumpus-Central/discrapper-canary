n.d(t, { Z: () => g }), n(47120);
var r = n(147913),
    i = n(70956),
    o = n(272008),
    a = n(569984),
    s = n(497505),
    l = n(977156),
    c = n(46140);
function u(e, t, n) {
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
let d = i.Z.Millis.DAY,
    f = 30 * i.Z.Millis.MINUTE,
    _ = 5 * i.Z.Millis.SECOND,
    p = 5 * i.Z.Millis.MINUTE,
    h = 12 * i.Z.Millis.HOUR;
class m extends r.Z {
    _fetch() {
        (0, l.cB)({ location: c.dr.QUESTS_MANAGER }) && !a.Z.isFetchingCurrentQuests && ((0, o.xw)(), (0, o.w)(s.Ok.DESKTOP_ACCOUNT_PANEL_AREA));
    }
    constructor(...e) {
        super(...e),
            u(this, 'instantiatedAt', Date.now()),
            u(this, 'initialFetchTimerId', null),
            u(this, 'recurringFetchTimerId', null),
            u(this, 'lastFetchAttemptedAt', 0),
            u(this, 'lastFetchedQuestForLocaleChangeAt', 0),
            u(this, 'handleQuestsFetchCurrentQuestsBegin', () => {
                this.lastFetchAttemptedAt = Date.now();
            }),
            u(this, 'handlePostConnectionOpen', () => {
                window.clearTimeout(this.initialFetchTimerId),
                    window.clearTimeout(this.recurringFetchTimerId),
                    (this.recurringFetchTimerId = window.setInterval(() => {
                        Date.now() - this.lastFetchAttemptedAt > d && ((this.lastFetchAttemptedAt = Date.now()), this._fetch());
                    }, f)),
                    (this.initialFetchTimerId = window.setTimeout(
                        () => {
                            0 === a.Z.lastFetchedCurrentQuests && this._fetch();
                        },
                        Math.floor(Math.random() * _)
                    ));
            }),
            u(this, 'handleRunningGamesChange', () => {
                this.instantiatedAt + h > Date.now() || a.Z.lastFetchedCurrentQuests + h > Date.now() || this._fetch();
            }),
            u(this, 'handleUserSettingsProtoUpdate', (e) => {
                let { partial: t, settings: n, wasSaved: r } = e;
                !('localization' in n.proto) || !t || r || Date.now() - this.lastFetchedQuestForLocaleChangeAt <= p || ((this.lastFetchedQuestForLocaleChangeAt = Date.now()), this._fetch());
            }),
            u(this, 'handleLogout', () => {
                window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), (this.lastFetchAttemptedAt = 0), (this.lastFetchedQuestForLocaleChangeAt = 0);
            }),
            u(this, 'actions', {
                QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
                LOGOUT: this.handleLogout
            });
    }
}
let g = new m();
