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
    m = n(378570),
    T = n(345942),
    g = n(114129),
    S = n(442325),
    N = n(254838),
    C = n(718446),
    O = n(95701),
    R = n(734057),
    L = n(189081),
    y = n(309010),
    D = n(967198),
    b = n(129230),
    v = n(988102),
    P = n(174768),
    M = n(652215),
    U = n(746080),
    w = n(758836);
let G = () => Promise.resolve();
G = n(35083).playApplication;
let x = Object.freeze({
        [_.AT.USER]: _.rD.USER,
        [_.AT.TEXT_CHANNEL]: _.rD.TEXT_CHANNEL,
        [_.AT.VOICE_CHANNEL]: _.rD.VOICE_CHANNEL,
        [_.AT.GUILD]: _.rD.GUILD,
        [_.AT.GAME_PROFILE]: _.rD.GAME_PROFILE,
    }),
    k = RegExp(`^${_.AT.USER}|${_.AT.TEXT_CHANNEL}|${_.AT.VOICE_CHANNEL}|\\${_.AT.GUILD}|\\${_.AT.GAME_PROFILE}`);
function F(e) {
    let [t, n] = (function (e) {
        let t = e.charAt(0);
        if (t === _.AT.USER && e.charAt(1) === _.AT.USER) return [e.slice(2), _.rD.USER_GLOBAL];
        let n = x[t] ?? null;
        return [e.replace(k, ""), n];
    })(e);
    return { query: t, queryMode: n };
}
function B(e, t) {
    let { results: n, queryMode: i, query: r, maxQueryLength: a } = P.A.getProps(),
        s = D.A.getGuildId(),
        l = y.Ay.getChannelId(s),
        o = n[(0, _.Vv)(_.vB.DOWN, -1, n)],
        d = v.A.isEmail(r),
        c = v.A.isPhoneNumber(r),
        u = v.A.isUserTagLike(r),
        E = null != l && (0, U.jq)(l);
    function A(e) {
        return null == e ? null : e.type === _.rD.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type;
    }
    let f = {
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
        num_results_total: P.A.getResultTotals(),
        num_results_users: P.A.getResultTotals(_.rD.USER),
        num_results_text_channels: P.A.getResultTotals(_.rD.TEXT_CHANNEL),
        num_results_voice_channels: P.A.getResultTotals(_.rD.VOICE_CHANNEL),
        num_results_guilds: P.A.getResultTotals(_.rD.GUILD),
        num_results_group_dms: P.A.getResultTotals(_.rD.GROUP_DM),
    };
    if (null != l) {
        let e = R.A.getChannel(l);
        f.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: i, record: r } = t;
        switch (((f.selected_type = A(t)), (f.selected_score = i), (f.selected_index = n.indexOf(t)), e)) {
            case _.rD.GUILD:
                f.selected_guild_id = r.id;
                break;
            case _.rD.TEXT_CHANNEL:
            case _.rD.VOICE_CHANNEL:
                (r instanceof O.YB && (f.selected_guild_id = null != r.guild_id ? r.guild_id : null),
                    (f.selected_channel_id = r.id));
                break;
            case _.rD.GROUP_DM:
                f.selected_channel_id = r.id;
                break;
            case _.rD.USER:
                f.selected_user_id = r.id;
        }
    }
    b.default.track(e, f);
}
let V = new Set([E.t1.SETTINGS, E.t1.PLAYGROUND, E.t1.SHOP_ORBS_TAB]);
function H() {
    r.h.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
function j(e) {
    let t,
        S = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (H(), (0, i.s7)(), B(M.HAw.QUICKSWITCHER_RESULT_SELECTED, e));
    let { type: N, record: O } = e,
        y = { page: M.liQ.QUICK_SWITCHER };
    switch (N) {
        case _.rD.GUILD:
            (0, T.u)(O.id, { navigationReplace: !0 });
            break;
        case _.rD.TEXT_CHANNEL:
            null != (t = R.A.getChannel(O.id)) &&
                (0, m.iN)(t.id, { state: { analyticsSource: y }, navigationReplace: !0 });
            break;
        case _.rD.VOICE_CHANNEL:
            if (null == (t = R.A.getChannel(O.id))) break;
            (S ? s.A.updateChatOpen(O.id, !0) : (c.default.selectVoiceChannel(O.id), (0, g.oZ)(O.id)),
                (0, m.iN)(t.id, { state: { analyticsSource: y }, navigationReplace: !0 }));
            break;
        case _.rD.USER:
            (a.A.openPrivateChannel({ recipientIds: [O.id], location: "Quickswitcher" }),
                l.A.channelListScrollTo(M.ME, R.A.getDMFromUserId(O.id)));
            break;
        case _.rD.GROUP_DM:
            ((0, m.iN)(O.id, { navigationReplace: !0 }), l.A.channelListScrollTo(M.ME, O.id));
            break;
        case _.rD.APPLICATION:
            let D = L.A.getActiveLibraryApplication(O.id);
            G(O.id, D, { analyticsParams: { source: M.ThZ.QUICK_SWITCHER, location: M.ThZ.QUICK_SWITCHER } });
            break;
        case _.rD.GAME_PROFILE:
            h.default.openGameProfileModal({
                gameId: O.id,
                gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: O.id },
                source: I.GameProfileSources.QuickSwitcher,
            });
            break;
        case _.rD.LINK:
            null != O.inviteCode
                ? (async function (e) {
                      let { invite: t } = await o.Ay.resolveInvite(e, "Quick Switcher");
                      null != t && r.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: e, context: M.BRT.APP });
                  })(O.inviteCode)
                : (0, p.A)(O.path, { navigationReplace: !0 });
            break;
        case _.rD.IN_APP_NAVIGATION:
            if (e.record.type === E.t1.SETTINGS) {
                let { openUserSettings: t } = n(766075),
                    i = (0, C.parseSettingsUrl)({ path: e.record.path });
                ((0, C.trackParseSettingsUrl)(i, "quickswitcher"), t(i.target, { path: i.path }));
            } else if (e.record.type === E.t1.PLAYGROUND) {
                if (!(0, f.mz)("quickswitcher_action")) return;
                {
                    let { PlaygroundStore: t } = n(995199),
                        i = e.record.collectionId ?? null;
                    (t.setState({ selectedCollection: i, selectedStory: null }), (0, d.id)(M.zgK.COMPONENT_PLAYGROUND));
                }
            } else
                e.record.type === E.t1.SHOP_ORBS_TAB
                    ? (0, A.Cz)({
                          tab: w.G2.ORBS,
                          analyticsLocations: [u.A.QUICK_SWITCHER],
                          analyticsSource: u.A.QUICK_SWITCHER,
                      })
                    : (0, p.A)(O.path, { navigationReplace: !0 });
    }
    r.h.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
}
n.d(
    t,
    {},
    {
        $P: function (e) {
            r.h.dispatch({ type: "QUICKSWITCHER_SEARCH", ...F(e) });
        },
        $U: function (e) {
            if (S.A.isActiveTabFresh()) return void j(e);
            let { type: t } = e;
            function n() {
                (H(),
                    (0, i.s7)(),
                    B(M.HAw.QUICKSWITCHER_RESULT_SELECTED, e),
                    r.h.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e }));
            }
            function s(t) {
                S.A.isEnabled()
                    ? (n(), (0, N.H)() && (0 === S.A.getTabs().length || null != (0, g.Qo)("quick_switcher")) && t())
                    : j(e);
            }
            switch (t) {
                case _.rD.TEXT_CHANNEL:
                case _.rD.VOICE_CHANNEL:
                case _.rD.GROUP_DM:
                case _.rD.DM: {
                    var l, o;
                    let t = R.A.getChannel(e.record.id);
                    if (null == t) return void j(e);
                    ((l = t.id), (o = t.getGuildId() ?? null), n(), (0, N.H)() && (0, g.D5)(l, o, "quick_switcher"));
                    return;
                }
                case _.rD.USER: {
                    if ((n(), !(0, N.H)())) return;
                    let t = S.A.getActiveTabId();
                    (async () => {
                        let n = await a.A.openPrivateChannel({
                            recipientIds: [e.record.id],
                            location: "Quickswitcher",
                            navigateToChannel: !1,
                        });
                        (0, g.D5)(n, null, "quick_switcher", t);
                    })().catch(() => {});
                    return;
                }
                case _.rD.GUILD:
                    s(() => (0, T.u)(e.record.id, { navigationReplace: !0 }));
                    return;
                case _.rD.LINK: {
                    let t = e.record;
                    if (null != t.inviteCode) return void j(e);
                    s(() => (0, p.A)(t.path, { navigationReplace: !0 }));
                    return;
                }
                case _.rD.IN_APP_NAVIGATION: {
                    if (V.has(e.record.type)) return void j(e);
                    let { path: t } = e.record;
                    s(() => (0, p.A)(t, { navigationReplace: !0 }));
                    return;
                }
                default:
                    j(e);
            }
        },
        F6: j,
        LV: F,
        WU: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            (!(function (e) {
                let t;
                if (P.A.isOpen()) return;
                let n = D.A.getGuildId(),
                    i = y.Ay.getChannelId(n);
                if (null != i) {
                    let e = R.A.getChannel(i);
                    t = null != e ? e.type : null;
                }
                b.default.track(M.HAw.QUICKSWITCHER_OPENED, {
                    source: e,
                    current_guild_id: n,
                    current_channel_id: i,
                    current_channel_type: t,
                });
            })(e),
                r.h.dispatch({ type: "QUICKSWITCHER_SHOW", ...F(t) }));
        },
        jD: function () {
            (B(M.HAw.QUICKSWITCHER_CLOSED), H());
        },
        wf: function (e) {
            r.h.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
        },
    },
);
