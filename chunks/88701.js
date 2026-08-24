let n = r(177335),
    i = r(601861),
    o = r(800670),
    a = r(569671),
    s = r(596641),
    l = r(738018);
e.exports = (e, t, r, u) => {
    switch (t) {
        case "===":
            return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), e === r;
        case "!==":
            return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), e !== r;
        case "":
        case "=":
        case "==":
            return n(e, r, u);
        case "!=":
            return i(e, r, u);
        case ">":
            return o(e, r, u);
        case ">=":
            return a(e, r, u);
        case "<":
            return s(e, r, u);
        case "<=":
            return l(e, r, u);
        default:
            throw TypeError(`Invalid operator: ${t}`);
    }
};
