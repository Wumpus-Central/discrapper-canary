n.d(t, { $P: () => W, $U: () => $, F6: () => K, LV: () => k, WU: () => H, jD: () => j, wf: () => Y });
var i = n(192308),
    r = n(73153),
    a = n(308528),
    s = n(367513),
    l = n(951001),
    o = n(376728),
    d = n(398590),
    c = n(730852),
    u = n(793574),
    _ = n(115718),
    E = n(329308),
    A = n(815996),
    h = n(790271),
    f = n(60465),
    I = n(409626),
    p = n(741231),
    T = n(378570),
    m = n(345942),
    g = n(114129),
    S = n(442325),
    N = n(718446),
    C = n(95701),
    O = n(734057),
    R = n(189081),
    L = n(309010),
    y = n(967198),
    D = n(174459),
    v = n(988102),
    b = n(174768),
    P = n(652215),
    M = n(746080),
    U = n(758836);
let w = () => Promise.resolve();
w = n(113673).playApplication;
let G = Object.freeze({
        [_.AT.USER]: _.rD.USER,
        [_.AT.TEXT_CHANNEL]: _.rD.TEXT_CHANNEL,
        [_.AT.VOICE_CHANNEL]: _.rD.VOICE_CHANNEL,
        [_.AT.GUILD]: _.rD.GUILD,
        [_.AT.GAME_PROFILE]: _.rD.GAME_PROFILE,
    }),
    x = RegExp(`^${_.AT.USER}|${_.AT.TEXT_CHANNEL}|${_.AT.VOICE_CHANNEL}|\\${_.AT.GUILD}|\\${_.AT.GAME_PROFILE}`);
function k(e) {
    let [t, n] = (function (e) {
        let t = e.charAt(0);
        if (t === _.AT.USER && e.charAt(1) === _.AT.USER) return [e.slice(2), _.rD.USER_GLOBAL];
        let n = G[t] ?? null;
        return [e.replace(x, ""), n];
    })(e);
    return { query: t, queryMode: n };
}
function F(e, t) {
    let { results: n, queryMode: i, query: r, maxQueryLength: a } = b.A.getProps(),
        s = y.A.getGuildId(),
        l = L.Ay.getChannelId(s),
        o = n[(0, _.Vv)(_.vB.DOWN, -1, n)],
        d = v.A.isEmail(r),
        c = v.A.isPhoneNumber(r),
        u = v.A.isUserTagLike(r),
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
        num_results_total: b.A.getResultTotals(),
        num_results_users: b.A.getResultTotals(_.rD.USER),
        num_results_text_channels: b.A.getResultTotals(_.rD.TEXT_CHANNEL),
        num_results_voice_channels: b.A.getResultTotals(_.rD.VOICE_CHANNEL),
        num_results_guilds: b.A.getResultTotals(_.rD.GUILD),
        num_results_group_dms: b.A.getResultTotals(_.rD.GROUP_DM),
    };
    if (null != l) {
        let e = O.A.getChannel(l);
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
                (r instanceof C.YB && (h.selected_guild_id = null != r.guild_id ? r.guild_id : null),
                    (h.selected_channel_id = r.id));
                break;
            case _.rD.GROUP_DM:
                h.selected_channel_id = r.id;
                break;
            case _.rD.USER:
                h.selected_user_id = r.id;
        }
    }
    D.default.track(e, h);
}
let B = new Set([E.t1.SETTINGS, E.t1.PLAYGROUND, E.t1.SHOP_ORBS_TAB]);
function V() {
    r.h.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
function H() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    (!(function (e) {
        let t;
        if (b.A.isOpen()) return;
        let n = y.A.getGuildId(),
            i = L.Ay.getChannelId(n);
        if (null != i) {
            let e = O.A.getChannel(i);
            t = null != e ? e.type : null;
        }
        D.default.track(P.HAw.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: i,
            current_channel_type: t,
        });
    })(e),
        r.h.dispatch({ type: "QUICKSWITCHER_SHOW", ...k(t) }));
}
function j() {
    (F(P.HAw.QUICKSWITCHER_CLOSED), V());
}
function W(e) {
    r.h.dispatch({ type: "QUICKSWITCHER_SEARCH", ...k(e) });
}
function Y(e) {
    r.h.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
}
function K(e) {
    let t,
        o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (
        (V(),
        (0, i.closeAllModals)(),
        F(P.HAw.QUICKSWITCHER_RESULT_SELECTED, e),
        (function (e) {
            if (!S.A.isEnabled()) return !1;
            let t = null;
            switch (e.type) {
                case _.rD.TEXT_CHANNEL:
                case _.rD.GROUP_DM:
                case _.rD.DM:
                    t = S.A.getTabForChannel(e.record.id);
                    break;
                case _.rD.USER: {
                    let n = O.A.getDMFromUserId(e.record.id);
                    t = null != n ? S.A.getTabForChannel(n) : null;
                    break;
                }
                case _.rD.IN_APP_NAVIGATION:
                    B.has(e.record.type) || (t = S.A.getTabForRoute(e.record.path));
            }
            return null != t && ((0, g.ZD)(t.id), !0);
        })(e))
    )
        return void r.h.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
    let { type: C, record: L } = e,
        y = { page: P.liQ.QUICK_SWITCHER };
    switch (C) {
        case _.rD.GUILD:
            (0, m.u)(L.id, { navigationReplace: !0 });
            break;
        case _.rD.TEXT_CHANNEL:
            null != (t = O.A.getChannel(L.id)) &&
                (0, T.iN)(t.id, { state: { analyticsSource: y }, navigationReplace: !0 });
            break;
        case _.rD.VOICE_CHANNEL: {
            if (null == (t = O.A.getChannel(L.id))) break;
            o ? s.A.updateChatOpen(L.id, !0) : c.default.selectVoiceChannel(L.id);
            let e = S.A.isEnabled() ? S.A.getTabForChannel(L.id) : null;
            null != e ? (0, g.ZD)(e.id, !o) : (0, T.iN)(t.id, { state: { analyticsSource: y }, navigationReplace: !0 });
            break;
        }
        case _.rD.USER:
            (a.A.openPrivateChannel({ recipientIds: [L.id], location: "Quickswitcher" }),
                l.A.channelListScrollTo(P.ME, O.A.getDMFromUserId(L.id)));
            break;
        case _.rD.GROUP_DM:
            ((0, T.iN)(L.id, { navigationReplace: !0 }), l.A.channelListScrollTo(P.ME, L.id));
            break;
        case _.rD.APPLICATION:
            let D = R.A.getActiveLibraryApplication(L.id);
            w(L.id, D, { analyticsParams: { source: P.ThZ.QUICK_SWITCHER, location: P.ThZ.QUICK_SWITCHER } });
            break;
        case _.rD.GAME_PROFILE:
            f.default.openGameProfileModal({
                gameId: L.id,
                gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: L.id },
                source: I.GameProfileSources.QuickSwitcher,
            });
            break;
        case _.rD.LINK:
            null != L.inviteCode ? z(L.inviteCode) : (0, p.A)(L.path, { navigationReplace: !0 });
            break;
        case _.rD.IN_APP_NAVIGATION:
            if (e.record.type === E.t1.SETTINGS) {
                let { openUserSettings: t } = n(766075),
                    i = (0, N.parseSettingsUrl)({ path: e.record.path });
                ((0, N.trackParseSettingsUrl)(i, "quickswitcher"), t(i.target, { path: i.path }));
            } else if (e.record.type === E.t1.PLAYGROUND) {
                if (!(0, h.mz)("quickswitcher_action")) return;
                {
                    let { PlaygroundStore: t } = n(764451),
                        i = e.record.collectionId ?? null;
                    (t.setState({ selectedCollection: i, selectedStory: null }), (0, d.id)(P.zgK.COMPONENT_PLAYGROUND));
                }
            } else
                e.record.type === E.t1.SHOP_ORBS_TAB
                    ? (0, A.Cz)({
                          tab: U.G2.ORBS,
                          analyticsLocations: [u.A.QUICK_SWITCHER],
                          analyticsSource: u.A.QUICK_SWITCHER,
                      })
                    : (0, p.A)(L.path, { navigationReplace: !0 });
    }
    r.h.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
}
function $(e) {
    let { type: t } = e;
    function n() {
        (V(),
            (0, i.closeAllModals)(),
            F(P.HAw.QUICKSWITCHER_RESULT_SELECTED, e),
            r.h.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e }));
    }
    switch (t) {
        case _.rD.TEXT_CHANNEL:
        case _.rD.VOICE_CHANNEL:
        case _.rD.GROUP_DM:
        case _.rD.DM: {
            var s, l;
            let t = O.A.getChannel(e.record.id);
            if (null == t) return void K(e);
            ((s = t.id), (l = t.getGuildId() ?? null), n(), (0, g.D5)(s, l));
            return;
        }
        case _.rD.USER:
            (n(),
                (async () => {
                    let t = await a.A.openPrivateChannel({
                        recipientIds: [e.record.id],
                        location: "Quickswitcher",
                        navigateToChannel: !1,
                    });
                    (0, g.D5)(t, null);
                })().catch(() => {}));
            return;
        default:
            K(e);
    }
}
async function z(e) {
    let { invite: t } = await o.Ay.resolveInvite(e, "Quick Switcher");
    null != t && r.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: e, context: P.BRT.APP });
}
