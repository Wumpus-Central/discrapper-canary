n.d(t, {
    $P: () => H,
    F6: () => W,
    L$: () => B,
    LV: () => M,
    WU: () => V,
    jD: () => F,
    wf: () => Y,
}),
    n(591487),
    n(727858),
    n(747238),
    n(812715),
    n(896048);
var r = n(397927),
    i = n(73153),
    a = n(308528),
    s = n(367513),
    o = n(951001),
    l = n(398590),
    c = n(956793),
    u = n(793574),
    d = n(629357),
    f = n(329308),
    p = n(979286),
    _ = n(22007),
    h = n(378570),
    m = n(345942),
    g = n(849823),
    E = n(95701),
    b = n(734057),
    y = n(189081),
    O = n(309010),
    A = n(967198),
    v = n(954571),
    S = n(427262),
    I = n(988102),
    T = n(174768),
    C = n(652215),
    N = n(746080),
    R = n(758836);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
let D = () => Promise.resolve();
D = n(715671).playApplication;
let x = Object.freeze({
        [d.AT.USER]: d.rD.USER,
        [d.AT.TEXT_CHANNEL]: d.rD.TEXT_CHANNEL,
        [d.AT.VOICE_CHANNEL]: d.rD.VOICE_CHANNEL,
        [d.AT.GUILD]: d.rD.GUILD,
        [d.AT.APPLICATION]: d.rD.APPLICATION,
    }),
    L = new RegExp(
        "^"
            .concat(d.AT.USER, "|")
            .concat(d.AT.TEXT_CHANNEL, "|")
            .concat(d.AT.VOICE_CHANNEL, "|\\")
            .concat(d.AT.GUILD, "|\\")
            .concat(d.AT.APPLICATION),
    );
function j(e) {
    var t;
    let n = null != (t = x[e.charAt(0)]) ? t : null;
    return [e.replace(L, ""), n];
}
function M(e) {
    let [t, n] = j(e);
    return {
        query: t,
        queryMode: n,
    };
}
function k(e) {
    let t;
    if (T.A.isOpen()) return;
    let n = A.A.getGuildId(),
        r = O.A.getChannelId(n);
    if (null != r) {
        let e = b.A.getChannel(r);
        t = null != e ? e.type : null;
    }
    v.default.track(C.HAw.QUICKSWITCHER_OPENED, {
        source: e,
        current_guild_id: n,
        current_channel_id: r,
        current_channel_type: t,
    });
}
function U(e, t) {
    let { results: n, queryMode: r, query: i, maxQueryLength: a } = T.A.getProps(),
        s = A.A.getGuildId(),
        o = O.A.getChannelId(s),
        l = n[(0, d.Vv)(d.vB.DOWN, -1, n)],
        c = I.A.isEmail(i),
        u = I.A.isPhoneNumber(i),
        f = I.A.isUserTagLike(i),
        p = null != o && (0, N.jq)(o),
        _ = (e) => (null == e ? null : e.type === d.rD.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type),
        h = {
            current_channel_id: p ? void 0 : o,
            current_channel_static_route: p ? o : void 0,
            current_guild_id: s,
            query_mode: null != r ? r : "GENERAL",
            query_length: i.length,
            max_query_length: a,
            is_email_like: c,
            is_phone_like: u,
            is_username_like: f,
            query: c || u || f ? null : i,
            top_result_type: _(l),
            top_result_score: null != l ? l.score : null,
            num_results_total: T.A.getResultTotals(),
            num_results_users: T.A.getResultTotals(d.rD.USER),
            num_results_text_channels: T.A.getResultTotals(d.rD.TEXT_CHANNEL),
            num_results_voice_channels: T.A.getResultTotals(d.rD.VOICE_CHANNEL),
            num_results_guilds: T.A.getResultTotals(d.rD.GUILD),
            num_results_group_dms: T.A.getResultTotals(d.rD.GROUP_DM),
        };
    if (null != o) {
        let e = b.A.getChannel(o);
        h.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: r, record: i } = t;
        switch (((h.selected_type = _(t)), (h.selected_score = r), (h.selected_index = n.indexOf(t)), e)) {
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
    v.default.track(e, h);
}
function G() {
    i.h.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
function V() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    k(e), i.h.dispatch(P({ type: "QUICKSWITCHER_SHOW" }, M(t)));
}
function F() {
    U(C.HAw.QUICKSWITCHER_CLOSED), G();
}
function B() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND";
    T.A.isOpen() ? F() : V(e);
}
function H(e) {
    i.h.dispatch(P({ type: "QUICKSWITCHER_SEARCH" }, M(e)));
}
function Y(e) {
    i.h.dispatch({
        type: "QUICKSWITCHER_SELECT",
        selectedIndex: e,
    });
}
function W(e) {
    let t,
        E = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    G(), (0, r.s7G)(), U(C.HAw.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: O, record: A } = e,
        v = { page: C.liQ.QUICK_SWITCHER };
    switch (O) {
        case d.rD.GUILD:
            (0, m.u)(A.id, { navigationReplace: !0 });
            break;
        case d.rD.TEXT_CHANNEL:
            null != (t = b.A.getChannel(A.id)) &&
                (0, h.iN)(t.id, {
                    state: { analyticsSource: v },
                    navigationReplace: !0,
                });
            break;
        case d.rD.VOICE_CHANNEL:
            null != (t = b.A.getChannel(A.id)) &&
                (E ? s.A.updateChatOpen(A.id, !0) : c.default.selectVoiceChannel(A.id),
                (0, h.iN)(t.id, {
                    state: { analyticsSource: v },
                    navigationReplace: !0,
                }));
            break;
        case d.rD.USER:
            a.A.openPrivateChannel({
                recipientIds: [A.id],
                location: "Quickswitcher",
            }),
                o.A.channelListScrollTo(C.ME, b.A.getDMFromUserId(A.id));
            break;
        case d.rD.GROUP_DM:
            (0, h.iN)(A.id, { navigationReplace: !0 }), o.A.channelListScrollTo(C.ME, A.id);
            break;
        case d.rD.APPLICATION:
            let I = y.A.getActiveLibraryApplication(A.id);
            D(A.id, I, {
                analyticsParams: {
                    source: C.ThZ.QUICK_SWITCHER,
                    location: C.ThZ.QUICK_SWITCHER,
                },
            });
            break;
        case d.rD.LINK:
            (0, _.A)(A.path, { navigationReplace: !0 });
            break;
        case d.rD.IN_APP_NAVIGATION:
            if (e.record.type === f.t1.SETTINGS) {
                let t = (0, g.default)(e.record.path);
                if (null != t) {
                    let { openUserSettingsFromParsedUrl: e } = n(840065);
                    e({
                        match: t,
                        urlOrigin: "quickswitcher",
                    });
                }
            } else if (e.record.type === f.t1.PLAYGROUND) {
                if (!(0, S.Gn)()) return;
                {
                    var T;
                    let { PlaygroundStore: t } = n(3258),
                        r = null != (T = e.record.collectionId) ? T : null;
                    t.setState({
                        selectedCollection: r,
                        selectedStory: null,
                    }),
                        (0, l.id)(C.zgK.COMPONENT_PLAYGROUND);
                }
            } else
                e.record.type === f.t1.SHOP_ORBS_TAB
                    ? (0, p.Cz)({
                          tab: R.G2.ORBS,
                          analyticsLocations: [u.A.QUICK_SWITCHER],
                          analyticsSource: u.A.QUICK_SWITCHER,
                      })
                    : (0, _.A)(A.path, { navigationReplace: !0 });
    }
    i.h.dispatch({
        type: "QUICKSWITCHER_SWITCH_TO",
        result: e,
    });
}
