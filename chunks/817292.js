(t.d(n, { q: () => u }), t(321073));
var l = t(448767),
    r = t(886737),
    a = t(794215);
function u(e, n) {
    let { hideSingleLinkContent: t, redactRestrictedContent: r = !1 } = n,
        a = (function (e) {
            let [n] = e;
            return 1 !== e.length || "paragraph" !== n.type ? l.tq : (0, l.dn)(n.value, i);
        })(e);
    if (t && (0, l.iz)(a)) return [];
    let u = (function (e, n) {
        let t = [],
            r = !1;
        for (let a of e) {
            if ("paragraph" !== a.type) {
                t.push(a);
                continue;
            }
            let e = a.value.filter((e) => {
                let t = i(e) ? e.value.url : null;
                return null == t || !(0, l.c_)(t, n);
            });
            if (e.length === a.value.length) {
                t.push(a);
                continue;
            }
            ((r = !0), e.length > 0 && t.push({ type: "paragraph", value: e }));
        }
        return r ? t : e;
    })(e, { onlyLinkContent: a.onlyLinks, stripGameServerShareLinks: !0 });
    return r ? u.map(s) : u;
}
function i(e) {
    return "link" === e.type;
}
function s(e) {
    switch (e.type) {
        case "paragraph":
            return { ...e, value: c(e.value) };
        case "heading":
            return { ...e, value: { ...e.value, content: c(e.value.content) } };
        case "small":
            return { ...e, value: { content: c(e.value.content) } };
        case "quote":
            return { ...e, value: e.value.map(s) };
        case "list":
            return { ...e, value: { ...e.value, items: e.value.items.map((e) => ({ content: e.content.map(s) })) } };
        default:
            return e;
    }
}
function c(e) {
    return e.map(o);
}
function o(e) {
    switch (e.type) {
        case "link":
            if ((null == e.value.text || 0 === e.value.text.length) && null != (0, a.c)(e.value.url)) return e;
            return { type: "code", value: e.value.url };
        case "emoji":
            return "custom" === e.value.type ? { type: "text", value: (0, r.u)(e.value.value.name) } : e;
        case "bold":
        case "italic":
        case "underline":
        case "strikethrough":
            return { ...e, value: c(e.value) };
        case "spoiler":
            return { ...e, value: { ...e.value, content: c(e.value.content) } };
        default:
            return e;
    }
}
