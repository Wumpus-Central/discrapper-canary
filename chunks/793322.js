"use strict";
n.d(t, { $P: () => B, F6: () => H, L$: () => F, LV: () => P, WU: () => G, jD: () => V, wf: () => j });
var r = n(397927),
    i = n(73153),
    a = n(308528),
    s = n(367513),
    o = n(951001),
    l = n(398590),
    u = n(956793),
    c = n(793574),
    d = n(629357),
    _ = n(329308),
    f = n(979286),
    p = n(22007),
    h = n(378570),
    m = n(345942),
    g = n(849823),
    E = n(95701),
    A = n(734057),
    I = n(189081),
    T = n(309010),
    y = n(967198),
    S = n(954571),
    v = n(427262),
    C = n(988102),
    b = n(174768),
    N = n(652215),
    R = n(746080),
    O = n(758836);
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
function x(e) {
    let t = L[e.charAt(0)] ?? null;
    return [e.replace(w, ""), t];
}
function P(e) {
    let [t, n] = x(e);
    return { query: t, queryMode: n };
}
function M(e) {
    let t;
    if (b.A.isOpen()) return;
    let n = y.A.getGuildId(),
        r = T.A.getChannelId(n);
    if (null != r) {
        let e = A.A.getChannel(r);
        t = null != e ? e.type : null;
    }
    S.default.track(N.HAw.QUICKSWITCHER_OPENED, {
        source: e,
        current_guild_id: n,
        current_channel_id: r,
        current_channel_type: t,
    });
}
function k(e, t) {
    let { results: n, queryMode: r, query: i, maxQueryLength: a } = b.A.getProps(),
        s = y.A.getGuildId(),
        o = T.A.getChannelId(s),
        l = n[(0, d.Vv)(d.vB.DOWN, -1, n)],
        u = C.A.isEmail(i),
        c = C.A.isPhoneNumber(i),
        _ = C.A.isUserTagLike(i),
        f = null != o && (0, R.jq)(o),
        p = (e) => (null == e ? null : e.type === d.rD.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type),
        h = {
            current_channel_id: f ? void 0 : o,
            current_channel_static_route: f ? o : void 0,
            current_guild_id: s,
            query_mode: r ?? "GENERAL",
            query_length: i.length,
            max_query_length: a,
            is_email_like: u,
            is_phone_like: c,
            is_username_like: _,
            query: u || c || _ ? null : i,
            top_result_type: p(l),
            top_result_score: null != l ? l.score : null,
            num_results_total: b.A.getResultTotals(),
            num_results_users: b.A.getResultTotals(d.rD.USER),
            num_results_text_channels: b.A.getResultTotals(d.rD.TEXT_CHANNEL),
            num_results_voice_channels: b.A.getResultTotals(d.rD.VOICE_CHANNEL),
            num_results_guilds: b.A.getResultTotals(d.rD.GUILD),
            num_results_group_dms: b.A.getResultTotals(d.rD.GROUP_DM),
        };
    if (null != o) {
        let e = A.A.getChannel(o);
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
                i instanceof E.YB && (h.selected_guild_id = null != i.guild_id ? i.guild_id : null),
                    (h.selected_channel_id = i.id);
                break;
            case d.rD.GROUP_DM:
                h.selected_channel_id = i.id;
                break;
            case d.rD.USER:
                h.selected_user_id = i.id;
        }
    }
    S.default.track(e, h);
}
function U() {
    i.h.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
function G() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    M(e), i.h.dispatch({ type: "QUICKSWITCHER_SHOW", ...P(t) });
}
function V() {
    k(N.HAw.QUICKSWITCHER_CLOSED), U();
}
function F() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND";
    b.A.isOpen() ? V() : G(e);
}
function B(e) {
    i.h.dispatch({ type: "QUICKSWITCHER_SEARCH", ...P(e) });
}
function j(e) {
    i.h.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
}
function H(e) {
    let t,
        E = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    U(), (0, r.s7G)(), k(N.HAw.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: T, record: y } = e,
        S = { page: N.liQ.QUICK_SWITCHER };
    switch (T) {
        case d.rD.GUILD:
            (0, m.u)(y.id, { navigationReplace: !0 });
            break;
        case d.rD.TEXT_CHANNEL:
            null != (t = A.A.getChannel(y.id)) &&
                (0, h.iN)(t.id, { state: { analyticsSource: S }, navigationReplace: !0 });
            break;
        case d.rD.VOICE_CHANNEL:
            null != (t = A.A.getChannel(y.id)) &&
                (E ? s.A.updateChatOpen(y.id, !0) : u.default.selectVoiceChannel(y.id),
                (0, h.iN)(t.id, { state: { analyticsSource: S }, navigationReplace: !0 }));
            break;
        case d.rD.USER:
            a.A.openPrivateChannel({ recipientIds: [y.id], location: "Quickswitcher" }),
                o.A.channelListScrollTo(N.ME, A.A.getDMFromUserId(y.id));
            break;
        case d.rD.GROUP_DM:
            (0, h.iN)(y.id, { navigationReplace: !0 }), o.A.channelListScrollTo(N.ME, y.id);
            break;
        case d.rD.APPLICATION:
            let C = I.A.getActiveLibraryApplication(y.id);
            D(y.id, C, { analyticsParams: { source: N.ThZ.QUICK_SWITCHER, location: N.ThZ.QUICK_SWITCHER } });
            break;
        case d.rD.LINK:
            (0, p.A)(y.path, { navigationReplace: !0 });
            break;
        case d.rD.IN_APP_NAVIGATION:
            if (e.record.type === _.t1.SETTINGS) {
                let t = (0, g.default)(e.record.path);
                if (null != t) {
                    let { openUserSettingsFromParsedUrl: e } = n(840065);
                    e({ match: t, urlOrigin: "quickswitcher" });
                }
            } else if (e.record.type === _.t1.PLAYGROUND) {
                if (!(0, v.Gn)()) return;
                {
                    let { PlaygroundStore: t } = n(3258),
                        r = e.record.collectionId ?? null;
                    t.setState({ selectedCollection: r, selectedStory: null }), (0, l.id)(N.zgK.COMPONENT_PLAYGROUND);
                }
            } else
                e.record.type === _.t1.SHOP_ORBS_TAB
                    ? (0, f.Cz)({
                          tab: O.G2.ORBS,
                          analyticsLocations: [c.A.QUICK_SWITCHER],
                          analyticsSource: c.A.QUICK_SWITCHER,
                      })
                    : (0, p.A)(y.path, { navigationReplace: !0 });
    }
    i.h.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
}
