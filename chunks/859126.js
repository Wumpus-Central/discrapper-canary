n.d(t, { Z: () => i });
var r = n(19467);
class i extends r.w {
    constructor() {
        super();
    }
    isValid(e, t) {
        let n = t.text.trim();
        return (
            n === e.text.trim() ||
            ("may" !== n.toLowerCase() ||
            e.text
                .substring(0, t.index)
                .trim()
                .match(/\b(in)$/i)
                ? !n.toLowerCase().endsWith("the second") ||
                  (e.text.substring(t.index + t.text.length).trim().length > 0 &&
                      e.debug(() => {
                          console.log(`Removing unlikely result: ${t}`);
                      }),
                  !1)
                : (e.debug(() => {
                      console.log(`Removing unlikely result: ${t}`);
                  }),
                  !1))
        );
    }
}
