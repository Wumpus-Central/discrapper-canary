"use strict";
n.d(t, { A: () => R, t: () => O }), n(321073), n(667532);
var i = n(485845),
    r = n(155718),
    s = n(721768),
    a = n(459016),
    o = n(842209),
    l = n(861382),
    u = n(392054),
    c = n(168186),
    d = n(203779),
    _ = n(649671),
    h = n(853145),
    f = n(734057),
    p = n(317525),
    E = n(287809),
    m = n(317681),
    g = n(186306),
    A = n(323350),
    I = n(35277),
    T = n(820066),
    S = n(551483),
    y = n(652215);
n(827669);
let C = new Set(["applicationCommandOption"]),
    N = new Set([r.n4.ATTACHMENT]),
    v = new Set(["line", "applicationCommand"]);
function R(e, t) {
    let {
        insertData: n,
        isInline: d,
        isVoid: f,
        onChange: p,
        deleteBackward: E,
        deleteForward: y,
        deleteFragment: R,
    } = e;
    (e.insertData = (i) => {
        if (null != t && T.VW.isEditorEmpty(e) && i.types.includes("application/x-discord-interaction-data")) {
            let e = JSON.parse(i.getData("application/x-discord-interaction-data")),
                { commandKey: n, interactionOptions: r } = (0, c.Ez)(e),
                { application: l, command: d } = o.EW({ channel: t, type: "channel" }, n);
            if (null != d) {
                let e =
                    null != l
                        ? {
                              type: u.Hf.APPLICATION,
                              id: l.id,
                              icon: l.icon,
                              name: l.bot?.username ?? l.name,
                              application: l,
                          }
                        : null;
                return (
                    s.Gf({
                        channelId: t.id,
                        command: d,
                        section: e,
                        location: u.Oh.PASTE,
                        initialValues: (0, a.getInitialValuesFromInteractionOptions)(d, r ?? []),
                    }),
                    null
                );
            }
        }
        return n(i);
    }),
        (e.isInline = (e) => !!C.has(e.type) || d(e)),
        (e.isVoid = (e) => !!("applicationCommandOption" === e.type && N.has(e.optionType)) || f(e)),
        (e.deleteBackward = (t) => {
            w(e, () => E(t));
        }),
        (e.deleteForward = (t) => {
            w(e, () => y(t));
        }),
        (e.deleteFragment = (t) => {
            w(e, () => R(t));
        });
    let P = null,
        x = null,
        k = null,
        U = null,
        G = null;
    return (
        (e.onChange = () => {
            if (null != t) {
                let n = l.A.getState(t.id),
                    a = o.j8({ channel: t, type: "channel" });
                if (
                    T.VW.richValue(e) !== P ||
                    !T.Ot.equals(e.selection, x) ||
                    n.activeCommand !== k ||
                    null == G ||
                    a.some((e, t) => G[t] !== e)
                ) {
                    let l = g.o.withMergedEntry(e, () =>
                        (function (e) {
                            let {
                                    editor: t,
                                    storeCommandState: n,
                                    channel: a,
                                    commandChanged: l,
                                    previousOptionValues: c,
                                } = e,
                                { command: d, commandText: f } = L(t),
                                p = n.activeCommand,
                                E = t.chatInputType.commands?.enabled === !0,
                                g = null != h.A.getPendingReply(a.id);
                            if (
                                (!E && p?.integration_types?.includes(i.b.GUILD_INSTALL)) ||
                                (g && p?.inputType !== u.y$.BUILT_IN_TEXT && p?.inputType !== u.y$.BUILT_IN_INTEGRATION)
                            )
                                return null != d && O(t, a.id, p, !0), null;
                            if (null != d) {
                                if (T.VW.isEditorEmpty(t) || null == p) return O(t, a.id, p, !1), null;
                                let e = `/${d.displayName}`;
                                if (
                                    null == f ||
                                    !f.startsWith(e) ||
                                    (0 === m.O7(t).length && (f.length < e.length + 1 || " " !== f[e.length]))
                                )
                                    return O(t, a.id, p, !0), null;
                            } else {
                                if (null != p && l) {
                                    let e = (function (e, t, n) {
                                            let i,
                                                { initialValues: r, activeCommand: s } = n;
                                            if (null == s) return null;
                                            let a = (s.options?.length ?? 0) > 0 ? m.pY(e, s) : null,
                                                o = (0, A.WO)(T.VW.richValue(e), {
                                                    mode: "raw",
                                                    range: {
                                                        anchor: T.VW.start(e, []),
                                                        focus: a?.[0]?.keyRange.anchor ?? T.VW.end(e, []),
                                                    },
                                                }),
                                                l = "",
                                                u = o.toLocaleLowerCase(),
                                                c = `/${s.displayName} `.toLocaleLowerCase(),
                                                d = `/${s.untranslatedName} `.toLocaleLowerCase();
                                            u.startsWith(c)
                                                ? (l = o.substring(c.length).trim())
                                                : u.startsWith(d) && (l = o.substring(d.length).trim());
                                            let _ = [],
                                                h = null,
                                                f = null;
                                            if (null != s.options) {
                                                let e = new Set();
                                                if (null != a)
                                                    for (let i of a) {
                                                        e.add(i.name);
                                                        let r = M(n, t, i.name) ?? i.text,
                                                            s = {
                                                                type: "applicationCommandOption",
                                                                optionName: i.name,
                                                                optionDisplayName: i.displayName,
                                                                optionType: i.type,
                                                                children: [{ text: r }],
                                                            };
                                                        _.push(s), 0 === i.text.length && null == h && (h = s);
                                                    }
                                                for (let i of s.options)
                                                    if (!e.has(i.name) && (i.required || null != r[i.name])) {
                                                        let e, r;
                                                        l.length > 0 && !N.has(i.type)
                                                            ? ((e = l), (l = ""))
                                                            : (e = (r = M(n, t, i.name)) ?? "");
                                                        let s = {
                                                            type: "applicationCommandOption",
                                                            optionName: i.name,
                                                            optionDisplayName: i.displayName,
                                                            optionType: i.type,
                                                            children: [{ text: e }],
                                                        };
                                                        _.push(s),
                                                            0 === e.length && null == h && (h = s),
                                                            null == r && (f = s);
                                                    }
                                            }
                                            (i =
                                                l.length > 0
                                                    ? `/${s.displayName} ${l.replace(/\r|\n/g, " ")}`
                                                    : 0 === _.length
                                                      ? `/${s.displayName} `
                                                      : `/${s.displayName}`),
                                                _.unshift({ text: i });
                                            let p = {
                                                type: "applicationCommand",
                                                children: _,
                                                command: {
                                                    id: s.id,
                                                    name: s.untranslatedName,
                                                    displayName: s.displayName,
                                                },
                                            };
                                            T.VW.withoutNormalizing(e, () => {
                                                for (let [, t] of (I.b.insertNodes(e, [p], { at: S.Xg }),
                                                T.VW.blocks(e).reverse()))
                                                    T.PW.isAfter(t, S.Xg) && I.b.removeNodes(e, { at: t, voids: !0 });
                                            });
                                            let E = null;
                                            return (
                                                null != h
                                                    ? (I.b.selectCommandOption(e, h.optionName), (E = h.optionName))
                                                    : null != f
                                                      ? (I.b.selectCommandOption(e, f.optionName, !1),
                                                        (E = f.optionName))
                                                      : I.b.resetSelectionToEditorEnd(e),
                                                null == f && b(e, s),
                                                E
                                            );
                                        })(t, a, n),
                                        i = m.SQ(t, p, a.id);
                                    return (
                                        D({
                                            guildId: a.guild_id,
                                            channelId: a.id,
                                            command: p,
                                            activeOption: e,
                                            currentOptionValues: i,
                                            previousOptionValues: null,
                                            validateAll: !0,
                                            allowEmpty: !0,
                                        }),
                                        { commandId: p.id, optionValues: i }
                                    );
                                }
                                if (null != p && !l)
                                    return s.Gf({ channelId: a.id, command: null, section: null }), null;
                                let e = T.VW.richValue(t)[0],
                                    i = e.children[0];
                                if (v.has(e.type) && T.l5.isText(i)) {
                                    let e = (function (e, t) {
                                        if (!e.startsWith("/")) return null;
                                        let n = (0, _.Yn)(t, e.substring(1));
                                        if (!n.hasSpaceTerminator) return null;
                                        let { commands: i, sections: s } = o.v7(
                                            { channel: t, type: "channel" },
                                            r.kc.CHAT,
                                            n.text,
                                        );
                                        if (0 === i.length) return null;
                                        let a = n.text.trim(),
                                            l = a + " ",
                                            c = i.filter(
                                                (e) =>
                                                    e.inputType !== u.y$.PLACEHOLDER &&
                                                    (e.displayName === a || e.displayName.startsWith(l)),
                                            );
                                        if (1 === c.length && c[0].displayName === a) {
                                            let e = c[0],
                                                t = s.find((t) => t.application?.id === e.applicationId);
                                            return { command: e, section: t };
                                        }
                                        return null;
                                    })(i.text, a);
                                    if (null != e)
                                        return s.Gf({ channelId: a.id, command: e.command, section: e.section }), null;
                                }
                            }
                            if (null != p && null != d) {
                                !(function (e, t) {
                                    if (null == t.options || 0 === t.options.length) return !1;
                                    let n = m.pY(e, t);
                                    return (
                                        0 !== n.length &&
                                        (T.VW.withoutNormalizing(e, () => {
                                            for (let t = n.length - 1; t >= 0; t--) {
                                                let i = n[t];
                                                I.b.textToInline(
                                                    e,
                                                    {
                                                        type: "applicationCommandOption",
                                                        optionName: i.name,
                                                        optionDisplayName: i.displayName,
                                                        optionType: i.type,
                                                        children: [{ text: i.text }],
                                                    },
                                                    { anchor: i.keyRange.anchor, focus: i.valueRange.focus },
                                                );
                                            }
                                            let t = T.VW.getFirstText(e);
                                            if (null == t) return !1;
                                            let i = t.text.trim();
                                            t.text !== i &&
                                                I.b.textToText(e, i, {
                                                    anchor: { path: S.fP, offset: 0 },
                                                    focus: { path: S.fP, offset: t.text.length },
                                                });
                                        }),
                                        !0)
                                    );
                                })(t, p) && b(t, p);
                                let e = m.SQ(t, p, a.id),
                                    n = T.VW.above(t, {
                                        match: (e) => T.VW.isInline(t, e) && "applicationCommandOption" === e.type,
                                        mode: "lowest",
                                    }),
                                    i = n?.[0].optionName ?? null;
                                return (
                                    D({
                                        guildId: a.guild_id,
                                        channelId: a.id,
                                        command: p,
                                        activeOption: i,
                                        currentOptionValues: e,
                                        previousOptionValues: c,
                                        validateAll: !1,
                                        allowEmpty: !1,
                                    }),
                                    { commandId: d.id, optionValues: e }
                                );
                            }
                            return null;
                        })({
                            editor: e,
                            storeCommandState: n,
                            channel: t,
                            commandChanged: n.activeCommand?.id !== k?.id,
                            previousOptionValues: U,
                        }),
                    );
                    if (null != l) {
                        let t = g.o.currentEntry(e);
                        null != t && (t.commandId = l.commandId), (U = l.optionValues);
                    } else U = null;
                    (P = T.VW.richValue(e)), (x = e.selection), (k = n.activeCommand), (G = a);
                }
            }
            p();
        }),
        e
    );
}
function O(e, t, n, i) {
    let [r] = T.VW.blocks(e)[0],
        a = (i ? (0, A.IQ)(r, { mode: "plain" }).trimEnd() : "")
            .split("\n")
            .map((e) => ({ type: "line", children: [{ text: e }] })),
        o = [a.length - 1];
    for (let [, t] of (I.b.insertNodes(e, a, { at: S.Xg }), T.VW.blocks(e).reverse()))
        T.PW.isAfter(t, o) && I.b.removeNodes(e, { at: t, voids: !0 });
    null != n && s.Gf({ channelId: t, command: null, section: null });
}
function b(e, t) {
    if (
        null == t.options ||
        1 !== t.options.length ||
        !0 === t.options[0].required ||
        N.has(t.options[0].type) ||
        m.O7(e).length > 0 ||
        null == m.n$(e)
    )
        return !1;
    let n = T.VW.getFirstText(e);
    if (null == n) return !1;
    let i = t.options[0],
        r = { path: S.fP, offset: t.displayName.length + 2 },
        s = { path: S.fP, offset: n.text.length };
    return (
        !(!n.text.startsWith(`/${t.displayName} `.toLocaleLowerCase()) || T.Kh.equals(r, s)) &&
        (I.b.textToInline(
            e,
            {
                type: "applicationCommandOption",
                optionName: i.name,
                optionDisplayName: i.displayName,
                optionType: i.type,
                children: [{ text: n.text.substring(t.displayName.length + 2) }],
            },
            { anchor: r, focus: s },
        ),
        !0)
    );
}
function D(e) {
    let {
        guildId: t,
        channelId: n,
        command: i,
        activeOption: r,
        currentOptionValues: a,
        previousOptionValues: o,
        validateAll: u,
        allowEmpty: c,
    } = e;
    if (null == i.options) return !1;
    let _ = u ? null : l.A.getActiveOptionName(n),
        h = {},
        f = l.A.getOptionStates(n),
        p = !1;
    for (let e of i.options) {
        let i = f[e.name],
            s =
                u ||
                (e.name === _ && _ !== r) ||
                (i?.lastValidationResult?.success === !1 && a?.[e.name] !== o?.[e.name]),
            l = {
                hasValue: null != a && e.name in a,
                isActive: e.name === r,
                lastValidationResult: s
                    ? (0, d.J)({
                          option: e,
                          content: a?.[e.name] ?? null,
                          guildId: t,
                          channelId: n,
                          allowEmptyValues: c,
                      })
                    : i?.lastValidationResult,
            };
        (null == i ||
            i.hasValue !== l.hasValue ||
            i.isActive !== l.isActive ||
            (s && i.lastValidationResult?.success === !1)) &&
            ((h[e.name] = l), (p = !0));
    }
    p && s.H2(n, h);
}
function L(e) {
    let t = m.n$(e);
    if (null == t) return { command: null, commandText: null };
    let [n] = t,
        i = n.children[0];
    return T.l5.isText(i) ? { command: n.command, commandText: i.text } : { command: n.command, commandText: null };
}
function w(e, t) {
    let n = m.O7(e)[0];
    t();
    let i = T.ZF.toPoint(e.selection);
    if (null == i || n === m.O7(e)[0]) return;
    let { command: r, commandText: s } = L(e);
    !(null == r || null == s || s.endsWith(" ")) &&
        T.Kh.equals(i, { path: S.fP, offset: r.displayName.length + 1 }) &&
        I.b.insertText(e, " ");
}
function M(e, t, n) {
    let i = e.activeCommand?.options?.find((e) => e.name === n),
        s = e.initialValues[n];
    if (null == i || null == s) return null;
    if (null != i.choices) return i.choices.find((e) => e.value === s.value)?.displayName;
    let a = s.value?.toString();
    return i.type === r.n4.CHANNEL || (i.type === r.n4.MENTIONABLE && null != f.A.getChannel(a))
        ? `<#${a}>	`
        : i.type === r.n4.USER || (i.type === r.n4.MENTIONABLE && null != E.default.getUser(a))
          ? `<@${a}>`
          : i.type === r.n4.ROLE || (i.type === r.n4.MENTIONABLE && null != p.A.getRole(t.guild_id, a ?? y.dJq))
            ? `<@&${a}>`
            : a;
}
