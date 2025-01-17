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
var s = r(757143);
var o = r(733860);
var l = r(373793),
    u = r(911969),
    c = r(555573),
    d = r(456007),
    f = r(10718),
    _ = r(998698),
    h = r(895924),
    p = r(581364),
    m = r(509716),
    g = r(826298),
    E = r(592125),
    v = r(430824),
    I = r(594174),
    T = r(91313),
    b = r(53529),
    y = r(925994),
    S = r(436660),
    A = r(887490),
    N = r(42530),
    C = r(981631),
    R = r(665692);
let O = new Set(['applicationCommandOption']),
    D = new Set([u.jw.ATTACHMENT]),
    L = new Set(['line', 'applicationCommand']);
function x(e, n, r, i) {
    let { insertData: a, isInline: s, isVoid: o, onChange: l, deleteBackward: u, deleteForward: m, deleteFragment: g } = e;
    (e.insertData = (r) => {
        if (null != n && A.bN.isEditorEmpty(e) && r.types.includes('application/x-discord-interaction-data')) {
            let e = JSON.parse(r.getData('application/x-discord-interaction-data')),
                { commandKey: a, interactionOptions: o } = (0, p.XA)(e),
                { application: l, command: u } = f.Xq(n, a);
            if (null != u) {
                var i, s;
                let e =
                    null != l
                        ? {
                              type: h.Qi.APPLICATION,
                              id: l.id,
                              icon: l.icon,
                              name: null !== (s = null === (i = l.bot) || void 0 === i ? void 0 : i.username) && void 0 !== s ? s : l.name,
                              application: l
                          }
                        : null;
                return (
                    c.Po({
                        channelId: n.id,
                        command: u,
                        section: e,
                        location: h.Vh.PASTE,
                        initialValues: (0, d.Dw)(u, null != o ? o : [])
                    }),
                    null
                );
            }
        }
        return a(r);
    }),
        (e.isInline = (e) => !!O.has(e.type) || s(e)),
        (e.isVoid = (e) => !!('applicationCommandOption' === e.type && D.has(e.optionType)) || o(e)),
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
        I = null,
        T = null,
        y = null;
    return (
        (e.onChange = () => {
            if (null != n) {
                let a = _.Z.getState(n.id),
                    s = f.Hf(n);
                if (A.bN.richValue(e) !== E || !A.Ew.equals(e.selection, v) || a.activeCommand !== I || null == y || s.some((e, n) => y[n] !== e)) {
                    let o = b.T.withMergedEntry(e, () => {
                        var s;
                        return w({
                            editor: e,
                            storeCommandState: a,
                            channel: n,
                            canUseCommands: r,
                            canOnlyUseTextCommands: i,
                            commandChanged: (null === (s = a.activeCommand) || void 0 === s ? void 0 : s.id) !== (null == I ? void 0 : I.id),
                            previousOptionValues: T
                        });
                    });
                    if (null != o) {
                        let n = b.T.currentEntry(e);
                        null != n && (n.commandId = o.commandId), (T = o.optionValues);
                    } else T = null;
                    (E = A.bN.richValue(e)), (v = e.selection), (I = a.activeCommand), (y = s);
                }
            }
            l();
        }),
        e
    );
}
function w(e) {
    var n, r;
    let { editor: i, storeCommandState: a, channel: s, canUseCommands: o, canOnlyUseTextCommands: u, commandChanged: d, previousOptionValues: f } = e,
        { command: _, commandText: p } = G(i),
        m = a.activeCommand;
    if ((!o && (null == m ? void 0 : null === (n = m.integration_types) || void 0 === n ? void 0 : n.includes(l.Y.GUILD_INSTALL))) || (u && (null == m ? void 0 : m.inputType) !== h.iw.BUILT_IN_TEXT && (null == m ? void 0 : m.inputType) !== h.iw.BUILT_IN_INTEGRATION)) return null != _ && M(i, s.id, m, !0), null;
    if (null != _) {
        if (A.bN.isEditorEmpty(i) || null == m) return M(i, s.id, m, !1), null;
        let e = ''.concat(R.GI).concat(_.displayName);
        if (null == p || !p.startsWith(e) || (0 === T.cu(i).length && (p.length < e.length + 1 || ' ' !== p[e.length]))) return M(i, s.id, m, !0), null;
    } else {
        if (null != m && d) {
            let e = P(i, s, a),
                n = T.tM(i, m, s.id);
            return (
                B({
                    guildId: s.guild_id,
                    channelId: s.id,
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
                    channelId: s.id,
                    command: null,
                    section: null
                }),
                null
            );
        let e = A.bN.richValue(i)[0],
            n = e.children[0];
        if (L.has(e.type) && A.LC.isText(n)) {
            let e = F(n.text, s);
            if (null != e)
                return (
                    c.Po({
                        channelId: s.id,
                        command: e.command,
                        section: e.section
                    }),
                    null
                );
        }
    }
    if (null != m && null != _) {
        !k(i, m) && U(i, m);
        let e = T.tM(i, m, s.id),
            n = A.bN.above(i, {
                match: (e) => A.bN.isInline(i, e) && 'applicationCommandOption' === e.type,
                mode: 'lowest'
            }),
            a = null !== (r = null == n ? void 0 : n[0].optionName) && void 0 !== r ? r : null;
        return (
            B({
                guildId: s.guild_id,
                channelId: s.id,
                command: m,
                activeOption: a,
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
function P(e, n, r) {
    var i, a, s, o, l;
    let u;
    let { initialValues: c, activeCommand: d } = r;
    if (null == d) return null;
    let f = (null !== (s = null === (i = d.options) || void 0 === i ? void 0 : i.length) && void 0 !== s ? s : 0) > 0 ? T.zb(e, d) : null,
        _ = (0, y.sk)(A.bN.richValue(e), {
            mode: 'raw',
            range: {
                anchor: A.bN.start(e, []),
                focus: null !== (o = null == f ? void 0 : null === (a = f[0]) || void 0 === a ? void 0 : a.keyRange.anchor) && void 0 !== o ? o : A.bN.end(e, [])
            }
        }),
        h = '',
        p = _.toLocaleLowerCase(),
        m = ''.concat(R.GI).concat(d.displayName, ' ').toLocaleLowerCase(),
        g = ''.concat(R.GI).concat(d.untranslatedName, ' ').toLocaleLowerCase();
    p.startsWith(m) ? (h = _.substring(m.length).trim()) : p.startsWith(g) && (h = _.substring(g.length).trim());
    let E = [],
        v = null,
        I = null;
    if (null != d.options) {
        let e = new Set();
        if (null != f)
            for (let i of f) {
                e.add(i.name);
                let a = null !== (l = V(r, n, i.name)) && void 0 !== l ? l : i.text,
                    s = {
                        type: 'applicationCommandOption',
                        optionName: i.name,
                        optionDisplayName: i.displayName,
                        optionType: i.type,
                        children: [{ text: a }]
                    };
                E.push(s), 0 === i.text.length && null == v && (v = s);
            }
        for (let i of d.options)
            if (!e.has(i.name) && (i.required || null != c[i.name])) {
                let e, a;
                h.length > 0 && !D.has(i.type) ? ((e = h), (h = '')) : (e = null != (a = V(r, n, i.name)) ? a : '');
                let s = {
                    type: 'applicationCommandOption',
                    optionName: i.name,
                    optionDisplayName: i.displayName,
                    optionType: i.type,
                    children: [{ text: e }]
                };
                E.push(s), 0 === e.length && null == v && (v = s), null == a && (I = s);
            }
    }
    (u = h.length > 0 ? ''.concat(R.GI).concat(d.displayName, ' ').concat(h.replace(/\r|\n/g, ' ')) : 0 === E.length ? ''.concat(R.GI).concat(d.displayName, ' ') : ''.concat(R.GI).concat(d.displayName)), E.unshift({ text: u });
    let b = {
        type: 'applicationCommand',
        children: E,
        command: {
            id: d.id,
            name: d.untranslatedName,
            displayName: d.displayName
        }
    };
    A.bN.withoutNormalizing(e, () => {
        for (let [, n] of (S.Q.insertNodes(e, [b], { at: N.YD }), A.bN.blocks(e).reverse()))
            A.C0.isAfter(n, N.YD) &&
                S.Q.removeNodes(e, {
                    at: n,
                    voids: !0
                });
    });
    let C = null;
    return null != v ? (S.Q.selectCommandOption(e, v.optionName), (C = v.optionName)) : null != I ? (S.Q.selectCommandOption(e, I.optionName, !1), (C = I.optionName)) : S.Q.resetSelectionToEnd(e), null == I && U(e, d), C;
}
function M(e, n, r, i) {
    let [a] = A.bN.blocks(e)[0],
        s = (i ? (0, y.sg)(a, { mode: 'plain' }).trimEnd() : '').split('\n').map((e) => ({
            type: 'line',
            children: [{ text: e }]
        })),
        o = [s.length - 1];
    for (let [, n] of (S.Q.insertNodes(e, s, { at: N.YD }), A.bN.blocks(e).reverse()))
        A.C0.isAfter(n, o) &&
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
    let r = T.zb(e, n);
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
                        path: N.u9,
                        offset: 0
                    },
                    focus: {
                        path: N.u9,
                        offset: n.text.length
                    }
                });
        }),
        !0)
    );
}
function U(e, n) {
    if (null == n.options || 1 !== n.options.length || !0 === n.options[0].required || D.has(n.options[0].type) || T.cu(e).length > 0 || null == T.cr(e)) return !1;
    let r = A.bN.getFirstText(e);
    if (null == r) return !1;
    let i = n.options[0],
        a = {
            path: N.u9,
            offset: n.displayName.length + 2
        },
        s = {
            path: N.u9,
            offset: r.text.length
        };
    return (
        !(!r.text.startsWith(''.concat(R.GI).concat(n.displayName, ' ').toLocaleLowerCase()) || A.Jz.equals(a, s)) &&
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
                focus: s
            }
        ),
        !0)
    );
}
function B(e) {
    let { guildId: n, channelId: r, command: i, activeOption: a, currentOptionValues: s, previousOptionValues: o, validateAll: l, allowEmpty: u } = e;
    if (null == i.options) return !1;
    let d = l ? null : _.Z.getActiveOptionName(r),
        f = {},
        h = _.Z.getOptionStates(r),
        p = !1;
    for (let e of i.options) {
        var g, E, v;
        let i = h[e.name],
            c = l || (e.name === d && d !== a) || ((null == i ? void 0 : null === (g = i.lastValidationResult) || void 0 === g ? void 0 : g.success) === !1 && (null == s ? void 0 : s[e.name]) !== (null == o ? void 0 : o[e.name])),
            _ = {
                hasValue: null != s && e.name in s,
                isActive: e.name === a,
                lastValidationResult: c
                    ? (0, m.f)({
                          option: e,
                          content: null !== (v = null == s ? void 0 : s[e.name]) && void 0 !== v ? v : null,
                          guildId: n,
                          channelId: r,
                          allowEmptyValues: u
                      })
                    : null == i
                      ? void 0
                      : i.lastValidationResult
            };
        (null == i || i.hasValue !== _.hasValue || i.isActive !== _.isActive || (c && (null === (E = i.lastValidationResult) || void 0 === E ? void 0 : E.success) === !1)) && ((f[e.name] = _), (p = !0));
    }
    p && c.g7(r, f);
}
function G(e) {
    let n = T.cr(e);
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
    let r = T.cu(e)[0];
    n();
    let i = A.M8.toPoint(e.selection);
    if (null == i || r === T.cu(e)[0]) return;
    let { command: a, commandText: s } = G(e);
    if (
        !(null == a || null == s || s.endsWith(' ')) &&
        !!A.Jz.equals(i, {
            path: N.u9,
            offset: a.displayName.length + 1
        })
    )
        S.Q.insertText(e, ' ');
}
function F(e, n) {
    if (!e.startsWith('/')) return null;
    let r = (0, g.hV)(n, e.substring(1));
    if (!r.hasSpaceTerminator) return null;
    let { commands: i, sections: a } = f.VB(n, u.yU.CHAT, r.text);
    if (0 === i.length) return null;
    let s = r.text.trim(),
        o = s + ' ',
        l = i.filter((e) => e.inputType !== h.iw.PLACEHOLDER && (e.displayName === s || e.displayName.startsWith(o)));
    if (1 === l.length && l[0].displayName === s) {
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
    var i, a, s, o;
    let l = null === (a = e.activeCommand) || void 0 === a ? void 0 : null === (i = a.options) || void 0 === i ? void 0 : i.find((e) => e.name === r),
        c = e.initialValues[r];
    if (null == l || null == c) return null;
    if (null != l.choices) return null === (o = l.choices.find((e) => e.value === c.value)) || void 0 === o ? void 0 : o.displayName;
    let d = null === (s = c.value) || void 0 === s ? void 0 : s.toString();
    return l.type === u.jw.CHANNEL || (l.type === u.jw.MENTIONABLE && null != E.Z.getChannel(d)) ? '<#'.concat(d, '>\t') : l.type === u.jw.USER || (l.type === u.jw.MENTIONABLE && null != I.default.getUser(d)) ? '<@'.concat(d, '>') : l.type === u.jw.ROLE || (l.type === u.jw.MENTIONABLE && null != v.Z.getRole(n.guild_id, null != d ? d : C.lds)) ? '<@&'.concat(d, '>') : d;
}
