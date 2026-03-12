"use strict";
n.d(t, { $P: () => V, F6: () => H, LV: () => x, WU: () => G, jD: () => F, wf: () => B });
var r = n(397927),
    i = n(73153),
    s = n(308528),
    a = n(367513),
    o = n(951001),
    l = n(398590),
    u = n(956793),
    c = n(793574),
    d = n(629357),
    _ = n(329308),
    f = n(979286),
    p = n(790271),
    h = n(22007),
    m = n(378570),
    E = n(345942),
    g = n(849823),
    A = n(95701),
    I = n(734057),
    T = n(189081),
    S = n(309010),
    y = n(967198),
    v = n(954571),
    N = n(988102),
    C = n(174768),
    R = n(652215),
    O = n(746080),
    b = n(758836);
let D = () => Promise.resolve();
D = n(715671).playApplication;
let L = Object.freeze({
        [d.AT.USER]: d.rD.USER,
        [d.AT.TEXT_CHANNEL]: d.rD.TEXT_CHANNEL,
        [d.AT.VOICE_CHANNEL]: d.rD.VOICE_CHANNEL,
        [d.AT.GUILD]: d.rD.GUILD,
        [d.AT.APPLICATION]: d.rD.APPLICATION,
    }),
    w = RegExp(`^${d.AT.USER}|${d.AT.TEXT_CHANNEL}|${d.AT.VOICE_CHANNEL}|\\${d.AT.GUILD}|\\${d.AT.APPLICATION}`);
function M(e) {
    let t = L[e.charAt(0)] ?? null;
    return [e.replace(w, ""), t];
}
function x(e) {
    let [t, n] = M(e);
    return { query: t, queryMode: n };
}
function P(e) {
    let t;
    if (C.A.isOpen()) return;
    let n = y.A.getGuildId(),
        r = S.A.getChannelId(n);
    if (null != r) {
        let e = I.A.getChannel(r);
        t = null != e ? e.type : null;
    }
    v.default.track(R.HAw.QUICKSWITCHER_OPENED, {
        source: e,
        current_guild_id: n,
        current_channel_id: r,
        current_channel_type: t,
    });
}
function k(e, t) {
    let { results: n, queryMode: r, query: i, maxQueryLength: s } = C.A.getProps(),
        a = y.A.getGuildId(),
        o = S.A.getChannelId(a),
        l = n[(0, d.Vv)(d.vB.DOWN, -1, n)],
        u = N.A.isEmail(i),
        c = N.A.isPhoneNumber(i),
        _ = N.A.isUserTagLike(i),
        f = null != o && (0, O.jq)(o),
        p = (e) => (null == e ? null : e.type === d.rD.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type),
        h = {
            current_channel_id: f ? void 0 : o,
            current_channel_static_route: f ? o : void 0,
            current_guild_id: a,
            query_mode: r ?? "GENERAL",
            query_length: i.length,
            max_query_length: s,
            is_email_like: u,
            is_phone_like: c,
            is_username_like: _,
            query: u || c || _ ? null : i,
            top_result_type: p(l),
            top_result_score: null != l ? l.score : null,
            num_results_total: C.A.getResultTotals(),
            num_results_users: C.A.getResultTotals(d.rD.USER),
            num_results_text_channels: C.A.getResultTotals(d.rD.TEXT_CHANNEL),
            num_results_voice_channels: C.A.getResultTotals(d.rD.VOICE_CHANNEL),
            num_results_guilds: C.A.getResultTotals(d.rD.GUILD),
            num_results_group_dms: C.A.getResultTotals(d.rD.GROUP_DM),
        };
    if (null != o) {
        let e = I.A.getChannel(o);
        h.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: r, record: i } = t;
        switch (((h.selected_type = p(t)), (h.selected_score = r), (h.selected_index = n.indexOf(t)), e)) {
            case d.rD.GUILD:
                h.selected_guild_id = i.id;
                break;
            case d.rD.TEXT_CHANNEL:
            case d.rD.VOICE_CHANNEL:
                i instanceof A.YB && (h.selected_guild_id = null != i.guild_id ? i.guild_id : null),
                    (h.selected_channel_id = i.id);
                break;
            case d.rD.GROUP_DM:
                h.selected_channel_id = i.id;
                break;
            case d.rD.USER:
                h.selected_user_id = i.id;
        }
    }
    v.default.track(e, h);
}
function U() {
    i.h.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
function G() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    P(e), i.h.dispatch({ type: "QUICKSWITCHER_SHOW", ...x(t) });
}
function F() {
    k(R.HAw.QUICKSWITCHER_CLOSED), U();
}
function V(e) {
    i.h.dispatch({ type: "QUICKSWITCHER_SEARCH", ...x(e) });
}
function B(e) {
    i.h.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
}
function H(e) {
    let t,
        A = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    U(), (0, r.s7G)(), k(R.HAw.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: S, record: y } = e,
        v = { page: R.liQ.QUICK_SWITCHER };
    switch (S) {
        case d.rD.GUILD:
            (0, E.u)(y.id, { navigationReplace: !0 });
            break;
        case d.rD.TEXT_CHANNEL:
            null != (t = I.A.getChannel(y.id)) &&
                (0, m.iN)(t.id, { state: { analyticsSource: v }, navigationReplace: !0 });
            break;
        case d.rD.VOICE_CHANNEL:
            null != (t = I.A.getChannel(y.id)) &&
                (A ? a.A.updateChatOpen(y.id, !0) : u.default.selectVoiceChannel(y.id),
                (0, m.iN)(t.id, { state: { analyticsSource: v }, navigationReplace: !0 }));
            break;
        case d.rD.USER:
            s.A.openPrivateChannel({ recipientIds: [y.id], location: "Quickswitcher" }),
                o.A.channelListScrollTo(R.ME, I.A.getDMFromUserId(y.id));
            break;
        case d.rD.GROUP_DM:
            (0, m.iN)(y.id, { navigationReplace: !0 }), o.A.channelListScrollTo(R.ME, y.id);
            break;
        case d.rD.APPLICATION:
            let N = T.A.getActiveLibraryApplication(y.id);
            D(y.id, N, { analyticsParams: { source: R.ThZ.QUICK_SWITCHER, location: R.ThZ.QUICK_SWITCHER } });
            break;
        case d.rD.LINK:
            (0, h.A)(y.path, { navigationReplace: !0 });
            break;
        case d.rD.IN_APP_NAVIGATION:
            if (e.record.type === _.t1.SETTINGS) {
                let { openUserSettings: t } = n(840065),
                    r = (0, g.default)({ path: e.record.path });
                (0, g.trackParseSettingsUrl)(r, "quickswitcher"), t(r.target, { path: r.path });
            } else if (e.record.type === _.t1.PLAYGROUND) {
                if (!(0, p.mz)("quickswitcher_action")) return;
                {
                    let { PlaygroundStore: t } = n(3258),
                        r = e.record.collectionId ?? null;
                    t.setState({ selectedCollection: r, selectedStory: null }), (0, l.id)(R.zgK.COMPONENT_PLAYGROUND);
                }
            } else
                e.record.type === _.t1.SHOP_ORBS_TAB
                    ? (0, f.Cz)({
                          tab: b.G2.ORBS,
                          analyticsLocations: [c.A.QUICK_SWITCHER],
                          analyticsSource: c.A.QUICK_SWITCHER,
                      })
                    : (0, h.A)(y.path, { navigationReplace: !0 });
    }
    i.h.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
}
