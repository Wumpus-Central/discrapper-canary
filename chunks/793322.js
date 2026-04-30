n.d(t, { $P: () => B, F6: () => k, LV: () => y, WU: () => x, jD: () => V, wf: () => F });
var i = n(192308),
    a = n(228366),
    r = n(308528),
    s = n(367513),
    l = n(951001),
    o = n(376728),
    d = n(398590),
    c = n(956793),
    _ = n(793574),
    E = n(115718),
    u = n(329308),
    A = n(693477),
    I = n(790271),
    T = n(22007),
    h = n(378570),
    S = n(345942),
    N = n(718446),
    f = n(95701),
    p = n(734057),
    m = n(189081),
    O = n(309010),
    C = n(967198),
    R = n(954571),
    g = n(988102),
    L = n(174768),
    D = n(652215),
    b = n(746080),
    M = n(758836);
let P = () => Promise.resolve();
P = n(715671).playApplication;
let U = Object.freeze({
        [E.AT.USER]: E.rD.USER,
        [E.AT.TEXT_CHANNEL]: E.rD.TEXT_CHANNEL,
        [E.AT.VOICE_CHANNEL]: E.rD.VOICE_CHANNEL,
        [E.AT.GUILD]: E.rD.GUILD,
        [E.AT.APPLICATION]: E.rD.APPLICATION,
    }),
    v = RegExp(`^${E.AT.USER}|${E.AT.TEXT_CHANNEL}|${E.AT.VOICE_CHANNEL}|\\${E.AT.GUILD}|\\${E.AT.APPLICATION}`);
function y(e) {
    let t,
        [n, i] = ((t = U[e.charAt(0)] ?? null), [e.replace(v, ""), t]);
    return { query: n, queryMode: i };
}
function G(e, t) {
    let { results: n, queryMode: i, query: a, maxQueryLength: r } = L.A.getProps(),
        s = C.A.getGuildId(),
        l = O.A.getChannelId(s),
        o = n[(0, E.Vv)(E.vB.DOWN, -1, n)],
        d = g.A.isEmail(a),
        c = g.A.isPhoneNumber(a),
        _ = g.A.isUserTagLike(a),
        u = null != l && (0, b.jq)(l),
        A = (e) => (null == e ? null : e.type === E.rD.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type),
        I = {
            current_channel_id: u ? void 0 : l,
            current_channel_static_route: u ? l : void 0,
            current_guild_id: s,
            query_mode: i ?? "GENERAL",
            query_length: a.length,
            max_query_length: r,
            is_email_like: d,
            is_phone_like: c,
            is_username_like: _,
            query: d || c || _ ? null : a,
            top_result_type: A(o),
            top_result_score: null != o ? o.score : null,
            num_results_total: L.A.getResultTotals(),
            num_results_users: L.A.getResultTotals(E.rD.USER),
            num_results_text_channels: L.A.getResultTotals(E.rD.TEXT_CHANNEL),
            num_results_voice_channels: L.A.getResultTotals(E.rD.VOICE_CHANNEL),
            num_results_guilds: L.A.getResultTotals(E.rD.GUILD),
            num_results_group_dms: L.A.getResultTotals(E.rD.GROUP_DM),
        };
    if (null != l) {
        let e = p.A.getChannel(l);
        I.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: i, record: a } = t;
        switch (((I.selected_type = A(t)), (I.selected_score = i), (I.selected_index = n.indexOf(t)), e)) {
            case E.rD.GUILD:
                I.selected_guild_id = a.id;
                break;
            case E.rD.TEXT_CHANNEL:
            case E.rD.VOICE_CHANNEL:
                a instanceof f.YB && (I.selected_guild_id = null != a.guild_id ? a.guild_id : null),
                    (I.selected_channel_id = a.id);
                break;
            case E.rD.GROUP_DM:
                I.selected_channel_id = a.id;
                break;
            case E.rD.USER:
                I.selected_user_id = a.id;
        }
    }
    R.default.track(e, I);
}
function w() {
    a.h.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
function x() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    !(function (e) {
        let t;
        if (L.A.isOpen()) return;
        let n = C.A.getGuildId(),
            i = O.A.getChannelId(n);
        if (null != i) {
            let e = p.A.getChannel(i);
            t = null != e ? e.type : null;
        }
        R.default.track(D.HAw.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: i,
            current_channel_type: t,
        });
    })(e),
        a.h.dispatch({ type: "QUICKSWITCHER_SHOW", ...y(t) });
}
function V() {
    G(D.HAw.QUICKSWITCHER_CLOSED), w();
}
function B(e) {
    a.h.dispatch({ type: "QUICKSWITCHER_SEARCH", ...y(e) });
}
function F(e) {
    a.h.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
}
function k(e) {
    let t,
        o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    w(), (0, i.closeAllModals)(), G(D.HAw.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: f, record: O } = e,
        C = { page: D.liQ.QUICK_SWITCHER };
    switch (f) {
        case E.rD.GUILD:
            (0, S.u)(O.id, { navigationReplace: !0 });
            break;
        case E.rD.TEXT_CHANNEL:
            null != (t = p.A.getChannel(O.id)) &&
                (0, h.iN)(t.id, { state: { analyticsSource: C }, navigationReplace: !0 });
            break;
        case E.rD.VOICE_CHANNEL:
            null != (t = p.A.getChannel(O.id)) &&
                (o ? s.A.updateChatOpen(O.id, !0) : c.default.selectVoiceChannel(O.id),
                (0, h.iN)(t.id, { state: { analyticsSource: C }, navigationReplace: !0 }));
            break;
        case E.rD.USER:
            r.A.openPrivateChannel({ recipientIds: [O.id], location: "Quickswitcher" }),
                l.A.channelListScrollTo(D.ME, p.A.getDMFromUserId(O.id));
            break;
        case E.rD.GROUP_DM:
            (0, h.iN)(O.id, { navigationReplace: !0 }), l.A.channelListScrollTo(D.ME, O.id);
            break;
        case E.rD.APPLICATION:
            let R = m.A.getActiveLibraryApplication(O.id);
            P(O.id, R, { analyticsParams: { source: D.ThZ.QUICK_SWITCHER, location: D.ThZ.QUICK_SWITCHER } });
            break;
        case E.rD.LINK:
            null != O.inviteCode ? H(O.inviteCode) : (0, T.A)(O.path, { navigationReplace: !0 });
            break;
        case E.rD.IN_APP_NAVIGATION:
            if (e.record.type === u.t1.SETTINGS) {
                let { openUserSettings: t } = n(858897),
                    i = (0, N.parseSettingsUrl)({ path: e.record.path });
                (0, N.trackParseSettingsUrl)(i, "quickswitcher"), t(i.target, { path: i.path });
            } else if (e.record.type === u.t1.PLAYGROUND) {
                if (!(0, I.mz)("quickswitcher_action")) return;
                {
                    let { PlaygroundStore: t } = n(3258),
                        i = e.record.collectionId ?? null;
                    t.setState({ selectedCollection: i, selectedStory: null }), (0, d.id)(D.zgK.COMPONENT_PLAYGROUND);
                }
            } else
                e.record.type === u.t1.SHOP_ORBS_TAB
                    ? (0, A.Cz)({
                          tab: M.G2.ORBS,
                          analyticsLocations: [_.A.QUICK_SWITCHER],
                          analyticsSource: _.A.QUICK_SWITCHER,
                      })
                    : (0, T.A)(O.path, { navigationReplace: !0 });
    }
    a.h.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
}
async function H(e) {
    let { invite: t } = await o.Ay.resolveInvite(e, "Quick Switcher");
    null != t && a.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: e, context: D.BRT.APP });
}
