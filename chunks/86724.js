n.d(t, {
    L: () => R,
    Z: () => A,
}),
    n(388685),
    n(781311),
    n(539854),
    n(704826),
    n(35282),
    n(290780),
    n(583741),
    n(125548);
var r = n(373793),
    i = n(911969),
    a = n(555573),
    o = n(456007),
    s = n(10718),
    l = n(998698),
    c = n(895924),
    u = n(581364),
    d = n(509716),
    f = n(826298),
    p = n(592125),
    _ = n(485386),
    m = n(594174),
    h = n(91313),
    g = n(53529),
    E = n(925994),
    b = n(436660),
    y = n(887490),
    O = n(42530),
    v = n(981631),
    S = n(761652);
let I = new Set(["applicationCommandOption"]),
    T = new Set([i.jw.ATTACHMENT]),
    C = new Set(["line", "applicationCommand"]);
function A(e, t, n, r) {
    let {
        insertData: i,
        isInline: d,
        isVoid: f,
        onChange: p,
        deleteBackward: _,
        deleteForward: m,
        deleteFragment: h,
    } = e;
    (e.insertData = (n) => {
        if (null != t && y.bN.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
            let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
                { commandKey: i, interactionOptions: d } = (0, u.XA)(e),
                { application: f, command: p } = s.Xq(
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
                              type: c.Qi.APPLICATION,
                              id: f.id,
                              icon: f.icon,
                              name: null != (l = null == (r = f.bot) ? void 0 : r.username) ? l : f.name,
                              application: f,
                          }
                        : null;
                return (
                    a.Po({
                        channelId: t.id,
                        command: p,
                        section: e,
                        location: c.Vh.PASTE,
                        initialValues: (0, o.Dw)(p, null != d ? d : []),
                    }),
                    null
                );
            }
        }
        return i(n);
    }),
        (e.isInline = (e) => !!I.has(e.type) || d(e)),
        (e.isVoid = (e) => !!("applicationCommandOption" === e.type && T.has(e.optionType)) || f(e)),
        (e.deleteBackward = (t) => {
            j(e, () => _(t));
        }),
        (e.deleteForward = (t) => {
            j(e, () => m(t));
        }),
        (e.deleteFragment = (t) => {
            j(e, () => h(t));
        });
    let E = null,
        b = null,
        O = null,
        v = null,
        S = null;
    return (
        (e.onChange = () => {
            if (null != t) {
                let i = l.Z.getState(t.id),
                    a = s.Hf({
                        channel: t,
                        type: "channel",
                    });
                if (
                    y.bN.richValue(e) !== E ||
                    !y.Ew.equals(e.selection, b) ||
                    i.activeCommand !== O ||
                    null == S ||
                    a.some((e, t) => S[t] !== e)
                ) {
                    let o = g.T.withMergedEntry(e, () => {
                        var a;
                        return N({
                            editor: e,
                            storeCommandState: i,
                            channel: t,
                            canUseCommands: n,
                            canOnlyUseTextCommands: r,
                            commandChanged:
                                (null == (a = i.activeCommand) ? void 0 : a.id) !== (null == O ? void 0 : O.id),
                            previousOptionValues: v,
                        });
                    });
                    if (null != o) {
                        let t = g.T.currentEntry(e);
                        null != t && (t.commandId = o.commandId), (v = o.optionValues);
                    } else v = null;
                    (E = y.bN.richValue(e)), (b = e.selection), (O = i.activeCommand), (S = a);
                }
            }
            p();
        }),
        e
    );
}
function N(e) {
    var t, n;
    let {
            editor: i,
            storeCommandState: o,
            channel: s,
            canUseCommands: l,
            canOnlyUseTextCommands: u,
            commandChanged: d,
            previousOptionValues: f,
        } = e,
        { command: p, commandText: _ } = L(i),
        m = o.activeCommand;
    if (
        (!l && (null == m || null == (t = m.integration_types) ? void 0 : t.includes(r.Y.GUILD_INSTALL))) ||
        (u &&
            (null == m ? void 0 : m.inputType) !== c.iw.BUILT_IN_TEXT &&
            (null == m ? void 0 : m.inputType) !== c.iw.BUILT_IN_INTEGRATION)
    )
        return null != p && R(i, s.id, m, !0), null;
    if (null != p) {
        if (y.bN.isEditorEmpty(i) || null == m) return R(i, s.id, m, !1), null;
        let e = "".concat(S.GI).concat(p.displayName);
        if (null == _ || !_.startsWith(e) || (0 === h.cu(i).length && (_.length < e.length + 1 || " " !== _[e.length])))
            return R(i, s.id, m, !0), null;
    } else {
        if (null != m && d) {
            let e = P(i, s, o),
                t = h.tM(i, m, s.id);
            return (
                x({
                    guildId: s.guild_id,
                    channelId: s.id,
                    command: m,
                    activeOption: e,
                    currentOptionValues: t,
                    previousOptionValues: null,
                    validateAll: !0,
                    allowEmpty: !0,
                }),
                {
                    commandId: m.id,
                    optionValues: t,
                }
            );
        }
        if (null != m && !d)
            return (
                a.Po({
                    channelId: s.id,
                    command: null,
                    section: null,
                }),
                null
            );
        let e = y.bN.richValue(i)[0],
            t = e.children[0];
        if (C.has(e.type) && y.LC.isText(t)) {
            let e = M(t.text, s);
            if (null != e)
                return (
                    a.Po({
                        channelId: s.id,
                        command: e.command,
                        section: e.section,
                    }),
                    null
                );
        }
    }
    if (null != m && null != p) {
        D(i, m) || w(i, m);
        let e = h.tM(i, m, s.id),
            t = y.bN.above(i, {
                match: (e) => y.bN.isInline(i, e) && "applicationCommandOption" === e.type,
                mode: "lowest",
            }),
            r = null != (n = null == t ? void 0 : t[0].optionName) ? n : null;
        return (
            x({
                guildId: s.guild_id,
                channelId: s.id,
                command: m,
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
function P(e, t, n) {
    var r, i, a, o, s;
    let l,
        { initialValues: c, activeCommand: u } = n;
    if (null == u) return null;
    let d = (null != (a = null == (r = u.options) ? void 0 : r.length) ? a : 0) > 0 ? h.zb(e, u) : null,
        f = (0, E.sk)(y.bN.richValue(e), {
            mode: "raw",
            range: {
                anchor: y.bN.start(e, []),
                focus: null != (o = null == d || null == (i = d[0]) ? void 0 : i.keyRange.anchor) ? o : y.bN.end(e, []),
            },
        }),
        p = "",
        _ = f.toLocaleLowerCase(),
        m = "".concat(S.GI).concat(u.displayName, " ").toLocaleLowerCase(),
        g = "".concat(S.GI).concat(u.untranslatedName, " ").toLocaleLowerCase();
    _.startsWith(m) ? (p = f.substring(m.length).trim()) : _.startsWith(g) && (p = f.substring(g.length).trim());
    let v = [],
        I = null,
        C = null;
    if (null != u.options) {
        let e = new Set();
        if (null != d)
            for (let r of d) {
                e.add(r.name);
                let i = null != (s = k(n, t, r.name)) ? s : r.text,
                    a = {
                        type: "applicationCommandOption",
                        optionName: r.name,
                        optionDisplayName: r.displayName,
                        optionType: r.type,
                        children: [{ text: i }],
                    };
                v.push(a), 0 === r.text.length && null == I && (I = a);
            }
        for (let r of u.options)
            if (!e.has(r.name) && (r.required || null != c[r.name])) {
                let e, i;
                p.length > 0 && !T.has(r.type) ? ((e = p), (p = "")) : (e = null != (i = k(n, t, r.name)) ? i : "");
                let a = {
                    type: "applicationCommandOption",
                    optionName: r.name,
                    optionDisplayName: r.displayName,
                    optionType: r.type,
                    children: [{ text: e }],
                };
                v.push(a), 0 === e.length && null == I && (I = a), null == i && (C = a);
            }
    }
    (l =
        p.length > 0
            ? "".concat(S.GI).concat(u.displayName, " ").concat(p.replace(/\r|\n/g, " "))
            : 0 === v.length
              ? "".concat(S.GI).concat(u.displayName, " ")
              : "".concat(S.GI).concat(u.displayName)),
        v.unshift({ text: l });
    let A = {
        type: "applicationCommand",
        children: v,
        command: {
            id: u.id,
            name: u.untranslatedName,
            displayName: u.displayName,
        },
    };
    y.bN.withoutNormalizing(e, () => {
        for (let [, t] of (b.Q.insertNodes(e, [A], { at: O.YD }), y.bN.blocks(e).reverse()))
            y.C0.isAfter(t, O.YD) &&
                b.Q.removeNodes(e, {
                    at: t,
                    voids: !0,
                });
    });
    let N = null;
    return (
        null != I
            ? (b.Q.selectCommandOption(e, I.optionName), (N = I.optionName))
            : null != C
              ? (b.Q.selectCommandOption(e, C.optionName, !1), (N = C.optionName))
              : b.Q.resetSelectionToEditorEnd(e),
        null == C && w(e, u),
        N
    );
}
function R(e, t, n, r) {
    let [i] = y.bN.blocks(e)[0],
        o = (r ? (0, E.sg)(i, { mode: "plain" }).trimEnd() : "").split("\n").map((e) => ({
            type: "line",
            children: [{ text: e }],
        })),
        s = [o.length - 1];
    for (let [, t] of (b.Q.insertNodes(e, o, { at: O.YD }), y.bN.blocks(e).reverse()))
        y.C0.isAfter(t, s) &&
            b.Q.removeNodes(e, {
                at: t,
                voids: !0,
            });
    null != n &&
        a.Po({
            channelId: t,
            command: null,
            section: null,
        });
}
function D(e, t) {
    if (null == t.options || 0 === t.options.length) return !1;
    let n = h.zb(e, t);
    return (
        0 !== n.length &&
        (y.bN.withoutNormalizing(e, () => {
            for (let t = n.length - 1; t >= 0; t--) {
                let r = n[t];
                b.Q.textToInline(
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
            let t = y.bN.getFirstText(e);
            if (null == t) return !1;
            let r = t.text.trim();
            t.text !== r &&
                b.Q.textToText(e, r, {
                    anchor: {
                        path: O.u9,
                        offset: 0,
                    },
                    focus: {
                        path: O.u9,
                        offset: t.text.length,
                    },
                });
        }),
        !0)
    );
}
function w(e, t) {
    if (
        null == t.options ||
        1 !== t.options.length ||
        !0 === t.options[0].required ||
        T.has(t.options[0].type) ||
        h.cu(e).length > 0 ||
        null == h.cr(e)
    )
        return !1;
    let n = y.bN.getFirstText(e);
    if (null == n) return !1;
    let r = t.options[0],
        i = {
            path: O.u9,
            offset: t.displayName.length + 2,
        },
        a = {
            path: O.u9,
            offset: n.text.length,
        };
    return (
        !(!n.text.startsWith("".concat(S.GI).concat(t.displayName, " ").toLocaleLowerCase()) || y.Jz.equals(i, a)) &&
        (b.Q.textToInline(
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
function x(e) {
    let {
        guildId: t,
        channelId: n,
        command: r,
        activeOption: i,
        currentOptionValues: o,
        previousOptionValues: s,
        validateAll: c,
        allowEmpty: u,
    } = e;
    if (null == r.options) return !1;
    let f = c ? null : l.Z.getActiveOptionName(n),
        p = {},
        _ = l.Z.getOptionStates(n),
        m = !1;
    for (let e of r.options) {
        var h, g, E;
        let r = _[e.name],
            a =
                c ||
                (e.name === f && f !== i) ||
                ((null == r || null == (h = r.lastValidationResult) ? void 0 : h.success) === !1 &&
                    (null == o ? void 0 : o[e.name]) !== (null == s ? void 0 : s[e.name])),
            l = {
                hasValue: null != o && e.name in o,
                isActive: e.name === i,
                lastValidationResult: a
                    ? (0, d.f)({
                          option: e,
                          content: null != (E = null == o ? void 0 : o[e.name]) ? E : null,
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
            (a && (null == (g = r.lastValidationResult) ? void 0 : g.success) === !1)) &&
            ((p[e.name] = l), (m = !0));
    }
    m && a.g7(n, p);
}
function L(e) {
    let t = h.cr(e);
    if (null == t)
        return {
            command: null,
            commandText: null,
        };
    let [n] = t,
        r = n.children[0];
    return y.LC.isText(r)
        ? {
              command: n.command,
              commandText: r.text,
          }
        : {
              command: n.command,
              commandText: null,
          };
}
function j(e, t) {
    let n = h.cu(e)[0];
    t();
    let r = y.M8.toPoint(e.selection);
    if (null == r || n === h.cu(e)[0]) return;
    let { command: i, commandText: a } = L(e);
    !(null == i || null == a || a.endsWith(" ")) &&
        y.Jz.equals(r, {
            path: O.u9,
            offset: i.displayName.length + 1,
        }) &&
        b.Q.insertText(e, " ");
}
function M(e, t) {
    if (!e.startsWith("/")) return null;
    let n = (0, f.hV)(t, e.substring(1));
    if (!n.hasSpaceTerminator) return null;
    let { commands: r, sections: a } = s.VB(
        {
            channel: t,
            type: "channel",
        },
        i.yU.CHAT,
        n.text,
    );
    if (0 === r.length) return null;
    let o = n.text.trim(),
        l = o + " ",
        u = r.filter((e) => e.inputType !== c.iw.PLACEHOLDER && (e.displayName === o || e.displayName.startsWith(l)));
    if (1 === u.length && u[0].displayName === o) {
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
function k(e, t, n) {
    var r, a, o, s;
    let l = null == (a = e.activeCommand) || null == (r = a.options) ? void 0 : r.find((e) => e.name === n),
        c = e.initialValues[n];
    if (null == l || null == c) return null;
    if (null != l.choices) return null == (s = l.choices.find((e) => e.value === c.value)) ? void 0 : s.displayName;
    let u = null == (o = c.value) ? void 0 : o.toString();
    return l.type === i.jw.CHANNEL || (l.type === i.jw.MENTIONABLE && null != p.Z.getChannel(u))
        ? "<#".concat(u, ">\t")
        : l.type === i.jw.USER || (l.type === i.jw.MENTIONABLE && null != m.default.getUser(u))
          ? "<@".concat(u, ">")
          : l.type === i.jw.ROLE ||
              (l.type === i.jw.MENTIONABLE && null != _.Z.getRole(t.guild_id, null != u ? u : v.lds))
            ? "<@&".concat(u, ">")
            : u;
}
