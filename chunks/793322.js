"use strict";
n.d(t, { $P: () => H, $U: () => Y, F6: () => W, LV: () => x, WU: () => V, jD: () => B, wf: () => j });
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
    A = n(839534),
    h = n(790271),
    I = n(60465),
    f = n(409626),
    p = n(741231),
    T = n(378570),
    m = n(345942),
    g = n(114129),
    S = n(718446),
    N = n(95701),
    C = n(734057),
    R = n(189081),
    O = n(309010),
    L = n(967198),
    y = n(174459),
    D = n(988102),
    v = n(174768),
    b = n(652215),
    M = n(746080),
    P = n(758836);
let U = () => Promise.resolve();
U = n(113673).playApplication;
let w = Object.freeze({
        ...Object.freeze({
            [_.AT.USER]: _.rD.USER,
            [_.AT.TEXT_CHANNEL]: _.rD.TEXT_CHANNEL,
            [_.AT.VOICE_CHANNEL]: _.rD.VOICE_CHANNEL,
            [_.AT.GUILD]: _.rD.GUILD,
        }),
        [_.AT.GAME_PROFILE]: _.rD.GAME_PROFILE,
    }),
    G = RegExp(`^${_.AT.USER}|${_.AT.TEXT_CHANNEL}|${_.AT.VOICE_CHANNEL}|\\${_.AT.GUILD}|\\${_.AT.GAME_PROFILE}`);
function x(e) {
    let t,
        [n, i] = ((t = w[e.charAt(0)] ?? null), [e.replace(G, ""), t]);
    return { query: n, queryMode: i };
}
function k(e, t) {
    let { results: n, queryMode: i, query: r, maxQueryLength: a } = v.A.getProps(),
        s = L.A.getGuildId(),
        l = O.Ay.getChannelId(s),
        o = n[(0, _.Vv)(_.vB.DOWN, -1, n)],
        d = D.A.isEmail(r),
        c = D.A.isPhoneNumber(r),
        u = D.A.isUserTagLike(r),
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
        let e = C.A.getChannel(l);
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
                r instanceof N.YB && (h.selected_guild_id = null != r.guild_id ? r.guild_id : null),
                    (h.selected_channel_id = r.id);
                break;
            case _.rD.GROUP_DM:
                h.selected_channel_id = r.id;
                break;
            case _.rD.USER:
                h.selected_user_id = r.id;
        }
    }
    y.default.track(e, h);
}
function F() {
    r.h.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
function V() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    !(function (e) {
        let t;
        if (v.A.isOpen()) return;
        let n = L.A.getGuildId(),
            i = O.Ay.getChannelId(n);
        if (null != i) {
            let e = C.A.getChannel(i);
            t = null != e ? e.type : null;
        }
        y.default.track(b.HAw.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: i,
            current_channel_type: t,
        });
    })(e),
        r.h.dispatch({ type: "QUICKSWITCHER_SHOW", ...x(t) });
}
function B() {
    k(b.HAw.QUICKSWITCHER_CLOSED), F();
}
function H(e) {
    r.h.dispatch({ type: "QUICKSWITCHER_SEARCH", ...x(e) });
}
function j(e) {
    r.h.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
}
function W(e) {
    let t,
        o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    F(), (0, i.closeAllModals)(), k(b.HAw.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: g, record: N } = e,
        O = { page: b.liQ.QUICK_SWITCHER };
    switch (g) {
        case _.rD.GUILD:
            (0, m.u)(N.id, { navigationReplace: !0 });
            break;
        case _.rD.TEXT_CHANNEL:
            null != (t = C.A.getChannel(N.id)) &&
                (0, T.iN)(t.id, { state: { analyticsSource: O }, navigationReplace: !0 });
            break;
        case _.rD.VOICE_CHANNEL:
            null != (t = C.A.getChannel(N.id)) &&
                (o ? s.A.updateChatOpen(N.id, !0) : c.default.selectVoiceChannel(N.id),
                (0, T.iN)(t.id, { state: { analyticsSource: O }, navigationReplace: !0 }));
            break;
        case _.rD.USER:
            a.A.openPrivateChannel({ recipientIds: [N.id], location: "Quickswitcher" }),
                l.A.channelListScrollTo(b.ME, C.A.getDMFromUserId(N.id));
            break;
        case _.rD.GROUP_DM:
            (0, T.iN)(N.id, { navigationReplace: !0 }), l.A.channelListScrollTo(b.ME, N.id);
            break;
        case _.rD.APPLICATION:
            let L = R.A.getActiveLibraryApplication(N.id);
            U(N.id, L, { analyticsParams: { source: b.ThZ.QUICK_SWITCHER, location: b.ThZ.QUICK_SWITCHER } });
            break;
        case _.rD.GAME_PROFILE:
            I.default.openGameProfileModal({
                gameId: N.id,
                gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: N.id },
                source: f.GameProfileSources.QuickSwitcher,
            });
            break;
        case _.rD.LINK:
            null != N.inviteCode ? K(N.inviteCode) : (0, p.A)(N.path, { navigationReplace: !0 });
            break;
        case _.rD.IN_APP_NAVIGATION:
            if (e.record.type === E.t1.SETTINGS) {
                let { openUserSettings: t } = n(766075),
                    i = (0, S.parseSettingsUrl)({ path: e.record.path });
                (0, S.trackParseSettingsUrl)(i, "quickswitcher"), t(i.target, { path: i.path });
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
                    : (0, p.A)(N.path, { navigationReplace: !0 });
    }
    r.h.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
}
function Y(e) {
    let { type: t } = e;
    function n() {
        F(),
            (0, i.closeAllModals)(),
            k(b.HAw.QUICKSWITCHER_RESULT_SELECTED, e),
            r.h.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
    }
    switch (t) {
        case _.rD.TEXT_CHANNEL:
        case _.rD.VOICE_CHANNEL:
        case _.rD.GROUP_DM:
        case _.rD.DM: {
            var s, l;
            let t = C.A.getChannel(e.record.id);
            if (null == t) return void W(e);
            (s = t.id), (l = t.getGuildId() ?? null), n(), (0, g.D5)(s, l);
            return;
        }
        case _.rD.USER:
            n(),
                (async () => {
                    let t = await a.A.openPrivateChannel({
                        recipientIds: [e.record.id],
                        location: "Quickswitcher",
                        navigateToChannel: !1,
                    });
                    (0, g.D5)(t, null);
                })().catch(() => {});
            return;
        default:
            W(e);
    }
}
async function K(e) {
    let { invite: t } = await o.Ay.resolveInvite(e, "Quick Switcher");
    null != t && r.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: e, context: b.BRT.APP });
}
