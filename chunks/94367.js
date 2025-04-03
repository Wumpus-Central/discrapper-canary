r.d(t, { Z: () => l });
var a = r(37484),
    n = r(527628),
    s = r(665352),
    o = r(798192);
let i = new Set(['<number>', '<percentage>', '<angle>']);
function c(e, t, r, n) {
    return Object.entries(e.coords).map(([e, s], o) => {
        let c,
            l = t.coordGrammar[o],
            u = n[o],
            f = u?.type;
        if (!(c = u.none ? l.find((e) => i.has(e)) : l.find((e) => e == f))) {
            let t = s.name || e;
            throw TypeError(`${f ?? u.raw} not allowed for ${t} in ${r}()`);
        }
        let b = c.range;
        '<percentage>' === f && (b ||= [0, 1]);
        let d = s.range || s.refRange;
        return b && d && (n[o] = a.KK(b, d, n[o])), c;
    });
}
function l(e, { meta: t } = {}) {
    let r = { str: String(e)?.trim() };
    if ((n.Z.run('parse-start', r), r.color)) return r.color;
    if (((r.parsed = a.dL(r.str)), r.parsed)) {
        let e = r.parsed.name;
        if ('color' === e) {
            let e = r.parsed.args.shift(),
                a = e.startsWith('--') ? e.substring(2) : `--${e}`,
                n = [e, a],
                i = r.parsed.rawArgs.indexOf('/') > 0 ? r.parsed.args.pop() : 1;
            for (let a of s.Z.all) {
                let s = a.getFormat('color');
                if (s && (n.includes(s.id) || s.ids?.filter((e) => n.includes(e)).length)) {
                    let n,
                        l = Object.keys(a.coords).map((e, t) => r.parsed.args[t] || 0);
                    return (
                        s.coordGrammar && (n = c(a, s, 'color', l)),
                        t &&
                            Object.assign(t, {
                                formatId: 'color',
                                types: n
                            }),
                        s.id.startsWith('--') && !e.startsWith('--') && o.Z.warn(`${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${e}).`),
                        e.startsWith('--') && !s.id.startsWith('--') && o.Z.warn(`${a.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${e}).`),
                        {
                            spaceId: a.id,
                            coords: l,
                            alpha: i
                        }
                    );
                }
            }
            let l = '',
                u = e in s.Z.registry ? e : a;
            if (u in s.Z.registry) {
                let e = s.Z.registry[u].formats?.color?.id;
                e && (l = `Did you mean color(${e})?`);
            }
            throw TypeError(`Cannot parse color(${e}). ` + (l || 'Missing a plugin?'));
        }
        for (let n of s.Z.all) {
            let s = n.getFormat(e);
            if (s && 'function' === s.type) {
                let o,
                    i = 1;
                (s.lastAlpha || a.Z$(r.parsed.args).alpha) && (i = r.parsed.args.pop());
                let l = r.parsed.args;
                return (
                    s.coordGrammar && (o = c(n, s, e, l)),
                    t &&
                        Object.assign(t, {
                            formatId: s.name,
                            types: o
                        }),
                    {
                        spaceId: n.id,
                        coords: l,
                        alpha: i
                    }
                );
            }
        }
    } else
        for (let e of s.Z.all)
            for (let a in e.formats) {
                let n = e.formats[a];
                if ('custom' !== n.type || (n.test && !n.test(r.str))) continue;
                let s = n.parse(r.str);
                if (s) return (s.alpha ??= 1), t && (t.formatId = a), s;
            }
    throw TypeError(`Could not parse ${e} as a color. Missing a plugin?`);
}
