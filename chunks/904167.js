r.d(t, { A: () => s });
var n = r(530560);
class s extends n.d {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    isValid(e, t) {
        return t.text.replace(" ", "").match(/^\d*(\.\d*)?$/)
            ? (e.debug(() => {
                  console.log(`Removing unlikely result '${t.text}'`);
              }),
              !1)
            : t.start.isValidDate()
              ? t.end && !t.end.isValidDate()
                  ? (e.debug(() => {
                        console.log(`Removing invalid result: ${t} (${t.end})`);
                    }),
                    !1)
                  : !this.strictMode || this.isStrictModeValid(e, t)
              : (e.debug(() => {
                    console.log(`Removing invalid result: ${t} (${t.start})`);
                }),
                !1);
    }
    isStrictModeValid(e, t) {
        return (
            !t.start.isOnlyWeekdayComponent() ||
            (e.debug(() => {
                console.log(`(Strict) Removing weekday only component: ${t} (${t.end})`);
            }),
            !1)
        );
    }
}
