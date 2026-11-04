((t.repeatedTimeunitPattern = function (e, t, r = "\\s{0,5},?\\s{0,5}") {
    let n = t.replace(/\((?!\?)/g, "(?:");
    return `${e}${n}(?:${r}${n}){0,10}`;
}),
    (t.matchAnyPattern = function (e) {
        let t = (function (e) {
            return e instanceof Array ? [...e] : e instanceof Map ? Array.from(e.keys()) : Object.keys(e);
        })(e)
            .sort((e, t) => t.length - e.length)
            .join("|")
            .replace(/\./g, "\\.");
        return `(?:${t})`;
    }));
