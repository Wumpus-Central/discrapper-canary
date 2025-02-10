t.default = (function () {
    function e(e, t, n, i, r, a) {
        (this.message = e), (this.expected = t), (this.found = n), (this.offset = i), (this.line = r), (this.column = a), (this.name = 'SyntaxError');
    }
    function t(t) {
        var n,
            i = arguments.length > 1 ? arguments[1] : {},
            r = {},
            a = { start: eL },
            s = eL,
            o = function (e) {
                return {
                    type: 'messageFormatPattern',
                    elements: e
                };
            },
            l = r,
            u = function (e) {
                var t,
                    n,
                    i,
                    r,
                    a,
                    s = '';
                for (t = 0, i = e.length; t < i; t += 1) for (n = 0, a = (r = e[t]).length; n < a; n += 1) s += r[n];
                return s;
            },
            c = function (e) {
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
            v = {
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
            I = 'number',
            T = {
                type: 'literal',
                value: 'number',
                description: '"number"'
            },
            b = 'date',
            S = {
                type: 'literal',
                value: 'date',
                description: '"date"'
            },
            A = 'time',
            N = {
                type: 'literal',
                value: 'time',
                description: '"time"'
            },
            C = function (e, t) {
                return {
                    type: e + 'Format',
                    style: t && t[2]
                };
            },
            R = 'plural',
            O = {
                type: 'literal',
                value: 'plural',
                description: '"plural"'
            },
            D = function (e) {
                return {
                    type: e.type,
                    ordinal: !1,
                    offset: e.offset || 0,
                    options: e.options
                };
            },
            L = 'selectordinal',
            x = {
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
            w = 'select',
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
            U = '=',
            G = {
                type: 'literal',
                value: '=',
                description: '"="'
            },
            B = function (e, t) {
                return {
                    type: 'optionalFormatPattern',
                    selector: e,
                    value: t
                };
            },
            Z = 'offset:',
            F = {
                type: 'literal',
                value: 'offset:',
                description: '"offset:"'
            },
            V = function (e) {
                return e;
            },
            j = function (e, t) {
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
            ei = /^[^{}\\\0-\x1F \t\n\r]/,
            er = {
                type: 'class',
                value: '[^{}\\\\\\0-\\x1F\x7F \\t\\n\\r]',
                description: '[^{}\\\\\\0-\\x1F\x7F \\t\\n\\r]'
            },
            ea = '\\\\',
            es = {
                type: 'literal',
                value: '\\\\',
                description: '"\\\\\\\\"'
            },
            eo = function () {
                return '\\';
            },
            el = '\\#',
            eu = {
                type: 'literal',
                value: '\\#',
                description: '"\\\\#"'
            },
            ec = function () {
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
            ev = function (e) {
                return String.fromCharCode(parseInt(e, 16));
            },
            ey = function (e) {
                return e.join('');
            },
            eI = 0,
            eT = 0,
            eb = 0,
            eS = {
                line: 1,
                column: 1,
                seenCR: !1
            },
            eA = 0,
            eN = [],
            eC = 0;
        if ('startRule' in i) {
            if (!(i.startRule in a)) throw Error('Can\'t start parsing from rule "' + i.startRule + '".');
            s = a[i.startRule];
        }
        function eR(e) {
            function n(e, n, i) {
                var r, a;
                for (r = n; r < i; r++) '\n' === (a = t.charAt(r)) ? (!e.seenCR && e.line++, (e.column = 1), (e.seenCR = !1)) : '\r' === a || '\u2028' === a || '\u2029' === a ? (e.line++, (e.column = 1), (e.seenCR = !0)) : (e.column++, (e.seenCR = !1));
            }
            return (
                eb !== e &&
                    (eb > e &&
                        ((eb = 0),
                        (eS = {
                            line: 1,
                            column: 1,
                            seenCR: !1
                        })),
                    n(eS, eb, e),
                    (eb = e)),
                eS
            );
        }
        function eO(e) {
            !(eI < eA) && (eI > eA && ((eA = eI), (eN = [])), eN.push(e));
        }
        function eD(n, i, r) {
            function a(e) {
                var t = 1;
                for (
                    e.sort(function (e, t) {
                        return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
                    });
                    t < e.length;

                )
                    e[t - 1] === e[t] ? e.splice(t, 1) : t++;
            }
            function s(e, t) {
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
                var i,
                    r = Array(e.length);
                for (i = 0; i < e.length; i++) r[i] = e[i].description;
                return 'Expected ' + (e.length > 1 ? r.slice(0, -1).join(', ') + ' or ' + r[e.length - 1] : r[0]) + ' but ' + (t ? '"' + n(t) + '"' : 'end of input') + ' found.';
            }
            var o = eR(r),
                l = r < t.length ? t.charAt(r) : null;
            return null !== i && a(i), new e(null !== n ? n : s(i, l), i, l, r, o.line, o.column);
        }
        function eL() {
            return ex();
        }
        function ex() {
            var e, t, n;
            for (e = eI, t = [], n = eP(); n !== r; ) t.push(n), (n = eP());
            return t !== r && ((eT = e), (t = o(t))), (e = t);
        }
        function eP() {
            var e;
            return (e = eM()) === r && (e = eU()), e;
        }
        function ew() {
            var e, n, i, a, s, o;
            if (((e = eI), (n = []), (i = eI), (a = ez()) !== r && (s = e$()) !== r && (o = ez()) !== r ? (i = a = [a, s, o]) : ((eI = i), (i = l)), i !== r)) for (; i !== r; ) n.push(i), (i = eI), (a = ez()) !== r && (s = e$()) !== r && (o = ez()) !== r ? (i = a = [a, s, o]) : ((eI = i), (i = l));
            else n = l;
            return n !== r && ((eT = e), (n = u(n))), (e = n) === r && ((e = eI), (n = eK()) !== r && (n = t.substring(e, eI)), (e = n)), e;
        }
        function eM() {
            var e, t;
            return (e = eI), (t = ew()) !== r && ((eT = e), (t = c(t))), (e = t);
        }
        function ek() {
            var e, n, i;
            if ((e = eX()) === r) {
                if (((e = eI), (n = []), d.test(t.charAt(eI)) ? ((i = t.charAt(eI)), eI++) : ((i = r), 0 === eC && eO(f)), i !== r)) for (; i !== r; ) n.push(i), d.test(t.charAt(eI)) ? ((i = t.charAt(eI)), eI++) : ((i = r), 0 === eC && eO(f));
                else n = l;
                n !== r && (n = t.substring(e, eI)), (e = n);
            }
            return e;
        }
        function eU() {
            var e, n, i, a, s, o, u;
            return (e = eI), 123 === t.charCodeAt(eI) ? ((n = _), eI++) : ((n = r), 0 === eC && eO(p)), n !== r && ez() !== r && (i = ek()) !== r && ez() !== r ? ((a = eI), 44 === t.charCodeAt(eI) ? ((s = m), eI++) : ((s = r), 0 === eC && eO(g)), s !== r && (o = ez()) !== r && (u = eG()) !== r ? (a = s = [s, o, u]) : ((eI = a), (a = l)), a === r && (a = h), a !== r && (s = ez()) !== r ? (125 === t.charCodeAt(eI) ? ((o = E), eI++) : ((o = r), 0 === eC && eO(v)), o !== r ? ((eT = e), (e = n = y(i, a))) : ((eI = e), (e = l))) : ((eI = e), (e = l))) : ((eI = e), (e = l)), e;
        }
        function eG() {
            var e;
            return (e = eB()) === r && (e = eZ()) === r && (e = eF()) === r && (e = eV()), e;
        }
        function eB() {
            var e, n, i, a, s, o;
            return (e = eI), t.substr(eI, 6) === I ? ((n = I), (eI += 6)) : ((n = r), 0 === eC && eO(T)), n === r && (t.substr(eI, 4) === b ? ((n = b), (eI += 4)) : ((n = r), 0 === eC && eO(S)), n === r && (t.substr(eI, 4) === A ? ((n = A), (eI += 4)) : ((n = r), 0 === eC && eO(N)))), n !== r && ez() !== r ? ((i = eI), 44 === t.charCodeAt(eI) ? ((a = m), eI++) : ((a = r), 0 === eC && eO(g)), a !== r && (s = ez()) !== r && (o = e$()) !== r ? (i = a = [a, s, o]) : ((eI = i), (i = l)), i === r && (i = h), i !== r ? ((eT = e), (e = n = C(n, i))) : ((eI = e), (e = l))) : ((eI = e), (e = l)), e;
        }
        function eZ() {
            var e, n, i, a;
            return (e = eI), t.substr(eI, 6) === R ? ((n = R), (eI += 6)) : ((n = r), 0 === eC && eO(O)), n !== r && ez() !== r ? (44 === t.charCodeAt(eI) ? ((i = m), eI++) : ((i = r), 0 === eC && eO(g)), i !== r && ez() !== r && (a = eW()) !== r ? ((eT = e), (e = n = D(a))) : ((eI = e), (e = l))) : ((eI = e), (e = l)), e;
        }
        function eF() {
            var e, n, i, a;
            return (e = eI), t.substr(eI, 13) === L ? ((n = L), (eI += 13)) : ((n = r), 0 === eC && eO(x)), n !== r && ez() !== r ? (44 === t.charCodeAt(eI) ? ((i = m), eI++) : ((i = r), 0 === eC && eO(g)), i !== r && ez() !== r && (a = eW()) !== r ? ((eT = e), (e = n = P(a))) : ((eI = e), (e = l))) : ((eI = e), (e = l)), e;
        }
        function eV() {
            var e, n, i, a, s;
            if (((e = eI), t.substr(eI, 6) === w ? ((n = w), (eI += 6)) : ((n = r), 0 === eC && eO(M)), n !== r)) {
                if (ez() !== r) {
                    if ((44 === t.charCodeAt(eI) ? ((i = m), eI++) : ((i = r), 0 === eC && eO(g)), i !== r)) {
                        if (ez() !== r) {
                            if (((a = []), (s = eH()) !== r)) for (; s !== r; ) a.push(s), (s = eH());
                            else a = l;
                            a !== r ? ((eT = e), (e = n = k(a))) : ((eI = e), (e = l));
                        } else (eI = e), (e = l);
                    } else (eI = e), (e = l);
                } else (eI = e), (e = l);
            } else (eI = e), (e = l);
            return e;
        }
        function ej() {
            var e, n, i, a;
            return (e = eI), (n = eI), 61 === t.charCodeAt(eI) ? ((i = U), eI++) : ((i = r), 0 === eC && eO(G)), i !== r && (a = eX()) !== r ? (n = i = [i, a]) : ((eI = n), (n = l)), n !== r && (n = t.substring(e, eI)), (e = n) === r && (e = e$()), e;
        }
        function eH() {
            var e, n, i, a, s, o;
            return (e = eI), (n = ez()) !== r && (i = ej()) !== r && ez() !== r ? (123 === t.charCodeAt(eI) ? ((a = _), eI++) : ((a = r), 0 === eC && eO(p)), a !== r && ez() !== r && (s = ex()) !== r && ez() !== r ? (125 === t.charCodeAt(eI) ? ((o = E), eI++) : ((o = r), 0 === eC && eO(v)), o !== r ? ((eT = e), (e = n = B(i, s))) : ((eI = e), (e = l))) : ((eI = e), (e = l))) : ((eI = e), (e = l)), e;
        }
        function eY() {
            var e, n, i;
            return (e = eI), t.substr(eI, 7) === Z ? ((n = Z), (eI += 7)) : ((n = r), 0 === eC && eO(F)), n !== r && ez() !== r && (i = eX()) !== r ? ((eT = e), (e = n = V(i))) : ((eI = e), (e = l)), e;
        }
        function eW() {
            var e, t, n, i;
            if (((e = eI), (t = eY()) === r && (t = h), t !== r)) {
                if (ez() !== r) {
                    if (((n = []), (i = eH()) !== r)) for (; i !== r; ) n.push(i), (i = eH());
                    else n = l;
                    n !== r ? ((eT = e), (e = t = j(t, n))) : ((eI = e), (e = l));
                } else (eI = e), (e = l);
            } else (eI = e), (e = l);
            return e;
        }
        function eK() {
            var e, n;
            if ((eC++, (e = []), Y.test(t.charAt(eI)) ? ((n = t.charAt(eI)), eI++) : ((n = r), 0 === eC && eO(W)), n !== r)) for (; n !== r; ) e.push(n), Y.test(t.charAt(eI)) ? ((n = t.charAt(eI)), eI++) : ((n = r), 0 === eC && eO(W));
            else e = l;
            return eC--, e === r && ((n = r), 0 === eC && eO(H)), e;
        }
        function ez() {
            var e, n, i;
            for (eC++, e = eI, n = [], i = eK(); i !== r; ) n.push(i), (i = eK());
            return n !== r && (n = t.substring(e, eI)), (e = n), eC--, e === r && ((n = r), 0 === eC && eO(K)), e;
        }
        function eq() {
            var e;
            return z.test(t.charAt(eI)) ? ((e = t.charAt(eI)), eI++) : ((e = r), 0 === eC && eO(q)), e;
        }
        function eQ() {
            var e;
            return Q.test(t.charAt(eI)) ? ((e = t.charAt(eI)), eI++) : ((e = r), 0 === eC && eO(X)), e;
        }
        function eX() {
            var e, n, i, a, s, o;
            if (((e = eI), 48 === t.charCodeAt(eI) ? ((n = J), eI++) : ((n = r), 0 === eC && eO($)), n === r)) {
                if (((n = eI), (i = eI), ee.test(t.charAt(eI)) ? ((a = t.charAt(eI)), eI++) : ((a = r), 0 === eC && eO(et)), a !== r)) {
                    for (s = [], o = eq(); o !== r; ) s.push(o), (o = eq());
                    s !== r ? (i = a = [a, s]) : ((eI = i), (i = l));
                } else (eI = i), (i = l);
                i !== r && (i = t.substring(n, eI)), (n = i);
            }
            return n !== r && ((eT = e), (n = en(n))), (e = n);
        }
        function eJ() {
            var e, n, i, a, s, o, u, c;
            return ei.test(t.charAt(eI)) ? ((e = t.charAt(eI)), eI++) : ((e = r), 0 === eC && eO(er)), e === r && ((e = eI), t.substr(eI, 2) === ea ? ((n = ea), (eI += 2)) : ((n = r), 0 === eC && eO(es)), n !== r && ((eT = e), (n = eo())), (e = n) === r && ((e = eI), t.substr(eI, 2) === el ? ((n = el), (eI += 2)) : ((n = r), 0 === eC && eO(eu)), n !== r && ((eT = e), (n = ec())), (e = n) === r && ((e = eI), t.substr(eI, 2) === ed ? ((n = ed), (eI += 2)) : ((n = r), 0 === eC && eO(ef)), n !== r && ((eT = e), (n = e_())), (e = n) === r && ((e = eI), t.substr(eI, 2) === ep ? ((n = ep), (eI += 2)) : ((n = r), 0 === eC && eO(eh)), n !== r && ((eT = e), (n = em())), (e = n) === r && ((e = eI), t.substr(eI, 2) === eg ? ((n = eg), (eI += 2)) : ((n = r), 0 === eC && eO(eE)), n !== r ? ((i = eI), (a = eI), (s = eQ()) !== r && (o = eQ()) !== r && (u = eQ()) !== r && (c = eQ()) !== r ? (a = s = [s, o, u, c]) : ((eI = a), (a = l)), a !== r && (a = t.substring(i, eI)), (i = a) !== r ? ((eT = e), (e = n = ev(i))) : ((eI = e), (e = l))) : ((eI = e), (e = l))))))), e;
        }
        function e$() {
            var e, t, n;
            if (((e = eI), (t = []), (n = eJ()) !== r)) for (; n !== r; ) t.push(n), (n = eJ());
            else t = l;
            return t !== r && ((eT = e), (t = ey(t))), (e = t);
        }
        if ((n = s()) !== r && eI === t.length) return n;
        throw (
            (n !== r &&
                eI < t.length &&
                eO({
                    type: 'end',
                    description: 'end of input'
                }),
            eD(null, eN, eA))
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
