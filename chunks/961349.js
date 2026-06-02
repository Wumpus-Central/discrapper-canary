n.d(t, { findMatchingAutocompleteType: () => tm, getOptions: () => to, findCommandOptionAutocompleteType: () => tc });
var l = n(284009),
    i = n.n(l),
    r = n(155718),
    s = n(168186),
    u = n(408018),
    o = n(189551),
    a = n(597184),
    m = n(627968),
    c = n(64700),
    d = n(123292),
    p = n(192308),
    y = n(721768),
    h = n(827785),
    g = n(264322),
    A = n(842209),
    M = n(210978),
    I = n(861382),
    N = n(392054),
    E = n(664929),
    S = n(659280),
    C = n(576705),
    f = n(257120),
    T = n(148355),
    D = n(375708);
function O(e) {
    let {
            titleWithQuery: t,
            titleWithoutQuery: n,
            query: l,
            getQuery: i,
            headerClassName: r,
            headerTrailingContent: s,
        } = e,
        u = l.length > 0 ? D.intl.formatToPlainString(t, { prefix: i(l) }) : n;
    return (0, m.jsx)(S.Ay.Title, { className: r, title: u, children: s }, `autocomplete-title-${u}`);
}
function _(e) {
    let {
        query: t,
        selectedIndex: n,
        autocompletes: l,
        onHover: i,
        onClick: r,
        titleWithQuery: s,
        titleWithoutQuery: u,
        Component: o,
        getProps: a,
        getQuery: d,
        key: p,
        indexOffset: y = 0,
        headerClassName: h,
        headerTrailingContent: g,
        footer: A,
    } = e;
    if (null == A && (null == l || 0 === l.length)) return null;
    let M = l?.map((e, t) => {
        let l = t + y,
            s = a(e, l);
        return (0, c.createElement)(o, { onClick: r, onHover: i, selected: n === l, index: l, ...s, key: s.key });
    });
    return (0, m.jsxs)(
        c.Fragment,
        {
            children: [
                null != s && null != u
                    ? O({
                          titleWithQuery: s,
                          titleWithoutQuery: u,
                          query: t,
                          getQuery: d,
                          headerClassName: h,
                          headerTrailingContent: g,
                      })
                    : null,
                M,
                A,
            ],
        },
        p,
    );
}
var L = n(827669),
    R = n(73510),
    k = n(905636);
let Y = { results: { entries: [] } };
function x() {
    (0, p.openModalLazy)(async () => {
        let { default: e } = await n.e("52855").then(n.bind(n, 563478));
        return (t) => (0, m.jsx)(e, { ...t });
    });
}
let B = {
    sentinel: "/",
    stores: [I.A, g.Ay, C.A],
    matches: (e, t, n, l, i) =>
        i.commands !== a.Ze.DISABLED && null == I.A.getActiveCommand(e.id) && (l || i.commands !== a.Ze.OLD_BUILT_INS),
    queryResults(e, t, n, l, i) {
        if (0 === n.length && l.commands !== a.Ze.OLD_BUILT_INS) return Y;
        if (l.commands === a.Ze.OLD_BUILT_INS) {
            let l = (0, h.Ez)([r.kc.CHAT], !1, !1),
                i = RegExp(`^${f.A.escape(n)}`, "i"),
                u = (0, s.PV)(l, i, { channel: e, guild: t }, 20),
                o = h.gZ[R.Ik.BUILT_IN];
            return 0 === u.length ? Y : { results: { entries: u.map((e) => ({ command: e, section: o })) } };
        }
        let u = (0, E.Yn)(e, n),
            { commands: o, sections: m } = A.eW(
                { channel: e, type: "channel" },
                { commandTypes: [r.kc.CHAT], text: u.text },
                { limit: 20, placeholderCount: 3, scoreMethod: M.M.COMMAND_OR_APPLICATION, allowFetch: i },
            );
        if (null == o) return Y;
        let c = o;
        if (u.hasSpaceTerminator) {
            let e = u.text.trim(),
                t = e + " ";
            c = c.filter((n) => n.displayName === e || n.displayName.startsWith(t));
        }
        return 0 === c.length
            ? Y
            : {
                  results: {
                      entries: c
                          .slice(0, 20)
                          .map((e) => ({ command: e, section: m?.find((t) => t.id === e.applicationId) })),
                  },
              };
    },
    renderResults(e) {
        let {
                results: { entries: t },
                selectedIndex: n,
                channel: l,
                query: i,
                options: r,
                onHover: s,
                onClick: u,
            } = e,
            o = (0, E.Yn)(l, i),
            c = r.commands === a.Ze.OLD_BUILT_INS;
        return _({
            query: o.text,
            selectedIndex: n,
            autocompletes: t,
            onHover: s,
            onClick: u,
            titleWithQuery: D.t.HFRoZR,
            titleWithoutQuery: D.intl.string(D.t["0hKkS+"]),
            getQuery: (e) => `/${e}`,
            Component: c ? S.Ay.Command : S.Ay.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return { key: t.id, command: t, channel: l, guildId: l.guild_id, showImage: !0, section: n };
            },
            key: "commands",
            headerClassName: c ? k.Y : null,
            headerTrailingContent: c && (0, m.jsx)(d.Q, { size: "xs", onClick: x, text: D.intl.string(D.t["8a0P0y"]) }),
        });
    },
    onSelect(e) {
        let {
                results: { entries: t },
                index: n,
                queryText: l,
                options: i,
                channel: r,
                location: s,
                tabOrEnter: u,
            } = e,
            { command: o, section: m } = t[n];
        if (o.inputType === N.y$.PLACEHOLDER) return null;
        if (i.commands === a.Ze.OLD_BUILT_INS) {
            var c;
            i.insertText(((c = o), `/${c.displayName}`));
        } else {
            let e = s;
            null == e && (e = u ? N.Oh.QUERY : N.Oh.DISCOVERY),
                y.Gf({ channelId: r.id, command: o, section: m ?? null, location: e, queryLength: l?.length });
        }
        return { type: a.kc.COMMAND };
    },
};
var q = n(735438),
    v = n.n(q),
    G = n(537652),
    U = n(166862),
    H = n(545152),
    j = n(768038),
    W = n(2717),
    P = n(911385);
let b = { results: { choices: [] } },
    Q = { results: { choices: [], isLoading: !0 } },
    V = Array.from({ length: 5 }, () => ({ name: "", displayName: "", value: "" })),
    $ = { results: { choices: [], isError: !0 } },
    w = v().debounce(H.A, R.$r, { leading: !0, trailing: !0 }),
    Z = {
        stores: [I.A, U.A],
        showEmpty: !0,
        matches(e, t, n, l, i) {
            let s = I.A.getActiveOption(e.id);
            return (
                i.commands !== a.Ze.DISABLED &&
                null != s &&
                (s.type === r.n4.BOOLEAN || !!s?.autocomplete || (s?.choices != null && s.choices.length > 0))
            );
        },
        queryResults(e, t, n, l, i) {
            let s = I.A.getActiveOption(e.id);
            if (null == s) return b;
            if (s.autocomplete) {
                if (
                    (i &&
                        w({
                            command: I.A.getActiveCommand(e.id),
                            optionValues: l.getCommandOptionValues(),
                            context: { channel: e, guild: t, autocomplete: { name: s.name, query: n } },
                        }),
                    U.A.getLastErrored(e.id))
                )
                    return $;
                let r = U.A.getAutocompleteChoices(e.id, s.name, n);
                return null == r ? Q : { results: { choices: r } };
            }
            return {
                results: j.Ay.queryChoiceResults({
                    query: n,
                    choices: s.type === r.n4.BOOLEAN ? R.Ss : (s.choices ?? []),
                }),
            };
        },
        renderResults(e) {
            let {
                results: { choices: t, isLoading: n, isError: l },
                selectedIndex: i,
                query: r,
                onHover: s,
                onClick: u,
            } = e;
            return l
                ? (0, m.jsx)(G.A, { message: D.intl.string(D.t.rTAbPn), noResultsImageURL: P, className: W.k })
                : 0 !== t.length || n
                  ? _({
                        query: r,
                        selectedIndex: i,
                        autocompletes: n ? V : t,
                        onHover: s,
                        onClick: u,
                        titleWithQuery: D.t.pg0anB,
                        titleWithoutQuery: D.intl.string(D.t["+1H47t"]),
                        Component: n ? S.Ay.Loading : S.Ay.Generic,
                        getProps: (e, t) => ({ key: t.toString(), text: e.displayName }),
                        getQuery: (e) => e,
                        key: "choice",
                    })
                  : (0, m.jsx)(G.A, { message: D.intl.string(D.t["41014u"]), noResultsImageURL: P, className: W.k });
        },
        onSelect(e) {
            let {
                    results: { choices: t },
                    index: n,
                    options: l,
                } = e,
                i = t[n];
            return l.insertText(i.displayName), { type: a.kc.CHOICE };
        },
    };
n(321073);
let F = { results: { commandOptions: [] } },
    K = {
        stores: [I.A],
        focusMode: a.e.AUTO_WHEN_FILTERED,
        matches: (e, t, n, l, i) => !(l || null == I.A.getActiveCommand(e.id) || null != I.A.getActiveOption(e.id)),
        queryResults(e, t, n, l, i) {
            let r = I.A.getActiveCommand(e.id);
            if (r?.options == null) return F;
            let s = I.A.getOptionStates(e.id),
                u = r.options.filter((e) => e.displayName.startsWith(n) && !s[e.name]?.hasValue);
            return 0 === u.length ? F : { results: { commandOptions: u } };
        },
        renderResults(e) {
            let {
                    results: { commandOptions: t },
                    selectedIndex: n,
                    query: l,
                    onHover: i,
                    onClick: r,
                } = e,
                s = [],
                u = [];
            t.forEach((e) => {
                (e.required ? s : u).push(e);
            });
            let o =
                    s.length > 0
                        ? _({
                              query: l,
                              selectedIndex: n,
                              autocompletes: s,
                              onHover: i,
                              onClick: r,
                              titleWithQuery: D.t["iO/jnA"],
                              titleWithoutQuery: D.intl.string(D.t["7II2G3"]),
                              Component: S.Ay.Generic,
                              getProps: (e, t) => ({
                                  key: t.toString(),
                                  text: e.displayName,
                                  description: e.displayDescription,
                              }),
                              getQuery: (e) => e,
                              key: "required-options",
                          })
                        : null,
                a =
                    u.length > 0
                        ? _({
                              query: l,
                              selectedIndex: n,
                              autocompletes: u,
                              onHover: i,
                              onClick: r,
                              titleWithQuery: D.t.pg0anB,
                              titleWithoutQuery:
                                  s.length > 0 ? D.intl.string(D.t.TpDXm4) : D.intl.string(D.t["+1H47t"]),
                              Component: S.Ay.Generic,
                              getProps: (e, t) => ({
                                  key: t.toString(),
                                  text: e.displayName,
                                  description: e.displayDescription,
                              }),
                              getQuery: (e) => e,
                              key: "optional-options",
                              indexOffset: s.length,
                          })
                        : null;
            return (0, m.jsxs)(m.Fragment, { children: [o, a] });
        },
        onSelect(e) {
            var t;
            let {
                    results: { commandOptions: n },
                    index: l,
                    options: i,
                } = e,
                r = n[l];
            return i.insertText(((t = r), `${t.displayName}:`)), { type: a.kc.COMMAND_OPTION };
        },
    };
var J = n(952818);
let z = {
    autocompleteInputElementType: "gameMentionInput",
    stores: [n(760751).A, J.Ay],
    matches: (e, t, n, l, i) => !0,
    queryResults: (e, t, n) => ({ results: { games: j.Ay.queryGames(n) } }),
    renderResults(e) {
        let {
            results: { games: t },
            selectedIndex: n,
            query: l,
            onHover: i,
            onClick: r,
        } = e;
        if (0 === t.length) return null;
        let s = t.map((e, t) =>
                (0, m.jsx)(S.Ay.Game, { onClick: r, onHover: i, selected: n === t, index: t, game: e }, e.id),
            ),
            u = D.t["/U2VW+"],
            o = D.intl.string(D.t.URyqtP);
        return (0, m.jsxs)(
            c.Fragment,
            { children: [O({ titleWithQuery: u, titleWithoutQuery: o, query: l, getQuery: X }), s] },
            "mentions",
        );
    },
    onSelect(e) {
        let {
                results: { games: t },
                index: n,
                options: l,
            } = e,
            i = t[n];
        return (
            l.addMentionGame({ id: i.id, name: i.name, icon_hash: i.icon ?? i.icon_hash }),
            l.replaceInlineInput("gameMentionInput", X(i.name), (0, L.K)(i.id)),
            { type: a.kc.GAME_MENTION, metadata: { gameId: i.id } }
        );
    },
};
function X(e) {
    return `@${e}`;
}
n(667532);
var ee = n(478437),
    et = n(115718),
    en = n(47167),
    el = n(734057),
    ei = n(808728),
    er = n(994500),
    es = n(287809),
    eu = n(746080),
    eo = n(926972),
    ea = n(937862),
    em = n(361670),
    ec = n(631576),
    ed = n(750385),
    ep = n(194004),
    ey = n(71393),
    eh = n(174459),
    eg = n(652215),
    eA = n(111995);
function eM(e, t) {
    return (0, m.jsx)(T.A, { sticker: e, isInteracting: t, size: 40 });
}
let eI = {
    sentinel: ":",
    stores: [ed.A],
    matches: (e, t, n, l, i) => n.length > 1,
    queryResults(e, t, n, l, i) {
        let r = l.allowSoundmoji && (0, eo.AA)({ location: "queryResults" }),
            s = l.allowStickers || r ? 0 : 40,
            u = eg.rs7 + s,
            {
                emojis: { unlocked: o },
            } = j.Ay.queryEmojiResults({ query: n, channel: e, intention: l.emojiIntention, maxCount: u });
        "-" === n[0] && (o = o.filter((e) => e.names?.includes(n)));
        let a = [];
        if (l.allowStickers) {
            (0, ec.YB)();
            let t = j.Ay.queryStickers([n], !0, [e, (e, t) => t === em.Ux.SENDABLE]),
                l = Math.max(4, 8 - o.length);
            (a = t.slice(0, l)), "-" === n[0] && (a = t.filter((e) => e.sticker.name === n));
        }
        let m = [];
        r &&
            ((m = j.Ay.querySoundmoji(n, e)
                .map((e) => ({ sound: e }))
                .slice(0, 4)),
            "-" === n[0] && (m = m.filter((e) => e.sound.name === n)));
        let c = o.slice(0, Math.max(6, u - a.length - m.length));
        return {
            results: { emojis: c, stickers: a, soundmoji: m },
            metadata: { numEmojiResults: c.length, numStickerResults: a.length, numSoundmojiResults: m.length },
        };
    },
    renderResults(e) {
        let {
                results: { emojis: t, stickers: n, soundmoji: l },
                selectedIndex: i,
                query: r,
                onHover: s,
                onClick: u,
            } = e,
            o = t.length > 0,
            a = n.length > 0;
        return (0, m.jsxs)(m.Fragment, {
            children: [
                _({
                    query: r,
                    selectedIndex: i,
                    autocompletes: t,
                    onHover: s,
                    onClick: u,
                    titleWithQuery: D.t.ksAVYt,
                    titleWithoutQuery: D.intl.string(D.t.sMOuuS),
                    Component: S.Ay.Emoji,
                    getProps: (e) => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: ":",
                        guild: null != e.guildId ? ey.A.getGuild(e.guildId) : null,
                    }),
                    getQuery: (e) => `:${e}`,
                    key: "emoji",
                }),
                o && a && (0, m.jsx)(S.Ay.Divider, { className: eA.y }),
                _({
                    query: r,
                    selectedIndex: i,
                    autocompletes: n,
                    onHover: s,
                    onClick: u,
                    titleWithQuery: D.t.uferGG,
                    titleWithoutQuery: D.intl.string(D.t["fT+Yjp"]),
                    Component: S.Ay.Sticker,
                    getProps: (e) => {
                        let { comparator: t, sticker: n } = e;
                        return {
                            renderSticker: eM,
                            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                            sticker: n,
                            key: n.id,
                        };
                    },
                    getQuery: (e) => e,
                    key: "stickers",
                    indexOffset: t.length,
                    headerClassName: o ? eA._ : void 0,
                }),
                (o || a) && l.length > 0 && (0, m.jsx)(S.Ay.Divider, { className: eA.y }),
                _({
                    query: r,
                    selectedIndex: i,
                    autocompletes: l,
                    onHover: s,
                    onClick: u,
                    titleWithQuery: D.t["0cKBGM"],
                    titleWithoutQuery: D.intl.string(D.t.EHlAMc),
                    Component: S.Ay.Soundmoji,
                    getProps: (e) => {
                        let { sound: t } = e;
                        return { sound: t, key: t.soundId };
                    },
                    getQuery: (e) => e,
                    key: "soundmoji",
                    indexOffset: t.length + n.length,
                    headerClassName: o || a ? eA._ : void 0,
                }),
            ],
        });
    },
    onSelect(e) {
        let {
            results: { emojis: t, soundmoji: n, stickers: l },
            index: i,
            options: r,
            channel: s,
        } = e;
        if (i < t.length) {
            var u, o;
            let e,
                n = t[i];
            return (
                r.insertText(
                    ((u = n), `:${u.name}:`),
                    ((e = (o = n).animated ? "a" : ""),
                    o.managed || null == o.id ? `:${o.name}:` : `<${e}:${o.originalName ?? o.name}:${o.id}>`),
                ),
                {
                    type: a.kc.EMOJI,
                    metadata: {
                        emojiId: n.id,
                        numEmojiResults: t.length,
                        numStickerResults: l.length,
                        expressionName: n.name,
                        isCustom: null != n.id,
                        isAnimated: n.animated,
                    },
                }
            );
        }
        if ((i -= t.length) < l.length) {
            let e = l[i];
            return (
                r.insertText(""),
                r.sendSticker(e.sticker, ep.D6.AUTOCOMPLETE),
                {
                    type: a.kc.STICKER,
                    metadata: { numEmojiResults: t.length, numStickerResults: l.length, stickerId: e.sticker.id },
                }
            );
        }
        if ((i -= l.length) < n.length) {
            let e = n[i];
            return (
                r.insertText((0, ea.A)(e.sound.guildId, e.sound.soundId)),
                eh.default.track(eg.HAw.SOUNDMOJI_SELECT, {
                    channel_id: s.id,
                    guild_id: s.guild_id,
                    sound_guild_id: e.sound.guildId,
                    sound_id: e.sound.soundId,
                    source: "autocomplete",
                }),
                { type: a.kc.SOUNDMOJI, metadata: { numEmojiResults: t.length, numStickerResults: l.length } }
            );
        }
        return { type: null };
    },
};
var eN = n(289873),
    eE = n(228366),
    eS = n(636537),
    eC = n(17928);
let ef = {},
    eT = { integration: "", query: "" };
class eD extends eC.Ay.Store {
    static displayName = "IntegrationQueryStore";
    getResults(e, t) {
        if (null == e || null == t) return null;
        let n = ef[e];
        return null != n && null != n[t] ? n[t] : null;
    }
    getQuery() {
        return eT;
    }
}
let eO = new eD(eE.h, {
        INTEGRATION_QUERY: function (e) {
            let { integration: t, query: n } = e;
            (ef[t] = ef[t] ?? {}), (ef[t][n] = { loading: !0, results: [] });
        },
        INTEGRATION_QUERY_SUCCESS: function (e) {
            let { integration: t, query: n, results: l } = e;
            (ef[t][n] = { loading: !1, results: l.map((e) => ({ type: eg.Z86[t].type, meta: e })) }),
                (eT = { query: n, integration: t });
        },
        INTEGRATION_QUERY_FAILURE: function (e) {
            let { integration: t, query: n } = e;
            delete ef[t][n];
        },
    }),
    e_ = {
        search(e, t) {
            null == eO.getResults(e, t) &&
                (eE.h.dispatch({ type: "INTEGRATION_QUERY", integration: e, query: t }),
                eS.Bo.get({
                    url: eg.Rsh.INTEGRATION_SEARCH("tenor"),
                    query: { q: t },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(
                    (n) => {
                        eE.h.dispatch({ type: "INTEGRATION_QUERY_SUCCESS", integration: e, query: t, results: n.body });
                    },
                    () => eE.h.dispatch({ type: "INTEGRATION_QUERY_FAILURE", integration: e, query: t }),
                ));
        },
    };
var eL = n(95561),
    eR = n(235986),
    ek = n(331691);
let eY = { results: { command: null, integrations: [], isLoading: !1 } };
function ex(e, t, n) {
    let l;
    return (
        n.commands === a.Ze.OLD_BUILT_INS
            ? ((l = t.split(" ")[0].substring(1)), (t = t.substring((l.length ?? 0) + 1)))
            : (l = I.A.getActiveCommand(e.id)?.untranslatedName),
        { command: l, query: t.trim() }
    );
}
let eB = {
    stores: [I.A, eO],
    matches: (e, t, n, l, i) =>
        i.commands !== a.Ze.DISABLED &&
        (i.commands === a.Ze.OLD_BUILT_INS
            ? n.startsWith("/gif") || n.startsWith("/tenor")
            : I.A.getActiveCommand(e.id)?.integrationType === eg.p_j.GIF && I.A.getOptionStates(e.id).query.hasValue),
    queryResults(e, t, n, l, i) {
        let { command: r, query: s } = ex(e, n, l);
        if (null == r) return eY;
        let u = v().findKey(eg.Z86, (e) => e.command === r);
        i && null != u && s.length > 0 && e_.search(u, s);
        let o = eO.getResults(u, s);
        return null == o ? eY : { results: { command: r, integrations: o.results, isLoading: o.loading } };
    },
    renderResults(e) {
        let {
                results: { integrations: t, isLoading: n },
                selectedIndex: l,
                channel: i,
                query: r,
                options: s,
                onHover: u,
                onClick: o,
            } = e,
            { command: d, query: p } = ex(i, r, s);
        if (null == d || 0 === p.length) return null;
        if (n) return (0, m.jsx)(eN.y, { className: ek.u1, type: eN.y.Type.SPINNING_CIRCLE });
        if (null != t) {
            let e = !1,
                n = t.map((t, n) => {
                    if (t.type === eg.p_j.GIF)
                        return (
                            (e = !0),
                            (0, m.jsx)(
                                S.Ay.GIFIntegration,
                                {
                                    className: ek.ho,
                                    onClick: o,
                                    onHover: u,
                                    selected: l === n,
                                    index: n,
                                    width: t.meta.width ?? 0,
                                    height: t.meta.height ?? 0,
                                    src: t.meta.src ?? "",
                                    url: t.meta.url,
                                },
                                `${t.meta.url}${t.meta.src}`,
                            )
                        );
                }),
                r = s.commands === a.Ze.OLD_BUILT_INS ? d : (I.A.getActiveCommand(i.id)?.integrationTitle ?? d),
                y =
                    p.length > 0 && null != r
                        ? D.intl.format(D.t["3njXz/"], { query: p, command: r })
                        : null != r
                          ? r
                          : d;
            return (0, m.jsxs)(
                c.Fragment,
                {
                    children: [
                        (0, m.jsx)(S.Ay.Title, { title: y }),
                        e ? (0, m.jsx)(eR.A, { className: ek.os, children: n }) : n,
                    ],
                },
                "gifs",
            );
        }
    },
    onSelect(e) {
        let {
            results: { command: t, integrations: n },
            index: l,
            type: i,
            options: r,
            channel: s,
            guild: u,
        } = e;
        if (null == t) return { type: null };
        let o = n[l];
        if (
            (i === a.lg.INSERT ? r.replaceText(o.meta.url) : r.sendMessage(o.meta.url),
            eL.Ay.trackWithMetadata(eg.HAw.SEARCH_RESULT_SELECTED, {
                search_type: eg.I4_.GIF,
                index_num: l,
                source_object: `/${t}`,
            }),
            r.commands !== a.Ze.OLD_BUILT_INS)
        ) {
            let e = I.A.getActiveCommand(s.id);
            e?.inputType === N.y$.BUILT_IN_INTEGRATION &&
                (eE.h.dispatch({
                    type: "APPLICATION_COMMAND_USED",
                    context: { channel: s, guild: u },
                    command: e,
                    commandOrigin: N.iw.CHAT,
                }),
                eL.Ay.trackWithMetadata(eg.HAw.APPLICATION_COMMAND_USED, {
                    command_id: e.id,
                    application_id: e.applicationId,
                    command_type: e.type,
                    source: I.A.getSource(s.id),
                }));
        }
        return { type: a.kc.GIF };
    },
};
var eq = n(885386),
    ev = n(562153);
let eG = /^<@!?(\d+)>/u;
function eU(e) {
    let t = eG.exec(e);
    if (null != t) {
        let n = t[1],
            l = es.default.getUser(n);
        return null != l && l.bot ? { type: "mention", cleanedQuery: e.substring(t[0].length).trim(), user: l } : null;
    }
    return null;
}
let eH = {
    ...B,
    sentinel: void 0,
    focusMode: a.e.MANUAL,
    matches(e, t, n, l, i) {
        if (i.commands === a.Ze.DISABLED || i.commands === a.Ze.OLD_BUILT_INS || n.length < 2 || !eq._3.getSetting())
            return !1;
        let r = eU(n);
        return null != r && r.cleanedQuery.length > 0;
    },
    queryResults(e, t, n, l, i) {
        if (!eq._3.getSetting()) return Y;
        let s = eU(n);
        if (null == s) return Y;
        let u = (0, E.Yn)(e, s.cleanedQuery),
            { commands: o, sections: a } = A.eW(
                { channel: e, type: "channel" },
                { commandTypes: [r.kc.CHAT], text: u.text },
                { limit: 20, placeholderCount: 3, scoreMethod: M.M.COMMAND_OR_APPLICATION, allowFetch: i },
            );
        if (null == o) return Y;
        let m = o.filter((e) => e.section.botId === s.user.id);
        if (u.hasSpaceTerminator) {
            let e = u.text.trim(),
                t = e + " ";
            m = m.filter((n) => n.untranslatedName === e || n.untranslatedName.startsWith(t));
        }
        return 0 === m.length
            ? Y
            : {
                  results: {
                      entries: m
                          .slice(0, 20)
                          .map((e) => ({ command: e, section: a?.find((t) => t.id === e.applicationId) })),
                  },
              };
    },
    renderResults(e) {
        let {
            results: { entries: t },
            selectedIndex: n,
            guild: l,
            channel: i,
            query: r,
            options: s,
            onHover: u,
            onClick: o,
        } = e;
        return _({
            query: r,
            selectedIndex: n,
            autocompletes: t,
            onHover: u,
            onClick: o,
            titleWithQuery: D.t.HFRoZR,
            titleWithoutQuery: D.intl.string(D.t["0hKkS+"]),
            Component: s.commands === a.Ze.OLD_BUILT_INS ? S.Ay.Command : S.Ay.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return { key: t.id, command: t, channel: i, guildId: i.guild_id, showImage: !0, section: n };
            },
            getQuery: (e) => {
                let t = eU(e);
                if ("mention" !== t.type) return e;
                let n = ev.Ay.getName(l?.id, i.id, t.user);
                return e.replace(eG, `@${n}`);
            },
            key: "commands",
        });
    },
    onSelect(e) {
        let { results: t, index: n, type: l, options: i, channel: r, guild: s } = e,
            u = B.onSelect({
                results: t,
                index: n,
                type: l,
                options: i,
                channel: r,
                guild: s,
                location: N.Oh.SUGGESTION,
            });
        return null == u ? null : { ...u, type: a.kc.COMMAND_SUGGESTION };
    },
};
var ej = n(777666),
    eW = n(661531),
    eP = n(352505);
function eb(e) {
    let { onClick: t, onHover: n, selected: l, index: i, text: r, description: s } = e,
        { showNewTag: u } = eP.r.useConfig({ location: "GameMentionGlobalRow" }),
        o = u ? (0, m.jsx)(ej.Lp, { text: D.intl.string(D.t.y2b7CA), color: eW.A.colors.BACKGROUND_BRAND.css }) : null;
    return (0, m.jsx)(S.Ay.Generic, {
        onClick: t,
        onHover: n,
        selected: l,
        index: i,
        text: r,
        description: s,
        badge: o,
        "aria-label": r,
    });
}
var eQ = n(696451),
    eV = n(427262);
let e$ = {
    sentinel: "@",
    stores: [eQ.Ay],
    matches: (e, t, n, l, i) =>
        i.mentions.user !== a.Vf.DENY || i.mentions.role !== a.eP.DENY || i.mentions.global !== a.VN.DENY,
    queryResults(e, t, n, l, i) {
        let r = l.mentions.global === a.VN.ALLOW_EVERYONE || l.mentions.global === a.VN.ALLOW_EVERYONE_OR_HERE,
            s = l.mentions.global === a.VN.ALLOW_EVERYONE_OR_HERE,
            u = l.mentions.user !== a.Vf.DENY,
            o = l.mentions.role !== a.eP.DENY,
            m = l.mentions.user === a.Vf.ALLOW_GUILD,
            c = l.mentions.role === a.eP.ALLOW_ALL;
        return {
            results: j.Ay.queryMentionResults({
                query: n,
                channel: e,
                canMentionEveryone: r,
                canMentionHere: s,
                canMentionUsers: u,
                canMentionRoles: o,
                canMentionOtherGlobals: l.mentions.otherGlobals,
                includeAllGuildUsers: m,
                includeNonMentionableRoles: c,
                request: i,
            }),
        };
    },
    renderResults(e) {
        let t,
            n,
            {
                results: { users: l, globals: i, roles: r },
                selectedIndex: s,
                channel: u,
                query: o,
                options: d,
                onHover: p,
                onClick: y,
            } = e,
            h = l.map((e, t) =>
                (0, m.jsx)(
                    S.Ay.User,
                    {
                        guildId: u.guild_id,
                        onClick: y,
                        onHover: p,
                        selected: s === t,
                        index: t,
                        user: e.user,
                        nick: e.nick,
                        status: e.status,
                        hidePersonalInformation: d.hidePersonalInformation,
                    },
                    e.user.id,
                ),
            ),
            g = i.map((e, t) => {
                let n = {
                    onClick: y,
                    onHover: p,
                    selected: s === t + l.length,
                    index: l.length + t,
                    text: e.text,
                    description: d.hideMentionDescription ? null : e.description,
                };
                return "gameMentionInput" === e.inlineAutocompleteType
                    ? (0, c.createElement)(eb, { ...n, key: e.text })
                    : (0, c.createElement)(S.Ay.Generic, { ...n, key: e.text, "aria-label": e.text });
            }),
            A = r.map((e, t) =>
                (0, m.jsx)(
                    S.Ay.Role,
                    {
                        onClick: y,
                        onHover: p,
                        selected: s === t + l.length + i.length,
                        index: l.length + i.length + t,
                        role: e,
                        hideDescription: d.hideMentionDescription,
                        guildId: u.guild_id,
                    },
                    e.id,
                ),
            );
        return (
            d.mentions.user === a.Vf.DENY
                ? ((t = D.t.MLiD1e), (n = D.intl.string(D.t["LPJmL/"])))
                : ((t = D.t.rPNimn), (n = D.intl.string(D.t["9Oq93m"]))),
            (0, m.jsxs)(
                c.Fragment,
                {
                    children: [
                        O({ titleWithQuery: t, titleWithoutQuery: n, query: o, getQuery: (e) => `@${e}` }),
                        h,
                        l.length > 0 && i.length > 0 ? (0, m.jsx)(S.Ay.Divider, {}) : null,
                        g,
                        (l.length > 0 && r.length > 0) || (i.length > 0 && r.length > 0)
                            ? (0, m.jsx)(S.Ay.Divider, {})
                            : null,
                        A,
                    ],
                },
                "mentions",
            )
        );
    },
    onSelect(e) {
        var t, n, l, i, r, s;
        let {
                results: { users: u, globals: o, roles: m },
                index: c,
                options: d,
                channel: p,
            } = e,
            y = u[c],
            h = o[c - u.length],
            g = m[c - u.length - o.length],
            A = a.kc.MENTION;
        if (null != y) {
            d.insertText(
                ((t = y.user),
                (n = p),
                (l = d.hidePersonalInformation),
                j.Ay.hasSameRoleAsUsername(n, t)
                    ? `@${t.tag}`
                    : `@${eV.Ay.getUserTag(t, { identifiable: l ? "never" : "always" })}`),
                ((i = y.user), `<@${i.id}>`),
            );
        } else if (null != h)
            if (null != h.inlineAutocompleteType)
                switch ((d.insertAutocompleteInput(h.inlineAutocompleteType), h.inlineAutocompleteType)) {
                    case "gameMentionInput":
                        A = a.kc.GAME_MENTION;
                        break;
                    case "timestampMentionInput":
                        A = a.kc.TIMESTAMP;
                }
            else d.insertText(h.text);
        else {
            null != g && d.insertText(((r = g), `@${r.name}`), ((s = g), `<@&${s.id}>`));
        }
        return { type: A };
    },
};
var ew = n(307731);
let eZ = { results: { command: null, stickers: [] } };
function eF(e, t) {
    return (0, m.jsx)(T.A, { sticker: e, isInteracting: t, size: 40 });
}
let eK = {
    stores: [ed.A],
    matches: (e, t, n, l, i) =>
        i.commands !== a.Ze.DISABLED &&
        i.commands !== a.Ze.OLD_BUILT_INS &&
        I.A.getActiveCommand(e.id)?.integrationType === eg.p_j.STICKER &&
        I.A.getOptionStates(e.id).query.hasValue,
    queryResults(e, t, n, l) {
        let i = I.A.getActiveCommand(e.id)?.untranslatedName;
        if (null == i) return eZ;
        let r = [];
        return (
            (0, ec.YB)(),
            {
                results: {
                    command: i,
                    stickers: (r = j.Ay.queryStickers([n], !0, [e, (e, t) => t === em.Ux.SENDABLE]).slice(0, 8)),
                },
                metadata: { numStickerResults: r.length },
            }
        );
    },
    renderResults(e) {
        let {
            results: { stickers: t },
            selectedIndex: n,
            query: l,
            onHover: i,
            onClick: r,
        } = e;
        return (0, m.jsx)(m.Fragment, {
            children: _({
                query: l,
                selectedIndex: n,
                autocompletes: t,
                onHover: i,
                onClick: r,
                titleWithQuery: D.t.uferGG,
                titleWithoutQuery: D.intl.string(D.t["fT+Yjp"]),
                Component: S.Ay.Sticker,
                getProps: (e) => {
                    let { comparator: t, sticker: n } = e;
                    return {
                        renderSticker: eF,
                        queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                        sticker: n,
                        key: n.id,
                    };
                },
                getQuery: (e) => e,
                key: "stickers",
            }),
        });
    },
    onSelect(e) {
        let t,
            {
                results: { command: n, stickers: l },
                index: i,
                options: r,
                channel: s,
                guild: u,
                queryText: o,
            } = e;
        if (null == n || i >= l.length) return { type: null };
        let m = I.A.getActiveCommand(s.id);
        m?.inputType === N.y$.BUILT_IN_INTEGRATION &&
            (eE.h.dispatch({
                type: "APPLICATION_COMMAND_USED",
                context: { channel: s, guild: u },
                command: m,
                commandOrigin: N.iw.CHAT,
            }),
            eL.Ay.trackWithMetadata(eg.HAw.APPLICATION_COMMAND_USED, {
                command_id: m.id,
                application_id: m.applicationId,
                command_type: m.type,
                source: I.A.getSource(s.id),
            }));
        let c = l[i];
        return (
            r.sendSticker(c.sticker, ep.D6.BUILT_IN_INTEGRATION),
            c.sticker.type === ep.NL.GUILD && (t = c.sticker.guild_id),
            eL.Ay.trackWithMetadata(eg.HAw.SEARCH_RESULT_SELECTED, {
                load_id: c.sticker.id,
                search_type: eg.I4_.STICKER,
                source_object: `/${n}`,
                total_results: l.length,
                index_num: i,
                expression_guild_id: t,
                sticker_id: c.sticker.id,
                query: o,
            }),
            { type: a.kc.STICKER, metadata: { numStickerResults: l.length, stickerId: c.sticker.id } }
        );
    },
};
var eJ = n(59892),
    ez = n(186693),
    eX = n(262234),
    e0 = n(717470),
    e1 = n(977936),
    e6 = n(849455),
    e7 = n(288116),
    e8 = n(406002),
    e2 = n(381349),
    e4 = n(860323),
    e5 = n(670441),
    e3 = n(994372),
    e9 = n(576497),
    te = n(989349),
    tt = n.n(te),
    tn = n(379418),
    tl = n(773669);
let ti = ["h:mm:ssa", "h:mm:ss a", "H:mm:ss", "h:mma", "h:mm a", "H:mm", "HHmm", "ha", "h a", "H", "LT", "LTS"],
    tr = [
        tt().ISO_8601,
        ...[
            "YYYYMMDD",
            "YYYY-MM-DD",
            "LL",
            "L",
            "MMMM Do YYYY",
            "MMMM Do YY",
            "MMMM Do, YYYY",
            "MMMM Do, YY",
            "MMMM D YYYY",
            "MMMM D YY",
            "MMMM D, YYYY",
            "MMMM D, YY",
            "MMMM Do YYYY",
            "MMMM Do YY",
            "MMMM Do, YYYY",
            "MMMM Do, YY",
            "MMM D YYYY",
            "MMM D YY",
            "MMM D, YYYY",
            "MMM D, YY",
            "MMM Do YYYY",
            "MMM Do YY",
            "MMM Do, YYYY",
            "MMM Do, YY",
            "MMMM D",
            "MMMM Do",
            "MMM D",
            "MMM Do",
            "D MMMM",
            "Do MMMM",
            "D MMM",
            "Do MMM",
            "dddd",
            "ddd",
        ].flatMap((e) => [...ti.map((t) => `${e} ${t}`), ...ti]),
    ],
    ts = [
        a.DB.CHOICES,
        a.DB.GAME,
        a.DB.GIFS,
        a.DB.STICKERS,
        a.DB.COMMAND_OPTIONS,
        a.DB.EMOJIS_AND_STICKERS,
        a.DB.REACTIONS,
        a.DB.CHANNELS,
        a.DB.MENTIONS,
        a.DB.COMMANDS,
        a.DB.LEGACY_COMMANDS,
        a.DB.TIMESTAMPS,
    ],
    tu = {
        [a.DB.CHANNELS]: {
            sentinel: "#",
            matches: (e, t, n, l, i) => i.mentions.channel !== a.xS.DENY && !e.isPrivate(),
            queryResults(e, t, n, l, i) {
                let r,
                    s,
                    u = ei.I6;
                return (
                    n.charAt(0) === et.AT.VOICE_CHANNEL && ((u = ei.vM), (n = n.substring(1))),
                    l.forNonStringCommandOption
                        ? (r = j.Ay.queryApplicationCommandChannelResults({
                              query: n,
                              channel: e,
                              channelTypes: l.allowedChannelTypes,
                          }))
                        : ((r = j.Ay.queryChannelResults({ query: n, channel: e, type: u })),
                          null != t &&
                              ((s = j.Ay.queryStaticRouteChannels({ query: n, guild: t })), r.channels.unshift(...s))),
                    { results: r, staticRouteChannels: s }
                );
            },
            renderResults(e) {
                let t,
                    n,
                    {
                        results: { channels: l },
                        selectedIndex: i,
                        query: r,
                        options: s,
                        onHover: u,
                        onClick: o,
                    } = e,
                    a = r.charAt(0) === et.AT.VOICE_CHANNEL;
                return (
                    a
                        ? ((t = D.t["rMUL3+"]), (n = D.intl.string(D.t.CYnO4s)), (r = r.substring(1)))
                        : s.forNonStringCommandOption
                          ? ((t = D.t.upNFT5), (n = D.intl.string(D.t.OGiMXJ)))
                          : ((t = D.t.UhnmJD), (n = D.intl.string(D.t.nIfr0Y))),
                    _({
                        query: r,
                        selectedIndex: i,
                        autocompletes: l,
                        onHover: u,
                        onClick: o,
                        titleWithQuery: t,
                        titleWithoutQuery: n,
                        Component: S.Ay.Channel,
                        getProps: (e) => ({ channel: e, key: e.id, category: el.A.getChannel(e.parent_id) }),
                        getQuery: (e) => (a ? `#${et.AT.VOICE_CHANNEL}${e}` : `#${e}`),
                        key: "channels",
                    })
                );
            },
            onSelect(e) {
                var t;
                let {
                        results: { channels: n },
                        index: l,
                        options: i,
                    } = e,
                    r = n[l];
                return (
                    i.insertText(
                        (function (e) {
                            switch (e.type) {
                                case ee.r.PUBLIC_THREAD:
                                case ee.r.PRIVATE_THREAD:
                                case ee.r.ANNOUNCEMENT_THREAD:
                                case ee.r.GUILD_VOICE:
                                case ee.r.GUILD_STAGE_VOICE:
                                case ee.r.GUILD_CATEGORY:
                                    return `#"${(0, en.Eq)((0, en.m1)(e, es.default, er.A))}"`;
                                default:
                                    let t = ei.Ay.getTextChannelNameDisambiguations(e.guild_id)[e.id];
                                    return `#${null != t ? t.name : ((0, en.m1))(e, es.default, er.A)}`;
                            }
                        })(r),
                        ((t = r), eu.aQ.has(t.id) ? `<id:${t.id}>` : `<#${t.id}>`),
                    ),
                    { type: a.kc.CHANNEL }
                );
            },
        },
        [a.DB.COMMANDS]: B,
        [a.DB.COMMAND_OPTIONS]: K,
        [a.DB.CHOICES]: Z,
        [a.DB.EMOJIS_AND_STICKERS]: eI,
        [a.DB.STICKERS]: eK,
        [a.DB.GIFS]: eB,
        [a.DB.LEGACY_COMMANDS]: eH,
        [a.DB.MENTIONS]: e$,
        [a.DB.REACTIONS]: {
            sentinel: "+:",
            matches: (e, t, n, l, i) =>
                l &&
                (i.chatInputType.autocomplete?.addReactionShortcut ?? !1) &&
                (C.A.can(eg.xBc.ADD_REACTIONS, e) || e.isPrivate()),
            queryResults(e, t, n, l, i) {
                let { emojis: r } = j.Ay.queryEmojiResults({
                    query: n,
                    channel: e,
                    intention: ew.EmojiIntention.REACTION,
                    maxCount: 50,
                });
                return { results: { emojis: r.unlocked } };
            },
            renderResults(e) {
                let {
                    results: { emojis: t },
                    selectedIndex: n,
                    query: l,
                    onHover: i,
                    onClick: r,
                } = e;
                return _({
                    query: l,
                    selectedIndex: n,
                    autocompletes: t,
                    onHover: i,
                    onClick: r,
                    titleWithQuery: D.t.o1Nmpc,
                    titleWithoutQuery: D.intl.string(D.t.sMOuuS),
                    Component: S.Ay.Emoji,
                    getProps: (e) => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: ":",
                        guild: null != e.guildId ? ey.A.getGuild(e.guildId) : null,
                    }),
                    getQuery: (e) => `+:${e}`,
                    key: "reactions",
                });
            },
            onSelect(e) {
                var t;
                let {
                        results: { emojis: n },
                        index: l,
                        options: i,
                    } = e,
                    r = n[l];
                return i.sendMessage(((t = r), `+:${t.name}:`)), { type: a.kc.REACTION };
            },
        },
        [a.DB.GAME]: z,
        [a.DB.TIMESTAMPS]: {
            autocompleteInputElementType: "timestampMentionInput",
            matches: (e, t, n, l, i) => n.length > 1,
            queryResults(e, t, n) {
                let l = tt()(),
                    i = (function () {
                        let e = tl.default.locale;
                        if ("en-US" === e) return eJ;
                        if ("en-GB" === e) return eJ.GB;
                        if ("de" === e) return ez;
                        if ("fr" === e) return eX;
                        if ("ja" === e) return e0;
                        else if ("nl" === e) return e1;
                        else if ("ru" === e) return e6;
                        else if ("it" === e) return e7;
                        else if ("uk" === e) return e8;
                        else if ("zh-CN" === e) return e2;
                        else if ("zh-TW" === e) return e4;
                        else if (e.startsWith("sv-")) return e5;
                        else if (e.startsWith("pt-")) return e3;
                        else if (e.startsWith("es-")) return e9;
                        else return null;
                    })(),
                    [r] = i?.parse(n, l.toDate()) ?? [void 0],
                    s = r?.start != null && r?.end == null && r.text === n,
                    u = s ? tt()(r.start.date()) : tt()(n, tr, !0),
                    o = [],
                    { format: a } = u.creationData();
                if (
                    ("string" != typeof a && (a = void 0),
                    "" !== n || u.isValid() || ((u = l), (a = "YYYYMMDDHHmmss")),
                    u.isValid() && (s || null != a))
                ) {
                    let e;
                    if (s && !r.start.isCertain("hour")) {
                        let e = 9e5 * Math.round(u.valueOf() / 9e5);
                        u = tt()(e);
                    }
                    let t = s ? r.start.isCertain("weekday") : a?.includes("d"),
                        n = s
                            ? r.start.isCertain("day") || r.start.isCertain("month") || r.start.isCertain("year")
                            : a?.includes("D"),
                        i = s ? r.start.isCertain("year") : a?.includes("Y"),
                        m = s ? r.start.isCertain("second") : a?.includes("s"),
                        c = u.unix().toString(),
                        d = m ? "S" : "s";
                    n || t
                        ? t && !n
                            ? (e = {
                                  periodType: "week",
                                  previousName: D.t["4uTwgO"],
                                  currentName: D.t["6YiNaP"],
                                  nextName: D.t.HE4jqH,
                              })
                            : i ||
                              (e = {
                                  periodType: "year",
                                  previousName: D.t.R7VMEE,
                                  currentName: D.t["U8lK/J"],
                                  nextName: D.t.OppVVE,
                              })
                        : (o.push({
                              mention: { timestamp: c, format: m ? "T" : "t" },
                              description: D.intl.string(D.t.yHv4oJ),
                          }),
                          o.push({}),
                          (e = {
                              periodType: "day",
                              previousName: D.t.ZdDLO0,
                              currentName: D.t.mbs4NX,
                              nextName: D.t["EqnX/z"],
                          }));
                    let {
                        adjustedTimestamp: p,
                        adjustedDescription: y,
                        unadjustedDescription: h,
                    } = (function (e, t, n) {
                        let l, i, r;
                        if (null == n) return {};
                        let s = e.clone();
                        s.subtract(1, n.periodType);
                        let u = t.clone();
                        return (
                            u.add(1, n.periodType),
                            t.isSame(e, n.periodType)
                                ? ((r = D.intl.string(n.currentName)),
                                  t.isSameOrBefore(e) && (i = D.intl.string(n.nextName)))
                                : t.isSame(s, n.periodType) &&
                                  ((r = D.intl.string(n.previousName)), (i = D.intl.string(n.currentName))),
                            null != i && (l = u.unix().toString()),
                            { adjustedTimestamp: l, adjustedDescription: i, unadjustedDescription: r }
                        );
                    })(l, u, e);
                    null != p &&
                        (o.push({ mention: { timestamp: p, format: d }, description: y }),
                        o.push({ mention: { timestamp: p, format: "f" } }),
                        o.push({ mention: { timestamp: p, format: "F" } }),
                        o.push({ mention: { timestamp: p, format: "R" } }),
                        o.push({})),
                        o.push({ mention: { timestamp: c, format: d }, description: h }),
                        o.push({ mention: { timestamp: c, format: "f" } }),
                        o.push({ mention: { timestamp: c, format: "F" } }),
                        o.push({ mention: { timestamp: c, format: "R" } });
                }
                return { results: { mentions: o } };
            },
            renderResults(e) {
                let {
                        results: { mentions: t },
                        selectedIndex: n,
                        query: l,
                        onHover: i,
                        onClick: r,
                    } = e,
                    s = t.map((e, t) => {
                        let { mention: l, description: s } = e;
                        if (void 0 === l) return (0, m.jsx)(S.Ay.Divider, {}, `divider-${t}`);
                        let u = (0, tn.WA)(l);
                        return null == u
                            ? null
                            : (0, m.jsx)(
                                  S.Ay.Timestamp,
                                  { onClick: r, onHover: i, selected: n === t, index: t, timestamp: u, description: s },
                                  `timestamp-${t}`,
                              );
                    }),
                    u = D.t.I4nJDb,
                    o = D.intl.string(D.t.pUP8UM);
                return (0, m.jsxs)(
                    c.Fragment,
                    {
                        children: [
                            O({ titleWithQuery: u, titleWithoutQuery: o, query: l, getQuery: (e) => `${e}` }),
                            s,
                        ],
                    },
                    "timestamp_formats",
                );
            },
            onSelect(e) {
                let {
                        results: { mentions: t },
                        index: n,
                        options: l,
                    } = e,
                    { mention: i } = t[n] ?? {};
                if (null == i) return null;
                let r = (0, tn.tf)(i.timestamp, i.format),
                    s = (0, tn.WA)(i)?.formatted;
                return null == s
                    ? null
                    : (l.replaceInlineInput("timestampMentionInput", s, r), { type: a.kc.TIMESTAMP });
            },
        },
    };
function to(e) {
    let {
            activeCommandOption: t,
            canMentionUsers: n = !0,
            canMentionRoles: l = !0,
            canMentionChannels: i = !0,
            canMentionEveryone: o,
            canMentionOtherGlobals: m = !0,
            useNewSlashCommands: c,
            canOnlyUseTextCommands: d,
            canSendStickers: p,
            canSendSoundmoji: y,
            hideMentionDescription: h,
            hidePersonalInformation: g,
            type: A,
            emojiIntention: M,
            editorRef: I,
            onSendMessage: N,
            onSendSticker: E,
            setValue: S,
        } = e,
        C = {
            mentions: { channel: a.xS.DENY, global: a.VN.DENY, role: a.eP.DENY, user: a.Vf.DENY, otherGlobals: !1 },
            commands: a.Ze.DISABLED,
            allowStickers: !0 === p,
            allowSoundmoji: !0 === y,
            forNonStringCommandOption: null != t && t.type !== r.n4.STRING,
            hideMentionDescription: !0 === h,
            hidePersonalInformation: !0 === g,
            chatInputType: A,
            emojiIntention: M,
            sendMessage: N,
            sendSticker: E,
            insertText: function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                I.current?.insertAutocomplete(e, t ?? e, n);
            },
            replaceText: (e, t) => {
                S(e, t ?? (0, u.x7)(e));
            },
            insertAutocompleteInput: (e) => {
                I.current?.insertInlineAutocompleteElement(e);
            },
            replaceInlineInput: (e, t, n) => {
                I.current?.replaceInlineAutocompleteInput(e, t, n ?? t);
            },
            addMentionGame: (e) => {
                let t = I.current?.getSlateEditor?.();
                null == t || t.mentionGames.has(e.id) || t.mentionGames.set(e.id, e);
            },
            getCommandOptionValues: () => I.current?.getCommandOptionValues(),
        };
    if (null != t) {
        let e = (0, s.XM)(t);
        e.canMentionChannels && (C.mentions.channel = a.xS.ALLOW_SELECTABLE),
            e.canMentionEveryone &&
                (C.mentions.global = e.canMentionHere ? a.VN.ALLOW_EVERYONE_OR_HERE : a.VN.ALLOW_EVERYONE),
            e.canMentionRoles &&
                (C.mentions.role = e.canMentionNonMentionableRoles ? a.eP.ALLOW_ALL : a.eP.ALLOW_MENTIONABLE),
            e.canMentionUsers && (C.mentions.user = e.canMentionAnyGuildUser ? a.Vf.ALLOW_GUILD : a.Vf.ALLOW_CHANNEL),
            e.canMentionOtherGlobals && (C.mentions.otherGlobals = !0),
            (C.hideMentionDescription = !0);
    } else
        i && (C.mentions.channel = a.xS.ALLOW_SELECTABLE),
            l && (C.mentions.role = a.eP.ALLOW_MENTIONABLE),
            n && (C.mentions.user = a.Vf.ALLOW_CHANNEL),
            o && (C.mentions.global = a.VN.ALLOW_EVERYONE_OR_HERE),
            m && (C.mentions.otherGlobals = !0);
    return (
        A.commands?.enabled &&
            (c ? (C.commands = d ? a.Ze.NEW_TEXT_ONLY : a.Ze.NEW) : (C.commands = a.Ze.OLD_BUILT_INS)),
        null != t && null != t.channelTypes && (C.allowedChannelTypes = t.channelTypes),
        C
    );
}
function ta(e) {
    let { type: t, channel: n, guild: l, query: i, isAtStart: r, options: s } = e,
        u = tu[t];
    if (null != u.sentinel) {
        if (!i.startsWith(u.sentinel)) return !1;
        i = i.substring(u.sentinel.length);
    }
    return null == u.matches || !!u.matches(n, l, i, r, s);
}
function tm(e) {
    let {
            channel: t,
            guild: n,
            options: l,
            currentWord: r,
            currentWordIsAtStart: s,
            textValue: u,
            optionText: m,
            parentAutocompleteInputType: c,
            parentAutocompleteInputValue: d,
        } = e,
        p = null;
    for (let e of ts) {
        let y = tu[e];
        if (null != c) {
            if (y.autocompleteInputElementType === c) {
                i()(null != d, "parentAutocompleteInputValue is null, but we're in an inline autocomplete object"),
                    (p = { type: e, typeInfo: y, query: d });
                break;
            }
            continue;
        }
        if (null == y.autocompleteInputElementType) {
            if (e === a.DB.GIFS || e === a.DB.CHOICES) {
                if (l.commands === a.Ze.OLD_BUILT_INS) {
                    if (ta({ type: e, channel: t, guild: n, query: u, isAtStart: !1, options: l })) {
                        p = { type: e, typeInfo: y, query: u };
                        break;
                    }
                } else if (ta({ type: e, channel: t, guild: n, query: m, isAtStart: !1, options: l }))
                    return { type: e, typeInfo: y, query: m };
            } else if (e === a.DB.STICKERS) {
                if (ta({ type: e, channel: t, guild: n, query: m, isAtStart: !1, options: l }))
                    return { type: e, typeInfo: y, query: m };
            } else if (e === a.DB.COMMANDS && l.commands !== a.Ze.OLD_BUILT_INS) {
                if (ta({ type: e, channel: t, guild: n, query: u, isAtStart: !0, options: l })) {
                    p = { type: e, typeInfo: y, query: u.substring(y.sentinel?.length ?? 0) };
                    break;
                }
            } else if (e === a.DB.LEGACY_COMMANDS) {
                if (ta({ type: e, channel: t, guild: n, query: u, isAtStart: s, options: l })) {
                    p = { type: e, typeInfo: y, query: u };
                    break;
                }
            } else if (e === a.DB.EMOJIS_AND_STICKERS) {
                if (
                    (null != r && r.length > 0 && (0, o.K)(ew.EmojiInteractionPoint.AutocompleteTyped),
                    null != r && ta({ type: e, channel: t, guild: n, query: r, isAtStart: s, options: l }))
                ) {
                    p = { type: e, typeInfo: y, query: r.substring(y.sentinel?.length ?? 0) };
                    break;
                }
            } else if (null != r && ta({ type: e, channel: t, guild: n, query: r, isAtStart: s, options: l })) {
                p = { type: e, typeInfo: y, query: r.substring(y.sentinel?.length ?? 0) };
                break;
            }
        }
    }
    return null == p ? null : ((p.query = p.query.toLocaleLowerCase()), p);
}
function tc(e, t) {
    let n;
    if (null == t || null == e) return null;
    if (null != e.choices || e.autocomplete) n = a.DB.CHOICES;
    else
        switch (e.type) {
            case r.n4.BOOLEAN:
                n = a.DB.CHOICES;
                break;
            case r.n4.CHANNEL:
                n = a.DB.CHANNELS;
                break;
            case r.n4.ROLE:
            case r.n4.USER:
            case r.n4.MENTIONABLE:
                n = a.DB.MENTIONS;
                break;
            default:
                return null;
        }
    let l = tu[n];
    return { type: n, typeInfo: l, query: t };
}
