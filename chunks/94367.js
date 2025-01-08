r.d(t, {
    Z: function () {
        return u;
    }
});
var a = r(37484),
    n = r(527628),
    o = r(665352),
    s = r(798192);
let i = new Set(['<number>', '<percentage>', '<angle>']);
function c(e, t, r, n) {
    return Object.entries(e.coords).map(([e, o], s) => {
        let c,
            u = t.coordGrammar[s],
            l = n[s],
            f = l?.type;
        if (!(c = l.none ? u.find((e) => i.has(e)) : u.find((e) => e == f))) {
            let t = o.name || e;
            throw TypeError(`${f ?? l.raw} not allowed for ${t} in ${r}()`);
        }
        let b = c.range;
        '<percentage>' === f && (b ||= [0, 1]);
        let h = o.range || o.refRange;
        return b && h && (n[s] = a.KK(b, h, n[s])), c;
    });
}
function u(e, { meta: t } = {}) {
    let r = { str: String(e)?.trim() };
    if ((n.Z.run('parse-start', r), r.color)) return r.color;
    if (((r.parsed = a.dL(r.str)), r.parsed)) {
        let e = r.parsed.name;
        if ('color' === e) {
            let e = r.parsed.args.shift(),
                a = e.startsWith('--') ? e.substring(2) : `--${e}`,
                n = [e, a],
                i = r.parsed.rawArgs.indexOf('/') > 0 ? r.parsed.args.pop() : 1;
            for (let a of o.Z.all) {
                let o = a.getFormat('color');
                if (o && (n.includes(o.id) || o.ids?.filter((e) => n.includes(e)).length)) {
                    let n;
                    let u = Object.keys(a.coords).map((e, t) => r.parsed.args[t] || 0);
                    return (
                        o.coordGrammar && (n = c(a, o, 'color', u)),
                        t &&
                            Object.assign(t, {
                                formatId: 'color',
                                types: n
                            }),
                        o.id.startsWith('--') && !e.startsWith('--') && s.Z.warn(`${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${o.id}) instead of color(${e}).`),
                        e.startsWith('--') && !o.id.startsWith('--') && s.Z.warn(`${a.name} is a standard space and supported in the CSS spec. Use color(${o.id}) instead of prefixed color(${e}).`),
                        {
                            spaceId: a.id,
                            coords: u,
                            alpha: i
                        }
                    );
                }
            }
            let u = '',
                l = e in o.Z.registry ? e : a;
            if (l in o.Z.registry) {
                let e = o.Z.registry[l].formats?.color?.id;
                e && (u = `Did you mean color(${e})?`);
            }
            throw TypeError(`Cannot parse color(${e}). ` + (u || 'Missing a plugin?'));
        }
        for (let n of o.Z.all) {
            let o = n.getFormat(e);
            if (o && 'function' === o.type) {
                let s,
                    i = 1;
                (o.lastAlpha || a.Z$(r.parsed.args).alpha) && (i = r.parsed.args.pop());
                let u = r.parsed.args;
                return (
                    o.coordGrammar && (s = c(n, o, e, u)),
                    t &&
                        Object.assign(t, {
                            formatId: o.name,
                            types: s
                        }),
                    {
                        spaceId: n.id,
                        coords: u,
                        alpha: i
                    }
                );
            }
        }
    } else
        for (let e of o.Z.all)
            for (let a in e.formats) {
                let n = e.formats[a];
                if ('custom' !== n.type || (n.test && !n.test(r.str))) continue;
                let o = n.parse(r.str);
                if (o) return (o.alpha ??= 1), t && (t.formatId = a), o;
            }
    throw TypeError(`Could not parse ${e} as a color. Missing a plugin?`);
}
