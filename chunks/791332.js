!(function (t, n) {
    e.exports = n();
})(0, function () {
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
        a = 1e3,
        s = function (e, t) {
            var n,
                s = Object.keys(e).filter(function (t) {
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
            s.sort(function (t, n) {
                var r = e[t],
                    i = e[n],
                    a = r.order,
                    s = i.order;
                if (a !== s) return a - s;
                var o = +!r.quality,
                    l = +!i.quality;
                return o !== l ? o - l : t < n ? -1 : 1 * !!(t > n);
            });
            for (var o = new Map(), l = [], u = 0; u < s.length; u++) {
                var c = s[u],
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
                    if (u > a) return t && i.push({ type: "text", content: t }), i;
                    for (n = r = Object.assign({}, r, { _parseDepth: u }); t; ) {
                        for (
                            var c = null, d = null, f = null, h = -1e5, p = 1e5, g = [o.get(t.charCodeAt(0)), l], E = 0;
                            E < g.length;
                            E++
                        ) {
                            var A = g[E];
                            if (null != A)
                                for (var I = 0; I < A.length; I++) {
                                    var T = A[I],
                                        y = e[T],
                                        S = y.order;
                                    if (S > p) break;
                                    var v = null == r.prevCapture ? "" : r.prevCapture[0],
                                        C = y.match(t, r, v);
                                    if (C) {
                                        var b = y.quality ? y.quality(C, r, v) : 0;
                                        (S < p || b > h) && ((c = T), (d = y), (f = C), (h = b), (p = S));
                                    }
                                }
                        }
                        if (null == d || null == f)
                            throw Error(
                                "Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" +
                                    s[s.length - 1] +
                                    "'. It seems to not match the following source:\n" +
                                    t,
                            );
                        if (f.index)
                            throw Error(
                                "`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?",
                            );
                        var N = d.parse(f, _, r);
                        Array.isArray(N)
                            ? Array.prototype.push.apply(i, N)
                            : (null == N.type && (N.type = c), i.push(N)),
                            (r.prevCapture = f),
                            (t = t.substring(r.prevCapture[0].length));
                    }
                    return i;
                },
                f = function (e, a) {
                    return (
                        (n = i(a, t)).inline || n.disableAutoBlockNewlines || (e += "\n\n"),
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
            for (var a in (n = n || {})) {
                var s = n[a];
                Object.prototype.hasOwnProperty.call(n, a) && s && (i += " " + E(a) + '="' + E(s) + '"');
            }
            var o = "<" + e + i + ">";
            return r ? o + t + "</" + e + ">" : o;
        },
        f = {},
        h = function (e) {
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
        p = /[<>&"']/g,
        g = { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;", "`": "&#96;" },
        E = function (e) {
            return String(e).replace(p, function (e) {
                return g[e];
            });
        },
        A = /\\([^0-9A-Za-z\s])/g,
        I = function (e) {
            return e.replace(A, "$1");
        },
        T = function (e, t, n) {
            var r = n.inline || !1;
            n.inline = !0;
            var i = e(t, n);
            return (n.inline = r), i;
        },
        y = function (e, t, n) {
            var r = n.inline || !1;
            n.inline = !1;
            var i = e(t + "\n\n", n);
            return (n.inline = r), i;
        },
        S = function (e, t, n) {
            return { content: T(t, e[1], n) };
        },
        v = function () {
            return {};
        },
        C = "(?:[*+-]|\\d+\\.)",
        b = "( *)(" + C + ") +",
        N = RegExp("^" + b),
        R = RegExp(b + "[^\\n]*(?:\\n(?!\\1" + C + " )[^\\n]*)*(\n|$)", "gm"),
        O = /\n{2,}$/,
        D = /^ (?= *`)|(` *) $/g,
        L = O,
        w = / *\n+$/,
        x = RegExp("^( *)(" + C + ") [\\s\\S]+?(?:\n{2,}(?! )(?!\\1" + C + " )\\n*|\\s*\n*$)"),
        P = /(?:^|\n)( *)$/,
        M = (function () {
            var e = /^ *\| *| *\| *$/g,
                t = / *$/,
                n = /^ *-+: *$/,
                r = /^ *:-+: *$/,
                i = /^ *:-+ *$/,
                a = function (e) {
                    return n.test(e) ? "right" : r.test(e) ? "center" : i.test(e) ? "left" : null;
                },
                s = function (t, n, r, i) {
                    return i && (t = t.replace(e, "")), t.trim().split("|").map(a);
                },
                o = function (e, n, r, i) {
                    var a = r.inTable;
                    r.inTable = !0;
                    var s = n(e.trim(), r);
                    r.inTable = a;
                    var o = [[]];
                    return (
                        s.forEach(function (e, n) {
                            "tableSeparator" === e.type
                                ? (i && (0 === n || n === s.length - 1)) || o.push([])
                                : ("text" === e.type &&
                                      (null == s[n + 1] || "tableSeparator" === s[n + 1].type) &&
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
                            a = s(t[2], n, r, e),
                            u = l(t[3], n, r, e);
                        return (r.inline = !1), { type: "table", header: i, align: a, cells: u };
                    };
                };
            return {
                parseTable: u(!0),
                parseNpTable: u(!1),
                TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
                NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
            };
        })(),
        k = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",
        U = "\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*",
        G = /mailto:/i,
        F = function (e, t, n) {
            var r = (e[2] || e[1]).replace(/\s+/g, " ").toLowerCase();
            if (t._defs && t._defs[r]) {
                var i = t._defs[r];
                (n.target = i.target), (n.title = i.title);
            }
            return (t._refs = t._refs || {}), (t._refs[r] = t._refs[r] || []), t._refs[r].push(n), n;
        },
        V = !1;
    try {
        RegExp("(?<=a)"), RegExp("(?<!a)"), (V = !1);
    } catch (e) {}
    var B = 0,
        j = {
            Array: {
                react: function (e, t, n) {
                    for (var r = n.key, i = [], a = 0, s = 0; a < e.length; a++, s++) {
                        n.key = "" + a;
                        var o = e[a];
                        if ("text" === o.type)
                            for (
                                o = { type: "text", content: o.content };
                                a + 1 < e.length && "text" === e[a + 1].type;
                                a++
                            )
                                o.content += e[a + 1].content;
                        i.push(t(o, n));
                    }
                    return (n.key = r), i;
                },
                html: function (e, t, n) {
                    for (var r = "", i = 0; i < e.length; i++) {
                        var a = e[i];
                        if ("text" === a.type)
                            for (
                                a = { type: "text", content: a.content };
                                i + 1 < e.length && "text" === e[i + 1].type;
                                i++
                            )
                                a.content += e[i + 1].content;
                        r += t(a, n);
                    }
                    return r;
                },
            },
            heading: {
                order: B++,
                match: l(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return { level: e[1].length, content: T(t, e[2].trim(), n) };
                },
                react: function (e, t, n) {
                    return d("h" + e.level, n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return _("h" + e.level, t(e.content, n));
                },
            },
            nptable: { order: B++, match: l(M.NPTABLE_REGEX), parse: M.parseNpTable, react: null, html: null },
            lheading: {
                order: B++,
                match: l(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return { type: "heading", level: "=" === e[2] ? 1 : 2, content: T(t, e[1], n) };
                },
                react: null,
                html: null,
            },
            hr: {
                order: B++,
                match: l(/^( *[-*_]){3,} *(?:\n *)+\n/),
                parse: v,
                react: function (e, t, n) {
                    return d("hr", n.key, f);
                },
                html: function (e, t, n) {
                    return "<hr>";
                },
            },
            codeBlock: {
                order: B++,
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
                order: B++,
                match: l(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return { type: "codeBlock", lang: e[2] || void 0, content: e[3] };
                },
                react: null,
                html: null,
            },
            blockQuote: {
                order: B++,
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
                order: B++,
                match: function (e, t) {
                    var n = null == t.prevCapture ? "" : t.prevCapture[0],
                        r = P.exec(n),
                        i = t._list || !t.inline;
                    return r && i ? ((e = r[1] + e), x.exec(e)) : null;
                },
                parse: function (e, t, n) {
                    var r = e[2],
                        i = r.length > 1,
                        a = i ? +r : void 0,
                        s = e[0].replace(L, "\n").match(R),
                        o = !1;
                    return {
                        ordered: i,
                        start: a,
                        items: s.map(function (e, r) {
                            var i,
                                a = N.exec(e),
                                l = RegExp("^ {1," + (a ? a[0].length : 0) + "}", "gm"),
                                u = e.replace(l, "").replace(N, ""),
                                c = r === s.length - 1,
                                d = -1 !== u.indexOf("\n\n") || (c && o);
                            o = d;
                            var _ = n.inline,
                                f = n._list;
                            (n._list = !0),
                                d
                                    ? ((n.inline = !1), (i = u.replace(w, "\n\n")))
                                    : ((n.inline = !0), (i = u.replace(w, "")));
                            var h = t(i, n);
                            return (n.inline = _), (n._list = f), h;
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
                order: B++,
                match: l(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),
                parse: function (e, t, n) {
                    var r = e[1].replace(/\s+/g, " ").toLowerCase(),
                        i = e[2],
                        a = e[3];
                    return (
                        n._refs &&
                            n._refs[r] &&
                            n._refs[r].forEach(function (e) {
                                (e.target = i), (e.title = a);
                            }),
                        (n._defs = n._defs || {}),
                        (n._defs[r] = { target: i, title: a }),
                        { def: r, target: i, title: a }
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
                order: B++,
                match: l(M.TABLE_REGEX),
                parse: M.parseTable,
                react: function (e, t, n) {
                    var r = function (t) {
                            return null == e.align[t] ? {} : { textAlign: e.align[t] };
                        },
                        i = e.header.map(function (e, i) {
                            return d("th", "" + i, { style: r(i), scope: "col", children: t(e, n) });
                        }),
                        a = e.cells.map(function (e, i) {
                            return d("tr", "" + i, {
                                children: e.map(function (e, i) {
                                    return d("td", "" + i, { style: r(i), children: t(e, n) });
                                }),
                            });
                        });
                    return d("table", n.key, {
                        children: [
                            d("thead", "thead", { children: d("tr", null, { children: i }) }),
                            d("tbody", "tbody", { children: a }),
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
                        a = e.cells
                            .map(function (e) {
                                var i = e
                                    .map(function (e, i) {
                                        return _("td", t(e, n), { style: r(i) });
                                    })
                                    .join("");
                                return _("tr", i);
                            })
                            .join(""),
                        s = _("thead", _("tr", i)),
                        o = _("tbody", a);
                    return _("table", s + o);
                },
            },
            newline: {
                order: B++,
                requiredFirstCharacters: ["\n"],
                match: l(/^(?:\n *)*\n/),
                parse: v,
                react: function (e, t, n) {
                    return "\n";
                },
                html: function (e, t, n) {
                    return "\n";
                },
            },
            paragraph: {
                order: B++,
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
                order: B++,
                requiredFirstCharacters: ["\\"],
                match: o(/^\\([^0-9A-Za-z\s])/),
                parse: function (e, t, n) {
                    return { type: "text", content: e[1] };
                },
                react: null,
                html: null,
            },
            tableSeparator: {
                order: B++,
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
                order: B++,
                requiredFirstCharacters: ["<"],
                match: o(/^<([^: >]+:\/[^ >]+)>/),
                parse: function (e, t, n) {
                    return { type: "link", content: [{ type: "text", content: e[1] }], target: e[1] };
                },
                react: null,
                html: null,
            },
            mailto: {
                order: B++,
                match: o(/^<([^ >]+@[^ >]+)>/),
                parse: function (e, t, n) {
                    var r = e[1],
                        i = e[1];
                    return (
                        G.test(i) || (i = "mailto:" + i),
                        { type: "link", content: [{ type: "text", content: r }], target: i }
                    );
                },
                react: null,
                html: null,
            },
            url: {
                order: B++,
                requiredFirstCharacters: ["h"],
                match: o(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
                parse: function (e, t, n) {
                    return { type: "link", content: [{ type: "text", content: e[1] }], target: e[1], title: void 0 };
                },
                react: null,
                html: null,
            },
            link: {
                order: B++,
                requiredFirstCharacters: ["["],
                match: o(RegExp("^\\[(" + k + ")\\]\\(" + U + "\\)")),
                parse: function (e, t, n) {
                    return { content: t(e[1], n), target: I(e[2]), title: e[3] };
                },
                react: function (e, t, n) {
                    return d("a", n.key, { href: h(e.target), title: e.title, children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    var r = { href: h(e.target), title: e.title };
                    return _("a", t(e.content, n), r);
                },
            },
            image: {
                order: B++,
                match: o(RegExp("^!\\[(" + k + ")\\]\\(" + U + "\\)")),
                parse: function (e, t, n) {
                    return { alt: e[1], target: I(e[2]), title: e[3] };
                },
                react: function (e, t, n) {
                    return d("img", n.key, { src: h(e.target), alt: e.alt, title: e.title });
                },
                html: function (e, t, n) {
                    return _("img", "", { src: h(e.target), alt: e.alt, title: e.title }, !1);
                },
            },
            reflink: {
                order: B++,
                match: o(RegExp("^\\[(" + k + ")\\]\\s*\\[([^\\]]*)\\]")),
                parse: function (e, t, n) {
                    return F(e, n, { type: "link", content: t(e[1], n) });
                },
                react: null,
                html: null,
            },
            refimage: {
                order: B++,
                match: o(RegExp("^!\\[(" + k + ")\\]\\s*\\[([^\\]]*)\\]")),
                parse: function (e, t, n) {
                    return F(e, n, { type: "image", alt: e[1] });
                },
                react: null,
                html: null,
            },
            em: {
                order: B,
                match: o(
                    RegExp(
                        (V
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
                order: B,
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
                order: B++,
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
                order: B++,
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
                order: B++,
                requiredFirstCharacters: ["`"],
                match: o(/^(`+)([\s\S]*?[^`])\1(?!`)/),
                parse: function (e, t, n) {
                    return { content: e[2].replace(D, "$1") };
                },
                react: function (e, t, n) {
                    return d("code", n.key, { children: e.content });
                },
                html: function (e, t, n) {
                    return _("code", E(e.content));
                },
            },
            br: {
                order: B++,
                requiredFirstCharacters: [" "],
                match: u(/^ {2,}\n/),
                parse: v,
                react: function (e, t, n) {
                    return d("br", n.key, f);
                },
                html: function (e, t, n) {
                    return "<br>";
                },
            },
            text: {
                order: B++,
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
        Y = function (e) {
            var t = function (n, r) {
                if (((r = r || {}), !Array.isArray(n))) return e(n, t, r);
                for (var i = r.key, a = [], s = null, o = 0; o < n.length; o++) {
                    r.key = "" + o;
                    var l = t(n[o], r);
                    "string" == typeof l && "string" == typeof s
                        ? ((s += l), (a[a.length - 1] = s))
                        : (a.push(l), (s = l));
                }
                return (r.key = i), a;
            };
            return t;
        },
        W = function (e) {
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
        K = function (e, t, n) {
            if (!t)
                throw Error(
                    "simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`",
                );
            var r,
                a = (e.Array || j.Array)[t];
            if (!a)
                throw Error(
                    "simple-markdown: outputFor: to join nodes of type `" +
                        t +
                        "` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.",
                );
            var s = a,
                o = function (n, i) {
                    return ((r = i = i || r), Array.isArray(n)) ? s(n, o, i) : e[n.type][t](n, o, i);
                };
            return function (e, t) {
                return o(e, (r = i(t, n)));
            };
        },
        $ = s(j),
        z = function (e, t) {
            return ((t = t || {}).inline = !1), $(e, t);
        },
        q = function (e, t) {
            return ((t = t || {}).inline = !0), $(e, t);
        },
        X = function (e, t) {
            var n = O.test(e);
            return ((t = t || {}).inline = !n), $(e, t);
        },
        Z = K(j, "react"),
        Q = K(j, "html"),
        J = function (e, t) {
            return Z(z(e, t), t);
        },
        ee = function (e) {
            var t = {};
            for (var n in e) "source" !== n && Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.children = J(e.source)), d("div", null, t);
        };
    return {
        defaultRules: j,
        parserFor: s,
        outputFor: K,
        inlineRegex: o,
        blockRegex: l,
        anyScopeRegex: u,
        parseInline: T,
        parseBlock: y,
        markdownToReact: J,
        markdownToHtml: function (e, t) {
            return Q(z(e, t), t);
        },
        ReactMarkdown: ee,
        defaultBlockParse: z,
        defaultInlineParse: q,
        defaultImplicitParse: X,
        defaultReactOutput: Z,
        defaultHtmlOutput: Q,
        preprocess: r,
        sanitizeText: E,
        sanitizeUrl: h,
        unescapeUrl: I,
        htmlTag: _,
        reactElement: d,
        defaultRawParse: $,
        ruleOutput: H,
        reactFor: Y,
        htmlFor: W,
        defaultParse: function () {
            return (
                "u" > typeof console && console.warn("defaultParse is deprecated, please use `defaultImplicitParse`"),
                X.apply(null, arguments)
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
