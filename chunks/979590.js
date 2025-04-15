!(function (t) {
    var n = /^\s+/,
        r = /\s+$/,
        i = 0,
        o = t.round,
        a = t.min,
        s = t.max,
        l = t.random;
    function c(e, t) {
        if (((t = t || {}), (e = e || '') instanceof c)) return e;
        if (!(this instanceof c)) return new c(e, t);
        var n = u(e);
        (this._originalInput = e), (this._r = n.r), (this._g = n.g), (this._b = n.b), (this._a = n.a), (this._roundA = o(100 * this._a) / 100), (this._format = t.format || n.format), (this._gradientType = t.gradientType), this._r < 1 && (this._r = o(this._r)), this._g < 1 && (this._g = o(this._g)), this._b < 1 && (this._b = o(this._b)), (this._ok = n.ok), (this._tc_id = i++);
    }
    function u(e) {
        var t = {
                r: 0,
                g: 0,
                b: 0
            },
            n = 1,
            r = null,
            i = null,
            o = null,
            l = !1,
            c = !1;
        return (
            'string' == typeof e && (e = K(e)),
            'object' == typeof e && (Y(e.r) && Y(e.g) && Y(e.b) ? ((t = d(e.r, e.g, e.b)), (l = !0), (c = '%' === String(e.r).substr(-1) ? 'prgb' : 'rgb')) : Y(e.h) && Y(e.s) && Y(e.v) ? ((r = V(e.s)), (i = V(e.v)), (t = h(e.h, r, i)), (l = !0), (c = 'hsv')) : Y(e.h) && Y(e.s) && Y(e.l) && ((r = V(e.s)), (o = V(e.l)), (t = _(e.h, r, o)), (l = !0), (c = 'hsl')), e.hasOwnProperty('a') && (n = e.a)),
            (n = M(n)),
            {
                ok: l,
                format: e.format || c,
                r: a(255, s(t.r, 0)),
                g: a(255, s(t.g, 0)),
                b: a(255, s(t.b, 0)),
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
        var r,
            i,
            o = s(e, (t = k(t, 255)), (n = k(n, 255))),
            l = a(e, t, n),
            c = (o + l) / 2;
        if (o == l) r = i = 0;
        else {
            var u = o - l;
            switch (((i = c > 0.5 ? u / (2 - o - l) : u / (o + l)), o)) {
                case e:
                    r = (t - n) / u + 6 * (t < n);
                    break;
                case t:
                    r = (n - e) / u + 2;
                    break;
                case n:
                    r = (e - t) / u + 4;
            }
            r /= 6;
        }
        return {
            h: r,
            s: i,
            l: c
        };
    }
    function _(e, t, n) {
        var r, i, o;
        function a(e, t, n) {
            return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
        }
        if (((e = k(e, 360)), (t = k(t, 100)), (n = k(n, 100)), 0 === t)) r = i = o = n;
        else {
            var s = n < 0.5 ? n * (1 + t) : n + t - n * t,
                l = 2 * n - s;
            (r = a(l, s, e + 1 / 3)), (i = a(l, s, e)), (o = a(l, s, e - 1 / 3));
        }
        return {
            r: 255 * r,
            g: 255 * i,
            b: 255 * o
        };
    }
    function p(e, t, n) {
        e = k(e, 255);
        var r,
            i,
            o = s(e, (t = k(t, 255)), (n = k(n, 255))),
            l = a(e, t, n),
            c = o,
            u = o - l;
        if (((i = 0 === o ? 0 : u / o), o == l)) r = 0;
        else {
            switch (o) {
                case e:
                    r = (t - n) / u + 6 * (t < n);
                    break;
                case t:
                    r = (n - e) / u + 2;
                    break;
                case n:
                    r = (e - t) / u + 4;
            }
            r /= 6;
        }
        return {
            h: r,
            s: i,
            v: c
        };
    }
    function h(e, n, r) {
        (e = 6 * k(e, 360)), (n = k(n, 100)), (r = k(r, 100));
        var i = t.floor(e),
            o = e - i,
            a = r * (1 - n),
            s = r * (1 - o * n),
            l = r * (1 - (1 - o) * n),
            c = i % 6;
        return {
            r: 255 * [r, s, a, a, l, r][c],
            g: 255 * [l, r, r, s, a, a][c],
            b: 255 * [a, a, l, r, r, s][c]
        };
    }
    function m(e, t, n, r) {
        var i = [F(o(e).toString(16)), F(o(t).toString(16)), F(o(n).toString(16))];
        return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join('');
    }
    function g(e, t, n, r, i) {
        var a = [F(o(e).toString(16)), F(o(t).toString(16)), F(o(n).toString(16)), F(Z(r))];
        return i && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join('');
    }
    function E(e, t, n, r) {
        return [F(Z(r)), F(o(e).toString(16)), F(o(t).toString(16)), F(o(n).toString(16))].join('');
    }
    function b(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = c(e).toHsl();
        return (n.s -= t / 100), (n.s = j(n.s)), c(n);
    }
    function y(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = c(e).toHsl();
        return (n.s += t / 100), (n.s = j(n.s)), c(n);
    }
    function v(e) {
        return c(e).desaturate(100);
    }
    function O(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = c(e).toHsl();
        return (n.l += t / 100), (n.l = j(n.l)), c(n);
    }
    function I(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = c(e).toRgb();
        return (n.r = s(0, a(255, n.r - o(-((t / 100) * 255))))), (n.g = s(0, a(255, n.g - o(-((t / 100) * 255))))), (n.b = s(0, a(255, n.b - o(-((t / 100) * 255))))), c(n);
    }
    function S(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = c(e).toHsl();
        return (n.l -= t / 100), (n.l = j(n.l)), c(n);
    }
    function T(e, t) {
        var n = c(e).toHsl(),
            r = (n.h + t) % 360;
        return (n.h = r < 0 ? 360 + r : r), c(n);
    }
    function N(e) {
        var t = c(e).toHsl();
        return (t.h = (t.h + 180) % 360), c(t);
    }
    function A(e) {
        var t = c(e).toHsl(),
            n = t.h;
        return [
            c(e),
            c({
                h: (n + 120) % 360,
                s: t.s,
                l: t.l
            }),
            c({
                h: (n + 240) % 360,
                s: t.s,
                l: t.l
            })
        ];
    }
    function C(e) {
        var t = c(e).toHsl(),
            n = t.h;
        return [
            c(e),
            c({
                h: (n + 90) % 360,
                s: t.s,
                l: t.l
            }),
            c({
                h: (n + 180) % 360,
                s: t.s,
                l: t.l
            }),
            c({
                h: (n + 270) % 360,
                s: t.s,
                l: t.l
            })
        ];
    }
    function R(e) {
        var t = c(e).toHsl(),
            n = t.h;
        return [
            c(e),
            c({
                h: (n + 72) % 360,
                s: t.s,
                l: t.l
            }),
            c({
                h: (n + 216) % 360,
                s: t.s,
                l: t.l
            })
        ];
    }
    function P(e, t, n) {
        (t = t || 6), (n = n || 30);
        var r = c(e).toHsl(),
            i = 360 / n,
            o = [c(e)];
        for (r.h = (r.h - ((i * t) >> 1) + 720) % 360; --t; ) (r.h = (r.h + i) % 360), o.push(c(r));
        return o;
    }
    function w(e, t) {
        t = t || 6;
        for (var n = c(e).toHsv(), r = n.h, i = n.s, o = n.v, a = [], s = 1 / t; t--; )
            a.push(
                c({
                    h: r,
                    s: i,
                    v: o
                })
            ),
                (o = (o + s) % 1);
        return a;
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
                n,
                r,
                i,
                o,
                a = this.toRgb();
            return (e = a.r / 255), (n = a.g / 255), (r = a.b / 255), (i = e <= 0.03928 ? e / 12.92 : t.pow((e + 0.055) / 1.055, 2.4)), 0.2126 * i + 0.7152 * (n <= 0.03928 ? n / 12.92 : t.pow((n + 0.055) / 1.055, 2.4)) + 0.0722 * (o = r <= 0.03928 ? r / 12.92 : t.pow((r + 0.055) / 1.055, 2.4));
        },
        setAlpha: function (e) {
            return (this._a = M(e)), (this._roundA = o(100 * this._a) / 100), this;
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
                t = o(360 * e.h),
                n = o(100 * e.s),
                r = o(100 * e.v);
            return 1 == this._a ? 'hsv(' + t + ', ' + n + '%, ' + r + '%)' : 'hsva(' + t + ', ' + n + '%, ' + r + '%, ' + this._roundA + ')';
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
                t = o(360 * e.h),
                n = o(100 * e.s),
                r = o(100 * e.l);
            return 1 == this._a ? 'hsl(' + t + ', ' + n + '%, ' + r + '%)' : 'hsla(' + t + ', ' + n + '%, ' + r + '%, ' + this._roundA + ')';
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
                r: o(100 * k(this._r, 255)) + '%',
                g: o(100 * k(this._g, 255)) + '%',
                b: o(100 * k(this._b, 255)) + '%',
                a: this._a
            };
        },
        toPercentageRgbString: function () {
            return 1 == this._a ? 'rgb(' + o(100 * k(this._r, 255)) + '%, ' + o(100 * k(this._g, 255)) + '%, ' + o(100 * k(this._b, 255)) + '%)' : 'rgba(' + o(100 * k(this._r, 255)) + '%, ' + o(100 * k(this._g, 255)) + '%, ' + o(100 * k(this._b, 255)) + '%, ' + this._roundA + ')';
        },
        toName: function () {
            return 0 === this._a ? 'transparent' : !(this._a < 1) && (L[m(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function (e) {
            var t = '#' + E(this._r, this._g, this._b, this._a),
                n = t,
                r = this._gradientType ? 'GradientType = 1, ' : '';
            if (e) {
                var i = c(e);
                n = '#' + E(i._r, i._g, i._b, i._a);
            }
            return 'progid:DXImageTransform.Microsoft.gradient(' + r + 'startColorstr=' + t + ',endColorstr=' + n + ')';
        },
        toString: function (e) {
            var t = !!e;
            e = e || this._format;
            var n = !1,
                r = this._a < 1 && this._a >= 0;
            return !t && r && ('hex' === e || 'hex6' === e || 'hex3' === e || 'hex4' === e || 'hex8' === e || 'name' === e) ? ('name' === e && 0 === this._a ? this.toName() : this.toRgbString()) : ('rgb' === e && (n = this.toRgbString()), 'prgb' === e && (n = this.toPercentageRgbString()), ('hex' === e || 'hex6' === e) && (n = this.toHexString()), 'hex3' === e && (n = this.toHexString(!0)), 'hex4' === e && (n = this.toHex8String(!0)), 'hex8' === e && (n = this.toHex8String()), 'name' === e && (n = this.toName()), 'hsl' === e && (n = this.toHslString()), 'hsv' === e && (n = this.toHsvString()), n || this.toHexString());
        },
        clone: function () {
            return c(this.toString());
        },
        _applyModification: function (e, t) {
            var n = e.apply(null, [this].concat([].slice.call(t)));
            return (this._r = n._r), (this._g = n._g), (this._b = n._b), this.setAlpha(n._a), this;
        },
        lighten: function () {
            return this._applyModification(O, arguments);
        },
        brighten: function () {
            return this._applyModification(I, arguments);
        },
        darken: function () {
            return this._applyModification(S, arguments);
        },
        desaturate: function () {
            return this._applyModification(b, arguments);
        },
        saturate: function () {
            return this._applyModification(y, arguments);
        },
        greyscale: function () {
            return this._applyModification(v, arguments);
        },
        spin: function () {
            return this._applyModification(T, arguments);
        },
        _applyCombination: function (e, t) {
            return e.apply(null, [this].concat([].slice.call(t)));
        },
        analogous: function () {
            return this._applyCombination(P, arguments);
        },
        complement: function () {
            return this._applyCombination(N, arguments);
        },
        monochromatic: function () {
            return this._applyCombination(w, arguments);
        },
        splitcomplement: function () {
            return this._applyCombination(R, arguments);
        },
        triad: function () {
            return this._applyCombination(A, arguments);
        },
        tetrad: function () {
            return this._applyCombination(C, arguments);
        }
    }),
        (c.fromRatio = function (e, t) {
            if ('object' == typeof e) {
                var n = {};
                for (var r in e) e.hasOwnProperty(r) && ('a' === r ? (n[r] = e[r]) : (n[r] = V(e[r])));
                e = n;
            }
            return c(e, t);
        }),
        (c.equals = function (e, t) {
            return !!e && !!t && c(e).toRgbString() == c(t).toRgbString();
        }),
        (c.random = function () {
            return c.fromRatio({
                r: l(),
                g: l(),
                b: l()
            });
        }),
        (c.mix = function (e, t, n) {
            n = 0 === n ? 0 : n || 50;
            var r = c(e).toRgb(),
                i = c(t).toRgb(),
                o = n / 100;
            return c({
                r: (i.r - r.r) * o + r.r,
                g: (i.g - r.g) * o + r.g,
                b: (i.b - r.b) * o + r.b,
                a: (i.a - r.a) * o + r.a
            });
        }),
        (c.readability = function (e, n) {
            var r = c(e),
                i = c(n);
            return (t.max(r.getLuminance(), i.getLuminance()) + 0.05) / (t.min(r.getLuminance(), i.getLuminance()) + 0.05);
        }),
        (c.isReadable = function (e, t, n) {
            var r,
                i,
                o = c.readability(e, t);
            switch (((i = !1), (r = z(n)).level + r.size)) {
                case 'AAsmall':
                case 'AAAlarge':
                    i = o >= 4.5;
                    break;
                case 'AAlarge':
                    i = o >= 3;
                    break;
                case 'AAAsmall':
                    i = o >= 7;
            }
            return i;
        }),
        (c.mostReadable = function (e, t, n) {
            var r,
                i,
                o,
                a,
                s = null,
                l = 0;
            (i = (n = n || {}).includeFallbackColors), (o = n.level), (a = n.size);
            for (var u = 0; u < t.length; u++) (r = c.readability(e, t[u])) > l && ((l = r), (s = c(t[u])));
            return c.isReadable(e, s, {
                level: o,
                size: a
            }) || !i
                ? s
                : ((n.includeFallbackColors = !1), c.mostReadable(e, ['#fff', '#000'], n));
        });
    var D = (c.names = {
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
        L = (c.hexNames = x(D));
    function x(e) {
        var t = {};
        for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
        return t;
    }
    function M(e) {
        return (isNaN((e = parseFloat(e))) || e < 0 || e > 1) && (e = 1), e;
    }
    function k(e, n) {
        G(e) && (e = '100%');
        var r = B(e);
        return ((e = a(n, s(0, parseFloat(e)))), r && (e = parseInt(e * n, 10) / 100), 0.000001 > t.abs(e - n)) ? 1 : (e % n) / parseFloat(n);
    }
    function j(e) {
        return a(1, s(0, e));
    }
    function U(e) {
        return parseInt(e, 16);
    }
    function G(e) {
        return 'string' == typeof e && -1 != e.indexOf('.') && 1 === parseFloat(e);
    }
    function B(e) {
        return 'string' == typeof e && -1 != e.indexOf('%');
    }
    function F(e) {
        return 1 == e.length ? '0' + e : '' + e;
    }
    function V(e) {
        return e <= 1 && (e = 100 * e + '%'), e;
    }
    function Z(e) {
        return t.round(255 * parseFloat(e)).toString(16);
    }
    function H(e) {
        return U(e) / 255;
    }
    var W = (function () {
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
    function Y(e) {
        return !!W.CSS_UNIT.exec(e);
    }
    function K(e) {
        e = e.replace(n, '').replace(r, '').toLowerCase();
        var t,
            i = !1;
        if (D[e]) (e = D[e]), (i = !0);
        else if ('transparent' == e)
            return {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
                format: 'name'
            };
        return (t = W.rgb.exec(e))
            ? {
                  r: t[1],
                  g: t[2],
                  b: t[3]
              }
            : (t = W.rgba.exec(e))
              ? {
                    r: t[1],
                    g: t[2],
                    b: t[3],
                    a: t[4]
                }
              : (t = W.hsl.exec(e))
                ? {
                      h: t[1],
                      s: t[2],
                      l: t[3]
                  }
                : (t = W.hsla.exec(e))
                  ? {
                        h: t[1],
                        s: t[2],
                        l: t[3],
                        a: t[4]
                    }
                  : (t = W.hsv.exec(e))
                    ? {
                          h: t[1],
                          s: t[2],
                          v: t[3]
                      }
                    : (t = W.hsva.exec(e))
                      ? {
                            h: t[1],
                            s: t[2],
                            v: t[3],
                            a: t[4]
                        }
                      : (t = W.hex8.exec(e))
                        ? {
                              r: U(t[1]),
                              g: U(t[2]),
                              b: U(t[3]),
                              a: H(t[4]),
                              format: i ? 'name' : 'hex8'
                          }
                        : (t = W.hex6.exec(e))
                          ? {
                                r: U(t[1]),
                                g: U(t[2]),
                                b: U(t[3]),
                                format: i ? 'name' : 'hex'
                            }
                          : (t = W.hex4.exec(e))
                            ? {
                                  r: U(t[1] + '' + t[1]),
                                  g: U(t[2] + '' + t[2]),
                                  b: U(t[3] + '' + t[3]),
                                  a: H(t[4] + '' + t[4]),
                                  format: i ? 'name' : 'hex8'
                              }
                            : !!(t = W.hex3.exec(e)) && {
                                  r: U(t[1] + '' + t[1]),
                                  g: U(t[2] + '' + t[2]),
                                  b: U(t[3] + '' + t[3]),
                                  format: i ? 'name' : 'hex'
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
        ? (e.exports = c)
        : 'function' == typeof define && define.amd
          ? define(function () {
                return c;
            })
          : (window.tinycolor = c);
})(Math);
