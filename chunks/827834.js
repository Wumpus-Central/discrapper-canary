n.default = (function () {
    function e(e, n, r, i, a, s) {
        (this.message = e), (this.expected = n), (this.found = r), (this.offset = i), (this.line = a), (this.column = s), (this.name = 'SyntaxError');
    }
    function n(n) {
        var r,
            i = arguments.length > 1 ? arguments[1] : {},
            a = {},
            s = { start: ex },
            o = ex,
            l = function (e) {
                return {
                    type: 'messageFormatPattern',
                    elements: e
                };
            },
            u = a,
            c = function (e) {
                var n,
                    r,
                    i,
                    a,
                    s,
                    o = '';
                for (n = 0, i = e.length; n < i; n += 1) for (r = 0, s = (a = e[n]).length; r < s; r += 1) o += a[r];
                return o;
            },
            d = function (e) {
                return {
                    type: 'messageTextElement',
                    value: e
                };
            },
            f = /^[^ \t\n\r,.+={}#]/,
            _ = {
                type: 'class',
                value: '[^ \\t\\n\\r,.+={}#]',
                description: '[^ \\t\\n\\r,.+={}#]'
            },
            h = '{',
            p = {
                type: 'literal',
                value: '{',
                description: '"{"'
            },
            m = null,
            g = ',',
            E = {
                type: 'literal',
                value: ',',
                description: '","'
            },
            v = '}',
            I = {
                type: 'literal',
                value: '}',
                description: '"}"'
            },
            T = function (e, n) {
                return {
                    type: 'argumentElement',
                    id: e,
                    format: n && n[2]
                };
            },
            b = 'number',
            y = {
                type: 'literal',
                value: 'number',
                description: '"number"'
            },
            S = 'date',
            A = {
                type: 'literal',
                value: 'date',
                description: '"date"'
            },
            N = 'time',
            C = {
                type: 'literal',
                value: 'time',
                description: '"time"'
            },
            R = function (e, n) {
                return {
                    type: e + 'Format',
                    style: n && n[2]
                };
            },
            O = 'plural',
            D = {
                type: 'literal',
                value: 'plural',
                description: '"plural"'
            },
            L = function (e) {
                return {
                    type: e.type,
                    ordinal: !1,
                    offset: e.offset || 0,
                    options: e.options
                };
            },
            x = 'selectordinal',
            w = {
                type: 'literal',
                value: 'selectordinal',
                description: '"selectordinal"'
            },
            P = function (e) {
                return {
                    type: e.type,
                    ordinal: !0,
                    offset: e.offset || 0,
                    options: e.options
                };
            },
            M = 'select',
            k = {
                type: 'literal',
                value: 'select',
                description: '"select"'
            },
            U = function (e) {
                return {
                    type: 'selectFormat',
                    options: e
                };
            },
            B = '=',
            G = {
                type: 'literal',
                value: '=',
                description: '"="'
            },
            Z = function (e, n) {
                return {
                    type: 'optionalFormatPattern',
                    selector: e,
                    value: n
                };
            },
            F = 'offset:',
            V = {
                type: 'literal',
                value: 'offset:',
                description: '"offset:"'
            },
            j = function (e) {
                return e;
            },
            H = function (e, n) {
                return {
                    type: 'pluralFormat',
                    offset: e,
                    options: n
                };
            },
            Y = {
                type: 'other',
                description: 'whitespace'
            },
            W = /^[ \t\n\r]/,
            K = {
                type: 'class',
                value: '[ \\t\\n\\r]',
                description: '[ \\t\\n\\r]'
            },
            z = {
                type: 'other',
                description: 'optionalWhitespace'
            },
            q = /^[0-9]/,
            Q = {
                type: 'class',
                value: '[0-9]',
                description: '[0-9]'
            },
            X = /^[0-9a-f]/i,
            J = {
                type: 'class',
                value: '[0-9a-f]i',
                description: '[0-9a-f]i'
            },
            $ = '0',
            ee = {
                type: 'literal',
                value: '0',
                description: '"0"'
            },
            et = /^[1-9]/,
            en = {
                type: 'class',
                value: '[1-9]',
                description: '[1-9]'
            },
            er = function (e) {
                return parseInt(e, 10);
            },
            ei = /^[^{}\\\0-\x1F \t\n\r]/,
            ea = {
                type: 'class',
                value: '[^{}\\\\\\0-\\x1F\x7F \\t\\n\\r]',
                description: '[^{}\\\\\\0-\\x1F\x7F \\t\\n\\r]'
            },
            es = '\\\\',
            eo = {
                type: 'literal',
                value: '\\\\',
                description: '"\\\\\\\\"'
            },
            el = function () {
                return '\\';
            },
            eu = '\\#',
            ec = {
                type: 'literal',
                value: '\\#',
                description: '"\\\\#"'
            },
            ed = function () {
                return '\\#';
            },
            ef = '\\{',
            e_ = {
                type: 'literal',
                value: '\\{',
                description: '"\\\\{"'
            },
            eh = function () {
                return '{';
            },
            ep = '\\}',
            em = {
                type: 'literal',
                value: '\\}',
                description: '"\\\\}"'
            },
            eg = function () {
                return '}';
            },
            eE = '\\u',
            ev = {
                type: 'literal',
                value: '\\u',
                description: '"\\\\u"'
            },
            eI = function (e) {
                return String.fromCharCode(parseInt(e, 16));
            },
            eT = function (e) {
                return e.join('');
            },
            eb = 0,
            ey = 0,
            eS = 0,
            eA = {
                line: 1,
                column: 1,
                seenCR: !1
            },
            eN = 0,
            eC = [],
            eR = 0;
        if ('startRule' in i) {
            if (!(i.startRule in s)) throw Error('Can\'t start parsing from rule "' + i.startRule + '".');
            o = s[i.startRule];
        }
        function eO(e) {
            function r(e, r, i) {
                var a, s;
                for (a = r; a < i; a++) '\n' === (s = n.charAt(a)) ? (!e.seenCR && e.line++, (e.column = 1), (e.seenCR = !1)) : '\r' === s || '\u2028' === s || '\u2029' === s ? (e.line++, (e.column = 1), (e.seenCR = !0)) : (e.column++, (e.seenCR = !1));
            }
            return (
                eS !== e &&
                    (eS > e &&
                        ((eS = 0),
                        (eA = {
                            line: 1,
                            column: 1,
                            seenCR: !1
                        })),
                    r(eA, eS, e),
                    (eS = e)),
                eA
            );
        }
        function eD(e) {
            if (!(eb < eN)) eb > eN && ((eN = eb), (eC = [])), eC.push(e);
        }
        function eL(r, i, a) {
            function s(e) {
                var n = 1;
                for (
                    e.sort(function (e, n) {
                        return e.description < n.description ? -1 : e.description > n.description ? 1 : 0;
                    });
                    n < e.length;

                )
                    e[n - 1] === e[n] ? e.splice(n, 1) : n++;
            }
            function o(e, n) {
                function r(e) {
                    function n(e) {
                        return e.charCodeAt(0).toString(16).toUpperCase();
                    }
                    return e
                        .replace(/\\/g, '\\\\')
                        .replace(/"/g, '\\"')
                        .replace(/\x08/g, '\\b')
                        .replace(/\t/g, '\\t')
                        .replace(/\n/g, '\\n')
                        .replace(/\f/g, '\\f')
                        .replace(/\r/g, '\\r')
                        .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (e) {
                            return '\\x0' + n(e);
                        })
                        .replace(/[\x10-\x1F\x80-\xFF]/g, function (e) {
                            return '\\x' + n(e);
                        })
                        .replace(/[\u0180-\u0FFF]/g, function (e) {
                            return '\\u0' + n(e);
                        })
                        .replace(/[\u1080-\uFFFF]/g, function (e) {
                            return '\\u' + n(e);
                        });
                }
                var i,
                    a,
                    s = Array(e.length);
                for (a = 0; a < e.length; a++) s[a] = e[a].description;
                return (i = e.length > 1 ? s.slice(0, -1).join(', ') + ' or ' + s[e.length - 1] : s[0]), 'Expected ' + i + ' but ' + (n ? '"' + r(n) + '"' : 'end of input') + ' found.';
            }
            var l = eO(a),
                u = a < n.length ? n.charAt(a) : null;
            return null !== i && s(i), new e(null !== r ? r : o(i, u), i, u, a, l.line, l.column);
        }
        function ex() {
            return ew();
        }
        function ew() {
            var e, n, r;
            for (e = eb, n = [], r = eP(); r !== a; ) n.push(r), (r = eP());
            return n !== a && ((ey = e), (n = l(n))), (e = n);
        }
        function eP() {
            var e;
            return (e = ek()) === a && (e = eB()), e;
        }
        function eM() {
            var e, r, i, s, o, l;
            if (((e = eb), (r = []), (i = eb), (s = eq()) !== a && (o = e0()) !== a && (l = eq()) !== a ? (i = s = [s, o, l]) : ((eb = i), (i = u)), i !== a)) for (; i !== a; ) r.push(i), (i = eb), (s = eq()) !== a && (o = e0()) !== a && (l = eq()) !== a ? (i = s = [s, o, l]) : ((eb = i), (i = u));
            else r = u;
            return r !== a && ((ey = e), (r = c(r))), (e = r) === a && ((e = eb), (r = ez()) !== a && (r = n.substring(e, eb)), (e = r)), e;
        }
        function ek() {
            var e, n;
            return (e = eb), (n = eM()) !== a && ((ey = e), (n = d(n))), (e = n);
        }
        function eU() {
            var e, r, i;
            if ((e = eJ()) === a) {
                if (((e = eb), (r = []), f.test(n.charAt(eb)) ? ((i = n.charAt(eb)), eb++) : ((i = a), 0 === eR && eD(_)), i !== a)) for (; i !== a; ) r.push(i), f.test(n.charAt(eb)) ? ((i = n.charAt(eb)), eb++) : ((i = a), 0 === eR && eD(_));
                else r = u;
                r !== a && (r = n.substring(e, eb)), (e = r);
            }
            return e;
        }
        function eB() {
            var e, r, i, s, o, l, c;
            return (e = eb), 123 === n.charCodeAt(eb) ? ((r = h), eb++) : ((r = a), 0 === eR && eD(p)), r !== a && eq() !== a && (i = eU()) !== a && eq() !== a ? ((s = eb), 44 === n.charCodeAt(eb) ? ((o = g), eb++) : ((o = a), 0 === eR && eD(E)), o !== a && (l = eq()) !== a && (c = eG()) !== a ? (s = o = [o, l, c]) : ((eb = s), (s = u)), s === a && (s = m), s !== a && (o = eq()) !== a ? (125 === n.charCodeAt(eb) ? ((l = v), eb++) : ((l = a), 0 === eR && eD(I)), l !== a ? ((ey = e), (e = r = T(i, s))) : ((eb = e), (e = u))) : ((eb = e), (e = u))) : ((eb = e), (e = u)), e;
        }
        function eG() {
            var e;
            return (e = eZ()) === a && (e = eF()) === a && (e = eV()) === a && (e = ej()), e;
        }
        function eZ() {
            var e, r, i, s, o, l;
            return (e = eb), n.substr(eb, 6) === b ? ((r = b), (eb += 6)) : ((r = a), 0 === eR && eD(y)), r === a && (n.substr(eb, 4) === S ? ((r = S), (eb += 4)) : ((r = a), 0 === eR && eD(A)), r === a && (n.substr(eb, 4) === N ? ((r = N), (eb += 4)) : ((r = a), 0 === eR && eD(C)))), r !== a && eq() !== a ? ((i = eb), 44 === n.charCodeAt(eb) ? ((s = g), eb++) : ((s = a), 0 === eR && eD(E)), s !== a && (o = eq()) !== a && (l = e0()) !== a ? (i = s = [s, o, l]) : ((eb = i), (i = u)), i === a && (i = m), i !== a ? ((ey = e), (e = r = R(r, i))) : ((eb = e), (e = u))) : ((eb = e), (e = u)), e;
        }
        function eF() {
            var e, r, i, s;
            return (e = eb), n.substr(eb, 6) === O ? ((r = O), (eb += 6)) : ((r = a), 0 === eR && eD(D)), r !== a && eq() !== a ? (44 === n.charCodeAt(eb) ? ((i = g), eb++) : ((i = a), 0 === eR && eD(E)), i !== a && eq() !== a && (s = eK()) !== a ? ((ey = e), (e = r = L(s))) : ((eb = e), (e = u))) : ((eb = e), (e = u)), e;
        }
        function eV() {
            var e, r, i, s;
            return (e = eb), n.substr(eb, 13) === x ? ((r = x), (eb += 13)) : ((r = a), 0 === eR && eD(w)), r !== a && eq() !== a ? (44 === n.charCodeAt(eb) ? ((i = g), eb++) : ((i = a), 0 === eR && eD(E)), i !== a && eq() !== a && (s = eK()) !== a ? ((ey = e), (e = r = P(s))) : ((eb = e), (e = u))) : ((eb = e), (e = u)), e;
        }
        function ej() {
            var e, r, i, s, o;
            if (((e = eb), n.substr(eb, 6) === M ? ((r = M), (eb += 6)) : ((r = a), 0 === eR && eD(k)), r !== a)) {
                if (eq() !== a) {
                    if ((44 === n.charCodeAt(eb) ? ((i = g), eb++) : ((i = a), 0 === eR && eD(E)), i !== a)) {
                        if (eq() !== a) {
                            if (((s = []), (o = eY()) !== a)) for (; o !== a; ) s.push(o), (o = eY());
                            else s = u;
                            s !== a ? ((ey = e), (e = r = U(s))) : ((eb = e), (e = u));
                        } else (eb = e), (e = u);
                    } else (eb = e), (e = u);
                } else (eb = e), (e = u);
            } else (eb = e), (e = u);
            return e;
        }
        function eH() {
            var e, r, i, s;
            return (e = eb), (r = eb), 61 === n.charCodeAt(eb) ? ((i = B), eb++) : ((i = a), 0 === eR && eD(G)), i !== a && (s = eJ()) !== a ? (r = i = [i, s]) : ((eb = r), (r = u)), r !== a && (r = n.substring(e, eb)), (e = r) === a && (e = e0()), e;
        }
        function eY() {
            var e, r, i, s, o, l;
            return (e = eb), (r = eq()) !== a && (i = eH()) !== a && eq() !== a ? (123 === n.charCodeAt(eb) ? ((s = h), eb++) : ((s = a), 0 === eR && eD(p)), s !== a && eq() !== a && (o = ew()) !== a && eq() !== a ? (125 === n.charCodeAt(eb) ? ((l = v), eb++) : ((l = a), 0 === eR && eD(I)), l !== a ? ((ey = e), (e = r = Z(i, o))) : ((eb = e), (e = u))) : ((eb = e), (e = u))) : ((eb = e), (e = u)), e;
        }
        function eW() {
            var e, r, i;
            return (e = eb), n.substr(eb, 7) === F ? ((r = F), (eb += 7)) : ((r = a), 0 === eR && eD(V)), r !== a && eq() !== a && (i = eJ()) !== a ? ((ey = e), (e = r = j(i))) : ((eb = e), (e = u)), e;
        }
        function eK() {
            var e, n, r, i;
            if (((e = eb), (n = eW()) === a && (n = m), n !== a)) {
                if (eq() !== a) {
                    if (((r = []), (i = eY()) !== a)) for (; i !== a; ) r.push(i), (i = eY());
                    else r = u;
                    r !== a ? ((ey = e), (e = n = H(n, r))) : ((eb = e), (e = u));
                } else (eb = e), (e = u);
            } else (eb = e), (e = u);
            return e;
        }
        function ez() {
            var e, r;
            if ((eR++, (e = []), W.test(n.charAt(eb)) ? ((r = n.charAt(eb)), eb++) : ((r = a), 0 === eR && eD(K)), r !== a)) for (; r !== a; ) e.push(r), W.test(n.charAt(eb)) ? ((r = n.charAt(eb)), eb++) : ((r = a), 0 === eR && eD(K));
            else e = u;
            return eR--, e === a && ((r = a), 0 === eR && eD(Y)), e;
        }
        function eq() {
            var e, r, i;
            for (eR++, e = eb, r = [], i = ez(); i !== a; ) r.push(i), (i = ez());
            return r !== a && (r = n.substring(e, eb)), (e = r), eR--, e === a && ((r = a), 0 === eR && eD(z)), e;
        }
        function eQ() {
            var e;
            return q.test(n.charAt(eb)) ? ((e = n.charAt(eb)), eb++) : ((e = a), 0 === eR && eD(Q)), e;
        }
        function eX() {
            var e;
            return X.test(n.charAt(eb)) ? ((e = n.charAt(eb)), eb++) : ((e = a), 0 === eR && eD(J)), e;
        }
        function eJ() {
            var e, r, i, s, o, l;
            if (((e = eb), 48 === n.charCodeAt(eb) ? ((r = $), eb++) : ((r = a), 0 === eR && eD(ee)), r === a)) {
                if (((r = eb), (i = eb), et.test(n.charAt(eb)) ? ((s = n.charAt(eb)), eb++) : ((s = a), 0 === eR && eD(en)), s !== a)) {
                    for (o = [], l = eQ(); l !== a; ) o.push(l), (l = eQ());
                    o !== a ? (i = s = [s, o]) : ((eb = i), (i = u));
                } else (eb = i), (i = u);
                i !== a && (i = n.substring(r, eb)), (r = i);
            }
            return r !== a && ((ey = e), (r = er(r))), (e = r);
        }
        function e$() {
            var e, r, i, s, o, l, c, d;
            return ei.test(n.charAt(eb)) ? ((e = n.charAt(eb)), eb++) : ((e = a), 0 === eR && eD(ea)), e === a && ((e = eb), n.substr(eb, 2) === es ? ((r = es), (eb += 2)) : ((r = a), 0 === eR && eD(eo)), r !== a && ((ey = e), (r = el())), (e = r) === a && ((e = eb), n.substr(eb, 2) === eu ? ((r = eu), (eb += 2)) : ((r = a), 0 === eR && eD(ec)), r !== a && ((ey = e), (r = ed())), (e = r) === a && ((e = eb), n.substr(eb, 2) === ef ? ((r = ef), (eb += 2)) : ((r = a), 0 === eR && eD(e_)), r !== a && ((ey = e), (r = eh())), (e = r) === a && ((e = eb), n.substr(eb, 2) === ep ? ((r = ep), (eb += 2)) : ((r = a), 0 === eR && eD(em)), r !== a && ((ey = e), (r = eg())), (e = r) === a && ((e = eb), n.substr(eb, 2) === eE ? ((r = eE), (eb += 2)) : ((r = a), 0 === eR && eD(ev)), r !== a ? ((i = eb), (s = eb), (o = eX()) !== a && (l = eX()) !== a && (c = eX()) !== a && (d = eX()) !== a ? (s = o = [o, l, c, d]) : ((eb = s), (s = u)), s !== a && (s = n.substring(i, eb)), (i = s) !== a ? ((ey = e), (e = r = eI(i))) : ((eb = e), (e = u))) : ((eb = e), (e = u))))))), e;
        }
        function e0() {
            var e, n, r;
            if (((e = eb), (n = []), (r = e$()) !== a)) for (; r !== a; ) n.push(r), (r = e$());
            else n = u;
            return n !== a && ((ey = e), (n = eT(n))), (e = n);
        }
        if ((r = o()) !== a && eb === n.length) return r;
        throw (
            (r !== a &&
                eb < n.length &&
                eD({
                    type: 'end',
                    description: 'end of input'
                }),
            eL(null, eC, eN))
        );
    }
    return (
        (function e(e, n) {
            function r() {
                this.constructor = e;
            }
            (r.prototype = n.prototype), (e.prototype = new r());
        })(e, Error),
        {
            SyntaxError: e,
            parse: n
        }
    );
})();
