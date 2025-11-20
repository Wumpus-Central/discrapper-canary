n.d(t, { Z: () => O }), n(388685);
var r = n(147913),
    i = n(15624),
    a = n(70956),
    o = n(22095),
    s = n(569984),
    l = n(497505),
    c = n(937797),
    u = n(573196),
    d = n(704161),
    f = n(977156),
    _ = n(46140);
function p(e, t, n) {
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
let h = a.Z.Millis.DAY,
    m = 30 * a.Z.Millis.MINUTE,
    g = 5 * a.Z.Millis.SECOND,
    E = 5 * a.Z.Millis.MINUTE,
    b = 12 * a.Z.Millis.HOUR;
class y extends r.Z {
    _fetch(e) {
        if (
            !(0, f.c)({ location: _.dr.QUESTS_MANAGER }) ||
            s.Z.isFetchingCurrentQuests ||
            ((0, o.xw)(), c.DL.getConfig({ location: _.dr.QUESTS_MANAGER }).enabled && "focused" !== i.Z.getState())
        )
            return;
        let { enableNewRequestBehavior: t } = d.Z.getConfig({ location: "QuestFetchManager" });
        t || (0, o.w)(l.Ok.DESKTOP_ACCOUNT_PANEL_AREA, e);
    }
    constructor(...e) {
        super(...e),
            p(this, "instantiatedAt", Date.now()),
            p(this, "initialFetchTimerId", null),
            p(this, "recurringFetchTimerId", null),
            p(this, "lastFetchAttemptedAt", 0),
            p(this, "lastFetchedQuestForLocaleChangeAt", 0),
            p(this, "handleQuestsFetchCurrentQuestsBegin", () => {
                this.lastFetchAttemptedAt = Date.now();
            }),
            p(this, "handlePostConnectionOpen", () => {
                let e = (0, u.G)({ location: _.dr.QUESTS_MANAGER });
                window.clearTimeout(this.initialFetchTimerId),
                    window.clearTimeout(this.recurringFetchTimerId),
                    (this.recurringFetchTimerId = window.setInterval(() => {
                        Date.now() - this.lastFetchAttemptedAt > h && this._fetch("post_connect_recurring");
                    }, m));
                let t = Math.floor(Math.random() * g);
                this.initialFetchTimerId = window.setTimeout(() => {
                    !(Date.now() - t < s.Z.lastFetchedCurrentQuests) &&
                        (e || 0 === s.Z.lastFetchedCurrentQuests) &&
                        this._fetch("post_connect_initial");
                }, t);
            }),
            p(this, "handleRunningGamesChange", () => {
                this.instantiatedAt + b > Date.now() ||
                    s.Z.lastFetchedCurrentQuests + b > Date.now() ||
                    this._fetch("running_games");
            }),
            p(this, "handleUserSettingsProtoUpdate", (e) => {
                let { partial: t, settings: n, wasSaved: r } = e;
                !("localization" in n.proto) ||
                    !t ||
                    r ||
                    Date.now() - this.lastFetchedQuestForLocaleChangeAt <= E ||
                    ((this.lastFetchedQuestForLocaleChangeAt = Date.now()), this._fetch("user_settings"));
            }),
            p(this, "handleLogout", () => {
                window.clearTimeout(this.initialFetchTimerId),
                    window.clearTimeout(this.recurringFetchTimerId),
                    (this.lastFetchAttemptedAt = 0),
                    (this.lastFetchedQuestForLocaleChangeAt = 0);
            }),
            p(this, "actions", {
                QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
                LOGOUT: this.handleLogout,
            });
    }
}
let O = new y();
