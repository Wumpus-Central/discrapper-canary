n.d(t, {
    L: () => D,
    Z: () => C
}),
    n(47120),
    n(653041),
    n(757143),
    n(733860);
var i = n(373793),
    r = n(911969),
    a = n(555573),
    s = n(456007),
    o = n(10718),
    l = n(998698),
    u = n(895924),
    c = n(581364),
    d = n(509716),
    f = n(826298),
    _ = n(592125),
    p = n(430824),
    h = n(594174),
    m = n(91313),
    g = n(53529),
    E = n(925994),
    v = n(436660),
    y = n(887490),
    I = n(42530),
    T = n(981631),
    b = n(665692);
let S = new Set(['applicationCommandOption']),
    A = new Set([r.jw.ATTACHMENT]),
    N = new Set(['line', 'applicationCommand']);
function C(e, t, n, i) {
    let { insertData: r, isInline: d, isVoid: f, onChange: _, deleteBackward: p, deleteForward: h, deleteFragment: m } = e;
    (e.insertData = (n) => {
        if (null != t && y.bN.isEditorEmpty(e) && n.types.includes('application/x-discord-interaction-data')) {
            let e = JSON.parse(n.getData('application/x-discord-interaction-data')),
                { commandKey: r, interactionOptions: d } = (0, c.XA)(e),
                { application: f, command: _ } = o.Xq(
                    {
                        channel: t,
                        type: 'channel'
                    },
                    r
                );
            if (null != _) {
                var i, l;
                let e =
                    null != f
                        ? {
                              type: u.Qi.APPLICATION,
                              id: f.id,
                              icon: f.icon,
                              name: null !== (l = null === (i = f.bot) || void 0 === i ? void 0 : i.username) && void 0 !== l ? l : f.name,
                              application: f
                          }
                        : null;
                return (
                    a.Po({
                        channelId: t.id,
                        command: _,
                        section: e,
                        location: u.Vh.PASTE,
                        initialValues: (0, s.Dw)(_, null != d ? d : [])
                    }),
                    null
                );
            }
        }
        return r(n);
    }),
        (e.isInline = (e) => !!S.has(e.type) || d(e)),
        (e.isVoid = (e) => !!('applicationCommandOption' === e.type && A.has(e.optionType)) || f(e)),
        (e.deleteBackward = (t) => {
            M(e, () => p(t));
        }),
        (e.deleteForward = (t) => {
            M(e, () => h(t));
        }),
        (e.deleteFragment = (t) => {
            M(e, () => m(t));
        });
    let E = null,
        v = null,
        I = null,
        T = null,
        b = null;
    return (
        (e.onChange = () => {
            if (null != t) {
                let r = l.Z.getState(t.id),
                    a = o.Hf({
                        channel: t,
                        type: 'channel'
                    });
                if (y.bN.richValue(e) !== E || !y.Ew.equals(e.selection, v) || r.activeCommand !== I || null == b || a.some((e, t) => b[t] !== e)) {
                    let s = g.T.withMergedEntry(e, () => {
                        var a;
                        return R({
                            editor: e,
                            storeCommandState: r,
                            channel: t,
                            canUseCommands: n,
                            canOnlyUseTextCommands: i,
                            commandChanged: (null === (a = r.activeCommand) || void 0 === a ? void 0 : a.id) !== (null == I ? void 0 : I.id),
                            previousOptionValues: T
                        });
                    });
                    if (null != s) {
                        let t = g.T.currentEntry(e);
                        null != t && (t.commandId = s.commandId), (T = s.optionValues);
                    } else T = null;
                    (E = y.bN.richValue(e)), (v = e.selection), (I = r.activeCommand), (b = a);
                }
            }
            _();
        }),
        e
    );
}
function R(e) {
    var t, n;
    let { editor: r, storeCommandState: s, channel: o, canUseCommands: l, canOnlyUseTextCommands: c, commandChanged: d, previousOptionValues: f } = e,
        { command: _, commandText: p } = P(r),
        h = s.activeCommand;
    if ((!l && (null == h ? void 0 : null === (t = h.integration_types) || void 0 === t ? void 0 : t.includes(i.Y.GUILD_INSTALL))) || (c && (null == h ? void 0 : h.inputType) !== u.iw.BUILT_IN_TEXT && (null == h ? void 0 : h.inputType) !== u.iw.BUILT_IN_INTEGRATION)) return null != _ && D(r, o.id, h, !0), null;
    if (null != _) {
        if (y.bN.isEditorEmpty(r) || null == h) return D(r, o.id, h, !1), null;
        let e = ''.concat(b.GI).concat(_.displayName);
        if (null == p || !p.startsWith(e) || (0 === m.cu(r).length && (p.length < e.length + 1 || ' ' !== p[e.length]))) return D(r, o.id, h, !0), null;
    } else {
        if (null != h && d) {
            let e = O(r, o, s),
                t = m.tM(r, h, o.id);
            return (
                w({
                    guildId: o.guild_id,
                    channelId: o.id,
                    command: h,
                    activeOption: e,
                    currentOptionValues: t,
                    previousOptionValues: null,
                    validateAll: !0,
                    allowEmpty: !0
                }),
                {
                    commandId: h.id,
                    optionValues: t
                }
            );
        }
        if (null != h && !d)
            return (
                a.Po({
                    channelId: o.id,
                    command: null,
                    section: null
                }),
                null
            );
        let e = y.bN.richValue(r)[0],
            t = e.children[0];
        if (N.has(e.type) && y.LC.isText(t)) {
            let e = k(t.text, o);
            if (null != e)
                return (
                    a.Po({
                        channelId: o.id,
                        command: e.command,
                        section: e.section
                    }),
                    null
                );
        }
    }
    if (null != h && null != _) {
        L(r, h) || x(r, h);
        let e = m.tM(r, h, o.id),
            t = y.bN.above(r, {
                match: (e) => y.bN.isInline(r, e) && 'applicationCommandOption' === e.type,
                mode: 'lowest'
            }),
            i = null !== (n = null == t ? void 0 : t[0].optionName) && void 0 !== n ? n : null;
        return (
            w({
                guildId: o.guild_id,
                channelId: o.id,
                command: h,
                activeOption: i,
                currentOptionValues: e,
                previousOptionValues: f,
                validateAll: !1,
                allowEmpty: !1
            }),
            {
                commandId: _.id,
                optionValues: e
            }
        );
    }
    return null;
}
function O(e, t, n) {
    var i, r, a, s, o;
    let l;
    let { initialValues: u, activeCommand: c } = n;
    if (null == c) return null;
    let d = (null !== (a = null === (i = c.options) || void 0 === i ? void 0 : i.length) && void 0 !== a ? a : 0) > 0 ? m.zb(e, c) : null,
        f = (0, E.sk)(y.bN.richValue(e), {
            mode: 'raw',
            range: {
                anchor: y.bN.start(e, []),
                focus: null !== (s = null == d ? void 0 : null === (r = d[0]) || void 0 === r ? void 0 : r.keyRange.anchor) && void 0 !== s ? s : y.bN.end(e, [])
            }
        }),
        _ = '',
        p = f.toLocaleLowerCase(),
        h = ''.concat(b.GI).concat(c.displayName, ' ').toLocaleLowerCase(),
        g = ''.concat(b.GI).concat(c.untranslatedName, ' ').toLocaleLowerCase();
    p.startsWith(h) ? (_ = f.substring(h.length).trim()) : p.startsWith(g) && (_ = f.substring(g.length).trim());
    let T = [],
        S = null,
        N = null;
    if (null != c.options) {
        let e = new Set();
        if (null != d)
            for (let i of d) {
                e.add(i.name);
                let r = null !== (o = U(n, t, i.name)) && void 0 !== o ? o : i.text,
                    a = {
                        type: 'applicationCommandOption',
                        optionName: i.name,
                        optionDisplayName: i.displayName,
                        optionType: i.type,
                        children: [{ text: r }]
                    };
                T.push(a), 0 === i.text.length && null == S && (S = a);
            }
        for (let i of c.options)
            if (!e.has(i.name) && (i.required || null != u[i.name])) {
                let e, r;
                _.length > 0 && !A.has(i.type) ? ((e = _), (_ = '')) : (e = null != (r = U(n, t, i.name)) ? r : '');
                let a = {
                    type: 'applicationCommandOption',
                    optionName: i.name,
                    optionDisplayName: i.displayName,
                    optionType: i.type,
                    children: [{ text: e }]
                };
                T.push(a), 0 === e.length && null == S && (S = a), null == r && (N = a);
            }
    }
    (l = _.length > 0 ? ''.concat(b.GI).concat(c.displayName, ' ').concat(_.replace(/\r|\n/g, ' ')) : 0 === T.length ? ''.concat(b.GI).concat(c.displayName, ' ') : ''.concat(b.GI).concat(c.displayName)), T.unshift({ text: l });
    let C = {
        type: 'applicationCommand',
        children: T,
        command: {
            id: c.id,
            name: c.untranslatedName,
            displayName: c.displayName
        }
    };
    y.bN.withoutNormalizing(e, () => {
        for (let [, t] of (v.Q.insertNodes(e, [C], { at: I.YD }), y.bN.blocks(e).reverse()))
            y.C0.isAfter(t, I.YD) &&
                v.Q.removeNodes(e, {
                    at: t,
                    voids: !0
                });
    });
    let R = null;
    return null != S ? (v.Q.selectCommandOption(e, S.optionName), (R = S.optionName)) : null != N ? (v.Q.selectCommandOption(e, N.optionName, !1), (R = N.optionName)) : v.Q.resetSelectionToEnd(e), null == N && x(e, c), R;
}
function D(e, t, n, i) {
    let [r] = y.bN.blocks(e)[0],
        s = (i ? (0, E.sg)(r, { mode: 'plain' }).trimEnd() : '').split('\n').map((e) => ({
            type: 'line',
            children: [{ text: e }]
        })),
        o = [s.length - 1];
    for (let [, t] of (v.Q.insertNodes(e, s, { at: I.YD }), y.bN.blocks(e).reverse()))
        y.C0.isAfter(t, o) &&
            v.Q.removeNodes(e, {
                at: t,
                voids: !0
            });
    null != n &&
        a.Po({
            channelId: t,
            command: null,
            section: null
        });
}
function L(e, t) {
    if (null == t.options || 0 === t.options.length) return !1;
    let n = m.zb(e, t);
    return (
        0 !== n.length &&
        (y.bN.withoutNormalizing(e, () => {
            for (let t = n.length - 1; t >= 0; t--) {
                let i = n[t];
                v.Q.textToInline(
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
            let t = y.bN.getFirstText(e);
            if (null == t) return !1;
            let i = t.text.trim();
            t.text !== i &&
                v.Q.textToText(e, i, {
                    anchor: {
                        path: I.u9,
                        offset: 0
                    },
                    focus: {
                        path: I.u9,
                        offset: t.text.length
                    }
                });
        }),
        !0)
    );
}
function x(e, t) {
    if (null == t.options || 1 !== t.options.length || !0 === t.options[0].required || A.has(t.options[0].type) || m.cu(e).length > 0 || null == m.cr(e)) return !1;
    let n = y.bN.getFirstText(e);
    if (null == n) return !1;
    let i = t.options[0],
        r = {
            path: I.u9,
            offset: t.displayName.length + 2
        },
        a = {
            path: I.u9,
            offset: n.text.length
        };
    return (
        !(!n.text.startsWith(''.concat(b.GI).concat(t.displayName, ' ').toLocaleLowerCase()) || y.Jz.equals(r, a)) &&
        (v.Q.textToInline(
            e,
            {
                type: 'applicationCommandOption',
                optionName: i.name,
                optionDisplayName: i.displayName,
                optionType: i.type,
                children: [{ text: n.text.substring(t.displayName.length + 2) }]
            },
            {
                anchor: r,
                focus: a
            }
        ),
        !0)
    );
}
function w(e) {
    let { guildId: t, channelId: n, command: i, activeOption: r, currentOptionValues: s, previousOptionValues: o, validateAll: u, allowEmpty: c } = e;
    if (null == i.options) return !1;
    let f = u ? null : l.Z.getActiveOptionName(n),
        _ = {},
        p = l.Z.getOptionStates(n),
        h = !1;
    for (let e of i.options) {
        var m, g, E;
        let i = p[e.name],
            a = u || (e.name === f && f !== r) || ((null == i ? void 0 : null === (m = i.lastValidationResult) || void 0 === m ? void 0 : m.success) === !1 && (null == s ? void 0 : s[e.name]) !== (null == o ? void 0 : o[e.name])),
            l = {
                hasValue: null != s && e.name in s,
                isActive: e.name === r,
                lastValidationResult: a
                    ? (0, d.f)({
                          option: e,
                          content: null !== (E = null == s ? void 0 : s[e.name]) && void 0 !== E ? E : null,
                          guildId: t,
                          channelId: n,
                          allowEmptyValues: c
                      })
                    : null == i
                      ? void 0
                      : i.lastValidationResult
            };
        (null == i || i.hasValue !== l.hasValue || i.isActive !== l.isActive || (a && (null === (g = i.lastValidationResult) || void 0 === g ? void 0 : g.success) === !1)) && ((_[e.name] = l), (h = !0));
    }
    h && a.g7(n, _);
}
function P(e) {
    let t = m.cr(e);
    if (null == t)
        return {
            command: null,
            commandText: null
        };
    let [n] = t,
        i = n.children[0];
    return y.LC.isText(i)
        ? {
              command: n.command,
              commandText: i.text
          }
        : {
              command: n.command,
              commandText: null
          };
}
function M(e, t) {
    let n = m.cu(e)[0];
    t();
    let i = y.M8.toPoint(e.selection);
    if (null == i || n === m.cu(e)[0]) return;
    let { command: r, commandText: a } = P(e);
    !(null == r || null == a || a.endsWith(' ')) &&
        y.Jz.equals(i, {
            path: I.u9,
            offset: r.displayName.length + 1
        }) &&
        v.Q.insertText(e, ' ');
}
function k(e, t) {
    if (!e.startsWith('/')) return null;
    let n = (0, f.hV)(t, e.substring(1));
    if (!n.hasSpaceTerminator) return null;
    let { commands: i, sections: a } = o.VB(
        {
            channel: t,
            type: 'channel'
        },
        r.yU.CHAT,
        n.text
    );
    if (0 === i.length) return null;
    let s = n.text.trim(),
        l = s + ' ',
        c = i.filter((e) => e.inputType !== u.iw.PLACEHOLDER && (e.displayName === s || e.displayName.startsWith(l)));
    if (1 === c.length && c[0].displayName === s) {
        let e = c[0],
            t = a.find((t) => {
                var n;
                return (null === (n = t.application) || void 0 === n ? void 0 : n.id) === e.applicationId;
            });
        return {
            command: e,
            section: t
        };
    }
    return null;
}
function U(e, t, n) {
    var i, a, s, o;
    let l = null === (a = e.activeCommand) || void 0 === a ? void 0 : null === (i = a.options) || void 0 === i ? void 0 : i.find((e) => e.name === n),
        u = e.initialValues[n];
    if (null == l || null == u) return null;
    if (null != l.choices) return null === (o = l.choices.find((e) => e.value === u.value)) || void 0 === o ? void 0 : o.displayName;
    let c = null === (s = u.value) || void 0 === s ? void 0 : s.toString();
    return l.type === r.jw.CHANNEL || (l.type === r.jw.MENTIONABLE && null != _.Z.getChannel(c)) ? '<#'.concat(c, '>\t') : l.type === r.jw.USER || (l.type === r.jw.MENTIONABLE && null != h.default.getUser(c)) ? '<@'.concat(c, '>') : l.type === r.jw.ROLE || (l.type === r.jw.MENTIONABLE && null != p.Z.getRole(t.guild_id, null != c ? c : T.lds)) ? '<@&'.concat(c, '>') : c;
}
