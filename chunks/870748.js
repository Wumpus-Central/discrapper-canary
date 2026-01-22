n.d(t, {
    A: () => T,
    t: () => R,
}),
    n(896048),
    n(733351),
    n(321073),
    n(747238),
    n(812715),
    n(667532),
    n(264879),
    n(183875);
var r = n(485845),
    i = n(155718),
    a = n(721768),
    s = n(258363),
    o = n(842209),
    l = n(861382),
    c = n(392054),
    u = n(168186),
    d = n(978561),
    f = n(664929),
    p = n(734057),
    _ = n(317525),
    h = n(287809),
    m = n(317681),
    g = n(186306),
    E = n(323350),
    b = n(35277),
    y = n(711371),
    O = n(551483),
    A = n(652215);
n(827669);
let v = new Set(["applicationCommandOption"]),
    S = new Set([i.n4.ATTACHMENT]),
    I = new Set(["line", "applicationCommand"]);
function T(e, t, n, r) {
    let {
        insertData: i,
        isInline: d,
        isVoid: f,
        onChange: p,
        deleteBackward: _,
        deleteForward: h,
        deleteFragment: m,
    } = e;
    (e.insertData = (n) => {
        if (null != t && y.VW.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
            let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
                { commandKey: i, interactionOptions: d } = (0, u.Ez)(e),
                { application: f, command: p } = o.EW(
                    {
                        channel: t,
                        type: "channel",
                    },
                    i,
                );
            if (null != p) {
                var r, l;
                let e =
                    null != f
                        ? {
                              type: c.Hf.APPLICATION,
                              id: f.id,
                              icon: f.icon,
                              name: null != (r = null == (l = f.bot) ? void 0 : l.username) ? r : f.name,
                              application: f,
                          }
                        : null;
                return (
                    a.Gf({
                        channelId: t.id,
                        command: p,
                        section: e,
                        location: c.Oh.PASTE,
                        initialValues: (0, s.DB)(p, null != d ? d : []),
                    }),
                    null
                );
            }
        }
        return i(n);
    }),
        (e.isInline = (e) => !!v.has(e.type) || d(e)),
        (e.isVoid = (e) => !!("applicationCommandOption" === e.type && S.has(e.optionType)) || f(e)),
        (e.deleteBackward = (t) => {
            L(e, () => _(t));
        }),
        (e.deleteForward = (t) => {
            L(e, () => h(t));
        }),
        (e.deleteFragment = (t) => {
            L(e, () => m(t));
        });
    let E = null,
        b = null,
        O = null,
        A = null,
        I = null;
    return (
        (e.onChange = () => {
            if (null != t) {
                let i = l.A.getState(t.id),
                    a = o.j8({
                        channel: t,
                        type: "channel",
                    });
                if (
                    y.VW.richValue(e) !== E ||
                    !y.Ot.equals(e.selection, b) ||
                    i.activeCommand !== O ||
                    null == I ||
                    a.some((e, t) => I[t] !== e)
                ) {
                    let s = g.o.withMergedEntry(e, () => {
                        var a;
                        return C({
                            editor: e,
                            storeCommandState: i,
                            channel: t,
                            canUseCommands: n,
                            canOnlyUseTextCommands: r,
                            commandChanged:
                                (null == (a = i.activeCommand) ? void 0 : a.id) !== (null == O ? void 0 : O.id),
                            previousOptionValues: A,
                        });
                    });
                    if (null != s) {
                        let t = g.o.currentEntry(e);
                        null != t && (t.commandId = s.commandId), (A = s.optionValues);
                    } else A = null;
                    (E = y.VW.richValue(e)), (b = e.selection), (O = i.activeCommand), (I = a);
                }
            }
            p();
        }),
        e
    );
}
function C(e) {
    var t, n;
    let {
            editor: i,
            storeCommandState: s,
            channel: o,
            canUseCommands: l,
            canOnlyUseTextCommands: u,
            commandChanged: d,
            previousOptionValues: f,
        } = e,
        { command: p, commandText: _ } = x(i),
        h = s.activeCommand;
    if (
        (!l && (null == h || null == (t = h.integration_types) ? void 0 : t.includes(r.b.GUILD_INSTALL))) ||
        (u &&
            (null == h ? void 0 : h.inputType) !== c.y$.BUILT_IN_TEXT &&
            (null == h ? void 0 : h.inputType) !== c.y$.BUILT_IN_INTEGRATION)
    )
        return null != p && R(i, o.id, h, !0), null;
    if (null != p) {
        if (y.VW.isEditorEmpty(i) || null == h) return R(i, o.id, h, !1), null;
        let e = "".concat("/").concat(p.displayName);
        if (null == _ || !_.startsWith(e) || (0 === m.O7(i).length && (_.length < e.length + 1 || " " !== _[e.length])))
            return R(i, o.id, h, !0), null;
    } else {
        if (null != h && d) {
            let e = N(i, o, s),
                t = m.SQ(i, h, o.id);
            return (
                D({
                    guildId: o.guild_id,
                    channelId: o.id,
                    command: h,
                    activeOption: e,
                    currentOptionValues: t,
                    previousOptionValues: null,
                    validateAll: !0,
                    allowEmpty: !0,
                }),
                {
                    commandId: h.id,
                    optionValues: t,
                }
            );
        }
        if (null != h && !d)
            return (
                a.Gf({
                    channelId: o.id,
                    command: null,
                    section: null,
                }),
                null
            );
        let e = y.VW.richValue(i)[0],
            t = e.children[0];
        if (I.has(e.type) && y.l5.isText(t)) {
            let e = j(t.text, o);
            if (null != e)
                return (
                    a.Gf({
                        channelId: o.id,
                        command: e.command,
                        section: e.section,
                    }),
                    null
                );
        }
    }
    if (null != h && null != p) {
        w(i, h) || P(i, h);
        let e = m.SQ(i, h, o.id),
            t = y.VW.above(i, {
                match: (e) => y.VW.isInline(i, e) && "applicationCommandOption" === e.type,
                mode: "lowest",
            }),
            r = null != (n = null == t ? void 0 : t[0].optionName) ? n : null;
        return (
            D({
                guildId: o.guild_id,
                channelId: o.id,
                command: h,
                activeOption: r,
                currentOptionValues: e,
                previousOptionValues: f,
                validateAll: !1,
                allowEmpty: !1,
            }),
            {
                commandId: p.id,
                optionValues: e,
            }
        );
    }
    return null;
}
function N(e, t, n) {
    var r, i, a, s, o;
    let l,
        { initialValues: c, activeCommand: u } = n;
    if (null == u) return null;
    let d = (null != (r = null == (a = u.options) ? void 0 : a.length) ? r : 0) > 0 ? m.pY(e, u) : null,
        f = (0, E.WO)(y.VW.richValue(e), {
            mode: "raw",
            range: {
                anchor: y.VW.start(e, []),
                focus: null != (i = null == d || null == (s = d[0]) ? void 0 : s.keyRange.anchor) ? i : y.VW.end(e, []),
            },
        }),
        p = "",
        _ = f.toLocaleLowerCase(),
        h = "".concat("/").concat(u.displayName, " ").toLocaleLowerCase(),
        g = "".concat("/").concat(u.untranslatedName, " ").toLocaleLowerCase();
    _.startsWith(h) ? (p = f.substring(h.length).trim()) : _.startsWith(g) && (p = f.substring(g.length).trim());
    let A = [],
        v = null,
        I = null;
    if (null != u.options) {
        let e = new Set();
        if (null != d)
            for (let r of d) {
                e.add(r.name);
                let i = null != (o = M(n, t, r.name)) ? o : r.text,
                    a = {
                        type: "applicationCommandOption",
                        optionName: r.name,
                        optionDisplayName: r.displayName,
                        optionType: r.type,
                        children: [{ text: i }],
                    };
                A.push(a), 0 === r.text.length && null == v && (v = a);
            }
        for (let r of u.options)
            if (!e.has(r.name) && (r.required || null != c[r.name])) {
                let e, i;
                p.length > 0 && !S.has(r.type) ? ((e = p), (p = "")) : (e = null != (i = M(n, t, r.name)) ? i : "");
                let a = {
                    type: "applicationCommandOption",
                    optionName: r.name,
                    optionDisplayName: r.displayName,
                    optionType: r.type,
                    children: [{ text: e }],
                };
                A.push(a), 0 === e.length && null == v && (v = a), null == i && (I = a);
            }
    }
    (l =
        p.length > 0
            ? "".concat("/").concat(u.displayName, " ").concat(p.replace(/\r|\n/g, " "))
            : 0 === A.length
              ? "".concat("/").concat(u.displayName, " ")
              : "".concat("/").concat(u.displayName)),
        A.unshift({ text: l });
    let T = {
        type: "applicationCommand",
        children: A,
        command: {
            id: u.id,
            name: u.untranslatedName,
            displayName: u.displayName,
        },
    };
    y.VW.withoutNormalizing(e, () => {
        for (let [, t] of (b.b.insertNodes(e, [T], { at: O.Xg }), y.VW.blocks(e).reverse()))
            y.PW.isAfter(t, O.Xg) &&
                b.b.removeNodes(e, {
                    at: t,
                    voids: !0,
                });
    });
    let C = null;
    return (
        null != v
            ? (b.b.selectCommandOption(e, v.optionName), (C = v.optionName))
            : null != I
              ? (b.b.selectCommandOption(e, I.optionName, !1), (C = I.optionName))
              : b.b.resetSelectionToEditorEnd(e),
        null == I && P(e, u),
        C
    );
}
function R(e, t, n, r) {
    let [i] = y.VW.blocks(e)[0],
        s = (r ? (0, E.IQ)(i, { mode: "plain" }).trimEnd() : "").split("\n").map((e) => ({
            type: "line",
            children: [{ text: e }],
        })),
        o = [s.length - 1];
    for (let [, t] of (b.b.insertNodes(e, s, { at: O.Xg }), y.VW.blocks(e).reverse()))
        y.PW.isAfter(t, o) &&
            b.b.removeNodes(e, {
                at: t,
                voids: !0,
            });
    null != n &&
        a.Gf({
            channelId: t,
            command: null,
            section: null,
        });
}
function w(e, t) {
    if (null == t.options || 0 === t.options.length) return !1;
    let n = m.pY(e, t);
    return (
        0 !== n.length &&
        (y.VW.withoutNormalizing(e, () => {
            for (let t = n.length - 1; t >= 0; t--) {
                let r = n[t];
                b.b.textToInline(
                    e,
                    {
                        type: "applicationCommandOption",
                        optionName: r.name,
                        optionDisplayName: r.displayName,
                        optionType: r.type,
                        children: [{ text: r.text }],
                    },
                    {
                        anchor: r.keyRange.anchor,
                        focus: r.valueRange.focus,
                    },
                );
            }
            let t = y.VW.getFirstText(e);
            if (null == t) return !1;
            let r = t.text.trim();
            t.text !== r &&
                b.b.textToText(e, r, {
                    anchor: {
                        path: O.fP,
                        offset: 0,
                    },
                    focus: {
                        path: O.fP,
                        offset: t.text.length,
                    },
                });
        }),
        !0)
    );
}
function P(e, t) {
    if (
        null == t.options ||
        1 !== t.options.length ||
        !0 === t.options[0].required ||
        S.has(t.options[0].type) ||
        m.O7(e).length > 0 ||
        null == m.n$(e)
    )
        return !1;
    let n = y.VW.getFirstText(e);
    if (null == n) return !1;
    let r = t.options[0],
        i = {
            path: O.fP,
            offset: t.displayName.length + 2,
        },
        a = {
            path: O.fP,
            offset: n.text.length,
        };
    return (
        !(!n.text.startsWith("".concat("/").concat(t.displayName, " ").toLocaleLowerCase()) || y.Kh.equals(i, a)) &&
        (b.b.textToInline(
            e,
            {
                type: "applicationCommandOption",
                optionName: r.name,
                optionDisplayName: r.displayName,
                optionType: r.type,
                children: [{ text: n.text.substring(t.displayName.length + 2) }],
            },
            {
                anchor: i,
                focus: a,
            },
        ),
        !0)
    );
}
function D(e) {
    let {
        guildId: t,
        channelId: n,
        command: r,
        activeOption: i,
        currentOptionValues: s,
        previousOptionValues: o,
        validateAll: c,
        allowEmpty: u,
    } = e;
    if (null == r.options) return !1;
    let f = c ? null : l.A.getActiveOptionName(n),
        p = {},
        _ = l.A.getOptionStates(n),
        h = !1;
    for (let e of r.options) {
        var m, g, E;
        let r = _[e.name],
            a =
                c ||
                (e.name === f && f !== i) ||
                ((null == r || null == (g = r.lastValidationResult) ? void 0 : g.success) === !1 &&
                    (null == s ? void 0 : s[e.name]) !== (null == o ? void 0 : o[e.name])),
            l = {
                hasValue: null != s && e.name in s,
                isActive: e.name === i,
                lastValidationResult: a
                    ? (0, d.J)({
                          option: e,
                          content: null != (m = null == s ? void 0 : s[e.name]) ? m : null,
                          guildId: t,
                          channelId: n,
                          allowEmptyValues: u,
                      })
                    : null == r
                      ? void 0
                      : r.lastValidationResult,
            };
        (null == r ||
            r.hasValue !== l.hasValue ||
            r.isActive !== l.isActive ||
            (a && (null == (E = r.lastValidationResult) ? void 0 : E.success) === !1)) &&
            ((p[e.name] = l), (h = !0));
    }
    h && a.H2(n, p);
}
function x(e) {
    let t = m.n$(e);
    if (null == t)
        return {
            command: null,
            commandText: null,
        };
    let [n] = t,
        r = n.children[0];
    return y.l5.isText(r)
        ? {
              command: n.command,
              commandText: r.text,
          }
        : {
              command: n.command,
              commandText: null,
          };
}
function L(e, t) {
    let n = m.O7(e)[0];
    t();
    let r = y.ZF.toPoint(e.selection);
    if (null == r || n === m.O7(e)[0]) return;
    let { command: i, commandText: a } = x(e);
    !(null == i || null == a || a.endsWith(" ")) &&
        y.Kh.equals(r, {
            path: O.fP,
            offset: i.displayName.length + 1,
        }) &&
        b.b.insertText(e, " ");
}
function j(e, t) {
    if (!e.startsWith("/")) return null;
    let n = (0, f.Yn)(t, e.substring(1));
    if (!n.hasSpaceTerminator) return null;
    let { commands: r, sections: a } = o.v7(
        {
            channel: t,
            type: "channel",
        },
        i.kc.CHAT,
        n.text,
    );
    if (0 === r.length) return null;
    let s = n.text.trim(),
        l = s + " ",
        u = r.filter((e) => e.inputType !== c.y$.PLACEHOLDER && (e.displayName === s || e.displayName.startsWith(l)));
    if (1 === u.length && u[0].displayName === s) {
        let e = u[0],
            t = a.find((t) => {
                var n;
                return (null == (n = t.application) ? void 0 : n.id) === e.applicationId;
            });
        return {
            command: e,
            section: t,
        };
    }
    return null;
}
function M(e, t, n) {
    var r, a, s, o;
    let l = null == (a = e.activeCommand) || null == (r = a.options) ? void 0 : r.find((e) => e.name === n),
        c = e.initialValues[n];
    if (null == l || null == c) return null;
    if (null != l.choices) return null == (o = l.choices.find((e) => e.value === c.value)) ? void 0 : o.displayName;
    let u = null == (s = c.value) ? void 0 : s.toString();
    return l.type === i.n4.CHANNEL || (l.type === i.n4.MENTIONABLE && null != p.A.getChannel(u))
        ? "<#".concat(u, ">\t")
        : l.type === i.n4.USER || (l.type === i.n4.MENTIONABLE && null != h.default.getUser(u))
          ? "<@".concat(u, ">")
          : l.type === i.n4.ROLE ||
              (l.type === i.n4.MENTIONABLE && null != _.A.getRole(t.guild_id, null != u ? u : A.dJq))
            ? "<@&".concat(u, ">")
            : u;
}
