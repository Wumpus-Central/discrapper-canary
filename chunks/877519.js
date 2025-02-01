n.d(t, { Z: () => E }), n(47120);
var i = n(147913),
    r = n(70956),
    a = n(272008),
    s = n(569984),
    o = n(497505),
    l = n(977156),
    u = n(569743),
    c = n(46140);
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
let f = r.Z.Millis.DAY,
    _ = 30 * r.Z.Millis.MINUTE,
    p = 5 * r.Z.Millis.SECOND,
    h = 5 * r.Z.Millis.MINUTE,
    m = 12 * r.Z.Millis.HOUR;
class g extends i.Z {
    _fetch() {
        (0, l.cB)({ location: c.dr.QUESTS_MANAGER }) && !s.Z.isFetchingCurrentQuests && ((0, a.xw)(), (0, u.Z)({ location: c.dr.QUESTS_MANAGER }) && (0, a.w)(o.Ok.DESKTOP_ACCOUNT_PANEL_AREA));
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
                window.clearTimeout(this.initialFetchTimerId),
                    window.clearTimeout(this.recurringFetchTimerId),
                    (this.recurringFetchTimerId = window.setInterval(() => {
                        Date.now() - this.lastFetchAttemptedAt > f && ((this.lastFetchAttemptedAt = Date.now()), this._fetch());
                    }, _)),
                    (this.initialFetchTimerId = window.setTimeout(
                        () => {
                            0 === s.Z.lastFetchedCurrentQuests && this._fetch();
                        },
                        Math.floor(Math.random() * p)
                    ));
            }),
            d(this, 'handleRunningGamesChange', () => {
                !(this.instantiatedAt + m > Date.now() || s.Z.lastFetchedCurrentQuests + m > Date.now()) && this._fetch();
            }),
            d(this, 'handleUserSettingsProtoUpdate', (e) => {
                let { partial: t, settings: n, wasSaved: i } = e;
                !(!('localization' in n.proto) || !t || i || Date.now() - this.lastFetchedQuestForLocaleChangeAt <= h) && ((this.lastFetchedQuestForLocaleChangeAt = Date.now()), this._fetch());
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
