t.default = (function () {
    function e(e, t, n, r, i, a) {
        (this.message = e), (this.expected = t), (this.found = n), (this.offset = r), (this.line = i), (this.column = a), (this.name = 'SyntaxError');
    }
    function t(t) {
        var n,
            r = arguments.length > 1 ? arguments[1] : {},
            i = {},
            a = { start: ew },
            o = ew,
            s = function (e) {
                return {
                    type: 'messageFormatPattern',
                    elements: e
                };
            },
            l = i,
            c = function (e) {
                var t,
                    n,
                    r,
                    i,
                    a,
                    o = '';
                for (t = 0, r = e.length; t < r; t += 1) for (n = 0, a = (i = e[t]).length; n < a; n += 1) o += i[n];
                return o;
            },
            u = function (e) {
                return {
                    type: 'messageTextElement',
                    value: e
                };
            },
            d = /^[^ \t\n\r,.+={}#]/,
            f = {
                type: 'class',
                value: '[^ \\t\\n\\r,.+={}#]',
                description: '[^ \\t\\n\\r,.+={}#]'
            },
            _ = '{',
            p = {
                type: 'literal',
                value: '{',
                description: '"{"'
            },
            h = null,
            m = ',',
            g = {
                type: 'literal',
                value: ',',
                description: '","'
            },
            E = '}',
            b = {
                type: 'literal',
                value: '}',
                description: '"}"'
            },
            y = function (e, t) {
                return {
                    type: 'argumentElement',
                    id: e,
                    format: t && t[2]
                };
            },
            O = 'number',
            v = {
                type: 'literal',
                value: 'number',
                description: '"number"'
            },
            I = 'date',
            S = {
                type: 'literal',
                value: 'date',
                description: '"date"'
            },
            T = 'time',
            A = {
                type: 'literal',
                value: 'time',
                description: '"time"'
            },
            N = function (e, t) {
                return {
                    type: e + 'Format',
                    style: t && t[2]
                };
            },
            C = 'plural',
            R = {
                type: 'literal',
                value: 'plural',
                description: '"plural"'
            },
            P = function (e) {
                return {
                    type: e.type,
                    ordinal: !1,
                    offset: e.offset || 0,
                    options: e.options
                };
            },
            w = 'selectordinal',
            D = {
                type: 'literal',
                value: 'selectordinal',
                description: '"selectordinal"'
            },
            L = function (e) {
                return {
                    type: e.type,
                    ordinal: !0,
                    offset: e.offset || 0,
                    options: e.options
                };
            },
            x = 'select',
            M = {
                type: 'literal',
                value: 'select',
                description: '"select"'
            },
            k = function (e) {
                return {
                    type: 'selectFormat',
                    options: e
                };
            },
            j = '=',
            U = {
                type: 'literal',
                value: '=',
                description: '"="'
            },
            G = function (e, t) {
                return {
                    type: 'optionalFormatPattern',
                    selector: e,
                    value: t
                };
            },
            B = 'offset:',
            V = {
                type: 'literal',
                value: 'offset:',
                description: '"offset:"'
            },
            F = function (e) {
                return e;
            },
            Z = function (e, t) {
                return {
                    type: 'pluralFormat',
                    offset: e,
                    options: t
                };
            },
            H = {
                type: 'other',
                description: 'whitespace'
            },
            Y = /^[ \t\n\r]/,
            W = {
                type: 'class',
                value: '[ \\t\\n\\r]',
                description: '[ \\t\\n\\r]'
            },
            K = {
                type: 'other',
                description: 'optionalWhitespace'
            },
            z = /^[0-9]/,
            q = {
                type: 'class',
                value: '[0-9]',
                description: '[0-9]'
            },
            Q = /^[0-9a-f]/i,
            X = {
                type: 'class',
                value: '[0-9a-f]i',
                description: '[0-9a-f]i'
            },
            J = '0',
            $ = {
                type: 'literal',
                value: '0',
                description: '"0"'
            },
            ee = /^[1-9]/,
            et = {
                type: 'class',
                value: '[1-9]',
                description: '[1-9]'
            },
            en = function (e) {
                return parseInt(e, 10);
            },
            er = /^[^{}\\\0-\x1F \t\n\r]/,
            ei = {
                type: 'class',
                value: '[^{}\\\\\\0-\\x1F\x7F \\t\\n\\r]',
                description: '[^{}\\\\\\0-\\x1F\x7F \\t\\n\\r]'
            },
            ea = '\\\\',
            eo = {
                type: 'literal',
                value: '\\\\',
                description: '"\\\\\\\\"'
            },
            es = function () {
                return '\\';
            },
            el = '\\#',
            ec = {
                type: 'literal',
                value: '\\#',
                description: '"\\\\#"'
            },
            eu = function () {
                return '\\#';
            },
            ed = '\\{',
            ef = {
                type: 'literal',
                value: '\\{',
                description: '"\\\\{"'
            },
            e_ = function () {
                return '{';
            },
            ep = '\\}',
            eh = {
                type: 'literal',
                value: '\\}',
                description: '"\\\\}"'
            },
            em = function () {
                return '}';
            },
            eg = '\\u',
            eE = {
                type: 'literal',
                value: '\\u',
                description: '"\\\\u"'
            },
            eb = function (e) {
                return String.fromCharCode(parseInt(e, 16));
            },
            ey = function (e) {
                return e.join('');
            },
            eO = 0,
            ev = 0,
            eI = 0,
            eS = {
                line: 1,
                column: 1,
                seenCR: !1
            },
            eT = 0,
            eA = [],
            eN = 0;
        if ('startRule' in r) {
            if (!(r.startRule in a)) throw Error('Can\'t start parsing from rule "' + r.startRule + '".');
            o = a[r.startRule];
        }
        function eC(e) {
            function n(e, n, r) {
                var i, a;
                for (i = n; i < r; i++) '\n' === (a = t.charAt(i)) ? (!e.seenCR && e.line++, (e.column = 1), (e.seenCR = !1)) : '\r' === a || '\u2028' === a || '\u2029' === a ? (e.line++, (e.column = 1), (e.seenCR = !0)) : (e.column++, (e.seenCR = !1));
            }
            return (
                eI !== e &&
                    (eI > e &&
                        ((eI = 0),
                        (eS = {
                            line: 1,
                            column: 1,
                            seenCR: !1
                        })),
                    n(eS, eI, e),
                    (eI = e)),
                eS
            );
        }
        function eR(e) {
            eO < eT || (eO > eT && ((eT = eO), (eA = [])), eA.push(e));
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
                        .replace(/\\/g, '\\\\')
                        .replace(/"/g, '\\"')
                        .replace(/\x08/g, '\\b')
                        .replace(/\t/g, '\\t')
                        .replace(/\n/g, '\\n')
                        .replace(/\f/g, '\\f')
                        .replace(/\r/g, '\\r')
                        .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (e) {
                            return '\\x0' + t(e);
                        })
                        .replace(/[\x10-\x1F\x80-\xFF]/g, function (e) {
                            return '\\x' + t(e);
                        })
                        .replace(/[\u0180-\u0FFF]/g, function (e) {
                            return '\\u0' + t(e);
                        })
                        .replace(/[\u1080-\uFFFF]/g, function (e) {
                            return '\\u' + t(e);
                        });
                }
                var r,
                    i = Array(e.length);
                for (r = 0; r < e.length; r++) i[r] = e[r].description;
                return 'Expected ' + (e.length > 1 ? i.slice(0, -1).join(', ') + ' or ' + i[e.length - 1] : i[0]) + ' but ' + (t ? '"' + n(t) + '"' : 'end of input') + ' found.';
            }
            var s = eC(i),
                l = i < t.length ? t.charAt(i) : null;
            return null !== r && a(r), new e(null !== n ? n : o(r, l), r, l, i, s.line, s.column);
        }
        function ew() {
            return eD();
        }
        function eD() {
            var e, t, n;
            for (e = eO, t = [], n = eL(); n !== i; ) t.push(n), (n = eL());
            return t !== i && ((ev = e), (t = s(t))), (e = t);
        }
        function eL() {
            var e;
            return (e = eM()) === i && (e = ej()), e;
        }
        function ex() {
            var e, n, r, a, o, s;
            if (((e = eO), (n = []), (r = eO), (a = ez()) !== i && (o = e$()) !== i && (s = ez()) !== i ? (r = a = [a, o, s]) : ((eO = r), (r = l)), r !== i)) for (; r !== i; ) n.push(r), (r = eO), (a = ez()) !== i && (o = e$()) !== i && (s = ez()) !== i ? (r = a = [a, o, s]) : ((eO = r), (r = l));
            else n = l;
            return n !== i && ((ev = e), (n = c(n))), (e = n) === i && ((e = eO), (n = eK()) !== i && (n = t.substring(e, eO)), (e = n)), e;
        }
        function eM() {
            var e, t;
            return (e = eO), (t = ex()) !== i && ((ev = e), (t = u(t))), (e = t);
        }
        function ek() {
            var e, n, r;
            if ((e = eX()) === i) {
                if (((e = eO), (n = []), d.test(t.charAt(eO)) ? ((r = t.charAt(eO)), eO++) : ((r = i), 0 === eN && eR(f)), r !== i)) for (; r !== i; ) n.push(r), d.test(t.charAt(eO)) ? ((r = t.charAt(eO)), eO++) : ((r = i), 0 === eN && eR(f));
                else n = l;
                n !== i && (n = t.substring(e, eO)), (e = n);
            }
            return e;
        }
        function ej() {
            var e, n, r, a, o, s, c;
            return (e = eO), 123 === t.charCodeAt(eO) ? ((n = _), eO++) : ((n = i), 0 === eN && eR(p)), n !== i && ez() !== i && (r = ek()) !== i && ez() !== i ? ((a = eO), 44 === t.charCodeAt(eO) ? ((o = m), eO++) : ((o = i), 0 === eN && eR(g)), o !== i && (s = ez()) !== i && (c = eU()) !== i ? (a = o = [o, s, c]) : ((eO = a), (a = l)), a === i && (a = h), a !== i && (o = ez()) !== i ? (125 === t.charCodeAt(eO) ? ((s = E), eO++) : ((s = i), 0 === eN && eR(b)), s !== i ? ((ev = e), (e = n = y(r, a))) : ((eO = e), (e = l))) : ((eO = e), (e = l))) : ((eO = e), (e = l)), e;
        }
        function eU() {
            var e;
            return (e = eG()) === i && (e = eB()) === i && (e = eV()) === i && (e = eF()), e;
        }
        function eG() {
            var e, n, r, a, o, s;
            return (e = eO), t.substr(eO, 6) === O ? ((n = O), (eO += 6)) : ((n = i), 0 === eN && eR(v)), n === i && (t.substr(eO, 4) === I ? ((n = I), (eO += 4)) : ((n = i), 0 === eN && eR(S)), n === i && (t.substr(eO, 4) === T ? ((n = T), (eO += 4)) : ((n = i), 0 === eN && eR(A)))), n !== i && ez() !== i ? ((r = eO), 44 === t.charCodeAt(eO) ? ((a = m), eO++) : ((a = i), 0 === eN && eR(g)), a !== i && (o = ez()) !== i && (s = e$()) !== i ? (r = a = [a, o, s]) : ((eO = r), (r = l)), r === i && (r = h), r !== i ? ((ev = e), (e = n = N(n, r))) : ((eO = e), (e = l))) : ((eO = e), (e = l)), e;
        }
        function eB() {
            var e, n, r, a;
            return (e = eO), t.substr(eO, 6) === C ? ((n = C), (eO += 6)) : ((n = i), 0 === eN && eR(R)), n !== i && ez() !== i ? (44 === t.charCodeAt(eO) ? ((r = m), eO++) : ((r = i), 0 === eN && eR(g)), r !== i && ez() !== i && (a = eW()) !== i ? ((ev = e), (e = n = P(a))) : ((eO = e), (e = l))) : ((eO = e), (e = l)), e;
        }
        function eV() {
            var e, n, r, a;
            return (e = eO), t.substr(eO, 13) === w ? ((n = w), (eO += 13)) : ((n = i), 0 === eN && eR(D)), n !== i && ez() !== i ? (44 === t.charCodeAt(eO) ? ((r = m), eO++) : ((r = i), 0 === eN && eR(g)), r !== i && ez() !== i && (a = eW()) !== i ? ((ev = e), (e = n = L(a))) : ((eO = e), (e = l))) : ((eO = e), (e = l)), e;
        }
        function eF() {
            var e, n, r, a, o;
            if (((e = eO), t.substr(eO, 6) === x ? ((n = x), (eO += 6)) : ((n = i), 0 === eN && eR(M)), n !== i))
                if (ez() !== i)
                    if ((44 === t.charCodeAt(eO) ? ((r = m), eO++) : ((r = i), 0 === eN && eR(g)), r !== i))
                        if (ez() !== i) {
                            if (((a = []), (o = eH()) !== i)) for (; o !== i; ) a.push(o), (o = eH());
                            else a = l;
                            a !== i ? ((ev = e), (e = n = k(a))) : ((eO = e), (e = l));
                        } else (eO = e), (e = l);
                    else (eO = e), (e = l);
                else (eO = e), (e = l);
            else (eO = e), (e = l);
            return e;
        }
        function eZ() {
            var e, n, r, a;
            return (e = eO), (n = eO), 61 === t.charCodeAt(eO) ? ((r = j), eO++) : ((r = i), 0 === eN && eR(U)), r !== i && (a = eX()) !== i ? (n = r = [r, a]) : ((eO = n), (n = l)), n !== i && (n = t.substring(e, eO)), (e = n) === i && (e = e$()), e;
        }
        function eH() {
            var e, n, r, a, o, s;
            return (e = eO), (n = ez()) !== i && (r = eZ()) !== i && ez() !== i ? (123 === t.charCodeAt(eO) ? ((a = _), eO++) : ((a = i), 0 === eN && eR(p)), a !== i && ez() !== i && (o = eD()) !== i && ez() !== i ? (125 === t.charCodeAt(eO) ? ((s = E), eO++) : ((s = i), 0 === eN && eR(b)), s !== i ? ((ev = e), (e = n = G(r, o))) : ((eO = e), (e = l))) : ((eO = e), (e = l))) : ((eO = e), (e = l)), e;
        }
        function eY() {
            var e, n, r;
            return (e = eO), t.substr(eO, 7) === B ? ((n = B), (eO += 7)) : ((n = i), 0 === eN && eR(V)), n !== i && ez() !== i && (r = eX()) !== i ? ((ev = e), (e = n = F(r))) : ((eO = e), (e = l)), e;
        }
        function eW() {
            var e, t, n, r;
            if (((e = eO), (t = eY()) === i && (t = h), t !== i))
                if (ez() !== i) {
                    if (((n = []), (r = eH()) !== i)) for (; r !== i; ) n.push(r), (r = eH());
                    else n = l;
                    n !== i ? ((ev = e), (e = t = Z(t, n))) : ((eO = e), (e = l));
                } else (eO = e), (e = l);
            else (eO = e), (e = l);
            return e;
        }
        function eK() {
            var e, n;
            if ((eN++, (e = []), Y.test(t.charAt(eO)) ? ((n = t.charAt(eO)), eO++) : ((n = i), 0 === eN && eR(W)), n !== i)) for (; n !== i; ) e.push(n), Y.test(t.charAt(eO)) ? ((n = t.charAt(eO)), eO++) : ((n = i), 0 === eN && eR(W));
            else e = l;
            return eN--, e === i && ((n = i), 0 === eN && eR(H)), e;
        }
        function ez() {
            var e, n, r;
            for (eN++, e = eO, n = [], r = eK(); r !== i; ) n.push(r), (r = eK());
            return n !== i && (n = t.substring(e, eO)), (e = n), eN--, e === i && ((n = i), 0 === eN && eR(K)), e;
        }
        function eq() {
            var e;
            return z.test(t.charAt(eO)) ? ((e = t.charAt(eO)), eO++) : ((e = i), 0 === eN && eR(q)), e;
        }
        function eQ() {
            var e;
            return Q.test(t.charAt(eO)) ? ((e = t.charAt(eO)), eO++) : ((e = i), 0 === eN && eR(X)), e;
        }
        function eX() {
            var e, n, r, a, o, s;
            if (((e = eO), 48 === t.charCodeAt(eO) ? ((n = J), eO++) : ((n = i), 0 === eN && eR($)), n === i)) {
                if (((n = eO), (r = eO), ee.test(t.charAt(eO)) ? ((a = t.charAt(eO)), eO++) : ((a = i), 0 === eN && eR(et)), a !== i)) {
                    for (o = [], s = eq(); s !== i; ) o.push(s), (s = eq());
                    o !== i ? (r = a = [a, o]) : ((eO = r), (r = l));
                } else (eO = r), (r = l);
                r !== i && (r = t.substring(n, eO)), (n = r);
            }
            return n !== i && ((ev = e), (n = en(n))), (e = n);
        }
        function eJ() {
            var e, n, r, a, o, s, c, u;
            return er.test(t.charAt(eO)) ? ((e = t.charAt(eO)), eO++) : ((e = i), 0 === eN && eR(ei)), e === i && ((e = eO), t.substr(eO, 2) === ea ? ((n = ea), (eO += 2)) : ((n = i), 0 === eN && eR(eo)), n !== i && ((ev = e), (n = es())), (e = n) === i && ((e = eO), t.substr(eO, 2) === el ? ((n = el), (eO += 2)) : ((n = i), 0 === eN && eR(ec)), n !== i && ((ev = e), (n = eu())), (e = n) === i && ((e = eO), t.substr(eO, 2) === ed ? ((n = ed), (eO += 2)) : ((n = i), 0 === eN && eR(ef)), n !== i && ((ev = e), (n = e_())), (e = n) === i && ((e = eO), t.substr(eO, 2) === ep ? ((n = ep), (eO += 2)) : ((n = i), 0 === eN && eR(eh)), n !== i && ((ev = e), (n = em())), (e = n) === i && ((e = eO), t.substr(eO, 2) === eg ? ((n = eg), (eO += 2)) : ((n = i), 0 === eN && eR(eE)), n !== i ? ((r = eO), (a = eO), (o = eQ()) !== i && (s = eQ()) !== i && (c = eQ()) !== i && (u = eQ()) !== i ? (a = o = [o, s, c, u]) : ((eO = a), (a = l)), a !== i && (a = t.substring(r, eO)), (r = a) !== i ? ((ev = e), (e = n = eb(r))) : ((eO = e), (e = l))) : ((eO = e), (e = l))))))), e;
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
                    type: 'end',
                    description: 'end of input'
                }),
            eP(null, eA, eT))
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
            parse: t
        }
    );
})();
