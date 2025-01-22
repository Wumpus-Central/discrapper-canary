n.default = (function () {
    function e(e, n, r, i, a, o) {
        (this.message = e), (this.expected = n), (this.found = r), (this.offset = i), (this.line = a), (this.column = o), (this.name = 'SyntaxError');
    }
    function n(n) {
        var r,
            i = arguments.length > 1 ? arguments[1] : {},
            a = {},
            o = { start: eL },
            s = eL,
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
                    o,
                    s = '';
                for (n = 0, i = e.length; n < i; n += 1) for (r = 0, o = (a = e[n]).length; r < o; r += 1) s += a[r];
                return s;
            },
            d = function (e) {
                return {
                    type: 'messageTextElement',
                    value: e
                };
            },
            f = /^[^ \t\n\r,.+={}#]/,
            p = {
                type: 'class',
                value: '[^ \\t\\n\\r,.+={}#]',
                description: '[^ \\t\\n\\r,.+={}#]'
            },
            h = '{',
            _ = {
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
            y = {
                type: 'literal',
                value: '}',
                description: '"}"'
            },
            b = function (e, n) {
                return {
                    type: 'argumentElement',
                    id: e,
                    format: n && n[2]
                };
            },
            I = 'number',
            T = {
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
            C = 'time',
            N = {
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
            x = function (e) {
                return {
                    type: e.type,
                    ordinal: !1,
                    offset: e.offset || 0,
                    options: e.options
                };
            },
            L = 'selectordinal',
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
            eo = '\\\\',
            es = {
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
            ep = {
                type: 'literal',
                value: '\\{',
                description: '"\\\\{"'
            },
            eh = function () {
                return '{';
            },
            e_ = '\\}',
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
            ey = function (e) {
                return String.fromCharCode(parseInt(e, 16));
            },
            eb = function (e) {
                return e.join('');
            },
            eI = 0,
            eT = 0,
            eS = 0,
            eA = {
                line: 1,
                column: 1,
                seenCR: !1
            },
            eC = 0,
            eN = [],
            eR = 0;
        if ('startRule' in i) {
            if (!(i.startRule in o)) throw Error('Can\'t start parsing from rule "' + i.startRule + '".');
            s = o[i.startRule];
        }
        function eO(e) {
            function r(e, r, i) {
                var a, o;
                for (a = r; a < i; a++) '\n' === (o = n.charAt(a)) ? (!e.seenCR && e.line++, (e.column = 1), (e.seenCR = !1)) : '\r' === o || '\u2028' === o || '\u2029' === o ? (e.line++, (e.column = 1), (e.seenCR = !0)) : (e.column++, (e.seenCR = !1));
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
            if (!(eI < eC)) eI > eC && ((eC = eI), (eN = [])), eN.push(e);
        }
        function ex(r, i, a) {
            function o(e) {
                var n = 1;
                for (
                    e.sort(function (e, n) {
                        return e.description < n.description ? -1 : e.description > n.description ? 1 : 0;
                    });
                    n < e.length;

                )
                    e[n - 1] === e[n] ? e.splice(n, 1) : n++;
            }
            function s(e, n) {
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
                    o = Array(e.length);
                for (a = 0; a < e.length; a++) o[a] = e[a].description;
                return (i = e.length > 1 ? o.slice(0, -1).join(', ') + ' or ' + o[e.length - 1] : o[0]), 'Expected ' + i + ' but ' + (n ? '"' + r(n) + '"' : 'end of input') + ' found.';
            }
            var l = eO(a),
                u = a < n.length ? n.charAt(a) : null;
            return null !== i && o(i), new e(null !== r ? r : s(i, u), i, u, a, l.line, l.column);
        }
        function eL() {
            return ew();
        }
        function ew() {
            var e, n, r;
            for (e = eI, n = [], r = eP(); r !== a; ) n.push(r), (r = eP());
            return n !== a && ((eT = e), (n = l(n))), (e = n);
        }
        function eP() {
            var e;
            return (e = ek()) === a && (e = eB()), e;
        }
        function eM() {
            var e, r, i, o, s, l;
            if (((e = eI), (r = []), (i = eI), (o = eq()) !== a && (s = e0()) !== a && (l = eq()) !== a ? (i = o = [o, s, l]) : ((eI = i), (i = u)), i !== a)) for (; i !== a; ) r.push(i), (i = eI), (o = eq()) !== a && (s = e0()) !== a && (l = eq()) !== a ? (i = o = [o, s, l]) : ((eI = i), (i = u));
            else r = u;
            return r !== a && ((eT = e), (r = c(r))), (e = r) === a && ((e = eI), (r = ez()) !== a && (r = n.substring(e, eI)), (e = r)), e;
        }
        function ek() {
            var e, n;
            return (e = eI), (n = eM()) !== a && ((eT = e), (n = d(n))), (e = n);
        }
        function eU() {
            var e, r, i;
            if ((e = eJ()) === a) {
                if (((e = eI), (r = []), f.test(n.charAt(eI)) ? ((i = n.charAt(eI)), eI++) : ((i = a), 0 === eR && eD(p)), i !== a)) for (; i !== a; ) r.push(i), f.test(n.charAt(eI)) ? ((i = n.charAt(eI)), eI++) : ((i = a), 0 === eR && eD(p));
                else r = u;
                r !== a && (r = n.substring(e, eI)), (e = r);
            }
            return e;
        }
        function eB() {
            var e, r, i, o, s, l, c;
            return (e = eI), 123 === n.charCodeAt(eI) ? ((r = h), eI++) : ((r = a), 0 === eR && eD(_)), r !== a && eq() !== a && (i = eU()) !== a && eq() !== a ? ((o = eI), 44 === n.charCodeAt(eI) ? ((s = g), eI++) : ((s = a), 0 === eR && eD(E)), s !== a && (l = eq()) !== a && (c = eG()) !== a ? (o = s = [s, l, c]) : ((eI = o), (o = u)), o === a && (o = m), o !== a && (s = eq()) !== a ? (125 === n.charCodeAt(eI) ? ((l = v), eI++) : ((l = a), 0 === eR && eD(y)), l !== a ? ((eT = e), (e = r = b(i, o))) : ((eI = e), (e = u))) : ((eI = e), (e = u))) : ((eI = e), (e = u)), e;
        }
        function eG() {
            var e;
            return (e = eZ()) === a && (e = eF()) === a && (e = eV()) === a && (e = ej()), e;
        }
        function eZ() {
            var e, r, i, o, s, l;
            return (e = eI), n.substr(eI, 6) === I ? ((r = I), (eI += 6)) : ((r = a), 0 === eR && eD(T)), r === a && (n.substr(eI, 4) === S ? ((r = S), (eI += 4)) : ((r = a), 0 === eR && eD(A)), r === a && (n.substr(eI, 4) === C ? ((r = C), (eI += 4)) : ((r = a), 0 === eR && eD(N)))), r !== a && eq() !== a ? ((i = eI), 44 === n.charCodeAt(eI) ? ((o = g), eI++) : ((o = a), 0 === eR && eD(E)), o !== a && (s = eq()) !== a && (l = e0()) !== a ? (i = o = [o, s, l]) : ((eI = i), (i = u)), i === a && (i = m), i !== a ? ((eT = e), (e = r = R(r, i))) : ((eI = e), (e = u))) : ((eI = e), (e = u)), e;
        }
        function eF() {
            var e, r, i, o;
            return (e = eI), n.substr(eI, 6) === O ? ((r = O), (eI += 6)) : ((r = a), 0 === eR && eD(D)), r !== a && eq() !== a ? (44 === n.charCodeAt(eI) ? ((i = g), eI++) : ((i = a), 0 === eR && eD(E)), i !== a && eq() !== a && (o = eK()) !== a ? ((eT = e), (e = r = x(o))) : ((eI = e), (e = u))) : ((eI = e), (e = u)), e;
        }
        function eV() {
            var e, r, i, o;
            return (e = eI), n.substr(eI, 13) === L ? ((r = L), (eI += 13)) : ((r = a), 0 === eR && eD(w)), r !== a && eq() !== a ? (44 === n.charCodeAt(eI) ? ((i = g), eI++) : ((i = a), 0 === eR && eD(E)), i !== a && eq() !== a && (o = eK()) !== a ? ((eT = e), (e = r = P(o))) : ((eI = e), (e = u))) : ((eI = e), (e = u)), e;
        }
        function ej() {
            var e, r, i, o, s;
            if (((e = eI), n.substr(eI, 6) === M ? ((r = M), (eI += 6)) : ((r = a), 0 === eR && eD(k)), r !== a)) {
                if (eq() !== a) {
                    if ((44 === n.charCodeAt(eI) ? ((i = g), eI++) : ((i = a), 0 === eR && eD(E)), i !== a)) {
                        if (eq() !== a) {
                            if (((o = []), (s = eY()) !== a)) for (; s !== a; ) o.push(s), (s = eY());
                            else o = u;
                            o !== a ? ((eT = e), (e = r = U(o))) : ((eI = e), (e = u));
                        } else (eI = e), (e = u);
                    } else (eI = e), (e = u);
                } else (eI = e), (e = u);
            } else (eI = e), (e = u);
            return e;
        }
        function eH() {
            var e, r, i, o;
            return (e = eI), (r = eI), 61 === n.charCodeAt(eI) ? ((i = B), eI++) : ((i = a), 0 === eR && eD(G)), i !== a && (o = eJ()) !== a ? (r = i = [i, o]) : ((eI = r), (r = u)), r !== a && (r = n.substring(e, eI)), (e = r) === a && (e = e0()), e;
        }
        function eY() {
            var e, r, i, o, s, l;
            return (e = eI), (r = eq()) !== a && (i = eH()) !== a && eq() !== a ? (123 === n.charCodeAt(eI) ? ((o = h), eI++) : ((o = a), 0 === eR && eD(_)), o !== a && eq() !== a && (s = ew()) !== a && eq() !== a ? (125 === n.charCodeAt(eI) ? ((l = v), eI++) : ((l = a), 0 === eR && eD(y)), l !== a ? ((eT = e), (e = r = Z(i, s))) : ((eI = e), (e = u))) : ((eI = e), (e = u))) : ((eI = e), (e = u)), e;
        }
        function eW() {
            var e, r, i;
            return (e = eI), n.substr(eI, 7) === F ? ((r = F), (eI += 7)) : ((r = a), 0 === eR && eD(V)), r !== a && eq() !== a && (i = eJ()) !== a ? ((eT = e), (e = r = j(i))) : ((eI = e), (e = u)), e;
        }
        function eK() {
            var e, n, r, i;
            if (((e = eI), (n = eW()) === a && (n = m), n !== a)) {
                if (eq() !== a) {
                    if (((r = []), (i = eY()) !== a)) for (; i !== a; ) r.push(i), (i = eY());
                    else r = u;
                    r !== a ? ((eT = e), (e = n = H(n, r))) : ((eI = e), (e = u));
                } else (eI = e), (e = u);
            } else (eI = e), (e = u);
            return e;
        }
        function ez() {
            var e, r;
            if ((eR++, (e = []), W.test(n.charAt(eI)) ? ((r = n.charAt(eI)), eI++) : ((r = a), 0 === eR && eD(K)), r !== a)) for (; r !== a; ) e.push(r), W.test(n.charAt(eI)) ? ((r = n.charAt(eI)), eI++) : ((r = a), 0 === eR && eD(K));
            else e = u;
            return eR--, e === a && ((r = a), 0 === eR && eD(Y)), e;
        }
        function eq() {
            var e, r, i;
            for (eR++, e = eI, r = [], i = ez(); i !== a; ) r.push(i), (i = ez());
            return r !== a && (r = n.substring(e, eI)), (e = r), eR--, e === a && ((r = a), 0 === eR && eD(z)), e;
        }
        function eQ() {
            var e;
            return q.test(n.charAt(eI)) ? ((e = n.charAt(eI)), eI++) : ((e = a), 0 === eR && eD(Q)), e;
        }
        function eX() {
            var e;
            return X.test(n.charAt(eI)) ? ((e = n.charAt(eI)), eI++) : ((e = a), 0 === eR && eD(J)), e;
        }
        function eJ() {
            var e, r, i, o, s, l;
            if (((e = eI), 48 === n.charCodeAt(eI) ? ((r = $), eI++) : ((r = a), 0 === eR && eD(ee)), r === a)) {
                if (((r = eI), (i = eI), et.test(n.charAt(eI)) ? ((o = n.charAt(eI)), eI++) : ((o = a), 0 === eR && eD(en)), o !== a)) {
                    for (s = [], l = eQ(); l !== a; ) s.push(l), (l = eQ());
                    s !== a ? (i = o = [o, s]) : ((eI = i), (i = u));
                } else (eI = i), (i = u);
                i !== a && (i = n.substring(r, eI)), (r = i);
            }
            return r !== a && ((eT = e), (r = er(r))), (e = r);
        }
        function e$() {
            var e, r, i, o, s, l, c, d;
            return ei.test(n.charAt(eI)) ? ((e = n.charAt(eI)), eI++) : ((e = a), 0 === eR && eD(ea)), e === a && ((e = eI), n.substr(eI, 2) === eo ? ((r = eo), (eI += 2)) : ((r = a), 0 === eR && eD(es)), r !== a && ((eT = e), (r = el())), (e = r) === a && ((e = eI), n.substr(eI, 2) === eu ? ((r = eu), (eI += 2)) : ((r = a), 0 === eR && eD(ec)), r !== a && ((eT = e), (r = ed())), (e = r) === a && ((e = eI), n.substr(eI, 2) === ef ? ((r = ef), (eI += 2)) : ((r = a), 0 === eR && eD(ep)), r !== a && ((eT = e), (r = eh())), (e = r) === a && ((e = eI), n.substr(eI, 2) === e_ ? ((r = e_), (eI += 2)) : ((r = a), 0 === eR && eD(em)), r !== a && ((eT = e), (r = eg())), (e = r) === a && ((e = eI), n.substr(eI, 2) === eE ? ((r = eE), (eI += 2)) : ((r = a), 0 === eR && eD(ev)), r !== a ? ((i = eI), (o = eI), (s = eX()) !== a && (l = eX()) !== a && (c = eX()) !== a && (d = eX()) !== a ? (o = s = [s, l, c, d]) : ((eI = o), (o = u)), o !== a && (o = n.substring(i, eI)), (i = o) !== a ? ((eT = e), (e = r = ey(i))) : ((eI = e), (e = u))) : ((eI = e), (e = u))))))), e;
        }
        function e0() {
            var e, n, r;
            if (((e = eI), (n = []), (r = e$()) !== a)) for (; r !== a; ) n.push(r), (r = e$());
            else n = u;
            return n !== a && ((eT = e), (n = eb(n))), (e = n);
        }
        if ((r = s()) !== a && eI === n.length) return r;
        throw (
            (r !== a &&
                eI < n.length &&
                eD({
                    type: 'end',
                    description: 'end of input'
                }),
            ex(null, eN, eC))
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
