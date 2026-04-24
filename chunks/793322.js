n.d(t, { $P: () => V, F6: () => k, LV: () => y, WU: () => w, jD: () => F, wf: () => H });
var i = n(192308),
    a = n(228366),
    r = n(308528),
    _ = n(367513),
    s = n(951001),
    l = n(376728),
    o = n(398590),
    E = n(956793),
    d = n(793574),
    c = n(115718),
    u = n(329308),
    I = n(693477),
    T = n(790271),
    A = n(22007),
    S = n(378570),
    N = n(345942),
    O = n(718446),
    R = n(95701),
    f = n(734057),
    C = n(189081),
    p = n(309010),
    D = n(967198),
    L = n(954571),
    m = n(988102),
    h = n(174768),
    g = n(652215),
    U = n(746080),
    b = n(758836);
let P = () => Promise.resolve();
P = n(715671).playApplication;
let M = Object.freeze({
        [c.AT.USER]: c.rD.USER,
        [c.AT.TEXT_CHANNEL]: c.rD.TEXT_CHANNEL,
        [c.AT.VOICE_CHANNEL]: c.rD.VOICE_CHANNEL,
        [c.AT.GUILD]: c.rD.GUILD,
        [c.AT.APPLICATION]: c.rD.APPLICATION,
    }),
    G = RegExp(`^${c.AT.USER}|${c.AT.TEXT_CHANNEL}|${c.AT.VOICE_CHANNEL}|\\${c.AT.GUILD}|\\${c.AT.APPLICATION}`);
function y(e) {
    let t,
        [n, i] = ((t = M[e.charAt(0)] ?? null), [e.replace(G, ""), t]);
    return { query: n, queryMode: i };
}
function v(e, t) {
    let { results: n, queryMode: i, query: a, maxQueryLength: r } = h.A.getProps(),
        _ = D.A.getGuildId(),
        s = p.A.getChannelId(_),
        l = n[(0, c.Vv)(c.vB.DOWN, -1, n)],
        o = m.A.isEmail(a),
        E = m.A.isPhoneNumber(a),
        d = m.A.isUserTagLike(a),
        u = null != s && (0, U.jq)(s),
        I = (e) => (null == e ? null : e.type === c.rD.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type),
        T = {
            current_channel_id: u ? void 0 : s,
            current_channel_static_route: u ? s : void 0,
            current_guild_id: _,
            query_mode: i ?? "GENERAL",
            query_length: a.length,
            max_query_length: r,
            is_email_like: o,
            is_phone_like: E,
            is_username_like: d,
            query: o || E || d ? null : a,
            top_result_type: I(l),
            top_result_score: null != l ? l.score : null,
            num_results_total: h.A.getResultTotals(),
            num_results_users: h.A.getResultTotals(c.rD.USER),
            num_results_text_channels: h.A.getResultTotals(c.rD.TEXT_CHANNEL),
            num_results_voice_channels: h.A.getResultTotals(c.rD.VOICE_CHANNEL),
            num_results_guilds: h.A.getResultTotals(c.rD.GUILD),
            num_results_group_dms: h.A.getResultTotals(c.rD.GROUP_DM),
        };
    if (null != s) {
        let e = f.A.getChannel(s);
        T.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: i, record: a } = t;
        switch (((T.selected_type = I(t)), (T.selected_score = i), (T.selected_index = n.indexOf(t)), e)) {
            case c.rD.GUILD:
                T.selected_guild_id = a.id;
                break;
            case c.rD.TEXT_CHANNEL:
            case c.rD.VOICE_CHANNEL:
                a instanceof R.YB && (T.selected_guild_id = null != a.guild_id ? a.guild_id : null),
                    (T.selected_channel_id = a.id);
                break;
            case c.rD.GROUP_DM:
                T.selected_channel_id = a.id;
                break;
            case c.rD.USER:
                T.selected_user_id = a.id;
        }
    }
    L.default.track(e, T);
}
function B() {
    a.h.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
function w() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    !(function (e) {
        let t;
        if (h.A.isOpen()) return;
        let n = D.A.getGuildId(),
            i = p.A.getChannelId(n);
        if (null != i) {
            let e = f.A.getChannel(i);
            t = null != e ? e.type : null;
        }
        L.default.track(g.HAw.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: i,
            current_channel_type: t,
        });
    })(e),
        a.h.dispatch({ type: "QUICKSWITCHER_SHOW", ...y(t) });
}
function F() {
    v(g.HAw.QUICKSWITCHER_CLOSED), B();
}
function V(e) {
    a.h.dispatch({ type: "QUICKSWITCHER_SEARCH", ...y(e) });
}
function H(e) {
    a.h.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
}
function k(e) {
    let t,
        l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    B(), (0, i.closeAllModals)(), v(g.HAw.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: R, record: p } = e,
        D = { page: g.liQ.QUICK_SWITCHER };
    switch (R) {
        case c.rD.GUILD:
            (0, N.u)(p.id, { navigationReplace: !0 });
            break;
        case c.rD.TEXT_CHANNEL:
            null != (t = f.A.getChannel(p.id)) &&
                (0, S.iN)(t.id, { state: { analyticsSource: D }, navigationReplace: !0 });
            break;
        case c.rD.VOICE_CHANNEL:
            null != (t = f.A.getChannel(p.id)) &&
                (l ? _.A.updateChatOpen(p.id, !0) : E.default.selectVoiceChannel(p.id),
                (0, S.iN)(t.id, { state: { analyticsSource: D }, navigationReplace: !0 }));
            break;
        case c.rD.USER:
            r.A.openPrivateChannel({ recipientIds: [p.id], location: "Quickswitcher" }),
                s.A.channelListScrollTo(g.ME, f.A.getDMFromUserId(p.id));
            break;
        case c.rD.GROUP_DM:
            (0, S.iN)(p.id, { navigationReplace: !0 }), s.A.channelListScrollTo(g.ME, p.id);
            break;
        case c.rD.APPLICATION:
            let L = C.A.getActiveLibraryApplication(p.id);
            P(p.id, L, { analyticsParams: { source: g.ThZ.QUICK_SWITCHER, location: g.ThZ.QUICK_SWITCHER } });
            break;
        case c.rD.LINK:
            null != p.inviteCode ? W(p.inviteCode) : (0, A.A)(p.path, { navigationReplace: !0 });
            break;
        case c.rD.IN_APP_NAVIGATION:
            if (e.record.type === u.t1.SETTINGS) {
                let { openUserSettings: t } = n(858897),
                    i = (0, O.parseSettingsUrl)({ path: e.record.path });
                (0, O.trackParseSettingsUrl)(i, "quickswitcher"), t(i.target, { path: i.path });
            } else if (e.record.type === u.t1.PLAYGROUND) {
                if (!(0, T.mz)("quickswitcher_action")) return;
                {
                    let { PlaygroundStore: t } = n(3258),
                        i = e.record.collectionId ?? null;
                    t.setState({ selectedCollection: i, selectedStory: null }), (0, o.id)(g.zgK.COMPONENT_PLAYGROUND);
                }
            } else
                e.record.type === u.t1.SHOP_ORBS_TAB
                    ? (0, I.Cz)({
                          tab: b.G2.ORBS,
                          analyticsLocations: [d.A.QUICK_SWITCHER],
                          analyticsSource: d.A.QUICK_SWITCHER,
                      })
                    : (0, A.A)(p.path, { navigationReplace: !0 });
    }
    a.h.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
}
async function W(e) {
    let { invite: t } = await l.Ay.resolveInvite(e, "Quick Switcher");
    null != t && a.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: e, context: g.BRT.APP });
}
