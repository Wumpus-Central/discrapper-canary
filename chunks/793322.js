"use strict";
n.d(t, { $P: () => Y, F6: () => K, LV: () => F, WU: () => j, jD: () => H, wf: () => W });
var i = n(192308),
    r = n(228366),
    s = n(308528),
    a = n(367513),
    o = n(951001),
    l = n(376728),
    u = n(398590),
    c = n(730852),
    d = n(793574),
    _ = n(115718),
    h = n(329308),
    f = n(564064),
    p = n(790271),
    E = n(60465),
    m = n(409626),
    g = n(741231),
    A = n(378570),
    I = n(345942),
    T = n(718446),
    S = n(95701),
    y = n(734057),
    C = n(189081),
    N = n(309010),
    v = n(967198),
    R = n(174459),
    O = n(988102),
    b = n(363738),
    D = n(174768),
    L = n(652215),
    w = n(746080),
    M = n(758836);
let P = () => Promise.resolve();
P = n(113673).playApplication;
let x = Object.freeze({
        [_.AT.USER]: _.rD.USER,
        [_.AT.TEXT_CHANNEL]: _.rD.TEXT_CHANNEL,
        [_.AT.VOICE_CHANNEL]: _.rD.VOICE_CHANNEL,
        [_.AT.GUILD]: _.rD.GUILD,
    }),
    k = Object.freeze({ ...x, [_.AT.GAME_PROFILE]: _.rD.GAME_PROFILE }),
    U = RegExp(`^${_.AT.USER}|${_.AT.TEXT_CHANNEL}|${_.AT.VOICE_CHANNEL}|\\${_.AT.GUILD}`),
    G = RegExp(`^${_.AT.USER}|${_.AT.TEXT_CHANNEL}|${_.AT.VOICE_CHANNEL}|\\${_.AT.GUILD}|\\${_.AT.GAME_PROFILE}`);
function F(e) {
    let [t, n] = (function (e) {
        let { enabled: t } = b.s.getConfig({ location: "QuickSwitcherActionCreators.getQueryMode" }),
            n = (t ? k : x)[e.charAt(0)] ?? null;
        return [e.replace(t ? G : U, ""), n];
    })(e);
    return { query: t, queryMode: n };
}
function V(e, t) {
    let { results: n, queryMode: i, query: r, maxQueryLength: s } = D.A.getProps(),
        a = v.A.getGuildId(),
        o = N.A.getChannelId(a),
        l = n[(0, _.Vv)(_.vB.DOWN, -1, n)],
        u = O.A.isEmail(r),
        c = O.A.isPhoneNumber(r),
        d = O.A.isUserTagLike(r),
        h = null != o && (0, w.jq)(o);
    function f(e) {
        return null == e ? null : e.type === _.rD.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type;
    }
    let p = {
        current_channel_id: h ? void 0 : o,
        current_channel_static_route: h ? o : void 0,
        current_guild_id: a,
        query_mode: i ?? "GENERAL",
        query_length: r.length,
        max_query_length: s,
        is_email_like: u,
        is_phone_like: c,
        is_username_like: d,
        query: u || c || d ? null : r,
        top_result_type: f(l),
        top_result_score: null != l ? l.score : null,
        num_results_total: D.A.getResultTotals(),
        num_results_users: D.A.getResultTotals(_.rD.USER),
        num_results_text_channels: D.A.getResultTotals(_.rD.TEXT_CHANNEL),
        num_results_voice_channels: D.A.getResultTotals(_.rD.VOICE_CHANNEL),
        num_results_guilds: D.A.getResultTotals(_.rD.GUILD),
        num_results_group_dms: D.A.getResultTotals(_.rD.GROUP_DM),
    };
    if (null != o) {
        let e = y.A.getChannel(o);
        p.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: i, record: r } = t;
        switch (((p.selected_type = f(t)), (p.selected_score = i), (p.selected_index = n.indexOf(t)), e)) {
            case _.rD.GUILD:
                p.selected_guild_id = r.id;
                break;
            case _.rD.TEXT_CHANNEL:
            case _.rD.VOICE_CHANNEL:
                r instanceof S.YB && (p.selected_guild_id = null != r.guild_id ? r.guild_id : null),
                    (p.selected_channel_id = r.id);
                break;
            case _.rD.GROUP_DM:
                p.selected_channel_id = r.id;
                break;
            case _.rD.USER:
                p.selected_user_id = r.id;
        }
    }
    R.default.track(e, p);
}
function B() {
    r.h.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
function j() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    !(function (e) {
        let t;
        if (D.A.isOpen()) return;
        let n = v.A.getGuildId(),
            i = N.A.getChannelId(n);
        if (null != i) {
            let e = y.A.getChannel(i);
            t = null != e ? e.type : null;
        }
        R.default.track(L.HAw.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: i,
            current_channel_type: t,
        });
    })(e),
        r.h.dispatch({ type: "QUICKSWITCHER_SHOW", ...F(t) });
}
function H() {
    V(L.HAw.QUICKSWITCHER_CLOSED), B();
}
function Y(e) {
    r.h.dispatch({ type: "QUICKSWITCHER_SEARCH", ...F(e) });
}
function W(e) {
    r.h.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
}
function K(e) {
    let t,
        l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    B(), (0, i.closeAllModals)(), V(L.HAw.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: S, record: N } = e,
        v = { page: L.liQ.QUICK_SWITCHER };
    switch (S) {
        case _.rD.GUILD:
            (0, I.u)(N.id, { navigationReplace: !0 });
            break;
        case _.rD.TEXT_CHANNEL:
            null != (t = y.A.getChannel(N.id)) &&
                (0, A.iN)(t.id, { state: { analyticsSource: v }, navigationReplace: !0 });
            break;
        case _.rD.VOICE_CHANNEL:
            null != (t = y.A.getChannel(N.id)) &&
                (l ? a.A.updateChatOpen(N.id, !0) : c.default.selectVoiceChannel(N.id),
                (0, A.iN)(t.id, { state: { analyticsSource: v }, navigationReplace: !0 }));
            break;
        case _.rD.USER:
            s.A.openPrivateChannel({ recipientIds: [N.id], location: "Quickswitcher" }),
                o.A.channelListScrollTo(L.ME, y.A.getDMFromUserId(N.id));
            break;
        case _.rD.GROUP_DM:
            (0, A.iN)(N.id, { navigationReplace: !0 }), o.A.channelListScrollTo(L.ME, N.id);
            break;
        case _.rD.APPLICATION:
            let R = C.A.getActiveLibraryApplication(N.id);
            P(N.id, R, { analyticsParams: { source: L.ThZ.QUICK_SWITCHER, location: L.ThZ.QUICK_SWITCHER } });
            break;
        case _.rD.GAME_PROFILE:
            E.A.openGameProfileModal({
                gameId: N.id,
                gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: N.id },
                source: m.Ob.QuickSwitcher,
            });
            break;
        case _.rD.LINK:
            null != N.inviteCode ? $(N.inviteCode) : (0, g.A)(N.path, { navigationReplace: !0 });
            break;
        case _.rD.IN_APP_NAVIGATION:
            if (e.record.type === h.t1.SETTINGS) {
                let { openUserSettings: t } = n(766075),
                    i = (0, T.parseSettingsUrl)({ path: e.record.path });
                (0, T.trackParseSettingsUrl)(i, "quickswitcher"), t(i.target, { path: i.path });
            } else if (e.record.type === h.t1.PLAYGROUND) {
                if (!(0, p.mz)("quickswitcher_action")) return;
                {
                    let { PlaygroundStore: t } = n(764451),
                        i = e.record.collectionId ?? null;
                    t.setState({ selectedCollection: i, selectedStory: null }), (0, u.id)(L.zgK.COMPONENT_PLAYGROUND);
                }
            } else
                e.record.type === h.t1.SHOP_ORBS_TAB
                    ? (0, f.Cz)({
                          tab: M.G2.ORBS,
                          analyticsLocations: [d.A.QUICK_SWITCHER],
                          analyticsSource: d.A.QUICK_SWITCHER,
                      })
                    : (0, g.A)(N.path, { navigationReplace: !0 });
    }
    r.h.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
}
async function $(e) {
    let { invite: t } = await l.Ay.resolveInvite(e, "Quick Switcher");
    null != t && r.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: e, context: L.BRT.APP });
}
