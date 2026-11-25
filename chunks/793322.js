var i = n(192308),
    r = n(73153),
    a = n(308528),
    s = n(367513),
    l = n(951001),
    o = n(574332),
    d = n(398590),
    c = n(597798),
    u = n(793574),
    _ = n(662090),
    E = n(329308),
    A = n(969935),
    f = n(790271),
    h = n(60465),
    I = n(409626),
    p = n(362280),
    m = n(890946),
    g = n(378570),
    T = n(345942),
    S = n(20517),
    N = n(114129),
    C = n(442325),
    O = n(858760),
    R = n(254838),
    L = n(718446),
    y = n(95701),
    D = n(734057),
    b = n(189081),
    v = n(309010),
    P = n(967198),
    M = n(129230),
    U = n(988102),
    w = n(174768),
    G = n(652215),
    x = n(746080),
    k = n(758836);
let F = () => Promise.resolve();
F = n(35083).playApplication;
let B = Object.freeze({
        [_.AT.USER]: _.rD.USER,
        [_.AT.TEXT_CHANNEL]: _.rD.TEXT_CHANNEL,
        [_.AT.VOICE_CHANNEL]: _.rD.VOICE_CHANNEL,
        [_.AT.GUILD]: _.rD.GUILD,
        [_.AT.GAME_PROFILE]: _.rD.GAME_PROFILE,
    }),
    V = RegExp(`^${_.AT.USER}|${_.AT.TEXT_CHANNEL}|${_.AT.VOICE_CHANNEL}|\\${_.AT.GUILD}|\\${_.AT.GAME_PROFILE}`);
function H(e) {
    let [t, n] = (function (e) {
        let t = e.charAt(0);
        if (t === _.AT.USER && e.charAt(1) === _.AT.USER) return [e.slice(2), _.rD.USER_GLOBAL];
        let n = B[t] ?? null;
        return [e.replace(V, ""), n];
    })(e);
    return { query: t, queryMode: n };
}
function j(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        { results: i, queryMode: r, query: a, maxQueryLength: s } = w.A.getProps(),
        l = P.A.getGuildId(),
        o = v.Ay.getChannelId(l),
        d = i[(0, _.Vv)(_.vB.DOWN, -1, i)],
        c = U.A.isEmail(a),
        u = U.A.isPhoneNumber(a),
        E = U.A.isUserTagLike(a),
        A = null != o && (0, x.jq)(o);
    function f(e) {
        return null == e ? null : e.type === _.rD.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type;
    }
    let h = {
        current_channel_id: A ? void 0 : o,
        current_channel_static_route: A ? o : void 0,
        current_guild_id: l,
        is_tab_picker: n,
        query_mode: r ?? "GENERAL",
        query_length: a.length,
        max_query_length: s,
        is_email_like: c,
        is_phone_like: u,
        is_username_like: E,
        query: c || u || E ? null : a,
        top_result_type: f(d),
        top_result_score: null != d ? d.score : null,
        num_results_total: w.A.getResultTotals(),
        num_results_users: w.A.getResultTotals(_.rD.USER),
        num_results_text_channels: w.A.getResultTotals(_.rD.TEXT_CHANNEL),
        num_results_voice_channels: w.A.getResultTotals(_.rD.VOICE_CHANNEL),
        num_results_guilds: w.A.getResultTotals(_.rD.GUILD),
        num_results_group_dms: w.A.getResultTotals(_.rD.GROUP_DM),
    };
    if (null != o) {
        let e = D.A.getChannel(o);
        h.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: n, record: r } = t;
        switch (((h.selected_type = f(t)), (h.selected_score = n), (h.selected_index = i.indexOf(t)), e)) {
            case _.rD.GUILD:
                h.selected_guild_id = r.id;
                break;
            case _.rD.TEXT_CHANNEL:
            case _.rD.VOICE_CHANNEL:
                (r instanceof y.YB && (h.selected_guild_id = null != r.guild_id ? r.guild_id : null),
                    (h.selected_channel_id = r.id));
                break;
            case _.rD.GROUP_DM:
                h.selected_channel_id = r.id;
                break;
            case _.rD.USER:
                h.selected_user_id = r.id;
        }
    }
    M.default.track(e, h);
}
function W() {
    r.h.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
let Y = new Set([E.t1.SETTINGS, E.t1.PLAYGROUND, E.t1.SHOP_ORBS_TAB]);
function K(e) {
    (j(G.HAw.QUICKSWITCHER_RESULT_SELECTED, e, w.A.isTabPicker()), W(), (0, i.s7)());
}
function $(e) {
    let t,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    K(e);
    let { type: m, record: S } = e,
        C = { page: G.liQ.QUICK_SWITCHER };
    function O(e, t) {
        (0, N.KV)(e, "quick_switcher", t) || (0, g.iN)(e, t);
    }
    switch (m) {
        case _.rD.GUILD:
            (0, T.u)(S.id, { navigationReplace: !0 });
            break;
        case _.rD.TEXT_CHANNEL:
            null != (t = D.A.getChannel(S.id)) && O(t.id, { state: { analyticsSource: C }, navigationReplace: !0 });
            break;
        case _.rD.VOICE_CHANNEL:
            if (null == (t = D.A.getChannel(S.id))) break;
            (i ? s.A.updateChatOpen(S.id, !0) : (c.default.selectVoiceChannel(S.id), (0, N.oZ)(S.id)),
                O(t.id, { state: { analyticsSource: C }, navigationReplace: !0 }));
            break;
        case _.rD.USER: {
            let e = D.A.getDMFromUserId(S.id);
            if (null != e && (0, N.KV)(e, "quick_switcher")) break;
            (a.A.openPrivateChannel({ recipientIds: [S.id], location: "Quickswitcher" }),
                l.A.channelListScrollTo(G.ME, D.A.getDMFromUserId(S.id)));
            break;
        }
        case _.rD.GROUP_DM:
            (O(S.id, { navigationReplace: !0 }), l.A.channelListScrollTo(G.ME, S.id));
            break;
        case _.rD.APPLICATION:
            let R = b.A.getActiveLibraryApplication(S.id);
            F(S.id, R, { analyticsParams: { source: G.ThZ.QUICK_SWITCHER, location: G.ThZ.QUICK_SWITCHER } });
            break;
        case _.rD.GAME_PROFILE:
            h.default.openGameProfileModal({
                gameId: S.id,
                gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: S.id },
                source: I.GameProfileSources.QuickSwitcher,
            });
            break;
        case _.rD.LINK:
            null != S.inviteCode
                ? (async function (e) {
                      let { invite: t } = await o.Ay.resolveInvite(e, "Quick Switcher");
                      null != t && r.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: e, context: G.BRT.APP });
                  })(S.inviteCode)
                : (0, p.A)(S.path, { navigationReplace: !0 });
            break;
        case _.rD.IN_APP_NAVIGATION:
            if (e.record.type === E.t1.SETTINGS) {
                let { openUserSettings: t } = n(766075),
                    i = (0, L.parseSettingsUrl)({ path: e.record.path });
                ((0, L.trackParseSettingsUrl)(i, "quickswitcher"), t(i.target, { path: i.path }));
            } else if (e.record.type === E.t1.PLAYGROUND) {
                if (!(0, f.mz)("quickswitcher_action")) return;
                {
                    let { PlaygroundStore: t } = n(995199),
                        i = e.record.collectionId ?? null;
                    (t.setState({ selectedCollection: i, selectedStory: null }), (0, d.id)(G.zgK.COMPONENT_PLAYGROUND));
                }
            } else
                e.record.type === E.t1.SHOP_ORBS_TAB
                    ? (0, A.Cz)({
                          tab: k.G2.ORBS,
                          analyticsLocations: [u.A.QUICK_SWITCHER],
                          analyticsSource: u.A.QUICK_SWITCHER,
                      })
                    : (0, p.A)(S.path, { navigationReplace: !0 });
    }
    r.h.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
}
n.d(
    t,
    {},
    {
        $P: function (e) {
            r.h.dispatch({ type: "QUICKSWITCHER_SEARCH", ...H(e) });
        },
        $U: function (e) {
            let { source: t = "quick_switcher", newTabPickerSelection: n = null } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { type: i } = e;
            function s() {
                (K(e), r.h.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e }));
            }
            function l(i, r) {
                if (!(0, O.Z6)("switchToResultInNewTab")) return void $(e);
                if ((s(), !(0, R.H)())) return;
                if (0 === C.A.getTabs().length) return void r();
                let a = (0, S.dR)(i) ?? (0, S.C2)();
                (0, N.kx)(a, t, n) && r();
            }
            switch (i) {
                case _.rD.TEXT_CHANNEL:
                case _.rD.VOICE_CHANNEL:
                case _.rD.GROUP_DM:
                case _.rD.DM: {
                    var o, d;
                    let i = D.A.getChannel(e.record.id);
                    if (null == i) return void $(e);
                    ((o = i.id),
                        (d = i.getGuildId() ?? null),
                        s(),
                        (0, R.H)() && (0, N.D5)(o, d, t, { newTabPickerSelection: n }));
                    return;
                }
                case _.rD.USER: {
                    if ((s(), !(0, R.H)())) return;
                    let i = C.A.getActiveTabId();
                    (async () => {
                        let r = await a.A.openPrivateChannel({
                            recipientIds: [e.record.id],
                            location: "Quickswitcher",
                            navigateToChannel: !1,
                        });
                        (0, N.D5)(r, null, t, { sourceTabId: i, newTabPickerSelection: n });
                    })().catch(() => {});
                    return;
                }
                case _.rD.GUILD:
                    l(G.BVt.CHANNEL(e.record.id, ...(0, m.q)(e.record.id)), () =>
                        (0, T.u)(e.record.id, { navigationReplace: !0 }),
                    );
                    return;
                case _.rD.LINK: {
                    let t = e.record;
                    if (null != t.inviteCode) return void $(e);
                    l(t.path, () => (0, p.A)(t.path, { navigationReplace: !0 }));
                    return;
                }
                case _.rD.IN_APP_NAVIGATION: {
                    if (Y.has(e.record.type)) return void $(e);
                    let { path: t } = e.record;
                    l(t, () => (0, p.A)(t, { navigationReplace: !0 }));
                    return;
                }
                default:
                    $(e);
            }
        },
        F6: $,
        LV: H,
        Pc: Y,
        WU: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                { isTabPicker: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            (!(function (e) {
                let t;
                if (w.A.isOpen()) return;
                let n = P.A.getGuildId(),
                    i = v.Ay.getChannelId(n);
                if (null != i) {
                    let e = D.A.getChannel(i);
                    t = null != e ? e.type : null;
                }
                M.default.track(G.HAw.QUICKSWITCHER_OPENED, {
                    source: e,
                    current_guild_id: n,
                    current_channel_id: i,
                    current_channel_type: t,
                });
            })(e),
                r.h.dispatch({ type: "QUICKSWITCHER_SHOW", ...H(t), isTabPicker: n }));
        },
        jD: function () {
            (j(G.HAw.QUICKSWITCHER_CLOSED, void 0, w.A.isTabPicker()), W());
        },
        wf: function (e) {
            r.h.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
        },
    },
);
