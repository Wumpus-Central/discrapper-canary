"use strict";
n.d(t, { A: () => b, t: () => O }), n(321073), n(667532);
var r = n(485845),
    i = n(155718),
    a = n(721768),
    s = n(258363),
    o = n(842209),
    l = n(861382),
    u = n(392054),
    c = n(168186),
    d = n(978561),
    _ = n(664929),
    f = n(734057),
    p = n(317525),
    h = n(287809),
    m = n(317681),
    g = n(186306),
    E = n(323350),
    A = n(35277),
    I = n(711371),
    T = n(551483),
    y = n(652215);
n(827669);
let S = new Set(["applicationCommandOption"]),
    v = new Set([i.n4.ATTACHMENT]),
    C = new Set(["line", "applicationCommand"]);
function b(e, t, n, r) {
    let {
        insertData: i,
        isInline: d,
        isVoid: _,
        onChange: f,
        deleteBackward: p,
        deleteForward: h,
        deleteFragment: m,
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
                    a.Gf({
                        channelId: t.id,
                        command: d,
                        section: e,
                        location: u.Oh.PASTE,
                        initialValues: (0, s.getInitialValuesFromInteractionOptions)(d, i ?? []),
                    }),
                    null
                );
            }
        }
        return i(n);
    }),
        (e.isInline = (e) => !!S.has(e.type) || d(e)),
        (e.isVoid = (e) => !!("applicationCommandOption" === e.type && v.has(e.optionType)) || _(e)),
        (e.deleteBackward = (t) => {
            P(e, () => p(t));
        }),
        (e.deleteForward = (t) => {
            P(e, () => h(t));
        }),
        (e.deleteFragment = (t) => {
            P(e, () => m(t));
        });
    let E = null,
        A = null,
        T = null,
        y = null,
        C = null;
    return (
        (e.onChange = () => {
            if (null != t) {
                let i = l.A.getState(t.id),
                    a = o.j8({ channel: t, type: "channel" });
                if (
                    I.VW.richValue(e) !== E ||
                    !I.Ot.equals(e.selection, A) ||
                    i.activeCommand !== T ||
                    null == C ||
                    a.some((e, t) => C[t] !== e)
                ) {
                    let s = g.o.withMergedEntry(e, () =>
                        N({
                            editor: e,
                            storeCommandState: i,
                            channel: t,
                            canUseCommands: n,
                            canOnlyUseTextCommands: r,
                            commandChanged: i.activeCommand?.id !== T?.id,
                            previousOptionValues: y,
                        }),
                    );
                    if (null != s) {
                        let t = g.o.currentEntry(e);
                        null != t && (t.commandId = s.commandId), (y = s.optionValues);
                    } else y = null;
                    (E = I.VW.richValue(e)), (A = e.selection), (T = i.activeCommand), (C = a);
                }
            }
            f();
        }),
        e
    );
}
function N(e) {
    let {
            editor: t,
            storeCommandState: n,
            channel: i,
            canUseCommands: s,
            canOnlyUseTextCommands: o,
            commandChanged: l,
            previousOptionValues: c,
        } = e,
        { command: d, commandText: _ } = x(t),
        f = n.activeCommand;
    if (
        (!s && f?.integration_types?.includes(r.b.GUILD_INSTALL)) ||
        (o && f?.inputType !== u.y$.BUILT_IN_TEXT && f?.inputType !== u.y$.BUILT_IN_INTEGRATION)
    )
        return null != d && O(t, i.id, f, !0), null;
    if (null != d) {
        if (I.VW.isEditorEmpty(t) || null == f) return O(t, i.id, f, !1), null;
        let e = `/${d.displayName}`;
        if (null == _ || !_.startsWith(e) || (0 === m.O7(t).length && (_.length < e.length + 1 || " " !== _[e.length])))
            return O(t, i.id, f, !0), null;
    } else {
        if (null != f && l) {
            let e = R(t, i, n),
                r = m.SQ(t, f, i.id);
            return (
                w({
                    guildId: i.guild_id,
                    channelId: i.id,
                    command: f,
                    activeOption: e,
                    currentOptionValues: r,
                    previousOptionValues: null,
                    validateAll: !0,
                    allowEmpty: !0,
                }),
                { commandId: f.id, optionValues: r }
            );
        }
        if (null != f && !l) return a.Gf({ channelId: i.id, command: null, section: null }), null;
        let e = I.VW.richValue(t)[0],
            r = e.children[0];
        if (C.has(e.type) && I.l5.isText(r)) {
            let e = M(r.text, i);
            if (null != e) return a.Gf({ channelId: i.id, command: e.command, section: e.section }), null;
        }
    }
    if (null != f && null != d) {
        D(t, f) || L(t, f);
        let e = m.SQ(t, f, i.id),
            n = I.VW.above(t, {
                match: (e) => I.VW.isInline(t, e) && "applicationCommandOption" === e.type,
                mode: "lowest",
            }),
            r = n?.[0].optionName ?? null;
        return (
            w({
                guildId: i.guild_id,
                channelId: i.id,
                command: f,
                activeOption: r,
                currentOptionValues: e,
                previousOptionValues: c,
                validateAll: !1,
                allowEmpty: !1,
            }),
            { commandId: d.id, optionValues: e }
        );
    }
    return null;
}
function R(e, t, n) {
    let r,
        { initialValues: i, activeCommand: a } = n;
    if (null == a) return null;
    let s = (a.options?.length ?? 0) > 0 ? m.pY(e, a) : null,
        o = (0, E.WO)(I.VW.richValue(e), {
            mode: "raw",
            range: { anchor: I.VW.start(e, []), focus: s?.[0]?.keyRange.anchor ?? I.VW.end(e, []) },
        }),
        l = "",
        u = o.toLocaleLowerCase(),
        c = `/${a.displayName} `.toLocaleLowerCase(),
        d = `/${a.untranslatedName} `.toLocaleLowerCase();
    u.startsWith(c) ? (l = o.substring(c.length).trim()) : u.startsWith(d) && (l = o.substring(d.length).trim());
    let _ = [],
        f = null,
        p = null;
    if (null != a.options) {
        let e = new Set();
        if (null != s)
            for (let r of s) {
                e.add(r.name);
                let i = k(n, t, r.name) ?? r.text,
                    a = {
                        type: "applicationCommandOption",
                        optionName: r.name,
                        optionDisplayName: r.displayName,
                        optionType: r.type,
                        children: [{ text: i }],
                    };
                _.push(a), 0 === r.text.length && null == f && (f = a);
            }
        for (let r of a.options)
            if (!e.has(r.name) && (r.required || null != i[r.name])) {
                let e, i;
                l.length > 0 && !v.has(r.type) ? ((e = l), (l = "")) : (e = (i = k(n, t, r.name)) ?? "");
                let a = {
                    type: "applicationCommandOption",
                    optionName: r.name,
                    optionDisplayName: r.displayName,
                    optionType: r.type,
                    children: [{ text: e }],
                };
                _.push(a), 0 === e.length && null == f && (f = a), null == i && (p = a);
            }
    }
    (r =
        l.length > 0
            ? `/${a.displayName} ${l.replace(/\r|\n/g, " ")}`
            : 0 === _.length
              ? `/${a.displayName} `
              : `/${a.displayName}`),
        _.unshift({ text: r });
    let h = {
        type: "applicationCommand",
        children: _,
        command: { id: a.id, name: a.untranslatedName, displayName: a.displayName },
    };
    I.VW.withoutNormalizing(e, () => {
        for (let [, t] of (A.b.insertNodes(e, [h], { at: T.Xg }), I.VW.blocks(e).reverse()))
            I.PW.isAfter(t, T.Xg) && A.b.removeNodes(e, { at: t, voids: !0 });
    });
    let g = null;
    return (
        null != f
            ? (A.b.selectCommandOption(e, f.optionName), (g = f.optionName))
            : null != p
              ? (A.b.selectCommandOption(e, p.optionName, !1), (g = p.optionName))
              : A.b.resetSelectionToEditorEnd(e),
        null == p && L(e, a),
        g
    );
}
function O(e, t, n, r) {
    let [i] = I.VW.blocks(e)[0],
        s = (r ? (0, E.IQ)(i, { mode: "plain" }).trimEnd() : "")
            .split("\n")
            .map((e) => ({ type: "line", children: [{ text: e }] })),
        o = [s.length - 1];
    for (let [, t] of (A.b.insertNodes(e, s, { at: T.Xg }), I.VW.blocks(e).reverse()))
        I.PW.isAfter(t, o) && A.b.removeNodes(e, { at: t, voids: !0 });
    null != n && a.Gf({ channelId: t, command: null, section: null });
}
function D(e, t) {
    if (null == t.options || 0 === t.options.length) return !1;
    let n = m.pY(e, t);
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
}
function L(e, t) {
    if (
        null == t.options ||
        1 !== t.options.length ||
        !0 === t.options[0].required ||
        v.has(t.options[0].type) ||
        m.O7(e).length > 0 ||
        null == m.n$(e)
    )
        return !1;
    let n = I.VW.getFirstText(e);
    if (null == n) return !1;
    let r = t.options[0],
        i = { path: T.fP, offset: t.displayName.length + 2 },
        a = { path: T.fP, offset: n.text.length };
    return (
        !(!n.text.startsWith(`/${t.displayName} `.toLocaleLowerCase()) || I.Kh.equals(i, a)) &&
        (A.b.textToInline(
            e,
            {
                type: "applicationCommandOption",
                optionName: r.name,
                optionDisplayName: r.displayName,
                optionType: r.type,
                children: [{ text: n.text.substring(t.displayName.length + 2) }],
            },
            { anchor: i, focus: a },
        ),
        !0)
    );
}
function w(e) {
    let {
        guildId: t,
        channelId: n,
        command: r,
        activeOption: i,
        currentOptionValues: s,
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
            a =
                u ||
                (e.name === _ && _ !== i) ||
                (r?.lastValidationResult?.success === !1 && s?.[e.name] !== o?.[e.name]),
            l = {
                hasValue: null != s && e.name in s,
                isActive: e.name === i,
                lastValidationResult: a
                    ? (0, d.J)({
                          option: e,
                          content: s?.[e.name] ?? null,
                          guildId: t,
                          channelId: n,
                          allowEmptyValues: c,
                      })
                    : r?.lastValidationResult,
            };
        (null == r ||
            r.hasValue !== l.hasValue ||
            r.isActive !== l.isActive ||
            (a && r.lastValidationResult?.success === !1)) &&
            ((f[e.name] = l), (h = !0));
    }
    h && a.H2(n, f);
}
function x(e) {
    let t = m.n$(e);
    if (null == t) return { command: null, commandText: null };
    let [n] = t,
        r = n.children[0];
    return I.l5.isText(r) ? { command: n.command, commandText: r.text } : { command: n.command, commandText: null };
}
function P(e, t) {
    let n = m.O7(e)[0];
    t();
    let r = I.ZF.toPoint(e.selection);
    if (null == r || n === m.O7(e)[0]) return;
    let { command: i, commandText: a } = x(e);
    !(null == i || null == a || a.endsWith(" ")) &&
        I.Kh.equals(r, { path: T.fP, offset: i.displayName.length + 1 }) &&
        A.b.insertText(e, " ");
}
function M(e, t) {
    if (!e.startsWith("/")) return null;
    let n = (0, _.Yn)(t, e.substring(1));
    if (!n.hasSpaceTerminator) return null;
    let { commands: r, sections: a } = o.v7({ channel: t, type: "channel" }, i.kc.CHAT, n.text);
    if (0 === r.length) return null;
    let s = n.text.trim(),
        l = s + " ",
        c = r.filter((e) => e.inputType !== u.y$.PLACEHOLDER && (e.displayName === s || e.displayName.startsWith(l)));
    if (1 === c.length && c[0].displayName === s) {
        let e = c[0],
            t = a.find((t) => t.application?.id === e.applicationId);
        return { command: e, section: t };
    }
    return null;
}
function k(e, t, n) {
    let r = e.activeCommand?.options?.find((e) => e.name === n),
        a = e.initialValues[n];
    if (null == r || null == a) return null;
    if (null != r.choices) return r.choices.find((e) => e.value === a.value)?.displayName;
    let s = a.value?.toString();
    return r.type === i.n4.CHANNEL || (r.type === i.n4.MENTIONABLE && null != f.A.getChannel(s))
        ? `<#${s}>	`
        : r.type === i.n4.USER || (r.type === i.n4.MENTIONABLE && null != h.default.getUser(s))
          ? `<@${s}>`
          : r.type === i.n4.ROLE || (r.type === i.n4.MENTIONABLE && null != p.A.getRole(t.guild_id, s ?? y.dJq))
            ? `<@&${s}>`
            : s;
}
