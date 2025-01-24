r.d(n, {
    L: function () {
        return M;
    },
    Z: function () {
        return x;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(757143);
var s = r(733860);
var l = r(373793),
    u = r(911969),
    c = r(555573),
    d = r(456007),
    f = r(10718),
    p = r(998698),
    h = r(895924),
    _ = r(581364),
    m = r(509716),
    g = r(826298),
    E = r(592125),
    v = r(430824),
    y = r(594174),
    b = r(91313),
    I = r(53529),
    T = r(925994),
    S = r(436660),
    A = r(887490),
    C = r(42530),
    N = r(981631),
    R = r(665692);
let O = new Set(['applicationCommandOption']),
    D = new Set([u.jw.ATTACHMENT]),
    L = new Set(['line', 'applicationCommand']);
function x(e, n, r, i) {
    let { insertData: a, isInline: o, isVoid: s, onChange: l, deleteBackward: u, deleteForward: m, deleteFragment: g } = e;
    (e.insertData = (r) => {
        if (null != n && A.bN.isEditorEmpty(e) && r.types.includes('application/x-discord-interaction-data')) {
            let e = JSON.parse(r.getData('application/x-discord-interaction-data')),
                { commandKey: a, interactionOptions: s } = (0, _.XA)(e),
                { application: l, command: u } = f.Xq(
                    {
                        channel: n,
                        type: 'channel'
                    },
                    a
                );
            if (null != u) {
                var i, o;
                let e =
                    null != l
                        ? {
                              type: h.Qi.APPLICATION,
                              id: l.id,
                              icon: l.icon,
                              name: null !== (o = null === (i = l.bot) || void 0 === i ? void 0 : i.username) && void 0 !== o ? o : l.name,
                              application: l
                          }
                        : null;
                return (
                    c.Po({
                        channelId: n.id,
                        command: u,
                        section: e,
                        location: h.Vh.PASTE,
                        initialValues: (0, d.Dw)(u, null != s ? s : [])
                    }),
                    null
                );
            }
        }
        return a(r);
    }),
        (e.isInline = (e) => !!O.has(e.type) || o(e)),
        (e.isVoid = (e) => !!('applicationCommandOption' === e.type && D.has(e.optionType)) || s(e)),
        (e.deleteBackward = (n) => {
            Z(e, () => u(n));
        }),
        (e.deleteForward = (n) => {
            Z(e, () => m(n));
        }),
        (e.deleteFragment = (n) => {
            Z(e, () => g(n));
        });
    let E = null,
        v = null,
        y = null,
        b = null,
        T = null;
    return (
        (e.onChange = () => {
            if (null != n) {
                let a = p.Z.getState(n.id),
                    o = f.Hf({
                        channel: n,
                        type: 'channel'
                    });
                if (A.bN.richValue(e) !== E || !A.Ew.equals(e.selection, v) || a.activeCommand !== y || null == T || o.some((e, n) => T[n] !== e)) {
                    let s = I.T.withMergedEntry(e, () => {
                        var o;
                        return w({
                            editor: e,
                            storeCommandState: a,
                            channel: n,
                            canUseCommands: r,
                            canOnlyUseTextCommands: i,
                            commandChanged: (null === (o = a.activeCommand) || void 0 === o ? void 0 : o.id) !== (null == y ? void 0 : y.id),
                            previousOptionValues: b
                        });
                    });
                    if (null != s) {
                        let n = I.T.currentEntry(e);
                        null != n && (n.commandId = s.commandId), (b = s.optionValues);
                    } else b = null;
                    (E = A.bN.richValue(e)), (v = e.selection), (y = a.activeCommand), (T = o);
                }
            }
            l();
        }),
        e
    );
}
function w(e) {
    var n, r;
    let { editor: i, storeCommandState: a, channel: o, canUseCommands: s, canOnlyUseTextCommands: u, commandChanged: d, previousOptionValues: f } = e,
        { command: p, commandText: _ } = G(i),
        m = a.activeCommand;
    if ((!s && (null == m ? void 0 : null === (n = m.integration_types) || void 0 === n ? void 0 : n.includes(l.Y.GUILD_INSTALL))) || (u && (null == m ? void 0 : m.inputType) !== h.iw.BUILT_IN_TEXT && (null == m ? void 0 : m.inputType) !== h.iw.BUILT_IN_INTEGRATION)) return null != p && M(i, o.id, m, !0), null;
    if (null != p) {
        if (A.bN.isEditorEmpty(i) || null == m) return M(i, o.id, m, !1), null;
        let e = ''.concat(R.GI).concat(p.displayName);
        if (null == _ || !_.startsWith(e) || (0 === b.cu(i).length && (_.length < e.length + 1 || ' ' !== _[e.length]))) return M(i, o.id, m, !0), null;
    } else {
        if (null != m && d) {
            let e = P(i, o, a),
                n = b.tM(i, m, o.id);
            return (
                B({
                    guildId: o.guild_id,
                    channelId: o.id,
                    command: m,
                    activeOption: e,
                    currentOptionValues: n,
                    previousOptionValues: null,
                    validateAll: !0,
                    allowEmpty: !0
                }),
                {
                    commandId: m.id,
                    optionValues: n
                }
            );
        }
        if (null != m && !d)
            return (
                c.Po({
                    channelId: o.id,
                    command: null,
                    section: null
                }),
                null
            );
        let e = A.bN.richValue(i)[0],
            n = e.children[0];
        if (L.has(e.type) && A.LC.isText(n)) {
            let e = F(n.text, o);
            if (null != e)
                return (
                    c.Po({
                        channelId: o.id,
                        command: e.command,
                        section: e.section
                    }),
                    null
                );
        }
    }
    if (null != m && null != p) {
        !k(i, m) && U(i, m);
        let e = b.tM(i, m, o.id),
            n = A.bN.above(i, {
                match: (e) => A.bN.isInline(i, e) && 'applicationCommandOption' === e.type,
                mode: 'lowest'
            }),
            a = null !== (r = null == n ? void 0 : n[0].optionName) && void 0 !== r ? r : null;
        return (
            B({
                guildId: o.guild_id,
                channelId: o.id,
                command: m,
                activeOption: a,
                currentOptionValues: e,
                previousOptionValues: f,
                validateAll: !1,
                allowEmpty: !1
            }),
            {
                commandId: p.id,
                optionValues: e
            }
        );
    }
    return null;
}
function P(e, n, r) {
    var i, a, o, s, l;
    let u;
    let { initialValues: c, activeCommand: d } = r;
    if (null == d) return null;
    let f = (null !== (o = null === (i = d.options) || void 0 === i ? void 0 : i.length) && void 0 !== o ? o : 0) > 0 ? b.zb(e, d) : null,
        p = (0, T.sk)(A.bN.richValue(e), {
            mode: 'raw',
            range: {
                anchor: A.bN.start(e, []),
                focus: null !== (s = null == f ? void 0 : null === (a = f[0]) || void 0 === a ? void 0 : a.keyRange.anchor) && void 0 !== s ? s : A.bN.end(e, [])
            }
        }),
        h = '',
        _ = p.toLocaleLowerCase(),
        m = ''.concat(R.GI).concat(d.displayName, ' ').toLocaleLowerCase(),
        g = ''.concat(R.GI).concat(d.untranslatedName, ' ').toLocaleLowerCase();
    _.startsWith(m) ? (h = p.substring(m.length).trim()) : _.startsWith(g) && (h = p.substring(g.length).trim());
    let E = [],
        v = null,
        y = null;
    if (null != d.options) {
        let e = new Set();
        if (null != f)
            for (let i of f) {
                e.add(i.name);
                let a = null !== (l = V(r, n, i.name)) && void 0 !== l ? l : i.text,
                    o = {
                        type: 'applicationCommandOption',
                        optionName: i.name,
                        optionDisplayName: i.displayName,
                        optionType: i.type,
                        children: [{ text: a }]
                    };
                E.push(o), 0 === i.text.length && null == v && (v = o);
            }
        for (let i of d.options)
            if (!e.has(i.name) && (i.required || null != c[i.name])) {
                let e, a;
                h.length > 0 && !D.has(i.type) ? ((e = h), (h = '')) : (e = null != (a = V(r, n, i.name)) ? a : '');
                let o = {
                    type: 'applicationCommandOption',
                    optionName: i.name,
                    optionDisplayName: i.displayName,
                    optionType: i.type,
                    children: [{ text: e }]
                };
                E.push(o), 0 === e.length && null == v && (v = o), null == a && (y = o);
            }
    }
    (u = h.length > 0 ? ''.concat(R.GI).concat(d.displayName, ' ').concat(h.replace(/\r|\n/g, ' ')) : 0 === E.length ? ''.concat(R.GI).concat(d.displayName, ' ') : ''.concat(R.GI).concat(d.displayName)), E.unshift({ text: u });
    let I = {
        type: 'applicationCommand',
        children: E,
        command: {
            id: d.id,
            name: d.untranslatedName,
            displayName: d.displayName
        }
    };
    A.bN.withoutNormalizing(e, () => {
        for (let [, n] of (S.Q.insertNodes(e, [I], { at: C.YD }), A.bN.blocks(e).reverse()))
            A.C0.isAfter(n, C.YD) &&
                S.Q.removeNodes(e, {
                    at: n,
                    voids: !0
                });
    });
    let N = null;
    return null != v ? (S.Q.selectCommandOption(e, v.optionName), (N = v.optionName)) : null != y ? (S.Q.selectCommandOption(e, y.optionName, !1), (N = y.optionName)) : S.Q.resetSelectionToEnd(e), null == y && U(e, d), N;
}
function M(e, n, r, i) {
    let [a] = A.bN.blocks(e)[0],
        o = (i ? (0, T.sg)(a, { mode: 'plain' }).trimEnd() : '').split('\n').map((e) => ({
            type: 'line',
            children: [{ text: e }]
        })),
        s = [o.length - 1];
    for (let [, n] of (S.Q.insertNodes(e, o, { at: C.YD }), A.bN.blocks(e).reverse()))
        A.C0.isAfter(n, s) &&
            S.Q.removeNodes(e, {
                at: n,
                voids: !0
            });
    null != r &&
        c.Po({
            channelId: n,
            command: null,
            section: null
        });
}
function k(e, n) {
    if (null == n.options || 0 === n.options.length) return !1;
    let r = b.zb(e, n);
    return (
        0 !== r.length &&
        (A.bN.withoutNormalizing(e, () => {
            for (let n = r.length - 1; n >= 0; n--) {
                let i = r[n];
                S.Q.textToInline(
                    e,
                    {
                        type: 'applicationCommandOption',
                        optionName: i.name,
                        optionDisplayName: i.displayName,
                        optionType: i.type,
                        children: [{ text: i.text }]
                    },
                    {
                        anchor: i.keyRange.anchor,
                        focus: i.valueRange.focus
                    }
                );
            }
            let n = A.bN.getFirstText(e);
            if (null == n) return !1;
            let i = n.text.trim();
            n.text !== i &&
                S.Q.textToText(e, i, {
                    anchor: {
                        path: C.u9,
                        offset: 0
                    },
                    focus: {
                        path: C.u9,
                        offset: n.text.length
                    }
                });
        }),
        !0)
    );
}
function U(e, n) {
    if (null == n.options || 1 !== n.options.length || !0 === n.options[0].required || D.has(n.options[0].type) || b.cu(e).length > 0 || null == b.cr(e)) return !1;
    let r = A.bN.getFirstText(e);
    if (null == r) return !1;
    let i = n.options[0],
        a = {
            path: C.u9,
            offset: n.displayName.length + 2
        },
        o = {
            path: C.u9,
            offset: r.text.length
        };
    return (
        !(!r.text.startsWith(''.concat(R.GI).concat(n.displayName, ' ').toLocaleLowerCase()) || A.Jz.equals(a, o)) &&
        (S.Q.textToInline(
            e,
            {
                type: 'applicationCommandOption',
                optionName: i.name,
                optionDisplayName: i.displayName,
                optionType: i.type,
                children: [{ text: r.text.substring(n.displayName.length + 2) }]
            },
            {
                anchor: a,
                focus: o
            }
        ),
        !0)
    );
}
function B(e) {
    let { guildId: n, channelId: r, command: i, activeOption: a, currentOptionValues: o, previousOptionValues: s, validateAll: l, allowEmpty: u } = e;
    if (null == i.options) return !1;
    let d = l ? null : p.Z.getActiveOptionName(r),
        f = {},
        h = p.Z.getOptionStates(r),
        _ = !1;
    for (let e of i.options) {
        var g, E, v;
        let i = h[e.name],
            c = l || (e.name === d && d !== a) || ((null == i ? void 0 : null === (g = i.lastValidationResult) || void 0 === g ? void 0 : g.success) === !1 && (null == o ? void 0 : o[e.name]) !== (null == s ? void 0 : s[e.name])),
            p = {
                hasValue: null != o && e.name in o,
                isActive: e.name === a,
                lastValidationResult: c
                    ? (0, m.f)({
                          option: e,
                          content: null !== (v = null == o ? void 0 : o[e.name]) && void 0 !== v ? v : null,
                          guildId: n,
                          channelId: r,
                          allowEmptyValues: u
                      })
                    : null == i
                      ? void 0
                      : i.lastValidationResult
            };
        (null == i || i.hasValue !== p.hasValue || i.isActive !== p.isActive || (c && (null === (E = i.lastValidationResult) || void 0 === E ? void 0 : E.success) === !1)) && ((f[e.name] = p), (_ = !0));
    }
    _ && c.g7(r, f);
}
function G(e) {
    let n = b.cr(e);
    if (null == n)
        return {
            command: null,
            commandText: null
        };
    let [r] = n,
        i = r.children[0];
    return A.LC.isText(i)
        ? {
              command: r.command,
              commandText: i.text
          }
        : {
              command: r.command,
              commandText: null
          };
}
function Z(e, n) {
    let r = b.cu(e)[0];
    n();
    let i = A.M8.toPoint(e.selection);
    if (null == i || r === b.cu(e)[0]) return;
    let { command: a, commandText: o } = G(e);
    if (
        !(null == a || null == o || o.endsWith(' ')) &&
        !!A.Jz.equals(i, {
            path: C.u9,
            offset: a.displayName.length + 1
        })
    )
        S.Q.insertText(e, ' ');
}
function F(e, n) {
    if (!e.startsWith('/')) return null;
    let r = (0, g.hV)(n, e.substring(1));
    if (!r.hasSpaceTerminator) return null;
    let { commands: i, sections: a } = f.VB(
        {
            channel: n,
            type: 'channel'
        },
        u.yU.CHAT,
        r.text
    );
    if (0 === i.length) return null;
    let o = r.text.trim(),
        s = o + ' ',
        l = i.filter((e) => e.inputType !== h.iw.PLACEHOLDER && (e.displayName === o || e.displayName.startsWith(s)));
    if (1 === l.length && l[0].displayName === o) {
        let e = l[0],
            n = a.find((n) => {
                var r;
                return (null === (r = n.application) || void 0 === r ? void 0 : r.id) === e.applicationId;
            });
        return {
            command: e,
            section: n
        };
    }
    return null;
}
function V(e, n, r) {
    var i, a, o, s;
    let l = null === (a = e.activeCommand) || void 0 === a ? void 0 : null === (i = a.options) || void 0 === i ? void 0 : i.find((e) => e.name === r),
        c = e.initialValues[r];
    if (null == l || null == c) return null;
    if (null != l.choices) return null === (s = l.choices.find((e) => e.value === c.value)) || void 0 === s ? void 0 : s.displayName;
    let d = null === (o = c.value) || void 0 === o ? void 0 : o.toString();
    return l.type === u.jw.CHANNEL || (l.type === u.jw.MENTIONABLE && null != E.Z.getChannel(d)) ? '<#'.concat(d, '>\t') : l.type === u.jw.USER || (l.type === u.jw.MENTIONABLE && null != y.default.getUser(d)) ? '<@'.concat(d, '>') : l.type === u.jw.ROLE || (l.type === u.jw.MENTIONABLE && null != v.Z.getRole(n.guild_id, null != d ? d : N.lds)) ? '<@&'.concat(d, '>') : d;
}
