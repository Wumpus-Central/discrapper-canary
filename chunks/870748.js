"use strict";
n.d(t, { A: () => C, t: () => O }), n(321073), n(667532);
var r = n(485845),
    i = n(155718),
    s = n(721768),
    a = n(258363),
    o = n(842209),
    l = n(861382),
    u = n(392054),
    c = n(168186),
    d = n(978561),
    _ = n(664929),
    f = n(734057),
    p = n(317525),
    h = n(287809),
    E = n(317681),
    m = n(186306),
    g = n(323350),
    A = n(35277),
    I = n(711371),
    T = n(551483),
    S = n(652215);
n(827669);
let y = new Set(["applicationCommandOption"]),
    N = new Set([i.n4.ATTACHMENT]),
    v = new Set(["line", "applicationCommand"]);
function C(e, t, n, d) {
    let {
        insertData: f,
        isInline: p,
        isVoid: h,
        onChange: S,
        deleteBackward: C,
        deleteForward: M,
        deleteFragment: P,
    } = e;
    (e.insertData = (n) => {
        if (null != t && I.VW.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
            let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
                { commandKey: r, interactionOptions: i } = (0, c.Ez)(e),
                { application: l, command: d } = o.EW({ channel: t, type: "channel" }, r);
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
                        initialValues: (0, a.getInitialValuesFromInteractionOptions)(d, i ?? []),
                    }),
                    null
                );
            }
        }
        return f(n);
    }),
        (e.isInline = (e) => !!y.has(e.type) || p(e)),
        (e.isVoid = (e) => !!("applicationCommandOption" === e.type && N.has(e.optionType)) || h(e)),
        (e.deleteBackward = (t) => {
            L(e, () => C(t));
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
                                    previousOptionValues: f,
                                } = e,
                                { command: p, commandText: h } = D(t),
                                m = n.activeCommand;
                            if (
                                (!l && m?.integration_types?.includes(r.b.GUILD_INSTALL)) ||
                                (c && m?.inputType !== u.y$.BUILT_IN_TEXT && m?.inputType !== u.y$.BUILT_IN_INTEGRATION)
                            )
                                return null != p && O(t, a.id, m, !0), null;
                            if (null != p) {
                                if (I.VW.isEditorEmpty(t) || null == m) return O(t, a.id, m, !1), null;
                                let e = `/${p.displayName}`;
                                if (
                                    null == h ||
                                    !h.startsWith(e) ||
                                    (0 === E.O7(t).length && (h.length < e.length + 1 || " " !== h[e.length]))
                                )
                                    return O(t, a.id, m, !0), null;
                            } else {
                                if (null != m && d) {
                                    let e = (function (e, t, n) {
                                            let r,
                                                { initialValues: i, activeCommand: s } = n;
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
                                                f = null,
                                                p = null;
                                            if (null != s.options) {
                                                let e = new Set();
                                                if (null != a)
                                                    for (let r of a) {
                                                        e.add(r.name);
                                                        let i = w(n, t, r.name) ?? r.text,
                                                            s = {
                                                                type: "applicationCommandOption",
                                                                optionName: r.name,
                                                                optionDisplayName: r.displayName,
                                                                optionType: r.type,
                                                                children: [{ text: i }],
                                                            };
                                                        _.push(s), 0 === r.text.length && null == f && (f = s);
                                                    }
                                                for (let r of s.options)
                                                    if (!e.has(r.name) && (r.required || null != i[r.name])) {
                                                        let e, i;
                                                        l.length > 0 && !N.has(r.type)
                                                            ? ((e = l), (l = ""))
                                                            : (e = (i = w(n, t, r.name)) ?? "");
                                                        let s = {
                                                            type: "applicationCommandOption",
                                                            optionName: r.name,
                                                            optionDisplayName: r.displayName,
                                                            optionType: r.type,
                                                            children: [{ text: e }],
                                                        };
                                                        _.push(s),
                                                            0 === e.length && null == f && (f = s),
                                                            null == i && (p = s);
                                                    }
                                            }
                                            (r =
                                                l.length > 0
                                                    ? `/${s.displayName} ${l.replace(/\r|\n/g, " ")}`
                                                    : 0 === _.length
                                                      ? `/${s.displayName} `
                                                      : `/${s.displayName}`),
                                                _.unshift({ text: r });
                                            let h = {
                                                type: "applicationCommand",
                                                children: _,
                                                command: {
                                                    id: s.id,
                                                    name: s.untranslatedName,
                                                    displayName: s.displayName,
                                                },
                                            };
                                            I.VW.withoutNormalizing(e, () => {
                                                for (let [, t] of (A.b.insertNodes(e, [h], { at: T.Xg }),
                                                I.VW.blocks(e).reverse()))
                                                    I.PW.isAfter(t, T.Xg) && A.b.removeNodes(e, { at: t, voids: !0 });
                                            });
                                            let m = null;
                                            return (
                                                null != f
                                                    ? (A.b.selectCommandOption(e, f.optionName), (m = f.optionName))
                                                    : null != p
                                                      ? (A.b.selectCommandOption(e, p.optionName, !1),
                                                        (m = p.optionName))
                                                      : A.b.resetSelectionToEditorEnd(e),
                                                null == p && R(e, s),
                                                m
                                            );
                                        })(t, a, n),
                                        r = E.SQ(t, m, a.id);
                                    return (
                                        b({
                                            guildId: a.guild_id,
                                            channelId: a.id,
                                            command: m,
                                            activeOption: e,
                                            currentOptionValues: r,
                                            previousOptionValues: null,
                                            validateAll: !0,
                                            allowEmpty: !0,
                                        }),
                                        { commandId: m.id, optionValues: r }
                                    );
                                }
                                if (null != m && !d)
                                    return s.Gf({ channelId: a.id, command: null, section: null }), null;
                                let e = I.VW.richValue(t)[0],
                                    r = e.children[0];
                                if (v.has(e.type) && I.l5.isText(r)) {
                                    let e = (function (e, t) {
                                        if (!e.startsWith("/")) return null;
                                        let n = (0, _.Yn)(t, e.substring(1));
                                        if (!n.hasSpaceTerminator) return null;
                                        let { commands: r, sections: s } = o.v7(
                                            { channel: t, type: "channel" },
                                            i.kc.CHAT,
                                            n.text,
                                        );
                                        if (0 === r.length) return null;
                                        let a = n.text.trim(),
                                            l = a + " ",
                                            c = r.filter(
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
                                    })(r.text, a);
                                    if (null != e)
                                        return s.Gf({ channelId: a.id, command: e.command, section: e.section }), null;
                                }
                            }
                            if (null != m && null != p) {
                                !(function (e, t) {
                                    if (null == t.options || 0 === t.options.length) return !1;
                                    let n = E.pY(e, t);
                                    return (
                                        0 !== n.length &&
                                        (I.VW.withoutNormalizing(e, () => {
                                            for (let t = n.length - 1; t >= 0; t--) {
                                                let r = n[t];
                                                A.b.textToInline(
                                                    e,
                                                    {
                                                        type: "applicationCommandOption",
                                                        optionName: r.name,
                                                        optionDisplayName: r.displayName,
                                                        optionType: r.type,
                                                        children: [{ text: r.text }],
                                                    },
                                                    { anchor: r.keyRange.anchor, focus: r.valueRange.focus },
                                                );
                                            }
                                            let t = I.VW.getFirstText(e);
                                            if (null == t) return !1;
                                            let r = t.text.trim();
                                            t.text !== r &&
                                                A.b.textToText(e, r, {
                                                    anchor: { path: T.fP, offset: 0 },
                                                    focus: { path: T.fP, offset: t.text.length },
                                                });
                                        }),
                                        !0)
                                    );
                                })(t, m) && R(t, m);
                                let e = E.SQ(t, m, a.id),
                                    n = I.VW.above(t, {
                                        match: (e) => I.VW.isInline(t, e) && "applicationCommandOption" === e.type,
                                        mode: "lowest",
                                    }),
                                    r = n?.[0].optionName ?? null;
                                return (
                                    b({
                                        guildId: a.guild_id,
                                        channelId: a.id,
                                        command: m,
                                        activeOption: r,
                                        currentOptionValues: e,
                                        previousOptionValues: f,
                                        validateAll: !1,
                                        allowEmpty: !1,
                                    }),
                                    { commandId: p.id, optionValues: e }
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
function O(e, t, n, r) {
    let [i] = I.VW.blocks(e)[0],
        a = (r ? (0, g.IQ)(i, { mode: "plain" }).trimEnd() : "")
            .split("\n")
            .map((e) => ({ type: "line", children: [{ text: e }] })),
        o = [a.length - 1];
    for (let [, t] of (A.b.insertNodes(e, a, { at: T.Xg }), I.VW.blocks(e).reverse()))
        I.PW.isAfter(t, o) && A.b.removeNodes(e, { at: t, voids: !0 });
    null != n && s.Gf({ channelId: t, command: null, section: null });
}
function R(e, t) {
    if (
        null == t.options ||
        1 !== t.options.length ||
        !0 === t.options[0].required ||
        N.has(t.options[0].type) ||
        E.O7(e).length > 0 ||
        null == E.n$(e)
    )
        return !1;
    let n = I.VW.getFirstText(e);
    if (null == n) return !1;
    let r = t.options[0],
        i = { path: T.fP, offset: t.displayName.length + 2 },
        s = { path: T.fP, offset: n.text.length };
    return (
        !(!n.text.startsWith(`/${t.displayName} `.toLocaleLowerCase()) || I.Kh.equals(i, s)) &&
        (A.b.textToInline(
            e,
            {
                type: "applicationCommandOption",
                optionName: r.name,
                optionDisplayName: r.displayName,
                optionType: r.type,
                children: [{ text: n.text.substring(t.displayName.length + 2) }],
            },
            { anchor: i, focus: s },
        ),
        !0)
    );
}
function b(e) {
    let {
        guildId: t,
        channelId: n,
        command: r,
        activeOption: i,
        currentOptionValues: a,
        previousOptionValues: o,
        validateAll: u,
        allowEmpty: c,
    } = e;
    if (null == r.options) return !1;
    let _ = u ? null : l.A.getActiveOptionName(n),
        f = {},
        p = l.A.getOptionStates(n),
        h = !1;
    for (let e of r.options) {
        let r = p[e.name],
            s =
                u ||
                (e.name === _ && _ !== i) ||
                (r?.lastValidationResult?.success === !1 && a?.[e.name] !== o?.[e.name]),
            l = {
                hasValue: null != a && e.name in a,
                isActive: e.name === i,
                lastValidationResult: s
                    ? (0, d.J)({
                          option: e,
                          content: a?.[e.name] ?? null,
                          guildId: t,
                          channelId: n,
                          allowEmptyValues: c,
                      })
                    : r?.lastValidationResult,
            };
        (null == r ||
            r.hasValue !== l.hasValue ||
            r.isActive !== l.isActive ||
            (s && r.lastValidationResult?.success === !1)) &&
            ((f[e.name] = l), (h = !0));
    }
    h && s.H2(n, f);
}
function D(e) {
    let t = E.n$(e);
    if (null == t) return { command: null, commandText: null };
    let [n] = t,
        r = n.children[0];
    return I.l5.isText(r) ? { command: n.command, commandText: r.text } : { command: n.command, commandText: null };
}
function L(e, t) {
    let n = E.O7(e)[0];
    t();
    let r = I.ZF.toPoint(e.selection);
    if (null == r || n === E.O7(e)[0]) return;
    let { command: i, commandText: s } = D(e);
    !(null == i || null == s || s.endsWith(" ")) &&
        I.Kh.equals(r, { path: T.fP, offset: i.displayName.length + 1 }) &&
        A.b.insertText(e, " ");
}
function w(e, t, n) {
    let r = e.activeCommand?.options?.find((e) => e.name === n),
        s = e.initialValues[n];
    if (null == r || null == s) return null;
    if (null != r.choices) return r.choices.find((e) => e.value === s.value)?.displayName;
    let a = s.value?.toString();
    return r.type === i.n4.CHANNEL || (r.type === i.n4.MENTIONABLE && null != f.A.getChannel(a))
        ? `<#${a}>	`
        : r.type === i.n4.USER || (r.type === i.n4.MENTIONABLE && null != h.default.getUser(a))
          ? `<@${a}>`
          : r.type === i.n4.ROLE || (r.type === i.n4.MENTIONABLE && null != p.A.getRole(t.guild_id, a ?? S.dJq))
            ? `<@&${a}>`
            : a;
}
