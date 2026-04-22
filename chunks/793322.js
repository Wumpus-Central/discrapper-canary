"use strict";
n.d(t, { $P: () => V, F6: () => B, LV: () => P, WU: () => x, jD: () => G, wf: () => F });
var r = n(192308),
    i = n(73153),
    s = n(308528),
    a = n(367513),
    o = n(951001),
    l = n(846293),
    u = n(398590),
    d = n(956793),
    c = n(793574),
    _ = n(629357),
    f = n(329308),
    E = n(979286),
    h = n(790271),
    p = n(22007),
    m = n(378570),
    g = n(345942),
    A = n(718446),
    I = n(95701),
    T = n(734057),
    S = n(189081),
    y = n(309010),
    N = n(967198),
    O = n(954571),
    R = n(988102),
    v = n(174768),
    C = n(652215),
    b = n(746080),
    D = n(758836);
let L = () => Promise.resolve();
L = n(715671).playApplication;
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
        [n, r] = ((t = w[e.charAt(0)] ?? null), [e.replace(M, ""), t]);
    return { query: n, queryMode: r };
}
function U(e, t) {
    let { results: n, queryMode: r, query: i, maxQueryLength: s } = v.A.getProps(),
        a = N.A.getGuildId(),
        o = y.A.getChannelId(a),
        l = n[(0, _.Vv)(_.vB.DOWN, -1, n)],
        u = R.A.isEmail(i),
        d = R.A.isPhoneNumber(i),
        c = R.A.isUserTagLike(i),
        f = null != o && (0, b.jq)(o),
        E = (e) => (null == e ? null : e.type === _.rD.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type),
        h = {
            current_channel_id: f ? void 0 : o,
            current_channel_static_route: f ? o : void 0,
            current_guild_id: a,
            query_mode: r ?? "GENERAL",
            query_length: i.length,
            max_query_length: s,
            is_email_like: u,
            is_phone_like: d,
            is_username_like: c,
            query: u || d || c ? null : i,
            top_result_type: E(l),
            top_result_score: null != l ? l.score : null,
            num_results_total: v.A.getResultTotals(),
            num_results_users: v.A.getResultTotals(_.rD.USER),
            num_results_text_channels: v.A.getResultTotals(_.rD.TEXT_CHANNEL),
            num_results_voice_channels: v.A.getResultTotals(_.rD.VOICE_CHANNEL),
            num_results_guilds: v.A.getResultTotals(_.rD.GUILD),
            num_results_group_dms: v.A.getResultTotals(_.rD.GROUP_DM),
        };
    if (null != o) {
        let e = T.A.getChannel(o);
        h.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: r, record: i } = t;
        switch (((h.selected_type = E(t)), (h.selected_score = r), (h.selected_index = n.indexOf(t)), e)) {
            case _.rD.GUILD:
                h.selected_guild_id = i.id;
                break;
            case _.rD.TEXT_CHANNEL:
            case _.rD.VOICE_CHANNEL:
                i instanceof I.YB && (h.selected_guild_id = null != i.guild_id ? i.guild_id : null),
                    (h.selected_channel_id = i.id);
                break;
            case _.rD.GROUP_DM:
                h.selected_channel_id = i.id;
                break;
            case _.rD.USER:
                h.selected_user_id = i.id;
        }
    }
    O.default.track(e, h);
}
function k() {
    i.h.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
function x() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    !(function (e) {
        let t;
        if (v.A.isOpen()) return;
        let n = N.A.getGuildId(),
            r = y.A.getChannelId(n);
        if (null != r) {
            let e = T.A.getChannel(r);
            t = null != e ? e.type : null;
        }
        O.default.track(C.HAw.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: r,
            current_channel_type: t,
        });
    })(e),
        i.h.dispatch({ type: "QUICKSWITCHER_SHOW", ...P(t) });
}
function G() {
    U(C.HAw.QUICKSWITCHER_CLOSED), k();
}
function V(e) {
    i.h.dispatch({ type: "QUICKSWITCHER_SEARCH", ...P(e) });
}
function F(e) {
    i.h.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
}
function B(e) {
    let t,
        l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    k(), (0, r.closeAllModals)(), U(C.HAw.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: I, record: y } = e,
        N = { page: C.liQ.QUICK_SWITCHER };
    switch (I) {
        case _.rD.GUILD:
            (0, g.u)(y.id, { navigationReplace: !0 });
            break;
        case _.rD.TEXT_CHANNEL:
            null != (t = T.A.getChannel(y.id)) &&
                (0, m.iN)(t.id, { state: { analyticsSource: N }, navigationReplace: !0 });
            break;
        case _.rD.VOICE_CHANNEL:
            null != (t = T.A.getChannel(y.id)) &&
                (l ? a.A.updateChatOpen(y.id, !0) : d.default.selectVoiceChannel(y.id),
                (0, m.iN)(t.id, { state: { analyticsSource: N }, navigationReplace: !0 }));
            break;
        case _.rD.USER:
            s.A.openPrivateChannel({ recipientIds: [y.id], location: "Quickswitcher" }),
                o.A.channelListScrollTo(C.ME, T.A.getDMFromUserId(y.id));
            break;
        case _.rD.GROUP_DM:
            (0, m.iN)(y.id, { navigationReplace: !0 }), o.A.channelListScrollTo(C.ME, y.id);
            break;
        case _.rD.APPLICATION:
            let O = S.A.getActiveLibraryApplication(y.id);
            L(y.id, O, { analyticsParams: { source: C.ThZ.QUICK_SWITCHER, location: C.ThZ.QUICK_SWITCHER } });
            break;
        case _.rD.LINK:
            null != y.inviteCode ? H(y.inviteCode) : (0, p.A)(y.path, { navigationReplace: !0 });
            break;
        case _.rD.IN_APP_NAVIGATION:
            if (e.record.type === f.t1.SETTINGS) {
                let { openUserSettings: t } = n(858897),
                    r = (0, A.parseSettingsUrl)({ path: e.record.path });
                (0, A.trackParseSettingsUrl)(r, "quickswitcher"), t(r.target, { path: r.path });
            } else if (e.record.type === f.t1.PLAYGROUND) {
                if (!(0, h.mz)("quickswitcher_action")) return;
                {
                    let { PlaygroundStore: t } = n(3258),
                        r = e.record.collectionId ?? null;
                    t.setState({ selectedCollection: r, selectedStory: null }), (0, u.id)(C.zgK.COMPONENT_PLAYGROUND);
                }
            } else
                e.record.type === f.t1.SHOP_ORBS_TAB
                    ? (0, E.Cz)({
                          tab: D.G2.ORBS,
                          analyticsLocations: [c.A.QUICK_SWITCHER],
                          analyticsSource: c.A.QUICK_SWITCHER,
                      })
                    : (0, p.A)(y.path, { navigationReplace: !0 });
    }
    i.h.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
}
async function H(e) {
    let { invite: t } = await l.Ay.resolveInvite(e, "Quick Switcher");
    null != t && i.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: e, context: C.BRT.APP });
}
