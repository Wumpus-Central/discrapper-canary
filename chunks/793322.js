"use strict";
n.d(t, { $P: () => W, F6: () => K, LV: () => F, WU: () => H, jD: () => j, wf: () => Y });
var i = n(192308),
    r = n(228366),
    a = n(308528),
    s = n(367513),
    l = n(951001),
    o = n(376728),
    d = n(398590),
    c = n(730852),
    u = n(793574),
    _ = n(115718),
    E = n(329308),
    A = n(662388),
    h = n(790271),
    I = n(60465),
    f = n(409626),
    p = n(741231),
    T = n(378570),
    m = n(345942),
    g = n(718446),
    S = n(95701),
    N = n(734057),
    C = n(189081),
    R = n(309010),
    O = n(967198),
    L = n(174459),
    y = n(988102),
    D = n(363738),
    v = n(174768),
    b = n(652215),
    M = n(746080),
    P = n(758836);
let U = () => Promise.resolve();
U = n(113673).playApplication;
let w = Object.freeze({
        [_.AT.USER]: _.rD.USER,
        [_.AT.TEXT_CHANNEL]: _.rD.TEXT_CHANNEL,
        [_.AT.VOICE_CHANNEL]: _.rD.VOICE_CHANNEL,
        [_.AT.GUILD]: _.rD.GUILD,
    }),
    G = Object.freeze({ ...w, [_.AT.GAME_PROFILE]: _.rD.GAME_PROFILE }),
    x = RegExp(`^${_.AT.USER}|${_.AT.TEXT_CHANNEL}|${_.AT.VOICE_CHANNEL}|\\${_.AT.GUILD}`),
    k = RegExp(`^${_.AT.USER}|${_.AT.TEXT_CHANNEL}|${_.AT.VOICE_CHANNEL}|\\${_.AT.GUILD}|\\${_.AT.GAME_PROFILE}`);
function F(e) {
    let [t, n] = (function (e) {
        let { enabled: t } = D.s.getConfig({ location: "QuickSwitcherActionCreators.getQueryMode" }),
            n = (t ? G : w)[e.charAt(0)] ?? null;
        return [e.replace(t ? k : x, ""), n];
    })(e);
    return { query: t, queryMode: n };
}
function V(e, t) {
    let { results: n, queryMode: i, query: r, maxQueryLength: a } = v.A.getProps(),
        s = O.A.getGuildId(),
        l = R.Ay.getChannelId(s),
        o = n[(0, _.Vv)(_.vB.DOWN, -1, n)],
        d = y.A.isEmail(r),
        c = y.A.isPhoneNumber(r),
        u = y.A.isUserTagLike(r),
        E = null != l && (0, M.jq)(l);
    function A(e) {
        return null == e ? null : e.type === _.rD.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type;
    }
    let h = {
        current_channel_id: E ? void 0 : l,
        current_channel_static_route: E ? l : void 0,
        current_guild_id: s,
        query_mode: i ?? "GENERAL",
        query_length: r.length,
        max_query_length: a,
        is_email_like: d,
        is_phone_like: c,
        is_username_like: u,
        query: d || c || u ? null : r,
        top_result_type: A(o),
        top_result_score: null != o ? o.score : null,
        num_results_total: v.A.getResultTotals(),
        num_results_users: v.A.getResultTotals(_.rD.USER),
        num_results_text_channels: v.A.getResultTotals(_.rD.TEXT_CHANNEL),
        num_results_voice_channels: v.A.getResultTotals(_.rD.VOICE_CHANNEL),
        num_results_guilds: v.A.getResultTotals(_.rD.GUILD),
        num_results_group_dms: v.A.getResultTotals(_.rD.GROUP_DM),
    };
    if (null != l) {
        let e = N.A.getChannel(l);
        h.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: i, record: r } = t;
        switch (((h.selected_type = A(t)), (h.selected_score = i), (h.selected_index = n.indexOf(t)), e)) {
            case _.rD.GUILD:
                h.selected_guild_id = r.id;
                break;
            case _.rD.TEXT_CHANNEL:
            case _.rD.VOICE_CHANNEL:
                r instanceof S.YB && (h.selected_guild_id = null != r.guild_id ? r.guild_id : null),
                    (h.selected_channel_id = r.id);
                break;
            case _.rD.GROUP_DM:
                h.selected_channel_id = r.id;
                break;
            case _.rD.USER:
                h.selected_user_id = r.id;
        }
    }
    L.default.track(e, h);
}
function B() {
    r.h.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
function H() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    !(function (e) {
        let t;
        if (v.A.isOpen()) return;
        let n = O.A.getGuildId(),
            i = R.Ay.getChannelId(n);
        if (null != i) {
            let e = N.A.getChannel(i);
            t = null != e ? e.type : null;
        }
        L.default.track(b.HAw.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: i,
            current_channel_type: t,
        });
    })(e),
        r.h.dispatch({ type: "QUICKSWITCHER_SHOW", ...F(t) });
}
function j() {
    V(b.HAw.QUICKSWITCHER_CLOSED), B();
}
function W(e) {
    r.h.dispatch({ type: "QUICKSWITCHER_SEARCH", ...F(e) });
}
function Y(e) {
    r.h.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
}
function K(e) {
    let t,
        o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    B(), (0, i.closeAllModals)(), V(b.HAw.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: S, record: R } = e,
        O = { page: b.liQ.QUICK_SWITCHER };
    switch (S) {
        case _.rD.GUILD:
            (0, m.u)(R.id, { navigationReplace: !0 });
            break;
        case _.rD.TEXT_CHANNEL:
            null != (t = N.A.getChannel(R.id)) &&
                (0, T.iN)(t.id, { state: { analyticsSource: O }, navigationReplace: !0 });
            break;
        case _.rD.VOICE_CHANNEL:
            null != (t = N.A.getChannel(R.id)) &&
                (o ? s.A.updateChatOpen(R.id, !0) : c.default.selectVoiceChannel(R.id),
                (0, T.iN)(t.id, { state: { analyticsSource: O }, navigationReplace: !0 }));
            break;
        case _.rD.USER:
            a.A.openPrivateChannel({ recipientIds: [R.id], location: "Quickswitcher" }),
                l.A.channelListScrollTo(b.ME, N.A.getDMFromUserId(R.id));
            break;
        case _.rD.GROUP_DM:
            (0, T.iN)(R.id, { navigationReplace: !0 }), l.A.channelListScrollTo(b.ME, R.id);
            break;
        case _.rD.APPLICATION:
            let L = C.A.getActiveLibraryApplication(R.id);
            U(R.id, L, { analyticsParams: { source: b.ThZ.QUICK_SWITCHER, location: b.ThZ.QUICK_SWITCHER } });
            break;
        case _.rD.GAME_PROFILE:
            I.default.openGameProfileModal({
                gameId: R.id,
                gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: R.id },
                source: f.GameProfileSources.QuickSwitcher,
            });
            break;
        case _.rD.LINK:
            null != R.inviteCode ? $(R.inviteCode) : (0, p.A)(R.path, { navigationReplace: !0 });
            break;
        case _.rD.IN_APP_NAVIGATION:
            if (e.record.type === E.t1.SETTINGS) {
                let { openUserSettings: t } = n(766075),
                    i = (0, g.parseSettingsUrl)({ path: e.record.path });
                (0, g.trackParseSettingsUrl)(i, "quickswitcher"), t(i.target, { path: i.path });
            } else if (e.record.type === E.t1.PLAYGROUND) {
                if (!(0, h.mz)("quickswitcher_action")) return;
                {
                    let { PlaygroundStore: t } = n(764451),
                        i = e.record.collectionId ?? null;
                    t.setState({ selectedCollection: i, selectedStory: null }), (0, d.id)(b.zgK.COMPONENT_PLAYGROUND);
                }
            } else
                e.record.type === E.t1.SHOP_ORBS_TAB
                    ? (0, A.Cz)({
                          tab: P.G2.ORBS,
                          analyticsLocations: [u.A.QUICK_SWITCHER],
                          analyticsSource: u.A.QUICK_SWITCHER,
                      })
                    : (0, p.A)(R.path, { navigationReplace: !0 });
    }
    r.h.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
}
async function $(e) {
    let { invite: t } = await o.Ay.resolveInvite(e, "Quick Switcher");
    null != t && r.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: e, context: b.BRT.APP });
}
