!(function (n) {
    var r = /^\s+/,
        i = /\s+$/,
        a = 0,
        s = n.round,
        o = n.min,
        l = n.max,
        u = n.random;
    function c(e, n) {
        if (((n = n || {}), (e = e || '') instanceof c)) return e;
        if (!(this instanceof c)) return new c(e, n);
        var r = d(e);
        (this._originalInput = e), (this._r = r.r), (this._g = r.g), (this._b = r.b), (this._a = r.a), (this._roundA = s(100 * this._a) / 100), (this._format = n.format || r.format), (this._gradientType = n.gradientType), this._r < 1 && (this._r = s(this._r)), this._g < 1 && (this._g = s(this._g)), this._b < 1 && (this._b = s(this._b)), (this._ok = r.ok), (this._tc_id = a++);
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
            s = null,
            u = !1,
            c = !1;
        return (
            'string' == typeof e && (e = z(e)),
            'object' == typeof e && (K(e.r) && K(e.g) && K(e.b) ? ((n = f(e.r, e.g, e.b)), (u = !0), (c = '%' === String(e.r).substr(-1) ? 'prgb' : 'rgb')) : K(e.h) && K(e.s) && K(e.v) ? ((i = j(e.s)), (a = j(e.v)), (n = m(e.h, i, a)), (u = !0), (c = 'hsv')) : K(e.h) && K(e.s) && K(e.l) && ((i = j(e.s)), (s = j(e.l)), (n = h(e.h, i, s)), (u = !0), (c = 'hsl')), e.hasOwnProperty('a') && (r = e.a)),
            (r = k(r)),
            {
                ok: u,
                format: e.format || c,
                r: o(255, l(n.r, 0)),
                g: o(255, l(n.g, 0)),
                b: o(255, l(n.b, 0)),
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
    function _(e, n, r) {
        (e = U(e, 255)), (n = U(n, 255));
        var i = l(e, n, (r = U(r, 255))),
            a = o(e, n, r),
            s,
            u,
            c = (i + a) / 2;
        if (i == a) s = u = 0;
        else {
            var d = i - a;
            switch (((u = c > 0.5 ? d / (2 - i - a) : d / (i + a)), i)) {
                case e:
                    s = (n - r) / d + (n < r ? 6 : 0);
                    break;
                case n:
                    s = (r - e) / d + 2;
                    break;
                case r:
                    s = (e - n) / d + 4;
            }
            s /= 6;
        }
        return {
            h: s,
            s: u,
            l: c
        };
    }
    function h(e, n, r) {
        var i, a, s;
        function o(e, n, r) {
            return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? e + (n - e) * 6 * r : r < 0.5 ? n : r < 2 / 3 ? e + (n - e) * (2 / 3 - r) * 6 : e;
        }
        if (((e = U(e, 360)), (n = U(n, 100)), (r = U(r, 100)), 0 === n)) i = a = s = r;
        else {
            var l = r < 0.5 ? r * (1 + n) : r + n - r * n,
                u = 2 * r - l;
            (i = o(u, l, e + 1 / 3)), (a = o(u, l, e)), (s = o(u, l, e - 1 / 3));
        }
        return {
            r: 255 * i,
            g: 255 * a,
            b: 255 * s
        };
    }
    function p(e, n, r) {
        (e = U(e, 255)), (n = U(n, 255));
        var i = l(e, n, (r = U(r, 255))),
            a = o(e, n, r),
            s,
            u,
            c = i,
            d = i - a;
        if (((u = 0 === i ? 0 : d / i), i == a)) s = 0;
        else {
            switch (i) {
                case e:
                    s = (n - r) / d + (n < r ? 6 : 0);
                    break;
                case n:
                    s = (r - e) / d + 2;
                    break;
                case r:
                    s = (e - n) / d + 4;
            }
            s /= 6;
        }
        return {
            h: s,
            s: u,
            v: c
        };
    }
    function m(e, r, i) {
        (e = 6 * U(e, 360)), (r = U(r, 100)), (i = U(i, 100));
        var a = n.floor(e),
            s = e - a,
            o = i * (1 - r),
            l = i * (1 - s * r),
            u = i * (1 - (1 - s) * r),
            c = a % 6;
        return {
            r: 255 * [i, l, o, o, u, i][c],
            g: 255 * [u, i, i, l, o, o][c],
            b: 255 * [o, o, u, i, i, l][c]
        };
    }
    function g(e, n, r, i) {
        var a = [V(s(e).toString(16)), V(s(n).toString(16)), V(s(r).toString(16))];
        return i && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join('');
    }
    function E(e, n, r, i, a) {
        var o = [V(s(e).toString(16)), V(s(n).toString(16)), V(s(r).toString(16)), V(H(i))];
        return a && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join('');
    }
    function v(e, n, r, i) {
        return [V(H(i)), V(s(e).toString(16)), V(s(n).toString(16)), V(s(r).toString(16))].join('');
    }
    function I(e, n) {
        n = 0 === n ? 0 : n || 10;
        var r = c(e).toHsl();
        return (r.s -= n / 100), (r.s = B(r.s)), c(r);
    }
    function T(e, n) {
        n = 0 === n ? 0 : n || 10;
        var r = c(e).toHsl();
        return (r.s += n / 100), (r.s = B(r.s)), c(r);
    }
    function b(e) {
        return c(e).desaturate(100);
    }
    function y(e, n) {
        n = 0 === n ? 0 : n || 10;
        var r = c(e).toHsl();
        return (r.l += n / 100), (r.l = B(r.l)), c(r);
    }
    function S(e, n) {
        n = 0 === n ? 0 : n || 10;
        var r = c(e).toRgb();
        return (r.r = l(0, o(255, r.r - s(-((n / 100) * 255))))), (r.g = l(0, o(255, r.g - s(-((n / 100) * 255))))), (r.b = l(0, o(255, r.b - s(-((n / 100) * 255))))), c(r);
    }
    function A(e, n) {
        n = 0 === n ? 0 : n || 10;
        var r = c(e).toHsl();
        return (r.l -= n / 100), (r.l = B(r.l)), c(r);
    }
    function N(e, n) {
        var r = c(e).toHsl(),
            i = (r.h + n) % 360;
        return (r.h = i < 0 ? 360 + i : i), c(r);
    }
    function C(e) {
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
    function L(e, n, r) {
        (n = n || 6), (r = r || 30);
        var i = c(e).toHsl(),
            a = 360 / r,
            s = [c(e)];
        for (i.h = (i.h - ((a * n) >> 1) + 720) % 360; --n; ) (i.h = (i.h + a) % 360), s.push(c(i));
        return s;
    }
    function x(e, n) {
        n = n || 6;
        for (var r = c(e).toHsv(), i = r.h, a = r.s, s = r.v, o = [], l = 1 / n; n--; )
            o.push(
                c({
                    h: i,
                    s: a,
                    v: s
                })
            ),
                (s = (s + l) % 1);
        return o;
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
                s,
                o,
                l = this.toRgb();
            return (e = l.r / 255), (r = l.g / 255), (i = l.b / 255), (a = e <= 0.03928 ? e / 12.92 : n.pow((e + 0.055) / 1.055, 2.4)), (s = r <= 0.03928 ? r / 12.92 : n.pow((r + 0.055) / 1.055, 2.4)), 0.2126 * a + 0.7152 * s + 0.0722 * (o = i <= 0.03928 ? i / 12.92 : n.pow((i + 0.055) / 1.055, 2.4));
        },
        setAlpha: function (e) {
            return (this._a = k(e)), (this._roundA = s(100 * this._a) / 100), this;
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
                n = s(360 * e.h),
                r = s(100 * e.s),
                i = s(100 * e.v);
            return 1 == this._a ? 'hsv(' + n + ', ' + r + '%, ' + i + '%)' : 'hsva(' + n + ', ' + r + '%, ' + i + '%, ' + this._roundA + ')';
        },
        toHsl: function () {
            var e = _(this._r, this._g, this._b);
            return {
                h: 360 * e.h,
                s: e.s,
                l: e.l,
                a: this._a
            };
        },
        toHslString: function () {
            var e = _(this._r, this._g, this._b),
                n = s(360 * e.h),
                r = s(100 * e.s),
                i = s(100 * e.l);
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
                r: s(this._r),
                g: s(this._g),
                b: s(this._b),
                a: this._a
            };
        },
        toRgbString: function () {
            return 1 == this._a ? 'rgb(' + s(this._r) + ', ' + s(this._g) + ', ' + s(this._b) + ')' : 'rgba(' + s(this._r) + ', ' + s(this._g) + ', ' + s(this._b) + ', ' + this._roundA + ')';
        },
        toPercentageRgb: function () {
            return {
                r: s(100 * U(this._r, 255)) + '%',
                g: s(100 * U(this._g, 255)) + '%',
                b: s(100 * U(this._b, 255)) + '%',
                a: this._a
            };
        },
        toPercentageRgbString: function () {
            return 1 == this._a ? 'rgb(' + s(100 * U(this._r, 255)) + '%, ' + s(100 * U(this._g, 255)) + '%, ' + s(100 * U(this._b, 255)) + '%)' : 'rgba(' + s(100 * U(this._r, 255)) + '%, ' + s(100 * U(this._g, 255)) + '%, ' + s(100 * U(this._b, 255)) + '%, ' + this._roundA + ')';
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
            return this._applyModification(y, arguments);
        },
        brighten: function () {
            return this._applyModification(S, arguments);
        },
        darken: function () {
            return this._applyModification(A, arguments);
        },
        desaturate: function () {
            return this._applyModification(I, arguments);
        },
        saturate: function () {
            return this._applyModification(T, arguments);
        },
        greyscale: function () {
            return this._applyModification(b, arguments);
        },
        spin: function () {
            return this._applyModification(N, arguments);
        },
        _applyCombination: function (e, n) {
            return e.apply(null, [this].concat([].slice.call(n)));
        },
        analogous: function () {
            return this._applyCombination(L, arguments);
        },
        complement: function () {
            return this._applyCombination(C, arguments);
        },
        monochromatic: function () {
            return this._applyCombination(x, arguments);
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
                s = r / 100;
            return c({
                r: (a.r - i.r) * s + i.r,
                g: (a.g - i.g) * s + i.g,
                b: (a.b - i.b) * s + i.b,
                a: (a.a - i.a) * s + i.a
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
                s = c.readability(e, n);
            switch (((a = !1), (i = q(r)).level + i.size)) {
                case 'AAsmall':
                case 'AAAlarge':
                    a = s >= 4.5;
                    break;
                case 'AAlarge':
                    a = s >= 3;
                    break;
                case 'AAAsmall':
                    a = s >= 7;
            }
            return a;
        }),
        (c.mostReadable = function (e, n, r) {
            var i,
                a,
                s,
                o,
                l = null,
                u = 0;
            (a = (r = r || {}).includeFallbackColors), (s = r.level), (o = r.size);
            for (var d = 0; d < n.length; d++) (i = c.readability(e, n[d])) > u && ((u = i), (l = c(n[d])));
            return c.isReadable(e, l, {
                level: s,
                size: o
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
        return ((e = o(r, l(0, parseFloat(e)))), i && (e = parseInt(e * r, 10) / 100), 0.000001 > n.abs(e - r)) ? 1 : (e % r) / parseFloat(r);
    }
    function B(e) {
        return o(1, l(0, e));
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
