t.default = (function () {
    function e(e, t, n, r, i, a) {
        (this.message = e),
            (this.expected = t),
            (this.found = n),
            (this.offset = r),
            (this.line = i),
            (this.column = a),
            (this.name = "SyntaxError");
    }
    function t(t) {
        var n,
            r = arguments.length > 1 ? arguments[1] : {},
            i = {},
            a = { start: ew },
            o = ew,
            s = function (e) {
                return {
                    type: "messageFormatPattern",
                    elements: e,
                };
            },
            l = i,
            c = function (e) {
                var t,
                    n,
                    r,
                    i,
                    a,
                    o = "";
                for (t = 0, r = e.length; t < r; t += 1) for (n = 0, a = (i = e[t]).length; n < a; n += 1) o += i[n];
                return o;
            },
            u = function (e) {
                return {
                    type: "messageTextElement",
                    value: e,
                };
            },
            d = /^[^ \t\n\r,.+={}#]/,
            f = {
                type: "class",
                value: "[^ \\t\\n\\r,.+={}#]",
                description: "[^ \\t\\n\\r,.+={}#]",
            },
            _ = "{",
            p = {
                type: "literal",
                value: "{",
                description: '"{"',
            },
            h = null,
            m = ",",
            g = {
                type: "literal",
                value: ",",
                description: '","',
            },
            E = "}",
            b = {
                type: "literal",
                value: "}",
                description: '"}"',
            },
            y = function (e, t) {
                return {
                    type: "argumentElement",
                    id: e,
                    format: t && t[2],
                };
            },
            O = "number",
            v = {
                type: "literal",
                value: "number",
                description: '"number"',
            },
            I = "date",
            T = {
                type: "literal",
                value: "date",
                description: '"date"',
            },
            S = "time",
            A = {
                type: "literal",
                value: "time",
                description: '"time"',
            },
            C = function (e, t) {
                return {
                    type: e + "Format",
                    style: t && t[2],
                };
            },
            N = "plural",
            R = {
                type: "literal",
                value: "plural",
                description: '"plural"',
            },
            P = function (e) {
                return {
                    type: e.type,
                    ordinal: !1,
                    offset: e.offset || 0,
                    options: e.options,
                };
            },
            w = "selectordinal",
            D = {
                type: "literal",
                value: "selectordinal",
                description: '"selectordinal"',
            },
            x = function (e) {
                return {
                    type: e.type,
                    ordinal: !0,
                    offset: e.offset || 0,
                    options: e.options,
                };
            },
            L = "select",
            M = {
                type: "literal",
                value: "select",
                description: '"select"',
            },
            j = function (e) {
                return {
                    type: "selectFormat",
                    options: e,
                };
            },
            k = "=",
            U = {
                type: "literal",
                value: "=",
                description: '"="',
            },
            G = function (e, t) {
                return {
                    type: "optionalFormatPattern",
                    selector: e,
                    value: t,
                };
            },
            B = "offset:",
            Z = {
                type: "literal",
                value: "offset:",
                description: '"offset:"',
            },
            F = function (e) {
                return e;
            },
            V = function (e, t) {
                return {
                    type: "pluralFormat",
                    offset: e,
                    options: t,
                };
            },
            H = {
                type: "other",
                description: "whitespace",
            },
            Y = /^[ \t\n\r]/,
            W = {
                type: "class",
                value: "[ \\t\\n\\r]",
                description: "[ \\t\\n\\r]",
            },
            K = {
                type: "other",
                description: "optionalWhitespace",
            },
            z = /^[0-9]/,
            q = {
                type: "class",
                value: "[0-9]",
                description: "[0-9]",
            },
            X = /^[0-9a-f]/i,
            Q = {
                type: "class",
                value: "[0-9a-f]i",
                description: "[0-9a-f]i",
            },
            J = "0",
            $ = {
                type: "literal",
                value: "0",
                description: '"0"',
            },
            ee = /^[1-9]/,
            et = {
                type: "class",
                value: "[1-9]",
                description: "[1-9]",
            },
            en = function (e) {
                return parseInt(e, 10);
            },
            er = /^[^{}\\\0-\x1F \t\n\r]/,
            ei = {
                type: "class",
                value: "[^{}\\\\\\0-\\x1F\x7F \\t\\n\\r]",
                description: "[^{}\\\\\\0-\\x1F\x7F \\t\\n\\r]",
            },
            ea = "\\\\",
            eo = {
                type: "literal",
                value: "\\\\",
                description: '"\\\\\\\\"',
            },
            es = function () {
                return "\\";
            },
            el = "\\#",
            ec = {
                type: "literal",
                value: "\\#",
                description: '"\\\\#"',
            },
            eu = function () {
                return "\\#";
            },
            ed = "\\{",
            ef = {
                type: "literal",
                value: "\\{",
                description: '"\\\\{"',
            },
            e_ = function () {
                return "{";
            },
            ep = "\\}",
            eh = {
                type: "literal",
                value: "\\}",
                description: '"\\\\}"',
            },
            em = function () {
                return "}";
            },
            eg = "\\u",
            eE = {
                type: "literal",
                value: "\\u",
                description: '"\\\\u"',
            },
            eb = function (e) {
                return String.fromCharCode(parseInt(e, 16));
            },
            ey = function (e) {
                return e.join("");
            },
            eO = 0,
            ev = 0,
            eI = 0,
            eT = {
                line: 1,
                column: 1,
                seenCR: !1,
            },
            eS = 0,
            eA = [],
            eC = 0;
        if ("startRule" in r) {
            if (!(r.startRule in a)) throw Error("Can't start parsing from rule \"" + r.startRule + '".');
            o = a[r.startRule];
        }
        function eN(e) {
            function n(e, n, r) {
                var i, a;
                for (i = n; i < r; i++)
                    "\n" === (a = t.charAt(i))
                        ? (!e.seenCR && e.line++, (e.column = 1), (e.seenCR = !1))
                        : "\r" === a || "\u2028" === a || "\u2029" === a
                          ? (e.line++, (e.column = 1), (e.seenCR = !0))
                          : (e.column++, (e.seenCR = !1));
            }
            return (
                eI !== e &&
                    (eI > e &&
                        ((eI = 0),
                        (eT = {
                            line: 1,
                            column: 1,
                            seenCR: !1,
                        })),
                    n(eT, eI, e),
                    (eI = e)),
                eT
            );
        }
        function eR(e) {
            eO < eS || (eO > eS && ((eS = eO), (eA = [])), eA.push(e));
        }
        function eP(n, r, i) {
            function a(e) {
                var t = 1;
                for (
                    e.sort(function (e, t) {
                        return e.description < t.description ? -1 : +(e.description > t.description);
                    });
                    t < e.length;
                )
                    e[t - 1] === e[t] ? e.splice(t, 1) : t++;
            }
            function o(e, t) {
                function n(e) {
                    function t(e) {
                        return e.charCodeAt(0).toString(16).toUpperCase();
                    }
                    return e
                        .replace(/\\/g, "\\\\")
                        .replace(/"/g, '\\"')
                        .replace(/\x08/g, "\\b")
                        .replace(/\t/g, "\\t")
                        .replace(/\n/g, "\\n")
                        .replace(/\f/g, "\\f")
                        .replace(/\r/g, "\\r")
                        .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (e) {
                            return "\\x0" + t(e);
                        })
                        .replace(/[\x10-\x1F\x80-\xFF]/g, function (e) {
                            return "\\x" + t(e);
                        })
                        .replace(/[\u0180-\u0FFF]/g, function (e) {
                            return "\\u0" + t(e);
                        })
                        .replace(/[\u1080-\uFFFF]/g, function (e) {
                            return "\\u" + t(e);
                        });
                }
                var r,
                    i = Array(e.length);
                for (r = 0; r < e.length; r++) i[r] = e[r].description;
                return (
                    "Expected " +
                    (e.length > 1 ? i.slice(0, -1).join(", ") + " or " + i[e.length - 1] : i[0]) +
                    " but " +
                    (t ? '"' + n(t) + '"' : "end of input") +
                    " found."
                );
            }
            var s = eN(i),
                l = i < t.length ? t.charAt(i) : null;
            return null !== r && a(r), new e(null !== n ? n : o(r, l), r, l, i, s.line, s.column);
        }
        function ew() {
            return eD();
        }
        function eD() {
            var e, t, n;
            for (e = eO, t = [], n = ex(); n !== i; ) t.push(n), (n = ex());
            return t !== i && ((ev = e), (t = s(t))), (e = t);
        }
        function ex() {
            var e;
            return (e = eM()) === i && (e = ek()), e;
        }
        function eL() {
            var e, n, r, a, o, s;
            if (
                ((e = eO),
                (n = []),
                (r = eO),
                (a = ez()) !== i && (o = e$()) !== i && (s = ez()) !== i ? (r = a = [a, o, s]) : ((eO = r), (r = l)),
                r !== i)
            )
                for (; r !== i; )
                    n.push(r),
                        (r = eO),
                        (a = ez()) !== i && (o = e$()) !== i && (s = ez()) !== i
                            ? (r = a = [a, o, s])
                            : ((eO = r), (r = l));
            else n = l;
            return (
                n !== i && ((ev = e), (n = c(n))),
                (e = n) === i && ((e = eO), (n = eK()) !== i && (n = t.substring(e, eO)), (e = n)),
                e
            );
        }
        function eM() {
            var e, t;
            return (e = eO), (t = eL()) !== i && ((ev = e), (t = u(t))), (e = t);
        }
        function ej() {
            var e, n, r;
            if ((e = eQ()) === i) {
                if (
                    ((e = eO),
                    (n = []),
                    d.test(t.charAt(eO)) ? ((r = t.charAt(eO)), eO++) : ((r = i), 0 === eC && eR(f)),
                    r !== i)
                )
                    for (; r !== i; )
                        n.push(r), d.test(t.charAt(eO)) ? ((r = t.charAt(eO)), eO++) : ((r = i), 0 === eC && eR(f));
                else n = l;
                n !== i && (n = t.substring(e, eO)), (e = n);
            }
            return e;
        }
        function ek() {
            var e, n, r, a, o, s, c;
            return (
                (e = eO),
                123 === t.charCodeAt(eO) ? ((n = _), eO++) : ((n = i), 0 === eC && eR(p)),
                n !== i && ez() !== i && (r = ej()) !== i && ez() !== i
                    ? ((a = eO),
                      44 === t.charCodeAt(eO) ? ((o = m), eO++) : ((o = i), 0 === eC && eR(g)),
                      o !== i && (s = ez()) !== i && (c = eU()) !== i ? (a = o = [o, s, c]) : ((eO = a), (a = l)),
                      a === i && (a = h),
                      a !== i && (o = ez()) !== i
                          ? (125 === t.charCodeAt(eO) ? ((s = E), eO++) : ((s = i), 0 === eC && eR(b)),
                            s !== i ? ((ev = e), (e = n = y(r, a))) : ((eO = e), (e = l)))
                          : ((eO = e), (e = l)))
                    : ((eO = e), (e = l)),
                e
            );
        }
        function eU() {
            var e;
            return (e = eG()) === i && (e = eB()) === i && (e = eZ()) === i && (e = eF()), e;
        }
        function eG() {
            var e, n, r, a, o, s;
            return (
                (e = eO),
                t.substr(eO, 6) === O ? ((n = O), (eO += 6)) : ((n = i), 0 === eC && eR(v)),
                n === i &&
                    (t.substr(eO, 4) === I ? ((n = I), (eO += 4)) : ((n = i), 0 === eC && eR(T)),
                    n === i && (t.substr(eO, 4) === S ? ((n = S), (eO += 4)) : ((n = i), 0 === eC && eR(A)))),
                n !== i && ez() !== i
                    ? ((r = eO),
                      44 === t.charCodeAt(eO) ? ((a = m), eO++) : ((a = i), 0 === eC && eR(g)),
                      a !== i && (o = ez()) !== i && (s = e$()) !== i ? (r = a = [a, o, s]) : ((eO = r), (r = l)),
                      r === i && (r = h),
                      r !== i ? ((ev = e), (e = n = C(n, r))) : ((eO = e), (e = l)))
                    : ((eO = e), (e = l)),
                e
            );
        }
        function eB() {
            var e, n, r, a;
            return (
                (e = eO),
                t.substr(eO, 6) === N ? ((n = N), (eO += 6)) : ((n = i), 0 === eC && eR(R)),
                n !== i && ez() !== i
                    ? (44 === t.charCodeAt(eO) ? ((r = m), eO++) : ((r = i), 0 === eC && eR(g)),
                      r !== i && ez() !== i && (a = eW()) !== i ? ((ev = e), (e = n = P(a))) : ((eO = e), (e = l)))
                    : ((eO = e), (e = l)),
                e
            );
        }
        function eZ() {
            var e, n, r, a;
            return (
                (e = eO),
                t.substr(eO, 13) === w ? ((n = w), (eO += 13)) : ((n = i), 0 === eC && eR(D)),
                n !== i && ez() !== i
                    ? (44 === t.charCodeAt(eO) ? ((r = m), eO++) : ((r = i), 0 === eC && eR(g)),
                      r !== i && ez() !== i && (a = eW()) !== i ? ((ev = e), (e = n = x(a))) : ((eO = e), (e = l)))
                    : ((eO = e), (e = l)),
                e
            );
        }
        function eF() {
            var e, n, r, a, o;
            if (((e = eO), t.substr(eO, 6) === L ? ((n = L), (eO += 6)) : ((n = i), 0 === eC && eR(M)), n !== i))
                if (ez() !== i)
                    if ((44 === t.charCodeAt(eO) ? ((r = m), eO++) : ((r = i), 0 === eC && eR(g)), r !== i))
                        if (ez() !== i) {
                            if (((a = []), (o = eH()) !== i)) for (; o !== i; ) a.push(o), (o = eH());
                            else a = l;
                            a !== i ? ((ev = e), (e = n = j(a))) : ((eO = e), (e = l));
                        } else (eO = e), (e = l);
                    else (eO = e), (e = l);
                else (eO = e), (e = l);
            else (eO = e), (e = l);
            return e;
        }
        function eV() {
            var e, n, r, a;
            return (
                (e = eO),
                (n = eO),
                61 === t.charCodeAt(eO) ? ((r = k), eO++) : ((r = i), 0 === eC && eR(U)),
                r !== i && (a = eQ()) !== i ? (n = r = [r, a]) : ((eO = n), (n = l)),
                n !== i && (n = t.substring(e, eO)),
                (e = n) === i && (e = e$()),
                e
            );
        }
        function eH() {
            var e, n, r, a, o, s;
            return (
                (e = eO),
                (n = ez()) !== i && (r = eV()) !== i && ez() !== i
                    ? (123 === t.charCodeAt(eO) ? ((a = _), eO++) : ((a = i), 0 === eC && eR(p)),
                      a !== i && ez() !== i && (o = eD()) !== i && ez() !== i
                          ? (125 === t.charCodeAt(eO) ? ((s = E), eO++) : ((s = i), 0 === eC && eR(b)),
                            s !== i ? ((ev = e), (e = n = G(r, o))) : ((eO = e), (e = l)))
                          : ((eO = e), (e = l)))
                    : ((eO = e), (e = l)),
                e
            );
        }
        function eY() {
            var e, n, r;
            return (
                (e = eO),
                t.substr(eO, 7) === B ? ((n = B), (eO += 7)) : ((n = i), 0 === eC && eR(Z)),
                n !== i && ez() !== i && (r = eQ()) !== i ? ((ev = e), (e = n = F(r))) : ((eO = e), (e = l)),
                e
            );
        }
        function eW() {
            var e, t, n, r;
            if (((e = eO), (t = eY()) === i && (t = h), t !== i))
                if (ez() !== i) {
                    if (((n = []), (r = eH()) !== i)) for (; r !== i; ) n.push(r), (r = eH());
                    else n = l;
                    n !== i ? ((ev = e), (e = t = V(t, n))) : ((eO = e), (e = l));
                } else (eO = e), (e = l);
            else (eO = e), (e = l);
            return e;
        }
        function eK() {
            var e, n;
            if (
                (eC++,
                (e = []),
                Y.test(t.charAt(eO)) ? ((n = t.charAt(eO)), eO++) : ((n = i), 0 === eC && eR(W)),
                n !== i)
            )
                for (; n !== i; )
                    e.push(n), Y.test(t.charAt(eO)) ? ((n = t.charAt(eO)), eO++) : ((n = i), 0 === eC && eR(W));
            else e = l;
            return eC--, e === i && ((n = i), 0 === eC && eR(H)), e;
        }
        function ez() {
            var e, n, r;
            for (eC++, e = eO, n = [], r = eK(); r !== i; ) n.push(r), (r = eK());
            return n !== i && (n = t.substring(e, eO)), (e = n), eC--, e === i && ((n = i), 0 === eC && eR(K)), e;
        }
        function eq() {
            var e;
            return z.test(t.charAt(eO)) ? ((e = t.charAt(eO)), eO++) : ((e = i), 0 === eC && eR(q)), e;
        }
        function eX() {
            var e;
            return X.test(t.charAt(eO)) ? ((e = t.charAt(eO)), eO++) : ((e = i), 0 === eC && eR(Q)), e;
        }
        function eQ() {
            var e, n, r, a, o, s;
            if (((e = eO), 48 === t.charCodeAt(eO) ? ((n = J), eO++) : ((n = i), 0 === eC && eR($)), n === i)) {
                if (
                    ((n = eO),
                    (r = eO),
                    ee.test(t.charAt(eO)) ? ((a = t.charAt(eO)), eO++) : ((a = i), 0 === eC && eR(et)),
                    a !== i)
                ) {
                    for (o = [], s = eq(); s !== i; ) o.push(s), (s = eq());
                    o !== i ? (r = a = [a, o]) : ((eO = r), (r = l));
                } else (eO = r), (r = l);
                r !== i && (r = t.substring(n, eO)), (n = r);
            }
            return n !== i && ((ev = e), (n = en(n))), (e = n);
        }
        function eJ() {
            var e, n, r, a, o, s, c, u;
            return (
                er.test(t.charAt(eO)) ? ((e = t.charAt(eO)), eO++) : ((e = i), 0 === eC && eR(ei)),
                e === i &&
                    ((e = eO),
                    t.substr(eO, 2) === ea ? ((n = ea), (eO += 2)) : ((n = i), 0 === eC && eR(eo)),
                    n !== i && ((ev = e), (n = es())),
                    (e = n) === i &&
                        ((e = eO),
                        t.substr(eO, 2) === el ? ((n = el), (eO += 2)) : ((n = i), 0 === eC && eR(ec)),
                        n !== i && ((ev = e), (n = eu())),
                        (e = n) === i &&
                            ((e = eO),
                            t.substr(eO, 2) === ed ? ((n = ed), (eO += 2)) : ((n = i), 0 === eC && eR(ef)),
                            n !== i && ((ev = e), (n = e_())),
                            (e = n) === i &&
                                ((e = eO),
                                t.substr(eO, 2) === ep ? ((n = ep), (eO += 2)) : ((n = i), 0 === eC && eR(eh)),
                                n !== i && ((ev = e), (n = em())),
                                (e = n) === i &&
                                    ((e = eO),
                                    t.substr(eO, 2) === eg ? ((n = eg), (eO += 2)) : ((n = i), 0 === eC && eR(eE)),
                                    n !== i
                                        ? ((r = eO),
                                          (a = eO),
                                          (o = eX()) !== i && (s = eX()) !== i && (c = eX()) !== i && (u = eX()) !== i
                                              ? (a = o = [o, s, c, u])
                                              : ((eO = a), (a = l)),
                                          a !== i && (a = t.substring(r, eO)),
                                          (r = a) !== i ? ((ev = e), (e = n = eb(r))) : ((eO = e), (e = l)))
                                        : ((eO = e), (e = l))))))),
                e
            );
        }
        function e$() {
            var e, t, n;
            if (((e = eO), (t = []), (n = eJ()) !== i)) for (; n !== i; ) t.push(n), (n = eJ());
            else t = l;
            return t !== i && ((ev = e), (t = ey(t))), (e = t);
        }
        if ((n = o()) !== i && eO === t.length) return n;
        throw (
            (n !== i &&
                eO < t.length &&
                eR({
                    type: "end",
                    description: "end of input",
                }),
            eP(null, eA, eS))
        );
    }
    return (
        (function (e, t) {
            function n() {
                this.constructor = e;
            }
            (n.prototype = t.prototype), (e.prototype = new n());
        })(e, Error),
        {
            SyntaxError: e,
            parse: t,
        }
    );
})();
