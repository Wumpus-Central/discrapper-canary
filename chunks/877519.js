n.d(t, { Z: () => v }), n(388685);
var r = n(147913),
    i = n(15624),
    a = n(70956),
    o = n(455971),
    s = n(22095),
    l = n(616022),
    c = n(49436),
    u = n(937797),
    d = n(573196),
    f = n(704161),
    p = n(787695),
    _ = n(324805);
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
let m = a.Z.Millis.DAY,
    g = 30 * a.Z.Millis.MINUTE,
    E = 5 * a.Z.Millis.SECOND,
    b = 5 * a.Z.Millis.MINUTE,
    y = 12 * a.Z.Millis.HOUR;
class O extends r.Z {
    _fetch(e) {
        if (
            !(0, p.c)({ location: _.dr.QUESTS_MANAGER }) ||
            l.Z.isFetchingCurrentQuests ||
            (0, o.C)() ||
            ((0, s.xw)(), u.DL.getConfig({ location: _.dr.QUESTS_MANAGER }).enabled && "focused" !== i.Z.getState())
        )
            return;
        let { enableNewRequestBehavior: t } = f.Z.getConfig({ location: "QuestFetchManager" });
        t || (0, s.w)(c.Ok.DESKTOP_ACCOUNT_PANEL_AREA, e);
    }
    constructor(...e) {
        super(...e),
            h(this, "instantiatedAt", Date.now()),
            h(this, "initialFetchTimerId", null),
            h(this, "recurringFetchTimerId", null),
            h(this, "lastFetchAttemptedAt", 0),
            h(this, "lastFetchedQuestForLocaleChangeAt", 0),
            h(this, "handleQuestsFetchCurrentQuestsBegin", () => {
                this.lastFetchAttemptedAt = Date.now();
            }),
            h(this, "handlePostConnectionOpen", () => {
                let e = (0, d.G)({ location: _.dr.QUESTS_MANAGER });
                window.clearTimeout(this.initialFetchTimerId),
                    window.clearTimeout(this.recurringFetchTimerId),
                    (this.recurringFetchTimerId = window.setInterval(() => {
                        Date.now() - this.lastFetchAttemptedAt > m && this._fetch("post_connect_recurring");
                    }, g));
                let t = Math.floor(Math.random() * E);
                this.initialFetchTimerId = window.setTimeout(() => {
                    !(Date.now() - t < l.Z.lastFetchedCurrentQuests) &&
                        (e || 0 === l.Z.lastFetchedCurrentQuests) &&
                        this._fetch("post_connect_initial");
                }, t);
            }),
            h(this, "handleRunningGamesChange", () => {
                this.instantiatedAt + y > Date.now() ||
                    l.Z.lastFetchedCurrentQuests + y > Date.now() ||
                    this._fetch("running_games");
            }),
            h(this, "handleUserSettingsProtoUpdate", (e) => {
                let { partial: t, settings: n, wasSaved: r } = e;
                !("localization" in n.proto) ||
                    !t ||
                    r ||
                    Date.now() - this.lastFetchedQuestForLocaleChangeAt <= b ||
                    ((this.lastFetchedQuestForLocaleChangeAt = Date.now()), this._fetch("user_settings"));
            }),
            h(this, "handleLogout", () => {
                window.clearTimeout(this.initialFetchTimerId),
                    window.clearTimeout(this.recurringFetchTimerId),
                    (this.lastFetchAttemptedAt = 0),
                    (this.lastFetchedQuestForLocaleChangeAt = 0);
            }),
            h(this, "actions", {
                QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                RUNNING_NON_GAMES_CHANGE: this.handleRunningGamesChange,
                USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
                LOGOUT: this.handleLogout,
            });
    }
}
let v = new O();
