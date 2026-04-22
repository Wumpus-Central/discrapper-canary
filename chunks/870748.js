"use strict";
n.d(t, { A: () => b, t: () => N }), n(321073), n(667532);
var i = n(485845),
    l = n(155718),
    s = n(721768),
    r = n(258363),
    a = n(842209),
    o = n(861382),
    c = n(392054),
    u = n(168186),
    d = n(978561),
    h = n(664929),
    m = n(734057),
    p = n(317525),
    f = n(287809),
    g = n(317681),
    _ = n(186306),
    x = n(323350),
    A = n(35277),
    C = n(711371),
    E = n(551483),
    I = n(652215);
n(827669);
let v = new Set(["applicationCommandOption"]),
    y = new Set([l.n4.ATTACHMENT]),
    S = new Set(["line", "applicationCommand"]);
function b(e, t, n, d) {
    let {
        insertData: m,
        isInline: p,
        isVoid: f,
        onChange: I,
        deleteBackward: b,
        deleteForward: M,
        deleteFragment: k,
    } = e;
    (e.insertData = (n) => {
        if (null != t && C.VW.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
            let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
                { commandKey: i, interactionOptions: l } = (0, u.Ez)(e),
                { application: o, command: d } = a.EW({ channel: t, type: "channel" }, i);
            if (null != d) {
                let e =
                    null != o
                        ? {
                              type: c.Hf.APPLICATION,
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
                        location: c.Oh.PASTE,
                        initialValues: (0, r.getInitialValuesFromInteractionOptions)(d, l ?? []),
                    }),
                    null
                );
            }
        }
        return m(n);
    }),
        (e.isInline = (e) => !!v.has(e.type) || p(e)),
        (e.isVoid = (e) => !!("applicationCommandOption" === e.type && y.has(e.optionType)) || f(e)),
        (e.deleteBackward = (t) => {
            w(e, () => b(t));
        }),
        (e.deleteForward = (t) => {
            w(e, () => M(t));
        }),
        (e.deleteFragment = (t) => {
            w(e, () => k(t));
        });
    let O = null,
        P = null,
        D = null,
        U = null,
        V = null;
    return (
        (e.onChange = () => {
            if (null != t) {
                let r = o.A.getState(t.id),
                    u = a.j8({ channel: t, type: "channel" });
                if (
                    C.VW.richValue(e) !== O ||
                    !C.Ot.equals(e.selection, P) ||
                    r.activeCommand !== D ||
                    null == V ||
                    u.some((e, t) => V[t] !== e)
                ) {
                    let o = _.o.withMergedEntry(e, () =>
                        (function (e) {
                            let {
                                    editor: t,
                                    storeCommandState: n,
                                    channel: r,
                                    canUseCommands: o,
                                    canOnlyUseTextCommands: u,
                                    commandChanged: d,
                                    previousOptionValues: m,
                                } = e,
                                { command: p, commandText: f } = R(t),
                                _ = n.activeCommand;
                            if (
                                (!o && _?.integration_types?.includes(i.b.GUILD_INSTALL)) ||
                                (u && _?.inputType !== c.y$.BUILT_IN_TEXT && _?.inputType !== c.y$.BUILT_IN_INTEGRATION)
                            )
                                return null != p && N(t, r.id, _, !0), null;
                            if (null != p) {
                                if (C.VW.isEditorEmpty(t) || null == _) return N(t, r.id, _, !1), null;
                                let e = `/${p.displayName}`;
                                if (
                                    null == f ||
                                    !f.startsWith(e) ||
                                    (0 === g.O7(t).length && (f.length < e.length + 1 || " " !== f[e.length]))
                                )
                                    return N(t, r.id, _, !0), null;
                            } else {
                                if (null != _ && d) {
                                    let e = (function (e, t, n) {
                                            let i,
                                                { initialValues: l, activeCommand: s } = n;
                                            if (null == s) return null;
                                            let r = (s.options?.length ?? 0) > 0 ? g.pY(e, s) : null,
                                                a = (0, x.WO)(C.VW.richValue(e), {
                                                    mode: "raw",
                                                    range: {
                                                        anchor: C.VW.start(e, []),
                                                        focus: r?.[0]?.keyRange.anchor ?? C.VW.end(e, []),
                                                    },
                                                }),
                                                o = "",
                                                c = a.toLocaleLowerCase(),
                                                u = `/${s.displayName} `.toLocaleLowerCase(),
                                                d = `/${s.untranslatedName} `.toLocaleLowerCase();
                                            c.startsWith(u)
                                                ? (o = a.substring(u.length).trim())
                                                : c.startsWith(d) && (o = a.substring(d.length).trim());
                                            let h = [],
                                                m = null,
                                                p = null;
                                            if (null != s.options) {
                                                let e = new Set();
                                                if (null != r)
                                                    for (let i of r) {
                                                        e.add(i.name);
                                                        let l = L(n, t, i.name) ?? i.text,
                                                            s = {
                                                                type: "applicationCommandOption",
                                                                optionName: i.name,
                                                                optionDisplayName: i.displayName,
                                                                optionType: i.type,
                                                                children: [{ text: l }],
                                                            };
                                                        h.push(s), 0 === i.text.length && null == m && (m = s);
                                                    }
                                                for (let i of s.options)
                                                    if (!e.has(i.name) && (i.required || null != l[i.name])) {
                                                        let e, l;
                                                        o.length > 0 && !y.has(i.type)
                                                            ? ((e = o), (o = ""))
                                                            : (e = (l = L(n, t, i.name)) ?? "");
                                                        let s = {
                                                            type: "applicationCommandOption",
                                                            optionName: i.name,
                                                            optionDisplayName: i.displayName,
                                                            optionType: i.type,
                                                            children: [{ text: e }],
                                                        };
                                                        h.push(s),
                                                            0 === e.length && null == m && (m = s),
                                                            null == l && (p = s);
                                                    }
                                            }
                                            (i =
                                                o.length > 0
                                                    ? `/${s.displayName} ${o.replace(/\r|\n/g, " ")}`
                                                    : 0 === h.length
                                                      ? `/${s.displayName} `
                                                      : `/${s.displayName}`),
                                                h.unshift({ text: i });
                                            let f = {
                                                type: "applicationCommand",
                                                children: h,
                                                command: {
                                                    id: s.id,
                                                    name: s.untranslatedName,
                                                    displayName: s.displayName,
                                                },
                                            };
                                            C.VW.withoutNormalizing(e, () => {
                                                for (let [, t] of (A.b.insertNodes(e, [f], { at: E.Xg }),
                                                C.VW.blocks(e).reverse()))
                                                    C.PW.isAfter(t, E.Xg) && A.b.removeNodes(e, { at: t, voids: !0 });
                                            });
                                            let _ = null;
                                            return (
                                                null != m
                                                    ? (A.b.selectCommandOption(e, m.optionName), (_ = m.optionName))
                                                    : null != p
                                                      ? (A.b.selectCommandOption(e, p.optionName, !1),
                                                        (_ = p.optionName))
                                                      : A.b.resetSelectionToEditorEnd(e),
                                                null == p && T(e, s),
                                                _
                                            );
                                        })(t, r, n),
                                        i = g.SQ(t, _, r.id);
                                    return (
                                        j({
                                            guildId: r.guild_id,
                                            channelId: r.id,
                                            command: _,
                                            activeOption: e,
                                            currentOptionValues: i,
                                            previousOptionValues: null,
                                            validateAll: !0,
                                            allowEmpty: !0,
                                        }),
                                        { commandId: _.id, optionValues: i }
                                    );
                                }
                                if (null != _ && !d)
                                    return s.Gf({ channelId: r.id, command: null, section: null }), null;
                                let e = C.VW.richValue(t)[0],
                                    i = e.children[0];
                                if (S.has(e.type) && C.l5.isText(i)) {
                                    let e = (function (e, t) {
                                        if (!e.startsWith("/")) return null;
                                        let n = (0, h.Yn)(t, e.substring(1));
                                        if (!n.hasSpaceTerminator) return null;
                                        let { commands: i, sections: s } = a.v7(
                                            { channel: t, type: "channel" },
                                            l.kc.CHAT,
                                            n.text,
                                        );
                                        if (0 === i.length) return null;
                                        let r = n.text.trim(),
                                            o = r + " ",
                                            u = i.filter(
                                                (e) =>
                                                    e.inputType !== c.y$.PLACEHOLDER &&
                                                    (e.displayName === r || e.displayName.startsWith(o)),
                                            );
                                        if (1 === u.length && u[0].displayName === r) {
                                            let e = u[0],
                                                t = s.find((t) => t.application?.id === e.applicationId);
                                            return { command: e, section: t };
                                        }
                                        return null;
                                    })(i.text, r);
                                    if (null != e)
                                        return s.Gf({ channelId: r.id, command: e.command, section: e.section }), null;
                                }
                            }
                            if (null != _ && null != p) {
                                !(function (e, t) {
                                    if (null == t.options || 0 === t.options.length) return !1;
                                    let n = g.pY(e, t);
                                    return (
                                        0 !== n.length &&
                                        (C.VW.withoutNormalizing(e, () => {
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
                                            let t = C.VW.getFirstText(e);
                                            if (null == t) return !1;
                                            let i = t.text.trim();
                                            t.text !== i &&
                                                A.b.textToText(e, i, {
                                                    anchor: { path: E.fP, offset: 0 },
                                                    focus: { path: E.fP, offset: t.text.length },
                                                });
                                        }),
                                        !0)
                                    );
                                })(t, _) && T(t, _);
                                let e = g.SQ(t, _, r.id),
                                    n = C.VW.above(t, {
                                        match: (e) => C.VW.isInline(t, e) && "applicationCommandOption" === e.type,
                                        mode: "lowest",
                                    }),
                                    i = n?.[0].optionName ?? null;
                                return (
                                    j({
                                        guildId: r.guild_id,
                                        channelId: r.id,
                                        command: _,
                                        activeOption: i,
                                        currentOptionValues: e,
                                        previousOptionValues: m,
                                        validateAll: !1,
                                        allowEmpty: !1,
                                    }),
                                    { commandId: p.id, optionValues: e }
                                );
                            }
                            return null;
                        })({
                            editor: e,
                            storeCommandState: r,
                            channel: t,
                            canUseCommands: n,
                            canOnlyUseTextCommands: d,
                            commandChanged: r.activeCommand?.id !== D?.id,
                            previousOptionValues: U,
                        }),
                    );
                    if (null != o) {
                        let t = _.o.currentEntry(e);
                        null != t && (t.commandId = o.commandId), (U = o.optionValues);
                    } else U = null;
                    (O = C.VW.richValue(e)), (P = e.selection), (D = r.activeCommand), (V = u);
                }
            }
            I();
        }),
        e
    );
}
function N(e, t, n, i) {
    let [l] = C.VW.blocks(e)[0],
        r = (i ? (0, x.IQ)(l, { mode: "plain" }).trimEnd() : "")
            .split("\n")
            .map((e) => ({ type: "line", children: [{ text: e }] })),
        a = [r.length - 1];
    for (let [, t] of (A.b.insertNodes(e, r, { at: E.Xg }), C.VW.blocks(e).reverse()))
        C.PW.isAfter(t, a) && A.b.removeNodes(e, { at: t, voids: !0 });
    null != n && s.Gf({ channelId: t, command: null, section: null });
}
function T(e, t) {
    if (
        null == t.options ||
        1 !== t.options.length ||
        !0 === t.options[0].required ||
        y.has(t.options[0].type) ||
        g.O7(e).length > 0 ||
        null == g.n$(e)
    )
        return !1;
    let n = C.VW.getFirstText(e);
    if (null == n) return !1;
    let i = t.options[0],
        l = { path: E.fP, offset: t.displayName.length + 2 },
        s = { path: E.fP, offset: n.text.length };
    return (
        !(!n.text.startsWith(`/${t.displayName} `.toLocaleLowerCase()) || C.Kh.equals(l, s)) &&
        (A.b.textToInline(
            e,
            {
                type: "applicationCommandOption",
                optionName: i.name,
                optionDisplayName: i.displayName,
                optionType: i.type,
                children: [{ text: n.text.substring(t.displayName.length + 2) }],
            },
            { anchor: l, focus: s },
        ),
        !0)
    );
}
function j(e) {
    let {
        guildId: t,
        channelId: n,
        command: i,
        activeOption: l,
        currentOptionValues: r,
        previousOptionValues: a,
        validateAll: c,
        allowEmpty: u,
    } = e;
    if (null == i.options) return !1;
    let h = c ? null : o.A.getActiveOptionName(n),
        m = {},
        p = o.A.getOptionStates(n),
        f = !1;
    for (let e of i.options) {
        let i = p[e.name],
            s =
                c ||
                (e.name === h && h !== l) ||
                (i?.lastValidationResult?.success === !1 && r?.[e.name] !== a?.[e.name]),
            o = {
                hasValue: null != r && e.name in r,
                isActive: e.name === l,
                lastValidationResult: s
                    ? (0, d.J)({
                          option: e,
                          content: r?.[e.name] ?? null,
                          guildId: t,
                          channelId: n,
                          allowEmptyValues: u,
                      })
                    : i?.lastValidationResult,
            };
        (null == i ||
            i.hasValue !== o.hasValue ||
            i.isActive !== o.isActive ||
            (s && i.lastValidationResult?.success === !1)) &&
            ((m[e.name] = o), (f = !0));
    }
    f && s.H2(n, m);
}
function R(e) {
    let t = g.n$(e);
    if (null == t) return { command: null, commandText: null };
    let [n] = t,
        i = n.children[0];
    return C.l5.isText(i) ? { command: n.command, commandText: i.text } : { command: n.command, commandText: null };
}
function w(e, t) {
    let n = g.O7(e)[0];
    t();
    let i = C.ZF.toPoint(e.selection);
    if (null == i || n === g.O7(e)[0]) return;
    let { command: l, commandText: s } = R(e);
    !(null == l || null == s || s.endsWith(" ")) &&
        C.Kh.equals(i, { path: E.fP, offset: l.displayName.length + 1 }) &&
        A.b.insertText(e, " ");
}
function L(e, t, n) {
    let i = e.activeCommand?.options?.find((e) => e.name === n),
        s = e.initialValues[n];
    if (null == i || null == s) return null;
    if (null != i.choices) return i.choices.find((e) => e.value === s.value)?.displayName;
    let r = s.value?.toString();
    return i.type === l.n4.CHANNEL || (i.type === l.n4.MENTIONABLE && null != m.A.getChannel(r))
        ? `<#${r}>	`
        : i.type === l.n4.USER || (i.type === l.n4.MENTIONABLE && null != f.default.getUser(r))
          ? `<@${r}>`
          : i.type === l.n4.ROLE || (i.type === l.n4.MENTIONABLE && null != p.A.getRole(t.guild_id, r ?? I.dJq))
            ? `<@&${r}>`
            : r;
}
