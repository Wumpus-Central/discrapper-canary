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
            v = 'number',
            O = {
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
            ev = 0,
            eO = 0,
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
            ev < eT || (ev > eT && ((eT = ev), (eA = [])), eA.push(e));
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
            for (e = ev, t = [], n = eL(); n !== i; ) t.push(n), (n = eL());
            return t !== i && ((eO = e), (t = s(t))), (e = t);
        }
        function eL() {
            var e;
            return (e = eM()) === i && (e = ej()), e;
        }
        function ex() {
            var e, n, r, a, o, s;
            if (((e = ev), (n = []), (r = ev), (a = ez()) !== i && (o = e$()) !== i && (s = ez()) !== i ? (r = a = [a, o, s]) : ((ev = r), (r = l)), r !== i)) for (; r !== i; ) n.push(r), (r = ev), (a = ez()) !== i && (o = e$()) !== i && (s = ez()) !== i ? (r = a = [a, o, s]) : ((ev = r), (r = l));
            else n = l;
            return n !== i && ((eO = e), (n = c(n))), (e = n) === i && ((e = ev), (n = eK()) !== i && (n = t.substring(e, ev)), (e = n)), e;
        }
        function eM() {
            var e, t;
            return (e = ev), (t = ex()) !== i && ((eO = e), (t = u(t))), (e = t);
        }
        function ek() {
            var e, n, r;
            if ((e = eX()) === i) {
                if (((e = ev), (n = []), d.test(t.charAt(ev)) ? ((r = t.charAt(ev)), ev++) : ((r = i), 0 === eN && eR(f)), r !== i)) for (; r !== i; ) n.push(r), d.test(t.charAt(ev)) ? ((r = t.charAt(ev)), ev++) : ((r = i), 0 === eN && eR(f));
                else n = l;
                n !== i && (n = t.substring(e, ev)), (e = n);
            }
            return e;
        }
        function ej() {
            var e, n, r, a, o, s, c;
            return (e = ev), 123 === t.charCodeAt(ev) ? ((n = _), ev++) : ((n = i), 0 === eN && eR(p)), n !== i && ez() !== i && (r = ek()) !== i && ez() !== i ? ((a = ev), 44 === t.charCodeAt(ev) ? ((o = m), ev++) : ((o = i), 0 === eN && eR(g)), o !== i && (s = ez()) !== i && (c = eU()) !== i ? (a = o = [o, s, c]) : ((ev = a), (a = l)), a === i && (a = h), a !== i && (o = ez()) !== i ? (125 === t.charCodeAt(ev) ? ((s = E), ev++) : ((s = i), 0 === eN && eR(b)), s !== i ? ((eO = e), (e = n = y(r, a))) : ((ev = e), (e = l))) : ((ev = e), (e = l))) : ((ev = e), (e = l)), e;
        }
        function eU() {
            var e;
            return (e = eG()) === i && (e = eB()) === i && (e = eV()) === i && (e = eF()), e;
        }
        function eG() {
            var e, n, r, a, o, s;
            return (e = ev), t.substr(ev, 6) === v ? ((n = v), (ev += 6)) : ((n = i), 0 === eN && eR(O)), n === i && (t.substr(ev, 4) === I ? ((n = I), (ev += 4)) : ((n = i), 0 === eN && eR(S)), n === i && (t.substr(ev, 4) === T ? ((n = T), (ev += 4)) : ((n = i), 0 === eN && eR(A)))), n !== i && ez() !== i ? ((r = ev), 44 === t.charCodeAt(ev) ? ((a = m), ev++) : ((a = i), 0 === eN && eR(g)), a !== i && (o = ez()) !== i && (s = e$()) !== i ? (r = a = [a, o, s]) : ((ev = r), (r = l)), r === i && (r = h), r !== i ? ((eO = e), (e = n = N(n, r))) : ((ev = e), (e = l))) : ((ev = e), (e = l)), e;
        }
        function eB() {
            var e, n, r, a;
            return (e = ev), t.substr(ev, 6) === C ? ((n = C), (ev += 6)) : ((n = i), 0 === eN && eR(R)), n !== i && ez() !== i ? (44 === t.charCodeAt(ev) ? ((r = m), ev++) : ((r = i), 0 === eN && eR(g)), r !== i && ez() !== i && (a = eW()) !== i ? ((eO = e), (e = n = P(a))) : ((ev = e), (e = l))) : ((ev = e), (e = l)), e;
        }
        function eV() {
            var e, n, r, a;
            return (e = ev), t.substr(ev, 13) === w ? ((n = w), (ev += 13)) : ((n = i), 0 === eN && eR(D)), n !== i && ez() !== i ? (44 === t.charCodeAt(ev) ? ((r = m), ev++) : ((r = i), 0 === eN && eR(g)), r !== i && ez() !== i && (a = eW()) !== i ? ((eO = e), (e = n = L(a))) : ((ev = e), (e = l))) : ((ev = e), (e = l)), e;
        }
        function eF() {
            var e, n, r, a, o;
            if (((e = ev), t.substr(ev, 6) === x ? ((n = x), (ev += 6)) : ((n = i), 0 === eN && eR(M)), n !== i))
                if (ez() !== i)
                    if ((44 === t.charCodeAt(ev) ? ((r = m), ev++) : ((r = i), 0 === eN && eR(g)), r !== i))
                        if (ez() !== i) {
                            if (((a = []), (o = eH()) !== i)) for (; o !== i; ) a.push(o), (o = eH());
                            else a = l;
                            a !== i ? ((eO = e), (e = n = k(a))) : ((ev = e), (e = l));
                        } else (ev = e), (e = l);
                    else (ev = e), (e = l);
                else (ev = e), (e = l);
            else (ev = e), (e = l);
            return e;
        }
        function eZ() {
            var e, n, r, a;
            return (e = ev), (n = ev), 61 === t.charCodeAt(ev) ? ((r = j), ev++) : ((r = i), 0 === eN && eR(U)), r !== i && (a = eX()) !== i ? (n = r = [r, a]) : ((ev = n), (n = l)), n !== i && (n = t.substring(e, ev)), (e = n) === i && (e = e$()), e;
        }
        function eH() {
            var e, n, r, a, o, s;
            return (e = ev), (n = ez()) !== i && (r = eZ()) !== i && ez() !== i ? (123 === t.charCodeAt(ev) ? ((a = _), ev++) : ((a = i), 0 === eN && eR(p)), a !== i && ez() !== i && (o = eD()) !== i && ez() !== i ? (125 === t.charCodeAt(ev) ? ((s = E), ev++) : ((s = i), 0 === eN && eR(b)), s !== i ? ((eO = e), (e = n = G(r, o))) : ((ev = e), (e = l))) : ((ev = e), (e = l))) : ((ev = e), (e = l)), e;
        }
        function eY() {
            var e, n, r;
            return (e = ev), t.substr(ev, 7) === B ? ((n = B), (ev += 7)) : ((n = i), 0 === eN && eR(V)), n !== i && ez() !== i && (r = eX()) !== i ? ((eO = e), (e = n = F(r))) : ((ev = e), (e = l)), e;
        }
        function eW() {
            var e, t, n, r;
            if (((e = ev), (t = eY()) === i && (t = h), t !== i))
                if (ez() !== i) {
                    if (((n = []), (r = eH()) !== i)) for (; r !== i; ) n.push(r), (r = eH());
                    else n = l;
                    n !== i ? ((eO = e), (e = t = Z(t, n))) : ((ev = e), (e = l));
                } else (ev = e), (e = l);
            else (ev = e), (e = l);
            return e;
        }
        function eK() {
            var e, n;
            if ((eN++, (e = []), Y.test(t.charAt(ev)) ? ((n = t.charAt(ev)), ev++) : ((n = i), 0 === eN && eR(W)), n !== i)) for (; n !== i; ) e.push(n), Y.test(t.charAt(ev)) ? ((n = t.charAt(ev)), ev++) : ((n = i), 0 === eN && eR(W));
            else e = l;
            return eN--, e === i && ((n = i), 0 === eN && eR(H)), e;
        }
        function ez() {
            var e, n, r;
            for (eN++, e = ev, n = [], r = eK(); r !== i; ) n.push(r), (r = eK());
            return n !== i && (n = t.substring(e, ev)), (e = n), eN--, e === i && ((n = i), 0 === eN && eR(K)), e;
        }
        function eq() {
            var e;
            return z.test(t.charAt(ev)) ? ((e = t.charAt(ev)), ev++) : ((e = i), 0 === eN && eR(q)), e;
        }
        function eQ() {
            var e;
            return Q.test(t.charAt(ev)) ? ((e = t.charAt(ev)), ev++) : ((e = i), 0 === eN && eR(X)), e;
        }
        function eX() {
            var e, n, r, a, o, s;
            if (((e = ev), 48 === t.charCodeAt(ev) ? ((n = J), ev++) : ((n = i), 0 === eN && eR($)), n === i)) {
                if (((n = ev), (r = ev), ee.test(t.charAt(ev)) ? ((a = t.charAt(ev)), ev++) : ((a = i), 0 === eN && eR(et)), a !== i)) {
                    for (o = [], s = eq(); s !== i; ) o.push(s), (s = eq());
                    o !== i ? (r = a = [a, o]) : ((ev = r), (r = l));
                } else (ev = r), (r = l);
                r !== i && (r = t.substring(n, ev)), (n = r);
            }
            return n !== i && ((eO = e), (n = en(n))), (e = n);
        }
        function eJ() {
            var e, n, r, a, o, s, c, u;
            return er.test(t.charAt(ev)) ? ((e = t.charAt(ev)), ev++) : ((e = i), 0 === eN && eR(ei)), e === i && ((e = ev), t.substr(ev, 2) === ea ? ((n = ea), (ev += 2)) : ((n = i), 0 === eN && eR(eo)), n !== i && ((eO = e), (n = es())), (e = n) === i && ((e = ev), t.substr(ev, 2) === el ? ((n = el), (ev += 2)) : ((n = i), 0 === eN && eR(ec)), n !== i && ((eO = e), (n = eu())), (e = n) === i && ((e = ev), t.substr(ev, 2) === ed ? ((n = ed), (ev += 2)) : ((n = i), 0 === eN && eR(ef)), n !== i && ((eO = e), (n = e_())), (e = n) === i && ((e = ev), t.substr(ev, 2) === ep ? ((n = ep), (ev += 2)) : ((n = i), 0 === eN && eR(eh)), n !== i && ((eO = e), (n = em())), (e = n) === i && ((e = ev), t.substr(ev, 2) === eg ? ((n = eg), (ev += 2)) : ((n = i), 0 === eN && eR(eE)), n !== i ? ((r = ev), (a = ev), (o = eQ()) !== i && (s = eQ()) !== i && (c = eQ()) !== i && (u = eQ()) !== i ? (a = o = [o, s, c, u]) : ((ev = a), (a = l)), a !== i && (a = t.substring(r, ev)), (r = a) !== i ? ((eO = e), (e = n = eb(r))) : ((ev = e), (e = l))) : ((ev = e), (e = l))))))), e;
        }
        function e$() {
            var e, t, n;
            if (((e = ev), (t = []), (n = eJ()) !== i)) for (; n !== i; ) t.push(n), (n = eJ());
            else t = l;
            return t !== i && ((eO = e), (t = ey(t))), (e = t);
        }
        if ((n = o()) !== i && ev === t.length) return n;
        throw (
            (n !== i &&
                ev < t.length &&
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
