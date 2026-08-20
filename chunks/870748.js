"use strict";
n.d(t, { A: () => T, t: () => j }), n(321073), n(667532);
var l = n(485845),
    i = n(155718),
    s = n(721768),
    r = n(459016),
    a = n(842209),
    o = n(861382),
    u = n(392054),
    c = n(168186),
    d = n(203779),
    h = n(664929),
    m = n(853145),
    f = n(734057),
    p = n(317525),
    g = n(287809),
    x = n(317681),
    A = n(186306),
    C = n(323350),
    E = n(35277),
    I = n(820066),
    y = n(551483),
    v = n(652215);
n(827669);
let S = new Set(["applicationCommandOption"]),
    N = new Set([i.n4.ATTACHMENT]),
    _ = new Set(["line", "applicationCommand"]);
function T(e, t) {
    let {
        insertData: n,
        isInline: d,
        isVoid: f,
        onChange: p,
        deleteBackward: g,
        deleteForward: v,
        deleteFragment: T,
    } = e;
    (e.insertData = (l) => {
        if (null != t && I.VW.isEditorEmpty(e) && l.types.includes("application/x-discord-interaction-data")) {
            let e = JSON.parse(l.getData("application/x-discord-interaction-data")),
                { commandKey: n, interactionOptions: i } = (0, c.Ez)(e),
                { application: o, command: d } = a.EW({ channel: t, type: "channel" }, n);
            if (null != d) {
                let e =
                    null != o
                        ? {
                              type: u.Hf.APPLICATION,
                              id: o.id,
                              icon: o.icon,
                              name: o.bot?.username ?? o.name,
                              application: o,
                          }
                        : null;
                return (
                    s.Gf({
                        channelId: t.id,
                        command: d,
                        section: e,
                        location: u.Oh.PASTE,
                        initialValues: (0, r.getInitialValuesFromInteractionOptions)(d, i ?? []),
                    }),
                    null
                );
            }
        }
        return n(l);
    }),
        (e.isInline = (e) => !!S.has(e.type) || d(e)),
        (e.isVoid = (e) => !!("applicationCommandOption" === e.type && N.has(e.optionType)) || f(e)),
        (e.deleteBackward = (t) => {
            M(e, () => g(t));
        }),
        (e.deleteForward = (t) => {
            M(e, () => v(t));
        }),
        (e.deleteFragment = (t) => {
            M(e, () => T(t));
        });
    let w = null,
        k = null,
        P = null,
        D = null,
        U = null;
    return (
        (e.onChange = () => {
            if (null != t) {
                let n = o.A.getState(t.id),
                    r = a.j8({ channel: t, type: "channel" });
                if (
                    I.VW.richValue(e) !== w ||
                    !I.Ot.equals(e.selection, k) ||
                    n.activeCommand !== P ||
                    null == U ||
                    r.some((e, t) => U[t] !== e)
                ) {
                    let o = A.o.withMergedEntry(e, () =>
                        (function (e) {
                            let {
                                    editor: t,
                                    storeCommandState: n,
                                    channel: r,
                                    commandChanged: o,
                                    previousOptionValues: c,
                                } = e,
                                { command: d, commandText: f } = O(t),
                                p = n.activeCommand,
                                g = t.chatInputType.commands?.enabled === !0,
                                A = null != m.A.getPendingReply(r.id);
                            if (
                                (!g && p?.integration_types?.includes(l.b.GUILD_INSTALL)) ||
                                (A && p?.inputType !== u.y$.BUILT_IN_TEXT && p?.inputType !== u.y$.BUILT_IN_INTEGRATION)
                            )
                                return null != d && j(t, r.id, p, !0), null;
                            if (null != d) {
                                if (I.VW.isEditorEmpty(t) || null == p) return j(t, r.id, p, !1), null;
                                let e = `/${d.displayName}`;
                                if (
                                    null == f ||
                                    !f.startsWith(e) ||
                                    (0 === x.O7(t).length && (f.length < e.length + 1 || " " !== f[e.length]))
                                )
                                    return j(t, r.id, p, !0), null;
                            } else {
                                if (null != p && o) {
                                    let e = (function (e, t, n) {
                                            let l,
                                                { initialValues: i, activeCommand: s } = n;
                                            if (null == s) return null;
                                            let r = (s.options?.length ?? 0) > 0 ? x.pY(e, s) : null,
                                                a = (0, C.WO)(I.VW.richValue(e), {
                                                    mode: "raw",
                                                    range: {
                                                        anchor: I.VW.start(e, []),
                                                        focus: r?.[0]?.keyRange.anchor ?? I.VW.end(e, []),
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
                                                        let i = L(n, t, l.name) ?? l.text,
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
                                                        o.length > 0 && !N.has(l.type)
                                                            ? ((e = o), (o = ""))
                                                            : (e = (i = L(n, t, l.name)) ?? "");
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
                                            I.VW.withoutNormalizing(e, () => {
                                                for (let [, t] of (E.b.insertNodes(e, [p], { at: y.Xg }),
                                                I.VW.blocks(e).reverse()))
                                                    I.PW.isAfter(t, y.Xg) && E.b.removeNodes(e, { at: t, voids: !0 });
                                            });
                                            let g = null;
                                            return (
                                                null != m
                                                    ? (E.b.selectCommandOption(e, m.optionName), (g = m.optionName))
                                                    : null != f
                                                      ? (E.b.selectCommandOption(e, f.optionName, !1),
                                                        (g = f.optionName))
                                                      : E.b.resetSelectionToEditorEnd(e),
                                                null == f && b(e, s),
                                                g
                                            );
                                        })(t, r, n),
                                        l = x.SQ(t, p, r.id);
                                    return (
                                        R({
                                            guildId: r.guild_id,
                                            channelId: r.id,
                                            command: p,
                                            activeOption: e,
                                            currentOptionValues: l,
                                            previousOptionValues: null,
                                            validateAll: !0,
                                            allowEmpty: !0,
                                        }),
                                        { commandId: p.id, optionValues: l }
                                    );
                                }
                                if (null != p && !o)
                                    return s.Gf({ channelId: r.id, command: null, section: null }), null;
                                let e = I.VW.richValue(t)[0],
                                    l = e.children[0];
                                if (_.has(e.type) && I.l5.isText(l)) {
                                    let e = (function (e, t) {
                                        if (!e.startsWith("/")) return null;
                                        let n = (0, h.Yn)(t, e.substring(1));
                                        if (!n.hasSpaceTerminator) return null;
                                        let { commands: l, sections: s } = a.v7(
                                            { channel: t, type: "channel" },
                                            i.kc.CHAT,
                                            n.text,
                                        );
                                        if (0 === l.length) return null;
                                        let r = n.text.trim(),
                                            o = r + " ",
                                            c = l.filter(
                                                (e) =>
                                                    e.inputType !== u.y$.PLACEHOLDER &&
                                                    (e.displayName === r || e.displayName.startsWith(o)),
                                            );
                                        if (1 === c.length && c[0].displayName === r) {
                                            let e = c[0],
                                                t = s.find((t) => t.application?.id === e.applicationId);
                                            return { command: e, section: t };
                                        }
                                        return null;
                                    })(l.text, r);
                                    if (null != e)
                                        return s.Gf({ channelId: r.id, command: e.command, section: e.section }), null;
                                }
                            }
                            if (null != p && null != d) {
                                !(function (e, t) {
                                    if (null == t.options || 0 === t.options.length) return !1;
                                    let n = x.pY(e, t);
                                    return (
                                        0 !== n.length &&
                                        (I.VW.withoutNormalizing(e, () => {
                                            for (let t = n.length - 1; t >= 0; t--) {
                                                let l = n[t];
                                                E.b.textToInline(
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
                                                E.b.textToText(e, l, {
                                                    anchor: { path: y.fP, offset: 0 },
                                                    focus: { path: y.fP, offset: t.text.length },
                                                });
                                        }),
                                        !0)
                                    );
                                })(t, p) && b(t, p);
                                let e = x.SQ(t, p, r.id),
                                    n = I.VW.above(t, {
                                        match: (e) => I.VW.isInline(t, e) && "applicationCommandOption" === e.type,
                                        mode: "lowest",
                                    }),
                                    l = n?.[0].optionName ?? null;
                                return (
                                    R({
                                        guildId: r.guild_id,
                                        channelId: r.id,
                                        command: p,
                                        activeOption: l,
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
                            commandChanged: n.activeCommand?.id !== P?.id,
                            previousOptionValues: D,
                        }),
                    );
                    if (null != o) {
                        let t = A.o.currentEntry(e);
                        null != t && (t.commandId = o.commandId), (D = o.optionValues);
                    } else D = null;
                    (w = I.VW.richValue(e)), (k = e.selection), (P = n.activeCommand), (U = r);
                }
            }
            p();
        }),
        e
    );
}
function j(e, t, n, l) {
    let [i] = I.VW.blocks(e)[0],
        r = (l ? (0, C.IQ)(i, { mode: "plain" }).trimEnd() : "")
            .split("\n")
            .map((e) => ({ type: "line", children: [{ text: e }] })),
        a = [r.length - 1];
    for (let [, t] of (E.b.insertNodes(e, r, { at: y.Xg }), I.VW.blocks(e).reverse()))
        I.PW.isAfter(t, a) && E.b.removeNodes(e, { at: t, voids: !0 });
    null != n && s.Gf({ channelId: t, command: null, section: null });
}
function b(e, t) {
    if (
        null == t.options ||
        1 !== t.options.length ||
        !0 === t.options[0].required ||
        N.has(t.options[0].type) ||
        x.O7(e).length > 0 ||
        null == x.n$(e)
    )
        return !1;
    let n = I.VW.getFirstText(e);
    if (null == n) return !1;
    let l = t.options[0],
        i = { path: y.fP, offset: t.displayName.length + 2 },
        s = { path: y.fP, offset: n.text.length };
    return (
        !(!n.text.startsWith(`/${t.displayName} `.toLocaleLowerCase()) || I.Kh.equals(i, s)) &&
        (E.b.textToInline(
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
function R(e) {
    let {
        guildId: t,
        channelId: n,
        command: l,
        activeOption: i,
        currentOptionValues: r,
        previousOptionValues: a,
        validateAll: u,
        allowEmpty: c,
    } = e;
    if (null == l.options) return !1;
    let h = u ? null : o.A.getActiveOptionName(n),
        m = {},
        f = o.A.getOptionStates(n),
        p = !1;
    for (let e of l.options) {
        let l = f[e.name],
            s =
                u ||
                (e.name === h && h !== i) ||
                (l?.lastValidationResult?.success === !1 && r?.[e.name] !== a?.[e.name]),
            o = {
                hasValue: null != r && e.name in r,
                isActive: e.name === i,
                lastValidationResult: s
                    ? (0, d.J)({
                          option: e,
                          content: r?.[e.name] ?? null,
                          guildId: t,
                          channelId: n,
                          allowEmptyValues: c,
                      })
                    : l?.lastValidationResult,
            };
        (null == l ||
            l.hasValue !== o.hasValue ||
            l.isActive !== o.isActive ||
            (s && l.lastValidationResult?.success === !1)) &&
            ((m[e.name] = o), (p = !0));
    }
    p && s.H2(n, m);
}
function O(e) {
    let t = x.n$(e);
    if (null == t) return { command: null, commandText: null };
    let [n] = t,
        l = n.children[0];
    return I.l5.isText(l) ? { command: n.command, commandText: l.text } : { command: n.command, commandText: null };
}
function M(e, t) {
    let n = x.O7(e)[0];
    t();
    let l = I.ZF.toPoint(e.selection);
    if (null == l || n === x.O7(e)[0]) return;
    let { command: i, commandText: s } = O(e);
    !(null == i || null == s || s.endsWith(" ")) &&
        I.Kh.equals(l, { path: y.fP, offset: i.displayName.length + 1 }) &&
        E.b.insertText(e, " ");
}
function L(e, t, n) {
    let l = e.activeCommand?.options?.find((e) => e.name === n),
        s = e.initialValues[n];
    if (null == l || null == s) return null;
    if (null != l.choices) return l.choices.find((e) => e.value === s.value)?.displayName;
    let r = s.value?.toString();
    return l.type === i.n4.CHANNEL || (l.type === i.n4.MENTIONABLE && null != f.A.getChannel(r))
        ? `<#${r}>	`
        : l.type === i.n4.USER || (l.type === i.n4.MENTIONABLE && null != g.default.getUser(r))
          ? `<@${r}>`
          : l.type === i.n4.ROLE || (l.type === i.n4.MENTIONABLE && null != p.A.getRole(t.guild_id, r ?? v.dJq))
            ? `<@&${r}>`
            : r;
}
