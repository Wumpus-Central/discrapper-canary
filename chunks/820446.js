var n =
    (this && this.__importDefault) ||
    function (e) {
        return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.strict =
        t.casual =
        t.Weekday =
        t.Meridiem =
        t.ReferenceWithTimezone =
        t.ParsingComponents =
        t.ParsingResult =
        t.Chrono =
            void 0),
    (t.parse = function (e, r, n) {
        return t.casual.parse(e, r, n);
    }),
    (t.parseDate = function (e, r, n) {
        return t.casual.parseDate(e, r, n);
    }),
    (t.createCasualConfiguration = y),
    (t.createConfiguration = T);
let a = r(550550),
    i = r(329454);
Object.defineProperty(t, "Chrono", {
    enumerable: !0,
    get: function () {
        return i.Chrono;
    },
});
let s = r(115835);
Object.defineProperty(t, "ParsingResult", {
    enumerable: !0,
    get: function () {
        return s.ParsingResult;
    },
}),
    Object.defineProperty(t, "ParsingComponents", {
        enumerable: !0,
        get: function () {
            return s.ParsingComponents;
        },
    }),
    Object.defineProperty(t, "ReferenceWithTimezone", {
        enumerable: !0,
        get: function () {
            return s.ReferenceWithTimezone;
        },
    });
let o = r(115004);
Object.defineProperty(t, "Meridiem", {
    enumerable: !0,
    get: function () {
        return o.Meridiem;
    },
}),
    Object.defineProperty(t, "Weekday", {
        enumerable: !0,
        get: function () {
            return o.Weekday;
        },
    });
let u = n(r(629929)),
    l = n(r(752960)),
    d = n(r(261053)),
    c = n(r(589807)),
    m = n(r(422163)),
    f = n(r(353484)),
    g = n(r(2167)),
    h = n(r(365118)),
    p = n(r(842205));
function y(e = !0) {
    let t = T(!1, e);
    return t.parsers.push(new g.default()), t.parsers.push(new h.default()), t;
}
function T(e = !0, t = !0) {
    return (0, a.includeCommonConfiguration)(
        {
            parsers: [new u.default(t), new l.default(), new d.default(), new f.default(), new p.default()],
            refiners: [new c.default(), new m.default()],
        },
        e,
    );
}
(t.casual = new i.Chrono(y())), (t.strict = new i.Chrono(T(!0)));
