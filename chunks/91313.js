n.d(t, {
    HZ: () => h,
    IB: () => E,
    cr: () => p,
    cu: () => m,
    lk: () => v,
    tM: () => g,
    xi: () => y,
    zb: () => I
}),
    n(653041),
    n(47120);
var i = n(911969),
    r = n(555573),
    a = n(998698),
    s = n(509716),
    o = n(703558),
    l = n(117530),
    u = n(752305),
    c = n(925994),
    d = n(887490),
    f = n(42530);
let _ = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;
function p(e) {
    let t = d.bN.richValue(e)[0];
    return null == t || 'applicationCommand' !== t.type ? null : [t, f.YD];
}
function h(e) {
    var t, n;
    if (null == e.selection) return null;
    let i =
        null !==
            (t = d.bN.above(e, {
                at: e.selection.focus,
                match: (e) => d.aj.isType(e, 'applicationCommandOption')
            })) && void 0 !== t
            ? t
            : null;
    return null != i || d.M8.isCollapsed(e.selection)
        ? i
        : null !==
                (n = d.bN.above(e, {
                    at: e.selection.anchor,
                    match: (e) => d.aj.isType(e, 'applicationCommandOption')
                })) && void 0 !== n
          ? n
          : null;
}
function m(e) {
    let t = p(e),
        n = [],
        i = null == t ? void 0 : t[0].children;
    if (null != i) for (let e of i) d.aj.isType(e, 'applicationCommandOption') && n.push(e.optionName);
    return n;
}
function g(e, t, n) {
    let i = {};
    if (null == t.options) return {};
    let r = p(e),
        a = Object.fromEntries(t.options.map((e) => [e.name, e])),
        s = null == r ? void 0 : r[0].children;
    if (null != s) {
        for (let t of s)
            if (d.aj.isType(t, 'applicationCommandOption')) {
                let r = a[t.optionName];
                null != r && (i[t.optionName] = E(e, r, t, n));
            }
    }
    return i;
}
function E(e, t, n, r) {
    let a = n.children.map((n) => {
        if (t.type === i.jw.ATTACHMENT) {
            let e = l.Z.getUpload(r, t.name, o.d.SlashCommand);
            if (null != e) {
                var a;
                return {
                    type: 'text',
                    text: null !== (a = e.filename) && void 0 !== a ? a : ''
                };
            }
        }
        if (d.LC.isText(n))
            return {
                type: 'text',
                text: n.text
            };
        if (d.bN.isVoid(e, n)) {
            let e = (0, u.VI)(n);
            if (null != e) return e;
        }
        return {
            type: 'text',
            text: (0, c.sg)(n, { mode: 'raw' })
        };
    });
    if (t.type !== i.jw.STRING) {
        for (; a.length > 0 && 'text' === a[0].type && '' === a[0].text.trim(); ) a.shift();
        for (; a.length > 0 && 'text' === a[a.length - 1].type && '' === a[a.length - 1].text.trim(); ) a.pop();
    }
    return a;
}
function v(e, t, n, i, a) {
    if (null == e.options) return {};
    let o = Object.fromEntries(
        e.options.map((e) => {
            var r;
            return [
                e.name,
                s.f({
                    option: e,
                    content: null !== (r = i[e.name]) && void 0 !== r ? r : null,
                    guildId: t,
                    channelId: n,
                    allowEmptyValues: a
                })
            ];
        })
    );
    return r.VP(n, o), o;
}
function y(e, t, n, i, o) {
    var l;
    let [u] = i,
        c = a.Z.getActiveCommand(n),
        d = null == c ? void 0 : null === (l = c.options) || void 0 === l ? void 0 : l.find((e) => e.name === u.optionName);
    if (null == d) return;
    let f = E(e, d, u, n),
        _ = s.f({
            option: d,
            content: f,
            guildId: t,
            channelId: n,
            allowEmptyValues: o
        });
    return r.g7(n, { [u.optionName]: { lastValidationResult: _ } }), _;
}
function I(e, t) {
    if (null == t.options || 0 === t.options.length) return [];
    let n = d.bN.richValue(e),
        i = [],
        r = new Set(m(e)),
        a = {},
        s = new Set();
    for (let e of t.options) (a[e.displayName] = e), r.has(e.name) || s.add(e.displayName);
    let o = null;
    for (let t = 0; t < n.length; t++) {
        let r = n[t];
        if ('line' === r.type || 'applicationCommand' === r.type)
            for (let u = 0; u < r.children.length; u++) {
                let f;
                let p = r.children[u],
                    h = [t, u];
                if (d.aj.isType(p, 'applicationCommandOption')) {
                    if (null != o) {
                        var l;
                        (o.valueRange.focus = null !== (l = d.bN.before(e, h)) && void 0 !== l ? l : d.bN.start(e, [])),
                            (o.text = (0, c.sk)(n, {
                                mode: 'raw',
                                range: o.valueRange
                            }).trim()),
                            i.push(o),
                            (o = null);
                    }
                    continue;
                }
                if (d.LC.isText(p))
                    for (_.lastIndex = 0; null != (f = _.exec(p.text)); ) {
                        if (0 !== f.index && null == p.text.charAt(f.index - 1).match(/(\t|\s)/)) continue;
                        let e = f[1];
                        if (!s.has(e)) continue;
                        s.delete(e);
                        let t = a[e];
                        if (null == t) continue;
                        let r = {
                                path: h,
                                offset: f.index
                            },
                            l = {
                                path: h,
                                offset: r.offset + f[0].length
                            },
                            u = {
                                path: h,
                                offset: l.offset
                            },
                            d = {
                                name: t.name,
                                displayName: t.displayName,
                                type: t.type,
                                keyRange: {
                                    anchor: r,
                                    focus: l
                                },
                                valueRange: {
                                    anchor: u,
                                    focus: u
                                },
                                text: ''
                            };
                        null != o &&
                            ((o.valueRange.focus = d.keyRange.anchor),
                            (o.text = (0, c.sk)(n, {
                                mode: 'raw',
                                range: o.valueRange
                            }).trim()),
                            i.push(o)),
                            (o = d);
                    }
            }
    }
    return (
        null != o &&
            ((o.valueRange.focus = d.bN.end(e, [])),
            (o.text = (0, c.sk)(n, {
                mode: 'raw',
                range: o.valueRange
            }).trim()),
            i.push(o)),
        i
    );
}
