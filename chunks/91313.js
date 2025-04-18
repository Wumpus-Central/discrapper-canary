n.d(t, {
    HZ: () => h,
    IB: () => E,
    cr: () => p,
    cu: () => m,
    lk: () => b,
    tM: () => g,
    xi: () => y,
    zb: () => v
}),
    n(413496),
    n(433524),
    n(35282),
    n(539854),
    n(388685),
    n(467055),
    n(781311);
var r = n(911969),
    i = n(555573),
    a = n(998698),
    o = n(509716),
    s = n(703558),
    l = n(117530),
    c = n(752305),
    u = n(925994),
    d = n(887490),
    f = n(42530);
let _ = RegExp('([\\p{L}\\p{N}\\p{sc=Deva}\\p{sc=Thai}_-]+):', 'gu');
function p(e) {
    let t = d.bN.richValue(e)[0];
    return null == t || 'applicationCommand' !== t.type ? null : [t, f.YD];
}
function h(e) {
    var t, n;
    if (null == e.selection) return null;
    let r =
        null !=
        (t = d.bN.above(e, {
            at: e.selection.focus,
            match: (e) => d.aj.isType(e, 'applicationCommandOption')
        }))
            ? t
            : null;
    return null != r || d.M8.isCollapsed(e.selection)
        ? r
        : null !=
            (n = d.bN.above(e, {
                at: e.selection.anchor,
                match: (e) => d.aj.isType(e, 'applicationCommandOption')
            }))
          ? n
          : null;
}
function m(e) {
    let t = p(e),
        n = [],
        r = null == t ? void 0 : t[0].children;
    if (null != r) for (let e of r) d.aj.isType(e, 'applicationCommandOption') && n.push(e.optionName);
    return n;
}
function g(e, t, n) {
    let r = {};
    if (null == t.options) return {};
    let i = p(e),
        a = Object.fromEntries(t.options.map((e) => [e.name, e])),
        o = null == i ? void 0 : i[0].children;
    if (null != o) {
        for (let t of o)
            if (d.aj.isType(t, 'applicationCommandOption')) {
                let i = a[t.optionName];
                null != i && (r[t.optionName] = E(e, i, t, n));
            }
    }
    return r;
}
function E(e, t, n, i) {
    let a = n.children.map((n) => {
        if (t.type === r.jw.ATTACHMENT) {
            let e = l.Z.getUpload(i, t.name, s.d.SlashCommand);
            if (null != e) {
                var a;
                return {
                    type: 'text',
                    text: null != (a = e.filename) ? a : ''
                };
            }
        }
        if (d.LC.isText(n))
            return {
                type: 'text',
                text: n.text
            };
        if (d.bN.isVoid(e, n)) {
            let e = (0, c.VI)(n);
            if (null != e) return e;
        }
        return {
            type: 'text',
            text: (0, u.sg)(n, { mode: 'raw' })
        };
    });
    if (t.type !== r.jw.STRING) {
        for (; a.length > 0 && 'text' === a[0].type && '' === a[0].text.trim(); ) a.shift();
        for (; a.length > 0 && 'text' === a[a.length - 1].type && '' === a[a.length - 1].text.trim(); ) a.pop();
    }
    return a;
}
function b(e, t, n, r, a) {
    if (null == e.options) return {};
    let s = Object.fromEntries(
        e.options.map((e) => {
            var i;
            return [
                e.name,
                o.f({
                    option: e,
                    content: null != (i = r[e.name]) ? i : null,
                    guildId: t,
                    channelId: n,
                    allowEmptyValues: a
                })
            ];
        })
    );
    return i.VP(n, s), s;
}
function y(e, t, n, r, s) {
    var l;
    let [c] = r,
        u = a.Z.getActiveCommand(n),
        d = null == u || null == (l = u.options) ? void 0 : l.find((e) => e.name === c.optionName);
    if (null == d) return;
    let f = E(e, d, c, n),
        _ = o.f({
            option: d,
            content: f,
            guildId: t,
            channelId: n,
            allowEmptyValues: s
        });
    return i.g7(n, { [c.optionName]: { lastValidationResult: _ } }), _;
}
function v(e, t) {
    if (null == t.options || 0 === t.options.length) return [];
    let n = d.bN.richValue(e),
        r = [],
        i = new Set(m(e)),
        a = {},
        o = new Set();
    for (let e of t.options) (a[e.displayName] = e), i.has(e.name) || o.add(e.displayName);
    let s = null;
    for (let t = 0; t < n.length; t++) {
        let i = n[t];
        if ('line' === i.type || 'applicationCommand' === i.type)
            for (let c = 0; c < i.children.length; c++) {
                let f,
                    p = i.children[c],
                    h = [t, c];
                if (d.aj.isType(p, 'applicationCommandOption')) {
                    if (null != s) {
                        var l;
                        (s.valueRange.focus = null != (l = d.bN.before(e, h)) ? l : d.bN.start(e, [])),
                            (s.text = (0, u.sk)(n, {
                                mode: 'raw',
                                range: s.valueRange
                            }).trim()),
                            r.push(s),
                            (s = null);
                    }
                    continue;
                }
                if (d.LC.isText(p))
                    for (_.lastIndex = 0; null != (f = _.exec(p.text)); ) {
                        if (0 !== f.index && null == p.text.charAt(f.index - 1).match(/(\t|\s)/)) continue;
                        let e = f[1];
                        if (!o.has(e)) continue;
                        o.delete(e);
                        let t = a[e];
                        if (null == t) continue;
                        let i = {
                                path: h,
                                offset: f.index
                            },
                            l = {
                                path: h,
                                offset: i.offset + f[0].length
                            },
                            c = {
                                path: h,
                                offset: l.offset
                            },
                            d = {
                                name: t.name,
                                displayName: t.displayName,
                                type: t.type,
                                keyRange: {
                                    anchor: i,
                                    focus: l
                                },
                                valueRange: {
                                    anchor: c,
                                    focus: c
                                },
                                text: ''
                            };
                        null != s &&
                            ((s.valueRange.focus = d.keyRange.anchor),
                            (s.text = (0, u.sk)(n, {
                                mode: 'raw',
                                range: s.valueRange
                            }).trim()),
                            r.push(s)),
                            (s = d);
                    }
            }
    }
    return (
        null != s &&
            ((s.valueRange.focus = d.bN.end(e, [])),
            (s.text = (0, u.sk)(n, {
                mode: 'raw',
                range: s.valueRange
            }).trim()),
            r.push(s)),
        r
    );
}
