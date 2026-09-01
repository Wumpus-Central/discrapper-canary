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
    (t.createCasualConfiguration = P),
    (t.createConfiguration = R);
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
    l = n(r(886217)),
    d = n(r(229847)),
    c = n(r(363170)),
    m = n(r(383263)),
    f = n(r(675807)),
    g = n(r(863267)),
    h = n(r(671021)),
    p = n(r(418759)),
    y = n(r(272930)),
    T = n(r(546624)),
    _ = n(r(899587));
function P(e = !0) {
    let t = R(!1, e);
    return (
        t.parsers.unshift(new p.default()), t.parsers.unshift(new h.default()), t.parsers.unshift(new T.default()), t
    );
}
function R(e = !0, t = !0) {
    return (0, a.includeCommonConfiguration)(
        {
            parsers: [
                new l.default(),
                new u.default(t),
                new d.default(),
                new m.default(),
                new y.default(),
                new c.default(),
                new _.default(),
            ],
            refiners: [new f.default(), new g.default()],
        },
        e,
    );
}
(t.casual = new i.Chrono(P())), (t.strict = new i.Chrono(R(!0)));
