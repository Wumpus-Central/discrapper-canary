!(function (t) {
    e.exports = t();
})(function () {
    "use strict";
    var e = /\r\n?/g,
        t = /\t/g,
        n = /\f/g,
        r = function (r) {
            return r.replace(e, "\n").replace(n, "").replace(t, "    ");
        },
        i = function (e, t) {
            var n = e || {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n;
        },
        s = 1e3,
        a = function (e, t) {
            var n,
                a = Object.keys(e).filter(function (t) {
                    var n = e[t];
                    if (null == n || null == n.match) return !1;
                    var r = n.order;
                    return (
                        ("number" != typeof r || !isFinite(r)) &&
                            "u" > typeof console &&
                            console.warn("simple-markdown: Invalid order for rule `" + t + "`: " + String(r)),
                        !0
                    );
                });
            a.sort(function (t, n) {
                var r = e[t],
                    i = e[n],
                    s = r.order,
                    a = i.order;
                if (s !== a) return s - a;
                var o = +!r.quality,
                    l = +!i.quality;
                return o !== l ? o - l : t < n ? -1 : 1 * !!(t > n);
            });
            for (var o = new Map(), l = [], u = 0; u < a.length; u++) {
                var c = a[u],
                    d = e[c].requiredFirstCharacters;
                null == d
                    ? l.push(c)
                    : d.map((e) => {
                          let t = e.charCodeAt(0);
                          o.has(t) || o.set(t, []), o.get(t).push(c);
                      });
            }
            var _ = function (t, r) {
                    var i = [];
                    n = r = r || n;
                    var u = (r._parseDepth ?? 0) + 1;
                    if (u > s) return t && i.push({ type: "text", content: t }), i;
                    for (n = r = Object.assign({}, r, { _parseDepth: u }); t; ) {
                        for (
                            var c = null, d = null, f = null, p = -1e5, h = 1e5, m = [o.get(t.charCodeAt(0)), l], E = 0;
                            E < m.length;
                            E++
                        ) {
                            var g = m[E];
                            if (null != g)
                                for (var A = 0; A < g.length; A++) {
                                    var I = g[A],
                                        T = e[I],
                                        S = T.order;
                                    if (S > h) break;
                                    var y = null == r.prevCapture ? "" : r.prevCapture[0],
                                        v = T.match(t, r, y);
                                    if (v) {
                                        var N = T.quality ? T.quality(v, r, y) : 0;
                                        (S < h || N > p) && ((c = I), (d = T), (f = v), (p = N), (h = S));
                                    }
                                }
                        }
                        if (null == d || null == f)
                            throw Error(
                                "Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" +
                                    a[a.length - 1] +
                                    "'. It seems to not match the following source:\n" +
                                    t,
                            );
                        if (f.index)
                            throw Error(
                                "`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?",
                            );
                        var C = d.parse(f, _, r);
                        Array.isArray(C)
                            ? Array.prototype.push.apply(i, C)
                            : (null == C.type && (C.type = c), i.push(C)),
                            (r.prevCapture = f),
                            (t = t.substring(r.prevCapture[0].length));
                    }
                    return i;
                },
                f = function (e, s) {
                    return (
                        (n = i(s, t)).inline || n.disableAutoBlockNewlines || (e += "\n\n"),
                        (n.prevCapture = null),
                        _(r(e), n)
                    );
                };
            return (_.rules = e), (f.rules = e), f;
        },
        o = function (e) {
            var t = function (t, n) {
                return n.inline ? e.exec(t) : null;
            };
            return (t.regex = e), t;
        },
        l = function (e) {
            var t = function (t, n) {
                return n.inline ? null : e.exec(t);
            };
            return (t.regex = e), t;
        },
        u = function (e) {
            var t = function (t, n) {
                return e.exec(t);
            };
            return (t.regex = e), t;
        },
        c = ("function" == typeof Symbol && Symbol.for && Symbol.for("react.transitional.element")) || 60103,
        d = function (e, t, n) {
            return { $$typeof: c, type: e, key: null == t ? void 0 : t, ref: null, props: n, _owner: null };
        },
        _ = function (e, t, n, r) {
            r = void 0 === r || r;
            var i = "";
            for (var s in (n = n || {})) {
                var a = n[s];
                Object.prototype.hasOwnProperty.call(n, s) && a && (i += " " + E(s) + '="' + E(a) + '"');
            }
            var o = "<" + e + i + ">";
            return r ? o + t + "</" + e + ">" : o;
        },
        f = {},
        p = function (e) {
            if (null == e) return null;
            try {
                var t = new URL(e, "https://localhost").protocol;
                if (0 === t.indexOf("javascript:") || 0 === t.indexOf("vbscript:") || 0 === t.indexOf("data:"))
                    return null;
            } catch (e) {
                return null;
            }
            return e;
        },
        h = /[<>&"']/g,
        m = { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;", "`": "&#96;" },
        E = function (e) {
            return String(e).replace(h, function (e) {
                return m[e];
            });
        },
        g = /\\([^0-9A-Za-z\s])/g,
        A = function (e) {
            return e.replace(g, "$1");
        },
        I = function (e, t, n) {
            var r = n.inline || !1;
            n.inline = !0;
            var i = e(t, n);
            return (n.inline = r), i;
        },
        T = function (e, t, n) {
            var r = n.inline || !1;
            n.inline = !1;
            var i = e(t + "\n\n", n);
            return (n.inline = r), i;
        },
        S = function (e, t, n) {
            return { content: I(t, e[1], n) };
        },
        y = function () {
            return {};
        },
        v = "(?:[*+-]|\\d+\\.)",
        N = "( *)(" + v + ") +",
        C = RegExp("^" + N),
        R = RegExp(N + "[^\\n]*(?:\\n(?!\\1" + v + " )[^\\n]*)*(\n|$)", "gm"),
        O = /\n{2,}$/,
        b = /^ (?= *`)|(` *) $/g,
        D = O,
        L = / *\n+$/,
        w = RegExp("^( *)(" + v + ") [\\s\\S]+?(?:\n{2,}(?! )(?!\\1" + v + " )\\n*|\\s*\n*$)"),
        M = /(?:^|\n)( *)$/,
        P = (function () {
            var e = /^ *\| *| *\| *$/g,
                t = / *$/,
                n = /^ *-+: *$/,
                r = /^ *:-+: *$/,
                i = /^ *:-+ *$/,
                s = function (e) {
                    return n.test(e) ? "right" : r.test(e) ? "center" : i.test(e) ? "left" : null;
                },
                a = function (t, n, r, i) {
                    return i && (t = t.replace(e, "")), t.trim().split("|").map(s);
                },
                o = function (e, n, r, i) {
                    var s = r.inTable;
                    r.inTable = !0;
                    var a = n(e.trim(), r);
                    r.inTable = s;
                    var o = [[]];
                    return (
                        a.forEach(function (e, n) {
                            "tableSeparator" === e.type
                                ? (i && (0 === n || n === a.length - 1)) || o.push([])
                                : ("text" === e.type &&
                                      (null == a[n + 1] || "tableSeparator" === a[n + 1].type) &&
                                      (e.content = e.content.replace(t, "")),
                                  o[o.length - 1].push(e));
                        }),
                        o
                    );
                },
                l = function (e, t, n, r) {
                    return e
                        .trim()
                        .split("\n")
                        .map(function (e) {
                            return o(e, t, n, r);
                        });
                },
                u = function (e) {
                    return function (t, n, r) {
                        r.inline = !0;
                        var i = o(t[1], n, r, e),
                            s = a(t[2], n, r, e),
                            u = l(t[3], n, r, e);
                        return (r.inline = !1), { type: "table", header: i, align: s, cells: u };
                    };
                };
            return {
                parseTable: u(!0),
                parseNpTable: u(!1),
                TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
                NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
            };
        })(),
        x = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",
        k = "\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*",
        U = /mailto:/i,
        G = function (e, t, n) {
            var r = (e[2] || e[1]).replace(/\s+/g, " ").toLowerCase();
            if (t._defs && t._defs[r]) {
                var i = t._defs[r];
                (n.target = i.target), (n.title = i.title);
            }
            return (t._refs = t._refs || {}), (t._refs[r] = t._refs[r] || []), t._refs[r].push(n), n;
        },
        F = !1;
    try {
        RegExp("(?<=a)"), RegExp("(?<!a)"), (F = !1);
    } catch (e) {}
    var V = 0,
        B = {
            Array: {
                react: function (e, t, n) {
                    for (var r = n.key, i = [], s = 0, a = 0; s < e.length; s++, a++) {
                        n.key = "" + s;
                        var o = e[s];
                        if ("text" === o.type)
                            for (
                                o = { type: "text", content: o.content };
                                s + 1 < e.length && "text" === e[s + 1].type;
                                s++
                            )
                                o.content += e[s + 1].content;
                        i.push(t(o, n));
                    }
                    return (n.key = r), i;
                },
                html: function (e, t, n) {
                    for (var r = "", i = 0; i < e.length; i++) {
                        var s = e[i];
                        if ("text" === s.type)
                            for (
                                s = { type: "text", content: s.content };
                                i + 1 < e.length && "text" === e[i + 1].type;
                                i++
                            )
                                s.content += e[i + 1].content;
                        r += t(s, n);
                    }
                    return r;
                },
            },
            heading: {
                order: V++,
                match: l(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return { level: e[1].length, content: I(t, e[2].trim(), n) };
                },
                react: function (e, t, n) {
                    return d("h" + e.level, n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return _("h" + e.level, t(e.content, n));
                },
            },
            nptable: { order: V++, match: l(P.NPTABLE_REGEX), parse: P.parseNpTable, react: null, html: null },
            lheading: {
                order: V++,
                match: l(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return { type: "heading", level: "=" === e[2] ? 1 : 2, content: I(t, e[1], n) };
                },
                react: null,
                html: null,
            },
            hr: {
                order: V++,
                match: l(/^( *[-*_]){3,} *(?:\n *)+\n/),
                parse: y,
                react: function (e, t, n) {
                    return d("hr", n.key, f);
                },
                html: function (e, t, n) {
                    return "<hr>";
                },
            },
            codeBlock: {
                order: V++,
                match: l(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return { lang: void 0, content: e[0].replace(/^    /gm, "").replace(/\n+$/, "") };
                },
                react: function (e, t, n) {
                    var r = e.lang ? "markdown-code-" + e.lang : void 0;
                    return d("pre", n.key, { children: d("code", null, { className: r, children: e.content }) });
                },
                html: function (e, t, n) {
                    var r = e.lang ? "markdown-code-" + e.lang : void 0,
                        i = _("code", E(e.content), { class: r });
                    return _("pre", i);
                },
            },
            fence: {
                order: V++,
                match: l(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return { type: "codeBlock", lang: e[2] || void 0, content: e[3] };
                },
                react: null,
                html: null,
            },
            blockQuote: {
                order: V++,
                match: l(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
                parse: function (e, t, n) {
                    return { content: t(e[0].replace(/^ *> ?/gm, ""), n) };
                },
                react: function (e, t, n) {
                    return d("blockquote", n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return _("blockquote", t(e.content, n));
                },
            },
            list: {
                order: V++,
                match: function (e, t) {
                    var n = null == t.prevCapture ? "" : t.prevCapture[0],
                        r = M.exec(n),
                        i = t._list || !t.inline;
                    return r && i ? ((e = r[1] + e), w.exec(e)) : null;
                },
                parse: function (e, t, n) {
                    var r = e[2],
                        i = r.length > 1,
                        s = i ? +r : void 0,
                        a = e[0].replace(D, "\n").match(R),
                        o = !1;
                    return {
                        ordered: i,
                        start: s,
                        items: a.map(function (e, r) {
                            var i,
                                s = C.exec(e),
                                l = RegExp("^ {1," + (s ? s[0].length : 0) + "}", "gm"),
                                u = e.replace(l, "").replace(C, ""),
                                c = r === a.length - 1,
                                d = -1 !== u.indexOf("\n\n") || (c && o);
                            o = d;
                            var _ = n.inline,
                                f = n._list;
                            (n._list = !0),
                                d
                                    ? ((n.inline = !1), (i = u.replace(L, "\n\n")))
                                    : ((n.inline = !0), (i = u.replace(L, "")));
                            var p = t(i, n);
                            return (n.inline = _), (n._list = f), p;
                        }),
                    };
                },
                react: function (e, t, n) {
                    return d(e.ordered ? "ol" : "ul", n.key, {
                        start: e.start,
                        children: e.items.map(function (e, r) {
                            return d("li", "" + r, { children: t(e, n) });
                        }),
                    });
                },
                html: function (e, t, n) {
                    var r = e.items
                        .map(function (e) {
                            return _("li", t(e, n));
                        })
                        .join("");
                    return _(e.ordered ? "ol" : "ul", r, { start: e.start });
                },
            },
            def: {
                order: V++,
                match: l(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),
                parse: function (e, t, n) {
                    var r = e[1].replace(/\s+/g, " ").toLowerCase(),
                        i = e[2],
                        s = e[3];
                    return (
                        n._refs &&
                            n._refs[r] &&
                            n._refs[r].forEach(function (e) {
                                (e.target = i), (e.title = s);
                            }),
                        (n._defs = n._defs || {}),
                        (n._defs[r] = { target: i, title: s }),
                        { def: r, target: i, title: s }
                    );
                },
                react: function () {
                    return null;
                },
                html: function () {
                    return "";
                },
            },
            table: {
                order: V++,
                match: l(P.TABLE_REGEX),
                parse: P.parseTable,
                react: function (e, t, n) {
                    var r = function (t) {
                            return null == e.align[t] ? {} : { textAlign: e.align[t] };
                        },
                        i = e.header.map(function (e, i) {
                            return d("th", "" + i, { style: r(i), scope: "col", children: t(e, n) });
                        }),
                        s = e.cells.map(function (e, i) {
                            return d("tr", "" + i, {
                                children: e.map(function (e, i) {
                                    return d("td", "" + i, { style: r(i), children: t(e, n) });
                                }),
                            });
                        });
                    return d("table", n.key, {
                        children: [
                            d("thead", "thead", { children: d("tr", null, { children: i }) }),
                            d("tbody", "tbody", { children: s }),
                        ],
                    });
                },
                html: function (e, t, n) {
                    var r = function (t) {
                            return null == e.align[t] ? "" : "text-align:" + e.align[t] + ";";
                        },
                        i = e.header
                            .map(function (e, i) {
                                return _("th", t(e, n), { style: r(i), scope: "col" });
                            })
                            .join(""),
                        s = e.cells
                            .map(function (e) {
                                var i = e
                                    .map(function (e, i) {
                                        return _("td", t(e, n), { style: r(i) });
                                    })
                                    .join("");
                                return _("tr", i);
                            })
                            .join(""),
                        a = _("thead", _("tr", i)),
                        o = _("tbody", s);
                    return _("table", a + o);
                },
            },
            newline: {
                order: V++,
                requiredFirstCharacters: ["\n"],
                match: l(/^(?:\n *)*\n/),
                parse: y,
                react: function (e, t, n) {
                    return "\n";
                },
                html: function (e, t, n) {
                    return "\n";
                },
            },
            paragraph: {
                order: V++,
                match: l(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
                parse: S,
                react: function (e, t, n) {
                    return d("div", n.key, { className: "paragraph", children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    var r = { class: "paragraph" };
                    return _("div", t(e.content, n), r);
                },
            },
            escape: {
                order: V++,
                requiredFirstCharacters: ["\\"],
                match: o(/^\\([^0-9A-Za-z\s])/),
                parse: function (e, t, n) {
                    return { type: "text", content: e[1] };
                },
                react: null,
                html: null,
            },
            tableSeparator: {
                order: V++,
                match: function (e, t) {
                    return t.inTable ? /^ *\| */.exec(e) : null;
                },
                parse: function () {
                    return { type: "tableSeparator" };
                },
                react: function () {
                    return " | ";
                },
                html: function () {
                    return " &vert; ";
                },
            },
            autolink: {
                order: V++,
                requiredFirstCharacters: ["<"],
                match: o(/^<([^: >]+:\/[^ >]+)>/),
                parse: function (e, t, n) {
                    return { type: "link", content: [{ type: "text", content: e[1] }], target: e[1] };
                },
                react: null,
                html: null,
            },
            mailto: {
                order: V++,
                match: o(/^<([^ >]+@[^ >]+)>/),
                parse: function (e, t, n) {
                    var r = e[1],
                        i = e[1];
                    return (
                        U.test(i) || (i = "mailto:" + i),
                        { type: "link", content: [{ type: "text", content: r }], target: i }
                    );
                },
                react: null,
                html: null,
            },
            url: {
                order: V++,
                requiredFirstCharacters: ["h"],
                match: o(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
                parse: function (e, t, n) {
                    return { type: "link", content: [{ type: "text", content: e[1] }], target: e[1], title: void 0 };
                },
                react: null,
                html: null,
            },
            link: {
                order: V++,
                requiredFirstCharacters: ["["],
                match: o(RegExp("^\\[(" + x + ")\\]\\(" + k + "\\)")),
                parse: function (e, t, n) {
                    return { content: t(e[1], n), target: A(e[2]), title: e[3] };
                },
                react: function (e, t, n) {
                    return d("a", n.key, { href: p(e.target), title: e.title, children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    var r = { href: p(e.target), title: e.title };
                    return _("a", t(e.content, n), r);
                },
            },
            image: {
                order: V++,
                match: o(RegExp("^!\\[(" + x + ")\\]\\(" + k + "\\)")),
                parse: function (e, t, n) {
                    return { alt: e[1], target: A(e[2]), title: e[3] };
                },
                react: function (e, t, n) {
                    return d("img", n.key, { src: p(e.target), alt: e.alt, title: e.title });
                },
                html: function (e, t, n) {
                    return _("img", "", { src: p(e.target), alt: e.alt, title: e.title }, !1);
                },
            },
            reflink: {
                order: V++,
                match: o(RegExp("^\\[(" + x + ")\\]\\s*\\[([^\\]]*)\\]")),
                parse: function (e, t, n) {
                    return G(e, n, { type: "link", content: t(e[1], n) });
                },
                react: null,
                html: null,
            },
            refimage: {
                order: V++,
                match: o(RegExp("^!\\[(" + x + ")\\]\\s*\\[([^\\]]*)\\]")),
                parse: function (e, t, n) {
                    return G(e, n, { type: "image", alt: e[1] });
                },
                react: null,
                html: null,
            },
            em: {
                order: V,
                match: o(
                    RegExp(
                        (F
                            ? "^\\b_((?:_[_(]|\\\\[\\s\\S]|(?<!_)\\B_\\B|[^\\\\_])+?)_(?![(])\\b"
                            : "^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b") +
                            "|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)",
                    ),
                ),
                quality: function (e) {
                    return e[0].length + 0.2;
                },
                parse: function (e, t, n) {
                    return { content: t(e[2] || e[1], n) };
                },
                react: function (e, t, n) {
                    return d("em", n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return _("em", t(e.content, n));
                },
            },
            strong: {
                order: V,
                requiredFirstCharacters: ["*"],
                match: o(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),
                quality: function (e) {
                    return e[0].length + 0.1;
                },
                parse: S,
                react: function (e, t, n) {
                    return d("strong", n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return _("strong", t(e.content, n));
                },
            },
            u: {
                order: V++,
                requiredFirstCharacters: ["_"],
                match: o(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),
                quality: function (e) {
                    return e[0].length;
                },
                parse: S,
                react: function (e, t, n) {
                    return d("u", n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return _("u", t(e.content, n));
                },
            },
            del: {
                order: V++,
                requiredFirstCharacters: ["~"],
                match: o(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/),
                parse: S,
                react: function (e, t, n) {
                    return d("del", n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return _("del", t(e.content, n));
                },
            },
            inlineCode: {
                order: V++,
                requiredFirstCharacters: ["`"],
                match: o(/^(`+)([\s\S]*?[^`])\1(?!`)/),
                parse: function (e, t, n) {
                    return { content: e[2].replace(b, "$1") };
                },
                react: function (e, t, n) {
                    return d("code", n.key, { children: e.content });
                },
                html: function (e, t, n) {
                    return _("code", E(e.content));
                },
            },
            br: {
                order: V++,
                requiredFirstCharacters: [" "],
                match: u(/^ {2,}\n/),
                parse: y,
                react: function (e, t, n) {
                    return d("br", n.key, f);
                },
                html: function (e, t, n) {
                    return "<br>";
                },
            },
            text: {
                order: V++,
                match: u(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),
                parse: function (e, t, n) {
                    return { content: e[0] };
                },
                react: function (e, t, n) {
                    return e.content;
                },
                html: function (e, t, n) {
                    return E(e.content);
                },
            },
        },
        H = function (e, t) {
            return (
                !t &&
                    "u" > typeof console &&
                    console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument."),
                function (n, r, i) {
                    return e[n.type][t](n, r, i);
                }
            );
        },
        j = function (e) {
            var t = function (n, r) {
                if (((r = r || {}), !Array.isArray(n))) return e(n, t, r);
                for (var i = r.key, s = [], a = null, o = 0; o < n.length; o++) {
                    r.key = "" + o;
                    var l = t(n[o], r);
                    "string" == typeof l && "string" == typeof a
                        ? ((a += l), (s[s.length - 1] = a))
                        : (s.push(l), (a = l));
                }
                return (r.key = i), s;
            };
            return t;
        },
        Y = function (e) {
            var t = function (n, r) {
                return ((r = r || {}), Array.isArray(n))
                    ? n
                          .map(function (e) {
                              return t(e, r);
                          })
                          .join("")
                    : e(n, t, r);
            };
            return t;
        },
        W = function (e, t, n) {
            if (!t)
                throw Error(
                    "simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`",
                );
            var r,
                s = (e.Array || B.Array)[t];
            if (!s)
                throw Error(
                    "simple-markdown: outputFor: to join nodes of type `" +
                        t +
                        "` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.",
                );
            var a = s,
                o = function (n, i) {
                    return ((r = i = i || r), Array.isArray(n)) ? a(n, o, i) : e[n.type][t](n, o, i);
                };
            return function (e, t) {
                return o(e, (r = i(t, n)));
            };
        },
        K = a(B),
        $ = function (e, t) {
            return ((t = t || {}).inline = !1), K(e, t);
        },
        z = function (e, t) {
            return ((t = t || {}).inline = !0), K(e, t);
        },
        q = function (e, t) {
            var n = O.test(e);
            return ((t = t || {}).inline = !n), K(e, t);
        },
        Z = W(B, "react"),
        X = W(B, "html"),
        Q = function (e, t) {
            return Z($(e, t), t);
        },
        J = function (e) {
            var t = {};
            for (var n in e) "source" !== n && Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.children = Q(e.source)), d("div", null, t);
        };
    return {
        defaultRules: B,
        parserFor: a,
        outputFor: W,
        inlineRegex: o,
        blockRegex: l,
        anyScopeRegex: u,
        parseInline: I,
        parseBlock: T,
        markdownToReact: Q,
        markdownToHtml: function (e, t) {
            return X($(e, t), t);
        },
        ReactMarkdown: J,
        defaultBlockParse: $,
        defaultInlineParse: z,
        defaultImplicitParse: q,
        defaultReactOutput: Z,
        defaultHtmlOutput: X,
        preprocess: r,
        sanitizeText: E,
        sanitizeUrl: p,
        unescapeUrl: A,
        htmlTag: _,
        reactElement: d,
        defaultRawParse: K,
        ruleOutput: H,
        reactFor: j,
        htmlFor: Y,
        defaultParse: function () {
            return (
                "u" > typeof console && console.warn("defaultParse is deprecated, please use `defaultImplicitParse`"),
                q.apply(null, arguments)
            );
        },
        defaultOutput: function () {
            return (
                "u" > typeof console && console.warn("defaultOutput is deprecated, please use `defaultReactOutput`"),
                Z.apply(null, arguments)
            );
        },
    };
});
