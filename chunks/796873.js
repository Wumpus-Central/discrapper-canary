(function () {
    var r = this,
        n = r.humanize,
        i = {};
    e.exports && (t = e.exports = i),
        (t.humanize = i),
        (i.noConflict = function () {
            return (r.humanize = n), this;
        }),
        (i.pad = function (e, t, r, n) {
            if (
                ((e += ""),
                r ? r.length > 1 && (r = r.charAt(0)) : (r = " "),
                "right" == (n = void 0 === n ? "left" : "right"))
            )
                for (; e.length < t; ) e += r;
            else for (; e.length < t; ) e = r + e;
            return e;
        }),
        (i.time = function () {
            return new Date().getTime() / 1e3;
        });
    var o = [0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
        a = [0, 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    (i.date = function (e, t) {
        var r = void 0 === t ? new Date() : new Date(t instanceof Date ? t : 1e3 * t),
            n = /\\?([a-z])/gi,
            s = function (e, t) {
                return c[e] ? c[e]() : t;
            },
            l = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            u = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
            c = {
                d: function () {
                    return i.pad(c.j(), 2, "0");
                },
                D: function () {
                    return c.l().slice(0, 3);
                },
                j: function () {
                    return r.getDate();
                },
                l: function () {
                    return l[c.w()];
                },
                N: function () {
                    return c.w() || 7;
                },
                S: function () {
                    var e = c.j();
                    return e > 4 && e < 21 ? "th" : { 1: "st", 2: "nd", 3: "rd" }[e % 10] || "th";
                },
                w: function () {
                    return r.getDay();
                },
                z: function () {
                    return (c.L() ? a[c.n()] : o[c.n()]) + c.j() - 1;
                },
                W: function () {
                    var e = c.z() - c.N() + 1.5;
                    return i.pad(1 + Math.floor(Math.abs(e) / 7) + +(e % 7 > 3.5), 2, "0");
                },
                F: function () {
                    return u[r.getMonth()];
                },
                m: function () {
                    return i.pad(c.n(), 2, "0");
                },
                M: function () {
                    return c.F().slice(0, 3);
                },
                n: function () {
                    return r.getMonth() + 1;
                },
                t: function () {
                    return new Date(c.Y(), c.n(), 0).getDate();
                },
                L: function () {
                    return +(1 === new Date(c.Y(), 1, 29).getMonth());
                },
                o: function () {
                    var e = c.n(),
                        t = c.W();
                    return c.Y() + (12 === e && t < 9 ? -1 : 1 === e && t > 9);
                },
                Y: function () {
                    return r.getFullYear();
                },
                y: function () {
                    return String(c.Y()).slice(-2);
                },
                a: function () {
                    return r.getHours() > 11 ? "pm" : "am";
                },
                A: function () {
                    return c.a().toUpperCase();
                },
                B: function () {
                    var e = r.getTime() / 1e3,
                        t = (e % 86400) + 3600;
                    t < 0 && (t += 86400);
                    var n = (t / 86.4) % 1e3;
                    return e < 0 ? Math.ceil(n) : Math.floor(n);
                },
                g: function () {
                    return c.G() % 12 || 12;
                },
                G: function () {
                    return r.getHours();
                },
                h: function () {
                    return i.pad(c.g(), 2, "0");
                },
                H: function () {
                    return i.pad(c.G(), 2, "0");
                },
                i: function () {
                    return i.pad(r.getMinutes(), 2, "0");
                },
                s: function () {
                    return i.pad(r.getSeconds(), 2, "0");
                },
                u: function () {
                    return i.pad(1e3 * r.getMilliseconds(), 6, "0");
                },
                O: function () {
                    var e = r.getTimezoneOffset(),
                        t = Math.abs(e);
                    return (e > 0 ? "-" : "+") + i.pad(100 * Math.floor(t / 60) + (t % 60), 4, "0");
                },
                P: function () {
                    var e = c.O();
                    return e.substr(0, 3) + ":" + e.substr(3, 2);
                },
                Z: function () {
                    return -(60 * r.getTimezoneOffset());
                },
                c: function () {
                    return "Y-m-d\\TH:i:sP".replace(n, s);
                },
                r: function () {
                    return "D, d M Y H:i:s O".replace(n, s);
                },
                U: function () {
                    return r.getTime() / 1e3 || 0;
                },
            };
        return e.replace(n, s);
    }),
        (i.numberFormat = function (e, t, r, n) {
            (t = isNaN(t) ? 2 : Math.abs(t)), (r = void 0 === r ? "." : r), (n = void 0 === n ? "," : n);
            var i = e < 0 ? "-" : "",
                o = parseInt((e = Math.abs(+e || 0)).toFixed(t), 10) + "",
                a = o.length > 3 ? o.length % 3 : 0;
            return (
                i +
                (a ? o.substr(0, a) + n : "") +
                o.substr(a).replace(/(\d{3})(?=\d)/g, "$1" + n) +
                (t
                    ? r +
                      Math.abs(e - o)
                          .toFixed(t)
                          .slice(2)
                    : "")
            );
        }),
        (i.naturalDay = function (e, t) {
            (e = void 0 === e ? i.time() : e), (t = void 0 === t ? "Y-m-d" : t);
            var r = new Date(),
                n = new Date(r.getFullYear(), r.getMonth(), r.getDate()).getTime() / 1e3;
            return e < n && e >= n - 86400
                ? "yesterday"
                : e >= n && e < n + 86400
                  ? "today"
                  : e >= n + 86400 && e < n + 172800
                    ? "tomorrow"
                    : i.date(t, e);
        }),
        (i.relativeTime = function (e) {
            e = void 0 === e ? i.time() : e;
            var t = i.time(),
                r = t - e;
            if (r < 2 && r > -2) return (r >= 0 ? "just " : "") + "now";
            if (r < 60 && r > -60) return r >= 0 ? Math.floor(r) + " seconds ago" : "in " + Math.floor(-r) + " seconds";
            if (r < 120 && r > -120) return r >= 0 ? "about a minute ago" : "in about a minute";
            if (r < 3600 && r > -3600)
                return r >= 0 ? Math.floor(r / 60) + " minutes ago" : "in " + Math.floor(-r / 60) + " minutes";
            if (r < 7200 && r > -7200) return r >= 0 ? "about an hour ago" : "in about an hour";
            if (r < 86400 && r > -86400)
                return r >= 0 ? Math.floor(r / 3600) + " hours ago" : "in " + Math.floor(-r / 3600) + " hours";
            if (r < 172800 && r > -172800) return r >= 0 ? "1 day ago" : "in 1 day";
            if (r < 2505600 && r > -2505600)
                return r >= 0 ? Math.floor(r / 86400) + " days ago" : "in " + Math.floor(-r / 86400) + " days";
            if (r < 5184e3 && r > -5184e3) return r >= 0 ? "about a month ago" : "in about a month";
            var n = parseInt(i.date("Y", t), 10),
                o = parseInt(i.date("Y", e), 10),
                a = 12 * n + parseInt(i.date("n", t), 10) - (12 * o + parseInt(i.date("n", e), 10));
            if (a < 12 && a > -12) return a >= 0 ? a + " months ago" : "in " + -a + " months";
            var s = n - o;
            return s < 2 && s > -2
                ? s >= 0
                    ? "a year ago"
                    : "in a year"
                : s >= 0
                  ? s + " years ago"
                  : "in " + -s + " years";
        }),
        (i.ordinal = function (e) {
            var t = (e = isNaN((e = parseInt(e, 10))) ? 0 : e) < 0 ? "-" : "",
                r = (e = Math.abs(e)) % 100;
            return t + e + (r > 4 && r < 21 ? "th" : { 1: "st", 2: "nd", 3: "rd" }[e % 10] || "th");
        }),
        (i.filesize = function (e, t, r, n, o, a) {
            return ((t = void 0 === t ? 1024 : t), e <= 0)
                ? "0 bytes"
                : (e < t && void 0 === r && (r = 0),
                  void 0 === a && (a = " "),
                  i.intword(e, ["bytes", "KB", "MB", "GB", "TB", "PB"], t, r, n, o, a));
        }),
        (i.intword = function (e, t, r, n, o, a, s) {
            (u = (t = t || ["", "K", "M", "B", "T"]).length - 1),
                (r = r || 1e3),
                (n = isNaN(n) ? 2 : Math.abs(n)),
                (o = o || "."),
                (a = a || ","),
                (s = s || "");
            for (var l, u, c = 0; c < t.length; c++)
                if (e < Math.pow(r, c + 1)) {
                    u = c;
                    break;
                }
            l = e / Math.pow(r, u);
            var f = t[u] ? s + t[u] : "";
            return i.numberFormat(l, n, o, a) + f;
        }),
        (i.linebreaks = function (e) {
            return (
                "<p>" +
                (e = (e = (e = (e = (e = e.replace(/^([\n|\r]*)/, "")).replace(/([\n|\r]*)$/, "")).replace(
                    /(\r\n|\n|\r)/g,
                    "\n",
                )).replace(/(\n{2,})/g, "</p><p>")).replace(/\n/g, "<br />")) +
                "</p>"
            );
        }),
        (i.nl2br = function (e) {
            return e.replace(/(\r\n|\n|\r)/g, "<br />");
        }),
        (i.truncatechars = function (e, t) {
            return e.length <= t ? e : e.substr(0, t) + "\u2026";
        }),
        (i.truncatewords = function (e, t) {
            var r = e.split(" ");
            return r.length < t ? e : r.slice(0, t).join(" ") + "\u2026";
        });
}).call(this);
