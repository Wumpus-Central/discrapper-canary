Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.FormatBuilder = void 0),
    (t.bindFormatValuesWithBuilder = l),
    (t.bindFormatValues = c);
let r = n(927882),
    i = n(689474);
function a(e) {
    return "$" === e[0];
}
class o {
    constructor(e) {
        this.context = e;
    }
}
t.FormatBuilder = o;
class s extends Error {
    constructor(e, t, n) {
        super(`No value for variable '${e}' was provided for the localized message '${t}'`),
            (this.variableName = e),
            (this.originalMessage = t),
            (this.nodeType = n);
    }
}
function l(e) {
    var t;
    let {
        builder: n,
        originalMessage: o,
        nodes: u,
        locales: d,
        values: f,
        dataFormatters: p,
        formatConfig: _,
        currentPluralValue: m,
        keyPrefix: h,
    } = e;
    if (1 === u.length && "string" == typeof u[0]) return void n.pushLiteralText(u[0]);
    for (let e = 0; e < u.length; e++) {
        let g = u[e];
        if ("string" == typeof g) {
            n.pushLiteralText(g);
            continue;
        }
        let E = g[0];
        if (E === i.FormatJsNodeType.Pound) {
            if ("number" == typeof m) {
                let e = p.formatNumber(m);
                n.pushLiteralText(e);
            }
            continue;
        }
        let b = g[1];
        if (!(b in f) && !a(b)) throw new s(b, o, E);
        let y = f[b];
        switch (E) {
            case i.FormatJsNodeType.Argument:
                "object" == typeof y || "function" == typeof y ? n.pushObject(y) : n.pushLiteralText(String(y));
                break;
            case i.FormatJsNodeType.Date: {
                let e = g[2],
                    t = e in _.date ? _.date[e] : null != e ? (0, r.parseDateTimeSkeleton)(e) : void 0;
                n.pushLiteralText(p.formatDate(y, t));
                break;
            }
            case i.FormatJsNodeType.Time: {
                let e = g[2],
                    t = e in _.time ? _.time[e] : null != e ? (0, r.parseDateTimeSkeleton)(e) : void 0;
                n.pushLiteralText(p.formatTime(y, t));
                break;
            }
            case i.FormatJsNodeType.Number: {
                let e = g[2],
                    i =
                        e in _.number
                            ? _.number[e]
                            : null != e
                              ? (0, r.parseNumberSkeleton)((0, r.parseNumberSkeletonFromString)(e))
                              : void 0,
                    a = "number" != typeof y ? y : y * (null != (t = null == i ? void 0 : i.scale) ? t : 1);
                n.pushLiteralText(p.formatNumber(a, i));
                break;
            }
            case i.FormatJsNodeType.Tag: {
                let t = g[2],
                    r = g[3],
                    i = c({
                        Builder: n.constructor,
                        nodes: t,
                        locales: d,
                        dataFormatters: p,
                        formatConfig: _,
                        values: f,
                        currentPluralValue: m,
                        keyPrefix: `${h}.${e}`,
                    }),
                    o =
                        null != r
                            ? c({
                                  Builder: n.constructor,
                                  nodes: r,
                                  locales: d,
                                  dataFormatters: p,
                                  formatConfig: _,
                                  values: f,
                                  currentPluralValue: m,
                                  keyPrefix: `${h}.${e}-control`,
                              })
                            : [];
                if (a(b)) n.pushRichTextTag(b, i, o);
                else {
                    if ("function" != typeof y)
                        throw `expected a function type for a Tag formatting value, ${b}. got ${typeof y}: ${y}`;
                    let t = y(i, `${h}.${e}`);
                    for (let e of (t = Array.isArray(t) ? t : [t]))
                        "string" == typeof e ? n.pushLiteralText(e) : n.pushObject(e);
                }
                break;
            }
            case i.FormatJsNodeType.Select: {
                let t = y,
                    r = g[2],
                    i = t in r ? r[t] : r.other;
                if (null == i)
                    throw `${t} is not a known option for select value ${b}. Valid options are ${Object.keys(r).join(", ")}`;
                l({
                    builder: n,
                    nodes: i,
                    locales: d,
                    dataFormatters: p,
                    formatConfig: _,
                    values: f,
                    keyPrefix: `${h}.${e}`,
                });
                break;
            }
            case i.FormatJsNodeType.Plural: {
                let t = g[2],
                    r = g[3],
                    i = g[4],
                    a = (() => {
                        var e;
                        let n = `=${y}`;
                        return n in t
                            ? t[n]
                            : null != (e = t[p.getPluralRules({ type: i }).select(y - (null != r ? r : 0))])
                              ? e
                              : t.other;
                    })();
                if (null == a)
                    throw `${y} is not a known option for plural value ${b}. Valid options are ${Object.keys(t).join(", ")}`;
                l({
                    builder: n,
                    nodes: a,
                    locales: d,
                    dataFormatters: p,
                    formatConfig: _,
                    values: f,
                    currentPluralValue: y - (null != r ? r : 0),
                    keyPrefix: `${h}.${e}`,
                });
            }
        }
    }
}
function c(e) {
    let {
            Builder: t,
            originalMessage: n,
            nodes: r,
            locales: i,
            dataFormatters: a,
            formatConfig: o,
            values: s,
            currentPluralValue: c,
            keyPrefix: u,
        } = e,
        d = new t({ keyPrefix: u });
    return (
        "string" == typeof r
            ? d.pushLiteralText(r)
            : l({
                  builder: d,
                  originalMessage: n,
                  nodes: r,
                  locales: i,
                  dataFormatters: a,
                  formatConfig: o,
                  values: s,
                  currentPluralValue: c,
                  keyPrefix: u,
              }),
        d.finish()
    );
}
