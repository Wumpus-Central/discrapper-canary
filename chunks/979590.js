!(function (t) {
    var n = /^\s+/,
        i = /\s+$/,
        r = 0,
        a = t.round,
        s = t.min,
        o = t.max,
        l = t.random;
    function u(e, t) {
        if (((t = t || {}), (e = e || '') instanceof u)) return e;
        if (!(this instanceof u)) return new u(e, t);
        var n = c(e);
        (this._originalInput = e), (this._r = n.r), (this._g = n.g), (this._b = n.b), (this._a = n.a), (this._roundA = a(100 * this._a) / 100), (this._format = t.format || n.format), (this._gradientType = t.gradientType), this._r < 1 && (this._r = a(this._r)), this._g < 1 && (this._g = a(this._g)), this._b < 1 && (this._b = a(this._b)), (this._ok = n.ok), (this._tc_id = r++);
    }
    function c(e) {
        var t = {
                r: 0,
                g: 0,
                b: 0
            },
            n = 1,
            i = null,
            r = null,
            a = null,
            l = !1,
            u = !1;
        return (
            'string' == typeof e && (e = K(e)),
            'object' == typeof e && (W(e.r) && W(e.g) && W(e.b) ? ((t = d(e.r, e.g, e.b)), (l = !0), (u = '%' === String(e.r).substr(-1) ? 'prgb' : 'rgb')) : W(e.h) && W(e.s) && W(e.v) ? ((i = V(e.s)), (r = V(e.v)), (t = h(e.h, i, r)), (l = !0), (u = 'hsv')) : W(e.h) && W(e.s) && W(e.l) && ((i = V(e.s)), (a = V(e.l)), (t = _(e.h, i, a)), (l = !0), (u = 'hsl')), e.hasOwnProperty('a') && (n = e.a)),
            (n = M(n)),
            {
                ok: l,
                format: e.format || u,
                r: s(255, o(t.r, 0)),
                g: s(255, o(t.g, 0)),
                b: s(255, o(t.b, 0)),
                a: n
            }
        );
    }
    function d(e, t, n) {
        return {
            r: 255 * k(e, 255),
            g: 255 * k(t, 255),
            b: 255 * k(n, 255)
        };
    }
    function f(e, t, n) {
        e = k(e, 255);
        var i,
            r,
            a = o(e, (t = k(t, 255)), (n = k(n, 255))),
            l = s(e, t, n),
            u = (a + l) / 2;
        if (a == l) i = r = 0;
        else {
            var c = a - l;
            switch (((r = u > 0.5 ? c / (2 - a - l) : c / (a + l)), a)) {
                case e:
                    i = (t - n) / c + (t < n ? 6 : 0);
                    break;
                case t:
                    i = (n - e) / c + 2;
                    break;
                case n:
                    i = (e - t) / c + 4;
            }
            i /= 6;
        }
        return {
            h: i,
            s: r,
            l: u
        };
    }
    function _(e, t, n) {
        var i, r, a;
        function s(e, t, n) {
            return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
        }
        if (((e = k(e, 360)), (t = k(t, 100)), (n = k(n, 100)), 0 === t)) i = r = a = n;
        else {
            var o = n < 0.5 ? n * (1 + t) : n + t - n * t,
                l = 2 * n - o;
            (i = s(l, o, e + 1 / 3)), (r = s(l, o, e)), (a = s(l, o, e - 1 / 3));
        }
        return {
            r: 255 * i,
            g: 255 * r,
            b: 255 * a
        };
    }
    function p(e, t, n) {
        e = k(e, 255);
        var i,
            r,
            a = o(e, (t = k(t, 255)), (n = k(n, 255))),
            l = s(e, t, n),
            u = a,
            c = a - l;
        if (((r = 0 === a ? 0 : c / a), a == l)) i = 0;
        else {
            switch (a) {
                case e:
                    i = (t - n) / c + (t < n ? 6 : 0);
                    break;
                case t:
                    i = (n - e) / c + 2;
                    break;
                case n:
                    i = (e - t) / c + 4;
            }
            i /= 6;
        }
        return {
            h: i,
            s: r,
            v: u
        };
    }
    function h(e, n, i) {
        (e = 6 * k(e, 360)), (n = k(n, 100)), (i = k(i, 100));
        var r = t.floor(e),
            a = e - r,
            s = i * (1 - n),
            o = i * (1 - a * n),
            l = i * (1 - (1 - a) * n),
            u = r % 6;
        return {
            r: 255 * [i, o, s, s, l, i][u],
            g: 255 * [l, i, i, o, s, s][u],
            b: 255 * [s, s, l, i, i, o][u]
        };
    }
    function m(e, t, n, i) {
        var r = [F(a(e).toString(16)), F(a(t).toString(16)), F(a(n).toString(16))];
        return i && r[0].charAt(0) == r[0].charAt(1) && r[1].charAt(0) == r[1].charAt(1) && r[2].charAt(0) == r[2].charAt(1) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join('');
    }
    function g(e, t, n, i, r) {
        var s = [F(a(e).toString(16)), F(a(t).toString(16)), F(a(n).toString(16)), F(j(i))];
        return r && s[0].charAt(0) == s[0].charAt(1) && s[1].charAt(0) == s[1].charAt(1) && s[2].charAt(0) == s[2].charAt(1) && s[3].charAt(0) == s[3].charAt(1) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0) : s.join('');
    }
    function E(e, t, n, i) {
        return [F(j(i)), F(a(e).toString(16)), F(a(t).toString(16)), F(a(n).toString(16))].join('');
    }
    function v(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = u(e).toHsl();
        return (n.s -= t / 100), (n.s = U(n.s)), u(n);
    }
    function y(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = u(e).toHsl();
        return (n.s += t / 100), (n.s = U(n.s)), u(n);
    }
    function I(e) {
        return u(e).desaturate(100);
    }
    function T(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = u(e).toHsl();
        return (n.l += t / 100), (n.l = U(n.l)), u(n);
    }
    function b(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = u(e).toRgb();
        return (n.r = o(0, s(255, n.r - a(-((t / 100) * 255))))), (n.g = o(0, s(255, n.g - a(-((t / 100) * 255))))), (n.b = o(0, s(255, n.b - a(-((t / 100) * 255))))), u(n);
    }
    function S(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = u(e).toHsl();
        return (n.l -= t / 100), (n.l = U(n.l)), u(n);
    }
    function A(e, t) {
        var n = u(e).toHsl(),
            i = (n.h + t) % 360;
        return (n.h = i < 0 ? 360 + i : i), u(n);
    }
    function N(e) {
        var t = u(e).toHsl();
        return (t.h = (t.h + 180) % 360), u(t);
    }
    function C(e) {
        var t = u(e).toHsl(),
            n = t.h;
        return [
            u(e),
            u({
                h: (n + 120) % 360,
                s: t.s,
                l: t.l
            }),
            u({
                h: (n + 240) % 360,
                s: t.s,
                l: t.l
            })
        ];
    }
    function R(e) {
        var t = u(e).toHsl(),
            n = t.h;
        return [
            u(e),
            u({
                h: (n + 90) % 360,
                s: t.s,
                l: t.l
            }),
            u({
                h: (n + 180) % 360,
                s: t.s,
                l: t.l
            }),
            u({
                h: (n + 270) % 360,
                s: t.s,
                l: t.l
            })
        ];
    }
    function O(e) {
        var t = u(e).toHsl(),
            n = t.h;
        return [
            u(e),
            u({
                h: (n + 72) % 360,
                s: t.s,
                l: t.l
            }),
            u({
                h: (n + 216) % 360,
                s: t.s,
                l: t.l
            })
        ];
    }
    function D(e, t, n) {
        (t = t || 6), (n = n || 30);
        var i = u(e).toHsl(),
            r = 360 / n,
            a = [u(e)];
        for (i.h = (i.h - ((r * t) >> 1) + 720) % 360; --t; ) (i.h = (i.h + r) % 360), a.push(u(i));
        return a;
    }
    function x(e, t) {
        t = t || 6;
        for (var n = u(e).toHsv(), i = n.h, r = n.s, a = n.v, s = [], o = 1 / t; t--; )
            s.push(
                u({
                    h: i,
                    s: r,
                    v: a
                })
            ),
                (a = (a + o) % 1);
        return s;
    }
    (u.prototype = {
        isDark: function () {
            return 128 > this.getBrightness();
        },
        isLight: function () {
            return !this.isDark();
        },
        isValid: function () {
            return this._ok;
        },
        getOriginalInput: function () {
            return this._originalInput;
        },
        getFormat: function () {
            return this._format;
        },
        getAlpha: function () {
            return this._a;
        },
        getBrightness: function () {
            var e = this.toRgb();
            return (299 * e.r + 587 * e.g + 114 * e.b) / 1000;
        },
        getLuminance: function () {
            var e,
                n,
                i,
                r,
                a,
                s = this.toRgb();
            return (e = s.r / 255), (n = s.g / 255), (i = s.b / 255), (r = e <= 0.03928 ? e / 12.92 : t.pow((e + 0.055) / 1.055, 2.4)), 0.2126 * r + 0.7152 * (n <= 0.03928 ? n / 12.92 : t.pow((n + 0.055) / 1.055, 2.4)) + 0.0722 * (a = i <= 0.03928 ? i / 12.92 : t.pow((i + 0.055) / 1.055, 2.4));
        },
        setAlpha: function (e) {
            return (this._a = M(e)), (this._roundA = a(100 * this._a) / 100), this;
        },
        toHsv: function () {
            var e = p(this._r, this._g, this._b);
            return {
                h: 360 * e.h,
                s: e.s,
                v: e.v,
                a: this._a
            };
        },
        toHsvString: function () {
            var e = p(this._r, this._g, this._b),
                t = a(360 * e.h),
                n = a(100 * e.s),
                i = a(100 * e.v);
            return 1 == this._a ? 'hsv(' + t + ', ' + n + '%, ' + i + '%)' : 'hsva(' + t + ', ' + n + '%, ' + i + '%, ' + this._roundA + ')';
        },
        toHsl: function () {
            var e = f(this._r, this._g, this._b);
            return {
                h: 360 * e.h,
                s: e.s,
                l: e.l,
                a: this._a
            };
        },
        toHslString: function () {
            var e = f(this._r, this._g, this._b),
                t = a(360 * e.h),
                n = a(100 * e.s),
                i = a(100 * e.l);
            return 1 == this._a ? 'hsl(' + t + ', ' + n + '%, ' + i + '%)' : 'hsla(' + t + ', ' + n + '%, ' + i + '%, ' + this._roundA + ')';
        },
        toHex: function (e) {
            return m(this._r, this._g, this._b, e);
        },
        toHexString: function (e) {
            return '#' + this.toHex(e);
        },
        toHex8: function (e) {
            return g(this._r, this._g, this._b, this._a, e);
        },
        toHex8String: function (e) {
            return '#' + this.toHex8(e);
        },
        toRgb: function () {
            return {
                r: a(this._r),
                g: a(this._g),
                b: a(this._b),
                a: this._a
            };
        },
        toRgbString: function () {
            return 1 == this._a ? 'rgb(' + a(this._r) + ', ' + a(this._g) + ', ' + a(this._b) + ')' : 'rgba(' + a(this._r) + ', ' + a(this._g) + ', ' + a(this._b) + ', ' + this._roundA + ')';
        },
        toPercentageRgb: function () {
            return {
                r: a(100 * k(this._r, 255)) + '%',
                g: a(100 * k(this._g, 255)) + '%',
                b: a(100 * k(this._b, 255)) + '%',
                a: this._a
            };
        },
        toPercentageRgbString: function () {
            return 1 == this._a ? 'rgb(' + a(100 * k(this._r, 255)) + '%, ' + a(100 * k(this._g, 255)) + '%, ' + a(100 * k(this._b, 255)) + '%)' : 'rgba(' + a(100 * k(this._r, 255)) + '%, ' + a(100 * k(this._g, 255)) + '%, ' + a(100 * k(this._b, 255)) + '%, ' + this._roundA + ')';
        },
        toName: function () {
            return 0 === this._a ? 'transparent' : !(this._a < 1) && (P[m(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function (e) {
            var t = '#' + E(this._r, this._g, this._b, this._a),
                n = t,
                i = this._gradientType ? 'GradientType = 1, ' : '';
            if (e) {
                var r = u(e);
                n = '#' + E(r._r, r._g, r._b, r._a);
            }
            return 'progid:DXImageTransform.Microsoft.gradient(' + i + 'startColorstr=' + t + ',endColorstr=' + n + ')';
        },
        toString: function (e) {
            var t = !!e;
            e = e || this._format;
            var n = !1,
                i = this._a < 1 && this._a >= 0;
            return !t && i && ('hex' === e || 'hex6' === e || 'hex3' === e || 'hex4' === e || 'hex8' === e || 'name' === e) ? ('name' === e && 0 === this._a ? this.toName() : this.toRgbString()) : ('rgb' === e && (n = this.toRgbString()), 'prgb' === e && (n = this.toPercentageRgbString()), ('hex' === e || 'hex6' === e) && (n = this.toHexString()), 'hex3' === e && (n = this.toHexString(!0)), 'hex4' === e && (n = this.toHex8String(!0)), 'hex8' === e && (n = this.toHex8String()), 'name' === e && (n = this.toName()), 'hsl' === e && (n = this.toHslString()), 'hsv' === e && (n = this.toHsvString()), n || this.toHexString());
        },
        clone: function () {
            return u(this.toString());
        },
        _applyModification: function (e, t) {
            var n = e.apply(null, [this].concat([].slice.call(t)));
            return (this._r = n._r), (this._g = n._g), (this._b = n._b), this.setAlpha(n._a), this;
        },
        lighten: function () {
            return this._applyModification(T, arguments);
        },
        brighten: function () {
            return this._applyModification(b, arguments);
        },
        darken: function () {
            return this._applyModification(S, arguments);
        },
        desaturate: function () {
            return this._applyModification(v, arguments);
        },
        saturate: function () {
            return this._applyModification(y, arguments);
        },
        greyscale: function () {
            return this._applyModification(I, arguments);
        },
        spin: function () {
            return this._applyModification(A, arguments);
        },
        _applyCombination: function (e, t) {
            return e.apply(null, [this].concat([].slice.call(t)));
        },
        analogous: function () {
            return this._applyCombination(D, arguments);
        },
        complement: function () {
            return this._applyCombination(N, arguments);
        },
        monochromatic: function () {
            return this._applyCombination(x, arguments);
        },
        splitcomplement: function () {
            return this._applyCombination(O, arguments);
        },
        triad: function () {
            return this._applyCombination(C, arguments);
        },
        tetrad: function () {
            return this._applyCombination(R, arguments);
        }
    }),
        (u.fromRatio = function (e, t) {
            if ('object' == typeof e) {
                var n = {};
                for (var i in e) e.hasOwnProperty(i) && ('a' === i ? (n[i] = e[i]) : (n[i] = V(e[i])));
                e = n;
            }
            return u(e, t);
        }),
        (u.equals = function (e, t) {
            return !!e && !!t && u(e).toRgbString() == u(t).toRgbString();
        }),
        (u.random = function () {
            return u.fromRatio({
                r: l(),
                g: l(),
                b: l()
            });
        }),
        (u.mix = function (e, t, n) {
            n = 0 === n ? 0 : n || 50;
            var i = u(e).toRgb(),
                r = u(t).toRgb(),
                a = n / 100;
            return u({
                r: (r.r - i.r) * a + i.r,
                g: (r.g - i.g) * a + i.g,
                b: (r.b - i.b) * a + i.b,
                a: (r.a - i.a) * a + i.a
            });
        }),
        (u.readability = function (e, n) {
            var i = u(e),
                r = u(n);
            return (t.max(i.getLuminance(), r.getLuminance()) + 0.05) / (t.min(i.getLuminance(), r.getLuminance()) + 0.05);
        }),
        (u.isReadable = function (e, t, n) {
            var i,
                r,
                a = u.readability(e, t);
            switch (((r = !1), (i = z(n)).level + i.size)) {
                case 'AAsmall':
                case 'AAAlarge':
                    r = a >= 4.5;
                    break;
                case 'AAlarge':
                    r = a >= 3;
                    break;
                case 'AAAsmall':
                    r = a >= 7;
            }
            return r;
        }),
        (u.mostReadable = function (e, t, n) {
            var i,
                r,
                a,
                s,
                o = null,
                l = 0;
            (r = (n = n || {}).includeFallbackColors), (a = n.level), (s = n.size);
            for (var c = 0; c < t.length; c++) (i = u.readability(e, t[c])) > l && ((l = i), (o = u(t[c])));
            return u.isReadable(e, o, {
                level: a,
                size: s
            }) || !r
                ? o
                : ((n.includeFallbackColors = !1), u.mostReadable(e, ['#fff', '#000'], n));
        });
    var L = (u.names = {
            aliceblue: 'f0f8ff',
            antiquewhite: 'faebd7',
            aqua: '0ff',
            aquamarine: '7fffd4',
            azure: 'f0ffff',
            beige: 'f5f5dc',
            bisque: 'ffe4c4',
            black: '000',
            blanchedalmond: 'ffebcd',
            blue: '00f',
            blueviolet: '8a2be2',
            brown: 'a52a2a',
            burlywood: 'deb887',
            burntsienna: 'ea7e5d',
            cadetblue: '5f9ea0',
            chartreuse: '7fff00',
            chocolate: 'd2691e',
            coral: 'ff7f50',
            cornflowerblue: '6495ed',
            cornsilk: 'fff8dc',
            crimson: 'dc143c',
            cyan: '0ff',
            darkblue: '00008b',
            darkcyan: '008b8b',
            darkgoldenrod: 'b8860b',
            darkgray: 'a9a9a9',
            darkgreen: '006400',
            darkgrey: 'a9a9a9',
            darkkhaki: 'bdb76b',
            darkmagenta: '8b008b',
            darkolivegreen: '556b2f',
            darkorange: 'ff8c00',
            darkorchid: '9932cc',
            darkred: '8b0000',
            darksalmon: 'e9967a',
            darkseagreen: '8fbc8f',
            darkslateblue: '483d8b',
            darkslategray: '2f4f4f',
            darkslategrey: '2f4f4f',
            darkturquoise: '00ced1',
            darkviolet: '9400d3',
            deeppink: 'ff1493',
            deepskyblue: '00bfff',
            dimgray: '696969',
            dimgrey: '696969',
            dodgerblue: '1e90ff',
            firebrick: 'b22222',
            floralwhite: 'fffaf0',
            forestgreen: '228b22',
            fuchsia: 'f0f',
            gainsboro: 'dcdcdc',
            ghostwhite: 'f8f8ff',
            gold: 'ffd700',
            goldenrod: 'daa520',
            gray: '808080',
            green: '008000',
            greenyellow: 'adff2f',
            grey: '808080',
            honeydew: 'f0fff0',
            hotpink: 'ff69b4',
            indianred: 'cd5c5c',
            indigo: '4b0082',
            ivory: 'fffff0',
            khaki: 'f0e68c',
            lavender: 'e6e6fa',
            lavenderblush: 'fff0f5',
            lawngreen: '7cfc00',
            lemonchiffon: 'fffacd',
            lightblue: 'add8e6',
            lightcoral: 'f08080',
            lightcyan: 'e0ffff',
            lightgoldenrodyellow: 'fafad2',
            lightgray: 'd3d3d3',
            lightgreen: '90ee90',
            lightgrey: 'd3d3d3',
            lightpink: 'ffb6c1',
            lightsalmon: 'ffa07a',
            lightseagreen: '20b2aa',
            lightskyblue: '87cefa',
            lightslategray: '789',
            lightslategrey: '789',
            lightsteelblue: 'b0c4de',
            lightyellow: 'ffffe0',
            lime: '0f0',
            limegreen: '32cd32',
            linen: 'faf0e6',
            magenta: 'f0f',
            maroon: '800000',
            mediumaquamarine: '66cdaa',
            mediumblue: '0000cd',
            mediumorchid: 'ba55d3',
            mediumpurple: '9370db',
            mediumseagreen: '3cb371',
            mediumslateblue: '7b68ee',
            mediumspringgreen: '00fa9a',
            mediumturquoise: '48d1cc',
            mediumvioletred: 'c71585',
            midnightblue: '191970',
            mintcream: 'f5fffa',
            mistyrose: 'ffe4e1',
            moccasin: 'ffe4b5',
            navajowhite: 'ffdead',
            navy: '000080',
            oldlace: 'fdf5e6',
            olive: '808000',
            olivedrab: '6b8e23',
            orange: 'ffa500',
            orangered: 'ff4500',
            orchid: 'da70d6',
            palegoldenrod: 'eee8aa',
            palegreen: '98fb98',
            paleturquoise: 'afeeee',
            palevioletred: 'db7093',
            papayawhip: 'ffefd5',
            peachpuff: 'ffdab9',
            peru: 'cd853f',
            pink: 'ffc0cb',
            plum: 'dda0dd',
            powderblue: 'b0e0e6',
            purple: '800080',
            rebeccapurple: '663399',
            red: 'f00',
            rosybrown: 'bc8f8f',
            royalblue: '4169e1',
            saddlebrown: '8b4513',
            salmon: 'fa8072',
            sandybrown: 'f4a460',
            seagreen: '2e8b57',
            seashell: 'fff5ee',
            sienna: 'a0522d',
            silver: 'c0c0c0',
            skyblue: '87ceeb',
            slateblue: '6a5acd',
            slategray: '708090',
            slategrey: '708090',
            snow: 'fffafa',
            springgreen: '00ff7f',
            steelblue: '4682b4',
            tan: 'd2b48c',
            teal: '008080',
            thistle: 'd8bfd8',
            tomato: 'ff6347',
            turquoise: '40e0d0',
            violet: 'ee82ee',
            wheat: 'f5deb3',
            white: 'fff',
            whitesmoke: 'f5f5f5',
            yellow: 'ff0',
            yellowgreen: '9acd32'
        }),
        P = (u.hexNames = w(L));
    function w(e) {
        var t = {};
        for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
        return t;
    }
    function M(e) {
        return (isNaN((e = parseFloat(e))) || e < 0 || e > 1) && (e = 1), e;
    }
    function k(e, n) {
        B(e) && (e = '100%');
        var i = Z(e);
        return ((e = s(n, o(0, parseFloat(e)))), i && (e = parseInt(e * n, 10) / 100), 0.000001 > t.abs(e - n)) ? 1 : (e % n) / parseFloat(n);
    }
    function U(e) {
        return s(1, o(0, e));
    }
    function G(e) {
        return parseInt(e, 16);
    }
    function B(e) {
        return 'string' == typeof e && -1 != e.indexOf('.') && 1 === parseFloat(e);
    }
    function Z(e) {
        return 'string' == typeof e && -1 != e.indexOf('%');
    }
    function F(e) {
        return 1 == e.length ? '0' + e : '' + e;
    }
    function V(e) {
        return e <= 1 && (e = 100 * e + '%'), e;
    }
    function j(e) {
        return t.round(255 * parseFloat(e)).toString(16);
    }
    function H(e) {
        return G(e) / 255;
    }
    var Y = (function () {
        var e = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)',
            t = '[\\s|\\(]+(' + e + ')[,|\\s]+(' + e + ')[,|\\s]+(' + e + ')\\s*\\)?',
            n = '[\\s|\\(]+(' + e + ')[,|\\s]+(' + e + ')[,|\\s]+(' + e + ')[,|\\s]+(' + e + ')\\s*\\)?';
        return {
            CSS_UNIT: new RegExp(e),
            rgb: RegExp('rgb' + t),
            rgba: RegExp('rgba' + n),
            hsl: RegExp('hsl' + t),
            hsla: RegExp('hsla' + n),
            hsv: RegExp('hsv' + t),
            hsva: RegExp('hsva' + n),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
    })();
    function W(e) {
        return !!Y.CSS_UNIT.exec(e);
    }
    function K(e) {
        e = e.replace(n, '').replace(i, '').toLowerCase();
        var t,
            r = !1;
        if (L[e]) (e = L[e]), (r = !0);
        else if ('transparent' == e)
            return {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
                format: 'name'
            };
        return (t = Y.rgb.exec(e))
            ? {
                  r: t[1],
                  g: t[2],
                  b: t[3]
              }
            : (t = Y.rgba.exec(e))
              ? {
                    r: t[1],
                    g: t[2],
                    b: t[3],
                    a: t[4]
                }
              : (t = Y.hsl.exec(e))
                ? {
                      h: t[1],
                      s: t[2],
                      l: t[3]
                  }
                : (t = Y.hsla.exec(e))
                  ? {
                        h: t[1],
                        s: t[2],
                        l: t[3],
                        a: t[4]
                    }
                  : (t = Y.hsv.exec(e))
                    ? {
                          h: t[1],
                          s: t[2],
                          v: t[3]
                      }
                    : (t = Y.hsva.exec(e))
                      ? {
                            h: t[1],
                            s: t[2],
                            v: t[3],
                            a: t[4]
                        }
                      : (t = Y.hex8.exec(e))
                        ? {
                              r: G(t[1]),
                              g: G(t[2]),
                              b: G(t[3]),
                              a: H(t[4]),
                              format: r ? 'name' : 'hex8'
                          }
                        : (t = Y.hex6.exec(e))
                          ? {
                                r: G(t[1]),
                                g: G(t[2]),
                                b: G(t[3]),
                                format: r ? 'name' : 'hex'
                            }
                          : (t = Y.hex4.exec(e))
                            ? {
                                  r: G(t[1] + '' + t[1]),
                                  g: G(t[2] + '' + t[2]),
                                  b: G(t[3] + '' + t[3]),
                                  a: H(t[4] + '' + t[4]),
                                  format: r ? 'name' : 'hex8'
                              }
                            : !!(t = Y.hex3.exec(e)) && {
                                  r: G(t[1] + '' + t[1]),
                                  g: G(t[2] + '' + t[2]),
                                  b: G(t[3] + '' + t[3]),
                                  format: r ? 'name' : 'hex'
                              };
    }
    function z(e) {
        var t, n;
        return (
            (t = (
                (e = e || {
                    level: 'AA',
                    size: 'small'
                }).level || 'AA'
            ).toUpperCase()),
            (n = (e.size || 'small').toLowerCase()),
            'AA' !== t && 'AAA' !== t && (t = 'AA'),
            'small' !== n && 'large' !== n && (n = 'small'),
            {
                level: t,
                size: n
            }
        );
    }
    e.exports
        ? (e.exports = u)
        : 'function' == typeof define && define.amd
          ? define(function () {
                return u;
            })
          : (window.tinycolor = u);
})(Math);
