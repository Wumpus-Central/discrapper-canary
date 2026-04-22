e.exports = (function () {
    "use strict";
    var e,
        t,
        n,
        r,
        i,
        s,
        a,
        o,
        l = /\r\n?/g,
        u = /\t/g,
        d = /\f/g,
        c = function (e) {
            return e.replace(l, "\n").replace(d, "").replace(u, "    ");
        },
        _ = function (e, t) {
            var n = e || {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n;
        },
        f = function (e, t) {
            var n,
                r = Object.keys(e).filter(function (t) {
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
            r.sort(function (t, n) {
                var r = e[t],
                    i = e[n],
                    s = r.order,
                    a = i.order;
                if (s !== a) return s - a;
                var o = +!r.quality,
                    l = +!i.quality;
                return o !== l ? o - l : t < n ? -1 : 1 * !!(t > n);
            });
            for (var i = new Map(), s = [], a = 0; a < r.length; a++) {
                var o = r[a],
                    l = e[o].requiredFirstCharacters;
                null == l
                    ? s.push(o)
                    : l.map((e) => {
                          let t = e.charCodeAt(0);
                          i.has(t) || i.set(t, []), i.get(t).push(o);
                      });
            }
            var u = function (t, a) {
                    var o = [];
                    n = a = a || n;
                    var l = (a._parseDepth ?? 0) + 1;
                    if (l > 1e3) return t && o.push({ type: "text", content: t }), o;
                    for (n = a = Object.assign({}, a, { _parseDepth: l }); t; ) {
                        for (
                            var d = null, c = null, _ = null, f = -1e5, E = 1e5, h = [i.get(t.charCodeAt(0)), s], p = 0;
                            p < h.length;
                            p++
                        ) {
                            var m = h[p];
                            if (null != m)
                                for (var g = 0; g < m.length; g++) {
                                    var A = m[g],
                                        I = e[A],
                                        T = I.order;
                                    if (T > E) break;
                                    var S = null == a.prevCapture ? "" : a.prevCapture[0],
                                        y = I.match(t, a, S);
                                    if (y) {
                                        var N = I.quality ? I.quality(y, a, S) : 0;
                                        (T < E || N > f) && ((d = A), (c = I), (_ = y), (f = N), (E = T));
                                    }
                                }
                        }
                        if (null == c || null == _)
                            throw Error(
                                "Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" +
                                    r[r.length - 1] +
                                    "'. It seems to not match the following source:\n" +
                                    t,
                            );
                        if (_.index)
                            throw Error(
                                "`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?",
                            );
                        var O = c.parse(_, u, a);
                        Array.isArray(O)
                            ? Array.prototype.push.apply(o, O)
                            : (null == O.type && (O.type = d), o.push(O)),
                            (a.prevCapture = _),
                            (t = t.substring(a.prevCapture[0].length));
                    }
                    return o;
                },
                d = function (e, r) {
                    return (
                        (n = _(r, t)).inline || n.disableAutoBlockNewlines || (e += "\n\n"),
                        (n.prevCapture = null),
                        u(c(e), n)
                    );
                };
            return (u.rules = e), (d.rules = e), d;
        },
        E = function (e) {
            var t = function (t, n) {
                return n.inline ? e.exec(t) : null;
            };
            return (t.regex = e), t;
        },
        h = function (e) {
            var t = function (t, n) {
                return n.inline ? null : e.exec(t);
            };
            return (t.regex = e), t;
        },
        p = function (e) {
            var t = function (t, n) {
                return e.exec(t);
            };
            return (t.regex = e), t;
        },
        m = ("function" == typeof Symbol && Symbol.for && Symbol.for("react.transitional.element")) || 60103,
        g = function (e, t, n) {
            return { $$typeof: m, type: e, key: null == t ? void 0 : t, ref: null, props: n, _owner: null };
        },
        A = function (e, t, n, r) {
            r = void 0 === r || r;
            var i = "";
            for (var s in (n = n || {})) {
                var a = n[s];
                Object.prototype.hasOwnProperty.call(n, s) && a && (i += " " + N(s) + '="' + N(a) + '"');
            }
            var o = "<" + e + i + ">";
            return r ? o + t + "</" + e + ">" : o;
        },
        I = {},
        T = function (e) {
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
        S = /[<>&"']/g,
        y = { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;", "`": "&#96;" },
        N = function (e) {
            return String(e).replace(S, function (e) {
                return y[e];
            });
        },
        O = /\\([^0-9A-Za-z\s])/g,
        R = function (e) {
            return e.replace(O, "$1");
        },
        v = function (e, t, n) {
            var r = n.inline || !1;
            n.inline = !0;
            var i = e(t, n);
            return (n.inline = r), i;
        },
        C = function (e, t, n) {
            return { content: v(t, e[1], n) };
        },
        b = function () {
            return {};
        },
        D = "(?:[*+-]|\\d+\\.)",
        L = "( *)(" + D + ") +",
        w = RegExp("^" + L),
        M = RegExp(L + "[^\\n]*(?:\\n(?!\\1" + D + " )[^\\n]*)*(\n|$)", "gm"),
        P = /\n{2,}$/,
        U = /^ (?= *`)|(` *) $/g,
        k = / *\n+$/,
        x = RegExp("^( *)(" + D + ") [\\s\\S]+?(?:\n{2,}(?! )(?!\\1" + D + " )\\n*|\\s*\n*$)"),
        G = /(?:^|\n)( *)$/,
        V =
            ((e = /^ *\| *| *\| *$/g),
            (t = / *$/),
            (n = /^ *-+: *$/),
            (r = /^ *:-+: *$/),
            (i = /^ *:-+ *$/),
            (s = function (e) {
                return n.test(e) ? "right" : r.test(e) ? "center" : i.test(e) ? "left" : null;
            }),
            (a = function (e, n, r, i) {
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
            }),
            {
                parseTable: (o = function (t) {
                    return function (n, r, i) {
                        i.inline = !0;
                        var o,
                            l,
                            u = a(n[1], r, i, t),
                            d = ((o = n[2]), t && (o = o.replace(e, "")), o.trim().split("|").map(s)),
                            c =
                                ((l = n[3]),
                                l
                                    .trim()
                                    .split("\n")
                                    .map(function (e) {
                                        return a(e, r, i, t);
                                    }));
                        return (i.inline = !1), { type: "table", header: u, align: d, cells: c };
                    };
                })(!0),
                parseNpTable: o(!1),
                TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
                NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
            }),
        F = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",
        B = "\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*",
        H = /mailto:/i,
        Y = function (e, t, n) {
            var r = (e[2] || e[1]).replace(/\s+/g, " ").toLowerCase();
            if (t._defs && t._defs[r]) {
                var i = t._defs[r];
                (n.target = i.target), (n.title = i.title);
            }
            return (t._refs = t._refs || {}), (t._refs[r] = t._refs[r] || []), t._refs[r].push(n), n;
        },
        W = !1;
    try {
        RegExp("(?<=a)"), RegExp("(?<!a)"), (W = !1);
    } catch (e) {}
    var j = 0,
        K = {
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
                order: j++,
                match: h(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return { level: e[1].length, content: v(t, e[2].trim(), n) };
                },
                react: function (e, t, n) {
                    return g("h" + e.level, n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return A("h" + e.level, t(e.content, n));
                },
            },
            nptable: { order: j++, match: h(V.NPTABLE_REGEX), parse: V.parseNpTable, react: null, html: null },
            lheading: {
                order: j++,
                match: h(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return { type: "heading", level: "=" === e[2] ? 1 : 2, content: v(t, e[1], n) };
                },
                react: null,
                html: null,
            },
            hr: {
                order: j++,
                match: h(/^( *[-*_]){3,} *(?:\n *)+\n/),
                parse: b,
                react: function (e, t, n) {
                    return g("hr", n.key, I);
                },
                html: function (e, t, n) {
                    return "<hr>";
                },
            },
            codeBlock: {
                order: j++,
                match: h(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return { lang: void 0, content: e[0].replace(/^    /gm, "").replace(/\n+$/, "") };
                },
                react: function (e, t, n) {
                    var r = e.lang ? "markdown-code-" + e.lang : void 0;
                    return g("pre", n.key, { children: g("code", null, { className: r, children: e.content }) });
                },
                html: function (e, t, n) {
                    var r = e.lang ? "markdown-code-" + e.lang : void 0,
                        i = A("code", N(e.content), { class: r });
                    return A("pre", i);
                },
            },
            fence: {
                order: j++,
                match: h(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return { type: "codeBlock", lang: e[2] || void 0, content: e[3] };
                },
                react: null,
                html: null,
            },
            blockQuote: {
                order: j++,
                match: h(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
                parse: function (e, t, n) {
                    return { content: t(e[0].replace(/^ *> ?/gm, ""), n) };
                },
                react: function (e, t, n) {
                    return g("blockquote", n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return A("blockquote", t(e.content, n));
                },
            },
            list: {
                order: j++,
                match: function (e, t) {
                    var n = null == t.prevCapture ? "" : t.prevCapture[0],
                        r = G.exec(n),
                        i = t._list || !t.inline;
                    return r && i ? ((e = r[1] + e), x.exec(e)) : null;
                },
                parse: function (e, t, n) {
                    var r = e[2],
                        i = r.length > 1,
                        s = i ? +r : void 0,
                        a = e[0].replace(P, "\n").match(M),
                        o = !1;
                    return {
                        ordered: i,
                        start: s,
                        items: a.map(function (e, r) {
                            var i,
                                s = w.exec(e),
                                l = RegExp("^ {1," + (s ? s[0].length : 0) + "}", "gm"),
                                u = e.replace(l, "").replace(w, ""),
                                d = r === a.length - 1,
                                c = -1 !== u.indexOf("\n\n") || (d && o);
                            o = c;
                            var _ = n.inline,
                                f = n._list;
                            (n._list = !0),
                                c
                                    ? ((n.inline = !1), (i = u.replace(k, "\n\n")))
                                    : ((n.inline = !0), (i = u.replace(k, "")));
                            var E = t(i, n);
                            return (n.inline = _), (n._list = f), E;
                        }),
                    };
                },
                react: function (e, t, n) {
                    return g(e.ordered ? "ol" : "ul", n.key, {
                        start: e.start,
                        children: e.items.map(function (e, r) {
                            return g("li", "" + r, { children: t(e, n) });
                        }),
                    });
                },
                html: function (e, t, n) {
                    var r = e.items
                        .map(function (e) {
                            return A("li", t(e, n));
                        })
                        .join("");
                    return A(e.ordered ? "ol" : "ul", r, { start: e.start });
                },
            },
            def: {
                order: j++,
                match: h(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),
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
                order: j++,
                match: h(V.TABLE_REGEX),
                parse: V.parseTable,
                react: function (e, t, n) {
                    var r = function (t) {
                            return null == e.align[t] ? {} : { textAlign: e.align[t] };
                        },
                        i = e.header.map(function (e, i) {
                            return g("th", "" + i, { style: r(i), scope: "col", children: t(e, n) });
                        }),
                        s = e.cells.map(function (e, i) {
                            return g("tr", "" + i, {
                                children: e.map(function (e, i) {
                                    return g("td", "" + i, { style: r(i), children: t(e, n) });
                                }),
                            });
                        });
                    return g("table", n.key, {
                        children: [
                            g("thead", "thead", { children: g("tr", null, { children: i }) }),
                            g("tbody", "tbody", { children: s }),
                        ],
                    });
                },
                html: function (e, t, n) {
                    var r = function (t) {
                            return null == e.align[t] ? "" : "text-align:" + e.align[t] + ";";
                        },
                        i = e.header
                            .map(function (e, i) {
                                return A("th", t(e, n), { style: r(i), scope: "col" });
                            })
                            .join(""),
                        s = e.cells
                            .map(function (e) {
                                var i = e
                                    .map(function (e, i) {
                                        return A("td", t(e, n), { style: r(i) });
                                    })
                                    .join("");
                                return A("tr", i);
                            })
                            .join(""),
                        a = A("thead", A("tr", i)),
                        o = A("tbody", s);
                    return A("table", a + o);
                },
            },
            newline: {
                order: j++,
                requiredFirstCharacters: ["\n"],
                match: h(/^(?:\n *)*\n/),
                parse: b,
                react: function (e, t, n) {
                    return "\n";
                },
                html: function (e, t, n) {
                    return "\n";
                },
            },
            paragraph: {
                order: j++,
                match: h(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
                parse: C,
                react: function (e, t, n) {
                    return g("div", n.key, { className: "paragraph", children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return A("div", t(e.content, n), { class: "paragraph" });
                },
            },
            escape: {
                order: j++,
                requiredFirstCharacters: ["\\"],
                match: E(/^\\([^0-9A-Za-z\s])/),
                parse: function (e, t, n) {
                    return { type: "text", content: e[1] };
                },
                react: null,
                html: null,
            },
            tableSeparator: {
                order: j++,
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
                order: j++,
                requiredFirstCharacters: ["<"],
                match: E(/^<([^: >]+:\/[^ >]+)>/),
                parse: function (e, t, n) {
                    return { type: "link", content: [{ type: "text", content: e[1] }], target: e[1] };
                },
                react: null,
                html: null,
            },
            mailto: {
                order: j++,
                match: E(/^<([^ >]+@[^ >]+)>/),
                parse: function (e, t, n) {
                    var r = e[1],
                        i = e[1];
                    return (
                        H.test(i) || (i = "mailto:" + i),
                        { type: "link", content: [{ type: "text", content: r }], target: i }
                    );
                },
                react: null,
                html: null,
            },
            url: {
                order: j++,
                requiredFirstCharacters: ["h"],
                match: E(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
                parse: function (e, t, n) {
                    return { type: "link", content: [{ type: "text", content: e[1] }], target: e[1], title: void 0 };
                },
                react: null,
                html: null,
            },
            link: {
                order: j++,
                requiredFirstCharacters: ["["],
                match: E(RegExp("^\\[(" + F + ")\\]\\(" + B + "\\)")),
                parse: function (e, t, n) {
                    return { content: t(e[1], n), target: R(e[2]), title: e[3] };
                },
                react: function (e, t, n) {
                    return g("a", n.key, { href: T(e.target), title: e.title, children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    var r = { href: T(e.target), title: e.title };
                    return A("a", t(e.content, n), r);
                },
            },
            image: {
                order: j++,
                match: E(RegExp("^!\\[(" + F + ")\\]\\(" + B + "\\)")),
                parse: function (e, t, n) {
                    return { alt: e[1], target: R(e[2]), title: e[3] };
                },
                react: function (e, t, n) {
                    return g("img", n.key, { src: T(e.target), alt: e.alt, title: e.title });
                },
                html: function (e, t, n) {
                    return A("img", "", { src: T(e.target), alt: e.alt, title: e.title }, !1);
                },
            },
            reflink: {
                order: j++,
                match: E(RegExp("^\\[(" + F + ")\\]\\s*\\[([^\\]]*)\\]")),
                parse: function (e, t, n) {
                    return Y(e, n, { type: "link", content: t(e[1], n) });
                },
                react: null,
                html: null,
            },
            refimage: {
                order: j++,
                match: E(RegExp("^!\\[(" + F + ")\\]\\s*\\[([^\\]]*)\\]")),
                parse: function (e, t, n) {
                    return Y(e, n, { type: "image", alt: e[1] });
                },
                react: null,
                html: null,
            },
            em: {
                order: j,
                match: E(
                    RegExp(
                        (W
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
                    return g("em", n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return A("em", t(e.content, n));
                },
            },
            strong: {
                order: j,
                requiredFirstCharacters: ["*"],
                match: E(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),
                quality: function (e) {
                    return e[0].length + 0.1;
                },
                parse: C,
                react: function (e, t, n) {
                    return g("strong", n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return A("strong", t(e.content, n));
                },
            },
            u: {
                order: j++,
                requiredFirstCharacters: ["_"],
                match: E(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),
                quality: function (e) {
                    return e[0].length;
                },
                parse: C,
                react: function (e, t, n) {
                    return g("u", n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return A("u", t(e.content, n));
                },
            },
            del: {
                order: j++,
                requiredFirstCharacters: ["~"],
                match: E(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/),
                parse: C,
                react: function (e, t, n) {
                    return g("del", n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return A("del", t(e.content, n));
                },
            },
            inlineCode: {
                order: j++,
                requiredFirstCharacters: ["`"],
                match: E(/^(`+)([\s\S]*?[^`])\1(?!`)/),
                parse: function (e, t, n) {
                    return { content: e[2].replace(U, "$1") };
                },
                react: function (e, t, n) {
                    return g("code", n.key, { children: e.content });
                },
                html: function (e, t, n) {
                    return A("code", N(e.content));
                },
            },
            br: {
                order: j++,
                requiredFirstCharacters: [" "],
                match: p(/^ {2,}\n/),
                parse: b,
                react: function (e, t, n) {
                    return g("br", n.key, I);
                },
                html: function (e, t, n) {
                    return "<br>";
                },
            },
            text: {
                order: j++,
                match: p(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),
                parse: function (e, t, n) {
                    return { content: e[0] };
                },
                react: function (e, t, n) {
                    return e.content;
                },
                html: function (e, t, n) {
                    return N(e.content);
                },
            },
        },
        $ = function (e, t, n) {
            if (!t)
                throw Error(
                    "simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`",
                );
            var r,
                i = (e.Array || K.Array)[t];
            if (!i)
                throw Error(
                    "simple-markdown: outputFor: to join nodes of type `" +
                        t +
                        "` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.",
                );
            var s = function (n, a) {
                return ((r = a = a || r), Array.isArray(n)) ? i(n, s, a) : e[n.type][t](n, s, a);
            };
            return function (e, t) {
                return s(e, (r = _(t, n)));
            };
        },
        z = f(K),
        q = function (e, t) {
            return ((t = t || {}).inline = !1), z(e, t);
        },
        X = function (e, t) {
            var n = P.test(e);
            return ((t = t || {}).inline = !n), z(e, t);
        },
        Q = $(K, "react"),
        J = $(K, "html"),
        Z = function (e, t) {
            return Q(q(e, t), t);
        };
    return {
        defaultRules: K,
        parserFor: f,
        outputFor: $,
        inlineRegex: E,
        blockRegex: h,
        anyScopeRegex: p,
        parseInline: v,
        parseBlock: function (e, t, n) {
            var r = n.inline || !1;
            n.inline = !1;
            var i = e(t + "\n\n", n);
            return (n.inline = r), i;
        },
        markdownToReact: Z,
        markdownToHtml: function (e, t) {
            return J(q(e, t), t);
        },
        ReactMarkdown: function (e) {
            var t = {};
            for (var n in e) "source" !== n && Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.children = Z(e.source)), g("div", null, t);
        },
        defaultBlockParse: q,
        defaultInlineParse: function (e, t) {
            return ((t = t || {}).inline = !0), z(e, t);
        },
        defaultImplicitParse: X,
        defaultReactOutput: Q,
        defaultHtmlOutput: J,
        preprocess: c,
        sanitizeText: N,
        sanitizeUrl: T,
        unescapeUrl: R,
        htmlTag: A,
        reactElement: g,
        defaultRawParse: z,
        ruleOutput: function (e, t) {
            return (
                !t &&
                    "u" > typeof console &&
                    console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument."),
                function (n, r, i) {
                    return e[n.type][t](n, r, i);
                }
            );
        },
        reactFor: function (e) {
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
        htmlFor: function (e) {
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
        defaultParse: function () {
            return (
                "u" > typeof console && console.warn("defaultParse is deprecated, please use `defaultImplicitParse`"),
                X.apply(null, arguments)
            );
        },
        defaultOutput: function () {
            return (
                "u" > typeof console && console.warn("defaultOutput is deprecated, please use `defaultReactOutput`"),
                Q.apply(null, arguments)
            );
        },
    };
})();
