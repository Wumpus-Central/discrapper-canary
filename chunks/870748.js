(n.d(t, { A: () => _, t: () => R }), n(321073), n(667532));
var l = n(485845),
    i = n(465532),
    r = n(155718),
    s = n(721768),
    a = n(459016),
    o = n(842209),
    u = n(861382),
    c = n(392054),
    d = n(168186),
    h = n(203779),
    m = n(94221),
    p = n(664929),
    f = n(853145),
    g = n(734057),
    x = n(31717),
    S = n(317525),
    E = n(287809),
    y = n(317681),
    C = n(186306),
    A = n(323350),
    b = n(35277),
    I = n(820066),
    v = n(551483),
    N = n(652215);
n(827669);
let T = new Set(["applicationCommandOption"]),
    j = new Set([r.n4.ATTACHMENT]),
    k = new Set(["line", "applicationCommand"]);
function _(e, t) {
    let {
        insertData: n,
        isInline: h,
        isVoid: g,
        onChange: S,
        deleteBackward: E,
        deleteForward: N,
        deleteFragment: _,
    } = e;
    ((e.insertData = (l) => {
        if (null != t && I.VW.isEditorEmpty(e) && l.types.includes("application/x-discord-interaction-data")) {
            let e = JSON.parse(l.getData("application/x-discord-interaction-data")),
                { commandKey: n, interactionOptions: i } = (0, d.Ez)(e),
                { application: r, command: u } = o.EW({ channel: t, type: "channel" }, n);
            if (null != u) {
                let e =
                    null != r
                        ? {
                              type: c.Hf.APPLICATION,
                              id: r.id,
                              icon: r.icon,
                              name: r.bot?.username ?? r.name,
                              application: r,
                          }
                        : null;
                return (
                    s.Gf({
                        channelId: t.id,
                        command: u,
                        section: e,
                        location: c.Oh.PASTE,
                        initialValues: (0, a.getInitialValuesFromInteractionOptions)(u, i ?? []),
                    }),
                    null
                );
            }
        }
        return n(l);
    }),
        (e.isInline = (e) => !!T.has(e.type) || h(e)),
        (e.isVoid = (e) => !!("applicationCommandOption" === e.type && j.has(e.optionType)) || g(e)),
        (e.deleteBackward = (t) => {
            P(e, () => E(t));
        }),
        (e.deleteForward = (t) => {
            P(e, () => N(t));
        }),
        (e.deleteFragment = (t) => {
            P(e, () => _(t));
        }));
    let D = null,
        V = null,
        U = null,
        W = null,
        F = null;
    return (
        (e.onChange = () => {
            if (null != t) {
                let n = u.A.getState(t.id),
                    a = o.j8({ channel: t, type: "channel" });
                if (
                    I.VW.richValue(e) !== D ||
                    !I.Ot.equals(e.selection, V) ||
                    n.activeCommand !== U ||
                    null == F ||
                    a.some((e, t) => F[t] !== e)
                ) {
                    let u = C.o.withMergedEntry(e, () =>
                        (function (e) {
                            let {
                                    editor: t,
                                    storeCommandState: n,
                                    channel: a,
                                    commandChanged: u,
                                    previousOptionValues: d,
                                } = e,
                                { command: h, commandText: g } = L(t),
                                S = n.activeCommand,
                                E = t.chatInputType.commands?.enabled === !0,
                                C = null != f.A.getPendingReply(a.id);
                            if (
                                (!E && S?.integration_types?.includes(l.b.GUILD_INSTALL)) ||
                                (C && S?.inputType !== c.y$.BUILT_IN_TEXT && S?.inputType !== c.y$.BUILT_IN_INTEGRATION)
                            )
                                return (
                                    null != h
                                        ? R(t, a.id, S, !0)
                                        : null != S && s.Gf({ channelId: a.id, command: null, section: null }),
                                    null
                                );
                            if (null != h) {
                                if (I.VW.isEditorEmpty(t) || null == S) return (R(t, a.id, S, !1), null);
                                let e = `/${h.displayName}`;
                                if (
                                    null == g ||
                                    !g.startsWith(e) ||
                                    (0 === y.O7(t).length && (g.length < e.length + 1 || " " !== g[e.length]))
                                )
                                    return (i.A.clearDraftCommand(a.id, x.C.ChannelMessage), R(t, a.id, S, !0), null);
                            } else {
                                if (null != S && u) {
                                    let e = (function (e, t, n) {
                                            let l,
                                                { initialValues: i, activeCommand: r } = n;
                                            if (null == r) return null;
                                            let s = (r.options?.length ?? 0) > 0 ? y.pY(e, r) : null,
                                                a = (0, A.WO)(I.VW.richValue(e), {
                                                    mode: "raw",
                                                    range: {
                                                        anchor: I.VW.start(e, []),
                                                        focus: s?.[0]?.keyRange.anchor ?? I.VW.end(e, []),
                                                    },
                                                }),
                                                o = "",
                                                u = a.toLocaleLowerCase(),
                                                c = `/${r.displayName} `.toLocaleLowerCase(),
                                                d = `/${r.untranslatedName} `.toLocaleLowerCase();
                                            u.startsWith(c)
                                                ? (o = a.substring(c.length).trim())
                                                : u.startsWith(d) && (o = a.substring(d.length).trim());
                                            let h = [],
                                                m = null,
                                                p = null;
                                            if (null != r.options) {
                                                let e = new Set();
                                                if (null != s)
                                                    for (let l of s) {
                                                        e.add(l.name);
                                                        let i = M(n, t, l.name) ?? l.text,
                                                            r = {
                                                                type: "applicationCommandOption",
                                                                optionName: l.name,
                                                                optionDisplayName: l.displayName,
                                                                optionType: l.type,
                                                                children: [{ text: i }],
                                                            };
                                                        (h.push(r), 0 === l.text.length && null == m && (m = r));
                                                    }
                                                for (let l of r.options)
                                                    if (!e.has(l.name) && (l.required || null != i[l.name])) {
                                                        let e, i;
                                                        o.length > 0 && !j.has(l.type)
                                                            ? ((e = o), (o = ""))
                                                            : (e = (i = M(n, t, l.name)) ?? "");
                                                        let r = {
                                                            type: "applicationCommandOption",
                                                            optionName: l.name,
                                                            optionDisplayName: l.displayName,
                                                            optionType: l.type,
                                                            children: [{ text: e }],
                                                        };
                                                        (h.push(r),
                                                            0 === e.length && null == m && (m = r),
                                                            null == i && (p = r));
                                                    }
                                            }
                                            ((l =
                                                o.length > 0
                                                    ? `/${r.displayName} ${o.replace(/\r|\n/g, " ")}`
                                                    : 0 === h.length
                                                      ? `/${r.displayName} `
                                                      : `/${r.displayName}`),
                                                h.unshift({ text: l }));
                                            let f = {
                                                type: "applicationCommand",
                                                children: h,
                                                command: {
                                                    id: r.id,
                                                    name: r.untranslatedName,
                                                    displayName: r.displayName,
                                                },
                                            };
                                            I.VW.withoutNormalizing(e, () => {
                                                for (let [, t] of (b.b.insertNodes(e, [f], { at: v.Xg }),
                                                I.VW.blocks(e).reverse()))
                                                    I.PW.isAfter(t, v.Xg) && b.b.removeNodes(e, { at: t, voids: !0 });
                                            });
                                            let g = null;
                                            return (
                                                null != m
                                                    ? (b.b.selectCommandOption(e, m.optionName), (g = m.optionName))
                                                    : null != p
                                                      ? (b.b.selectCommandOption(e, p.optionName, !1),
                                                        (g = p.optionName))
                                                      : b.b.resetSelectionToEditorEnd(e),
                                                null == p && w(e, r),
                                                g
                                            );
                                        })(t, a, n),
                                        l = y.SQ(t, S, a.id);
                                    return (
                                        O({
                                            guildId: a.guild_id,
                                            channelId: a.id,
                                            command: S,
                                            activeOption: e,
                                            currentOptionValues: l,
                                            previousOptionValues: null,
                                            validateAll: !0,
                                            allowEmpty: !0,
                                        }),
                                        { commandId: S.id, optionValues: l }
                                    );
                                }
                                if (null != S && !u)
                                    return (s.Gf({ channelId: a.id, command: null, section: null }), null);
                                let e = I.VW.richValue(t)[0],
                                    l = e.children[0];
                                if (k.has(e.type) && I.l5.isText(l)) {
                                    let e = (function (e, t) {
                                        if (!e.startsWith("/")) return null;
                                        let n = (0, m.p)(t, e, x.A.getDraftCommand(t.id, x.C.ChannelMessage));
                                        if (null != n) return n;
                                        let l = (0, p.Yn)(t, e.substring(1));
                                        if (!l.hasSpaceTerminator) return null;
                                        let { commands: i, sections: s } = o.v7(
                                            { channel: t, type: "channel" },
                                            r.kc.CHAT,
                                            l.text,
                                        );
                                        if (0 === i.length) return null;
                                        let a = l.text.trim(),
                                            u = a + " ",
                                            d = i.filter(
                                                (e) =>
                                                    e.inputType !== c.y$.PLACEHOLDER &&
                                                    (e.displayName === a || e.displayName.startsWith(u)),
                                            );
                                        if (1 === d.length && d[0].displayName === a) {
                                            let e = d[0],
                                                t = s.find((t) => t.application?.id === e.applicationId);
                                            return { command: e, section: t };
                                        }
                                        return null;
                                    })(l.text, a);
                                    if (null != e)
                                        return (
                                            s.Gf({ channelId: a.id, command: e.command, section: e.section }), null
                                        );
                                }
                            }
                            if (null != S && null != h) {
                                !(function (e, t) {
                                    if (null == t.options || 0 === t.options.length) return !1;
                                    let n = y.pY(e, t);
                                    return (
                                        0 !== n.length &&
                                        (I.VW.withoutNormalizing(e, () => {
                                            for (let t = n.length - 1; t >= 0; t--) {
                                                let l = n[t];
                                                b.b.textToInline(
                                                    e,
                                                    {
                                                        type: "applicationCommandOption",
                                                        optionName: l.name,
                                                        optionDisplayName: l.displayName,
                                                        optionType: l.type,
                                                        children: [{ text: l.text }],
                                                    },
                                                    { anchor: l.keyRange.anchor, focus: l.valueRange.focus },
                                                );
                                            }
                                            let t = I.VW.getFirstText(e);
                                            if (null == t) return !1;
                                            let l = t.text.trim();
                                            t.text !== l &&
                                                b.b.textToText(e, l, {
                                                    anchor: { path: v.fP, offset: 0 },
                                                    focus: { path: v.fP, offset: t.text.length },
                                                });
                                        }),
                                        !0)
                                    );
                                })(t, S) && w(t, S);
                                let e = y.SQ(t, S, a.id),
                                    n = I.VW.above(t, {
                                        match: (e) => I.VW.isInline(t, e) && "applicationCommandOption" === e.type,
                                        mode: "lowest",
                                    }),
                                    l = n?.[0].optionName ?? null;
                                return (
                                    O({
                                        guildId: a.guild_id,
                                        channelId: a.id,
                                        command: S,
                                        activeOption: l,
                                        currentOptionValues: e,
                                        previousOptionValues: d,
                                        validateAll: !1,
                                        allowEmpty: !1,
                                    }),
                                    { commandId: h.id, optionValues: e }
                                );
                            }
                            return null;
                        })({
                            editor: e,
                            storeCommandState: n,
                            channel: t,
                            commandChanged: n.activeCommand?.id !== U?.id,
                            previousOptionValues: W,
                        }),
                    );
                    if (null != u) {
                        let t = C.o.currentEntry(e);
                        (null != t && (t.commandId = u.commandId), (W = u.optionValues));
                    } else W = null;
                    ((D = I.VW.richValue(e)), (V = e.selection), (U = n.activeCommand), (F = a));
                }
            }
            S();
        }),
        e
    );
}
function R(e, t, n, l) {
    let [i] = I.VW.blocks(e)[0],
        r = (l ? (0, A.IQ)(i, { mode: "plain" }).trimEnd() : "")
            .split("\n")
            .map((e) => ({ type: "line", children: [{ text: e }] })),
        a = [r.length - 1];
    for (let [, t] of (b.b.insertNodes(e, r, { at: v.Xg }), I.VW.blocks(e).reverse()))
        I.PW.isAfter(t, a) && b.b.removeNodes(e, { at: t, voids: !0 });
    null != n && s.Gf({ channelId: t, command: null, section: null });
}
function w(e, t) {
    if (
        null == t.options ||
        1 !== t.options.length ||
        !0 === t.options[0].required ||
        j.has(t.options[0].type) ||
        y.O7(e).length > 0 ||
        null == y.n$(e)
    )
        return !1;
    let n = I.VW.getFirstText(e);
    if (null == n) return !1;
    let l = t.options[0],
        i = { path: v.fP, offset: t.displayName.length + 2 },
        r = { path: v.fP, offset: n.text.length };
    return (
        !(!n.text.startsWith(`/${t.displayName} `.toLocaleLowerCase()) || I.Kh.equals(i, r)) &&
        (b.b.textToInline(
            e,
            {
                type: "applicationCommandOption",
                optionName: l.name,
                optionDisplayName: l.displayName,
                optionType: l.type,
                children: [{ text: n.text.substring(t.displayName.length + 2) }],
            },
            { anchor: i, focus: r },
        ),
        !0)
    );
}
function O(e) {
    let {
        guildId: t,
        channelId: n,
        command: l,
        activeOption: i,
        currentOptionValues: r,
        previousOptionValues: a,
        validateAll: o,
        allowEmpty: c,
    } = e;
    if (null == l.options) return !1;
    let d = o ? null : u.A.getActiveOptionName(n),
        m = {},
        p = u.A.getOptionStates(n),
        f = !1;
    for (let e of l.options) {
        let l = p[e.name],
            s =
                o ||
                (e.name === d && d !== i) ||
                (l?.lastValidationResult?.success === !1 && r?.[e.name] !== a?.[e.name]),
            u = {
                hasValue: null != r && e.name in r,
                isActive: e.name === i,
                lastValidationResult: s
                    ? (0, h.J)({
                          option: e,
                          content: r?.[e.name] ?? null,
                          guildId: t,
                          channelId: n,
                          allowEmptyValues: c,
                      })
                    : l?.lastValidationResult,
            };
        (null == l ||
            l.hasValue !== u.hasValue ||
            l.isActive !== u.isActive ||
            (s && l.lastValidationResult?.success === !1)) &&
            ((m[e.name] = u), (f = !0));
    }
    f && s.H2(n, m);
}
function L(e) {
    let t = y.n$(e);
    if (null == t) return { command: null, commandText: null };
    let [n] = t,
        l = n.children[0];
    return I.l5.isText(l) ? { command: n.command, commandText: l.text } : { command: n.command, commandText: null };
}
function P(e, t) {
    let n = y.O7(e)[0];
    t();
    let l = I.ZF.toPoint(e.selection);
    if (null == l || n === y.O7(e)[0]) return;
    let { command: i, commandText: r } = L(e);
    !(null == i || null == r || r.endsWith(" ")) &&
        I.Kh.equals(l, { path: v.fP, offset: i.displayName.length + 1 }) &&
        b.b.insertText(e, " ");
}
function M(e, t, n) {
    let l = e.activeCommand?.options?.find((e) => e.name === n),
        i = e.initialValues[n];
    if (null == l || null == i) return null;
    if (null != l.choices) return l.choices.find((e) => e.value === i.value)?.displayName;
    let s = i.value?.toString();
    return l.type === r.n4.CHANNEL || (l.type === r.n4.MENTIONABLE && null != g.A.getChannel(s))
        ? `<#${s}>	`
        : l.type === r.n4.USER || (l.type === r.n4.MENTIONABLE && null != E.default.getUser(s))
          ? `<@${s}>`
          : l.type === r.n4.ROLE || (l.type === r.n4.MENTIONABLE && null != S.A.getRole(t.guild_id, s ?? N.dJq))
            ? `<@&${s}>`
            : s;
}
