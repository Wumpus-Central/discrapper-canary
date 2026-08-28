"use strict";
n.d(t, { A: () => R, t: () => O }), n(321073), n(667532);
var l = n(485845),
    i = n(465532),
    s = n(155718),
    r = n(721768),
    a = n(459016),
    o = n(842209),
    u = n(861382),
    c = n(392054),
    d = n(168186),
    h = n(203779),
    m = n(94221),
    f = n(664929),
    p = n(853145),
    g = n(734057),
    x = n(31717),
    A = n(317525),
    E = n(287809),
    C = n(317681),
    I = n(186306),
    y = n(323350),
    S = n(35277),
    N = n(820066),
    v = n(551483),
    _ = n(652215);
n(827669);
let j = new Set(["applicationCommandOption"]),
    T = new Set([s.n4.ATTACHMENT]),
    b = new Set(["line", "applicationCommand"]);
function R(e, t) {
    let {
        insertData: n,
        isInline: h,
        isVoid: g,
        onChange: A,
        deleteBackward: E,
        deleteForward: _,
        deleteFragment: R,
    } = e;
    (e.insertData = (l) => {
        if (null != t && N.VW.isEditorEmpty(e) && l.types.includes("application/x-discord-interaction-data")) {
            let e = JSON.parse(l.getData("application/x-discord-interaction-data")),
                { commandKey: n, interactionOptions: i } = (0, d.Ez)(e),
                { application: s, command: u } = o.EW({ channel: t, type: "channel" }, n);
            if (null != u) {
                let e =
                    null != s
                        ? {
                              type: c.Hf.APPLICATION,
                              id: s.id,
                              icon: s.icon,
                              name: s.bot?.username ?? s.name,
                              application: s,
                          }
                        : null;
                return (
                    r.Gf({
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
        (e.isInline = (e) => !!j.has(e.type) || h(e)),
        (e.isVoid = (e) => !!("applicationCommandOption" === e.type && T.has(e.optionType)) || g(e)),
        (e.deleteBackward = (t) => {
            w(e, () => E(t));
        }),
        (e.deleteForward = (t) => {
            w(e, () => _(t));
        }),
        (e.deleteFragment = (t) => {
            w(e, () => R(t));
        });
    let D = null,
        U = null,
        G = null,
        V = null,
        F = null;
    return (
        (e.onChange = () => {
            if (null != t) {
                let n = u.A.getState(t.id),
                    a = o.j8({ channel: t, type: "channel" });
                if (
                    N.VW.richValue(e) !== D ||
                    !N.Ot.equals(e.selection, U) ||
                    n.activeCommand !== G ||
                    null == F ||
                    a.some((e, t) => F[t] !== e)
                ) {
                    let u = I.o.withMergedEntry(e, () =>
                        (function (e) {
                            let {
                                    editor: t,
                                    storeCommandState: n,
                                    channel: a,
                                    commandChanged: u,
                                    previousOptionValues: d,
                                } = e,
                                { command: h, commandText: g } = k(t),
                                A = n.activeCommand,
                                E = t.chatInputType.commands?.enabled === !0,
                                I = null != p.A.getPendingReply(a.id);
                            if (
                                (!E && A?.integration_types?.includes(l.b.GUILD_INSTALL)) ||
                                (I && A?.inputType !== c.y$.BUILT_IN_TEXT && A?.inputType !== c.y$.BUILT_IN_INTEGRATION)
                            )
                                return null != h && O(t, a.id, A, !0), null;
                            if (null != h) {
                                if (N.VW.isEditorEmpty(t) || null == A) return O(t, a.id, A, !1), null;
                                let e = `/${h.displayName}`;
                                if (
                                    null == g ||
                                    !g.startsWith(e) ||
                                    (0 === C.O7(t).length && (g.length < e.length + 1 || " " !== g[e.length]))
                                )
                                    return i.A.clearDraftCommand(a.id, x.C.ChannelMessage), O(t, a.id, A, !0), null;
                            } else {
                                if (null != A && u) {
                                    let e = (function (e, t, n) {
                                            let l,
                                                { initialValues: i, activeCommand: s } = n;
                                            if (null == s) return null;
                                            let r = (s.options?.length ?? 0) > 0 ? C.pY(e, s) : null,
                                                a = (0, y.WO)(N.VW.richValue(e), {
                                                    mode: "raw",
                                                    range: {
                                                        anchor: N.VW.start(e, []),
                                                        focus: r?.[0]?.keyRange.anchor ?? N.VW.end(e, []),
                                                    },
                                                }),
                                                o = "",
                                                u = a.toLocaleLowerCase(),
                                                c = `/${s.displayName} `.toLocaleLowerCase(),
                                                d = `/${s.untranslatedName} `.toLocaleLowerCase();
                                            u.startsWith(c)
                                                ? (o = a.substring(c.length).trim())
                                                : u.startsWith(d) && (o = a.substring(d.length).trim());
                                            let h = [],
                                                m = null,
                                                f = null;
                                            if (null != s.options) {
                                                let e = new Set();
                                                if (null != r)
                                                    for (let l of r) {
                                                        e.add(l.name);
                                                        let i = P(n, t, l.name) ?? l.text,
                                                            s = {
                                                                type: "applicationCommandOption",
                                                                optionName: l.name,
                                                                optionDisplayName: l.displayName,
                                                                optionType: l.type,
                                                                children: [{ text: i }],
                                                            };
                                                        h.push(s), 0 === l.text.length && null == m && (m = s);
                                                    }
                                                for (let l of s.options)
                                                    if (!e.has(l.name) && (l.required || null != i[l.name])) {
                                                        let e, i;
                                                        o.length > 0 && !T.has(l.type)
                                                            ? ((e = o), (o = ""))
                                                            : (e = (i = P(n, t, l.name)) ?? "");
                                                        let s = {
                                                            type: "applicationCommandOption",
                                                            optionName: l.name,
                                                            optionDisplayName: l.displayName,
                                                            optionType: l.type,
                                                            children: [{ text: e }],
                                                        };
                                                        h.push(s),
                                                            0 === e.length && null == m && (m = s),
                                                            null == i && (f = s);
                                                    }
                                            }
                                            (l =
                                                o.length > 0
                                                    ? `/${s.displayName} ${o.replace(/\r|\n/g, " ")}`
                                                    : 0 === h.length
                                                      ? `/${s.displayName} `
                                                      : `/${s.displayName}`),
                                                h.unshift({ text: l });
                                            let p = {
                                                type: "applicationCommand",
                                                children: h,
                                                command: {
                                                    id: s.id,
                                                    name: s.untranslatedName,
                                                    displayName: s.displayName,
                                                },
                                            };
                                            N.VW.withoutNormalizing(e, () => {
                                                for (let [, t] of (S.b.insertNodes(e, [p], { at: v.Xg }),
                                                N.VW.blocks(e).reverse()))
                                                    N.PW.isAfter(t, v.Xg) && S.b.removeNodes(e, { at: t, voids: !0 });
                                            });
                                            let g = null;
                                            return (
                                                null != m
                                                    ? (S.b.selectCommandOption(e, m.optionName), (g = m.optionName))
                                                    : null != f
                                                      ? (S.b.selectCommandOption(e, f.optionName, !1),
                                                        (g = f.optionName))
                                                      : S.b.resetSelectionToEditorEnd(e),
                                                null == f && M(e, s),
                                                g
                                            );
                                        })(t, a, n),
                                        l = C.SQ(t, A, a.id);
                                    return (
                                        L({
                                            guildId: a.guild_id,
                                            channelId: a.id,
                                            command: A,
                                            activeOption: e,
                                            currentOptionValues: l,
                                            previousOptionValues: null,
                                            validateAll: !0,
                                            allowEmpty: !0,
                                        }),
                                        { commandId: A.id, optionValues: l }
                                    );
                                }
                                if (null != A && !u)
                                    return r.Gf({ channelId: a.id, command: null, section: null }), null;
                                let e = N.VW.richValue(t)[0],
                                    l = e.children[0];
                                if (b.has(e.type) && N.l5.isText(l)) {
                                    let e = (function (e, t) {
                                        if (!e.startsWith("/")) return null;
                                        let n = (0, m.p)(t, e, x.A.getDraftCommand(t.id, x.C.ChannelMessage));
                                        if (null != n) return n;
                                        let l = (0, f.Yn)(t, e.substring(1));
                                        if (!l.hasSpaceTerminator) return null;
                                        let { commands: i, sections: r } = o.v7(
                                            { channel: t, type: "channel" },
                                            s.kc.CHAT,
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
                                                t = r.find((t) => t.application?.id === e.applicationId);
                                            return { command: e, section: t };
                                        }
                                        return null;
                                    })(l.text, a);
                                    if (null != e)
                                        return r.Gf({ channelId: a.id, command: e.command, section: e.section }), null;
                                }
                            }
                            if (null != A && null != h) {
                                !(function (e, t) {
                                    if (null == t.options || 0 === t.options.length) return !1;
                                    let n = C.pY(e, t);
                                    return (
                                        0 !== n.length &&
                                        (N.VW.withoutNormalizing(e, () => {
                                            for (let t = n.length - 1; t >= 0; t--) {
                                                let l = n[t];
                                                S.b.textToInline(
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
                                            let t = N.VW.getFirstText(e);
                                            if (null == t) return !1;
                                            let l = t.text.trim();
                                            t.text !== l &&
                                                S.b.textToText(e, l, {
                                                    anchor: { path: v.fP, offset: 0 },
                                                    focus: { path: v.fP, offset: t.text.length },
                                                });
                                        }),
                                        !0)
                                    );
                                })(t, A) && M(t, A);
                                let e = C.SQ(t, A, a.id),
                                    n = N.VW.above(t, {
                                        match: (e) => N.VW.isInline(t, e) && "applicationCommandOption" === e.type,
                                        mode: "lowest",
                                    }),
                                    l = n?.[0].optionName ?? null;
                                return (
                                    L({
                                        guildId: a.guild_id,
                                        channelId: a.id,
                                        command: A,
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
                            commandChanged: n.activeCommand?.id !== G?.id,
                            previousOptionValues: V,
                        }),
                    );
                    if (null != u) {
                        let t = I.o.currentEntry(e);
                        null != t && (t.commandId = u.commandId), (V = u.optionValues);
                    } else V = null;
                    (D = N.VW.richValue(e)), (U = e.selection), (G = n.activeCommand), (F = a);
                }
            }
            A();
        }),
        e
    );
}
function O(e, t, n, l) {
    let [i] = N.VW.blocks(e)[0],
        s = (l ? (0, y.IQ)(i, { mode: "plain" }).trimEnd() : "")
            .split("\n")
            .map((e) => ({ type: "line", children: [{ text: e }] })),
        a = [s.length - 1];
    for (let [, t] of (S.b.insertNodes(e, s, { at: v.Xg }), N.VW.blocks(e).reverse()))
        N.PW.isAfter(t, a) && S.b.removeNodes(e, { at: t, voids: !0 });
    null != n && r.Gf({ channelId: t, command: null, section: null });
}
function M(e, t) {
    if (
        null == t.options ||
        1 !== t.options.length ||
        !0 === t.options[0].required ||
        T.has(t.options[0].type) ||
        C.O7(e).length > 0 ||
        null == C.n$(e)
    )
        return !1;
    let n = N.VW.getFirstText(e);
    if (null == n) return !1;
    let l = t.options[0],
        i = { path: v.fP, offset: t.displayName.length + 2 },
        s = { path: v.fP, offset: n.text.length };
    return (
        !(!n.text.startsWith(`/${t.displayName} `.toLocaleLowerCase()) || N.Kh.equals(i, s)) &&
        (S.b.textToInline(
            e,
            {
                type: "applicationCommandOption",
                optionName: l.name,
                optionDisplayName: l.displayName,
                optionType: l.type,
                children: [{ text: n.text.substring(t.displayName.length + 2) }],
            },
            { anchor: i, focus: s },
        ),
        !0)
    );
}
function L(e) {
    let {
        guildId: t,
        channelId: n,
        command: l,
        activeOption: i,
        currentOptionValues: s,
        previousOptionValues: a,
        validateAll: o,
        allowEmpty: c,
    } = e;
    if (null == l.options) return !1;
    let d = o ? null : u.A.getActiveOptionName(n),
        m = {},
        f = u.A.getOptionStates(n),
        p = !1;
    for (let e of l.options) {
        let l = f[e.name],
            r =
                o ||
                (e.name === d && d !== i) ||
                (l?.lastValidationResult?.success === !1 && s?.[e.name] !== a?.[e.name]),
            u = {
                hasValue: null != s && e.name in s,
                isActive: e.name === i,
                lastValidationResult: r
                    ? (0, h.J)({
                          option: e,
                          content: s?.[e.name] ?? null,
                          guildId: t,
                          channelId: n,
                          allowEmptyValues: c,
                      })
                    : l?.lastValidationResult,
            };
        (null == l ||
            l.hasValue !== u.hasValue ||
            l.isActive !== u.isActive ||
            (r && l.lastValidationResult?.success === !1)) &&
            ((m[e.name] = u), (p = !0));
    }
    p && r.H2(n, m);
}
function k(e) {
    let t = C.n$(e);
    if (null == t) return { command: null, commandText: null };
    let [n] = t,
        l = n.children[0];
    return N.l5.isText(l) ? { command: n.command, commandText: l.text } : { command: n.command, commandText: null };
}
function w(e, t) {
    let n = C.O7(e)[0];
    t();
    let l = N.ZF.toPoint(e.selection);
    if (null == l || n === C.O7(e)[0]) return;
    let { command: i, commandText: s } = k(e);
    !(null == i || null == s || s.endsWith(" ")) &&
        N.Kh.equals(l, { path: v.fP, offset: i.displayName.length + 1 }) &&
        S.b.insertText(e, " ");
}
function P(e, t, n) {
    let l = e.activeCommand?.options?.find((e) => e.name === n),
        i = e.initialValues[n];
    if (null == l || null == i) return null;
    if (null != l.choices) return l.choices.find((e) => e.value === i.value)?.displayName;
    let r = i.value?.toString();
    return l.type === s.n4.CHANNEL || (l.type === s.n4.MENTIONABLE && null != g.A.getChannel(r))
        ? `<#${r}>	`
        : l.type === s.n4.USER || (l.type === s.n4.MENTIONABLE && null != E.default.getUser(r))
          ? `<@${r}>`
          : l.type === s.n4.ROLE || (l.type === s.n4.MENTIONABLE && null != A.A.getRole(t.guild_id, r ?? _.dJq))
            ? `<@&${r}>`
            : r;
}
