"use strict";
n.d(t, { $P: () => F, F6: () => B, LV: () => P, WU: () => k, jD: () => G, wf: () => V });
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
    f = n(329308),
    h = n(859040),
    p = n(790271),
    E = n(741231),
    m = n(378570),
    g = n(345942),
    A = n(718446),
    I = n(95701),
    T = n(734057),
    S = n(189081),
    N = n(309010),
    y = n(967198),
    C = n(174459),
    v = n(988102),
    O = n(174768),
    R = n(652215),
    b = n(746080),
    D = n(758836);
let L = () => Promise.resolve();
L = n(113673).playApplication;
let w = Object.freeze({
        [_.AT.USER]: _.rD.USER,
        [_.AT.TEXT_CHANNEL]: _.rD.TEXT_CHANNEL,
        [_.AT.VOICE_CHANNEL]: _.rD.VOICE_CHANNEL,
        [_.AT.GUILD]: _.rD.GUILD,
        [_.AT.APPLICATION]: _.rD.APPLICATION,
    }),
    M = RegExp(`^${_.AT.USER}|${_.AT.TEXT_CHANNEL}|${_.AT.VOICE_CHANNEL}|\\${_.AT.GUILD}|\\${_.AT.APPLICATION}`);
function P(e) {
    let t,
        [n, i] = ((t = w[e.charAt(0)] ?? null), [e.replace(M, ""), t]);
    return { query: n, queryMode: i };
}
function x(e, t) {
    let { results: n, queryMode: i, query: r, maxQueryLength: s } = O.A.getProps(),
        a = y.A.getGuildId(),
        o = N.A.getChannelId(a),
        l = n[(0, _.Vv)(_.vB.DOWN, -1, n)],
        u = v.A.isEmail(r),
        c = v.A.isPhoneNumber(r),
        d = v.A.isUserTagLike(r),
        f = null != o && (0, b.jq)(o),
        h = (e) => (null == e ? null : e.type === _.rD.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type),
        p = {
            current_channel_id: f ? void 0 : o,
            current_channel_static_route: f ? o : void 0,
            current_guild_id: a,
            query_mode: i ?? "GENERAL",
            query_length: r.length,
            max_query_length: s,
            is_email_like: u,
            is_phone_like: c,
            is_username_like: d,
            query: u || c || d ? null : r,
            top_result_type: h(l),
            top_result_score: null != l ? l.score : null,
            num_results_total: O.A.getResultTotals(),
            num_results_users: O.A.getResultTotals(_.rD.USER),
            num_results_text_channels: O.A.getResultTotals(_.rD.TEXT_CHANNEL),
            num_results_voice_channels: O.A.getResultTotals(_.rD.VOICE_CHANNEL),
            num_results_guilds: O.A.getResultTotals(_.rD.GUILD),
            num_results_group_dms: O.A.getResultTotals(_.rD.GROUP_DM),
        };
    if (null != o) {
        let e = T.A.getChannel(o);
        p.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: i, record: r } = t;
        switch (((p.selected_type = h(t)), (p.selected_score = i), (p.selected_index = n.indexOf(t)), e)) {
            case _.rD.GUILD:
                p.selected_guild_id = r.id;
                break;
            case _.rD.TEXT_CHANNEL:
            case _.rD.VOICE_CHANNEL:
                r instanceof I.YB && (p.selected_guild_id = null != r.guild_id ? r.guild_id : null),
                    (p.selected_channel_id = r.id);
                break;
            case _.rD.GROUP_DM:
                p.selected_channel_id = r.id;
                break;
            case _.rD.USER:
                p.selected_user_id = r.id;
        }
    }
    C.default.track(e, p);
}
function U() {
    r.h.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
function k() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    !(function (e) {
        let t;
        if (O.A.isOpen()) return;
        let n = y.A.getGuildId(),
            i = N.A.getChannelId(n);
        if (null != i) {
            let e = T.A.getChannel(i);
            t = null != e ? e.type : null;
        }
        C.default.track(R.HAw.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: i,
            current_channel_type: t,
        });
    })(e),
        r.h.dispatch({ type: "QUICKSWITCHER_SHOW", ...P(t) });
}
function G() {
    x(R.HAw.QUICKSWITCHER_CLOSED), U();
}
function F(e) {
    r.h.dispatch({ type: "QUICKSWITCHER_SEARCH", ...P(e) });
}
function V(e) {
    r.h.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
}
function B(e) {
    let t,
        l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    U(), (0, i.closeAllModals)(), x(R.HAw.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: I, record: N } = e,
        y = { page: R.liQ.QUICK_SWITCHER };
    switch (I) {
        case _.rD.GUILD:
            (0, g.u)(N.id, { navigationReplace: !0 });
            break;
        case _.rD.TEXT_CHANNEL:
            null != (t = T.A.getChannel(N.id)) &&
                (0, m.iN)(t.id, { state: { analyticsSource: y }, navigationReplace: !0 });
            break;
        case _.rD.VOICE_CHANNEL:
            null != (t = T.A.getChannel(N.id)) &&
                (l ? a.A.updateChatOpen(N.id, !0) : c.default.selectVoiceChannel(N.id),
                (0, m.iN)(t.id, { state: { analyticsSource: y }, navigationReplace: !0 }));
            break;
        case _.rD.USER:
            s.A.openPrivateChannel({ recipientIds: [N.id], location: "Quickswitcher" }),
                o.A.channelListScrollTo(R.ME, T.A.getDMFromUserId(N.id));
            break;
        case _.rD.GROUP_DM:
            (0, m.iN)(N.id, { navigationReplace: !0 }), o.A.channelListScrollTo(R.ME, N.id);
            break;
        case _.rD.APPLICATION:
            let C = S.A.getActiveLibraryApplication(N.id);
            L(N.id, C, { analyticsParams: { source: R.ThZ.QUICK_SWITCHER, location: R.ThZ.QUICK_SWITCHER } });
            break;
        case _.rD.LINK:
            null != N.inviteCode ? H(N.inviteCode) : (0, E.A)(N.path, { navigationReplace: !0 });
            break;
        case _.rD.IN_APP_NAVIGATION:
            if (e.record.type === f.t1.SETTINGS) {
                let { openUserSettings: t } = n(858897),
                    i = (0, A.parseSettingsUrl)({ path: e.record.path });
                (0, A.trackParseSettingsUrl)(i, "quickswitcher"), t(i.target, { path: i.path });
            } else if (e.record.type === f.t1.PLAYGROUND) {
                if (!(0, p.mz)("quickswitcher_action")) return;
                {
                    let { PlaygroundStore: t } = n(848281),
                        i = e.record.collectionId ?? null;
                    t.setState({ selectedCollection: i, selectedStory: null }), (0, u.id)(R.zgK.COMPONENT_PLAYGROUND);
                }
            } else
                e.record.type === f.t1.SHOP_ORBS_TAB
                    ? (0, h.Cz)({
                          tab: D.G2.ORBS,
                          analyticsLocations: [d.A.QUICK_SWITCHER],
                          analyticsSource: d.A.QUICK_SWITCHER,
                      })
                    : (0, E.A)(N.path, { navigationReplace: !0 });
    }
    r.h.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
}
async function H(e) {
    let { invite: t } = await l.Ay.resolveInvite(e, "Quick Switcher");
    null != t && r.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: e, context: R.BRT.APP });
}
