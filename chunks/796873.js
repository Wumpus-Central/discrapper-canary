(function () {
    var n = this,
        r = n.humanize,
        i = {};
    e.exports && (t = e.exports = i),
        (t.humanize = i),
        (i.noConflict = function () {
            return (n.humanize = r), this;
        }),
        (i.pad = function (e, t, n, r) {
            if (
                ((e += ""),
                n ? n.length > 1 && (n = n.charAt(0)) : (n = " "),
                "right" == (r = void 0 === r ? "left" : "right"))
            )
                for (; e.length < t; ) e += n;
            else for (; e.length < t; ) e = n + e;
            return e;
        }),
        (i.time = function () {
            return new Date().getTime() / 1e3;
        });
    var s = [0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
        a = [0, 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    (i.date = function (e, t) {
        var n = void 0 === t ? new Date() : new Date(t instanceof Date ? t : 1e3 * t),
            r = /\\?([a-z])/gi,
            o = function (e, t) {
                return d[e] ? d[e]() : t;
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
            d = {
                d: function () {
                    return i.pad(d.j(), 2, "0");
                },
                D: function () {
                    return d.l().slice(0, 3);
                },
                j: function () {
                    return n.getDate();
                },
                l: function () {
                    return l[d.w()];
                },
                N: function () {
                    return d.w() || 7;
                },
                S: function () {
                    var e = d.j();
                    return e > 4 && e < 21 ? "th" : { 1: "st", 2: "nd", 3: "rd" }[e % 10] || "th";
                },
                w: function () {
                    return n.getDay();
                },
                z: function () {
                    return (d.L() ? a[d.n()] : s[d.n()]) + d.j() - 1;
                },
                W: function () {
                    var e = d.z() - d.N() + 1.5;
                    return i.pad(1 + Math.floor(Math.abs(e) / 7) + +(e % 7 > 3.5), 2, "0");
                },
                F: function () {
                    return u[n.getMonth()];
                },
                m: function () {
                    return i.pad(d.n(), 2, "0");
                },
                M: function () {
                    return d.F().slice(0, 3);
                },
                n: function () {
                    return n.getMonth() + 1;
                },
                t: function () {
                    return new Date(d.Y(), d.n(), 0).getDate();
                },
                L: function () {
                    return +(1 === new Date(d.Y(), 1, 29).getMonth());
                },
                o: function () {
                    var e = d.n(),
                        t = d.W();
                    return d.Y() + (12 === e && t < 9 ? -1 : 1 === e && t > 9);
                },
                Y: function () {
                    return n.getFullYear();
                },
                y: function () {
                    return String(d.Y()).slice(-2);
                },
                a: function () {
                    return n.getHours() > 11 ? "pm" : "am";
                },
                A: function () {
                    return d.a().toUpperCase();
                },
                B: function () {
                    var e = n.getTime() / 1e3,
                        t = (e % 86400) + 3600;
                    t < 0 && (t += 86400);
                    var r = (t / 86.4) % 1e3;
                    return e < 0 ? Math.ceil(r) : Math.floor(r);
                },
                g: function () {
                    return d.G() % 12 || 12;
                },
                G: function () {
                    return n.getHours();
                },
                h: function () {
                    return i.pad(d.g(), 2, "0");
                },
                H: function () {
                    return i.pad(d.G(), 2, "0");
                },
                i: function () {
                    return i.pad(n.getMinutes(), 2, "0");
                },
                s: function () {
                    return i.pad(n.getSeconds(), 2, "0");
                },
                u: function () {
                    return i.pad(1e3 * n.getMilliseconds(), 6, "0");
                },
                O: function () {
                    var e = n.getTimezoneOffset(),
                        t = Math.abs(e);
                    return (e > 0 ? "-" : "+") + i.pad(100 * Math.floor(t / 60) + (t % 60), 4, "0");
                },
                P: function () {
                    var e = d.O();
                    return e.substr(0, 3) + ":" + e.substr(3, 2);
                },
                Z: function () {
                    return -(60 * n.getTimezoneOffset());
                },
                c: function () {
                    return "Y-m-d\\TH:i:sP".replace(r, o);
                },
                r: function () {
                    return "D, d M Y H:i:s O".replace(r, o);
                },
                U: function () {
                    return n.getTime() / 1e3 || 0;
                },
            };
        return e.replace(r, o);
    }),
        (i.numberFormat = function (e, t, n, r) {
            (t = isNaN(t) ? 2 : Math.abs(t)), (n = void 0 === n ? "." : n), (r = void 0 === r ? "," : r);
            var i = e < 0 ? "-" : "",
                s = parseInt((e = Math.abs(+e || 0)).toFixed(t), 10) + "",
                a = s.length > 3 ? s.length % 3 : 0;
            return (
                i +
                (a ? s.substr(0, a) + r : "") +
                s.substr(a).replace(/(\d{3})(?=\d)/g, "$1" + r) +
                (t
                    ? n +
                      Math.abs(e - s)
                          .toFixed(t)
                          .slice(2)
                    : "")
            );
        }),
        (i.naturalDay = function (e, t) {
            (e = void 0 === e ? i.time() : e), (t = void 0 === t ? "Y-m-d" : t);
            var n = new Date(),
                r = new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime() / 1e3;
            return e < r && e >= r - 86400
                ? "yesterday"
                : e >= r && e < r + 86400
                  ? "today"
                  : e >= r + 86400 && e < r + 172800
                    ? "tomorrow"
                    : i.date(t, e);
        }),
        (i.relativeTime = function (e) {
            e = void 0 === e ? i.time() : e;
            var t = i.time(),
                n = t - e;
            if (n < 2 && n > -2) return (n >= 0 ? "just " : "") + "now";
            if (n < 60 && n > -60) return n >= 0 ? Math.floor(n) + " seconds ago" : "in " + Math.floor(-n) + " seconds";
            if (n < 120 && n > -120) return n >= 0 ? "about a minute ago" : "in about a minute";
            if (n < 3600 && n > -3600)
                return n >= 0 ? Math.floor(n / 60) + " minutes ago" : "in " + Math.floor(-n / 60) + " minutes";
            if (n < 7200 && n > -7200) return n >= 0 ? "about an hour ago" : "in about an hour";
            if (n < 86400 && n > -86400)
                return n >= 0 ? Math.floor(n / 3600) + " hours ago" : "in " + Math.floor(-n / 3600) + " hours";
            if (n < 172800 && n > -172800) return n >= 0 ? "1 day ago" : "in 1 day";
            if (n < 2505600 && n > -2505600)
                return n >= 0 ? Math.floor(n / 86400) + " days ago" : "in " + Math.floor(-n / 86400) + " days";
            if (n < 5184e3 && n > -5184e3) return n >= 0 ? "about a month ago" : "in about a month";
            var r = parseInt(i.date("Y", t), 10),
                s = parseInt(i.date("Y", e), 10),
                a = 12 * r + parseInt(i.date("n", t), 10) - (12 * s + parseInt(i.date("n", e), 10));
            if (a < 12 && a > -12) return a >= 0 ? a + " months ago" : "in " + -a + " months";
            var o = r - s;
            return o < 2 && o > -2
                ? o >= 0
                    ? "a year ago"
                    : "in a year"
                : o >= 0
                  ? o + " years ago"
                  : "in " + -o + " years";
        }),
        (i.ordinal = function (e) {
            var t = (e = isNaN((e = parseInt(e, 10))) ? 0 : e) < 0 ? "-" : "",
                n = (e = Math.abs(e)) % 100;
            return t + e + (n > 4 && n < 21 ? "th" : { 1: "st", 2: "nd", 3: "rd" }[e % 10] || "th");
        }),
        (i.filesize = function (e, t, n, r, s, a) {
            return ((t = void 0 === t ? 1024 : t), e <= 0)
                ? "0 bytes"
                : (e < t && void 0 === n && (n = 0),
                  void 0 === a && (a = " "),
                  i.intword(e, ["bytes", "KB", "MB", "GB", "TB", "PB"], t, n, r, s, a));
        }),
        (i.intword = function (e, t, n, r, s, a, o) {
            (u = (t = t || ["", "K", "M", "B", "T"]).length - 1),
                (n = n || 1e3),
                (r = isNaN(r) ? 2 : Math.abs(r)),
                (s = s || "."),
                (a = a || ","),
                (o = o || "");
            for (var l, u, d = 0; d < t.length; d++)
                if (e < Math.pow(n, d + 1)) {
                    u = d;
                    break;
                }
            l = e / Math.pow(n, u);
            var c = t[u] ? o + t[u] : "";
            return i.numberFormat(l, r, s, a) + c;
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
            return e.length <= t ? e : e.substr(0, t) + "…";
        }),
        (i.truncatewords = function (e, t) {
            var n = e.split(" ");
            return n.length < t ? e : n.slice(0, t).join(" ") + "…";
        });
}).call(this);
