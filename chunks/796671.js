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
    (t.createCasualConfiguration = T),
    (t.createConfiguration = _);
let a = n(r(882202)),
    i = n(r(720130)),
    s = n(r(542030)),
    o = n(r(17827)),
    u = n(r(619959)),
    l = n(r(587184)),
    d = n(r(486636)),
    c = r(329454);
Object.defineProperty(t, "Chrono", {
    enumerable: !0,
    get: function () {
        return c.Chrono;
    },
});
let m = r(115835);
Object.defineProperty(t, "ParsingResult", {
    enumerable: !0,
    get: function () {
        return m.ParsingResult;
    },
}),
    Object.defineProperty(t, "ParsingComponents", {
        enumerable: !0,
        get: function () {
            return m.ParsingComponents;
        },
    }),
    Object.defineProperty(t, "ReferenceWithTimezone", {
        enumerable: !0,
        get: function () {
            return m.ReferenceWithTimezone;
        },
    });
let f = r(115004);
Object.defineProperty(t, "Meridiem", {
    enumerable: !0,
    get: function () {
        return f.Meridiem;
    },
}),
    Object.defineProperty(t, "Weekday", {
        enumerable: !0,
        get: function () {
            return f.Weekday;
        },
    });
let g = n(r(169728)),
    h = n(r(787833)),
    p = r(550550),
    y = n(r(6310));
function T() {
    let e = _(!1);
    return e.parsers.unshift(new s.default()), e;
}
function _(e = !0) {
    let t = (0, p.includeCommonConfiguration)(
        {
            parsers: [new a.default(), new o.default(), new h.default(), new u.default(), new l.default()],
            refiners: [new g.default(), new d.default(), new i.default()],
        },
        e,
    );
    return (t.refiners = t.refiners.filter((e) => !(e instanceof y.default))), t;
}
(t.casual = new c.Chrono(T())), (t.strict = new c.Chrono(_(!0)));
