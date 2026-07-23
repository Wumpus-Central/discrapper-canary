n.d(t, { findMatchingAutocompleteType: () => ty, getOptions: () => td, findCommandOptionAutocompleteType: () => th });
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
    h = n(917012),
    g = n(264322),
    A = n(842209),
    M = n(210978),
    I = n(861382),
    N = n(392054),
    E = n(649671),
    S = n(659280),
    f = n(576705),
    C = n(257120),
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
    k = n(702988);
let x = { results: { entries: [] } };
function Y() {
    (0, p.openModalLazy)(async () => {
        let { default: e } = await n.e("52855").then(n.bind(n, 563478));
        return (t) => (0, m.jsx)(e, { ...t });
    });
}
let q = {
    sentinel: "/",
    stores: [I.A, g.Ay, f.A],
    matches: (e, t, n, l, i) =>
        i.commands !== a.Ze.DISABLED && null == I.A.getActiveCommand(e.id) && (l || i.commands !== a.Ze.OLD_BUILT_INS),
    queryResults(e, t, n, l, i) {
        if (0 === n.length && l.commands !== a.Ze.OLD_BUILT_INS) return x;
        if (l.commands === a.Ze.OLD_BUILT_INS) {
            let l = (0, h.Ez)([r.kc.CHAT], !1, !1),
                i = RegExp(`^${C.A.escape(n)}`, "i"),
                u = (0, s.PV)(l, i, { channel: e, guild: t }, 20),
                o = h.gZ[R.Ik.BUILT_IN];
            return 0 === u.length ? x : { results: { entries: u.map((e) => ({ command: e, section: o })) } };
        }
        let u = (0, E.Yn)(e, n),
            { commands: o, sections: m } = A.eW(
                { channel: e, type: "channel" },
                { commandTypes: [r.kc.CHAT], text: u.text },
                { limit: 20, placeholderCount: 3, scoreMethod: M.M.COMMAND_OR_APPLICATION, allowFetch: i },
            );
        if (null == o) return x;
        let c = o;
        if (u.hasSpaceTerminator) {
            let e = u.text.trim(),
                t = e + " ";
            c = c.filter((n) => n.displayName === e || n.displayName.startsWith(t));
        }
        return 0 === c.length
            ? x
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
            headerTrailingContent: c && (0, m.jsx)(d.Q, { size: "xs", onClick: Y, text: D.intl.string(D.t["8a0P0y"]) }),
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
var v = n(435558),
    B = n.n(v),
    G = n(537652),
    U = n(166862),
    H = n(545152),
    j = n(768038),
    W = n(268949),
    b = n(911385);
let P = { results: { choices: [] } },
    Q = { results: { choices: [], isLoading: !0 } },
    V = Array.from({ length: 5 }, () => ({ name: "", displayName: "", value: "" })),
    $ = { results: { choices: [], isError: !0 } },
    w = B().debounce(H.A, R.$r, { leading: !0, trailing: !0 }),
    F = {
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
            if (null == s) return P;
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
                ? (0, m.jsx)(G.A, { message: D.intl.string(D.t.rTAbPn), noResultsImageURL: b, className: W.k })
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
                  : (0, m.jsx)(G.A, { message: D.intl.string(D.t["41014u"]), noResultsImageURL: b, className: W.k });
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
let Z = { results: { commandOptions: [] } },
    K = {
        stores: [I.A],
        focusMode: a.e.AUTO_WHEN_FILTERED,
        matches: (e, t, n, l, i) => !(l || null == I.A.getActiveCommand(e.id) || null != I.A.getActiveOption(e.id)),
        queryResults(e, t, n, l, i) {
            let r = I.A.getActiveCommand(e.id);
            if (r?.options == null) return Z;
            let s = I.A.getOptionStates(e.id),
                u = r.options.filter((e) => e.displayName.startsWith(n) && !s[e.name]?.hasValue);
            return 0 === u.length ? Z : { results: { commandOptions: u } };
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
var J = n(892462),
    z = n(243264),
    X = n(439864);
let ee = {
    autocompleteInputElementType: "gameMentionInput",
    stores: [z.A],
    matches: (e, t, n, l, i) => !0,
    queryResults: (e, t, n) =>
        (0, J._)("game mention picker").enabled
            ? { results: { games: (0, X.q)(n) ?? [] } }
            : { results: { games: [] } },
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
            { children: [O({ titleWithQuery: u, titleWithoutQuery: o, query: l, getQuery: et }), s] },
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
            l.addMentionGame({ id: i.id, name: i.name, icon: i.icon }),
            l.replaceInlineInput("gameMentionInput", et(i.name), (0, L.KW)(i.id)),
            { type: a.kc.GAME_MENTION, metadata: { gameId: i.id } }
        );
    },
};
function et(e) {
    return `@${e}`;
}
n(667532);
var en = n(478437),
    el = n(115718),
    ei = n(47167),
    er = n(734057),
    es = n(808728),
    eu = n(994500),
    eo = n(287809),
    ea = n(746080),
    em = n(926972),
    ec = n(937862),
    ed = n(361670),
    ep = n(631576),
    ey = n(750385),
    eh = n(194004),
    eg = n(71393),
    eA = n(174459),
    eM = n(652215),
    eI = n(638435);
function eN(e, t) {
    return (0, m.jsx)(T.A, { sticker: e, isInteracting: t, size: 40 });
}
let eE = {
    sentinel: ":",
    stores: [ey.A],
    matches: (e, t, n, l, i) => n.length > 1,
    queryResults(e, t, n, l, i) {
        let r = l.allowSoundmoji && (0, em.AA)({ location: "queryResults" }),
            s = l.allowStickers || r ? 0 : 40,
            u = eM.rs7 + s,
            {
                emojis: { unlocked: o },
            } = j.Ay.queryEmojiResults({ query: n, channel: e, intention: l.emojiIntention, maxCount: u });
        "-" === n[0] &&
            (o = o.filter(function (e) {
                return e.names?.includes(n);
            }));
        let a = [];
        if (l.allowStickers) {
            (0, ep.YB)();
            let t = j.Ay.queryStickers([n], !0, [e, (e, t) => t === ed.Ux.SENDABLE]),
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
                        guild: null != e.guildId ? eg.A.getGuild(e.guildId) : null,
                    }),
                    getQuery: (e) => `:${e}`,
                    key: "emoji",
                }),
                o && a && (0, m.jsx)(S.Ay.Divider, { className: eI.y }),
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
                            renderSticker: eN,
                            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                            sticker: n,
                            key: n.id,
                        };
                    },
                    getQuery: (e) => e,
                    key: "stickers",
                    indexOffset: t.length,
                    headerClassName: o ? eI._ : void 0,
                }),
                (o || a) && l.length > 0 && (0, m.jsx)(S.Ay.Divider, { className: eI.y }),
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
                    headerClassName: o || a ? eI._ : void 0,
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
                r.sendSticker(e.sticker, eh.D6.AUTOCOMPLETE),
                {
                    type: a.kc.STICKER,
                    metadata: { numEmojiResults: t.length, numStickerResults: l.length, stickerId: e.sticker.id },
                }
            );
        }
        if ((i -= l.length) < n.length) {
            let e = n[i];
            return (
                r.insertText((0, ec.A)(e.sound.guildId, e.sound.soundId)),
                eA.default.track(eM.HAw.SOUNDMOJI_SELECT, {
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
var eS = n(289873),
    ef = n(228366),
    eC = n(562465),
    eT = n(703244),
    eD = n(773669),
    eO = n(17928);
let e_ = {},
    eL = { integration: "", query: "" };
class eR extends eO.Ay.Store {
    static displayName = "IntegrationQueryStore";
    getResults(e, t) {
        if (null == e || null == t) return null;
        let n = e_[e];
        return null != n && null != n[t] ? n[t] : null;
    }
    getQuery() {
        return eL;
    }
}
let ek = new eR(ef.h, {
        INTEGRATION_QUERY: function (e) {
            let { integration: t, query: n } = e;
            (e_[t] = e_[t] ?? {}), (e_[t][n] = { loading: !0, results: [] });
        },
        INTEGRATION_QUERY_SUCCESS: function (e) {
            let { integration: t, query: n, results: l } = e;
            (e_[t][n] = { loading: !1, results: l.map((e) => ({ type: eM.Z86[t].type, meta: e })) }),
                (eL = { query: n, integration: t });
        },
        INTEGRATION_QUERY_FAILURE: function (e) {
            let { integration: t, query: n } = e;
            delete e_[t][n];
        },
    }),
    ex = {
        search(e, t) {
            null == ek.getResults(e, t) &&
                (ef.h.dispatch({ type: "INTEGRATION_QUERY", integration: e, query: t }),
                eC.Bo.get({
                    url: eM.Rsh.GIFS_SEARCH,
                    query: { q: t, media_format: "webp", provider: (0, eT.cf)(), locale: eD.default.locale, limit: 20 },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(
                    (n) => {
                        ef.h.dispatch({ type: "INTEGRATION_QUERY_SUCCESS", integration: e, query: t, results: n.body });
                    },
                    () => ef.h.dispatch({ type: "INTEGRATION_QUERY_FAILURE", integration: e, query: t }),
                ));
        },
    };
var eY = n(95561),
    eq = n(235986),
    ev = n(59318),
    eB = n(717587);
let eG = { results: { command: null, integrations: [], isLoading: !1 } };
function eU(e, t, n) {
    let l;
    return (
        n.commands === a.Ze.OLD_BUILT_INS
            ? ((l = t.split(" ")[0].substring(1)), (t = t.substring((l.length ?? 0) + 1)))
            : (l = I.A.getActiveCommand(e.id)?.untranslatedName),
        { command: l, query: t.trim() }
    );
}
let eH = {
    stores: [I.A, ek],
    matches: (e, t, n, l, i) =>
        i.commands !== a.Ze.DISABLED &&
        (i.commands === a.Ze.OLD_BUILT_INS
            ? n.startsWith("/gif")
            : I.A.getActiveCommand(e.id)?.integrationType === eM.p_j.GIF && I.A.getOptionStates(e.id).query.hasValue),
    queryResults(e, t, n, l, i) {
        let { command: r, query: s } = eU(e, n, l);
        if (null == r) return eG;
        let u = B().findKey(eM.Z86, (e) => e.command === r);
        i && null != u && s.length > 0 && ex.search(u, s);
        let o = ek.getResults(u, s);
        return null == o ? eG : { results: { command: r, integrations: o.results, isLoading: o.loading } };
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
            { command: d, query: p } = eU(i, r, s);
        if (null == d || 0 === p.length) return null;
        if (n) return (0, m.jsx)(eS.y, { className: eB.u1, type: eS.y.Type.SPINNING_CIRCLE });
        if (null != t) {
            let e = !1,
                n = t.map((t, n) => {
                    if (t.type === eM.p_j.GIF) {
                        var i;
                        let r, s;
                        return (
                            (e = !0),
                            (0, m.jsx)(
                                S.Ay.GIFIntegration,
                                {
                                    className: eB.ho,
                                    onClick: o,
                                    onHover: u,
                                    selected: l === n,
                                    index: n,
                                    width: t.meta.width ?? 0,
                                    height: t.meta.height ?? 0,
                                    src:
                                        ((r = (i = t.meta).src ?? ""),
                                        (s = i.gif_src),
                                        (0, ev.r1)(r) && null != s && "" !== s && !(0, ev.r1)(s) ? s : r),
                                    url: t.meta.url,
                                },
                                `${t.meta.url}${t.meta.src}`,
                            )
                        );
                    }
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
                        e ? (0, m.jsx)(eq.A, { className: eB.os, children: n }) : n,
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
            eY.Ay.trackWithMetadata(eM.HAw.SEARCH_RESULT_SELECTED, {
                search_type: eM.I4_.GIF,
                index_num: l,
                source_object: `/${t}`,
            }),
            r.commands !== a.Ze.OLD_BUILT_INS)
        ) {
            let e = I.A.getActiveCommand(s.id);
            e?.inputType === N.y$.BUILT_IN_INTEGRATION &&
                (ef.h.dispatch({
                    type: "APPLICATION_COMMAND_USED",
                    context: { channel: s, guild: u },
                    command: e,
                    commandOrigin: N.iw.CHAT,
                }),
                eY.Ay.trackWithMetadata(eM.HAw.APPLICATION_COMMAND_USED, {
                    command_id: e.id,
                    application_id: e.applicationId,
                    command_type: e.type,
                    source: I.A.getSource(s.id),
                }));
        }
        return { type: a.kc.GIF };
    },
};
var ej = n(885386),
    eW = n(562153);
let eb = /^<@!?(\d+)>/u;
function eP(e) {
    let t = eb.exec(e);
    if (null != t) {
        let n = t[1],
            l = eo.default.getUser(n);
        return null != l && l.bot ? { type: "mention", cleanedQuery: e.substring(t[0].length).trim(), user: l } : null;
    }
    return null;
}
let eQ = {
    ...q,
    sentinel: void 0,
    focusMode: a.e.MANUAL,
    matches(e, t, n, l, i) {
        if (i.commands === a.Ze.DISABLED || i.commands === a.Ze.OLD_BUILT_INS || n.length < 2 || !ej._3.getSetting())
            return !1;
        let r = eP(n);
        return null != r && r.cleanedQuery.length > 0;
    },
    queryResults(e, t, n, l, i) {
        if (!ej._3.getSetting()) return x;
        let s = eP(n);
        if (null == s) return x;
        let u = (0, E.Yn)(e, s.cleanedQuery),
            { commands: o, sections: a } = A.eW(
                { channel: e, type: "channel" },
                { commandTypes: [r.kc.CHAT], text: u.text },
                { limit: 20, placeholderCount: 3, scoreMethod: M.M.COMMAND_OR_APPLICATION, allowFetch: i },
            );
        if (null == o) return x;
        let m = o.filter((e) => e.section.botId === s.user.id);
        if (u.hasSpaceTerminator) {
            let e = u.text.trim(),
                t = e + " ";
            m = m.filter((n) => n.untranslatedName === e || n.untranslatedName.startsWith(t));
        }
        return 0 === m.length
            ? x
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
                let t = eP(e),
                    n = eW.Ay.getName(l?.id, i.id, t.user);
                return e.replace(eb, `@${n}`);
            },
            key: "commands",
        });
    },
    onSelect(e) {
        let { results: t, index: n, type: l, options: i, channel: r, guild: s } = e,
            u = q.onSelect({
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
var eV = n(812993),
    e$ = n(661531),
    ew = n(254313);
function eF(e) {
    let { onClick: t, onHover: n, selected: l, index: i, text: r, description: s } = e,
        { showNewTag: u } = (0, ew.gs)({ location: "GameMentionGlobalRow" }),
        o = u ? (0, m.jsx)(eV.Lp, { text: D.intl.string(D.t.y2b7CA), color: e$.A.colors.BACKGROUND_BRAND.css }) : null;
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
var eZ = n(696451),
    eK = n(427262);
let eJ = {
    sentinel: "@",
    stores: [eZ.Ay, z.A],
    matches: (e, t, n, l, i) =>
        i.mentions.user !== a.Vf.DENY || i.mentions.role !== a.eP.DENY || i.mentions.global !== a.VN.DENY,
    queryResults(e, t, n, l, i) {
        let r = l.mentions.global === a.VN.ALLOW_EVERYONE || l.mentions.global === a.VN.ALLOW_EVERYONE_OR_HERE,
            s = l.mentions.global === a.VN.ALLOW_EVERYONE_OR_HERE,
            u = l.mentions.user !== a.Vf.DENY,
            o = l.mentions.role !== a.eP.DENY,
            m = l.mentions.user === a.Vf.ALLOW_GUILD,
            c = l.mentions.role === a.eP.ALLOW_ALL,
            {
                users: d,
                globals: p,
                roles: y,
            } = j.Ay.queryMentionResults({
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
            h = [],
            g = (0, J._)("mention autocomplete");
        return (
            g.enabled &&
                g.combineMentionAutocomplete &&
                l.mentions.otherGlobals &&
                n.length > 0 &&
                (h = ((0, X.q)(n) ?? []).slice(0, 3)),
            { results: { users: d, globals: p, roles: y, games: h }, metadata: { gameMentionsAvailable: g.enabled } }
        );
    },
    renderResults(e) {
        let {
                results: { users: t, globals: n, roles: l, games: i },
                selectedIndex: r,
                channel: s,
                query: u,
                options: o,
                onHover: d,
                onClick: p,
            } = e,
            y = t.map((e, t) =>
                (0, m.jsx)(
                    S.Ay.User,
                    {
                        guildId: s.guild_id,
                        onClick: p,
                        onHover: d,
                        selected: r === t,
                        index: t,
                        user: e.user,
                        nick: e.nick,
                        status: e.status,
                        hidePersonalInformation: o.hidePersonalInformation,
                    },
                    e.user.id,
                ),
            ),
            h = n.map((e, n) => {
                let l = {
                    onClick: p,
                    onHover: d,
                    selected: r === n + t.length,
                    index: t.length + n,
                    text: e.text,
                    description: o.hideMentionDescription ? null : e.description,
                };
                return "gameMentionInput" === e.inlineAutocompleteType
                    ? (0, c.createElement)(eF, { ...l, key: e.text })
                    : (0, c.createElement)(S.Ay.Generic, { ...l, key: e.text, "aria-label": e.text });
            }),
            g = l.map((e, l) =>
                (0, m.jsx)(
                    S.Ay.Role,
                    {
                        onClick: p,
                        onHover: d,
                        selected: r === l + t.length + n.length,
                        index: t.length + n.length + l,
                        role: e,
                        hideDescription: o.hideMentionDescription,
                        guildId: s.guild_id,
                    },
                    e.id,
                ),
            ),
            A = t.length + n.length + l.length,
            M = i.map((e, t) =>
                (0, m.jsx)(S.Ay.Game, { onClick: p, onHover: d, selected: r === A + t, index: A + t, game: e }, e.id),
            ),
            I = o.mentions.user === a.Vf.DENY,
            N = t.length > 0 || n.length > 0 || l.length > 0;
        function E(e) {
            return `@${e}`;
        }
        let f = I
                ? { titleWithQuery: D.t.MLiD1e, titleWithoutQuery: D.intl.string(D.t["LPJmL/"]) }
                : { titleWithQuery: D.t.rPNimn, titleWithoutQuery: D.intl.string(D.t["9Oq93m"]) },
            C = { titleWithQuery: D.t["/U2VW+"], titleWithoutQuery: D.intl.string(D.t.URyqtP) };
        return (0, m.jsxs)(
            c.Fragment,
            {
                children: [
                    N
                        ? (0, m.jsxs)(m.Fragment, {
                              children: [
                                  O({ ...f, query: u, getQuery: E }),
                                  y,
                                  n.length > 0 && t.length > 0 ? (0, m.jsx)(S.Ay.Divider, {}) : null,
                                  h,
                                  l.length > 0 && (t.length > 0 || n.length > 0) ? (0, m.jsx)(S.Ay.Divider, {}) : null,
                                  g,
                              ],
                          })
                        : null,
                    i.length > 0
                        ? (0, m.jsxs)(m.Fragment, {
                              children: [
                                  N ? (0, m.jsx)(S.Ay.Divider, {}) : null,
                                  O({ ...C, query: u, getQuery: E }),
                                  M,
                              ],
                          })
                        : null,
                ],
            },
            "mentions",
        );
    },
    onSelect(e) {
        var t, n, l, i, r, s;
        let {
                results: { users: u, globals: o, roles: m, games: c },
                index: d,
                options: p,
                channel: y,
            } = e,
            h = u[d],
            g = o[d - u.length],
            A = m[d - u.length - o.length],
            M = c[d - u.length - o.length - m.length],
            I = a.kc.MENTION;
        if (null != h) {
            p.insertText(
                ((t = h.user),
                (n = y),
                (l = p.hidePersonalInformation),
                j.Ay.hasSameRoleAsUsername(n, t)
                    ? `@${t.tag}`
                    : `@${eK.Ay.getUserTag(t, { identifiable: l ? "never" : "always" })}`),
                ((i = h.user), `<@${i.id}>`),
            );
        } else if (null != g)
            if (null != g.inlineAutocompleteType)
                switch ((p.insertAutocompleteInput(g.inlineAutocompleteType), g.inlineAutocompleteType)) {
                    case "gameMentionInput":
                        I = a.kc.GAME_MENTION;
                        break;
                    case "timestampMentionInput":
                        I = a.kc.TIMESTAMP;
                }
            else p.insertText(g.text);
        else if (null != A) {
            p.insertText(((r = A), `@${r.name}`), ((s = A), `<@&${s.id}>`));
        } else if (null != M)
            return (
                p.addMentionGame({ id: M.id, name: M.name, icon: M.icon }),
                p.insertText(`@${M.name}`, (0, L.KW)(M.id)),
                { type: a.kc.GAME_MENTION, metadata: { gameId: M.id } }
            );
        return { type: I };
    },
};
var ez = n(307731);
let eX = { results: { command: null, stickers: [] } };
function e0(e, t) {
    return (0, m.jsx)(T.A, { sticker: e, isInteracting: t, size: 40 });
}
let e1 = {
    stores: [ey.A],
    matches: (e, t, n, l, i) =>
        i.commands !== a.Ze.DISABLED &&
        i.commands !== a.Ze.OLD_BUILT_INS &&
        I.A.getActiveCommand(e.id)?.integrationType === eM.p_j.STICKER &&
        I.A.getOptionStates(e.id).query.hasValue,
    queryResults(e, t, n, l) {
        let i = I.A.getActiveCommand(e.id)?.untranslatedName;
        if (null == i) return eX;
        let r = [];
        return (
            (0, ep.YB)(),
            {
                results: {
                    command: i,
                    stickers: (r = j.Ay.queryStickers([n], !0, [e, (e, t) => t === ed.Ux.SENDABLE]).slice(0, 8)),
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
                        renderSticker: e0,
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
            (ef.h.dispatch({
                type: "APPLICATION_COMMAND_USED",
                context: { channel: s, guild: u },
                command: m,
                commandOrigin: N.iw.CHAT,
            }),
            eY.Ay.trackWithMetadata(eM.HAw.APPLICATION_COMMAND_USED, {
                command_id: m.id,
                application_id: m.applicationId,
                command_type: m.type,
                source: I.A.getSource(s.id),
            }));
        let c = l[i];
        return (
            r.sendSticker(c.sticker, eh.D6.BUILT_IN_INTEGRATION),
            c.sticker.type === eh.NL.GUILD && (t = c.sticker.guild_id),
            eY.Ay.trackWithMetadata(eM.HAw.SEARCH_RESULT_SELECTED, {
                load_id: c.sticker.id,
                search_type: eM.I4_.STICKER,
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
var e4 = n(59892),
    e2 = n(186693),
    e8 = n(262234),
    e6 = n(717470),
    e7 = n(977936),
    e3 = n(849455),
    e5 = n(288116),
    e9 = n(406002),
    te = n(381349),
    tt = n(860323),
    tn = n(670441),
    tl = n(994372),
    ti = n(576497),
    tr = n(989349),
    ts = n.n(tr),
    tu = n(379418);
let to = ["h:mm:ssa", "h:mm:ss a", "H:mm:ss", "h:mma", "h:mm a", "H:mm", "HHmm", "ha", "h a", "H", "LT", "LTS"],
    ta = [
        ts().ISO_8601,
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
        ].flatMap((e) => [...to.map((t) => `${e} ${t}`), ...to]),
    ],
    tm = [
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
    tc = {
        [a.DB.CHANNELS]: {
            sentinel: "#",
            matches: (e, t, n, l, i) => i.mentions.channel !== a.xS.DENY && !e.isPrivate(),
            queryResults(e, t, n, l, i) {
                let r,
                    s,
                    u = es.I6;
                return (
                    n.charAt(0) === el.AT.VOICE_CHANNEL && ((u = es.vM), (n = n.substring(1))),
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
                    a = r.charAt(0) === el.AT.VOICE_CHANNEL;
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
                        getProps: (e) => ({ channel: e, key: e.id, category: er.A.getChannel(e.parent_id) }),
                        getQuery: (e) => (a ? `#${el.AT.VOICE_CHANNEL}${e}` : `#${e}`),
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
                                case en.r.PUBLIC_THREAD:
                                case en.r.PRIVATE_THREAD:
                                case en.r.ANNOUNCEMENT_THREAD:
                                case en.r.GUILD_VOICE:
                                case en.r.GUILD_STAGE_VOICE:
                                case en.r.GUILD_CATEGORY:
                                    return `#"${(0, ei.Eq)((0, ei.m1)(e, eo.default, eu.A))}"`;
                                default:
                                    let t = es.Ay.getTextChannelNameDisambiguations(e.guild_id)[e.id];
                                    return `#${null != t ? t.name : ((0, ei.m1))(e, eo.default, eu.A)}`;
                            }
                        })(r),
                        ((t = r), ea.aQ.has(t.id) ? `<id:${t.id}>` : `<#${t.id}>`),
                    ),
                    { type: a.kc.CHANNEL }
                );
            },
        },
        [a.DB.COMMANDS]: q,
        [a.DB.COMMAND_OPTIONS]: K,
        [a.DB.CHOICES]: F,
        [a.DB.EMOJIS_AND_STICKERS]: eE,
        [a.DB.STICKERS]: e1,
        [a.DB.GIFS]: eH,
        [a.DB.LEGACY_COMMANDS]: eQ,
        [a.DB.MENTIONS]: eJ,
        [a.DB.REACTIONS]: {
            sentinel: "+:",
            matches: (e, t, n, l, i) =>
                l &&
                (i.chatInputType.autocomplete?.addReactionShortcut ?? !1) &&
                (f.A.can(eM.xBc.ADD_REACTIONS, e) || e.isPrivate()),
            queryResults(e, t, n, l, i) {
                let { emojis: r } = j.Ay.queryEmojiResults({
                    query: n,
                    channel: e,
                    intention: ez.EmojiIntention.REACTION,
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
                        guild: null != e.guildId ? eg.A.getGuild(e.guildId) : null,
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
        [a.DB.GAME]: ee,
        [a.DB.TIMESTAMPS]: {
            autocompleteInputElementType: "timestampMentionInput",
            matches: (e, t, n, l, i) => n.length > 1,
            queryResults(e, t, n) {
                let l = ts()(),
                    i = (function () {
                        let e = eD.default.locale;
                        if ("en-US" === e) return e4;
                        if ("en-GB" === e) return e4.GB;
                        if ("de" === e) return e2;
                        if ("fr" === e) return e8;
                        if ("ja" === e) return e6;
                        else if ("nl" === e) return e7;
                        else if ("ru" === e) return e3;
                        else if ("it" === e) return e5;
                        else if ("uk" === e) return e9;
                        else if ("zh-CN" === e) return te;
                        else if ("zh-TW" === e) return tt;
                        else if (e.startsWith("sv-")) return tn;
                        else if (e.startsWith("pt-")) return tl;
                        else if (e.startsWith("es-")) return ti;
                        else return null;
                    })(),
                    [r] = i?.parse(n, l.toDate()) ?? [void 0],
                    s = r?.start != null && r?.end == null && r.text === n,
                    u = s ? ts()(r.start.date()) : ts()(n, ta, !0),
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
                        u = ts()(e);
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
                        let u = (0, tu.WA)(l);
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
                let r = (0, tu.tf)(i.timestamp, i.format),
                    s = (0, tu.WA)(i)?.formatted;
                return null == s
                    ? null
                    : (l.replaceInlineInput("timestampMentionInput", s, r), { type: a.kc.TIMESTAMP });
            },
        },
    };
function td(e) {
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
        f = {
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
        e.canMentionChannels && (f.mentions.channel = a.xS.ALLOW_SELECTABLE),
            e.canMentionEveryone &&
                (f.mentions.global = e.canMentionHere ? a.VN.ALLOW_EVERYONE_OR_HERE : a.VN.ALLOW_EVERYONE),
            e.canMentionRoles &&
                (f.mentions.role = e.canMentionNonMentionableRoles ? a.eP.ALLOW_ALL : a.eP.ALLOW_MENTIONABLE),
            e.canMentionUsers && (f.mentions.user = e.canMentionAnyGuildUser ? a.Vf.ALLOW_GUILD : a.Vf.ALLOW_CHANNEL),
            e.canMentionOtherGlobals && (f.mentions.otherGlobals = !0),
            (f.hideMentionDescription = !0);
    } else
        i && (f.mentions.channel = a.xS.ALLOW_SELECTABLE),
            l && (f.mentions.role = a.eP.ALLOW_MENTIONABLE),
            n && (f.mentions.user = a.Vf.ALLOW_CHANNEL),
            o && (f.mentions.global = a.VN.ALLOW_EVERYONE_OR_HERE),
            m && (f.mentions.otherGlobals = !0);
    return (
        A.commands?.enabled &&
            (c ? (f.commands = d ? a.Ze.NEW_TEXT_ONLY : a.Ze.NEW) : (f.commands = a.Ze.OLD_BUILT_INS)),
        null != t && null != t.channelTypes && (f.allowedChannelTypes = t.channelTypes),
        f
    );
}
function tp(e) {
    let { type: t, channel: n, guild: l, query: i, isAtStart: r, options: s } = e,
        u = tc[t];
    if (null != u.sentinel) {
        if (!i.startsWith(u.sentinel)) return !1;
        i = i.substring(u.sentinel.length);
    }
    return null == u.matches || !!u.matches(n, l, i, r, s);
}
function ty(e) {
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
    for (let e of tm) {
        let y = tc[e];
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
                    if (tp({ type: e, channel: t, guild: n, query: u, isAtStart: !1, options: l })) {
                        p = { type: e, typeInfo: y, query: u };
                        break;
                    }
                } else if (tp({ type: e, channel: t, guild: n, query: m, isAtStart: !1, options: l }))
                    return { type: e, typeInfo: y, query: m };
            } else if (e === a.DB.STICKERS) {
                if (tp({ type: e, channel: t, guild: n, query: m, isAtStart: !1, options: l }))
                    return { type: e, typeInfo: y, query: m };
            } else if (e === a.DB.COMMANDS && l.commands !== a.Ze.OLD_BUILT_INS) {
                if (tp({ type: e, channel: t, guild: n, query: u, isAtStart: !0, options: l })) {
                    p = { type: e, typeInfo: y, query: u.substring(y.sentinel?.length ?? 0) };
                    break;
                }
            } else if (e === a.DB.LEGACY_COMMANDS) {
                if (tp({ type: e, channel: t, guild: n, query: u, isAtStart: s, options: l })) {
                    p = { type: e, typeInfo: y, query: u };
                    break;
                }
            } else if (e === a.DB.EMOJIS_AND_STICKERS) {
                if (
                    (null != r && r.length > 0 && (0, o.K)(ez.EmojiInteractionPoint.AutocompleteTyped),
                    null != r && tp({ type: e, channel: t, guild: n, query: r, isAtStart: s, options: l }))
                ) {
                    p = { type: e, typeInfo: y, query: r.substring(y.sentinel?.length ?? 0) };
                    break;
                }
            } else if (null != r && tp({ type: e, channel: t, guild: n, query: r, isAtStart: s, options: l })) {
                p = { type: e, typeInfo: y, query: r.substring(y.sentinel?.length ?? 0) };
                break;
            }
        }
    }
    return null == p ? null : ((p.query = p.query.toLocaleLowerCase()), p);
}
function th(e, t) {
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
    let l = tc[n];
    return { type: n, typeInfo: l, query: t };
}
