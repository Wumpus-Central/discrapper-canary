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
    O = n(254838),
    R = n(718446),
    L = n(95701),
    y = n(734057),
    D = n(189081),
    b = n(309010),
    v = n(967198),
    P = n(129230),
    M = n(988102),
    U = n(174768),
    w = n(652215),
    G = n(746080),
    x = n(758836);
let k = () => Promise.resolve();
k = n(35083).playApplication;
let F = Object.freeze({
        [_.AT.USER]: _.rD.USER,
        [_.AT.TEXT_CHANNEL]: _.rD.TEXT_CHANNEL,
        [_.AT.VOICE_CHANNEL]: _.rD.VOICE_CHANNEL,
        [_.AT.GUILD]: _.rD.GUILD,
        [_.AT.GAME_PROFILE]: _.rD.GAME_PROFILE,
    }),
    B = RegExp(`^${_.AT.USER}|${_.AT.TEXT_CHANNEL}|${_.AT.VOICE_CHANNEL}|\\${_.AT.GUILD}|\\${_.AT.GAME_PROFILE}`);
function V(e) {
    let [t, n] = (function (e) {
        let t = e.charAt(0);
        if (t === _.AT.USER && e.charAt(1) === _.AT.USER) return [e.slice(2), _.rD.USER_GLOBAL];
        let n = F[t] ?? null;
        return [e.replace(B, ""), n];
    })(e);
    return { query: t, queryMode: n };
}
function H(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        { results: i, queryMode: r, query: a, maxQueryLength: s } = U.A.getProps(),
        l = v.A.getGuildId(),
        o = b.Ay.getChannelId(l),
        d = i[(0, _.Vv)(_.vB.DOWN, -1, i)],
        c = M.A.isEmail(a),
        u = M.A.isPhoneNumber(a),
        E = M.A.isUserTagLike(a),
        A = null != o && (0, G.jq)(o);
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
        num_results_total: U.A.getResultTotals(),
        num_results_users: U.A.getResultTotals(_.rD.USER),
        num_results_text_channels: U.A.getResultTotals(_.rD.TEXT_CHANNEL),
        num_results_voice_channels: U.A.getResultTotals(_.rD.VOICE_CHANNEL),
        num_results_guilds: U.A.getResultTotals(_.rD.GUILD),
        num_results_group_dms: U.A.getResultTotals(_.rD.GROUP_DM),
    };
    if (null != o) {
        let e = y.A.getChannel(o);
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
                (r instanceof L.YB && (h.selected_guild_id = null != r.guild_id ? r.guild_id : null),
                    (h.selected_channel_id = r.id));
                break;
            case _.rD.GROUP_DM:
                h.selected_channel_id = r.id;
                break;
            case _.rD.USER:
                h.selected_user_id = r.id;
        }
    }
    P.default.track(e, h);
}
function j() {
    r.h.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
let W = new Set([E.t1.SETTINGS, E.t1.PLAYGROUND, E.t1.SHOP_ORBS_TAB]);
function Y(e) {
    let t = U.A.isTabPicker();
    (j(), (0, i.s7)(), H(w.HAw.QUICKSWITCHER_RESULT_SELECTED, e, t));
}
function K(e) {
    let t,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    Y(e);
    let { type: m, record: S } = e,
        C = { page: w.liQ.QUICK_SWITCHER };
    function O(e, t) {
        (0, N.KV)(e, "quick_switcher", t) || (0, g.iN)(e, t);
    }
    switch (m) {
        case _.rD.GUILD:
            (0, T.u)(S.id, { navigationReplace: !0 });
            break;
        case _.rD.TEXT_CHANNEL:
            null != (t = y.A.getChannel(S.id)) && O(t.id, { state: { analyticsSource: C }, navigationReplace: !0 });
            break;
        case _.rD.VOICE_CHANNEL:
            if (null == (t = y.A.getChannel(S.id))) break;
            (i ? s.A.updateChatOpen(S.id, !0) : (c.default.selectVoiceChannel(S.id), (0, N.oZ)(S.id)),
                O(t.id, { state: { analyticsSource: C }, navigationReplace: !0 }));
            break;
        case _.rD.USER: {
            let e = y.A.getDMFromUserId(S.id);
            if (null != e && (0, N.KV)(e, "quick_switcher")) break;
            (a.A.openPrivateChannel({ recipientIds: [S.id], location: "Quickswitcher" }),
                l.A.channelListScrollTo(w.ME, y.A.getDMFromUserId(S.id)));
            break;
        }
        case _.rD.GROUP_DM:
            (O(S.id, { navigationReplace: !0 }), l.A.channelListScrollTo(w.ME, S.id));
            break;
        case _.rD.APPLICATION:
            let L = D.A.getActiveLibraryApplication(S.id);
            k(S.id, L, { analyticsParams: { source: w.ThZ.QUICK_SWITCHER, location: w.ThZ.QUICK_SWITCHER } });
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
                      null != t && r.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: e, context: w.BRT.APP });
                  })(S.inviteCode)
                : (0, p.A)(S.path, { navigationReplace: !0 });
            break;
        case _.rD.IN_APP_NAVIGATION:
            if (e.record.type === E.t1.SETTINGS) {
                let { openUserSettings: t } = n(766075),
                    i = (0, R.parseSettingsUrl)({ path: e.record.path });
                ((0, R.trackParseSettingsUrl)(i, "quickswitcher"), t(i.target, { path: i.path }));
            } else if (e.record.type === E.t1.PLAYGROUND) {
                if (!(0, f.mz)("quickswitcher_action")) return;
                {
                    let { PlaygroundStore: t } = n(995199),
                        i = e.record.collectionId ?? null;
                    (t.setState({ selectedCollection: i, selectedStory: null }), (0, d.id)(w.zgK.COMPONENT_PLAYGROUND));
                }
            } else
                e.record.type === E.t1.SHOP_ORBS_TAB
                    ? (0, A.Cz)({
                          tab: x.G2.ORBS,
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
            r.h.dispatch({ type: "QUICKSWITCHER_SEARCH", ...V(e) });
        },
        $U: function (e) {
            let { source: t = "quick_switcher", newTabPickerSelection: n = null } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { type: i } = e;
            function s() {
                (Y(e), r.h.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e }));
            }
            function l(i, r) {
                if (!C.A.isEnabled()) return void K(e);
                if ((s(), !(0, O.H)())) return;
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
                    let i = y.A.getChannel(e.record.id);
                    if (null == i) return void K(e);
                    ((o = i.id),
                        (d = i.getGuildId() ?? null),
                        s(),
                        (0, O.H)() && (0, N.D5)(o, d, t, { newTabPickerSelection: n }));
                    return;
                }
                case _.rD.USER: {
                    if ((s(), !(0, O.H)())) return;
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
                    l(w.BVt.CHANNEL(e.record.id, ...(0, m.q)(e.record.id)), () =>
                        (0, T.u)(e.record.id, { navigationReplace: !0 }),
                    );
                    return;
                case _.rD.LINK: {
                    let t = e.record;
                    if (null != t.inviteCode) return void K(e);
                    l(t.path, () => (0, p.A)(t.path, { navigationReplace: !0 }));
                    return;
                }
                case _.rD.IN_APP_NAVIGATION: {
                    if (W.has(e.record.type)) return void K(e);
                    let { path: t } = e.record;
                    l(t, () => (0, p.A)(t, { navigationReplace: !0 }));
                    return;
                }
                default:
                    K(e);
            }
        },
        F6: K,
        LV: V,
        Pc: W,
        WU: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                { isTabPicker: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            (!(function (e) {
                let t;
                if (U.A.isOpen()) return;
                let n = v.A.getGuildId(),
                    i = b.Ay.getChannelId(n);
                if (null != i) {
                    let e = y.A.getChannel(i);
                    t = null != e ? e.type : null;
                }
                P.default.track(w.HAw.QUICKSWITCHER_OPENED, {
                    source: e,
                    current_guild_id: n,
                    current_channel_id: i,
                    current_channel_type: t,
                });
            })(e),
                r.h.dispatch({ type: "QUICKSWITCHER_SHOW", ...V(t), isTabPicker: n }));
        },
        jD: function () {
            (H(w.HAw.QUICKSWITCHER_CLOSED, void 0, U.A.isTabPicker()), j());
        },
        wf: function (e) {
            r.h.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
        },
    },
);
