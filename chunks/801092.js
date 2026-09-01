Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.WEEKDAY_OFFSET = t.NUMBER = void 0),
    (t.zhStringToNumber = function (e) {
        let r = 0;
        for (let n = 0; n < e.length; n++) {
            let a = e[n];
            "\u5341" === a ? (r = 0 === r ? t.NUMBER[a] : r * t.NUMBER[a]) : (r += t.NUMBER[a]);
        }
        return r;
    }),
    (t.zhStringToYear = function (e) {
        let r = "";
        for (let n = 0; n < e.length; n++) {
            let a = e[n];
            r += t.NUMBER[a];
        }
        return parseInt(r);
    }),
    (t.NUMBER = {
        \u96F6: 0,
        \u3007: 0,
        \u4E00: 1,
        \u4E8C: 2,
        \u4E24: 2,
        \u4E09: 3,
        \u56DB: 4,
        \u4E94: 5,
        \u516D: 6,
        \u4E03: 7,
        \u516B: 8,
        \u4E5D: 9,
        \u5341: 10,
    }),
    (t.WEEKDAY_OFFSET = { \u5929: 0, \u65E5: 0, \u4E00: 1, \u4E8C: 2, \u4E09: 3, \u56DB: 4, \u4E94: 5, \u516D: 6 });
