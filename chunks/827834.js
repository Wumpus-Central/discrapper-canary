t.default = (function () {
    function e(e, t, n, r, i, o) {
        (this.message = e), (this.expected = t), (this.found = n), (this.offset = r), (this.line = i), (this.column = o), (this.name = 'SyntaxError');
    }
    function t(t) {
        var n,
            r = arguments.length > 1 ? arguments[1] : {},
            i = {},
            o = { start: ew },
            a = ew,
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
                    o,
                    a = '';
                for (t = 0, r = e.length; t < r; t += 1) for (n = 0, o = (i = e[t]).length; n < o; n += 1) a += i[n];
                return a;
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
            p = '{',
            _ = {
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
            b = function (e, t) {
                return {
                    type: 'argumentElement',
                    id: e,
                    format: t && t[2]
                };
            },
            y = 'number',
            O = {
                type: 'literal',
                value: 'number',
                description: '"number"'
            },
            S = 'date',
            I = {
                type: 'literal',
                value: 'date',
                description: '"date"'
            },
            T = 'time',
            N = {
                type: 'literal',
                value: 'time',
                description: '"time"'
            },
            A = function (e, t) {
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
            x = function (e) {
                return {
                    type: e.type,
                    ordinal: !0,
                    offset: e.offset || 0,
                    options: e.options
                };
            },
            L = 'select',
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
            Z = {
                type: 'literal',
                value: 'offset:',
                description: '"offset:"'
            },
            F = function (e) {
                return e;
            },
            V = function (e, t) {
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
            W = /^[ \t\n\r]/,
            Y = {
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
            eo = '\\\\',
            ea = {
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
            ep = function () {
                return '{';
            },
            e_ = '\\}',
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
            eb = function (e) {
                return e.join('');
            },
            ey = 0,
            eO = 0,
            eS = 0,
            eI = {
                line: 1,
                column: 1,
                seenCR: !1
            },
            eT = 0,
            eN = [],
            eA = 0;
        if ('startRule' in r) {
            if (!(r.startRule in o)) throw Error('Can\'t start parsing from rule "' + r.startRule + '".');
            a = o[r.startRule];
        }
        function eC(e) {
            function n(e, n, r) {
                var i, o;
                for (i = n; i < r; i++) '\n' === (o = t.charAt(i)) ? (!e.seenCR && e.line++, (e.column = 1), (e.seenCR = !1)) : '\r' === o || '\u2028' === o || '\u2029' === o ? (e.line++, (e.column = 1), (e.seenCR = !0)) : (e.column++, (e.seenCR = !1));
            }
            return (
                eS !== e &&
                    (eS > e &&
                        ((eS = 0),
                        (eI = {
                            line: 1,
                            column: 1,
                            seenCR: !1
                        })),
                    n(eI, eS, e),
                    (eS = e)),
                eI
            );
        }
        function eR(e) {
            !(ey < eT) && (ey > eT && ((eT = ey), (eN = [])), eN.push(e));
        }
        function eP(n, r, i) {
            function o(e) {
                var t = 1;
                for (
                    e.sort(function (e, t) {
                        return e.description < t.description ? -1 : +(e.description > t.description);
                    });
                    t < e.length;

                )
                    e[t - 1] === e[t] ? e.splice(t, 1) : t++;
            }
            function a(e, t) {
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
            return null !== r && o(r), new e(null !== n ? n : a(r, l), r, l, i, s.line, s.column);
        }
        function ew() {
            return eD();
        }
        function eD() {
            var e, t, n;
            for (e = ey, t = [], n = ex(); n !== i; ) t.push(n), (n = ex());
            return t !== i && ((eO = e), (t = s(t))), (e = t);
        }
        function ex() {
            var e;
            return (e = eM()) === i && (e = ej()), e;
        }
        function eL() {
            var e, n, r, o, a, s;
            if (((e = ey), (n = []), (r = ey), (o = ez()) !== i && (a = e$()) !== i && (s = ez()) !== i ? (r = o = [o, a, s]) : ((ey = r), (r = l)), r !== i)) for (; r !== i; ) n.push(r), (r = ey), (o = ez()) !== i && (a = e$()) !== i && (s = ez()) !== i ? (r = o = [o, a, s]) : ((ey = r), (r = l));
            else n = l;
            return n !== i && ((eO = e), (n = c(n))), (e = n) === i && ((e = ey), (n = eK()) !== i && (n = t.substring(e, ey)), (e = n)), e;
        }
        function eM() {
            var e, t;
            return (e = ey), (t = eL()) !== i && ((eO = e), (t = u(t))), (e = t);
        }
        function ek() {
            var e, n, r;
            if ((e = eX()) === i) {
                if (((e = ey), (n = []), d.test(t.charAt(ey)) ? ((r = t.charAt(ey)), ey++) : ((r = i), 0 === eA && eR(f)), r !== i)) for (; r !== i; ) n.push(r), d.test(t.charAt(ey)) ? ((r = t.charAt(ey)), ey++) : ((r = i), 0 === eA && eR(f));
                else n = l;
                n !== i && (n = t.substring(e, ey)), (e = n);
            }
            return e;
        }
        function ej() {
            var e, n, r, o, a, s, c;
            return (e = ey), 123 === t.charCodeAt(ey) ? ((n = p), ey++) : ((n = i), 0 === eA && eR(_)), n !== i && ez() !== i && (r = ek()) !== i && ez() !== i ? ((o = ey), 44 === t.charCodeAt(ey) ? ((a = m), ey++) : ((a = i), 0 === eA && eR(g)), a !== i && (s = ez()) !== i && (c = eU()) !== i ? (o = a = [a, s, c]) : ((ey = o), (o = l)), o === i && (o = h), o !== i && (a = ez()) !== i ? (125 === t.charCodeAt(ey) ? ((s = E), ey++) : ((s = i), 0 === eA && eR(v)), s !== i ? ((eO = e), (e = n = b(r, o))) : ((ey = e), (e = l))) : ((ey = e), (e = l))) : ((ey = e), (e = l)), e;
        }
        function eU() {
            var e;
            return (e = eG()) === i && (e = eB()) === i && (e = eZ()) === i && (e = eF()), e;
        }
        function eG() {
            var e, n, r, o, a, s;
            return (e = ey), t.substr(ey, 6) === y ? ((n = y), (ey += 6)) : ((n = i), 0 === eA && eR(O)), n === i && (t.substr(ey, 4) === S ? ((n = S), (ey += 4)) : ((n = i), 0 === eA && eR(I)), n === i && (t.substr(ey, 4) === T ? ((n = T), (ey += 4)) : ((n = i), 0 === eA && eR(N)))), n !== i && ez() !== i ? ((r = ey), 44 === t.charCodeAt(ey) ? ((o = m), ey++) : ((o = i), 0 === eA && eR(g)), o !== i && (a = ez()) !== i && (s = e$()) !== i ? (r = o = [o, a, s]) : ((ey = r), (r = l)), r === i && (r = h), r !== i ? ((eO = e), (e = n = A(n, r))) : ((ey = e), (e = l))) : ((ey = e), (e = l)), e;
        }
        function eB() {
            var e, n, r, o;
            return (e = ey), t.substr(ey, 6) === C ? ((n = C), (ey += 6)) : ((n = i), 0 === eA && eR(R)), n !== i && ez() !== i ? (44 === t.charCodeAt(ey) ? ((r = m), ey++) : ((r = i), 0 === eA && eR(g)), r !== i && ez() !== i && (o = eY()) !== i ? ((eO = e), (e = n = P(o))) : ((ey = e), (e = l))) : ((ey = e), (e = l)), e;
        }
        function eZ() {
            var e, n, r, o;
            return (e = ey), t.substr(ey, 13) === w ? ((n = w), (ey += 13)) : ((n = i), 0 === eA && eR(D)), n !== i && ez() !== i ? (44 === t.charCodeAt(ey) ? ((r = m), ey++) : ((r = i), 0 === eA && eR(g)), r !== i && ez() !== i && (o = eY()) !== i ? ((eO = e), (e = n = x(o))) : ((ey = e), (e = l))) : ((ey = e), (e = l)), e;
        }
        function eF() {
            var e, n, r, o, a;
            if (((e = ey), t.substr(ey, 6) === L ? ((n = L), (ey += 6)) : ((n = i), 0 === eA && eR(M)), n !== i)) {
                if (ez() !== i) {
                    if ((44 === t.charCodeAt(ey) ? ((r = m), ey++) : ((r = i), 0 === eA && eR(g)), r !== i)) {
                        if (ez() !== i) {
                            if (((o = []), (a = eH()) !== i)) for (; a !== i; ) o.push(a), (a = eH());
                            else o = l;
                            o !== i ? ((eO = e), (e = n = k(o))) : ((ey = e), (e = l));
                        } else (ey = e), (e = l);
                    } else (ey = e), (e = l);
                } else (ey = e), (e = l);
            } else (ey = e), (e = l);
            return e;
        }
        function eV() {
            var e, n, r, o;
            return (e = ey), (n = ey), 61 === t.charCodeAt(ey) ? ((r = j), ey++) : ((r = i), 0 === eA && eR(U)), r !== i && (o = eX()) !== i ? (n = r = [r, o]) : ((ey = n), (n = l)), n !== i && (n = t.substring(e, ey)), (e = n) === i && (e = e$()), e;
        }
        function eH() {
            var e, n, r, o, a, s;
            return (e = ey), (n = ez()) !== i && (r = eV()) !== i && ez() !== i ? (123 === t.charCodeAt(ey) ? ((o = p), ey++) : ((o = i), 0 === eA && eR(_)), o !== i && ez() !== i && (a = eD()) !== i && ez() !== i ? (125 === t.charCodeAt(ey) ? ((s = E), ey++) : ((s = i), 0 === eA && eR(v)), s !== i ? ((eO = e), (e = n = G(r, a))) : ((ey = e), (e = l))) : ((ey = e), (e = l))) : ((ey = e), (e = l)), e;
        }
        function eW() {
            var e, n, r;
            return (e = ey), t.substr(ey, 7) === B ? ((n = B), (ey += 7)) : ((n = i), 0 === eA && eR(Z)), n !== i && ez() !== i && (r = eX()) !== i ? ((eO = e), (e = n = F(r))) : ((ey = e), (e = l)), e;
        }
        function eY() {
            var e, t, n, r;
            if (((e = ey), (t = eW()) === i && (t = h), t !== i)) {
                if (ez() !== i) {
                    if (((n = []), (r = eH()) !== i)) for (; r !== i; ) n.push(r), (r = eH());
                    else n = l;
                    n !== i ? ((eO = e), (e = t = V(t, n))) : ((ey = e), (e = l));
                } else (ey = e), (e = l);
            } else (ey = e), (e = l);
            return e;
        }
        function eK() {
            var e, n;
            if ((eA++, (e = []), W.test(t.charAt(ey)) ? ((n = t.charAt(ey)), ey++) : ((n = i), 0 === eA && eR(Y)), n !== i)) for (; n !== i; ) e.push(n), W.test(t.charAt(ey)) ? ((n = t.charAt(ey)), ey++) : ((n = i), 0 === eA && eR(Y));
            else e = l;
            return eA--, e === i && ((n = i), 0 === eA && eR(H)), e;
        }
        function ez() {
            var e, n, r;
            for (eA++, e = ey, n = [], r = eK(); r !== i; ) n.push(r), (r = eK());
            return n !== i && (n = t.substring(e, ey)), (e = n), eA--, e === i && ((n = i), 0 === eA && eR(K)), e;
        }
        function eq() {
            var e;
            return z.test(t.charAt(ey)) ? ((e = t.charAt(ey)), ey++) : ((e = i), 0 === eA && eR(q)), e;
        }
        function eQ() {
            var e;
            return Q.test(t.charAt(ey)) ? ((e = t.charAt(ey)), ey++) : ((e = i), 0 === eA && eR(X)), e;
        }
        function eX() {
            var e, n, r, o, a, s;
            if (((e = ey), 48 === t.charCodeAt(ey) ? ((n = J), ey++) : ((n = i), 0 === eA && eR($)), n === i)) {
                if (((n = ey), (r = ey), ee.test(t.charAt(ey)) ? ((o = t.charAt(ey)), ey++) : ((o = i), 0 === eA && eR(et)), o !== i)) {
                    for (a = [], s = eq(); s !== i; ) a.push(s), (s = eq());
                    a !== i ? (r = o = [o, a]) : ((ey = r), (r = l));
                } else (ey = r), (r = l);
                r !== i && (r = t.substring(n, ey)), (n = r);
            }
            return n !== i && ((eO = e), (n = en(n))), (e = n);
        }
        function eJ() {
            var e, n, r, o, a, s, c, u;
            return er.test(t.charAt(ey)) ? ((e = t.charAt(ey)), ey++) : ((e = i), 0 === eA && eR(ei)), e === i && ((e = ey), t.substr(ey, 2) === eo ? ((n = eo), (ey += 2)) : ((n = i), 0 === eA && eR(ea)), n !== i && ((eO = e), (n = es())), (e = n) === i && ((e = ey), t.substr(ey, 2) === el ? ((n = el), (ey += 2)) : ((n = i), 0 === eA && eR(ec)), n !== i && ((eO = e), (n = eu())), (e = n) === i && ((e = ey), t.substr(ey, 2) === ed ? ((n = ed), (ey += 2)) : ((n = i), 0 === eA && eR(ef)), n !== i && ((eO = e), (n = ep())), (e = n) === i && ((e = ey), t.substr(ey, 2) === e_ ? ((n = e_), (ey += 2)) : ((n = i), 0 === eA && eR(eh)), n !== i && ((eO = e), (n = em())), (e = n) === i && ((e = ey), t.substr(ey, 2) === eg ? ((n = eg), (ey += 2)) : ((n = i), 0 === eA && eR(eE)), n !== i ? ((r = ey), (o = ey), (a = eQ()) !== i && (s = eQ()) !== i && (c = eQ()) !== i && (u = eQ()) !== i ? (o = a = [a, s, c, u]) : ((ey = o), (o = l)), o !== i && (o = t.substring(r, ey)), (r = o) !== i ? ((eO = e), (e = n = ev(r))) : ((ey = e), (e = l))) : ((ey = e), (e = l))))))), e;
        }
        function e$() {
            var e, t, n;
            if (((e = ey), (t = []), (n = eJ()) !== i)) for (; n !== i; ) t.push(n), (n = eJ());
            else t = l;
            return t !== i && ((eO = e), (t = eb(t))), (e = t);
        }
        if ((n = a()) !== i && ey === t.length) return n;
        throw (
            (n !== i &&
                ey < t.length &&
                eR({
                    type: 'end',
                    description: 'end of input'
                }),
            eP(null, eN, eT))
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
