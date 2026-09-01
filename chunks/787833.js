Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(535490),
    a = r(855616),
    i = RegExp("(?:\\(|\\\uFF08)(?<weekday>" + Object.keys(n.WEEKDAY_OFFSET).join("|") + ")(?:\\)|\\\uFF09)", "i");
t.default = class {
    pattern() {
        return i;
    }
    extract(e, t) {
        let r = t.groups.weekday,
            i = n.WEEKDAY_OFFSET[r];
        return void 0 === i ? null : (0, a.createParsingComponentsAtWeekday)(e.reference, i);
    }
};
