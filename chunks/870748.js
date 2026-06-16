"use strict";
n.d(t, { A: () => v, t: () => R }), n(321073), n(667532);
var i = n(485845),
    r = n(155718),
    s = n(721768),
    a = n(459016),
    o = n(842209),
    l = n(861382),
    u = n(392054),
    c = n(168186),
    d = n(203779),
    _ = n(664929),
    h = n(734057),
    f = n(317525),
    p = n(287809),
    E = n(317681),
    m = n(186306),
    g = n(323350),
    A = n(35277),
    I = n(820066),
    T = n(551483),
    S = n(652215);
n(827669);
let y = new Set(["applicationCommandOption"]),
    C = new Set([r.n4.ATTACHMENT]),
    N = new Set(["line", "applicationCommand"]);
function v(e, t, n, d) {
    let {
        insertData: h,
        isInline: f,
        isVoid: p,
        onChange: S,
        deleteBackward: v,
        deleteForward: M,
        deleteFragment: P,
    } = e;
    (e.insertData = (n) => {
        if (null != t && I.VW.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
            let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
                { commandKey: i, interactionOptions: r } = (0, c.Ez)(e),
                { application: l, command: d } = o.EW({ channel: t, type: "channel" }, i);
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
        return h(n);
    }),
        (e.isInline = (e) => !!y.has(e.type) || f(e)),
        (e.isVoid = (e) => !!("applicationCommandOption" === e.type && C.has(e.optionType)) || p(e)),
        (e.deleteBackward = (t) => {
            L(e, () => v(t));
        }),
        (e.deleteForward = (t) => {
            L(e, () => M(t));
        }),
        (e.deleteFragment = (t) => {
            L(e, () => P(t));
        });
    let x = null,
        k = null,
        U = null,
        G = null,
        F = null;
    return (
        (e.onChange = () => {
            if (null != t) {
                let a = l.A.getState(t.id),
                    c = o.j8({ channel: t, type: "channel" });
                if (
                    I.VW.richValue(e) !== x ||
                    !I.Ot.equals(e.selection, k) ||
                    a.activeCommand !== U ||
                    null == F ||
                    c.some((e, t) => F[t] !== e)
                ) {
                    let l = m.o.withMergedEntry(e, () =>
                        (function (e) {
                            let {
                                    editor: t,
                                    storeCommandState: n,
                                    channel: a,
                                    canUseCommands: l,
                                    canOnlyUseTextCommands: c,
                                    commandChanged: d,
                                    previousOptionValues: h,
                                } = e,
                                { command: f, commandText: p } = D(t),
                                m = n.activeCommand;
                            if (
                                (!l && m?.integration_types?.includes(i.b.GUILD_INSTALL)) ||
                                (c && m?.inputType !== u.y$.BUILT_IN_TEXT && m?.inputType !== u.y$.BUILT_IN_INTEGRATION)
                            )
                                return null != f && R(t, a.id, m, !0), null;
                            if (null != f) {
                                if (I.VW.isEditorEmpty(t) || null == m) return R(t, a.id, m, !1), null;
                                let e = `/${f.displayName}`;
                                if (
                                    null == p ||
                                    !p.startsWith(e) ||
                                    (0 === E.O7(t).length && (p.length < e.length + 1 || " " !== p[e.length]))
                                )
                                    return R(t, a.id, m, !0), null;
                            } else {
                                if (null != m && d) {
                                    let e = (function (e, t, n) {
                                            let i,
                                                { initialValues: r, activeCommand: s } = n;
                                            if (null == s) return null;
                                            let a = (s.options?.length ?? 0) > 0 ? E.pY(e, s) : null,
                                                o = (0, g.WO)(I.VW.richValue(e), {
                                                    mode: "raw",
                                                    range: {
                                                        anchor: I.VW.start(e, []),
                                                        focus: a?.[0]?.keyRange.anchor ?? I.VW.end(e, []),
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
                                                        let r = w(n, t, i.name) ?? i.text,
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
                                                        l.length > 0 && !C.has(i.type)
                                                            ? ((e = l), (l = ""))
                                                            : (e = (r = w(n, t, i.name)) ?? "");
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
                                            I.VW.withoutNormalizing(e, () => {
                                                for (let [, t] of (A.b.insertNodes(e, [p], { at: T.Xg }),
                                                I.VW.blocks(e).reverse()))
                                                    I.PW.isAfter(t, T.Xg) && A.b.removeNodes(e, { at: t, voids: !0 });
                                            });
                                            let m = null;
                                            return (
                                                null != h
                                                    ? (A.b.selectCommandOption(e, h.optionName), (m = h.optionName))
                                                    : null != f
                                                      ? (A.b.selectCommandOption(e, f.optionName, !1),
                                                        (m = f.optionName))
                                                      : A.b.resetSelectionToEditorEnd(e),
                                                null == f && O(e, s),
                                                m
                                            );
                                        })(t, a, n),
                                        i = E.SQ(t, m, a.id);
                                    return (
                                        b({
                                            guildId: a.guild_id,
                                            channelId: a.id,
                                            command: m,
                                            activeOption: e,
                                            currentOptionValues: i,
                                            previousOptionValues: null,
                                            validateAll: !0,
                                            allowEmpty: !0,
                                        }),
                                        { commandId: m.id, optionValues: i }
                                    );
                                }
                                if (null != m && !d)
                                    return s.Gf({ channelId: a.id, command: null, section: null }), null;
                                let e = I.VW.richValue(t)[0],
                                    i = e.children[0];
                                if (N.has(e.type) && I.l5.isText(i)) {
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
                            if (null != m && null != f) {
                                !(function (e, t) {
                                    if (null == t.options || 0 === t.options.length) return !1;
                                    let n = E.pY(e, t);
                                    return (
                                        0 !== n.length &&
                                        (I.VW.withoutNormalizing(e, () => {
                                            for (let t = n.length - 1; t >= 0; t--) {
                                                let i = n[t];
                                                A.b.textToInline(
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
                                            let t = I.VW.getFirstText(e);
                                            if (null == t) return !1;
                                            let i = t.text.trim();
                                            t.text !== i &&
                                                A.b.textToText(e, i, {
                                                    anchor: { path: T.fP, offset: 0 },
                                                    focus: { path: T.fP, offset: t.text.length },
                                                });
                                        }),
                                        !0)
                                    );
                                })(t, m) && O(t, m);
                                let e = E.SQ(t, m, a.id),
                                    n = I.VW.above(t, {
                                        match: (e) => I.VW.isInline(t, e) && "applicationCommandOption" === e.type,
                                        mode: "lowest",
                                    }),
                                    i = n?.[0].optionName ?? null;
                                return (
                                    b({
                                        guildId: a.guild_id,
                                        channelId: a.id,
                                        command: m,
                                        activeOption: i,
                                        currentOptionValues: e,
                                        previousOptionValues: h,
                                        validateAll: !1,
                                        allowEmpty: !1,
                                    }),
                                    { commandId: f.id, optionValues: e }
                                );
                            }
                            return null;
                        })({
                            editor: e,
                            storeCommandState: a,
                            channel: t,
                            canUseCommands: n,
                            canOnlyUseTextCommands: d,
                            commandChanged: a.activeCommand?.id !== U?.id,
                            previousOptionValues: G,
                        }),
                    );
                    if (null != l) {
                        let t = m.o.currentEntry(e);
                        null != t && (t.commandId = l.commandId), (G = l.optionValues);
                    } else G = null;
                    (x = I.VW.richValue(e)), (k = e.selection), (U = a.activeCommand), (F = c);
                }
            }
            S();
        }),
        e
    );
}
function R(e, t, n, i) {
    let [r] = I.VW.blocks(e)[0],
        a = (i ? (0, g.IQ)(r, { mode: "plain" }).trimEnd() : "")
            .split("\n")
            .map((e) => ({ type: "line", children: [{ text: e }] })),
        o = [a.length - 1];
    for (let [, t] of (A.b.insertNodes(e, a, { at: T.Xg }), I.VW.blocks(e).reverse()))
        I.PW.isAfter(t, o) && A.b.removeNodes(e, { at: t, voids: !0 });
    null != n && s.Gf({ channelId: t, command: null, section: null });
}
function O(e, t) {
    if (
        null == t.options ||
        1 !== t.options.length ||
        !0 === t.options[0].required ||
        C.has(t.options[0].type) ||
        E.O7(e).length > 0 ||
        null == E.n$(e)
    )
        return !1;
    let n = I.VW.getFirstText(e);
    if (null == n) return !1;
    let i = t.options[0],
        r = { path: T.fP, offset: t.displayName.length + 2 },
        s = { path: T.fP, offset: n.text.length };
    return (
        !(!n.text.startsWith(`/${t.displayName} `.toLocaleLowerCase()) || I.Kh.equals(r, s)) &&
        (A.b.textToInline(
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
function b(e) {
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
function D(e) {
    let t = E.n$(e);
    if (null == t) return { command: null, commandText: null };
    let [n] = t,
        i = n.children[0];
    return I.l5.isText(i) ? { command: n.command, commandText: i.text } : { command: n.command, commandText: null };
}
function L(e, t) {
    let n = E.O7(e)[0];
    t();
    let i = I.ZF.toPoint(e.selection);
    if (null == i || n === E.O7(e)[0]) return;
    let { command: r, commandText: s } = D(e);
    !(null == r || null == s || s.endsWith(" ")) &&
        I.Kh.equals(i, { path: T.fP, offset: r.displayName.length + 1 }) &&
        A.b.insertText(e, " ");
}
function w(e, t, n) {
    let i = e.activeCommand?.options?.find((e) => e.name === n),
        s = e.initialValues[n];
    if (null == i || null == s) return null;
    if (null != i.choices) return i.choices.find((e) => e.value === s.value)?.displayName;
    let a = s.value?.toString();
    return i.type === r.n4.CHANNEL || (i.type === r.n4.MENTIONABLE && null != h.A.getChannel(a))
        ? `<#${a}>	`
        : i.type === r.n4.USER || (i.type === r.n4.MENTIONABLE && null != p.default.getUser(a))
          ? `<@${a}>`
          : i.type === r.n4.ROLE || (i.type === r.n4.MENTIONABLE && null != f.A.getRole(t.guild_id, a ?? S.dJq))
            ? `<@&${a}>`
            : a;
}
