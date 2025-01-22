!(function (n) {
    var r = /^\s+/,
        i = /\s+$/,
        a = 0,
        o = n.round,
        s = n.min,
        l = n.max,
        u = n.random;
    function c(e, n) {
        if (((n = n || {}), (e = e || '') instanceof c)) return e;
        if (!(this instanceof c)) return new c(e, n);
        var r = d(e);
        (this._originalInput = e), (this._r = r.r), (this._g = r.g), (this._b = r.b), (this._a = r.a), (this._roundA = o(100 * this._a) / 100), (this._format = n.format || r.format), (this._gradientType = n.gradientType), this._r < 1 && (this._r = o(this._r)), this._g < 1 && (this._g = o(this._g)), this._b < 1 && (this._b = o(this._b)), (this._ok = r.ok), (this._tc_id = a++);
    }
    function d(e) {
        var n = {
                r: 0,
                g: 0,
                b: 0
            },
            r = 1,
            i = null,
            a = null,
            o = null,
            u = !1,
            c = !1;
        return (
            'string' == typeof e && (e = z(e)),
            'object' == typeof e && (K(e.r) && K(e.g) && K(e.b) ? ((n = f(e.r, e.g, e.b)), (u = !0), (c = '%' === String(e.r).substr(-1) ? 'prgb' : 'rgb')) : K(e.h) && K(e.s) && K(e.v) ? ((i = j(e.s)), (a = j(e.v)), (n = m(e.h, i, a)), (u = !0), (c = 'hsv')) : K(e.h) && K(e.s) && K(e.l) && ((i = j(e.s)), (o = j(e.l)), (n = h(e.h, i, o)), (u = !0), (c = 'hsl')), e.hasOwnProperty('a') && (r = e.a)),
            (r = k(r)),
            {
                ok: u,
                format: e.format || c,
                r: s(255, l(n.r, 0)),
                g: s(255, l(n.g, 0)),
                b: s(255, l(n.b, 0)),
                a: r
            }
        );
    }
    function f(e, n, r) {
        return {
            r: 255 * U(e, 255),
            g: 255 * U(n, 255),
            b: 255 * U(r, 255)
        };
    }
    function p(e, n, r) {
        (e = U(e, 255)), (n = U(n, 255));
        var i = l(e, n, (r = U(r, 255))),
            a = s(e, n, r),
            o,
            u,
            c = (i + a) / 2;
        if (i == a) o = u = 0;
        else {
            var d = i - a;
            switch (((u = c > 0.5 ? d / (2 - i - a) : d / (i + a)), i)) {
                case e:
                    o = (n - r) / d + (n < r ? 6 : 0);
                    break;
                case n:
                    o = (r - e) / d + 2;
                    break;
                case r:
                    o = (e - n) / d + 4;
            }
            o /= 6;
        }
        return {
            h: o,
            s: u,
            l: c
        };
    }
    function h(e, n, r) {
        var i, a, o;
        function s(e, n, r) {
            return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? e + (n - e) * 6 * r : r < 0.5 ? n : r < 2 / 3 ? e + (n - e) * (2 / 3 - r) * 6 : e;
        }
        if (((e = U(e, 360)), (n = U(n, 100)), (r = U(r, 100)), 0 === n)) i = a = o = r;
        else {
            var l = r < 0.5 ? r * (1 + n) : r + n - r * n,
                u = 2 * r - l;
            (i = s(u, l, e + 1 / 3)), (a = s(u, l, e)), (o = s(u, l, e - 1 / 3));
        }
        return {
            r: 255 * i,
            g: 255 * a,
            b: 255 * o
        };
    }
    function _(e, n, r) {
        (e = U(e, 255)), (n = U(n, 255));
        var i = l(e, n, (r = U(r, 255))),
            a = s(e, n, r),
            o,
            u,
            c = i,
            d = i - a;
        if (((u = 0 === i ? 0 : d / i), i == a)) o = 0;
        else {
            switch (i) {
                case e:
                    o = (n - r) / d + (n < r ? 6 : 0);
                    break;
                case n:
                    o = (r - e) / d + 2;
                    break;
                case r:
                    o = (e - n) / d + 4;
            }
            o /= 6;
        }
        return {
            h: o,
            s: u,
            v: c
        };
    }
    function m(e, r, i) {
        (e = 6 * U(e, 360)), (r = U(r, 100)), (i = U(i, 100));
        var a = n.floor(e),
            o = e - a,
            s = i * (1 - r),
            l = i * (1 - o * r),
            u = i * (1 - (1 - o) * r),
            c = a % 6;
        return {
            r: 255 * [i, l, s, s, u, i][c],
            g: 255 * [u, i, i, l, s, s][c],
            b: 255 * [s, s, u, i, i, l][c]
        };
    }
    function g(e, n, r, i) {
        var a = [V(o(e).toString(16)), V(o(n).toString(16)), V(o(r).toString(16))];
        return i && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join('');
    }
    function E(e, n, r, i, a) {
        var s = [V(o(e).toString(16)), V(o(n).toString(16)), V(o(r).toString(16)), V(H(i))];
        return a && s[0].charAt(0) == s[0].charAt(1) && s[1].charAt(0) == s[1].charAt(1) && s[2].charAt(0) == s[2].charAt(1) && s[3].charAt(0) == s[3].charAt(1) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0) : s.join('');
    }
    function v(e, n, r, i) {
        return [V(H(i)), V(o(e).toString(16)), V(o(n).toString(16)), V(o(r).toString(16))].join('');
    }
    function y(e, n) {
        n = 0 === n ? 0 : n || 10;
        var r = c(e).toHsl();
        return (r.s -= n / 100), (r.s = B(r.s)), c(r);
    }
    function b(e, n) {
        n = 0 === n ? 0 : n || 10;
        var r = c(e).toHsl();
        return (r.s += n / 100), (r.s = B(r.s)), c(r);
    }
    function I(e) {
        return c(e).desaturate(100);
    }
    function T(e, n) {
        n = 0 === n ? 0 : n || 10;
        var r = c(e).toHsl();
        return (r.l += n / 100), (r.l = B(r.l)), c(r);
    }
    function S(e, n) {
        n = 0 === n ? 0 : n || 10;
        var r = c(e).toRgb();
        return (r.r = l(0, s(255, r.r - o(-((n / 100) * 255))))), (r.g = l(0, s(255, r.g - o(-((n / 100) * 255))))), (r.b = l(0, s(255, r.b - o(-((n / 100) * 255))))), c(r);
    }
    function A(e, n) {
        n = 0 === n ? 0 : n || 10;
        var r = c(e).toHsl();
        return (r.l -= n / 100), (r.l = B(r.l)), c(r);
    }
    function C(e, n) {
        var r = c(e).toHsl(),
            i = (r.h + n) % 360;
        return (r.h = i < 0 ? 360 + i : i), c(r);
    }
    function N(e) {
        var n = c(e).toHsl();
        return (n.h = (n.h + 180) % 360), c(n);
    }
    function R(e) {
        var n = c(e).toHsl(),
            r = n.h;
        return [
            c(e),
            c({
                h: (r + 120) % 360,
                s: n.s,
                l: n.l
            }),
            c({
                h: (r + 240) % 360,
                s: n.s,
                l: n.l
            })
        ];
    }
    function O(e) {
        var n = c(e).toHsl(),
            r = n.h;
        return [
            c(e),
            c({
                h: (r + 90) % 360,
                s: n.s,
                l: n.l
            }),
            c({
                h: (r + 180) % 360,
                s: n.s,
                l: n.l
            }),
            c({
                h: (r + 270) % 360,
                s: n.s,
                l: n.l
            })
        ];
    }
    function D(e) {
        var n = c(e).toHsl(),
            r = n.h;
        return [
            c(e),
            c({
                h: (r + 72) % 360,
                s: n.s,
                l: n.l
            }),
            c({
                h: (r + 216) % 360,
                s: n.s,
                l: n.l
            })
        ];
    }
    function x(e, n, r) {
        (n = n || 6), (r = r || 30);
        var i = c(e).toHsl(),
            a = 360 / r,
            o = [c(e)];
        for (i.h = (i.h - ((a * n) >> 1) + 720) % 360; --n; ) (i.h = (i.h + a) % 360), o.push(c(i));
        return o;
    }
    function L(e, n) {
        n = n || 6;
        for (var r = c(e).toHsv(), i = r.h, a = r.s, o = r.v, s = [], l = 1 / n; n--; )
            s.push(
                c({
                    h: i,
                    s: a,
                    v: o
                })
            ),
                (o = (o + l) % 1);
        return s;
    }
    (c.prototype = {
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
                r,
                i,
                a,
                o,
                s,
                l = this.toRgb();
            return (e = l.r / 255), (r = l.g / 255), (i = l.b / 255), (a = e <= 0.03928 ? e / 12.92 : n.pow((e + 0.055) / 1.055, 2.4)), (o = r <= 0.03928 ? r / 12.92 : n.pow((r + 0.055) / 1.055, 2.4)), 0.2126 * a + 0.7152 * o + 0.0722 * (s = i <= 0.03928 ? i / 12.92 : n.pow((i + 0.055) / 1.055, 2.4));
        },
        setAlpha: function (e) {
            return (this._a = k(e)), (this._roundA = o(100 * this._a) / 100), this;
        },
        toHsv: function () {
            var e = _(this._r, this._g, this._b);
            return {
                h: 360 * e.h,
                s: e.s,
                v: e.v,
                a: this._a
            };
        },
        toHsvString: function () {
            var e = _(this._r, this._g, this._b),
                n = o(360 * e.h),
                r = o(100 * e.s),
                i = o(100 * e.v);
            return 1 == this._a ? 'hsv(' + n + ', ' + r + '%, ' + i + '%)' : 'hsva(' + n + ', ' + r + '%, ' + i + '%, ' + this._roundA + ')';
        },
        toHsl: function () {
            var e = p(this._r, this._g, this._b);
            return {
                h: 360 * e.h,
                s: e.s,
                l: e.l,
                a: this._a
            };
        },
        toHslString: function () {
            var e = p(this._r, this._g, this._b),
                n = o(360 * e.h),
                r = o(100 * e.s),
                i = o(100 * e.l);
            return 1 == this._a ? 'hsl(' + n + ', ' + r + '%, ' + i + '%)' : 'hsla(' + n + ', ' + r + '%, ' + i + '%, ' + this._roundA + ')';
        },
        toHex: function (e) {
            return g(this._r, this._g, this._b, e);
        },
        toHexString: function (e) {
            return '#' + this.toHex(e);
        },
        toHex8: function (e) {
            return E(this._r, this._g, this._b, this._a, e);
        },
        toHex8String: function (e) {
            return '#' + this.toHex8(e);
        },
        toRgb: function () {
            return {
                r: o(this._r),
                g: o(this._g),
                b: o(this._b),
                a: this._a
            };
        },
        toRgbString: function () {
            return 1 == this._a ? 'rgb(' + o(this._r) + ', ' + o(this._g) + ', ' + o(this._b) + ')' : 'rgba(' + o(this._r) + ', ' + o(this._g) + ', ' + o(this._b) + ', ' + this._roundA + ')';
        },
        toPercentageRgb: function () {
            return {
                r: o(100 * U(this._r, 255)) + '%',
                g: o(100 * U(this._g, 255)) + '%',
                b: o(100 * U(this._b, 255)) + '%',
                a: this._a
            };
        },
        toPercentageRgbString: function () {
            return 1 == this._a ? 'rgb(' + o(100 * U(this._r, 255)) + '%, ' + o(100 * U(this._g, 255)) + '%, ' + o(100 * U(this._b, 255)) + '%)' : 'rgba(' + o(100 * U(this._r, 255)) + '%, ' + o(100 * U(this._g, 255)) + '%, ' + o(100 * U(this._b, 255)) + '%, ' + this._roundA + ')';
        },
        toName: function () {
            return 0 === this._a ? 'transparent' : !(this._a < 1) && (P[g(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function (e) {
            var n = '#' + v(this._r, this._g, this._b, this._a),
                r = n,
                i = this._gradientType ? 'GradientType = 1, ' : '';
            if (e) {
                var a = c(e);
                r = '#' + v(a._r, a._g, a._b, a._a);
            }
            return 'progid:DXImageTransform.Microsoft.gradient(' + i + 'startColorstr=' + n + ',endColorstr=' + r + ')';
        },
        toString: function (e) {
            var n = !!e;
            e = e || this._format;
            var r = !1,
                i = this._a < 1 && this._a >= 0;
            if (!n && i && ('hex' === e || 'hex6' === e || 'hex3' === e || 'hex4' === e || 'hex8' === e || 'name' === e)) return 'name' === e && 0 === this._a ? this.toName() : this.toRgbString();
            return 'rgb' === e && (r = this.toRgbString()), 'prgb' === e && (r = this.toPercentageRgbString()), ('hex' === e || 'hex6' === e) && (r = this.toHexString()), 'hex3' === e && (r = this.toHexString(!0)), 'hex4' === e && (r = this.toHex8String(!0)), 'hex8' === e && (r = this.toHex8String()), 'name' === e && (r = this.toName()), 'hsl' === e && (r = this.toHslString()), 'hsv' === e && (r = this.toHsvString()), r || this.toHexString();
        },
        clone: function () {
            return c(this.toString());
        },
        _applyModification: function (e, n) {
            var r = e.apply(null, [this].concat([].slice.call(n)));
            return (this._r = r._r), (this._g = r._g), (this._b = r._b), this.setAlpha(r._a), this;
        },
        lighten: function () {
            return this._applyModification(T, arguments);
        },
        brighten: function () {
            return this._applyModification(S, arguments);
        },
        darken: function () {
            return this._applyModification(A, arguments);
        },
        desaturate: function () {
            return this._applyModification(y, arguments);
        },
        saturate: function () {
            return this._applyModification(b, arguments);
        },
        greyscale: function () {
            return this._applyModification(I, arguments);
        },
        spin: function () {
            return this._applyModification(C, arguments);
        },
        _applyCombination: function (e, n) {
            return e.apply(null, [this].concat([].slice.call(n)));
        },
        analogous: function () {
            return this._applyCombination(x, arguments);
        },
        complement: function () {
            return this._applyCombination(N, arguments);
        },
        monochromatic: function () {
            return this._applyCombination(L, arguments);
        },
        splitcomplement: function () {
            return this._applyCombination(D, arguments);
        },
        triad: function () {
            return this._applyCombination(R, arguments);
        },
        tetrad: function () {
            return this._applyCombination(O, arguments);
        }
    }),
        (c.fromRatio = function (e, n) {
            if ('object' == typeof e) {
                var r = {};
                for (var i in e) e.hasOwnProperty(i) && ('a' === i ? (r[i] = e[i]) : (r[i] = j(e[i])));
                e = r;
            }
            return c(e, n);
        }),
        (c.equals = function (e, n) {
            return !!e && !!n && c(e).toRgbString() == c(n).toRgbString();
        }),
        (c.random = function () {
            return c.fromRatio({
                r: u(),
                g: u(),
                b: u()
            });
        }),
        (c.mix = function (e, n, r) {
            r = 0 === r ? 0 : r || 50;
            var i = c(e).toRgb(),
                a = c(n).toRgb(),
                o = r / 100;
            return c({
                r: (a.r - i.r) * o + i.r,
                g: (a.g - i.g) * o + i.g,
                b: (a.b - i.b) * o + i.b,
                a: (a.a - i.a) * o + i.a
            });
        }),
        (c.readability = function (e, r) {
            var i = c(e),
                a = c(r);
            return (n.max(i.getLuminance(), a.getLuminance()) + 0.05) / (n.min(i.getLuminance(), a.getLuminance()) + 0.05);
        }),
        (c.isReadable = function (e, n, r) {
            var i,
                a,
                o = c.readability(e, n);
            switch (((a = !1), (i = q(r)).level + i.size)) {
                case 'AAsmall':
                case 'AAAlarge':
                    a = o >= 4.5;
                    break;
                case 'AAlarge':
                    a = o >= 3;
                    break;
                case 'AAAsmall':
                    a = o >= 7;
            }
            return a;
        }),
        (c.mostReadable = function (e, n, r) {
            var i,
                a,
                o,
                s,
                l = null,
                u = 0;
            (a = (r = r || {}).includeFallbackColors), (o = r.level), (s = r.size);
            for (var d = 0; d < n.length; d++) (i = c.readability(e, n[d])) > u && ((u = i), (l = c(n[d])));
            return c.isReadable(e, l, {
                level: o,
                size: s
            }) || !a
                ? l
                : ((r.includeFallbackColors = !1), c.mostReadable(e, ['#fff', '#000'], r));
        });
    var w = (c.names = {
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
        P = (c.hexNames = M(w));
    function M(e) {
        var n = {};
        for (var r in e) e.hasOwnProperty(r) && (n[e[r]] = r);
        return n;
    }
    function k(e) {
        return (isNaN((e = parseFloat(e))) || e < 0 || e > 1) && (e = 1), e;
    }
    function U(e, r) {
        Z(e) && (e = '100%');
        var i = F(e);
        return ((e = s(r, l(0, parseFloat(e)))), i && (e = parseInt(e * r, 10) / 100), 0.000001 > n.abs(e - r)) ? 1 : (e % r) / parseFloat(r);
    }
    function B(e) {
        return s(1, l(0, e));
    }
    function G(e) {
        return parseInt(e, 16);
    }
    function Z(e) {
        return 'string' == typeof e && -1 != e.indexOf('.') && 1 === parseFloat(e);
    }
    function F(e) {
        return 'string' == typeof e && -1 != e.indexOf('%');
    }
    function V(e) {
        return 1 == e.length ? '0' + e : '' + e;
    }
    function j(e) {
        return e <= 1 && (e = 100 * e + '%'), e;
    }
    function H(e) {
        return n.round(255 * parseFloat(e)).toString(16);
    }
    function Y(e) {
        return G(e) / 255;
    }
    var W = (function () {
        var e = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)',
            n = '[\\s|\\(]+(' + e + ')[,|\\s]+(' + e + ')[,|\\s]+(' + e + ')\\s*\\)?',
            r = '[\\s|\\(]+(' + e + ')[,|\\s]+(' + e + ')[,|\\s]+(' + e + ')[,|\\s]+(' + e + ')\\s*\\)?';
        return {
            CSS_UNIT: new RegExp(e),
            rgb: RegExp('rgb' + n),
            rgba: RegExp('rgba' + r),
            hsl: RegExp('hsl' + n),
            hsla: RegExp('hsla' + r),
            hsv: RegExp('hsv' + n),
            hsva: RegExp('hsva' + r),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
    })();
    function K(e) {
        return !!W.CSS_UNIT.exec(e);
    }
    function z(e) {
        e = e.replace(r, '').replace(i, '').toLowerCase();
        var n,
            a = !1;
        if (w[e]) (e = w[e]), (a = !0);
        else if ('transparent' == e)
            return {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
                format: 'name'
            };
        return (n = W.rgb.exec(e))
            ? {
                  r: n[1],
                  g: n[2],
                  b: n[3]
              }
            : (n = W.rgba.exec(e))
              ? {
                    r: n[1],
                    g: n[2],
                    b: n[3],
                    a: n[4]
                }
              : (n = W.hsl.exec(e))
                ? {
                      h: n[1],
                      s: n[2],
                      l: n[3]
                  }
                : (n = W.hsla.exec(e))
                  ? {
                        h: n[1],
                        s: n[2],
                        l: n[3],
                        a: n[4]
                    }
                  : (n = W.hsv.exec(e))
                    ? {
                          h: n[1],
                          s: n[2],
                          v: n[3]
                      }
                    : (n = W.hsva.exec(e))
                      ? {
                            h: n[1],
                            s: n[2],
                            v: n[3],
                            a: n[4]
                        }
                      : (n = W.hex8.exec(e))
                        ? {
                              r: G(n[1]),
                              g: G(n[2]),
                              b: G(n[3]),
                              a: Y(n[4]),
                              format: a ? 'name' : 'hex8'
                          }
                        : (n = W.hex6.exec(e))
                          ? {
                                r: G(n[1]),
                                g: G(n[2]),
                                b: G(n[3]),
                                format: a ? 'name' : 'hex'
                            }
                          : (n = W.hex4.exec(e))
                            ? {
                                  r: G(n[1] + '' + n[1]),
                                  g: G(n[2] + '' + n[2]),
                                  b: G(n[3] + '' + n[3]),
                                  a: Y(n[4] + '' + n[4]),
                                  format: a ? 'name' : 'hex8'
                              }
                            : !!(n = W.hex3.exec(e)) && {
                                  r: G(n[1] + '' + n[1]),
                                  g: G(n[2] + '' + n[2]),
                                  b: G(n[3] + '' + n[3]),
                                  format: a ? 'name' : 'hex'
                              };
    }
    function q(e) {
        var n, r;
        return (
            (n = (
                (e = e || {
                    level: 'AA',
                    size: 'small'
                }).level || 'AA'
            ).toUpperCase()),
            (r = (e.size || 'small').toLowerCase()),
            'AA' !== n && 'AAA' !== n && (n = 'AA'),
            'small' !== r && 'large' !== r && (r = 'small'),
            {
                level: n,
                size: r
            }
        );
    }
    e.exports
        ? (e.exports = c)
        : 'function' == typeof define && define.amd
          ? define(function () {
                return c;
            })
          : (window.tinycolor = c);
})(Math);
